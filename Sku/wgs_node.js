// 引入Express框架，用于创建Web服务器
const express = require('express');
// 创建Express应用实例
const app = express();
// 引入文件系统模块，用于文件操作
const fs = require('fs');
// 引入CORS中间件，用于处理跨域请求
const cors = require('cors');
// 引入multer模块，用于处理文件上传
const multer = require('multer');
// 引入path模块，用于处理文件路径
const path = require('path');
// 引入crypto模块，用于计算文件哈希值
const crypto = require('crypto');
// 引入WebSocket模块，用于创建WebSocket服务器
const WebSocket = require('ws');

// 使用CORS中间件，允许跨域请求
app.use(cors());

// 定义根路径GET请求处理
app.get('/', function (req, res) {
    console.log(`检测到${req.url}请求`);
    res.send('欢迎使用!');
});

// 定义带参数的GET请求处理，参数为wgs
app.get('/:wgs', function (req, res) {
    console.log(`检测到${req.url}请求`);

    // 如果请求参数wgs等于'mrrd' (新闻爬取)
    if (req.params.wgs == 'mrrd') {
        res.setHeader('Content-Type', 'text/html;charset=utf-8');
        const axios = require('axios');
        const cheerio = require('cheerio');

        async function fetchData() {
            try {
                var url;
                if (req.query.p) {
                    url = 'https://tophub.today/c/news?p=' + req.query.p;
                } else {
                    url = 'https://tophub.today/';
                }

                const { data } = await axios.get(url);
                const $ = cheerio.load(data);

                const counts = $('.cc-cd').map((i, el) => {
                    return $(el).find('.t').length;
                }).get();

                const rd = $('.cc-cd-lb span').map((i, el) => $(el).text().replace(/\n/g, '').replace(/\t/g, '').trim()).get();
                console.log(rd);

                const rd2 = $('.t').map((i, el) => $(el).text().replace(/\n/g, '').replace(/\t/g, '').trim()).get();

                res.send([rd, rd2, counts]);
            } catch (error) {
                console.error('抓取网页时出错:', error.message);
                res.status(500).send('数据获取失败');
            }
        }
        fetchData();

    } else if (req.params.wgs == 'website-info') { // 网站信息爬取 (终极稳定版)
        const axios = require('axios');
        const cheerio = require('cheerio');
        const url = req.query.url;

        if (!url) {
            res.status(400).send({ error: '缺少url参数' });
            return;
        }

        let validatedUrl = url;
        if (!validatedUrl.startsWith('http://') && !validatedUrl.startsWith('https://')) {
            validatedUrl = 'https://' + validatedUrl;
        }

        // 1. 获取网页 HTML
        axios.get(validatedUrl, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
            },
            timeout: 10000
        })
            .then(async (response) => {
                const html = response.data;
                const $ = cheerio.load(html);

                // 2. 解析标题
                const title = $('title').text().trim() || '未找到标题';

                // 3. 解析图标 (使用 cheerio，完美兼容 rel="shortcut icon" 或属性顺序颠倒)
                let favicon = '';
                const iconLink = $('link').filter((i, el) => {
                    const rel = $(el).attr('rel');
                    return rel && rel.toLowerCase().includes('icon');
                }).first();

                if (iconLink.length > 0) {
                    favicon = iconLink.attr('href');
                }

                const urlObj = new URL(validatedUrl);
                const origin = urlObj.origin;

                // 辅助函数：将相对路径转为完整绝对路径
                const resolveUrl = (fav) => {
                    if (!fav) return null;
                    if (fav.startsWith('http://') || fav.startsWith('https://')) return fav;
                    if (fav.startsWith('/')) return origin + fav;
                    return origin + '/' + fav;
                };

                // 辅助函数：轻量级探测图标是否真实存在且为图片 (带伪装头防CDN拦截)
                const isFaviconValid = async (favUrl) => {
                    if (!favUrl) return false;
                    try {
                        const headers = {
                            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
                            'Referer': validatedUrl
                        };

                        // 优先 HEAD 请求
                        let res = await axios.head(favUrl, { timeout: 5000, headers, validateStatus: (s) => s < 500 });

                        // 若被拦截(403/405)或无类型，降级为 GET (stream模式不下载大文件)
                        if (res.status === 405 || res.status === 403 || !res.headers['content-type']) {
                            res = await axios.get(favUrl, { timeout: 5000, responseType: 'stream', headers, validateStatus: (s) => s < 500 });
                        }

                        if (res.status === 200) {
                            const ct = (res.headers['content-type'] || '').toLowerCase();
                            return ct.includes('image') || ct.includes('icon') || ct.includes('svg') || ct.includes('octet-stream');
                        }
                        return false;
                    } catch (e) {
                        return false;
                    }
                };

                let finalFavicon = origin + '/favicon.ico'; // 默认兜底完整路径

                // 策略：优先验证 HTML 中提取的图标
                if (favicon) {
                    const absoluteFavicon = resolveUrl(favicon);
                    if (await isFaviconValid(absoluteFavicon)) {
                        finalFavicon = absoluteFavicon;
                    } else {
                        // 策略2：若提取的无效，尝试根目录
                        const rootFavicon = origin + '/favicon.ico';
                        if (await isFaviconValid(rootFavicon)) {
                            finalFavicon = rootFavicon;
                        }
                    }
                } else {
                    // 没提取到，直接尝试根目录
                    const rootFavicon = origin + '/favicon.ico';
                    if (await isFaviconValid(rootFavicon)) {
                        finalFavicon = rootFavicon;
                    }
                }

                // 4. 校验并返回结果
                if (title === 'Loading...' || title === 'loading...' || title === '未找到标题') {
                    res.status(503).send({
                        error: '网站正在加载中或无法获取标题',
                        details: '该网站可能使用JavaScript动态加载内容或存在严格反爬'
                    });
                } else {
                    res.send({ title, favicon: finalFavicon }); // 确保返回完整路径
                }
            })
            .catch(error => {
                console.error('请求失败:', error.message);
                res.status(500).send({ error: '请求失败', details: error.message });
            });

    } else if (req.params.wgs == 'Sku-Photo') {
        res.status(405).json({ success: false, error: '方法不允许' });
    } else if (req.params.wgs == 'Sku-Photo-Delete') {
        res.status(405).json({ success: false, error: '方法不允许' });
    } else {
        res.send('欢迎使用!');
    }
});

// photo处理
function photoHandle() {
    function calculateHash(buffer) {
        return crypto.createHash('md5').update(buffer).digest('hex');
    }

    function calculateFileHash(filePath) {
        const fileBuffer = fs.readFileSync(filePath);
        return calculateHash(fileBuffer);
    }

    app.post('/Sku-Photo', (req, res) => {
        const uploadPath = path.join(__dirname, req.query.path || 'photo');
        const relativePathPrefix = req.query.path || 'photo';
        const upload = multer().single('image');

        upload(req, res, (err) => {
            if (err) {
                return res.status(500).json({ success: false, error: err.message });
            }
            if (!req.file) {
                return res.status(400).json({ success: false, error: '没有文件被上传' });
            }

            if (!fs.existsSync(uploadPath)) {
                fs.mkdirSync(uploadPath, { recursive: true });
            }

            const originalName = req.file.originalname;
            const originalFilePath = path.join(uploadPath, originalName);
            const newFileSize = req.file.size;
            const newFileHash = calculateHash(req.file.buffer);

            console.log(`[文件上传] 文件名: ${originalName}, 新文件大小: ${newFileSize} 字节, 新文件哈希: ${newFileHash}`);

            if (fs.existsSync(originalFilePath)) {
                const existingFileStats = fs.statSync(originalFilePath);
                const existingFileSize = existingFileStats.size;
                const existingFileHash = calculateFileHash(originalFilePath);

                console.log(`[文件上传] 已存在文件大小: ${existingFileSize} 字节, 已存在文件哈希: ${existingFileHash}`);

                if (existingFileHash === newFileHash) {
                    console.log(`[文件上传] 文件哈希相同，判定为重复文件`);
                    const relativePath = path.join(relativePathPrefix, originalName);
                    res.json({
                        success: true,
                        originalname: originalName,
                        filename: originalName,
                        path: relativePath.replace(/\\/g, '/'),
                        isDuplicate: true,
                        message: '文件已存在，无需重新上传'
                    });
                    return;
                } else {
                    console.log(`[文件上传] 文件哈希不同 (${existingFileHash} vs ${newFileHash})，需要保存为新文件`);
                }
            } else {
                console.log(`[文件上传] 文件不存在，保存新文件`);
            }

            let finalFileName = originalName;
            const ext = path.extname(originalName);
            const baseName = path.basename(originalName, ext);
            let counter = 1;

            while (fs.existsSync(path.join(uploadPath, finalFileName))) {
                finalFileName = `${baseName}${counter}${ext}`;
                counter++;
            }

            const finalFilePath = path.join(uploadPath, finalFileName);
            fs.writeFileSync(finalFilePath, req.file.buffer);

            const relativePath = path.join(relativePathPrefix, finalFileName);
            res.json({
                success: true,
                originalname: originalName,
                filename: finalFileName,
                path: relativePath.replace(/\\/g, '/'),
                isDuplicate: false
            });
        });
    });
}
photoHandle();

// photo删除处理
function photoDeleteHandle() {
    app.use(express.json());

    app.post('/Sku-Photo-Delete', (req, res) => {
        const usedPhotos = req.body.usedPhotos || [];
        const photoDir = path.join(__dirname, 'photo');

        try {
            if (!fs.existsSync(photoDir)) {
                return res.json({ success: true, message: 'photo目录不存在，无需删除' });
            }

            const files = fs.readdirSync(photoDir);
            const deletedFiles = [];

            files.forEach(file => {
                const filePath = path.join(photoDir, file);
                const relativePath = 'photo/' + file;

                if (!usedPhotos.includes(relativePath)) {
                    fs.unlinkSync(filePath);
                    deletedFiles.push(relativePath);
                }
            });

            res.json({
                success: true,
                message: '未使用的图片删除成功',
                deletedFiles: deletedFiles
            });
        } catch (error) {
            console.error('删除图片时出错:', error);
            res.status(500).json({ success: false, error: '删除图片失败' });
        }
    });
}
photoDeleteHandle();

// 配置静态资源服务
app.use('/Sku', express.static('../Sku'));

// 监听80端口，启动服务器
app.listen('80', function () {
    console.log('服务器启动成功!');
});

// ===== WebSocket 单独开 8080 端口 =====
const wss = new WebSocket.Server({ port: 8080 });
const wg_clients = new Map();

wss.on('connection', (wg_wxxy, req) => {
    const id = req.url.slice(1) || crypto.randomUUID().slice(0, 8);
    wg_clients.set(id, wg_wxxy);
    console.log(`[WebSocket] 客户端连接: ${id}`);

    wg_wxxy.on('message', (msg) => {
        try {
            const { target, data } = JSON.parse(msg);
            const peer = wg_clients.get(target);
            if (peer && peer.readyState === WebSocket.OPEN) {
                peer.send(JSON.stringify({ from: id, data }));
            }
        } catch (e) {
            console.error('[WebSocket] 消息解析错误:', e.message);
        }
    });

    wg_wxxy.on('close', () => {
        wg_clients.delete(id);
        console.log(`[WebSocket] 客户端断开: ${id}`);
    });
});