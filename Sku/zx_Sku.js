//判断是否在这里加载
if (localStorage.Sku_zxms == 'false') {
    jia_zai_js();
} else {
    jia_zai_js();
}

function jia_zai_js() {
    // 要加载的脚本列表（按执行顺序排列）
    const scriptsToLoad = [
        'Sku1.js',
        'Sku2.js',
        'Sku3.js',
        'Sku4.js',
        'Sku5.js',
        'Sku6.js',
        'Sku.js'
    ];

    // 顺序加载脚本函数
    function loadScriptsSequentially(scripts, index = 0) {
        if (index >= scripts.length) {
            console.log('所有脚本已按顺序加载完成');
            return;
        }

        const script = document.createElement('script');
        script.src = scripts[index];

        // 移除defer属性，确保按顺序执行
        script.defer = false;
        script.async = false;

        // 当前脚本加载完成后，加载下一个
        script.onload = () => {
            console.log(`脚本 ${scripts[index]} 加载完成`);
            loadScriptsSequentially(scripts, index + 1);
        };

        // 处理加载错误
        script.onerror = () => {
            console.error(`脚本 ${scripts[index]} 加载失败`);
            // 可以选择继续加载下一个，或者停止
            loadScriptsSequentially(scripts, index + 1);
        };

        document.head.appendChild(script);
    }

    // 开始顺序加载脚本
    loadScriptsSequentially(scriptsToLoad);
}