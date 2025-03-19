const path = require('path');
const fs = require('fs');

// 定义一个异步函数来获取文件夹的大小
async function getDirectorySize(dirPath) {
    try {
        const stats = await fs.promises.stat(dirPath);
        if (!stats.isDirectory()) {
            throw new Error(`"${dirPath}" 不是一个文件夹`);
        }
        const entries = await fs.promises.readdir(dirPath, { withFileTypes: true });
        let totalSize = 0;
        for (const entry of entries) {
            const fullPath = path.join(dirPath, entry.name);
            if (entry.isDirectory()) {
                totalSize += await getDirectorySize(fullPath);
            } else {
                const fileStats = await fs.promises.stat(fullPath);
                totalSize += fileStats.size;
            }
        }
        return totalSize;
    } catch (err) {
        console.error(`获取文件夹大小时出错: ${err.message}`);
        throw err;
    }
}

// 文件路径
const filePath = path.join(__dirname, 'Sku_ht.js');
// 异步方式修改文件前几个字符
async function modifyFileHeader(filePath, newFirstLine) {
    try {
        const fileContent = await fs.promises.readFile(filePath, 'utf-8');
        const lines = fileContent.split('\n');
        if (lines.length > 0) {
            console.log(`将第一行 "${lines[0]}"\n  修改为 "${newFirstLine}"`);
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
for (var i = 0; i < 5; i++) {
    setTimeout(() => {
        (async() => {
            const folderPath = '../Sku'; // 替换为你的文件夹路径
            try {
                const sizeInBytes = await getDirectorySize(folderPath);
                console.log(`文件夹总大小: ${sizeInBytes} 字节`);
                console.log(`文件夹总大小: ${(sizeInBytes / (1024 * 1024)).toFixed(2)} MB`);

                // 调用函数
                modifyFileHeader(filePath, 'var ban_ben_s = "' + sizeInBytes + '";');
            } catch (err) {
                console.error(err);
            }
        })();
    }, i * 1000); // 每次延迟 i 秒
}