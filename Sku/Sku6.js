// 匹配浏览器高度
nrmaxs5 = document.querySelector('.nrmaxs5');
nrmaxs5.style.marginTop = (window.innerHeight + 56 - 523 - 80) / 2 + 'px';
window.addEventListener('resize', function () {
    nrmaxs5 = document.querySelector('.nrmaxs5');
    nrmaxs5.style.marginTop = (window.innerHeight + 56 - 523 - 80) / 2 + 'px';
});


// 全屏
var daka_max = document.querySelector('.daka_max');
if (localStorage.daka_qp == undefined) {
    localStorage.daka_qp = 0;
}
if (localStorage.daka_qp == 1) {
    daka_max.classList.add('daka_max2');
}
var daka_quanpin_anniu = document.querySelector(".daka_quanpin_anniu");
daka_quanpin_anniu.addEventListener('click', function (e) {
    if (localStorage.daka_qp == 0) {
        localStorage.daka_qp = 1;
        daka_max.classList.add('daka_max2');
    } else {
        localStorage.daka_qp = 0;
        daka_max.classList.remove('daka_max2');
    }
});




// 滚动条
Sku_gundontiao('.daka_l_bot_max', '.daka_gundontiao_max', '.daka_gundontiao_min');




// 输入输出大小调整
if (localStorage.shimi_tuozhuai_bianlian == undefined) {
    localStorage.shimi_tuozhuai_bianlian = '0px';
}
var shimi_tuozhuai = document.querySelector('.shimi_tuozhuai');
document.documentElement.style.setProperty('--shimi_tuozhuai_bianlian', localStorage.shimi_tuozhuai_bianlian);
// 拖拽触发事件
if (shimi_tuozhuai) {
    let isDragging3 = false;
    let istuozhuai3 = false;
    let startX3 = 0;
    let startLeft3;
    var tuozhuai_zhbl3;

    shimi_tuozhuai.addEventListener('mousedown', function (e) { // 拖拽点击事件
        e.preventDefault();
        isDragging3 = true;
        startX3 = e.clientX;
        // 获取当前的 left 值
        startLeft3 = parseInt(window.getComputedStyle(shimi_tuozhuai).left);
        console.log(startLeft3);
        shimi_tuozhuai.style.opacity = 1;
    });

    document.addEventListener('mousemove', function (e) { // 拖拽移动事件
        e.preventDefault();
        if (isDragging3) {
            istuozhuai3 = true;
            // 计算拖拽距离 (使用 clientX)
            const currentX = e.clientX;
            const dragDistance = currentX - startX3;

            // 计算新的位置
            tuozhuai_zhbl3 = (startLeft3 + dragDistance - 200);

            // 边界限制
            if (tuozhuai_zhbl3 < '0') {
                tuozhuai_zhbl3 = '0';
            } else if (tuozhuai_zhbl3 > '400') {
                tuozhuai_zhbl3 = '400';
            }

            tuozhuai_zhbl3 = tuozhuai_zhbl3 + 'px';

            // 修改 left 样式
            shimi_tuozhuai.style.left = 'calc(200px + ' + tuozhuai_zhbl3 + ')';
        }
    });

    document.addEventListener('mouseup', function (e) { // 拖拽结束事件
        if (isDragging3) {
            e.preventDefault();
            console.log('拖拽结束触发事件');
            shimi_tuozhuai.style.opacity = null;
            isDragging3 = false;
            // 保存拖拽结束时的位置
            if (istuozhuai3) {
                localStorage.shimi_tuozhuai_bianlian = tuozhuai_zhbl3;
                document.documentElement.style.setProperty('--shimi_tuozhuai_bianlian', tuozhuai_zhbl3);
            }
            istuozhuai3 = false;
        }
    });
}



// 滚动条
Sku_gundontiao('.daka_r_bot_bottom', '.shimi_gundontiao_max', '.shimi_gundontiao_min');



//创建私密存储变量
if (localStorage.Sku_shimi_chunchu == undefined) {
    localStorage.Sku_shimi_chunchu = '[["","","1"]]';
}
//创建私密密钥存储变量
if (localStorage.Sku_shimi_miyao == undefined) {
    localStorage.Sku_shimi_miyao = '';
}




//登录密钥
var shimi_mima_qr = document.querySelector('.shimi_mima_qr');
var shimi_mima_input = document.querySelector('.shimi_mima_input');
var shimi_mima_max = document.querySelector('.shimi_mima_max');
var daka_l_bot = document.querySelector('.daka_l_bot');
var daka_r_bot = document.querySelector('.daka_r_bot');
var shimi_shousuo = document.querySelector('.shimi_shousuo');
var shimi_tianjia_tp = document.querySelector('.shimi_tianjia_tp');
var shimi_mima_gl_old = ''; // 用于修改密码时暂存旧密
var shimi_mima_gl = '';
if (localStorage.Sku_shimi_miyao == '') {
    shimi_mima_input.placeholder = '输入新密钥';
}
daka_max.addEventListener('click', function (e) {
    shimi_mima_input.focus();
});

shimi_mima_qr.addEventListener('click', function (e) {
    if (shimi_mima_input.value == '') {
        shimi_mima_input.focus();
        return;
    }
    //初始化或修改密钥输入
    if (shimi_mima_input.placeholder == '输入新密钥') {
        shimi_mima_gl = shimi_mima_input.value;
        shimi_mima_input.value = '';
        shimi_mima_input.focus();
        shimi_mima_input.placeholder = '再次输入密钥确认';
    } else if (shimi_mima_input.value !== shimi_mima_gl && shimi_mima_input.placeholder == '再次输入密钥确认') {
        Sku_tctx('两次输入的密钥不一致');
        shimi_mima_input.value = '';
        shimi_mima_input.focus();
        shimi_mima_input.placeholder = '输入新密钥';
    } else if (shimi_mima_input.value == shimi_mima_gl && shimi_mima_input.placeholder == '再次输入密钥确认') {
        Sku_haxijiami(shimi_mima_gl).then(async hash => { // 加上 async
            localStorage.Sku_shimi_miyao = hash;
            shimi_xiugai_mima.innerHTML = '修改密钥';
            shimi_mima_input.placeholder = '输入密钥';
            shimi_mima_max.style.display = 'none';
            if (shimi_mima_gl_old !== '') { // 如果是修改密码流程（旧密码不为空），则重新加密所有数据
                var list = JSON.parse(localStorage.Sku_shimi_chunchu);
                for (var i = 0; i < list.length; i++) {
                    // 先用旧密钥解密，忽略空数据
                    var t = list[i][0] ? await Sku_AES256GCM(list[i][0], shimi_mima_gl_old, "decrypt") : '';
                    var c = list[i][1] ? await Sku_AES256GCM(list[i][1], shimi_mima_gl_old, "decrypt") : '';
                    // 再用新密钥加密  
                    list[i][0] = await Sku_AES256GCM(t, shimi_mima_gl, "encrypt");
                    list[i][1] = await Sku_AES256GCM(c, shimi_mima_gl, "encrypt");
                }
                localStorage.Sku_shimi_chunchu = JSON.stringify(list);
                shimi_mima_gl_old = ''; // 清空临时变量
            }
            shimi_xianshi();
        });
    }
    //登录密钥
    if (localStorage.Sku_shimi_miyao !== '' && shimi_mima_input.placeholder == '输入密钥') {
        Sku_haxijiami(shimi_mima_input.value).then(hash => {
            if (localStorage.Sku_shimi_miyao == hash) {
                shimi_mima_gl = shimi_mima_input.value;
                shimi_xianshi();
            } else {
                Sku_tctx('密钥错误');
                shimi_mima_input.value = '';
                shimi_mima_input.focus();
            }
        });
    }
    //修改密钥
    if (shimi_mima_input.placeholder == '输入旧密钥') {
        Sku_haxijiami(shimi_mima_input.value).then(hash => {
            if (localStorage.Sku_shimi_miyao == hash) {
                shimi_mima_gl_old = shimi_mima_input.value; // 暂存旧密码
                shimi_mima_input.placeholder = '输入新密钥';
                shimi_mima_input.value = '';
                shimi_mima_input.focus();
            } else {
                Sku_tctx('密钥错误');
                shimi_mima_input.value = '';
                shimi_mima_input.focus();
            }
        });
    }
});




//显示页面
function shimi_xianshi() {
    shimi_mima_input.value = '';
    shimi_mima_max.style.display = 'none';
    daka_l_bot.style.display = 'block';
    daka_r_bot.style.display = 'block';
    shimi_shousuo.style.display = 'block';
    shimi_tianjia_tp.style.display = 'block';
    jiami_wenben_shuchu();
}




//修改密钥
var shimi_xiugai_mima = document.querySelector('.shimi_xiugai_mima');
shimi_xiugai_mima.addEventListener('click', function (e) {
    if (localStorage.Sku_shimi_miyao == '') {
        Sku_tctx('无密钥，无法修改');
        return;
    }
    if (this.innerHTML == '修改密钥' && localStorage.Sku_shimi_miyao !== '') {
        this.innerHTML = '返回';
        shimi_mima_input.value = '';
        shimi_mima_input.focus();
        shimi_mima_input.placeholder = '输入旧密钥';
    } else if (this.innerHTML == '返回') {
        this.innerHTML = '修改密钥';
        shimi_mima_input.value = '';
        shimi_mima_input.focus();
        shimi_mima_input.placeholder = '输入密钥';
    }
});


//输出加密文本
var daka_l_bot_max = document.querySelector('.daka_l_bot_max');
var daka_r_bot_top = document.querySelector('.daka_r_bot_top');
var daka_r_bot_bottom = document.querySelector('.daka_r_bot_bottom');

// 新增：HTML 转义函数，防止特殊符号被解析为标签或导致显示异常
function escapeHtml(text) {
    if (text === null || text === undefined) return '';
    // 先将内容转为字符串，然后替换特殊字符
    return String(text)
        .replace(/&/g, '&amp;')  // 必须先替换 &，否则会把后面生成的实体前面的 & 再次替换
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

async function jiami_wenben_shuchu() {
    // 1. 清空母盒子原有的内容
    daka_l_bot_max.innerHTML = '';
    daka_r_bot_top.value = '';
    daka_r_bot_bottom.value = '';
    shimi_shanchu_tp.style.display = '';
    shimi_quanxuan_tp.style.display = '';
    shimi_quxiao_tp.style.display = '';
    shimi_shanchu_fuxuankuan = [];
    // 2. 从 localStorage 获取数据
    var dataList = JSON.parse(localStorage.getItem('Sku_shimi_chunchu'));
    // 解密所有数据用于显示和搜索
    var decryptedList = [];
    for (var i = 0; i < dataList.length; i++) {
        try {
            // 解密标题和内容，如果解密失败则显示提示
            var title = dataList[i][0] ? await Sku_AES256GCM(dataList[i][0], shimi_mima_gl, "decrypt") : '';
            var content = dataList[i][1] ? await Sku_AES256GCM(dataList[i][1], shimi_mima_gl, "decrypt") : '';
            decryptedList.push([title, content, dataList[i][2]]); // [标题, 内容, ID]
        } catch (e) {
            // 解密失败处理
            decryptedList.push(["解密失败", "密钥错误", dataList[i][2]]);
        }
    }
    // 搜索逻辑为对 decryptedList 操作
    if (shimi_shousuo.value !== '') {
        var dataList2 = [];
        for (var i = 0; i < decryptedList.length; i++) {
            if (containsAllChars(shimi_shousuo.value, (decryptedList[i][0] + decryptedList[i][1]))) {
                dataList2.push(decryptedList[i]);
            }
        }
        decryptedList = dataList2;
    }
    if (!dataList || dataList.length == 0) {
        console.log("加密文本中没有数据");
        daka_r_bot_top.readOnly = true;
        daka_r_bot_bottom.readOnly = true;
        return;
    }
    daka_r_bot_top.readOnly = false;
    daka_r_bot_bottom.readOnly = false;
    // 4. 遍历数据，拼接 HTML 字符串
    var htmlStr = '';
    for (var i = 0; i < decryptedList.length; i++) {
        var item = decryptedList[i];
        var title = escapeHtml(String(item[0] || '').substring(0, 200));
        var content = escapeHtml(String(item[1] || '').substring(0, 200));
        // 使用模板字符串拼接
        htmlStr += `
            <div class="shimi_wenben_s_max" data-index="${item[2]}">
                <div class="shimi_wenben_s_top">${title}</div>
                <div class="shimi_wenben_s_bottom">${content}</div>
                <div class="shimi_wenben_s_fuxuankuan"></div>
            </div>
        `;
    }
    // 5. 将拼接好的 HTML 一次性放入母盒子中
    daka_l_bot_max.innerHTML = htmlStr;
    const shimi_wenben_s_max = document.querySelectorAll('.shimi_wenben_s_max');
    shimi_wenben_s_max[0].click();
}




//点击预览完整内容
var shimi_index = '';
daka_l_bot_max.addEventListener('click', async function (e) {
    if (e.target.classList.contains('shimi_wenben_s_max')) {
        daka_l_bot_max.querySelectorAll('.shimi_wenben_s_max').forEach(item => {
            item.style.backgroundColor = '';
        });
        e.target.style.backgroundColor = 'var(--zi_ti_color_20)';
        shimi_index = e.target.getAttribute('data-index');
        console.log('当前指向ID:', shimi_index);
        var dataList = JSON.parse(localStorage.getItem('Sku_shimi_chunchu'));
        var itemData = dataList.find(item => String(item[2]) === shimi_index);
        // 解密后赋值
        daka_r_bot_top.value = itemData[0] ? await Sku_AES256GCM(itemData[0], shimi_mima_gl, "decrypt") : '';
        daka_r_bot_bottom.value = itemData[1] ? await Sku_AES256GCM(itemData[1], shimi_mima_gl, "decrypt") : '';
    }
});




//修改加密文本
async function jiami_wenben_xiugai2(indexs, tops, bottoms) {
    const currentKey = shimi_mima_gl;
    if (!currentKey) return;
    var Sku_shimi_chunchus = JSON.parse(localStorage.getItem('Sku_shimi_chunchu'));
    var realIndex = Sku_shimi_chunchus.findIndex(item => String(item[2]) === indexs);

    if (tops !== null) {
        Sku_shimi_chunchus[realIndex][0] = await Sku_AES256GCM(tops, currentKey, "encrypt");
        var targetDiv = document.querySelector('.shimi_wenben_s_max[data-index="' + indexs + '"]');
        if (targetDiv) targetDiv.querySelector('.shimi_wenben_s_top').innerHTML = escapeHtml(String(tops).substring(0, 200));
    }

    if (bottoms !== null) {
        Sku_shimi_chunchus[realIndex][1] = await Sku_AES256GCM(bottoms, currentKey, "encrypt");
        var targetDiv = document.querySelector('.shimi_wenben_s_max[data-index="' + indexs + '"]');
        if (targetDiv) targetDiv.querySelector('.shimi_wenben_s_bottom').innerHTML = escapeHtml(String(bottoms).substring(0, 200));
    }

    localStorage.setItem('Sku_shimi_chunchu', JSON.stringify(Sku_shimi_chunchus));
}


const debounceCache = {};
function getDebouncedFn(indexs) {
    if (!debounceCache[indexs]) {
        debounceCache[indexs] = Sku_fan_dou_don(jiami_wenben_xiugai2, 500);
    }
    return debounceCache[indexs];
}
daka_r_bot_top.addEventListener('input', function () {
    if (!shimi_index) return;
    getDebouncedFn(shimi_index + '_top')(shimi_index, this.value, null);
});
daka_r_bot_bottom.addEventListener('input', function () {
    if (!shimi_index) return;
    getDebouncedFn(shimi_index + '_bottom')(shimi_index, null, this.value);
});





//新增加密文本
shimi_tianjia_tp.addEventListener('click', async function () {
    var Sku_shimi_chunchus = JSON.parse(localStorage.getItem('Sku_shimi_chunchu'));
    // 加密空字符串
    var encEmpty = await Sku_AES256GCM('', shimi_mima_gl, "encrypt");
    Sku_shimi_chunchus.unshift([encEmpty, encEmpty, Date.now()]);
    localStorage.setItem('Sku_shimi_chunchu', JSON.stringify(Sku_shimi_chunchus));
    jiami_wenben_shuchu();
    daka_r_bot_top.focus();
});




//删除加密文本
var shimi_shanchu_tp = document.querySelector('.shimi_shanchu_tp');
var shimi_quanxuan_tp = document.querySelector('.shimi_quanxuan_tp');
var shimi_quxiao_tp = document.querySelector('.shimi_quxiao_tp');
var shimi_shanchu_fuxuankuan = [];
daka_l_bot_max.addEventListener('click', function (e) {
    if (e.target.classList.contains('shimi_wenben_s_fuxuankuan')) {
        if (!shimi_shanchu_fuxuankuan.includes(e.target.parentElement.getAttribute('data-index'))) {
            shimi_shanchu_fuxuankuan.push(e.target.parentElement.getAttribute('data-index'));
        } else {
            shimi_shanchu_fuxuankuan.splice(shimi_shanchu_fuxuankuan.indexOf(e.target.parentElement.getAttribute('data-index')), 1);
        }
        console.log(shimi_shanchu_fuxuankuan);

        shimi_shanchu_fuxuankuan_yanshi();
    }
});
function shimi_shanchu_fuxuankuan_yanshi() {
    document.querySelectorAll('.shimi_wenben_s_max').forEach(item => {
        if (shimi_shanchu_fuxuankuan.includes(item.getAttribute('data-index'))) {
            item.querySelector('.shimi_wenben_s_fuxuankuan').style.backgroundColor = 'var(--zi_ti_color)';
            item.querySelector('.shimi_wenben_s_fuxuankuan').style.opacity = '1';
        } else {
            item.querySelector('.shimi_wenben_s_fuxuankuan').style.backgroundColor = '';
            item.querySelector('.shimi_wenben_s_fuxuankuan').style.opacity = '';
        }
    });
    if (shimi_shanchu_fuxuankuan.length == 0) {
        shimi_shanchu_tp.style.display = '';
        shimi_quanxuan_tp.style.display = '';
        shimi_quxiao_tp.style.display = '';
    } else {
        shimi_shanchu_tp.style.display = 'block';
        shimi_quanxuan_tp.style.display = 'block';
        shimi_quxiao_tp.style.display = 'block';
    }
}
shimi_shanchu_tp.addEventListener('click', function () {
    var Sku_shimi_chunchus = JSON.parse(localStorage.getItem('Sku_shimi_chunchu'));
    Sku_shimi_chunchus = Sku_shimi_chunchus.filter(item => !shimi_shanchu_fuxuankuan.includes(String(item[2])));
    localStorage.setItem('Sku_shimi_chunchu', JSON.stringify(Sku_shimi_chunchus));
    jiami_wenben_shuchu();
});
shimi_quanxuan_tp.addEventListener('click', function () {
    shimi_shanchu_fuxuankuan = [];
    document.querySelectorAll('.shimi_wenben_s_max').forEach(item => {
        shimi_shanchu_fuxuankuan.push(item.getAttribute('data-index'));
    });
    console.log(shimi_shanchu_fuxuankuan);
    shimi_shanchu_fuxuankuan_yanshi();
});
shimi_quxiao_tp.addEventListener('click', function () {
    shimi_shanchu_fuxuankuan = [];
    console.log(shimi_shanchu_fuxuankuan);
    shimi_shanchu_fuxuankuan_yanshi();
});




//清理缓存
function shimi_qinglihuancun() {
    daka_l_bot_max.innerHTML = '';
    daka_r_bot_top.value = '';
    daka_r_bot_bottom.value = '';
    shimi_mima_input.value = '';
    shimi_shousuo.value = '';
    shimi_shanchu_tp.style.display = '';
    shimi_quanxuan_tp.style.display = '';
    shimi_quxiao_tp.style.display = '';
    shimi_tianjia_tp.style.display = '';
    shimi_mima_max.style.display = 'block';
    daka_l_bot.style.display = 'none';
    daka_r_bot.style.display = 'none';
    shimi_shousuo.style.display = '';
    shimi_tianjia_tp.style.display = '';
    shimi_mima_gl = '';
    shimi_mima_gl_old = '';
    shimi_shanchu_fuxuankuan = [];
    for (var key in debounceCache) { delete debounceCache[key]; }//清理防抖缓存，释放闭包中可能存在的密钥引用
}
var top_dhl_S = document.querySelector('.top_dhl').querySelectorAll('div');
for (var i = 0; i < top_dhl_S.length; i++) {
    if (i !== 5) {
        top_dhl_S[i].addEventListener('click', function (e) {
            shimi_qinglihuancun();
        });
    }
}




//筛选加密文本
shimi_shousuo.addEventListener('input', function () {
    if (shimi_shousuo.value == '') {
        jiami_wenben_shuchu();
        shimi_tianjia_tp.style.display = '';
    } else {
        shimi_shousuo_hs();
    }
});
var shimi_shousuo_hs = Sku_fan_dou_don(function () {
    jiami_wenben_shuchu();
    shimi_tianjia_tp.style.display = '';
}, 100)




//快捷键
var nrmaxs5 = document.querySelector('.nrmaxs5');
document.addEventListener('keydown', function (e) {
    if (nrmaxs5.style.display == 'block') {
        if (e.ctrlKey && e.key == '/') {
            shimi_shousuo.focus();
        }
        if (shimi_mima_max.style.display == 'block' && e.key == 'Enter') {
            shimi_mima_qr.click();
        }
        if (shimi_shanchu_tp.style.display == 'block' && e.key == 'Delete') {
            shimi_shanchu_tp.click();
        }
        if (shimi_quxiao_tp.style.display == 'block' && e.key == 'Escape') {
            shimi_quxiao_tp.click();
        } else if (shimi_shousuo.value != '' && e.key == 'Escape') {
            shimi_shousuo.value = '';
            shimi_shousuo.dispatchEvent(new Event('input'));
        }
    }
});
document.addEventListener('keyup', function (e) {
    if (nrmaxs5.style.display == 'block') {
        if (shimi_tianjia_tp.style.display == 'block' && e.key == '+') {
            shimi_tianjia_tp.click();
        }
    }
});





// 拖拽排序功能
(function () {
    var drag_item = null;

    daka_l_bot_max.addEventListener('mousedown', function (e) {
        var target = e.target.closest('.shimi_wenben_s_max');
        // 非删除模式下、点击的不是复选框才允许拖拽
        if (target
            && !e.target.classList.contains('shimi_wenben_s_fuxuankuan')
            && shimi_shanchu_fuxuankuan.length === 0) {
            drag_item = target;
            drag_item.style.opacity = '0.5';
            e.preventDefault();
        }
    });

    document.addEventListener('mousemove', function (e) {
        if (!drag_item) return;
        var items = daka_l_bot_max.querySelectorAll('.shimi_wenben_s_max');
        var dragIndex = Array.prototype.indexOf.call(items, drag_item);
        for (var i = 0; i < items.length; i++) {
            if (i === dragIndex) continue;
            var rect = items[i].getBoundingClientRect();
            if (e.clientY > rect.top && e.clientY < rect.bottom) {
                daka_l_bot_max.insertBefore(drag_item, i < dragIndex ? items[i] : items[i].nextElementSibling);
                break;
            }
        }
    });

    document.addEventListener('mouseup', function () {
        if (!drag_item) return;
        drag_item.style.opacity = '1';
        drag_item = null;

        // 按 DOM 顺序直接重排 localStorage 中的数据
        var items = daka_l_bot_max.querySelectorAll('.shimi_wenben_s_max');
        var orderMap = {};
        items.forEach(function (el, i) {
            orderMap[el.getAttribute('data-index')] = i;
        });

        var data = JSON.parse(localStorage.getItem('Sku_shimi_chunchu'));
        data.sort(function (a, b) {
            return orderMap[String(a[2])] - orderMap[String(b[2])];
        });
        localStorage.setItem('Sku_shimi_chunchu', JSON.stringify(data));
    });
})();

