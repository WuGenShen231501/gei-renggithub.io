const https = require('https');
const fs = require('fs');
const path = require('path');

/**
 * 更新本地文件内容（从远程URL获取）
 * @param {string} remoteUrl - 远程资源链接
 * @param {string} localFileName - 本地目标文件名（含扩展名）
 */
function updateLocalFile(remoteUrl, localFileName) {
    // 计算本地文件完整路径（基于当前JS文件所在目录）
    const localFilePath = path.join(__dirname, localFileName);

    // 发送HTTP请求获取远程内容
    https.get(remoteUrl, (res) => {
        const chunks = [];

        // 监听数据分块
        res.on('data', (chunk) => {
            chunks.push(chunk);
        });

        // 数据接收完成后写入文件
        res.on('end', () => {
            const content = Buffer.concat(chunks); // 合并分块数据
            fs.writeFile(localFilePath, content, (err) => {
                if (err) {
                    console.error('❌ 文件写入失败:', err.message);
                    return;
                }
                console.log(`✅ 本地文件 《${localFileName}》 已成功更新`);
            });
        });
    }).on('error', (err) => {
        console.error('❌ 网络请求失败:', err.message);
    });
}

// 使用示例（可根据需要保留或删除）
updateLocalFile('https://cdn.jsdelivr.net/npm/jquery/dist/jquery.min.js', '本地jquery.js');
updateLocalFile('https://cdn.jsdelivr.net/npm/marked/lib/marked.umd.min.js', 'Markdown解析器.js');
updateLocalFile('https://cdn.jsdelivr.net/npm/mathjax/es5/tex-mml-chtml.min.js', '数学标记渲染.js');
updateLocalFile('https://cdn.jsdelivr.net/npm/moment/moment.min.js', '农历.js');
updateLocalFile('https://cdn.jsdelivr.net/npm/moment-lunar/moment-lunar.min.js', '农历2.js');
updateLocalFile('https://cdn.jsdelivr.net/npm/pinyin-pro/dist/index.min.js', '汉字拼音表.js');