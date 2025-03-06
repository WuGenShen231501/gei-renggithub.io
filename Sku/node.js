const fs = require('fs');
const path = require('path');
// 1.导入 http 模块
const http = require('http');
// 2.创建 web 服务器实例
const server = http.createServer();
// 3.为服务器实例绑定 request 事件，监听客户端的请求
server.on('request', function(req, res) {
    const req_url = req.url;
    var reqnr = '';
    if (req_url == '/') {
        reqnr = 'Sku.html';
    } else {
        reqnr = req_url;
    }
    const asd = path.join(__dirname, reqnr);
    fs.readFile(asd, 'utf-8', function(err, datastr) {
        if (err) {
            console.log('加载失败' + path.join(__dirname, reqnr));
        } else {
            console.log('成功打开' + path.join(__dirname, reqnr));
            res.end(datastr);
        }
    });
});
// 4.启动服务器
server.listen(80, function() {
    console.log('服务器启动成:http://127.0.0.1');
});