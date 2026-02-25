// 可文字选中
var AI_zj = document.querySelector('.AI_zj');
AI_zj.addEventListener('selectstart', function(e) {
    e.stopPropagation();
});

// 匹配浏览器高度
nrmaxs4 = document.querySelector('.nrmaxs4');
nrmaxs4.style.marginTop = (window.innerHeight + 56 - 523 - 80) / 2 + 'px';
window.addEventListener('resize', function() {
    nrmaxs4 = document.querySelector('.nrmaxs4');
    nrmaxs4.style.marginTop = (window.innerHeight + 56 - 523 - 80) / 2 + 'px';
});

// 滚动条
Sku_gundontiao('.AI_zj', '.AI_gundontiao_max', '.AI_gundontiao_min');
Sku_gundontiao('.AI_mods_max_hd', '.AI_mods_gundontiao_max', '.AI_mods_gundontiao_min');
var AI_zj = document.querySelector('.AI_zj');
AI_zj.addEventListener('wheel', function(e) {
    zdxszxf = 0;
});

// 实体转换
function decodeHtmlEntities(str) {
    return str.replace(/&amp;/g, '&') // 替换 &amp;
        .replace(/&lt;/g, '<') // 替换 < 的实体编码
        .replace(/&gt;/g, '>') // 替换 > 的实体编码
        .replace(/&quot;/g, '"') // 替换 " 的实体编码
        .replace(/&#39;/g, "'") // 替换 ' 的实体编码，注意 &#39; 是 ' 的数值实体编码
        .replace(/&#x2F;/g, '/') // 替换 / 的数值实体编码
        // 可以继续添加其他实体编码的替换规则
    ;
}






// 循环创建key内存
var AI_mods_name = document.querySelectorAll('.AI_mods_name');
for (var i = 0; i < AI_mods_name.length; i++) {
    var itemName = AI_mods_name[i].innerText + ' key';
    var itemValue = localStorage.getItem(itemName);
    if (itemValue === null) { // 检查项是否不存在
        window.localStorage.setItem(itemName, ''); // 如果不存在，则创建它
    }
}




//多模型生态
if (localStorage.AI_mx_sl == undefined) {
    localStorage.AI_mx_sl = 1;
}

function AI_mx_sl_cj() {
    var AI_bottom_gn_max = document.querySelector('.AI_bottom_gn_max');
    // 输出主线模型
    var divs = document.createElement('div');
    divs.className = 'AI_bottom_gn AI_mods AI_mods_zhuxian';
    divs.innerHTML = '<i class="iconfont icon-fenxiyinqingshouye icon_AI_mods"></i><p></p>';
    AI_bottom_gn_max.appendChild(divs);

    var inputs = document.createElement('input');
    inputs.className = 'AI_key';
    inputs.type = 'password';
    inputs.placeholder = 'key';
    AI_bottom_gn_max.appendChild(inputs);
    // 输出副线模型
    for (var i = 0; i < localStorage.AI_mx_sl - 1; i++) {
        var divs = document.createElement('div');
        divs.className = 'AI_bottom_gn AI_mods';
        divs.innerHTML = '<i class="iconfont icon-fenxiyinqingshouye icon_AI_mods"></i><p></p>';
        AI_bottom_gn_max.appendChild(divs);

        var inputs = document.createElement('input');
        inputs.className = 'AI_key';
        inputs.type = 'password';
        inputs.placeholder = 'key';
        AI_bottom_gn_max.appendChild(inputs);
    }
}
AI_mx_sl_cj();




// mods切换
var AI_mods = document.querySelector('.AI_mods').querySelector('p');

function mods_qh() {
    AI_mods = document.querySelector('.AI_mods').querySelector('p');
    // 默认mod
    if (localStorage.AI_dq_mod == undefined) {
        localStorage.AI_dq_mod = AI_mods_name[0].innerText;
    }
    AI_mods.innerText = localStorage.AI_dq_mod;
    for (var i = 0; i < AI_mods_name.length; i++) {
        if (AI_mods_name[i].innerText == localStorage.AI_dq_mod) {
            AI_mods_name[i].parentNode.className = 'AI_mods_min AI_mods_min2'; // 修改样式
        } else {
            AI_mods_name[i].parentNode.className = 'AI_mods_min'; // 修改样式
        }
    }
    // 默认mod的key
    if (localStorage.AI_dq_key == undefined) {
        localStorage.AI_dq_key = '';
    }
    var AI_key = document.querySelector('.AI_key');
    AI_key.value = localStorage.AI_dq_key;

    // 页面关闭
    var AI_mods_max = document.querySelector('.AI_mods_max');
    document.addEventListener('click', function(e) {
        AI_mods_max.style.display = 'none';
    })
    AI_mods_max.addEventListener('click', function(e) {
        e.stopPropagation();
    });

    // 页面打开
    var AI_mods_max_hd = document.querySelector('.AI_mods_max_hd');
    var AI_modss = document.querySelectorAll('.AI_mods');
    for (var i = 0; i < AI_modss.length; i++) {
        AI_modss[i].addEventListener('click', function(e) {
            e.stopPropagation();
            AI_mods_max.style.display = 'block';
            AI_mods = this.querySelector('p');

            // 当前mods对应高亮
            if (AI_mods.innerText !== '') {
                var AI_mods_min = document.querySelectorAll('.AI_mods_min');
                for (var j = 0; j < AI_mods_min.length; j++) {
                    if (AI_mods_min[j].querySelector('.AI_mods_name').innerText == AI_mods.innerText) {
                        AI_mods_min[j].className = 'AI_mods_min AI_mods_min2';
                        AI_mods_max_hd.scroll(0, AI_mods_min[j].offsetTop - ((AI_zj.clientHeight / 2) - (AI_mods_min[j].clientHeight / 2)));
                    } else {
                        AI_mods_min[j].className = 'AI_mods_min';
                    }
                }
            }

        });
    }

    // mods点击切换
    var AI_mods_min = document.querySelectorAll('.AI_mods_min');
    for (var i = 0; i < AI_mods_min.length; i++) {
        AI_mods_min[i].addEventListener('click', function(e) {
            // 切换
            AI_mods.innerText = this.querySelector('.AI_mods_name').innerText;
            // 主线时替换默认mod
            if (AI_mods.parentNode.className == 'AI_bottom_gn AI_mods AI_mods_zhuxian') {
                localStorage.AI_dq_mod = this.querySelector('.AI_mods_name').innerText;
            }

            // key切换
            var itemName = this.querySelector('.AI_mods_name').innerText + ' key';
            var itemValue = localStorage.getItem(itemName);
            AI_mods.parentNode.nextElementSibling.value = itemValue;
            // 主线时替换默认key
            if (AI_mods.parentNode.className == 'AI_bottom_gn AI_mods AI_mods_zhuxian') {
                localStorage.AI_dq_key = itemValue;
            }

            AI_bottom_srk.focus();
            AI_mods_max.style.display = 'none'; // 隐藏

            var AI_mods_min = document.querySelectorAll('.AI_mods_min');
            for (var j = 0; j < AI_mods_min.length; j++) {
                AI_mods_min[j].className = 'AI_mods_min';
            }
            this.className = 'AI_mods_min AI_mods_min2'; // 修改样式
        });
    }

    // 非主mods右击删除
    var AI_modss = document.querySelectorAll('.AI_mods');
    for (var i = 0; i < AI_modss.length; i++) {
        AI_modss[i].addEventListener('contextmenu', function(e) {
            e.preventDefault();
            e.stopPropagation();
            this.querySelector('p').innerText = '';
            this.nextElementSibling.value = '';
        });
    }

    // 长度设置
    mods_da_xiao_shiying();
}
mods_qh();





// mods切换大小适应
function mods_da_xiao_shiying() {
    var AI_mods = document.querySelectorAll('.AI_mods ');
    var AI_key = document.querySelectorAll('.AI_key ');
    if (AI_mods.length >= 3) {
        for (var i = 0; i < AI_mods.length; i++) {
            AI_mods[i].style.width = 'calc((100% - 150px - (' + (AI_mods.length * 2) + ' * 10px)) / ' + (AI_mods.length * 2) + ')';
        }
        for (var i = 0; i < AI_key.length; i++) {
            AI_key[i].style.width = 'calc((100% - 150px - (' + (AI_mods.length * 2) + ' * 10px)) / ' + (AI_mods.length * 2) + ')';
        }
    } else {
        for (var i = 0; i < AI_mods.length; i++) {
            AI_mods[i].style.width = 'auto';
        }
        for (var i = 0; i < AI_mods.length; i++) {
            AI_key[i].style.width = '150px';
        }
    }
}
window.addEventListener('resize', function(e) {
    mods_da_xiao_shiying();
});




// 修改key  
function AI_key_mr_xg() {
    var AI_key = document.querySelectorAll('.AI_key');
    for (var i = 0; i < AI_key.length; i++) {
        if (i == 0) {
            AI_key[i].addEventListener('input', function(e) {
                // 修改当前key和默认key
                var AI_mods = this.previousElementSibling.querySelector('p');
                localStorage.AI_dq_key = this.value;
                var itemName = AI_mods.innerText + ' key';
                localStorage.setItem(itemName, this.value);

                // 显示页面上相同name同时更改
                for (var o = 0; o < AI_key.length; o++) {
                    if (AI_key[o].previousElementSibling.querySelector('p').innerText == AI_mods.innerText && AI_key[o] != this) {
                        AI_key[o].value = this.value;
                    }
                }
            });
        } else {
            AI_key[i].addEventListener('input', function(e) {
                var AI_mods = this.previousElementSibling.querySelector('p');
                // 如果和第一个key一样，则同时修改默认key
                var AI_mods_0 = AI_key[0].previousElementSibling.querySelector('p');
                if (AI_mods.innerText == AI_mods_0.innerText) {
                    localStorage.AI_dq_key = this.value;
                }
                // 修改当前key
                var itemName = AI_mods.innerText + ' key';
                localStorage.setItem(itemName, this.value);

                // 显示页面上相同name同时更改
                for (var o = 0; o < AI_key.length; o++) {
                    if (AI_key[o].previousElementSibling.querySelector('p').innerText == AI_mods.innerText && AI_key[o] != this) {
                        AI_key[o].value = this.value;
                    }
                }
            });
        }
    }
}
AI_key_mr_xg();




// 线程ID
var AI_jl = JSON.parse(localStorage.AI_jl);
var AI_xian_cheng = AI_jl.length;
// 发送允许
var AI_bottom_srk_fs_true = 1;
// 正在执行的任务数 
var AI_zhi_xing_s = 0;
// 允许最多执行数
if (localStorage.AI_zhi_xing_zuiduo_s == undefined) {
    localStorage.AI_zhi_xing_zuiduo_s = 3;
}
// 单模型循环次数
if (localStorage.AI_xunhuan_cs == undefined) {
    localStorage.AI_xunhuan_cs = 1;
}
// 历史对话插件
var AI_li_shi_xx = [];

// 发送
var AI_bottom_srk_fs = document.querySelector('.AI_bottom_srk_fs');
var zdxszxf = 0;
AI_bottom_srk_fs.addEventListener('click', function(e) {
    var AI_bottom_srk = document.querySelector('.AI_bottom_srk');
    if (AI_bottom_srk_fs_true == 1 && AI_bottom_srk.value !== '') {
        var AI_bottom_srk = document.querySelector('.AI_bottom_srk');

        // 创建处理
        AI_cl(AI_bottom_srk.value, 1, '', AI_xian_cheng);
        // ID更改
        AI_xian_cheng++;

        // 历史对话
        if (localStorage.AI_lxdh - 0 !== 0) {
            // 获取页面历史对话
            var AI_jl = [];
            var AI_huida_max = document.querySelectorAll('.AI_huida_max');
            for (var i = 0; i < AI_huida_max.length; i++) {
                if (AI_huida_max[i].firstElementChild.className == 'yh_huida_nr') {
                    var sz = [1, AI_huida_max[i].firstElementChild.innerText];
                    AI_jl.push(sz);
                } else {
                    var sz = [2, AI_huida_max[i].firstElementChild.innerText];
                    AI_jl.push(sz);
                }
            }

            // 初始化一个空数组来存储结果对象
            AI_li_shi_xx = [];
            // 遍历数组，直接将对象追加到结果数组中
            for (var i = (AI_jl.length > localStorage.AI_lxdh ? (AI_jl.length - localStorage.AI_lxdh) : 0); i < AI_jl.length; i++) {
                ls_nr_s = decodeHtmlEntities(AI_jl[i][1]).replace(/(\n{2,})/g, '\n').replace(/\n+$/, ''); //实体转换后,使用正则表达式去掉所有标签和不必要的换行
                const role = AI_jl[i][0] === 1 ? 'user' : 'assistant';
                AI_li_shi_xx.push({
                    role: role,
                    content: ls_nr_s
                });
            }
            console.log('历史数据\n', AI_li_shi_xx); // 打印结果数组
        } else {
            AI_li_shi_xx = [];
        }

        // 多模型多线程同时发生请求
        var AI_modss = document.querySelectorAll('.AI_mods');
        for (var o = 0; o < AI_modss.length; o++) {
            if (AI_modss[o].querySelector('p').innerText !== '' && AI_zhi_xing_s < localStorage.AI_zhi_xing_zuiduo_s) {
                // 发送AI请求
                AI_fsxx(AI_bottom_srk.value, AI_modss[o].querySelector('p').innerText, AI_modss[o].nextElementSibling.value, AI_xian_cheng);
                // ID更改
                AI_xian_cheng++;
                // 正在执行数加一
                AI_zhi_xing_s++;

                // 循环发送
                for (var i = 0; i < localStorage.AI_xunhuan_cs - 1; i++) {
                    if (AI_zhi_xing_s < localStorage.AI_zhi_xing_zuiduo_s) {
                        // 发送AI请求
                        AI_fsxx(AI_bottom_srk.value, AI_modss[o].querySelector('p').innerText, AI_modss[o].nextElementSibling.value, AI_xian_cheng);
                        // ID更改
                        AI_xian_cheng++;
                        // 正在执行数加一
                        AI_zhi_xing_s++;
                    }
                }
            }
        }

        // 不让输出
        if (AI_zhi_xing_s >= localStorage.AI_zhi_xing_zuiduo_s) {
            AI_bottom_srk_fs_true = 0;
            AI_bottom_srk_fs.style.opacity = '0.3';
            AI_bottom_srk.disabled = 'disabled';
        }

        // 清空输入框
        AI_bottom_srk.value = '';

        // 显示最下方
        zdxszxf = 1;
        var AI_zj_nr = document.querySelector('.AI_zj_nr');
        AI_zj.scroll(0, AI_zj_nr.offsetHeight);
    }
});





// 数据保存
function AI_bcsj(nr, rw, mod_s, AI_ID) {
    var AI_jl = JSON.parse(localStorage.getItem('AI_jl'));
    var sj = new Date().getFullYear() + ' 年 ' + (new Date().getMonth() + 1) + ' 月 ' + new Date().getDate() + ' 日 ' + shi_jian_hs3() + ':' + shi_jian_hs2();
    var sz = [rw, nr, (mod_s ? mod_s : sj)];
    AI_jl[AI_ID - 0] = sz;
    localStorage.setItem('AI_jl', JSON.stringify(AI_jl));
}




// AI处理
function AI_fsxx(nr_s, mod_s, key_s, AI_ID) {

    // AI预留
    var divs = document.createElement('div');
    divs.className = 'AI_huida_max AI_huida_max_xiancheng' + AI_ID;
    divs.innerHTML = '<div class="AI_huida_nr">...</div><div class="AI_huida_tx"></div><div class="AI_huida_sj"></div>';
    AI_zj_nr.appendChild(divs);


    // 动态创建定时器
    var AI_huida_shuchudh_s = 'AI_huida_shuchudh' + AI_ID;
    var AI_huida_nr = document.querySelector('.AI_huida_max_xiancheng' + AI_ID).querySelector('.AI_huida_nr');
    window[AI_huida_shuchudh_s] = setInterval(function() {
        AI_huida_nr.innerText = AI_huida_nr.innerText + '.';
        if (AI_huida_nr.innerText.length > 9) {
            AI_huida_nr.innerText = '...';
        }
    }, 300);

    if (mod_s == 'qwen-max-latest') { //阿里云百练(联网)(对话)

        try {
            const apiKey = key_s;
            const url = 'https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions';

            // 请求数据
            const requestData = {
                enable_search: JSON.parse(localStorage.AI_lwss), //联网
                model: mod_s,
                messages: AI_li_shi_xx.length == 0 ? [{
                    role: "user",
                    content: nr_s
                }] : AI_li_shi_xx
            };

            // 将请求数据转换为 JSON 字符串
            const jsonData = JSON.stringify(requestData);

            // 使用 fetch 发起 POST 请求
            fetch(url, {
                    method: 'POST', // 或者 'GET'，根据 API 的要求
                    headers: {
                        'Authorization': `Bearer ${apiKey}`,
                        'Content-Type': 'application/json'
                    },
                    body: jsonData // 对于 POST 请求，请求数据在 body 中
                })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok ' + response.statusText);
                    }
                    return response.json();
                })
                .then(data => {
                    console.log(data); // 处理返回的数据
                    AI_cl(data.choices[0].message.content, 2, mod_s, AI_ID);
                })
                .catch(err => {
                    console.log(err);
                    AI_cl('请求失败 检查{key}是否正确 或 请求限制', 2, mod_s, AI_ID);
                });
        } catch (error) {
            // 这个块会在 try 中有错误抛出时执行
            AI_cl('请求失败 检查 API 是否失效', 2, mod_s, AI_ID);
        }

    } else if (mod_s == '#') { //阿里云百练(不联网)(对话)

        try {
            const apiKey = key_s;
            const url = 'https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions';

            // 请求数据
            const requestData = {
                model: mod_s,
                messages: AI_li_shi_xx.length == 0 ? [{
                    role: "user",
                    content: nr_s
                }] : AI_li_shi_xx
            };

            // 将请求数据转换为 JSON 字符串
            const jsonData = JSON.stringify(requestData);

            // 使用 fetch 发起 POST 请求
            fetch(url, {
                    method: 'POST', // 或者 'GET'，根据 API 的要求
                    headers: {
                        'Authorization': `Bearer ${apiKey}`,
                        'Content-Type': 'application/json'
                    },
                    body: jsonData // 对于 POST 请求，请求数据在 body 中
                })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok ' + response.statusText);
                    }
                    return response.json();
                })
                .then(data => {
                    console.log(data); // 处理返回的数据
                    AI_cl(data.choices[0].message.content, 2, mod_s, AI_ID);
                })
                .catch(err => {
                    console.log(err);
                    AI_cl('请求失败 检查{key}是否正确 或 请求限制', 2, mod_s, AI_ID);
                });
        } catch (error) {
            // 这个块会在 try 中有错误抛出时执行
            AI_cl('请求失败 检查 API 是否失效', 2, mod_s, AI_ID);
        }

    } else if (mod_s == 'GPT-5-mini' || mod_s == 'deepseek-v3-2-exp' || mod_s == 'gpt-5.2') { //GPT_API_free(GitHub)(对话)

        try { // 可能产生错误的代码
            var myHeaders = new Headers();
            myHeaders.append("Authorization", key_s);
            myHeaders.append("User-Agent", "Apifox/1.0.0 (https://apifox.com)");
            myHeaders.append("Content-Type", "application/json");

            var raw = JSON.stringify({
                max_tokens: 4096,
                model: mod_s,
                messages: AI_li_shi_xx.length == 0 ? [{
                    role: "user",
                    content: nr_s
                }] : AI_li_shi_xx
            });

            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
            };

            fetch("https://api.chatanywhere.tech/v1/chat/completions", requestOptions)
                .then(response => response.text())
                .then(function(result) {
                    var results = JSON.parse(result);
                    console.log(results);

                    AI_cl(results.choices[0].message.content, 2, mod_s, AI_ID);
                })
                .catch(function(err) {
                    console.log(err);

                    AI_cl('请求失败 检查{key}是否正确 或 请求限制', 2, mod_s, AI_ID);
                });
        } catch (error) { // 这个块会在 try 中有错误抛出时执行
            AI_cl('请求失败 检查 API 是否失效', 2, mod_s, AI_ID);
        }

    } else if (mod_s == 'GLM-4-Flash' || mod_s == 'GLM-4-Flash-250414' || mod_s == 'GLM-4.7-Flash' || mod_s == 'GLM-Z1-Flash') { //智谱AI开放平台(对话)

        try {
            // 替换 <你的apikey> 为您的实际 API Key
            const apiKey = key_s;
            const url = 'https://open.bigmodel.cn/api/paas/v4/chat/completions';

            // 请求数据
            const requestData = {
                max_tokens: 4095,
                model: mod_s,
                messages: AI_li_shi_xx.length == 0 ? [{
                    role: "user",
                    content: nr_s
                }] : AI_li_shi_xx
            };

            // 将请求数据转换为JSON字符串
            const jsonData = JSON.stringify(requestData);

            // 使用 fetch 发起 POST 请求
            fetch(url, {
                    method: 'POST', // 或者 'GET'，根据API的要求
                    headers: {
                        'Authorization': `Bearer ${apiKey}`,
                        'Content-Type': 'application/json'
                    },
                    body: jsonData // 对于 POST 请求，请求数据在 body 中
                })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok ' + response.statusText);
                    }
                    return response.json();
                })
                .then(data => {
                    console.log(data); // 处理返回的数据

                    AI_cl(data.choices[0].message.content, 2, mod_s, AI_ID);
                })
                .catch(err => {
                    console.log(err);

                    AI_cl('请求失败 检查{key}是否正确 或 请求限制', 2, mod_s, AI_ID);
                });
        } catch (error) {
            // 这个块会在 try 中有错误抛出时执行
            AI_cl('请求失败 检查 API 是否失效', 2, mod_s, AI_ID);
        }

    } else if (mod_s == 'THUDM/GLM-4.1V-9B-Thinking' || mod_s == 'deepseek-ai/DeepSeek-R1-0528-Qwen3-8B' || mod_s == 'Qwen/Qwen3-8B' || mod_s == 'THUDM/GLM-Z1-9B-0414' || mod_s == 'deepseek-ai/DeepSeek-OCR') { //SiliconCloud(max_tokens:4096)(对话)

        try {
            const options = {
                method: 'POST',
                headers: {
                    accept: 'application/json',
                    'content-type': 'application/json',
                    authorization: 'Bearer ' + key_s
                },
                body: JSON.stringify({
                    model: mod_s,
                    messages: AI_li_shi_xx.length == 0 ? [{
                        role: "user",
                        content: nr_s
                    }] : AI_li_shi_xx,
                    stream: false,
                    max_tokens: 4096,
                    temperature: 0.7,
                    top_p: 0.7,
                    top_k: 50,
                    frequency_penalty: 0.5,
                    n: 1
                })
            };

            fetch('https://api.siliconflow.cn/v1/chat/completions', options)
                .then(response => response.json())
                .then(function(response) {
                    console.log(response); // 处理返回的数据

                    AI_cl(response.choices[0].message.content, 2, mod_s, AI_ID);
                })
                .catch(function(err) {
                    console.log(err);

                    AI_cl('请求失败 检查{key}是否正确 或 请求限制', 2, mod_s, AI_ID);
                });
        } catch (error) {
            AI_cl('请求失败 检查 API 是否失效', 2, mod_s, AI_ID);
        }

    } else if (mod_s == '') {

        try {

        } catch (error) {
            AI_cl('请求失败 检查 API 是否失效', 2, mod_s, AI_ID);
        }

    } else {
        AI_cl('抱歉,此模型已被遗弃,请更换模型!', 2, mod_s, AI_ID);
    }

}





//数据处理
var AI_bottom_srk = document.querySelector('.AI_bottom_srk');
var AI_zj = document.querySelector('.AI_zj');
var AI_zj_nr = document.querySelector('.AI_zj_nr');

function AI_cl(nr, rw, mod_s, AI_ID) {
    if (nr == '请求失败 检查{key}是否正确 或 请求限制' && document.querySelector('.sku_wlzt').innerText == 'Status:Offline') {
        nr = '请求失败 未连接到互联网 {请检查网线、调制解调器和路由器，或重新设置网络}'
    }

    var sj = new Date().getFullYear() + ' 年 ' + (new Date().getMonth() + 1) + ' 月 ' + new Date().getDate() + ' 日 ' + shi_jian_hs3() + ':' + shi_jian_hs2();
    if (rw == 1) { //自己

        // 保存数据
        AI_bcsj(nr, 1, undefined, AI_ID);

        // 创建对话
        var divs = document.createElement('div');
        var AI_zj_nr = document.querySelector('.AI_zj_nr');
        divs.className = 'AI_huida_max';
        divs.innerHTML = '<div class="yh_huida_nr"></div><div class="yh_huida_tx"></div><div class="yh_huida_sj">' + sj + '</div>';
        divs.querySelector('.yh_huida_tx').style.backgroundImage = 'url(' + localStorage.tou_xiang + ')';
        divs.querySelector('.yh_huida_nr').innerText = nr;
        AI_zj_nr.appendChild(divs);

    } else if (rw == 2) { //AI

        try {
            // 使用marked解析Markdown
            var parsedHtml = marked.parse(nr);
            //把<think>变成<pre>
            parsedHtml = parsedHtml.replace(/<think>/g, '<pre>');
            parsedHtml = parsedHtml.replace(/<\/think>/g, '</pre>');
            // 将解析后的HTML设置回div元素中
            var nr = parsedHtml;
        } catch (error) {
            Sku_tctx('marked解析错误 , 网络未连接 或 Markdown版本过低');
        }

        // 保存数据
        AI_bcsj(nr, 2, mod_s, AI_ID);

        //停止定时器
        var AI_huida_shuchudh_s = 'AI_huida_shuchudh' + AI_ID;
        clearInterval(window[AI_huida_shuchudh_s]);

        //获取对应盒子准备输出
        var AI_huida_nr = document.querySelector('.AI_huida_max_xiancheng' + AI_ID).querySelector('.AI_huida_nr');
        var AI_huida_sj = document.querySelector('.AI_huida_max_xiancheng' + AI_ID).querySelector('.AI_huida_sj');
        document.querySelector('.AI_huida_max_xiancheng' + AI_ID).className = 'AI_huida_max';
        AI_huida_sj.innerText = mod_s;
        AI_huida_nr.innerHTML = '';

        if (localStorage.AI_jssc - 0 == 0) { // 动态输出
            var shuchu_wz = 0;
            var shuchu_wz_zf = '';
            // 动态创建定时器
            var AI_huida_shuchudh_s = 'AI_huida_shuchudh' + AI_ID;
            window[AI_huida_shuchudh_s] = setInterval(function() {
                // 动态输出
                shuchu_wz_zf += nr[shuchu_wz]; //将字符串拼接
                AI_huida_nr.innerHTML = shuchu_wz_zf;

                // 显示最下方
                if (zdxszxf == 1) {
                    var AI_zj_nr = document.querySelector('.AI_zj_nr');
                    AI_zj.scroll(0, AI_zj_nr.offsetHeight);
                } else {
                    AI_zj_nrwz();
                }

                //结束输出
                if (shuchu_wz == nr.length - 1) {
                    var AI_huida_shuchudh_s = 'AI_huida_shuchudh' + AI_ID;
                    clearInterval(window[AI_huida_shuchudh_s]); //停止定时器

                    // 正在执行数减一
                    AI_zhi_xing_s--;
                    // 可以使用
                    if (AI_zhi_xing_s < localStorage.AI_zhi_xing_zuiduo_s) {
                        AI_bottom_srk_fs_true = 1;
                        AI_bottom_srk_fs.style.opacity = '1';
                        AI_bottom_srk.disabled = false;
                        AI_bottom_srk.focus(); //聚焦
                    }
                    // a标签打开方式
                    var AI_zj_a = document.querySelector('.AI_zj').querySelectorAll('a');
                    AI_zj_a.forEach(link => {
                        link.setAttribute('target', '_blank');
                    });
                    // 使用mathjax解析数学公式
                    MathJax.typeset();
                }

                // 动态递增
                shuchu_wz++;
            }, 0);
        } else { //即使输出
            AI_huida_nr.innerHTML = nr;
            // 显示最下方
            if (zdxszxf == 1) {
                var AI_zj_nr = document.querySelector('.AI_zj_nr');
                AI_zj.scroll(0, AI_zj_nr.offsetHeight);
            } else {
                AI_zj_nrwz();
            }
            // 正在执行数减一
            AI_zhi_xing_s--;
            // 可以使用
            if (AI_zhi_xing_s < localStorage.AI_zhi_xing_zuiduo_s) {
                AI_bottom_srk_fs_true = 1;
                AI_bottom_srk_fs.style.opacity = '1';
                AI_bottom_srk.disabled = false;
                AI_bottom_srk.focus(); //聚焦
            }
            // a标签打开方式
            var AI_zj_a = document.querySelector('.AI_zj').querySelectorAll('a');
            AI_zj_a.forEach(link => {
                link.setAttribute('target', '_blank');
            });
            // 使用mathjax解析数学公式
            MathJax.typeset();
        }

    }
}


// 输出历史数据
var AI_jl = JSON.parse(localStorage.getItem('AI_jl'));
for (var i = 0; i < AI_jl.length; i++) {
    if (AI_jl[i][0] == 1) {
        var divs = document.createElement('div');
        divs.className = 'AI_huida_max';
        divs.innerHTML = '<div class="yh_huida_nr"></div><div class="yh_huida_tx"></div><div class="yh_huida_sj">' + AI_jl[i][2] + '</div>';
        divs.querySelector('.yh_huida_tx').style.backgroundImage = 'url(' + localStorage.tou_xiang + ')';
        divs.querySelector('.yh_huida_nr').innerText = AI_jl[i][1];
        AI_zj_nr.appendChild(divs);
    } else {
        var divs = document.createElement('div');
        divs.className = 'AI_huida_max';
        divs.innerHTML = '<div class="AI_huida_nr"></div><div class="AI_huida_tx"></div><div class="AI_huida_sj">' + AI_jl[i][2] + '</div>';
        divs.querySelector('.AI_huida_nr').innerHTML = AI_jl[i][1];
        AI_zj_nr.appendChild(divs);
    }
}
// a标签打开方式
var AI_zj_a = document.querySelector('.AI_zj').querySelectorAll('a');
AI_zj_a.forEach(link => {
    link.setAttribute('target', '_blank');
});





// 删除历史
var AI_kjzl_sc = document.querySelector('.AI_kjzl_sc');
AI_kjzl_sc.addEventListener('click', function(e) {
    if (AI_zhi_xing_s == 0) {
        AI_zj_nr.innerHTML = '';
        localStorage.AI_jl = '[]';
        AI_xian_cheng = 0;
    }
});





// 快捷指令
var AI_kjzl = document.querySelector('.AI_kjzl');
var AI_kjzl_max = document.querySelector('.AI_kjzl_max');
var AI_kjzl_s_tjl = document.querySelector('.AI_kjzl_s_tjl');
var AI_kjzl_min = document.querySelector('.AI_kjzl_min');
AI_kjzl.addEventListener('click', function(e) {
    e.stopPropagation();
    AI_kjzl_max.style.display = 'block';
    AI_kjzl_s_tjl.focus(); // 聚焦
    AI_kjzl_min.scroll(0, 0);
});
document.addEventListener('click', function(e) {
    AI_kjzl_max.style.display = 'none';
})
AI_kjzl_max.addEventListener('click', function(e) {
    e.stopPropagation();
});
// 输出快捷指令
var AI_kjzl = JSON.parse(localStorage.AI_kjzl);
for (var i = 0; i < AI_kjzl.length; i++) {
    var divs = document.createElement('div');
    divs.className = 'AI_kjzl_s';
    divs.innerText = AI_kjzl[i];
    AI_kjzl_min.insertBefore(divs, AI_kjzl_s_tjl);
}
// 添加快捷指令
function AI_kjzl_s_tjhs() {
    var AI_kjzl = JSON.parse(localStorage.AI_kjzl);
    if (AI_kjzl_s_tjl.value !== '' && AI_kjzl.indexOf(AI_kjzl_s_tjl.value) == -1) {
        //内存修改
        AI_kjzl.push(AI_kjzl_s_tjl.value);
        localStorage.AI_kjzl = JSON.stringify(AI_kjzl);
        //页面修改
        var divs = document.createElement('div');
        divs.className = 'AI_kjzl_s';
        divs.innerText = AI_kjzl_s_tjl.value;
        AI_kjzl_min.insertBefore(divs, AI_kjzl_s_tjl);

        AI_kjzl_s_tjl.value = '';
    } else if (AI_kjzl_s_tjl.value !== '' && AI_kjzl.indexOf(AI_kjzl_s_tjl.value) !== -1) {
        Sku_tctx('快捷指令已存在');
    }
}
// 选择快捷指令
AI_kjzl_max.addEventListener('click', function(e) {
    const ai_kjzl_ss = e.target;
    if (ai_kjzl_ss.classList.contains('AI_kjzl_s')) {
        AI_bottom_srk.value += ai_kjzl_ss.innerText;
        AI_kjzl_max.style.display = 'none';
        AI_bottom_srk.focus();
    }
});
// 删除快捷指令
AI_kjzl_max.addEventListener('contextmenu', function(e) {
    const ai_kjzl_ss = e.target;
    if (ai_kjzl_ss.classList.contains('AI_kjzl_s')) {
        //内存修改
        var AI_kjzl = JSON.parse(localStorage.AI_kjzl);
        AI_kjzl.splice(AI_kjzl.indexOf(ai_kjzl_ss.innerText), 1);
        localStorage.AI_kjzl = JSON.stringify(AI_kjzl);
        //页面修改
        AI_kjzl_min.removeChild(ai_kjzl_ss);
    }
});





// 快速翻译
function AI_ksfy() {
    var fy_nr = AI_bottom_srk.value;
    AI_bottom_srk.value = '';

    // 不让输出
    AI_bottom_srk_fs_true = 0;
    AI_bottom_srk_fs.style.opacity = '0.3';
    AI_bottom_srk.disabled = 'disabled';

    try {
        const options = {
            method: 'POST',
            headers: {
                accept: 'application/json',
                'content-type': 'application/json',
                authorization: 'Bearer sk-pdgqcxmzvrnetrmghspjnrfpvcsyokghvceimnemcwyulzcg'
            },
            body: JSON.stringify({
                model: 'THUDM/glm-4-9b-chat',
                messages: [{
                    role: 'user',
                    content: 'Translate the following (note: if it is Chinese, it will be translated into English, and English will be translated into Chinese), and the pure translation result will be output! No need for the original text! What you need to translate is:' + fy_nr
                }],
                stream: false,
                max_tokens: 4096,
                temperature: 0.7,
                top_p: 0.7,
                top_k: 50,
                frequency_penalty: 0.5,
                n: 1
            })
        };

        fetch('https://api.siliconflow.cn/v1/chat/completions', options)
            .then(response => response.json())
            .then(function(response) {
                console.log(response); // 处理返回的数据
                AI_bottom_srk.value = response.choices[0].message.content.replace(/(\n{1,})/g, '').replace(/\n+$/, '');

                // 可以使用
                AI_bottom_srk_fs.style.opacity = '1';
                AI_bottom_srk_fs_true = 1;
                AI_bottom_srk.disabled = false;
                AI_bottom_srk.focus(); //聚焦
                sf_shift2 = 0;
            })
            .catch(function(err) {
                console.log(err);

                // 可以使用
                AI_bottom_srk_fs.style.opacity = '1';
                AI_bottom_srk_fs_true = 1;
                AI_bottom_srk.disabled = false;
                AI_bottom_srk.focus(); //聚焦
                sf_shift2 = 0;
                Sku_tctx('请求失败 检查 API 是否失效');
            });
    } catch (error) {
        // 可以使用
        AI_bottom_srk_fs.style.opacity = '1';
        AI_bottom_srk_fs_true = 1;
        AI_bottom_srk.disabled = false;
        AI_bottom_srk.focus(); //聚焦
        sf_shift2 = 0;
        Sku_tctx('请求失败 检查 API 是否失效');
    }
}





// 设置mods
var AI_dhsz = document.querySelector('.AI_dhsz');
var AI_szym_max = document.querySelector('.AI_szym_max');
var AI_kjzl_s_tjl = document.querySelector('.AI_kjzl_s_tjl');
var AI_kjzl_min = document.querySelector('.AI_kjzl_min');
AI_dhsz.addEventListener('click', function(e) {
    e.stopPropagation();
    AI_szym_max.style.display = 'block';
});
document.addEventListener('click', function(e) {
    AI_szym_max.style.display = 'none';
})
AI_szym_max.addEventListener('click', function(e) {
    e.stopPropagation();
});
var AI_sz_dydxc_kaiguan = document.querySelector('.AI_sz_dydxc_kaiguan');
var AI_sz_dydxc_kaiguan_d = document.querySelector('.AI_sz_dydxc_kaiguan_d');
var AI_sz_dydxc_shu = document.querySelector('.AI_sz_dydxc_shu');
var AI_sz_dkj_kaiguan = document.querySelector('.AI_sz_dkj_kaiguan');
var AI_sz_dkj_kaiguan_d = document.querySelector('.AI_sz_dkj_kaiguan_d');
var AI_sz_dkj_shu = document.querySelector('.AI_sz_dkj_shu');
var AI_sz_zdbfs_kaiguan = document.querySelector('.AI_sz_zdbfs_kaiguan');
var AI_sz_zdbfs_kaiguan_d = document.querySelector('.AI_sz_zdbfs_kaiguan_d');
var AI_sz_zdbfs_shu = document.querySelector('.AI_sz_zdbfs_shu');
var AI_sz_jssc_kaiguan = document.querySelector('.AI_sz_jssc_kaiguan');
var AI_sz_jssc_kaiguan_d = document.querySelector('.AI_sz_jssc_kaiguan_d');
var AI_sz_lxdh_kaiguan = document.querySelector('.AI_sz_lxdh_kaiguan');
var AI_sz_jssc_lxdh_d = document.querySelector('.AI_sz_jssc_lxdh_d');
var AI_sz_lxdh_shu = document.querySelector('.AI_sz_lxdh_shu');
var AI_sz_lwss_kaiguan = document.querySelector('.AI_sz_lwss_kaiguan');
var AI_sz_lwss_lxdh_d = document.querySelector('.AI_sz_lwss_lxdh_d');
if (localStorage.AI_lxdh == undefined) { //即时输出
    localStorage.AI_lxdh = 0; //默认0
}
if (localStorage.AI_lxdh == undefined) { //连续对话
    localStorage.AI_lxdh = 0; //默认0
}

// 重新创建mod框架
function AI_mods_cxcj() {
    // 创建mod框架
    var AI_bottom_gn_max = document.querySelector('.AI_bottom_gn_max');
    var AI_modss = document.querySelectorAll('.AI_mods ');
    for (var i = 0; i < AI_modss.length; i++) {
        AI_bottom_gn_max.removeChild(AI_modss[i]);
    }
    var AI_key = document.querySelectorAll('.AI_key ');
    for (var i = 0; i < AI_key.length; i++) {
        AI_bottom_gn_max.removeChild(AI_key[i]);
    }
    AI_mx_sl_cj();
    mods_qh();
    AI_key_mr_xg();
    xhgb_dx('AI_mods', 'AI_mods_max');
}

// 默认模型多线程处理数
if (localStorage.AI_xunhuan_cs - 0 !== 1) {
    AI_sz_dydxc_kaiguan.className = 'AI_sz_kaiguan2 AI_sz_dydxc_kaiguan';
    AI_sz_dydxc_kaiguan_d.style.left = '29px';
} else {
    AI_sz_dydxc_shu.disabled = true;
    AI_sz_dydxc_shu.style.opacity = 0.5;
}
AI_sz_dydxc_shu.value = localStorage.AI_xunhuan_cs;
// 默认多架构生态数
if (localStorage.AI_mx_sl - 0 !== 1) {
    AI_sz_dkj_kaiguan.className = 'AI_sz_kaiguan2 AI_sz_dydxc_kaiguan';
    AI_sz_dkj_kaiguan_d.style.left = '29px';
} else {
    AI_sz_dkj_shu.disabled = true;
    AI_sz_dkj_shu.style.opacity = 0.5;
}
AI_sz_dkj_shu.value = localStorage.AI_mx_sl;
// 默认最大并发对话数
if ((localStorage.AI_zhi_xing_zuiduo_s - 0) !== 1 && (((localStorage.AI_mx_sl - 0) == 1 && (localStorage.AI_xunhuan_cs - 0) == 1) || localStorage.Sku_kfzms == 1)) {
    AI_sz_zdbfs_kaiguan.className = 'AI_sz_kaiguan2 AI_sz_dydxc_kaiguan';
    AI_sz_zdbfs_kaiguan_d.style.left = '29px';
} else {
    AI_sz_zdbfs_shu.disabled = true;
    AI_sz_zdbfs_shu.style.opacity = 0.5;
}
AI_sz_zdbfs_shu.value = localStorage.AI_zhi_xing_zuiduo_s;
// 默认即时输出
if (localStorage.AI_jssc - 0 == 1) {
    AI_sz_jssc_kaiguan.className = 'AI_sz_kaiguan2 AI_sz_dydxc_kaiguan';
    AI_sz_jssc_kaiguan_d.style.left = '29px';
}
// 默认连续对话
if (localStorage.AI_lxdh - 0 !== 0) {
    AI_sz_lxdh_kaiguan.className = 'AI_sz_kaiguan2 AI_sz_dydxc_kaiguan';
    AI_sz_jssc_lxdh_d.style.left = '29px';
} else {
    AI_sz_lxdh_shu.disabled = true;
    AI_sz_lxdh_shu.style.opacity = 0.5;
}
AI_sz_lxdh_shu.value = localStorage.AI_lxdh;
//默认联网搜索
if (localStorage.AI_lwss == undefined) {
    localStorage.AI_lwss = false; //默认0
}
if (localStorage.AI_lwss == 'true') {
    AI_sz_lwss_kaiguan.className = 'AI_sz_kaiguan2 AI_sz_dydxc_kaiguan';
    AI_sz_lwss_lxdh_d.style.left = '29px';
}


// 模型多线程处理
AI_sz_dydxc_kaiguan.addEventListener('click', function(e) {
    if (localStorage.AI_xunhuan_cs - 0 == 1) {
        AI_sz_dydxc_kaiguan.className = 'AI_sz_kaiguan2 AI_sz_dydxc_kaiguan';
        AI_sz_dydxc_kaiguan_d.style.left = '29px';

        localStorage.AI_xunhuan_cs = 2;
        AI_sz_dydxc_shu.value = localStorage.AI_xunhuan_cs;
        AI_sz_dydxc_shu.disabled = false;
        AI_sz_dydxc_shu.style.opacity = 1;

        if (localStorage.Sku_kfzms == 0) {
            // 第三者
            AI_sz_zdbfs_kaiguan.className = 'AI_sz_kaiguan AI_sz_dydxc_kaiguan';
            AI_sz_zdbfs_kaiguan_d.style.left = '0px';
            AI_sz_lxdh_kaiguan.className = 'AI_sz_kaiguan AI_sz_dydxc_kaiguan';
            AI_sz_jssc_lxdh_d.style.left = '0px';

            AI_sz_lxdh_shu.disabled = true;
            localStorage.AI_lxdh = 0;
            AI_sz_lxdh_shu.value = localStorage.AI_lxdh;
            AI_sz_lxdh_shu.style.opacity = 0.5;
            AI_sz_zdbfs_shu.disabled = true;
            localStorage.AI_zhi_xing_zuiduo_s = (localStorage.AI_xunhuan_cs - 0) * (localStorage.AI_mx_sl - 0);
            AI_sz_zdbfs_shu.value = localStorage.AI_zhi_xing_zuiduo_s;
            AI_sz_zdbfs_shu.style.opacity = 0.5;
        }
    } else {
        AI_sz_dydxc_kaiguan.className = 'AI_sz_kaiguan AI_sz_dydxc_kaiguan';
        AI_sz_dydxc_kaiguan_d.style.left = '0px';

        localStorage.AI_xunhuan_cs = 1;
        AI_sz_dydxc_shu.value = localStorage.AI_xunhuan_cs;
        AI_sz_dydxc_shu.disabled = true;
        AI_sz_dydxc_shu.style.opacity = 0.5;

        if (localStorage.Sku_kfzms == 0) {
            // 第三者
            localStorage.AI_zhi_xing_zuiduo_s = (localStorage.AI_xunhuan_cs - 0) * (localStorage.AI_mx_sl - 0);
            AI_sz_zdbfs_shu.value = localStorage.AI_zhi_xing_zuiduo_s;
            if (localStorage.AI_xunhuan_cs - 0 == 1 && localStorage.AI_mx_sl - 0 == 1) {
                AI_sz_zdbfs_kaiguan.className = 'AI_sz_kaiguan2 AI_sz_dydxc_kaiguan';
                AI_sz_zdbfs_kaiguan_d.style.left = '29px';

                localStorage.AI_zhi_xing_zuiduo_s = 3;
                AI_sz_zdbfs_shu.value = localStorage.AI_zhi_xing_zuiduo_s;
                AI_sz_zdbfs_shu.disabled = false;
                AI_sz_zdbfs_shu.style.opacity = 1;
            }
        }
    }
});
AI_sz_dydxc_shu.addEventListener('blur', function(e) {
    if (this.value < 2 && localStorage.Sku_kfzms == 0) {
        this.value = 2;
        Sku_tctx('输入范围为 (2 ~ 10)');
    } else if (this.value > 10 && localStorage.Sku_kfzms == 0) {
        this.value = 10;
        Sku_tctx('输入范围为 (2 ~ 10)');
    }

    localStorage.AI_xunhuan_cs = this.value;

    if (localStorage.Sku_kfzms == 0) {
        // 第三者
        localStorage.AI_zhi_xing_zuiduo_s = (localStorage.AI_xunhuan_cs - 0) * (localStorage.AI_mx_sl - 0);
        AI_sz_zdbfs_shu.value = localStorage.AI_zhi_xing_zuiduo_s;
    }
});
// 多架构生态数
AI_sz_dkj_kaiguan.addEventListener('click', function(e) {
    if (localStorage.AI_mx_sl - 0 == 1) {
        AI_sz_dkj_kaiguan.className = 'AI_sz_kaiguan2 AI_sz_dydxc_kaiguan';
        AI_sz_dkj_kaiguan_d.style.left = '29px';

        localStorage.AI_mx_sl = 2;
        AI_sz_dkj_shu.value = localStorage.AI_mx_sl;
        AI_sz_dkj_shu.disabled = false;
        AI_sz_dkj_shu.style.opacity = 1;

        // 重新创建mods框架
        AI_mods_cxcj();

        if (localStorage.Sku_kfzms == 0) {
            // 第三者
            AI_sz_zdbfs_kaiguan.className = 'AI_sz_kaiguan AI_sz_dydxc_kaiguan';
            AI_sz_zdbfs_kaiguan_d.style.left = '0px';
            AI_sz_lxdh_kaiguan.className = 'AI_sz_kaiguan AI_sz_dydxc_kaiguan';
            AI_sz_jssc_lxdh_d.style.left = '0px';

            AI_sz_lxdh_shu.disabled = true;
            localStorage.AI_lxdh = 0;
            AI_sz_lxdh_shu.value = localStorage.AI_lxdh;
            AI_sz_lxdh_shu.style.opacity = 0.5;
            AI_sz_zdbfs_shu.disabled = true;
            localStorage.AI_zhi_xing_zuiduo_s = (localStorage.AI_xunhuan_cs - 0) * (localStorage.AI_mx_sl - 0);
            AI_sz_zdbfs_shu.value = localStorage.AI_zhi_xing_zuiduo_s;
            AI_sz_zdbfs_shu.style.opacity = 0.5;
        }
    } else {
        AI_sz_dkj_kaiguan.className = 'AI_sz_kaiguan AI_sz_dydxc_kaiguan';
        AI_sz_dkj_kaiguan_d.style.left = '0px';

        localStorage.AI_mx_sl = 1;
        AI_sz_dkj_shu.value = localStorage.AI_mx_sl;
        AI_sz_dkj_shu.disabled = true;
        AI_sz_dkj_shu.style.opacity = 0.5;

        // 重新创建mods框架
        AI_mods_cxcj();

        if (localStorage.Sku_kfzms == 0) {
            // 第三者
            localStorage.AI_zhi_xing_zuiduo_s = (localStorage.AI_xunhuan_cs - 0) * (localStorage.AI_mx_sl - 0);
            AI_sz_zdbfs_shu.value = localStorage.AI_zhi_xing_zuiduo_s;
            if (localStorage.AI_xunhuan_cs - 0 == 1 && localStorage.AI_mx_sl - 0 == 1) {
                AI_sz_zdbfs_kaiguan.className = 'AI_sz_kaiguan2 AI_sz_dydxc_kaiguan';
                AI_sz_zdbfs_kaiguan_d.style.left = '29px';

                localStorage.AI_zhi_xing_zuiduo_s = 3;
                AI_sz_zdbfs_shu.value = localStorage.AI_zhi_xing_zuiduo_s;
                AI_sz_zdbfs_shu.disabled = false;
                AI_sz_zdbfs_shu.style.opacity = 1;
            }
        }
    }
});
AI_sz_dkj_shu.addEventListener('blur', function(e) {
    if (this.value < 2 && localStorage.Sku_kfzms == 0) {
        this.value = 2;
        Sku_tctx('输入范围为 (2 ~ 10)');
    } else if (this.value > 10 && localStorage.Sku_kfzms == 0) {
        this.value = 10;
        Sku_tctx('输入范围为 (2 ~ 10)');
    }

    localStorage.AI_mx_sl = this.value;

    // 重新创建mods框架
    AI_mods_cxcj();

    if (localStorage.Sku_kfzms == 0) {
        // 第三者
        localStorage.AI_zhi_xing_zuiduo_s = (localStorage.AI_xunhuan_cs - 0) * (localStorage.AI_mx_sl - 0);
        AI_sz_zdbfs_shu.value = localStorage.AI_zhi_xing_zuiduo_s;
    }
});
// 最大并发对话数
AI_sz_zdbfs_kaiguan.addEventListener('click', function(e) {
    if (window.getComputedStyle(AI_sz_zdbfs_kaiguan_d).left == '0px') {
        AI_sz_zdbfs_kaiguan.className = 'AI_sz_kaiguan2 AI_sz_dydxc_kaiguan';
        AI_sz_zdbfs_kaiguan_d.style.left = '29px';

        AI_sz_zdbfs_shu.disabled = false;
        AI_sz_zdbfs_shu.style.opacity = 1;
        localStorage.AI_zhi_xing_zuiduo_s = 3;
        AI_sz_zdbfs_shu.value = localStorage.AI_zhi_xing_zuiduo_s;

        if (localStorage.Sku_kfzms == 0) {
            // 第三者
            AI_sz_dydxc_kaiguan.className = 'AI_sz_kaiguan AI_sz_dydxc_kaiguan';
            AI_sz_dydxc_kaiguan_d.style.left = '0px';
            AI_sz_dkj_kaiguan.className = 'AI_sz_kaiguan AI_sz_dydxc_kaiguan';
            AI_sz_dkj_kaiguan_d.style.left = '0px';
            AI_sz_lxdh_kaiguan.className = 'AI_sz_kaiguan AI_sz_dydxc_kaiguan';
            AI_sz_jssc_lxdh_d.style.left = '0px';

            AI_sz_lxdh_shu.disabled = true;
            localStorage.AI_lxdh = 0;
            AI_sz_lxdh_shu.value = localStorage.AI_lxdh;
            AI_sz_lxdh_shu.style.opacity = 0.5;
            AI_sz_dydxc_shu.disabled = true;
            AI_sz_dkj_shu.disabled = true;
            localStorage.AI_xunhuan_cs = 1;
            localStorage.AI_mx_sl = 1;
            AI_sz_dydxc_shu.style.opacity = 0.5;
            AI_sz_dkj_shu.style.opacity = 0.5;
            AI_sz_dkj_shu.value = localStorage.AI_mx_sl;
            AI_sz_dydxc_shu.value = localStorage.AI_xunhuan_cs;

            // 重新创建mods框架
            AI_mods_cxcj();
        }
    } else {
        AI_sz_zdbfs_kaiguan.className = 'AI_sz_kaiguan AI_sz_dydxc_kaiguan';
        AI_sz_zdbfs_kaiguan_d.style.left = '0px';

        AI_sz_zdbfs_shu.disabled = true;
        AI_sz_zdbfs_shu.style.opacity = 0.5;
        localStorage.AI_zhi_xing_zuiduo_s = 1;
        AI_sz_zdbfs_shu.value = localStorage.AI_zhi_xing_zuiduo_s;
    }
});
AI_sz_zdbfs_shu.addEventListener('blur', function(e) {
    if (this.value < 2 && localStorage.Sku_kfzms == 0) {
        this.value = 2;
        Sku_tctx('输入范围为 (2 ~ 10)');
    } else if (this.value > 10 && localStorage.Sku_kfzms == 0) {
        this.value = 10;
        Sku_tctx('输入范围为 (2 ~ 10)');
    }

    localStorage.AI_zhi_xing_zuiduo_s = this.value;
});
// 即时输出
AI_sz_jssc_kaiguan.addEventListener('click', function(e) {
    if (localStorage.AI_jssc - 0 == 0) {
        AI_sz_jssc_kaiguan.className = 'AI_sz_kaiguan2 AI_sz_dydxc_kaiguan';
        AI_sz_jssc_kaiguan_d.style.left = '29px';

        localStorage.AI_jssc = 1;

        if (localStorage.Sku_kfzms == 0) {
            // 第三者 
            AI_sz_lxdh_kaiguan.className = 'AI_sz_kaiguan AI_sz_dydxc_kaiguan';
            AI_sz_jssc_lxdh_d.style.left = '0px';

            AI_sz_lxdh_shu.disabled = true;
            localStorage.AI_lxdh = 0;
            AI_sz_lxdh_shu.value = localStorage.AI_zhi_xing_zuiduo_s;
            AI_sz_lxdh_shu.style.opacity = 0.5;
        }
    } else {
        AI_sz_jssc_kaiguan.className = 'AI_sz_kaiguan AI_sz_dydxc_kaiguan';
        AI_sz_jssc_kaiguan_d.style.left = '0px';

        localStorage.AI_jssc = 0;
    }
});
// 连续对话
AI_sz_lxdh_kaiguan.addEventListener('click', function(e) {
    if (localStorage.AI_lxdh - 0 == 0) {
        AI_sz_lxdh_kaiguan.className = 'AI_sz_kaiguan2 AI_sz_dydxc_kaiguan';
        AI_sz_jssc_lxdh_d.style.left = '29px';

        localStorage.AI_lxdh = 10;
        AI_sz_lxdh_shu.disabled = false;
        AI_sz_lxdh_shu.style.opacity = 1;
        AI_sz_lxdh_shu.value = localStorage.AI_lxdh;

        // 重新对话
        if (AI_zhi_xing_s == 0 && localStorage.Sku_kfzms == 0) {
            AI_zj_nr.innerHTML = '';
            localStorage.AI_jl = '[]';
            AI_xian_cheng = 0;
        }

        if (localStorage.Sku_kfzms == 0) {
            // 第三者
            AI_sz_dydxc_kaiguan.className = 'AI_sz_kaiguan AI_sz_dydxc_kaiguan';
            AI_sz_dydxc_kaiguan_d.style.left = '0px';

            localStorage.AI_xunhuan_cs = 1;
            AI_sz_dydxc_shu.value = localStorage.AI_xunhuan_cs;
            AI_sz_dydxc_shu.disabled = true;
            AI_sz_dydxc_shu.style.opacity = 0.5;

            AI_sz_dkj_kaiguan.className = 'AI_sz_kaiguan AI_sz_dydxc_kaiguan';
            AI_sz_dkj_kaiguan_d.style.left = '0px';

            localStorage.AI_mx_sl = 1;
            AI_sz_dkj_shu.value = localStorage.AI_mx_sl;
            AI_sz_dkj_shu.disabled = true;
            AI_sz_dkj_shu.style.opacity = 0.5;
            // 重新创建mods框架
            AI_mods_cxcj();

            AI_sz_zdbfs_kaiguan.className = 'AI_sz_kaiguan AI_sz_dydxc_kaiguan';
            AI_sz_zdbfs_kaiguan_d.style.left = '0px';

            AI_sz_zdbfs_shu.disabled = true;
            AI_sz_zdbfs_shu.style.opacity = 0.5;
            localStorage.AI_zhi_xing_zuiduo_s = 1;
            AI_sz_zdbfs_shu.value = localStorage.AI_zhi_xing_zuiduo_s;

            AI_sz_jssc_kaiguan.className = 'AI_sz_kaiguan AI_sz_dydxc_kaiguan';
            AI_sz_jssc_kaiguan_d.style.left = '0px';

            localStorage.AI_jssc = 0;
        }
    } else {
        AI_sz_lxdh_kaiguan.className = 'AI_sz_kaiguan AI_sz_dydxc_kaiguan';
        AI_sz_jssc_lxdh_d.style.left = '0px';

        localStorage.AI_lxdh = 0;
        AI_sz_lxdh_shu.disabled = true;
        AI_sz_lxdh_shu.style.opacity = 0.5;
        AI_sz_lxdh_shu.value = localStorage.AI_lxdh;

        if (localStorage.Sku_kfzms == 0) {
            // 第三者
            AI_sz_zdbfs_kaiguan.className = 'AI_sz_kaiguan2 AI_sz_dydxc_kaiguan';
            AI_sz_zdbfs_kaiguan_d.style.left = '29px';

            AI_sz_zdbfs_shu.disabled = false;
            AI_sz_zdbfs_shu.style.opacity = 1;
            localStorage.AI_zhi_xing_zuiduo_s = 3;
            AI_sz_zdbfs_shu.value = localStorage.AI_zhi_xing_zuiduo_s;
        }
    }
});
AI_sz_lxdh_shu.addEventListener('blur', function(e) {
    if (this.value < 1 && localStorage.Sku_kfzms == 0) {
        this.value = 1;
        Sku_tctx('输入范围为 (1 ~ 50)');
    } else if (this.value > 50 && localStorage.Sku_kfzms == 0) {
        this.value = 50;
        Sku_tctx('输入范围为 (1 ~ 50)');
    }

    localStorage.AI_lxdh = this.value;
});
// 联网搜索
AI_sz_lwss_kaiguan.addEventListener('click', function(e) {
    if (localStorage.AI_lwss == 'true') {
        localStorage.AI_lwss = false;
        AI_sz_lwss_kaiguan.className = 'AI_sz_kaiguan AI_sz_dydxc_kaiguan';
        AI_sz_lwss_lxdh_d.style.left = '0px';
        console.log('关闭联网搜索');
    } else if (localStorage.AI_lwss == 'false') {
        localStorage.AI_lwss = true;
        AI_sz_lwss_kaiguan.className = 'AI_sz_kaiguan2 AI_sz_dydxc_kaiguan';
        AI_sz_lwss_lxdh_d.style.left = '29px';
        console.log('打开联网搜索');
    }
});





// 创建一个临时的textarea并执行复制
function copyToClipboard(value, message) {
    const textArea = document.createElement('textarea');
    let text = value.replace(/(\n{2,})/g, '\n\n').replace(/\n+$/, ''); // 将两个以上的换行符替换为两个换行符，并去除结尾的换行符
    textArea.value = text; // 设置textarea的值
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy'); // 执行复制操作
    document.body.removeChild(textArea); // 移除临时textarea
    Sku_tctx(message); // 提示用户
}

var AI_zj = document.querySelector('.AI_zj');
// 为父元素添加点击事件监听器
let clickPosition = { x: 0, y: 0 }; // 定义一个变量来存储鼠标点击时的位置
var td_target;
AI_zj.addEventListener('mousedown', function(e) {
    if (e.button === 0) {
        td_target = e.target;
        clickPosition = { x: e.clientX, y: e.clientY };
        AI_zj.addEventListener('mouseup', onMouseUp);
    }
});

function onMouseUp(e) {
    // 移除mousemove和mouseup事件监听器
    AI_zj.removeEventListener('mouseup', onMouseUp);
    // 执行检查函数
    let releasePosition = { x: e.clientX, y: e.clientY };
    let distance = Math.sqrt(Math.pow(releasePosition.x - clickPosition.x, 2) + Math.pow(releasePosition.y - clickPosition.y, 2));
    // 如果距离小于5px，执行函数
    if (distance < 5) {
        console.log(td_target.nodeName);

        if (td_target.classList.contains('AI_huida_nr') || td_target.classList.contains('yh_huida_nr')) {
            copyToClipboard(td_target.innerText, '文本已复制到剪贴板');
        } else if (td_target.nodeName === 'PRE') {
            copyToClipboard(td_target.innerText, '代码已复制到剪贴板');
        } else if (td_target.nodeName === 'CODE') {
            copyToClipboard(td_target.innerText, '单词已复制到剪贴板');
        } else if (td_target.nodeName === 'IMG') {
            copyToClipboard(td_target.src, '图片链接已复制到剪贴板');
        } else if (td_target.nodeName === 'P') {
            copyToClipboard(td_target.innerText, '段落已复制到剪贴板');
        }

        AI_bottom_srk.focus();
    }
}
// 为父元素添加点击事件监听器
AI_zj.addEventListener('contextmenu', function(e) { //音频、事件委托
    const target = e.target;

    if (target.classList.contains('AI_huida_nr') || target.classList.contains('yh_huida_nr')) {
        SKu_bo_fang_qi(target.innerText);
    } else if (target.nodeName === 'PRE') {
        SKu_bo_fang_qi(target.innerText);
    } else if (target.nodeName === 'CODE') {
        SKu_bo_fang_qi(target.innerText);
    }
});





// 拖拽读取导入信息
var AI_bottom_srk_hz = document.querySelector('.AI_bottom_srk_hz');
AI_bottom_srk_hz.addEventListener('dragover', function(e) {
    e.preventDefault();
});
AI_bottom_srk_hz.addEventListener('drop', function(e) {
    e.preventDefault();
    var dt = e.dataTransfer;
    var files = dt.files;
    var dx = new FileReader();
    dx.readAsText(files[0]);
    dx.onload = function(e) {
        var wj = e.target.result;
        // 处理信息
        AI_bottom_srk.value += wj;
        AI_bottom_srk.click();
    }
});



// 按键
AI_bottom_srk.addEventListener('keydown', function(e) {
    var sf_shift4 = 0;
    if (e.shiftKey || e.ctrlKey) {
        sf_shift4 = 1;
    }
    // 检查是否按下了Shift键和Enter键
    if (sf_shift4 == 0 && e.key == 'Enter') {
        // 阻止默认行为
        e.preventDefault();
    }
});
AI_kjzl_s_tjl.addEventListener('keydown', function(e) {
    var sf_shift4 = 0;
    if (e.shiftKey || e.ctrlKey) {
        sf_shift4 = 1;
    }
    // 检查是否按下了Shift键和Enter键
    if (sf_shift4 == 0 && e.key == 'Enter') {
        // 阻止默认行为
        e.preventDefault();
    }
});
var sf_shift2 = 0;
AI_bottom_srk.addEventListener('keydown', function(e) {
    if (e.shiftKey && e.key === 'Enter') {
        sf_shift2 = 1;
    }
    if (e.ctrlKey && e.key === 'Enter') {
        sf_shift2 = 1;
        AI_ksfy();
    }
})
AI_bottom_srk.addEventListener('keyup', function(e) {
    if (e.key == 'Enter' && sf_shift2 == 0) {
        AI_bottom_srk_fs.click();
    } else if (e.key == 'Enter' && sf_shift2 == 1) {
        sf_shift2 = 0;
    }
});
AI_kjzl_s_tjl.addEventListener('keydown', function(e) {
    if ((e.shiftKey && e.key === 'Enter') || (e.ctrlKey && e.key === 'Enter')) {
        sf_shift2 = 1;
    }
})
AI_kjzl_s_tjl.addEventListener('keyup', function(e) {
    if (e.key == 'Enter' && sf_shift2 == 0) {
        AI_kjzl_s_tjhs();
    } else if (e.key == 'Enter' && sf_shift2 == 1) {
        sf_shift2 = 0;
    }
});
document.addEventListener('keyup', function(e) {
    if (e.key == 'Enter' && AI_kjzl_max.style.display == 'none') {
        AI_bottom_srk.focus();
    } else if (e.key == 'Enter' && AI_kjzl_max.style.display == 'block') {
        AI_kjzl_s_tjl.focus();
    } else if (e.key == 'Alt' && AI_kjzl_max.style.display == 'none') {
        e.preventDefault();
        var AI_kjzl = document.querySelector('.AI_kjzl');
        AI_kjzl.click();
    } else if (e.key == 'Alt' && AI_kjzl_max.style.display == 'block') {
        e.preventDefault();
        AI_kjzl_max.style.display = 'none';
        AI_bottom_srk.focus();
    } else if (e.key == 'F11' && nrmaxs4.style.display == 'block') {
        AI_quanpin_anniu.click();
    }
});
// 放大
if (localStorage.AI_quanpin_true == undefined) {
    localStorage.AI_quanpin_true = 0;
}
var AI_quanpin_anniu = document.querySelector('.AI_quanpin_anniu');
var AI_max = document.querySelector('.AI_max');
if (localStorage.AI_quanpin_true == 0) {
    AI_max.className = 'AI_max';
} else {
    AI_max.className = 'AI_max AI_max2';
}
AI_quanpin_anniu.addEventListener('click', function(e) {

    if (localStorage.AI_quanpin_true == 0) {
        localStorage.AI_quanpin_true = 1;
        AI_max.className = 'AI_max AI_max2';
    } else {
        localStorage.AI_quanpin_true = 0;
        AI_max.className = 'AI_max';
    }

    // 长度设置
    mods_da_xiao_shiying();
});






// 置底
var AI_zhidi = document.querySelector('.AI_zhidi');
AI_zhidi.addEventListener('click', function(e) {
    zdxszxf = 1;
    // var AI_zj_nr = document.querySelector('.AI_zj_nr');
    AI_zj.scroll(0, AI_zj.scrollHeight);
});
AI_zj.addEventListener('scroll', function(e) {
    AI_zj_nrwz();
});

function AI_zj_nrwz() {
    // 获取聊天框的滚动信息
    const scrollTop = AI_zj.scrollTop; // 当前滚动位置
    const scrollHeight = AI_zj.scrollHeight; // 内容总高度
    const clientHeight = AI_zj.clientHeight; // 可见区域高度
    // 判断底部是否有超过 100px 被遮住
    if (scrollHeight - scrollTop - clientHeight > 100) {
        AI_zhidi.style.display = 'block';
    } else {
        AI_zhidi.style.display = 'none';
    }
}




//输入输出大小调整
if (localStorage.AI_yemian_bianlian == undefined) {
    localStorage.AI_yemian_bianlian = '0px';
}
var AI_tuozhuai = document.querySelector('.AI_tuozhuai');
document.documentElement.style.setProperty('--AI_tuozhuai_bianlian', localStorage.AI_tuozhuai_bianlian);
// 拖拽触发事件
if (AI_tuozhuai) {
    let isDragging2 = false;
    let istuozhuai2 = false;
    let startY2 = 0;
    let startBottom2; // 初始底部位置
    var tuozhuai_zhbl2;

    AI_tuozhuai.addEventListener('mousedown', function(e) { // 拖拽点击事件
        e.preventDefault();
        isDragging2 = true;
        startY2 = e.clientY;
        // 记录拖拽开始时的底部位置
        startBottom2 = parseInt(window.getComputedStyle(AI_tuozhuai).bottom); // 转换为整数并移除px单位
        console.log(startBottom2);
        AI_tuozhuai.style.opacity = 1;
    });

    document.addEventListener('mousemove', function(e) { // 拖拽移动事件
        e.preventDefault();
        if (isDragging2) {
            istuozhuai2 = true;
            // 计算拖拽距离
            const currentY = e.clientY;
            const dragDistance = currentY - startY2;
            // 基于初始底部位置和拖拽距离更新位置
            tuozhuai_zhbl2 = (startBottom2 - dragDistance - 140);
            if (tuozhuai_zhbl2 < '0') {
                tuozhuai_zhbl2 = '0';
            } else if (tuozhuai_zhbl2 > '428') {
                tuozhuai_zhbl2 = '428';
            }
            tuozhuai_zhbl2 = tuozhuai_zhbl2 + 'px';
            AI_tuozhuai.style.bottom = 'calc(140px + ' + tuozhuai_zhbl2 + ')';
        }
    });

    document.addEventListener('mouseup', function(e) { // 拖拽结束事件
        e.preventDefault();
        if (isDragging2) {
            // 拖拽结束时触发事件
            console.log('拖拽结束触发事件');
            // 这里可以添加拖拽结束时的代码
            AI_tuozhuai.style.opacity = null;
            isDragging2 = false;
            // 保存拖拽结束时的位置
            if (istuozhuai2) {
                localStorage.AI_tuozhuai_bianlian = tuozhuai_zhbl2;
                document.documentElement.style.setProperty('--AI_tuozhuai_bianlian', tuozhuai_zhbl2);
            }
            istuozhuai2 = false;
        }
    });
}