const path = require('path');
const fs = require('fs');

// 定义一个函数来获取当前时间，格式为YYYYMMDDHHmm
function getCurrentDate() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hour = String(now.getHours()).padStart(2, '0');
    const minute = String(now.getMinutes()).padStart(2, '0');
    return `${year}${month}${day}${hour}${minute}`;
}

// 文件路径
const filePath = path.join(__dirname, 'Sku_ht.js');
// 异步方式修改文件前几个字符
async function modifyFileHeader(filePath, newFirstLine) {
    try {
        const fileContent = await fs.promises.readFile(filePath, 'utf-8');
        const lines = fileContent.split('\n');
        if (lines.length > 0) {
            console.log(`将第一行 ${lines[0]}\n修改为   ${newFirstLine}`);
            lines[0] = newFirstLine;
        }
        const modifiedContent = lines.join('\n');
        await fs.promises.writeFile(filePath, modifiedContent, 'utf-8');
        console.log('文件修改成功\n');
    } catch (err) {
        console.error('文件操作失败:', err + '\n');
    }
}

// 调用函数
(async() => {
    try {
        const currentDate = getCurrentDate();
        console.log(`当前时间: ${currentDate}`);

        // 调用函数
        modifyFileHeader(filePath, 'var ban_ben_s = "' + currentDate + '";');
    } catch (err) {
        console.error(err);
    }
})();