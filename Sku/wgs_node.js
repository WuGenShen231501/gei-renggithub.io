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



// 使用CORS中间件，允许跨域请求
app.use(cors()); // 允许跨域

// 定义根路径GET请求处理
app.get('/', function(req, res) {
    // 打印请求URL到控制台
    console.log(`检测到${req.url}请求`);
    // 返回欢迎信息
    res.send('欢迎使用!');
});



// 定义带参数的GET请求处理，参数为wgs
app.get('/:wgs', function(req, res) { //wgs参数
    // 打印请求URL到控制台
    console.log(`检测到${req.url}请求`);

    // 如果请求参数wgs等于'mrrd'
    if (req.params.wgs == 'mrrd') { // 新闻爬取
        // 设置响应头，指定内容类型为HTML，编码为utf-8
        res.setHeader('Content-Type', 'text/html;charset=utf-8');
        // 引入axios模块，用于发送HTTP请求
        const axios = require('axios');
        // 引入cheerio模块，用于解析HTML
        const cheerio = require('cheerio');
        // 抓取网页数据
        async function fetchData() {
            try {
                // 目标 URL
                var url;
                // 如果存在查询参数p，则使用带分页的URL
                if (req.query.p) {
                    url = 'https://tophub.today/c/news?&p=' + req.query.p;
                } else {
                    // 否则使用默认URL
                    url = 'https://tophub.today/';
                }
                // 发送 GET 请求获取网页数据
                const { data } = await axios.get(url);
                // 使用 Cheerio 加载 HTML，便于解析
                const $ = cheerio.load(data);
                // 新增：统计每个.cc-cd内的.t数量 ▼▼▼
                const counts = $('.cc-cd').map((i, el) => {
                    // 返回每个.cc-cd元素内.t元素的数量
                    return $(el).find('.t').length;
                }).get();
                // 修改为通过map获取数组
                // 获取所有.cc-cd-lb span 元素的文本内容，转换为数组
                const rd = $('.cc-cd-lb span').map((i, el) => $(el).text().replace(/\n/g, '').replace(/\t/g, '').trim()).get();
                console.log(rd);
                // 获取所有.t 元素的文本内容，转换为数组
                const rd2 = $('.t').map((i, el) => $(el).text().replace(/\n/g, '').replace(/\t/g, '').trim()).get();
                // 添加HTML结构包装
                // 发送响应，包含三个数组：分类列表、内容列表和每个分类的内容数量
                res.send([rd, rd2, counts]); // 删除模板字符串自带的换行
            } catch (error) {
                // 打印抓取网页时的错误信息
                console.error('抓取网页时出错:', error.message);
                // 返回500错误和错误信息
                res.status(500).send('数据获取失败'); // 添加错误响应
            }
        }
        // 调用fetchData函数，开始抓取数据
        fetchData();
    } else if (req.params.wgs == 'website-info') { //网站信息爬取
        // 处理网站信息爬取请求
        const axios = require('axios');
        const url = req.query.url;
        if (!url) {
            res.status(400).send({ error: '缺少url参数' });
            return;
        }
        // 验证URL格式
        let validatedUrl = url;
        if (!validatedUrl.startsWith('http://') && !validatedUrl.startsWith('https://')) {
            validatedUrl = 'https://' + validatedUrl;
        }
        // 发送请求到目标网站
        axios.get(validatedUrl, {
                headers: {
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
                },
                timeout: 10000
            })
            .then(response => {
                const html = response.data;
                const result = parseWebsiteInfo(html, validatedUrl);

                if (result.title === 'Loading...' || result.title === 'loading...' || result.title === '') {
                    res.status(503).send({
                        error: '网站正在加载中，请稍后重试',
                        details: '该网站使用JavaScript动态加载内容，建议使用浏览器访问'
                    });
                } else {
                    res.send(result);
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
        // 其他情况，返回欢迎信息
        res.send('欢迎使用!');
    }
});

// 解析网站信息函数
function parseWebsiteInfo(html, baseUrl) {
    // 解析标题
    const titleMatch = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
    const title = titleMatch ? titleMatch[1].trim() : '未找到标题';
    // 解析图标
    let favicon = '';
    const faviconMatch = html.match(/<link[^>]*rel=["']?icon["']?[^>]*href=["']([^"']+)["'][^>]*>/i);
    if (faviconMatch) {
        favicon = faviconMatch[1];
    }
    // 如果没有找到，尝试默认路径
    else {
        favicon = '/favicon.ico';
    }
    // 处理相对路径
    if (favicon && !favicon.startsWith('http://') && !favicon.startsWith('https://')) {
        const urlObj = new URL(baseUrl);
        if (favicon.startsWith('/')) {
            favicon = urlObj.origin + favicon;
        } else {
            favicon = urlObj.origin + '/' + favicon;
        }
    }
    return { title, favicon };
}

//photo处理
function photoHandle() {
    // 处理文件上传的POST路由
    app.post('/Sku-Photo', multer({
        storage: multer.diskStorage({
            destination: (req, file, cb) => {
                const uploadPath = path.join(__dirname, req.query.path || 'photo');
                // 确保目录存在
                if (!fs.existsSync(uploadPath)) {
                    fs.mkdirSync(uploadPath, { recursive: true });
                }
                cb(null, uploadPath);
            },
            filename: (req, file, cb) => {
                // 使用原文件名
                cb(null, file.originalname);
            }
        })
    }).single('image'), (req, res) => {
        if (!req.file) {
            return res.status(400).json({ success: false, error: '没有文件被上传' });
        }

        let isDuplicate = false;
        const uploadPath = path.join(__dirname, req.query.path || 'photo');
        const filePath = path.join(uploadPath, req.file.originalname);

        // 检查文件是否存在
        if (fs.existsSync(filePath)) {
            // 如果文件存在，比较文件大小
            const existingFileStats = fs.statSync(filePath);
            if (existingFileStats.size === req.file.size) {
                // 文件大小相同，视为重复文件
                isDuplicate = true;
            }
        }

        // 无论是否重复上传，都返回成功信息
        const relativePath = 'photo/' + req.file.filename; // 生成相对路径
        res.json({
            success: true,
            originalname: req.file.originalname,
            filename: req.file.filename,
            path: relativePath,
            isDuplicate: isDuplicate
        });
    });
}
photoHandle(); // 调用photoHandle函数，注册文件上传功能

//photo删除处理
function photoDeleteHandle() {
    // 解析JSON请求体
    app.use(express.json());

    // 处理删除未使用图片的POST路由
    app.post('/Sku-Photo-Delete', (req, res) => {
        const usedPhotos = req.body.usedPhotos || [];
        const photoDir = path.join(__dirname, 'photo');

        try {
            // 检查photo目录是否存在
            if (!fs.existsSync(photoDir)) {
                return res.json({ success: true, message: 'photo目录不存在，无需删除' });
            }

            // 读取photo目录中的所有文件
            const files = fs.readdirSync(photoDir);
            const deletedFiles = [];

            // 遍历文件，删除未使用的图片
            files.forEach(file => {
                const filePath = path.join(photoDir, file);
                const relativePath = 'photo/' + file;

                // 如果文件不在使用列表中，删除它
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
photoDeleteHandle(); // 调用photoDeleteHandle函数，注册图片删除功能

// 配置静态资源服务，将/Sku路径映射到../Sku目录
app.use('/Sku', express.static('../Sku'));

// 监听80端口，启动服务器
app.listen('80', function() {
    // 服务器启动成功后，打印信息到控制台
    console.log('服务器启动成功!');
});