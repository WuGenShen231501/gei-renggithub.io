// 提示音
var sku_tsy = document.querySelectorAll('.sku_tsy');

function Sku_tsy(num) {
    sku_tsy[num].play();
}

// 路径转换
function escapeBackslash2(path) {
    var path2 = path.replace(/\"/g, '');
    var path3 = path2.replace(/\'/g, '');
    var path4 = path3.replace(/\\/g, '\/');
    var path5 = path4.replace(/\/\//g, '\/');
    return path5;
}

// 登录密码独有加密
function S_ku_jiami(myao) {
    var jm_lsbl = myao;
    // 10次加密
    for (var i = 0; i < 10; i++) {
        jm_lsbl = window.btoa(jm_lsbl);
    }
    return WGS_zfc_jiami(jm_lsbl + 'A', miyao);
}
// 登录密码独有解密
function S_ku_jiemi(myao2) {
    var jm_lsbl2 = WGS_zfc_jiemi(myao2, miyao);
    jm_lsbl2 = jm_lsbl2.slice(0, -1);
    // 10次解密
    for (var i = 0; i < 10; i++) {
        jm_lsbl2 = window.atob(jm_lsbl2);
    }
    return jm_lsbl2;
}

// WGS_wenbengundon11(class, 首行缩进)
// function WGS_wenbengundon11(qwe, asd) {
//     if (asd == undefined) { asd = 0; }
//     var wb = document.querySelectorAll(qwe);
//     for (var i = 0; i < wb.length; i++) {
//         wb[i].addEventListener('mouseover', function(e) {
//             var nrcd = this.scrollWidth;
//             var hzcd = this.offsetWidth;
//             if (nrcd > hzcd) {
//                 var duochu = nrcd - hzcd;
//                 var sj = duochu / 50;
//                 this.style.transition = sj + 's linear';
//                 this.style.textIndent = (nrcd * -1) + hzcd + (asd * 1) - asd + 'px';
//             }
//         });
//         wb[i].addEventListener('mouseout', function(e) {
//             this.style.transition = '';
//             this.style.textIndent = asd + 'px';
//         });
//     }
// }

function WGS_wenbengundon11(qwe, asd) {
    var wb = document.querySelectorAll(qwe);
    for (var i = 0; i < wb.length; i++) {
        // 克隆元素
        var clone = wb[i].cloneNode(true);
        clone.style.visibility = 'hidden';
        clone.style.position = 'absolute';
        clone.style.left = '-9999px'; // 将其移出视图
        document.body.appendChild(clone);
        // 进行测量
        var scrollWidth = clone.scrollWidth;
        var offsetWidth = clone.offsetWidth;
        // 移除克隆元素
        document.body.removeChild(clone);

        if (scrollWidth > offsetWidth) {
            wb[i].addEventListener('mouseover', function(e) {
                var nrcd = this.scrollWidth;
                var hzcd = this.offsetWidth;
                var duochu = nrcd - hzcd;
                var sj = duochu / 50;
                this.style.transition = sj + 's linear';
                this.style.textIndent = (nrcd * -1) + hzcd + 'px';
            });
            wb[i].addEventListener('mouseout', function(e) {
                this.style.transition = '';
                this.style.textIndent = asd + 'px';
            });
        }
    }
}




// 匹配浏览器高度
nrmaxs3 = document.querySelector('.nrmaxs3');
nrmaxs3.style.marginTop = (window.innerHeight + 56 - 523 - 80) / 2 + 'px';
window.addEventListener('resize', function() {
    nrmaxs3 = document.querySelector('.nrmaxs3');
    nrmaxs3.style.marginTop = (window.innerHeight + 56 - 523 - 80) / 2 + 'px';
});




//返回
i_fanhui_tp = document.querySelectorAll('.i_fanhui_tp');
for (var i = 0; i < i_fanhui_tp.length; i++) {
    i_fanhui_tp[i].addEventListener('click', function() {
        she_zhi_ym_fh();
    });
}

function she_zhi_ym_fh() {
    shezhi_min = document.querySelector('.shezhi_min');
    shezhi_ym = document.querySelectorAll('.shezhi_ym');

    if (shezhi_daoru_bendi_ym.style.display == 'block' || shezhi_duibixx_ym.style.display == 'block' || shezhi_daoru_yun_ym.style.display == 'block') {
        for (var i = 0; i < shezhi_ym.length; i++) {
            shezhi_ym[i].style.display = 'none';
        }
        shezhi_daoru_ym.style.display = 'block';
    } else {
        for (var i = 0; i < shezhi_ym.length; i++) {
            shezhi_ym[i].style.display = 'none';
        }
        shezhi_min.style.display = 'block';
    }

    daoru_ym_sc.value = '';
}

//壁纸设置
var bizhi_gundon = document.querySelector('.bizhi_gundon');
shezhi_bzsz_ym = document.querySelector('.shezhi_bzsz_ym');
shezhi_bzsz = document.querySelector('.shezhi_bzsz');
shezhi_bzsz.addEventListener('click', function() {
    shezhi_min.style.display = 'none';
    shezhi_bzsz_ym.style.display = 'block';
    bzsz_max.scroll(0, 0);
    bizhi_gundon.innerHTML = '↓';
});

//壁纸高度设置
var bzsz_tj = document.querySelector('.bzsz_tj');
var bzsz_sj = document.querySelector('.bzsz_sj');
var bzsz_tj_ym_TP = document.querySelector('.bzsz_tj_ym_TP');
var bzsz_s_gd = 335 / (window.innerWidth / window.innerHeight);
setTimeout(function() {
    var bzsz_s = document.querySelectorAll('.bzsz_s');
    for (var i = 0; i < bzsz_s.length; i++) {
        bzsz_s[i].style.height = bzsz_s_gd + 'px';
    }
});
bzsz_tj.style.height = bzsz_s_gd + 'px';
bzsz_tj.style.lineHeight = bzsz_s_gd + 'px';
bzsz_sj.style.height = bzsz_s_gd + 'px';
bzsz_sj.style.lineHeight = bzsz_s_gd + 'px';
bzsz_tj_ym_TP.style.height = bzsz_s_gd + 'px';
if (bzsz_s_gd > 250) {
    bzsz_tj_ym_TP.style.width = 250 / (window.innerHeight / window.innerWidth) + 'px';
    bzsz_tj_ym_TP.style.left = 'calc((100% - ' + (250 / (window.innerHeight / window.innerWidth)) + 'px) / 2)';
}
window.addEventListener('resize', function() {
    var bzsz_s = document.querySelectorAll('.bzsz_s');
    var bzsz_s_gd = 335 / (window.innerWidth / window.innerHeight);
    for (var i = 0; i < bzsz_s.length; i++) {
        bzsz_s[i].style.height = bzsz_s_gd + 'px';
    }
    bzsz_tj.style.height = bzsz_s_gd + 'px';
    bzsz_tj.style.lineHeight = bzsz_s_gd + 'px';
    bzsz_sj.style.height = bzsz_s_gd + 'px';
    bzsz_sj.style.lineHeight = bzsz_s_gd + 'px';
    bzsz_tj_ym_TP.style.height = bzsz_s_gd + 'px';
    if (bzsz_s_gd > 250) {
        bzsz_tj_ym_TP.style.width = 250 / (window.innerHeight / window.innerWidth) + 'px';
        bzsz_tj_ym_TP.style.left = 'calc((100% - ' + (250 / (window.innerHeight / window.innerWidth)) + 'px) / 2)';
    }
});

//输出所有壁纸
bzsz_tj = document.querySelector('.bzsz_tj');
bzsz_max = document.querySelector('.bzsz_max');
var bi_zhi_s = JSON.parse(localStorage.bi_zhi_s);
for (var i = 0; i < bi_zhi_s.length; i++) {
    var div = document.createElement('div');
    div.className = 'bzsz_s';
    div.style.backgroundImage = 'url(' + bi_zhi_s[i] + ')';
    div.innerHTML = '<i class="iconfont icon-shanchu1 i_bzsz_sc_tp"></i>';
    bzsz_max.insertBefore(div, bzsz_tj);
}

//壁纸删除
bzsz_max = document.querySelector('.bzsz_max');
i_bzsz_sc_tp = document.querySelectorAll('.i_bzsz_sc_tp');
for (var i = 0; i < i_bzsz_sc_tp.length; i++) {
    i_bzsz_sc_tp[i].addEventListener('click', function(e) {
        e.stopPropagation();
        //修改HTML
        bzsz_max.removeChild(this.parentNode);
        //修改内存
        var bi_zhi_s = JSON.parse(localStorage.bi_zhi_s);
        var topimg = this.parentNode.style.backgroundImage.split('("')[1].split('")')[0];
        console.log(topimg);
        //指定删除
        if (topimg && bi_zhi_s.indexOf(topimg) !== -1) {
            bi_zhi_s.splice(bi_zhi_s.indexOf(topimg), 1);
        }
        localStorage.bi_zhi_s = JSON.stringify(bi_zhi_s);

        Sku_tctx('壁纸删除成功');
    });
}

//换壁纸
var bzsz_s = document.querySelectorAll('.bzsz_s');
for (var i = 0; i < bzsz_s.length; i++) {
    bzsz_s[i].addEventListener('click', function() {
        var topimg = this.style.backgroundImage.split('("')[1].split('")')[0];
        localStorage.bi_zhi = topimg;
        document.documentElement.style.backgroundImage = this.style.backgroundImage;
        document.documentElement.style.backgroundColor = '';
        localStorage.bi_zhi_ys = '';
    });
}

// 随机壁纸 
var bizhi_sjwz = [
    'https://picsum.photos/1920/1080/',
    'https://cdn.seovx.com/?mom=302',
    'https://cdn.seovx.com/d/?mom=302',
    'https://api.btstu.cn/sjbz/api.php',
    'https://t.mwm.moe/pc/',
    'https://t.mwm.moe/fj/',
    'https://imgapi.xl0408.top/index.php',
    'https://api.dujin.org/pic/yuanshen/',
];
localStorage.shuiji_bi_zhi_wz = JSON.stringify(bizhi_sjwz);
var bzsz_sj = document.querySelector('.bzsz_sj');
bzsz_sj.addEventListener('click', function(e) {
    var bizhi_sjwz = JSON.parse(localStorage.shuiji_bi_zhi_wz);
    var shuiji_biz = sjs(0, bizhi_sjwz.length - 1);
    localStorage.bi_zhi = 'sj';
    document.documentElement.style.backgroundImage = 'url(' + bizhi_sjwz[shuiji_biz] + ')';
});

//添加壁纸
bzsz_tj_ym_tp_jk = 0;
bzsz_tj_anniu = document.querySelector('.bzsz_tj_anniu');
bzsz_tj_ym_TP = document.querySelector('.bzsz_tj_ym_TP');
input_bzlj = document.querySelector('.input_bzlj');
bzsz_tj_ym = document.querySelector('.bzsz_tj_ym');
bzsz_tj = document.querySelector('.bzsz_tj');
bzsz_tj.addEventListener('click', function(e) {
    e.stopPropagation();
    bzsz_tj_ym.style.display = 'block';
    input_bzlj.focus();
});
//防止关闭
bzsz_tj_ym.addEventListener('contextmenu', function(e) {
    e.stopPropagation();
    e.preventDefault();
});
bzsz_tj_ym.addEventListener('click', function(e) {
    e.stopPropagation();
});
//监测
input_bzlj.addEventListener('focus', function(e) {
    bzsz_tj_ym_tp_jk = 1;
});
input_bzlj.addEventListener('blur', function(e) {
    bzsz_tj_ym_tp_jk = 0;
});
//添加按钮
bzsz_tj_anniu.addEventListener('click', function() {
    if (input_bzlj.value !== '') {
        //修改内存
        var bi_zhi_s = JSON.parse(localStorage.bi_zhi_s);
        bi_zhi_s.push(bzsz_tj_ym_TP.style.backgroundImage.split('("')[1].split('")')[0]);
        localStorage.bi_zhi_s = JSON.stringify(bi_zhi_s);
        //修改HTML
        var div = document.createElement('div');
        div.className = 'bzsz_s';
        div.style.backgroundImage = bzsz_tj_ym_TP.style.backgroundImage;
        div.innerHTML = '<i class="iconfont icon-shanchu1 i_bzsz_sc_tp"></i>';
        div.style.height = 335 / (window.innerWidth / window.innerHeight) + 'px';
        bzsz_max.insertBefore(div, bzsz_tj);
        //添加按钮样式
        bzsz_s = document.querySelectorAll('.bzsz_s');
        bzsz_s[bzsz_s.length - 1].addEventListener('click', function() {
            var topimg = this.style.backgroundImage.split('("')[1].split('")')[0];
            localStorage.bi_zhi = topimg;
            localStorage.bi_zhi_s = JSON.stringify(bi_zhi_s);
            document.documentElement.style.backgroundImage = this.style.backgroundImage;
        });
        bzsz_max = document.querySelector('.bzsz_max');
        i_bzsz_sc_tp = document.querySelectorAll('.i_bzsz_sc_tp');
        i_bzsz_sc_tp[i_bzsz_sc_tp.length - 1].addEventListener('click', function(e) {
            e.stopPropagation();
            //修改HTML
            bzsz_max.removeChild(this.parentNode);
            //修改内存
            var bi_zhi_s = JSON.parse(localStorage.bi_zhi_s);
            var topimg = this.parentNode.style.backgroundImage.split('("')[1].split('")')[0];
            //指定删除
            function sz_zdsc(sz_s, sz_sc_zhi, sz_tj_zhi) {
                if (sz_sc_zhi && sz_s.indexOf(sz_sc_zhi) !== -1 && sz_tj_zhi) {
                    sz_s.splice(sz_s.indexOf(sz_sc_zhi), 2, sz_tj_zhi);
                } else if (sz_sc_zhi && sz_s.indexOf(sz_sc_zhi) !== -1) {
                    sz_s.splice(sz_s.indexOf(sz_sc_zhi), 1);
                }
            }
            sz_zdsc(bi_zhi_s, topimg);
            localStorage.bi_zhi_s = JSON.stringify(bi_zhi_s);
        });
        //隐藏添加页面
        bzsz_tj_ym.style.display = 'none';
        input_bzlj.value = '';
        bzsz_tj_ym_TP.style.backgroundImage = '';

        Sku_tctx('壁纸添加成功');
    } else {
        //隐藏添加页面
        bzsz_tj_ym.style.display = 'none';
    }
});





// function SHITIDONGHUA(class名, 移动距离(右为正, 左为负), function() {});
var gundon_dsj = undefined;

function SHITIDONGHUA2(bjs, jls, callback) {
    var jlss = Math.round(jls);
    obj_dwjsq = document.querySelector(bjs);
    clearInterval(obj_dwjsq.time);
    obj_dwjsq.time = setInterval(function() {
        var jl = (jlss - obj_dwjsq.scrollTop) / 10;
        jl = jl > 0 ? Math.ceil(jl) : Math.floor(jl);
        if (Math.round(obj_dwjsq.scrollTop) == jlss) {
            clearInterval(obj_dwjsq.time);
            if (callback) {
                callback();
            }
        }
        obj_dwjsq.scroll(0, obj_dwjsq.scrollTop + jl);
    }, 15);
    clearTimeout(gundon_dsj);
    gundon_dsj = setTimeout(function() {
        clearInterval(obj_dwjsq.time);
    }, 1200);
}

function SHITIDONGHUA2_kssy(sx_anniu, gundonye) {
    var sx_anniu1 = document.querySelector(sx_anniu);
    var gundonye1 = document.querySelector(gundonye);
    sx_anniu1.addEventListener('click', function(e) {
        if (sx_anniu1.innerHTML == '↓') {
            var gundonye1 = document.querySelector(gundonye);
            SHITIDONGHUA2(gundonye, gundonye1.scrollHeight - gundonye1.clientHeight);
        } else {
            SHITIDONGHUA2(gundonye, 0);
        }
    });
    gundonye1.addEventListener('scroll', function(e) {
        var gundonye1 = document.querySelector(gundonye);
        if (gundonye1.scrollTop > ((gundonye1.scrollHeight - gundonye1.clientHeight) / 2)) {
            sx_anniu1.innerHTML = '↑';
        } else {
            sx_anniu1.innerHTML = '↓';
        }
    });
}
SHITIDONGHUA2_kssy('.bizhi_gundon1', '.bzsz_max');
SHITIDONGHUA2_kssy('.bizhi_gundon2', '.daorubendi_max_hd');
SHITIDONGHUA2_kssy('.bizhi_gundon3', '.ssjl_max2');
SHITIDONGHUA2_kssy('.bizhi_gundon4', '.ssjl_max');
SHITIDONGHUA2_kssy('.bizhi_gundon5', '.grb_j_max');
SHITIDONGHUA2_kssy('.bizhi_gundon6', '.shezhi_ym_max');
SHITIDONGHUA2_kssy('.bizhi_gundon7', '.duibixx_max');
SHITIDONGHUA2_kssy('.bizhi_gundon8', '.daoruyun_max_hd');






//天气设置

//页面打开
shezhi_tianqi_ym = document.querySelector('.shezhi_tianqi_ym');
shezhi_tianqi = document.querySelector('.shezhi_tianqi');
shezhi_tianqi.addEventListener('click', function() {
    shezhi_min.style.display = 'none';
    shezhi_tianqi_ym.style.display = 'block';
});
//显示天气
tianqi_s = document.querySelectorAll('.tianqi_s');
tianqi_s[localStorage.tian_qi].querySelector('i').style.color = RGB_zhq(localStorage.zi_ti_click_color);
tianqi_s[localStorage.tian_qi].style.borderColor = RGB_zhq(localStorage.zi_ti_click_color);
//换天气
for (var i = 0; i < tianqi_s.length; i++) {
    tianqi_s[i].addEventListener('click', function() {
        //清楚所有
        for (var i = 0; i < tianqi_s.length; i++) {
            tianqi_s[i].querySelector('i').style.color = '';
            tianqi_s[i].style.borderColor = '';
        }
        this.querySelector('i').style.color = RGB_zhq(localStorage.zi_ti_click_color);
        this.style.borderColor = RGB_zhq(localStorage.zi_ti_click_color);
        //修改内存
        localStorage.tian_qi = this.getAttribute('data-tianqi-num');
        //修改天气
        max_dtbj_gg();
    });
}

//修改天气
max_dtbj_gg();

function max_dtbj_gg() {
    max_dtbj = document.querySelector('.max_dtbj');

    if (localStorage.tian_qi == '5') {
        if (typeof stopRain === 'undefined') {
            stopRain = null;
        }
        if (stopRain) {
            stopRain(); // 执行清理操作
            stopRain = null;
        }
        max_dtbj.style.backgroundImage = 'url()';
        max_dtbj.style.opacity = '1';
        // 使用
        stopRain = createCodeRain(max_dtbj, 'black');
    } else {
        if (typeof stopRain === 'undefined') {
            stopRain = null;
        }
        if (stopRain) {
            stopRain(); // 执行清理操作
            stopRain = null;
        }
    }
    if (localStorage.tian_qi == '4') {
        max_dtbj.style.backgroundImage = 'url(https://wimg.588ku.com/gif620/21/10/20/164e42912197136db3f4dac7b652110a.gif)';
        max_dtbj.style.opacity = '1';
    }
    if (localStorage.tian_qi == '3') {
        max_dtbj.style.backgroundImage = 'url(https://wimg.588ku.com/gif620/21/10/20/164e42912197136db3f4dac7b652110a.gif)';
        max_dtbj.style.opacity = '0.5';
    }
    if (localStorage.tian_qi == '2') {
        max_dtbj.style.backgroundImage = 'url(https://wimg.588ku.com/gif620/20/12/17/7c69a1aad398a7f367d905425346e7f4.gif)';
        max_dtbj.style.opacity = '1';
    }
    if (localStorage.tian_qi == '1') {
        max_dtbj.style.backgroundImage = 'url(https://wimg.588ku.com/gif620/20/12/17/7c69a1aad398a7f367d905425346e7f4.gif)';
        max_dtbj.style.opacity = '0.5';
    }
    if (localStorage.tian_qi == '0') {
        max_dtbj.style.backgroundImage = 'url()';
        max_dtbj.style.opacity = '1';
    }
}

//天气设置 代码雨
function createCodeRain(containerElement, color = '#0f0') { // 参数改为直接接收元素
    const div = containerElement;
    if (!div || div.querySelector('canvas.code-rain')) return;

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // 设置Canvas样式
    Object.assign(canvas.style, {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none', // 使Canvas不影响鼠标事件
        opacity: 0.5, // 初始透明度
    });

    div.appendChild(canvas);

    // 字符配置
    const chars = '吴根棽010101010101010101ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz';
    const fontSize = 16;
    let columns = [];

    // 初始化方法
    const init = () => {
        resize();
        createColumns();
        animate();
    };

    // 创建字符列
    const createColumns = () => {
        columns = Array(Math.floor(canvas.width / fontSize)).fill(1).map((_, i) => ({
            x: i * fontSize,
            y: Math.random() * canvas.height
        }));
    };

    // 动画循环
    const animate = () => {
        // 透明背景淡出效果 ▼▼▼
        ctx.fillStyle = 'rgba(0, 0, 0, 0.08)';
        ctx.globalCompositeOperation = 'destination-out'; // 使用目标输出模式
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // 恢复字符绘制模式
        ctx.globalCompositeOperation = 'source-over';
        ctx.fillStyle = localStorage.zi_ti_color; // 修改颜色为 localStorage.zi_ti_color;
        // 修改结束 ▲▲▲

        ctx.font = `${fontSize}px monospace`;

        columns.forEach(column => {
            const char = chars[Math.floor(Math.random() * chars.length)];
            ctx.fillText(char, column.x, column.y);
            column.y += fontSize;
            if (column.y > canvas.height + fontSize) column.y = 0;
        });

        animationFrameId = requestAnimationFrame(animate);
    };

    // 窗口大小变化处理
    const resize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        createColumns();
    };

    // 事件监听
    window.addEventListener('resize', resize);

    // 清理函数
    const cleanup = () => {
        cancelAnimationFrame(animationFrameId);
        window.removeEventListener('resize', resize);
        div.removeChild(canvas);
    };

    // 初始化
    init();

    // 返回清理方法（必须）
    return cleanup;
}




//字体设置

//页面打开
shezhi_min = document.querySelector('.shezhi_min');
shezhi_ztsz_ym = document.querySelector('.shezhi_ztsz_ym');
shezhi_ztsz = document.querySelector('.shezhi_ztsz');
shezhi_ztsz.addEventListener('click', function() {
    shezhi_min.style.display = 'none';
    shezhi_ztsz_ym.style.display = 'block';
});
//字体颜色
input_color1 = document.querySelector('.input_color1');
if (localStorage.zi_ti_color !== '') {
    input_color1.value = localStorage.zi_ti_color;
} else {
    input_color1.value = '#FFFFFF';
}

function zi_ti_color_s() {
    zi_ti_color_bh();
}

//字体颜色改变
input_color1.addEventListener('input', function() {
    //修改内存
    localStorage.zi_ti_color = input_color1.value;
    //修改HTML
    if (localStorage.zi_ti_color !== '') {
        zi_ti_color_s();
    }
});

//重字体颜色
input_color2 = document.querySelector('.input_color2');
input_color2.value = localStorage.zi_ti_click_color;
input_color2.addEventListener('input', function() {
    //修改内存
    localStorage.zi_ti_click_color = input_color2.value;
    //修改HTML
    zi_ti_color_s();
});

//重置
var yuan_zi_ti_color = localStorage.zi_ti_color;
var yuan_zi_ti_click_color = localStorage.zi_ti_click_color;
ztsz_chongzhi = document.querySelector('.ztsz_chongzhi');
ztsz_chongzhi.addEventListener('click', function() {
    //修改内存
    localStorage.zi_ti_color = yuan_zi_ti_color;
    localStorage.zi_ti_click_color = yuan_zi_ti_click_color;
    //加载页面
    input_color2.value = localStorage.zi_ti_click_color;
    input_color1.value = localStorage.zi_ti_color;
    zi_ti_color_s();
});







//背景设置

//页面打开
shezhi_bjsz_ym = document.querySelector('.shezhi_bjsz_ym');
shezhi_bjsz = document.querySelector('.shezhi_bjsz');
shezhi_bjsz.addEventListener('click', function() {
    shezhi_min.style.display = 'none';
    shezhi_bjsz_ym.style.display = 'block';
});

function bei_jing_color_s() {
    topmax.style.backgroundColor = RGB_zhq(localStorage.bei_jing_color, localStorage.bei_jing_tmd);
    lian_jie_l_max = document.querySelector('.lian_jie_l_max');
    lian_jie_r_max = document.querySelector('.lian_jie_r_max');
    lian_jie_l_max.style.backgroundColor = RGB_zhq(localStorage.bei_jing_color, localStorage.bei_jing_tmd);
    lian_jie_r_max.style.backgroundColor = RGB_zhq(localStorage.bei_jing_color, localStorage.bei_jing_tmd);
    liu_yan = document.querySelector('.liu_yan');
    liu_yan.style.backgroundColor = RGB_zhq(localStorage.bei_jing_color, localStorage.bei_jing_tmd);
    shezhi_max = document.querySelector('.shezhi_max');
    shezhi_max.style.backgroundColor = RGB_zhq(localStorage.bei_jing_color, localStorage.bei_jing_tmd);
    liu_yan_sxuan_div = document.querySelector('.liu_yan_sxuan_div');
    liu_yan_sxuan_div.style.backgroundColor = RGB_zhq(localStorage.bei_jing_color, localStorage.bei_jing_tmd);
    lj_xg_tj = document.querySelector('.lj_xg_tj');
    lj_xg_tj.style.backgroundColor = RGB_zhq(localStorage.bei_jing_color, localStorage.bei_jing_tmd);
    dhr_xg_tj = document.querySelector('.dhr_xg_tj');
    dhr_xg_tj.style.backgroundColor = RGB_zhq(localStorage.bei_jing_color, localStorage.bei_jing_tmd);
    dhr_shezhi_gns = document.querySelector('.dhr_shezhi_gns');
    s_jiao_xing = document.querySelector('.s_jiao_xing');
    dhr_shezhi_gns.style.backgroundColor = RGB_zhq(localStorage.zi_ti_click_color, 0.25);
    s_jiao_xing.style.borderColor = RGB_zhq(localStorage.zi_ti_click_color, 0.25);
    liu_yan_shezhi_gns = document.querySelector('.liu_yan_shezhi_gns');
    liu_yan_s_jiao_xing = document.querySelector('.liu_yan_s_jiao_xing');
    liu_yan_shezhi_gns.style.backgroundColor = RGB_zhq(localStorage.zi_ti_click_color, 0.25);
    liu_yan_s_jiao_xing.style.borderColor = RGB_zhq(localStorage.zi_ti_click_color, 0.25);
    top_tou_xian_sc = document.querySelector('.top_tou_xian_sc');
    top_tou_xian_sc.style.backgroundColor = RGB_zhq(localStorage.bei_jing_color, localStorage.bei_jing_tmd);
    sy_djs = document.querySelector('.sy_djs');
    sy_djs.style.backgroundColor = RGB_zhq(localStorage.bei_jing_color, localStorage.bei_jing_tmd);
    sy_shezhi_gns = document.querySelector('.sy_shezhi_gns');
    sy_shezhi_gns.style.backgroundColor = RGB_zhq(localStorage.zi_ti_click_color, 0.25);
    sy_s_jiao_xing = document.querySelector('.sy_s_jiao_xing');
    sy_s_jiao_xing.style.borderColor = RGB_zhq(localStorage.zi_ti_click_color, 0.25);
    sy_djs_tjym = document.querySelector('.sy_djs_tjym');
    sy_djs_tjym.style.backgroundColor = RGB_zhq(localStorage.bei_jing_color, localStorage.bei_jing_tmd);
    bzsz_tj_ym = document.querySelector('.bzsz_tj_ym');
    bzsz_tj_ym.style.backgroundColor = RGB_zhq(localStorage.bei_jing_color, localStorage.bei_jing_tmd);
    sy_nrs_ts = document.querySelectorAll('.sy_nrs_t_span');
    for (var i = 0; i < sy_nrs_ts.length; i++) {
        sy_nrs_ts[i].style.backgroundColor = RGB_zhq(localStorage.bei_jing_color, localStorage.bei_jing_tmd);
    }
    sy_dwck_ym = document.querySelector('.sy_dwck_ym');
    drym_min = document.querySelector('.drym_min');
    drym_min.style.backgroundColor = RGB_zhq(localStorage.bei_jing_color, localStorage.bei_jing_tmd);
    var style_s4 = document.querySelector('.style_s4');
    style_s4.innerHTML = '.sy_3d_kaiguan,.sy_djs_txl,.Sku_tcjg_Max,.sy_dwck_ym,.sy_dwck,.wl_max,.sy_lbt,.sy_zp_tj_ym,.sy_zpzs_max,.sy_hddb,.kcp_kc span,.kcp_xq span,.music_boyyom_yj,.music_boyyom_tj_ym,.daoru_ym_dr_mmym,.ssbqym,.sd_dtnr_max,.lj_zcb_ym {background-color:' + RGB_zhq(localStorage.bei_jing_color, localStorage.bei_jing_tmd) + ';} .lian_jie_ssk {background:linear-gradient(to top, ' + RGB_zhq(localStorage.bei_jing_color, '0.3') + ' 0%, ' + RGB_zhq(localStorage.bei_jing_color, '0') + ' 50%);} .lian_jie_ssk:focus {background:linear-gradient(to top, ' + RGB_zhq(localStorage.bei_jing_color, '0.7') + ' 0%, ' + RGB_zhq(localStorage.bei_jing_color, '0') + ' 100%);}.music_ym {background-color: ' + RGB_zhq(localStorage.bei_jing_color, localStorage.bei_jing_tmd) + ';}.sy_b{ background: linear-gradient(to bottom, ' + RGB_zhq(localStorage.bei_jing_color, '0') + ', ' + RGB_zhq(localStorage.bei_jing_color, localStorage.bei_jing_tmd) + ' 70%);}.so_yqs{border-color:' + RGB_zhq(localStorage.zi_ti_color, 0.3) + ';}';

    html_css();
}
//背景颜色
input_color3 = document.querySelector('.input_color3');
input_color3.value = localStorage.bei_jing_color;
input_color3.addEventListener('input', function() {
    localStorage.bei_jing_color = input_color3.value;
    bei_jing_color_s();
});

//背景透明度
input_tmd_z = document.querySelector('.input_tmd_z');
input_tmd1 = document.querySelector('.input_tmd1');
input_tmd1.value = localStorage.bei_jing_tmd * 100;
input_tmd_z.innerHTML = (localStorage.bei_jing_tmd * 100) + '%';
input_tmd1.style.backgroundSize = input_tmd1.value + '% 100%';
input_tmd1.addEventListener('input', function() {
    localStorage.bei_jing_tmd = (input_tmd1.value / 100);
    input_tmd_z.innerHTML = input_tmd1.value + '%';
    this.style.backgroundSize = this.value + '% 100%';
    bei_jing_color_s();
});

//背景框
sy_lbt = document.querySelector('.sy_lbt');
sy_zp_tj_ym = document.querySelector('.sy_zp_tj_ym');
daoru_ym_dr_mmym = document.querySelector('.daoru_ym_dr_mmym');
music_boyyom_tj_ym = document.querySelector('.music_boyyom_tj_ym');
music_ym = document.querySelector('.music_ym');
music_boyyom_yj = document.querySelector('.music_boyyom_yj');
bjk_xzk = document.querySelector('.bjk_xzk');
sy_djs_r_s = document.querySelectorAll('.sy_djs_r_s');
sy_djs_r_t = document.querySelectorAll('.sy_djs_r_t');
sy_djs_r_time = document.querySelectorAll('.sy_djs_r_time');
sy_djs_l = document.querySelector('.sy_djs_l');
sy_djs_l_t = document.querySelector('.sy_djs_l_t');
sy_djs_l_time = document.querySelector('.sy_djs_l_time');
sy_djs_txl = document.querySelector('.sy_djs_txl');
ssbqym = document.querySelector('.ssbqym');
sy_nrs_t_span = document.querySelectorAll('.sy_nrs_t_span');
sy_3d_kaiguan = document.querySelector('.sy_3d_kaiguan');
lj_zcb_ym = document.querySelector('.lj_zcb_ym');
ztfg_tj_ym = document.querySelector('.ztfg_tj_ym');
so_yq_s = document.querySelector('.so_yq_s');
if (localStorage.bei_jing_kuan_ture == 1) {
    bjk_xzk.innerHTML = '✔';
} else if (localStorage.bei_jing_kuan_ture == 0) {
    bjk_xzk.innerHTML = '';
}

function bj_kuan_hs() {
    topmax.style.borderBottom = '1px solid ' + RGB_zhq(localStorage.bei_jing_kuan_color, localStorage.bei_jing_kuan_tmd);
    lian_jie_l_max.style.border = '1px solid ' + RGB_zhq(localStorage.bei_jing_kuan_color, localStorage.bei_jing_kuan_tmd);
    lian_jie_r_max.style.border = '1px solid ' + RGB_zhq(localStorage.bei_jing_kuan_color, localStorage.bei_jing_kuan_tmd);
    liu_yan.style.border = '1px solid ' + RGB_zhq(localStorage.bei_jing_kuan_color, localStorage.bei_jing_kuan_tmd);
    shezhi_max.style.border = '1px solid ' + RGB_zhq(localStorage.bei_jing_kuan_color, localStorage.bei_jing_kuan_tmd);
    liu_yan_sxuan_div.style.border = '1px solid ' + RGB_zhq(localStorage.bei_jing_kuan_color, localStorage.bei_jing_kuan_tmd);
    lj_xg_tj.style.border = '1px solid ' + RGB_zhq(localStorage.bei_jing_kuan_color, localStorage.bei_jing_kuan_tmd);
    dhr_xg_tj.style.border = '1px solid ' + RGB_zhq(localStorage.bei_jing_kuan_color, localStorage.bei_jing_kuan_tmd);
    top_tou_xian_sc.style.border = '1px solid ' + RGB_zhq(localStorage.bei_jing_kuan_color, localStorage.bei_jing_kuan_tmd);
    sy_djs_tjym.style.border = '1px solid ' + RGB_zhq(localStorage.bei_jing_kuan_color, localStorage.bei_jing_kuan_tmd);
    drym_min.style.border = '1px solid ' + RGB_zhq(localStorage.bei_jing_kuan_color, localStorage.bei_jing_kuan_tmd);
    sy_zpzs_max.style.border = '1px solid ' + RGB_zhq(localStorage.bei_jing_kuan_color, localStorage.bei_jing_kuan_tmd);
    sy_zp_tj_ym.style.border = '1px solid ' + RGB_zhq(localStorage.bei_jing_kuan_color, localStorage.bei_jing_kuan_tmd);
    sy_dwck_ym.style.border = '1px solid ' + RGB_zhq(localStorage.bei_jing_kuan_color, localStorage.bei_jing_kuan_tmd);
    sy_lbt.style.border = '1px solid ' + RGB_zhq(localStorage.bei_jing_kuan_color, localStorage.bei_jing_kuan_tmd);
    sy_djs.style.border = '1px solid ' + RGB_zhq(localStorage.bei_jing_kuan_color, localStorage.bei_jing_kuan_tmd);
    for (var i = 0; i < sy_nrs_t_span.length; i++) {
        sy_nrs_t_span[i].style.border = '1px solid ' + RGB_zhq(localStorage.bei_jing_kuan_color, localStorage.bei_jing_kuan_tmd);
    }
    for (var i = 0; i < (sy_djs_r_s.length < 6 ? sy_djs_r_s.length : sy_djs_r_s.length - 1); i++) {
        sy_djs_r_s[i].style.borderRight = '1px solid ' + RGB_zhq(localStorage.bei_jing_kuan_color, localStorage.bei_jing_kuan_tmd);
    }
    for (var i = 0; i < sy_djs_r_t.length; i++) {
        sy_djs_r_t[i].style.borderBottom = '1px solid ' + RGB_zhq(localStorage.bei_jing_kuan_color, localStorage.bei_jing_kuan_tmd);
    }
    for (var i = 0; i < sy_djs_r_time.length; i++) {
        sy_djs_r_time[i].style.borderBottom = '1px solid ' + RGB_zhq(localStorage.bei_jing_kuan_color, localStorage.bei_jing_kuan_tmd);
    }
    sy_djs_l.style.borderRight = '1px solid ' + RGB_zhq(localStorage.bei_jing_kuan_color, localStorage.bei_jing_kuan_tmd);
    sy_djs_l_t.style.borderBottom = '1px solid ' + RGB_zhq(localStorage.bei_jing_kuan_color, localStorage.bei_jing_kuan_tmd);
    sy_djs_l_time.style.borderBottom = '1px solid ' + RGB_zhq(localStorage.bei_jing_kuan_color, localStorage.bei_jing_kuan_tmd);
    sy_hddb.style.border = '1px solid ' + RGB_zhq(localStorage.bei_jing_kuan_color, localStorage.bei_jing_kuan_tmd);
    music_ym.style.border = '1px solid ' + RGB_zhq(localStorage.bei_jing_kuan_color, localStorage.bei_jing_kuan_tmd);
    music_boyyom_yj.style.border = '1px solid ' + RGB_zhq(localStorage.bei_jing_kuan_color, localStorage.bei_jing_kuan_tmd);
    music_boyyom_tj_ym.style.border = '1px solid ' + RGB_zhq(localStorage.bei_jing_kuan_color, localStorage.bei_jing_kuan_tmd);
    sy_djs_txl.style.border = '1px solid ' + RGB_zhq(localStorage.bei_jing_kuan_color, localStorage.bei_jing_kuan_tmd);
    ssbqym.style.border = '1px solid ' + RGB_zhq(localStorage.bei_jing_kuan_color, localStorage.bei_jing_kuan_tmd);
    daoru_ym_dr_mmym.style.border = '1px solid ' + RGB_zhq(localStorage.bei_jing_kuan_color, localStorage.bei_jing_kuan_tmd);
    sy_3d_kaiguan.style.border = '1px solid ' + RGB_zhq(localStorage.bei_jing_kuan_color, localStorage.bei_jing_kuan_tmd);
    lj_zcb_ym.style.border = '1px solid ' + RGB_zhq(localStorage.bei_jing_kuan_color, localStorage.bei_jing_kuan_tmd);
    ztfg_tj_ym.style.border = '1px solid ' + RGB_zhq(localStorage.bei_jing_kuan_color, localStorage.bei_jing_kuan_tmd);
    so_yq_s.style.border = '1px solid ' + RGB_zhq(localStorage.bei_jing_kuan_color, localStorage.bei_jing_kuan_tmd);

    html_css();
}
setTimeout(function() {

}, 1000);

bjk_xzk.addEventListener('click', function() {
    if (localStorage.bei_jing_kuan_ture == 1) {
        localStorage.bei_jing_kuan_ture = 0;
        bjk_xzk.innerHTML = '';
        topmax.style.borderBottom = '';
        lian_jie_l_max.style.border = '';
        lian_jie_r_max.style.border = '';
        liu_yan.style.border = '';
        shezhi_max.style.border = '';
        lj_xg_tj.style.border = '';
        dhr_xg_tj.style.border = '';
        top_tou_xian_sc.style.border = '';
        sy_djs_tjym.style.border = '';
        drym_min.style.border = '';
        sy_zpzs_max.style.border = '';
        sy_zp_tj_ym.style.border = '';
        sy_dwck_ym.style.border = '';
        liu_yan_sxuan_div.style.border = '';
        sy_lbt.style.border = '';
        sy_djs.style.border = '';
        sy_djs_l.style.border = '';
        sy_djs_l_t.style.border = '';
        sy_djs_l_time.style.border = '';
        sy_hddb.style.border = '';
        for (var i = 0; i < sy_nrs_t_span.length; i++) {
            sy_nrs_t_span[i].style.border = '';
        }
        for (var i = 0; i < (sy_djs_r_s.length < 6 ? sy_djs_r_s.length : sy_djs_r_s.length - 1); i++) {
            sy_djs_r_s[i].style.borderRight = '';
        }
        for (var i = 0; i < sy_djs_r_t.length; i++) {
            sy_djs_r_t[i].style.borderBottom = '';
        }
        for (var i = 0; i < sy_djs_r_time.length; i++) {
            sy_djs_r_time[i].style.borderBottom = '';
        }
        music_ym.style.border = '';
        music_boyyom_yj.style.border = '';
        music_boyyom_tj_ym.style.border = '';
        sy_djs_txl.style.border = '';
        ssbqym.style.border = '';
        daoru_ym_dr_mmym.style.border = '';
        sy_3d_kaiguan.style.border = '';
        lj_zcb_ym.style.border = '';
        ztfg_tj_ym.style.border = '';
        so_yq_s.style.border = '';

        html_css();
    } else if (localStorage.bei_jing_kuan_ture == 0) {
        localStorage.bei_jing_kuan_ture = 1;
        bjk_xzk.innerHTML = '✔';
        bj_kuan_hs();
    }
});
input_color4 = document.querySelector('.input_color4');
input_tmd2 = document.querySelector('.input_tmd2');
input_tmd_z2 = document.querySelector('.input_tmd_z2');
input_tmd_z2.innerHTML = (localStorage.bei_jing_kuan_tmd * 100) + '%';
input_color4.value = localStorage.bei_jing_kuan_color;
input_tmd2.value = localStorage.bei_jing_kuan_tmd * 100;
input_tmd2.style.backgroundSize = input_tmd2.value + '% 100%';
input_color4.addEventListener('input', function() {
    //修改内存
    localStorage.bei_jing_kuan_color = input_color4.value;
    // 修改html
    if (localStorage.bei_jing_kuan_ture == 1) {
        bj_kuan_hs();
    }
});
input_tmd2.addEventListener('input', function() {
    //修改内存
    localStorage.bei_jing_kuan_tmd = (input_tmd2.value / 100);
    // 修改html
    input_tmd_z2.innerHTML = input_tmd2.value + '%';
    if (localStorage.bei_jing_kuan_ture == 1) {
        bj_kuan_hs();
    }
    this.style.backgroundSize = this.value + '% 100%';
});

//毛玻璃
var mblxg_px_in = document.querySelector('.mblxg_px_in');
nrmaxs = document.querySelectorAll('.nrmaxs');
mblxg = document.querySelector('.mblxg');

if (localStorage.mao_bo_li == 0) {
    mblxg.innerHTML = '';
} else {
    mblxg.innerHTML = '✔';
}

mblxg.addEventListener('click', function() {
    if (localStorage.mao_bo_li == 0) {
        localStorage.mao_bo_li = 5;
        mblxg_px_in.value = localStorage.mao_bo_li;
        yuan_mblxg_px_in = mblxg_px_in.value;
        mblxg.innerHTML = '✔';
        zi_ti_color_s();
    } else {
        localStorage.mao_bo_li = 0;
        mblxg_px_in.value = localStorage.mao_bo_li;
        yuan_mblxg_px_in = mblxg_px_in.value;
        mblxg.innerHTML = '';
        zi_ti_color_s();
    }
});

mblxg_px_in.value = localStorage.mao_bo_li;
var yuan_mblxg_px_in = mblxg_px_in.value;
mblxg_px_in.addEventListener('blur', function(e) {
    if (mblxg_px_in.value > 100) {
        mblxg_px_in.value = yuan_mblxg_px_in;
        Sku_tctx('更改失败! 请输入小于 100 的数');
    } else if (mblxg_px_in.value < 0) {
        mblxg_px_in.value = yuan_mblxg_px_in;
        Sku_tctx('更改失败! 请输入大于 0 的数');
    } else if (mblxg_px_in.value !== yuan_mblxg_px_in) {
        yuan_mblxg_px_in = mblxg_px_in.value;
        Sku_tctx(' 更改成功 ');
        if (mblxg_px_in.value == 0) {
            localStorage.mao_bo_li = 0;
            mblxg.innerHTML = '';
            zi_ti_color_s();
        } else {
            localStorage.mao_bo_li = mblxg_px_in.value;
            mblxg.innerHTML = '✔';
            zi_ti_color_s();
        }
    }
});

//重置 
var yuan_bei_jing_color = localStorage.bei_jing_color;
var yuan_bei_jing_tmd = localStorage.bei_jing_tmd;
var yuan_bei_jing_kuan_ture = localStorage.bei_jing_kuan_ture;
var yuan_bei_jing_kuan_color = localStorage.bei_jing_kuan_color;
var yuan_bei_jing_kuan_tmd = localStorage.bei_jing_kuan_tmd;
var yuan_mao_bo_li = localStorage.mao_bo_li;
bjsz_chongzhi = document.querySelector('.bjsz_chongzhi');
bjsz_chongzhi.addEventListener('click', function() {
    //修改内存
    localStorage.bei_jing_color = yuan_bei_jing_color;
    localStorage.bei_jing_tmd = yuan_bei_jing_tmd;
    localStorage.bei_jing_kuan_ture = yuan_bei_jing_kuan_ture;
    localStorage.bei_jing_kuan_color = yuan_bei_jing_kuan_color;
    localStorage.bei_jing_kuan_tmd = yuan_bei_jing_kuan_tmd;
    localStorage.mao_bo_li = yuan_mao_bo_li;
    //更改页面
    input_color3.value = localStorage.bei_jing_color;
    input_tmd1.value = localStorage.bei_jing_tmd * 100;
    input_tmd1.style.backgroundSize = input_tmd1.value + '% 100%';
    input_tmd_z.innerHTML = input_tmd1.value + '%';
    input_color4.value = localStorage.bei_jing_kuan_color;
    input_tmd2.value = localStorage.bei_jing_kuan_tmd * 100;
    input_tmd2.style.backgroundSize = input_tmd2.value + '% 100%';
    input_tmd_z2.innerHTML = input_tmd2.value + '%';
    bei_jing_color_s();
    if (localStorage.bei_jing_kuan_ture == 1) {
        localStorage.bei_jing_kuan_ture = 0;
    } else {
        localStorage.bei_jing_kuan_ture = 1;
    }
    bjk_xzk.click();
    if (yuan_mao_bo_li == 0) {
        localStorage.mao_bo_li = 0;
        mblxg_px_in.value = localStorage.mao_bo_li;
        yuan_mblxg_px_in = mblxg_px_in.value;
        mblxg.innerHTML = '';
        zi_ti_color_s();
    } else {
        localStorage.mao_bo_li = yuan_mao_bo_li;
        mblxg_px_in.value = localStorage.mao_bo_li;
        yuan_mblxg_px_in = mblxg_px_in.value;
        mblxg.innerHTML = '✔';
        zi_ti_color_s();
    }
});



//主题风格
shezhi_ztfg = document.querySelector('.shezhi_ztfg');
shezhi_ztfg_ym = document.querySelector('.shezhi_ztfg_ym');
shezhi_ztfg.addEventListener('click', function() {
    shezhi_ztfg_ym.style.display = 'block';
    shezhi_min.style.display = 'none';
});
// 输出所有主题
var ztfg_name = JSON.parse(localStorage.ztfg_name);
var shezhi_ym_max = document.querySelector('.shezhi_ym_max');
var tianqi_qt = document.querySelector('.tianqi_qt');
for (var i = 0; i < ztfg_name.length; i++) {
    var div = document.createElement('div');

    div.className = 'ztfg_s';
    div.innerHTML = ztfg_name[i];
    div.addEventListener('click', function(e) {
        var ztfg_name = JSON.parse(localStorage.ztfg_name);
        var ztfg = JSON.parse(localStorage.ztfg);
        var gs = ztfg_name.indexOf(this.innerText);
        ztfg_hs(ztfg[gs]);
    });
    div.addEventListener('contextmenu', function(e) {
        var ztfg_name = JSON.parse(localStorage.ztfg_name);
        var ztfg = JSON.parse(localStorage.ztfg);
        var gs = ztfg_name.indexOf(this.innerText);
        // 删除html
        shezhi_ym_max.removeChild(this);
        // 删除内存
        ztfg_name.splice(gs, 1);
        localStorage.ztfg_name = JSON.stringify(ztfg_name);
        ztfg.splice(gs, 1);
        localStorage.ztfg = JSON.stringify(ztfg);
    });

    shezhi_ym_max.appendChild(div);
}

var dqzttj = document.querySelector('.dqzttj');
var ztfg_tj_ym = document.querySelector('.ztfg_tj_ym');
var ztfg_tj_ym_qr = document.querySelector('.ztfg_tj_ym_qr');
var ztfg_tj_ym_name = document.querySelector('.ztfg_tj_ym_name');
dqzttj.addEventListener('click', function(e) {
    e.stopPropagation();
    ztfg_tj_ym.style.display = 'block';
    ztfg_tj_ym_name.focus();
});
ztfg_tj_ym.addEventListener('click', function(e) {
    e.stopPropagation();
});
ztfg_tj_ym_qr.addEventListener('click', function(e) {
    if (ztfg_tj_ym_name.value == '') {
        ztfg_tj_ym_name.focus();
    } else {
        var zt_name = ztfg_tj_ym_name.value;
        var ztfg_name = JSON.parse(localStorage.ztfg_name);
        var gs = ztfg_name.indexOf(zt_name);
        if (gs == -1) {
            var zt_name = ztfg_tj_ym_name.value;
            ztfg_tj_ym.style.display = 'none';
            ztfg_tj_ym_name.value = '';
            // 修改html
            var div = document.createElement('div');

            div.className = 'ztfg_s';
            div.innerHTML = zt_name;
            div.addEventListener('click', function(e) {
                var ztfg_name = JSON.parse(localStorage.ztfg_name);
                var ztfg = JSON.parse(localStorage.ztfg);
                var gs = ztfg_name.indexOf(this.innerText);
                ztfg_hs(ztfg[gs]);
            });
            div.addEventListener('contextmenu', function(e) {
                var ztfg_name = JSON.parse(localStorage.ztfg_name);
                var ztfg = JSON.parse(localStorage.ztfg);
                var gs = ztfg_name.indexOf(this.innerText);
                // 删除html
                shezhi_ym_max.removeChild(this);
                // 删除内存
                ztfg_name.splice(gs, 1);
                localStorage.ztfg_name = JSON.stringify(ztfg_name);
                ztfg.splice(gs, 1);
                localStorage.ztfg = JSON.stringify(ztfg);
            });

            shezhi_ym_max.appendChild(div);
            // 修改内存
            var ztfg_name = JSON.parse(localStorage.ztfg_name);
            ztfg_name.push(zt_name);
            localStorage.ztfg_name = JSON.stringify(ztfg_name);
            var ztfg = JSON.parse(localStorage.ztfg);
            var xsz = [];
            xsz.push(localStorage.bi_zhi_ys);
            xsz.push(localStorage.bi_zhi);
            xsz.push(localStorage.zi_ti_color);
            xsz.push(localStorage.zi_ti_click_color);
            xsz.push(localStorage.bei_jing_color);
            xsz.push(localStorage.bei_jing_tmd * 100);
            xsz.push(localStorage.bei_jing_kuan_color);
            xsz.push(localStorage.bei_jing_kuan_tmd * 100);
            xsz.push(localStorage.bei_jing_kuan_ture);
            xsz.push(localStorage.mao_bo_li);
            xsz.push(localStorage.tian_qi);
            ztfg.push(xsz);
            localStorage.ztfg = JSON.stringify(ztfg);
        } else {
            Sku_tctx('命名已存在!');
        }
    }
});

var tianqi_qt = document.querySelector('.tianqi_qt');
var tianqi_xy = document.querySelector('.tianqi_xy');
var tianqi_dy = document.querySelector('.tianqi_dy');
var tianqi_xx = document.querySelector('.tianqi_xx');
var tianqi_dx = document.querySelector('.tianqi_dx');

function ztfg_hs(sz) {
    document.documentElement.style.backgroundColor = sz[0];
    localStorage.bi_zhi_ys = sz[0];
    localStorage.bi_zhi = sz[1];
    document.documentElement.style.backgroundImage = 'url(' + sz[1] + ')';
    input_color1.value = sz[2];
    localStorage.zi_ti_color = sz[2];
    input_color2.value = sz[3];
    localStorage.zi_ti_click_color = sz[3];
    // zi_ti_color_s();
    input_color3.value = sz[4];
    localStorage.bei_jing_color = sz[4];
    input_tmd1.value = sz[5];
    localStorage.bei_jing_tmd = sz[5] / 100;
    input_tmd_z.innerHTML = sz[5] + '%';
    input_tmd1.style.backgroundSize = sz[5] + '% 100%';
    bei_jing_color_s();
    input_color4.value = sz[6];
    localStorage.bei_jing_kuan_color = sz[6];
    input_tmd2.value = sz[7];
    localStorage.bei_jing_kuan_tmd = sz[7] / 100;
    input_tmd_z2.innerHTML = sz[7] + '%';
    input_tmd2.style.backgroundSize = sz[7] + '% 100%';
    if (sz[8] == 1) {
        localStorage.bei_jing_kuan_ture = '0';
    } else {
        localStorage.bei_jing_kuan_ture = '1';
    }
    bjk_xzk.click();
    if (sz[9] == 0) {
        localStorage.mao_bo_li = 5;
    } else {
        localStorage.mao_bo_li = 0;
    }
    if (sz[9] == 0) {
        localStorage.mao_bo_li = 0;
        mblxg_px_in.value = localStorage.mao_bo_li;
        yuan_mblxg_px_in = mblxg_px_in.value;
        mblxg.innerHTML = '';
        zi_ti_color_s();
    } else {
        localStorage.mao_bo_li = sz[9];
        mblxg_px_in.value = localStorage.mao_bo_li;
        yuan_mblxg_px_in = mblxg_px_in.value;
        mblxg.innerHTML = '✔';
        zi_ti_color_s();
    }

    var tianqi_s = document.querySelectorAll('.tianqi_s');
    tianqi_s[sz[10]].click();
}







//存档初始化
shezhi_cdcsh_ym = document.querySelector('.shezhi_cdcsh_ym');
shezhi_cdcsh = document.querySelector('.shezhi_cdcsh');
shezhi_cdcsh.addEventListener('click', function() {
    shezhi_min.style.display = 'none';
    shezhi_cdcsh_ym.style.display = 'block';
});
cdcsh_click = document.querySelector('.cdcsh_click');
var cdcsh_click_lxdj = document.querySelector('.cdcsh_click_lxdj');
var gywm_ban_ben_djcs5 = 0;
var WGS_HTSP_TJ = document.querySelector('.WGS_HTSP_TJ');
var gywm_ban_ben_sj5;
cdcsh_click.addEventListener('click', function(e) {
    gywm_ban_ben_sj5 ? clearTimeout(gywm_ban_ben_sj5) : undefined;
    gywm_ban_ben_djcs5++;
    cdcsh_click_lxdj.innerHTML = '再次点击 ' + (10 - gywm_ban_ben_djcs5) + ' 次';
    if (gywm_ban_ben_djcs5 == 10) {
        gywm_ban_ben_djcs5 = 0;
        cdcsh_click_lxdj.innerHTML = '';
        // 这里开始
        localStorage.removeItem('dhr_sz');
        localStorage.removeItem('dhr_ym_dx');
        localStorage.removeItem('bi_zhi_s');
        localStorage.removeItem('liu_yan_dx');
        localStorage.removeItem('sy_djs');
        localStorage.removeItem('sy_zpzs_mz');
        localStorage.removeItem('sy_zpzs_lj');
        localStorage.removeItem('music_cd');
        localStorage.removeItem('lsjl');
        localStorage.removeItem('ztfg_name');
        localStorage.removeItem('ztfg');
        localStorage.removeItem('sku_zcb');
        localStorage.removeItem('AI_jl');
        localStorage.removeItem('AI_kjzl');
        localStorage.removeItem('ke_biao');
        localStorage.removeItem('ke_biao_zhou');
        localStorage.dr_mmdr_drsj = 0;

        bdzdtj_true = 0; // 禁止刷新时自动导入
        location.reload();
    }
    WGS_HTSP_TJ.focus();
    gywm_ban_ben_sj5 = setTimeout(function() {
        gywm_ban_ben_djcs5 = 0;
        cdcsh_click_lxdj.innerHTML = '';
    }, 2000);
});






//登录密码
drmm_mm_qr = document.querySelector('.drmm_mm_qr');
drmm_mm_mm = document.querySelector('.drmm_mm_mm');
drmm_mm_mm_max = document.querySelector('.drmm_mm_mm_max');
drmm_mm_xmm = document.querySelector('.drmm_mm_xmm');
drmm_mm_zcsr = document.querySelector('.drmm_mm_zcsr');
shezhi_drmm_ym = document.querySelector('.shezhi_drmm_ym');
shezhi_drmm = document.querySelector('.shezhi_drmm');
shezhi_drmm.addEventListener('click', function() {
    shezhi_drmm_ym.style.display = 'block';
    shezhi_min.style.display = 'none';
    if (drmm_mm_mm_max.style.display == 'block') {
        drmm_mm_mm.focus();
    } else {
        drmm_mm_xmm.focus();
    }
});
//密码设置
function drmm_mm_red() {
    setTimeout(function() {
        imput_drym_mm = document.querySelector('.imput_drym_mm');
        drmm_mm_mm = document.querySelector('.drmm_mm_mm');
        drmm_mm_mm_max = document.querySelector('.drmm_mm_mm_max');
        drmm_mm_xmm = document.querySelector('.drmm_mm_xmm');
        imput_drym_mm.style.borderColor = '';
        drmm_mm_zcsr.style.borderColor = '';
        drmm_mm_mm.style.borderColor = '';
        drmm_mm_xmm.style.color = '';
        drmm_mm_zcsr.style.color = '';
        drmm_mm_mm.style.color = '';
    }, 2000);
}

drmm_mm_qr.addEventListener('click', function() {

    if (localStorage.dr_mm == '') {
        drmm_mm_xmm.style.borderColor = '';
        drmm_mm_zcsr.style.borderColor = '';
        if (drmm_mm_xmm.value == '' || drmm_mm_zcsr.value == '') {
            if (drmm_mm_xmm.value == '') {
                drmm_mm_xmm.style.borderColor = 'red';
                drmm_mm_red();
            }
            if (drmm_mm_zcsr.value == '') {
                drmm_mm_zcsr.style.borderColor = 'red';
                drmm_mm_red();
            }
        } else {
            if (drmm_mm_xmm.value !== drmm_mm_zcsr.value) {
                drmm_mm_zcsr.style.borderColor = 'red';
                drmm_mm_zcsr.style.color = 'red';
                drmm_mm_red();
            } else {
                localStorage.dr_mmdr_drsj = 0;
                localStorage.dr_mm = S_ku_jiami(drmm_mm_xmm.value);
                location.reload();
            }
        }
    }

    if (localStorage.dr_mm !== '') {
        drmm_mm_xmm.style.borderColor = '';
        drmm_mm_zcsr.style.borderColor = '';
        drmm_mm_mm.style.borderColor = '';
        if (S_ku_jiami(drmm_mm_mm.value) !== localStorage.dr_mm) {
            drmm_mm_mm.style.color = 'red';
            drmm_mm_mm.style.borderColor = 'red';
            drmm_mm_red();
        } else {
            if (drmm_mm_xmm.value !== drmm_mm_zcsr.value) {
                drmm_mm_zcsr.style.borderColor = 'red';
                drmm_mm_zcsr.style.color = 'red';
                drmm_mm_red();
            } else {
                localStorage.dr_mmdr_drsj = 0;
                localStorage.dr_mm = drmm_mm_xmm.value == '' ? drmm_mm_xmm.value : S_ku_jiami(drmm_mm_xmm.value);
                location.reload();
            }
        }
    }

});
//登入页面设置 
nrmax = document.querySelector('.nrmax');
var drym_cs_jz;
drym_max = document.querySelector('.drym_max');
drym_max.addEventListener('click', function(e) {
    imput_drym_mm.focus();
});
drym_min = document.querySelector('.drym_min');
drym_min.addEventListener('click', function(e) {
    imput_drym_mm.focus();
});
drym_dr = document.querySelector('.drym_dr');
imput_drym_mm = document.querySelector('.imput_drym_mm');
// 查看是否处罚中
function drym_cf_hsjsq() {
    drym_cs_jz = setInterval(function() {
        var nowTime = +new Date();
        var inputTime = localStorage.dr_mm_cf;
        var times = (inputTime - nowTime) / 1000;
        if (times < 0) {
            clearInterval(drym_cs_jz);
            localStorage.dr_mm_cf = 0;
            imput_drym_mm.disabled = ''; // 解除禁用
            imput_drym_mm.placeholder = '输入密码';
            imput_drym_mm.focus();
        } else {
            var m = parseInt(times / 60 % 60);
            m = m < 10 ? '0' + m : m;
            var s = parseInt(times % 60);
            s = s < 10 ? '0' + s : s;
            drym_cfsj = m + ':' + s;
            imput_drym_mm.placeholder = '稍后再尝试 ' + drym_cfsj;
        }
    }, 1000);
}

if (localStorage.dr_mm_cf != 0) {
    imput_drym_mm.disabled = 'disabled';
    imput_drym_mm.placeholder = '稍后再尝试';

    var nowTime = +new Date();
    var inputTime = localStorage.dr_mm_cf;
    var times = (inputTime - nowTime) / 1000;
    var m = parseInt(times / 60 % 60);
    m = m < 10 ? '0' + m : m;
    var s = parseInt(times % 60);
    s = s < 10 ? '0' + s : s;
    drym_cfsj = m + ':' + s;
    imput_drym_mm.placeholder = '稍后再尝试 ' + drym_cfsj;

    drym_cf_hsjsq();
}
// 登入按钮
drym_dr.addEventListener('click', function() {
    if (S_ku_jiami(imput_drym_mm.value) == localStorage.dr_mm) {
        localStorage.drym_srcs = 0;
        localStorage.drym_cs = 0;
        clearInterval(drmm_dsq);
        imput_drym_mm.value = '';
        drym_max.style.display = 'none';
        nrmax.style.display = 'block';
        setTimeout(function() {
            nrmaxs0_nr = document.querySelector('.nrmaxs0_nr');
            nrmaxs0_nr.style.opacity = 1;
            nrmaxs0_nr.style.transform = 'translateY(0px)';
        }, 100);
        if (nrmaxs0.style.display == 'block') { sy_lbnr_hs(); }

        // 登入时间戳
        localStorage.dr_mmdr_drsj = +new Date();

        // 热点搜索
        mrrd_sx();
        // 云导入
        daoru_yun_click();
    } else {
        if (imput_drym_mm.value !== '') {
            localStorage.drym_cs++; //错误次数
            imput_drym_mm.style.borderColor = 'red';
            drmm_mm_red();
            imput_drym_mm.value = '';
            imput_drym_mm.focus();

            if (localStorage.drym_cs != 5) {
                Sku_tctx('密码错误! ' + '还剩' + (5 - localStorage.drym_cs) + '次机会');
            }

        } else {
            imput_drym_mm.focus();
        }
        if (localStorage.dr_mm_cf != 0) {
            Sku_tctx('稍后再尝试 !');
        }
        if (localStorage.drym_cs == 5) {
            imput_drym_mm.value = '';
            imput_drym_mm.disabled = 'disabled';
            imput_drym_mm.placeholder = '稍后再尝试';
            localStorage.dr_mm_cf = (+new Date() + (1000 * 60 * 10));
            drym_cf_hsjsq();
            localStorage.drym_cs = 0;
            Sku_tctx('密码错误! 10分钟后再尝试');
        }
    }
});

// 自动登入
if (localStorage.dr_mm !== '') {
    drym_mm_length = S_ku_jiemi(localStorage.dr_mm).length;
}
imput_drym_mm.addEventListener('input', function(e) {
    localStorage.drym_srcs++;
    if (S_ku_jiami(imput_drym_mm.value) == localStorage.dr_mm && localStorage.drym_srcs == drym_mm_length) {
        drym_dr.click();
    }
});

// 免密登入
var drmm_zddr_g = document.querySelector('.drmm_zddr_g');
if (localStorage.dr_mmdr == 0) {
    drmm_zddr_g.innerHTML = '';
} else {
    drmm_zddr_g.innerHTML = '✔';
}
drmm_zddr_g.addEventListener('click', function(e) {
    if (drmm_zddr_g.innerHTML == '✔') {
        drmm_zddr_g.innerHTML = '';
        localStorage.dr_mmdr = 0;
        localStorage.dr_mmdr_drsj = 0;
        Sku_tctx('关闭 保持登录状态 !');
    } else {
        drmm_zddr_g.innerHTML = '✔';
        localStorage.dr_mmdr = 1;
        localStorage.dr_mmdr_drsj = 0;
        Sku_tctx('打开 保持登录状态 !');
    }
});
var drmm_mmdr_sj = document.querySelector('.drmm_mmdr_sj');
drmm_mmdr_sj.value = localStorage.dr_mmdr_mmfw;
drmm_mmdr_sj.addEventListener('blur', function(e) {
    if (drmm_mmdr_sj.value >= 1 && drmm_mmdr_sj.value <= (60 * 24 * 3)) {
        Sku_tctx('更改成功 !');
        localStorage.dr_mmdr_drsj = 0;
        localStorage.dr_mmdr_mmfw = drmm_mmdr_sj.value;
    } else if (drmm_mmdr_sj.value < 1) {
        Sku_tctx('更改失败 ! 时间不能小于 1 分钟');
        drmm_mmdr_sj.value = localStorage.dr_mmdr_mmfw;
    } else if (drmm_mmdr_sj.value > (60 * 24 * 3)) {
        Sku_tctx('更改失败 ! 时间不能大于 72 小时');
        drmm_mmdr_sj.value = localStorage.dr_mmdr_mmfw;
    }
});






//关于我们
shezhi_gywm = document.querySelector('.shezhi_gywm');
shezhi_gywm_ym = document.querySelector('.shezhi_gywm_ym');
gywm_ci_shu = document.querySelector('.gywm_ci_shu');
shezhi_gywm.addEventListener('click', function() {
    shezhi_gywm_ym.style.display = 'block';
    shezhi_min.style.display = 'none';
});
gywm_ban_ben = document.querySelector('.gywm_ban_ben');
gywm_ban_ben.innerHTML = localStorage.ban_ben;
gywm_ci_shu.innerHTML = localStorage.sy_ci_shu + ' 次';





// 导入与导出
var daoru_ym_jmdc = document.querySelector('.daoru_ym_jmdc');
var daoru_ym_dr = document.querySelector('.daoru_ym_dr');
var daoru_ym_dc = document.querySelector('.daoru_ym_dc');
var daoru_ym_sc = document.querySelector('.daoru_ym_sc');
var shezhi_daoru = document.querySelector('.shezhi_daoru');
var shezhi_daoru_ym = document.querySelector('.shezhi_daoru_ym');
var jisuan_bendidx = 0;

// 集成应用与导入导出加密导入导出本地导入应用等
var daochu_daoru_max = ['dhr_sz', 'dhr_ym_dx', 'sy_sosuo_yq', 'tou_xiang', 'liu_yan_dx', 'bi_zhi_s', 'bi_zhi', 'tian_qi', 'zi_ti_color', 'zi_ti_click_color', 'bei_jing_color', 'bei_jing_tmd', 'bei_jing_kuan_ture', 'bei_jing_kuan_color', 'bei_jing_kuan_tmd', 'mao_bo_li', 'zdbf', 'sy_ci_shu', 'sy_djs', 'dr_mm', 'sy_zpzs_lj', 'sy_zpzs_mz', 'music_cd', 'music_bfsx', 'music_sydx', 'lsjl', 'htsp_s', 'sku_zcb', 'bi_zhi_ys', 'ztfg', 'ztfg_name', 'AI_jl', 'AI_kjzl', 'ke_biao', 'ke_biao_zhou', 'syzsc', 'zddrbd', 'zdjmdc', 'da_ka'];
// 导航栏,导航栏页面,万能搜索引擎,头像,留言,所有壁纸,当前壁纸,天气,字体颜色,重字体颜色,背景颜色,背景透明度,背景确认框,背景框颜色,背景框透明度,毛玻璃,自动备份,使用次数,倒计时,密码,作品展示,音乐,搜索记录,HTSP,注册表,背景颜色,主题风格,ai,ai快捷指令,课表,总时长,自动导入本地,自动加密导出,打卡

// 检查是否为时间
function isValidDateTime(str) {
    // 正则表达式验证格式
    const datetimeRegex = /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/;
    if (!datetimeRegex.test(str)) {
        return false; // 格式不匹配，直接返回 false
    }

    // 提取日期时间部分
    const [datePart, timePart] = str.split(' ');

    // 构造 Date 对象
    const [year, month, day] = datePart.split('-').map(Number);
    const [hour, minute, second] = timePart.split(':').map(Number);

    const date = new Date(year, month - 1, day, hour, minute, second);

    // 验证日期有效性
    return (
        date.getFullYear() === year &&
        date.getMonth() + 1 === month && // 注意：getMonth() 返回值从 0 开始
        date.getDate() === day &&
        date.getHours() === hour &&
        date.getMinutes() === minute &&
        date.getSeconds() === second
    );
}

shezhi_daoru.addEventListener('click', function(e) {
    shezhi_min.style.display = 'none';
    shezhi_daoru_ym.style.display = 'block';
    daoru_ym_sc.value = '';
    daoru_ym_sc.focus();
    daoru_ym_sc_tjzs();
    bendidaxiao_jc(); //计算当前内容长度
});

function bendidaxiao_jc() { //计算当前内容长度
    var daochu_sz = [];
    for (var i = 0; i < daochu_daoru_max.length; i++) {
        daochu_sz[i] = localStorage.getItem(daochu_daoru_max[i]);
    }
    //上传时间
    function getFormattedTime() {
        const now = new Date();
        const year = now.getFullYear();
        const month = now.getMonth() + 1 < 10 ? `0${now.getMonth() + 1}` : now.getMonth() + 1;
        const date = now.getDate() < 10 ? `0${now.getDate()}` : now.getDate();
        const hour = now.getHours() < 10 ? `0${now.getHours()}` : now.getHours();
        const minute = now.getMinutes() < 10 ? `0${now.getMinutes()}` : now.getMinutes();
        const second = now.getSeconds() < 10 ? `0${now.getSeconds()}` : now.getSeconds();
        return `${year}-${month}-${date} ${hour}:${minute}:${second}`;
    }
    daochu_sz[daochu_daoru_max.length] = getFormattedTime();

    jisuan_bendidx = JSON.stringify(daochu_sz).length;
}

//导出
daoru_ym_dc.addEventListener('click', function(e) {

    var daochu_sz = [];
    for (var i = 0; i < daochu_daoru_max.length; i++) {
        daochu_sz[i] = localStorage.getItem(daochu_daoru_max[i]);
    }
    //上传时间
    function getFormattedTime() {
        const now = new Date();
        const year = now.getFullYear();
        const month = now.getMonth() + 1 < 10 ? `0${now.getMonth() + 1}` : now.getMonth() + 1;
        const date = now.getDate() < 10 ? `0${now.getDate()}` : now.getDate();
        const hour = now.getHours() < 10 ? `0${now.getHours()}` : now.getHours();
        const minute = now.getMinutes() < 10 ? `0${now.getMinutes()}` : now.getMinutes();
        const second = now.getSeconds() < 10 ? `0${now.getSeconds()}` : now.getSeconds();
        return `${year}-${month}-${date} ${hour}:${minute}:${second}`;
    }
    daochu_sz[daochu_daoru_max.length] = getFormattedTime();

    daoru_ym_sc.value = JSON.stringify(daochu_sz);

    daoru_ym_sc_tjzs();

    // 创建TXT文本 WGS_txt_wenbenchuanjian('文件名','文本内容');
    if (shezhi_daoru_ym.style.display == 'block') {
        WGS_txt_wenbenchuanjian('S-ku库', daoru_ym_sc.value);
    }

    function WGS_txt_wenbenchuanjian(fileName, txt) {
        // 创建文本内容
        var text = txt;

        // 创建Blob对象
        var blob = new Blob([text], {
            type: "text/plain;charset=utf-8"
        });

        // 创建下载链接
        var url = URL.createObjectURL(blob);
        var link = document.createElement('a');
        link.href = url;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        URL.revokeObjectURL(url); // 释放内存
    }

});

// 加密导出

daoru_ym_jmdc.addEventListener('click', function(e) {
    var daochu_sz = [];
    for (var i = 0; i < daochu_daoru_max.length; i++) {
        daochu_sz[i] = localStorage.getItem(daochu_daoru_max[i]);
    }
    //上传时间
    function getFormattedTime() {
        const now = new Date();
        const year = now.getFullYear();
        const month = now.getMonth() + 1 < 10 ? `0${now.getMonth() + 1}` : now.getMonth() + 1;
        const date = now.getDate() < 10 ? `0${now.getDate()}` : now.getDate();
        const hour = now.getHours() < 10 ? `0${now.getHours()}` : now.getHours();
        const minute = now.getMinutes() < 10 ? `0${now.getMinutes()}` : now.getMinutes();
        const second = now.getSeconds() < 10 ? `0${now.getSeconds()}` : now.getSeconds();
        return `${year}-${month}-${date} ${hour}:${minute}:${second}`;
    }
    daochu_sz[daochu_daoru_max.length] = getFormattedTime();

    daoru_ym_sc.value = WGS_zfc_jiami(JSON.stringify(daochu_sz), miyao);

    daoru_ym_sc_tjzs();

    // 创建TXT文本 WGS_txt_wenbenchuanjian('文件名','文本内容');
    WGS_txt_wenbenchuanjian('S-ku加密库', WGS_zfc_jiami(JSON.stringify(daochu_sz), miyao));

    function WGS_txt_wenbenchuanjian(fileName, txt) {
        // 创建文本内容
        var text = txt;

        // 创建Blob对象
        var blob = new Blob([text], {
            type: "text/plain;charset=utf-8"
        });

        // 创建下载链接
        var url = URL.createObjectURL(blob);
        var link = document.createElement('a');
        link.href = url;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        URL.revokeObjectURL(url); // 释放内存
    }

});

// 统计字数和来源
var daoru_ym_sc_zishu = document.querySelector('.daoru_ym_sc_zishu');
var daoru_ym_sc_laiyuan = document.querySelector('.daoru_ym_sc_laiyuan');

function daoru_ym_sc_tjzs() {
    if (daoru_ym_sc.value.length < 15000) {
        daoru_ym_sc_zishu.innerText = '导入 ' + daoru_ym_sc.value.length + ' 位数';
        daoru_ym_dr.innerText = '导入';

        daoru_ym_sc_laiyuan.innerText = '';
    } else {
        if (daoru_ym_sc.value.length > jisuan_bendidx) {
            daoru_ym_sc_zishu.innerText = '导入 ' + daoru_ym_sc.value.length + ' 位数 > 当前 ' + jisuan_bendidx + ' 位数';
            daoru_ym_dr.innerText = '导入';
        } else if (daoru_ym_sc.value.length == jisuan_bendidx) {
            daoru_ym_sc_zishu.innerText = '导入 ' + daoru_ym_sc.value.length + ' 位数 = 当前 ' + jisuan_bendidx + ' 位数';
            daoru_ym_dr.innerText = '导入';
        } else {
            daoru_ym_sc_zishu.innerText = '导入 ' + daoru_ym_sc.value.length + ' 位数 < 当前 ' + jisuan_bendidx + ' 位数\n(当前数据量较小' + (jisuan_bendidx - daoru_ym_sc.value.length) + '位,建议谨慎操作导入)';
            daoru_ym_dr.innerText = '导入 !';
        }

        var daoru_laiyuan_sj = daoru_ym_sc.value.substring(daoru_ym_sc.value.length - 21, daoru_ym_sc.value.length - 2);
        if (daoru_laiyuan_sj[0] == 'ʂ') {
            daoru_laiyuan_sj = WGS_zfc_jiami(daoru_laiyuan_sj, miyao);
        } else if (daoru_laiyuan_sj[0] !== '2') {
            daoru_laiyuan_sj = '未知';
        }
        daoru_ym_sc_laiyuan.innerText = '来源[ ' + daoru_laiyuan_sj + ' ]';
    }
}
daoru_ym_sc.addEventListener('input', function(e) {
    daoru_ym_sc_tjzs();
});

//导入
var daoru_sz = [];

function daoru_sz_hs() {
    if (daoru_sz.length >= daochu_daoru_max.length - 5) {

        for (var i = 0; i < daoru_sz.length; i++) {

            if (i == daoru_sz.length - 1) {
                if (isValidDateTime(daoru_sz[i])) {
                    break;
                }
            }

            localStorage.setItem(daochu_daoru_max[i], daoru_sz[i]);

        }
        // 时间戳0
        localStorage.dr_mmdr_drsj = 0;
        // 禁止自动导入导出
        bdzdtj_true = 0;
        location.reload();
    } else {
        Sku_tctx('格式错误 ! 缺少导入模块 或 数据过时');
        daoru_ym_sc.value = '';
    }
}

var daoru_ym_dr_mmym = document.querySelector('.daoru_ym_dr_mmym');
var daoru_ym_dr_mmym_qr = document.querySelector('.daoru_ym_dr_mmym_qr');
var daoru_ym_my = document.querySelector('.daoru_ym_my');
var if_key_dr = 0;
daoru_ym_dr.addEventListener('click', function(e) {
    e.stopPropagation();
    try {
        if_key_dr = 0;
        if (daoru_ym_sc.value[0] == '[') {
            daoru_sz = JSON.parse(daoru_ym_sc.value);
            daoru_sz_hs();
        } else if (WGS_zfc_jiami(daoru_ym_sc.value, miyao) == 'ˇ˅˗˕˞˃˘˕˞') { //密钥
            // 暂停使用
            daoru_ym_sc.disabled = 'disabled';
            daoru_ym_sc.value = '';
            daoru_ym_sc.placeholder = '获取中.........';
            daoru_ym_sc_tjzs();
            // 确保服务器支持CORS
            const url = WGS_zfc_jiami('˘˄˄ˀ˃ʊʟʟˇ˅˗˕˞˃˘˕˞ʂʃʁʅʀʁʞ˗˙˄˘˅˒ʞ˙˟ʟ˗˕˙ʝ˂˕˞˗˗˙˄˘˅˒ʞ˙˟ʟˣʝ˛˅ʕ˵ʅʕʈ˱ʕ˱ʀʕ˵ʅʕ˱˶ʕʈʆʕ˵ʅʕ˲˱ʕʉʃʞ˄ˈ˄', miyao);

            fetch(url)
                .then(response => {
                    if (!response.ok) {
                        Sku_tctx('网络响应不正常 !');
                        throw new Error('Network response was not ok ' + response.statusText);
                    }
                    return response.text();
                })
                .then(data => {
                    daoru_ym_sc.value = data;
                    Sku_tctx('日期: ' + WGS_zfc_jiami(daoru_ym_sc.value.substring(daoru_ym_sc.value.length - 21, daoru_ym_sc.value.length - 2), miyao));
                    // 可以使用
                    daoru_ym_sc.disabled = '';
                    daoru_ym_sc.placeholder = '导入模块 / 密钥 / 网址';
                    daoru_ym_sc_tjzs();
                })
                .catch(error => {
                    console.error('There has been a problem with your fetch operation:', error);
                    Sku_tctx('获取失败! 网络故障 或 地址错误');
                    console.log('获取失败! 网络故障 或 地址错误');
                    // 可以使用
                    daoru_ym_sc.disabled = '';
                    daoru_ym_sc.placeholder = '导入模块 / 密钥 / 网址';
                    daoru_ym_sc_tjzs();
                });
        } else if (daoru_ym_sc.value.substring(0, 4) == 'http') { //网址导入
            // 暂停使用
            daoru_ym_sc.disabled = 'disabled';
            daoru_ym_sc.placeholder = '获取中.........';
            // 确保服务器支持CORS
            const url = daoru_ym_sc.value;
            daoru_ym_sc.value = '';

            fetch(url)
                .then(response => {
                    if (!response.ok) {
                        Sku_tctx('网络响应不正常 !');
                        throw new Error('Network response was not ok ' + response.statusText);
                    }
                    return response.text();
                })
                .then(data => {
                    daoru_ym_sc.value = data;
                    // 可以使用
                    daoru_ym_sc.disabled = '';
                    daoru_ym_sc.placeholder = '导入模块 / 密钥 / 网址';
                })
                .catch(error => {
                    console.error('There has been a problem with your fetch operation:', error);
                    Sku_tctx('获取失败! 网络故障 或 地址错误');
                    console.log('获取失败! 网络故障 或 地址错误');
                    // 可以使用
                    daoru_ym_sc.disabled = '';
                    daoru_ym_sc.placeholder = '导入模块 / 密钥 / 网址';
                });
        } else if (daoru_ym_sc.value[0] == '˫') { //加密文件
            daoru_sz = JSON.parse(WGS_zfc_jiemi(daoru_ym_sc.value, miyao));
            if (daoru_sz[19] == '') {
                daoru_sz_hs();
            } else {
                daoru_ym_dr_mmym.style.display = 'block';
                daoru_ym_my.focus();
            }
        } else if ((/^[a-z,]+$/.test(WGS_zfc_jiami(daoru_ym_sc.value, miyao)) && (WGS_zfc_jiami(daoru_ym_sc.value, miyao).replace(/,/g, '').length % 10 === 0) && WGS_zfc_jiami(daoru_ym_sc.value, miyao).replace(/,/g, '').length > 0) || (/^[a-z,]+$/.test(daoru_ym_sc.value) && (daoru_ym_sc.value.replace(/,/g, '').length % 10 === 0) && daoru_ym_sc.value.replace(/,/g, '').length > 0)) { //key
            if_key_dr = 1;
            if (/^[a-z,]+$/.test(daoru_ym_sc.value)) {
                key_huoqu(WGS_zfc_jiami(daoru_ym_sc.value, miyao));
            } else {
                key_huoqu(daoru_ym_sc.value);
            }
        } else {
            daoru_ym_sc.value = '';
            daoru_ym_sc_tjzs();
            Sku_tctx('格式错误 ! 不符合的导入模块');
        }
    } catch (error) {
        // 如果上面代码有异常时
        daoru_ym_sc.value = '';
        daoru_ym_sc_tjzs();
        Sku_tctx('格式错误 ! 不符合的导入模块');
    }
});

// 加密导入密钥页面
daoru_ym_dr_mmym.addEventListener('click', function(e) {
    e.stopPropagation();
});
daoru_ym_dr_mmym_qr.addEventListener('click', function(e) {
    if (daoru_ym_my.value == '') {
        Sku_tctx('密钥不能为空 !');
    } else {
        daoru_sz = JSON.parse(WGS_zfc_jiemi(daoru_ym_sc.value, miyao));
        if (daoru_sz[19] == S_ku_jiami(daoru_ym_my.value)) {
            daoru_sz_hs();
        } else {
            Sku_tctx('密钥错误 !');
            daoru_ym_my.value = '';
            daoru_ym_my.focus();
        }
    }
});

// 2023加:导入本地
var duibi_bendi = 0; //对比
var daoru_ym_bendi = document.querySelector('.daoru_ym_bendi');
daoru_ym_bendi.addEventListener('click', function(e) {
    if (daoru_ym_bendi.innerHTML == '导入本地') {
        var zd_daochu = [];
        for (var i = 0; i < daochu_daoru_max.length; i++) {
            zd_daochu[i] = localStorage.getItem(daochu_daoru_max[i]);
        }
        //上传时间
        function getFormattedTime() {
            const now = new Date();
            const year = now.getFullYear();
            const month = now.getMonth() + 1 < 10 ? `0${now.getMonth() + 1}` : now.getMonth() + 1;
            const date = now.getDate() < 10 ? `0${now.getDate()}` : now.getDate();
            const hour = now.getHours() < 10 ? `0${now.getHours()}` : now.getHours();
            const minute = now.getMinutes() < 10 ? `0${now.getMinutes()}` : now.getMinutes();
            const second = now.getSeconds() < 10 ? `0${now.getSeconds()}` : now.getSeconds();
            return `${year}-${month}-${date} ${hour}:${minute}:${second}`;
        }
        // 打包时间
        zd_daochu[daochu_daoru_max.length] = getFormattedTime();

        //保存
        if (beforeunload_jmdc == 0) {
            window.localStorage.setItem(
                `${'Date:' + getFormattedTime() + ' Byte:' + JSON.stringify(zd_daochu).length} 本地导入`,
                JSON.stringify(zd_daochu)
            )
        } else {
            window.localStorage.setItem(
                `${'Date:' + getFormattedTime() + ' Byte:' + JSON.stringify(zd_daochu).length} 自动本地导入`,
                JSON.stringify(zd_daochu)
            )
        }

        // 更新html
        var daorubendi_max_hd = document.querySelector('.daorubendi_max_hd');
        var daorubendi_min = document.querySelector('.daorubendi_min');
        daorubendi_max_hd.removeChild(daorubendi_min);
        var div = document.createElement('div');
        div.className = 'daorubendi_min';
        daorubendi_max_hd.appendChild(div);
        cxjiaz_daorubendi_xx();
        bendidaoru_click();
        bendidaoru_sc();

        // 导入提醒
        daoru_ym_bendi.innerHTML = '导入成功';
        setTimeout(function() {
            daoru_ym_bendi.innerHTML = '导入本地';
        }, 2000);

        Sku_tctx('导入成功 Date:' + getFormattedTime() + ' Byte:' + JSON.stringify(zd_daochu).length);
    }
});





// 查看导入本地信息和设置
var shezhi_daoru_bendi_ym = document.querySelector('.shezhi_daoru_bendi_ym');
var daoru_ym_bendi_click = document.querySelector('.daoru_ym_bendi_click');
var bizhi_gundon2 = document.querySelector('.bizhi_gundon2');
var daorubendi_max_hd = document.querySelector('.daorubendi_max_hd');
daoru_ym_bendi_click.addEventListener('click', function(e) {
    shezhi_min.style.display = 'none';
    shezhi_daoru_ym.style.display = 'none';
    shezhi_daoru_bendi_ym.style.display = 'block';
    bizhi_gundon2.innerHTML = '↓';
    daorubendi_max_hd.scroll(0, 0);

    var daorubendi_s_yy = document.querySelectorAll('.daorubendi_s_yy');
    for (var i = 0; i < daorubendi_s_yy.length; i++) {
        daorubendi_s_yy[i].innerText = '应用';
    }

    duibi_bendi = 0;

    // 提醒自动导入仅保留最近10条
    var shezhi_ym_top = document.querySelector('.shezhi_daoru_bendi_ym').querySelector('.shezhi_ym_top');
    if (localStorage.zddrbd == 0) {
        shezhi_ym_top.lastChild.nodeValue = '本地导入信息';
    } else {
        shezhi_ym_top.lastChild.nodeValue = '本地导入信息 ( 🛈自动导入仅保留最近10条 )';
    }
});

// 导出所有保存的密钥  
cxjiaz_daorubendi_xx();

function cxjiaz_daorubendi_xx() {
    function getAutoSaveKeys() {
        const keys = Object.keys(localStorage); // 获取所有 localStorage 键名
        const filteredKeys = keys.filter(key =>
            key.includes('本地导入') || key.includes('自动本地导入')
        );
        return filteredKeys; // 返回筛选结果
    }
    var daoru_bendi_s = getAutoSaveKeys();

    // 去除全部本地导入4个字
    function removeLastFourChars(arr) {
        return arr.map(str => str.slice(0, -4));
    }
    var daoru_bendi_s_sj = removeLastFourChars(daoru_bendi_s);

    // 从大到小排序
    function bubbleSort(arr) {
        var len = arr.length;
        for (var i = 0; i < len - 1; i++) {
            for (var j = 0; j < len - i - 1; j++) {
                if (arr[j] < arr[j + 1]) {
                    var temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
        return arr;
    }
    var daoru_bendi_s_pailie_sj = bubbleSort(daoru_bendi_s_sj);

    // html导出存档
    var daorubendi_min = document.querySelector('.daorubendi_min');
    for (var i = 0; i < daoru_bendi_s_pailie_sj.length; i++) {
        var div = document.createElement('div');
        div.className = 'daorubendi_s';
        if (duibi_bendi !== 0) {
            div.innerHTML = '<div class="daorubendi_s_sj">' + daoru_bendi_s_pailie_sj[i] + '</div><div class="daorubendi_s_yy">选择</div><div class="daorubendi_s_cs"><i class="iconfont icon-shanchu1 i_sc_tb"></i></div>';
        } else {
            div.innerHTML = '<div class="daorubendi_s_sj">' + daoru_bendi_s_pailie_sj[i] + '</div><div class="daorubendi_s_yy">应用</div><div class="daorubendi_s_cs"><i class="iconfont icon-shanchu1 i_sc_tb"></i></div>';
        }
        daorubendi_min.appendChild(div);
    }
};


// 本地导入应用click
bendidaoru_click();
// 使用本地禁止自动添加
var bdzdtj_true = 1;

function bendidaoru_click() {
    var daorubendi_s_yy = document.querySelectorAll('.daorubendi_s_yy');
    for (var i = 0; i < daorubendi_s_yy.length; i++) {
        daorubendi_s_yy[i].addEventListener('click', function(e) {
            if (this.innerText == '应用') {
                try {
                    var daorubendi_click = this.previousElementSibling.innerHTML + '本地导入';
                    var drnr = window.localStorage.getItem(`${daorubendi_click}`);
                    var daoru_sz = JSON.parse(drnr);
                    for (var i = 0; i < daoru_sz.length; i++) {

                        if (i == daoru_sz.length - 1) {
                            if (isValidDateTime(daoru_sz[i])) {
                                break;
                            }
                        }

                        localStorage.setItem(daochu_daoru_max[i], daoru_sz[i]);

                    }
                    // 时间戳0
                    localStorage.dr_mmdr_drsj = 0;
                    bdzdtj_true = 0; // 禁止刷新时自动导入
                    location.reload();
                } catch (error) {
                    // 这个块会在 try 中有错误抛出时执行
                    Sku_tctx('模块错误 ! key值以改变 或 其他原因');
                }
            } else if (this.innerText == '选择') {
                var daorubendi_click = this.previousElementSibling.innerHTML + '本地导入';
                var drnr = window.localStorage.getItem(`${daorubendi_click}`);

                const allClickableElements = document.querySelectorAll('.daorubendi_s_yy');
                const clickedElementIndex = Array.from(allClickableElements).indexOf(e.target);
                if (duibi_bendi == 1) {
                    bijiao_1_input.value = drnr;
                    bijiao_laiyuan1.innerText = '本地模块' + (clickedElementIndex + 1);
                } else if (duibi_bendi == 2) {
                    bijiao_2_input.value = drnr;
                    bijiao_laiyuan2.innerText = '本地模块' + (clickedElementIndex + 1);
                }
                duibi_zxian.innerText = '';

                shezhi_min.style.display = 'none';
                shezhi_daoru_ym.style.display = 'none';
                shezhi_daoru_bendi_ym.style.display = 'none';
                shezhi_duibixx_ym.style.display = 'block';
                bizhi_gundon7.innerHTML = '↓';
                duibixx_max.scroll(0, 0);

            }
        });
    }
}

// 删除本地导入应用
bendidaoru_sc();

function bendidaoru_sc() {
    var daorubendi_s_cs = document.querySelectorAll('.daorubendi_s_cs');
    for (var i = 0; i < daorubendi_s_cs.length; i++) {
        daorubendi_s_cs[i].addEventListener('click', function(e) {
            // 删除内存
            var daorubendi_s_cs = this.previousElementSibling.previousElementSibling.innerHTML + '本地导入';
            localStorage.removeItem(`${daorubendi_s_cs}`);
            // 删除html
            this.parentNode.parentNode.removeChild(this.parentNode);

            Sku_tctx('删除成功');
        });
    }
}

// 删除所有本地导入
var shanchu_daoru_bendi = document.querySelector('.shanchu_daoru_bendi');
shanchu_daoru_bendi.addEventListener('click', function(e) {
    var daorubendi_s_cs = document.querySelectorAll('.daorubendi_s_cs');
    for (let i = 0; i < daorubendi_s_cs.length; i++) {
        daorubendi_s_cs[i].click();
    }
});






// 信息对比
var bijiao_1_max = document.querySelector('.bijiao_1_max');
var bijiao_2_max = document.querySelector('.bijiao_2_max');
var bijiao_2_miyao_input = document.querySelector('.bijiao_2_miyao_input');
var bijiao_1_miyao_input = document.querySelector('.bijiao_1_miyao_input');
var duibixx_min = document.querySelector('.duibixx_min');
var bijiao_kais = document.querySelector('.bijiao_kais');
var bijiao_qk = document.querySelector('.bijiao_qk');
var bijiao_2_input = document.querySelector('.bijiao_2_input');
var bijiao_2_bendi = document.querySelector('.bijiao_2_bendi');
var bijiao_2_dq = document.querySelector('.bijiao_2_dq');
var bijiao_1_input = document.querySelector('.bijiao_1_input');
var bijiao_1_dq = document.querySelector('.bijiao_1_dq');
var bijiao_1_bendi = document.querySelector('.bijiao_1_bendi');
var duibixx_max = document.querySelector('.duibixx_max');
var bizhi_gundon7 = document.querySelector('.bizhi_gundon7');
var shezhi_duibixx_ym = document.querySelector('.shezhi_duibixx_ym');
var daoru_ym_duibi_click = document.querySelector('.daoru_ym_duibi_click');
var bijiao_zhankai = document.querySelector('.bijiao_zhankai');
var bijiao_zdhedie = document.querySelector('.bijiao_zdhedie');
var duibi_zxian = document.querySelector('.duibi_zxian');
var bijiao_laiyuan1 = document.querySelector('.bijiao_laiyuan1');
var bijiao_laiyuan2 = document.querySelector('.bijiao_laiyuan2');
daoru_ym_duibi_click.addEventListener('click', function(e) {
    shezhi_min.style.display = 'none';
    shezhi_daoru_ym.style.display = 'none';
    shezhi_duibixx_ym.style.display = 'block';
    bizhi_gundon7.innerHTML = '↓';
    duibixx_max.scroll(0, 0);
});
// 来源
bijiao_1_input.addEventListener('input', function(e) {
    if (bijiao_1_input.value == '') {
        bijiao_laiyuan1.innerText = '';
    } else {
        bijiao_laiyuan1.innerText = '自定义模块';
    }
    duibi_zxian.innerText = '';
});
bijiao_2_input.addEventListener('input', function(e) {
    if (bijiao_2_input.value == '') {
        bijiao_laiyuan2.innerText = '';
    } else {
        bijiao_laiyuan2.innerText = '自定义模块';
    }
    duibi_zxian.innerText = '';
});
// 清空
bijiao_qk.addEventListener('click', function(e) {
    duibixx_min.innerHTML = '';
    bijiao_1_input.value = '';
    bijiao_2_input.value = '';
    bijiao_1_miyao_input.value = '';
    bijiao_2_miyao_input.value = '';
    duibi_zxian.innerText = '';
    bijiao_laiyuan1.innerText = '';
    bijiao_laiyuan2.innerText = '';
});
// 当前
bijiao_1_dq.addEventListener('click', function(e) {
    daoru_ym_dc.click();
    bijiao_1_input.value = daoru_ym_sc.value;
    daoru_ym_sc.value = '';
    bijiao_laiyuan1.innerText = '当前模块';
    duibi_zxian.innerText = '';
});
bijiao_2_dq.addEventListener('click', function(e) {
    daoru_ym_dc.click();
    bijiao_2_input.value = daoru_ym_sc.value;
    daoru_ym_sc.value = '';
    bijiao_laiyuan2.innerText = '当前模块';
    duibi_zxian.innerText = '';
});
// 拖拽读取导入信息
bijiao_1_max.addEventListener('dragover', function(e) {
    e.preventDefault();
});
bijiao_1_max.addEventListener('drop', function(e) {
    e.preventDefault();
    var dt = e.dataTransfer;
    var files = dt.files;
    var dx = new FileReader();
    dx.readAsText(files[0]);
    dx.onload = function(e) {
        var wj = e.target.result;
        // 处理信息
        bijiao_1_input.value = wj;
        bijiao_laiyuan1.innerText = '自定义模块';
        duibi_zxian.innerText = '';
    }
});
bijiao_2_max.addEventListener('dragover', function(e) {
    e.preventDefault();
});
bijiao_2_max.addEventListener('drop', function(e) {
    e.preventDefault();
    var dt = e.dataTransfer;
    var files = dt.files;
    var dx = new FileReader();
    dx.readAsText(files[0]);
    dx.onload = function(e) {
        var wj = e.target.result;
        // 处理信息
        bijiao_2_input.value = wj;
        bijiao_laiyuan2.innerText = '自定义模块';
        duibi_zxian.innerText = '';
    }
});
// 本地
bijiao_1_bendi.addEventListener('click', function(e) {
    duibi_bendi = 1;

    shezhi_min.style.display = 'none';
    shezhi_daoru_ym.style.display = 'none';
    shezhi_daoru_bendi_ym.style.display = 'block';
    bizhi_gundon2.innerHTML = '↓';
    daorubendi_max_hd.scroll(0, 0);

    var daorubendi_s_yy = document.querySelectorAll('.daorubendi_s_yy');
    for (var i = 0; i < daorubendi_s_yy.length; i++) {
        daorubendi_s_yy[i].innerText = '选择';
    }
});
bijiao_2_bendi.addEventListener('click', function(e) {
    duibi_bendi = 2;

    shezhi_min.style.display = 'none';
    shezhi_daoru_ym.style.display = 'none';
    shezhi_daoru_bendi_ym.style.display = 'block';
    bizhi_gundon2.innerHTML = '↓';
    daorubendi_max_hd.scroll(0, 0);

    var daorubendi_s_yy = document.querySelectorAll('.daorubendi_s_yy');
    for (var i = 0; i < daorubendi_s_yy.length; i++) {
        daorubendi_s_yy[i].innerText = '选择';
    }
});
// 展开
bijiao_zhankai.addEventListener('click', function(e) {
    var duibixx_s_xx = document.querySelectorAll('.duibixx_s_xx');
    var duibixx_s_bt = document.querySelectorAll('.duibixx_s_bt');
    for (var i = 0; i < duibixx_s_bt.length; i++) {
        if (duibixx_s_bt[i].nextElementSibling.innerText == '▼') {
            duibixx_s_bt[i].click();
        }
    }
    for (var i = 0; i < duibixx_s_xx.length; i++) {
        if (duibixx_s_xx[i].offsetHeight == 30) {
            duibixx_s_xx[i].click();
        }
    }
});
// 折叠
bijiao_zdhedie.addEventListener('click', function(e) {
    var duibixx_s_xx = document.querySelectorAll('.duibixx_s_xx');
    var duibixx_s_bt = document.querySelectorAll('.duibixx_s_bt');
    for (var i = 0; i < duibixx_s_xx.length; i++) {
        if (duibixx_s_xx[i].offsetHeight !== 30) {
            duibixx_s_xx[i].click();
        }
    }
    for (var i = 0; i < duibixx_s_bt.length; i++) {
        if (duibixx_s_bt[i].nextElementSibling.innerText == '▲') {
            duibixx_s_bt[i].click();
        }
    }
});
// 切换时间走向比较
duibi_zxian.addEventListener('click', function(e) {
    if (this.innerText == '↑↑↑↑') {
        this.innerText = '↓↓↓↓';
    } else {
        this.innerText = '↑↑↑↑';
    }
    bijiao_kais.click();
});
// 比较
bijiao_kais.addEventListener('click', function(e) {
    var bijiaonr1 = bijiao_1_input.value;
    var bijiaonr2 = bijiao_2_input.value;

    try {
        // 可能产生错误的代码
        if (bijiaonr1[0] == '[') {
            bijiaonr1 = JSON.parse(bijiaonr1);
        } else {
            bijiaonr1 = JSON.parse(WGS_zfc_jiemi(bijiaonr1, miyao));
        }

        if (bijiaonr2[0] == '[') {
            bijiaonr2 = JSON.parse(bijiaonr2);
        } else {
            bijiaonr2 = JSON.parse(WGS_zfc_jiemi(bijiaonr2, miyao));
        }
        console.log(bijiaonr1);
        console.log(bijiaonr2);
        if (bijiaonr1[19] == (bijiao_1_miyao_input.value == '' ? '' : S_ku_jiami(bijiao_1_miyao_input.value)) && bijiaonr2[19] == (bijiao_2_miyao_input.value == '' ? '' : S_ku_jiami(bijiao_2_miyao_input.value))) {
            // 基本信息显示
            if (bijiao_laiyuan1.innerText[bijiao_laiyuan1.innerText.length - 1] !== ']') {
                bijiao_laiyuan1.innerText = bijiao_laiyuan1.innerText + ' (' + bijiao_1_input.value.length + ') ' + '[' + bijiaonr1[bijiaonr1.length - 1] + ']';
            }
            if (bijiao_laiyuan2.innerText[bijiao_laiyuan2.innerText.length - 1] !== ']') {
                bijiao_laiyuan2.innerText = bijiao_laiyuan2.innerText + ' (' + bijiao_2_input.value.length + ') ' + '[' + bijiaonr2[bijiaonr2.length - 1] + ']';
            }

            // 时间走向
            if (duibi_zxian.innerText == '') {
                if (bijiaonr1[bijiaonr1.length - 1] > bijiaonr2[bijiaonr2.length - 1]) {
                    var bijiaonr3 = JSON.parse(JSON.stringify(bijiaonr1));
                    bijiaonr1 = JSON.parse(JSON.stringify(bijiaonr2));
                    bijiaonr2 = JSON.parse(JSON.stringify(bijiaonr3));

                    duibi_zxian.innerText = '↑↑↑↑';
                } else {
                    duibi_zxian.innerText = '↓↓↓↓';
                }
            } else if (duibi_zxian.innerText == '↑↑↑↑') {
                // 指定时间走向
                var bijiaonr3 = JSON.parse(JSON.stringify(bijiaonr1));
                bijiaonr1 = JSON.parse(JSON.stringify(bijiaonr2));
                bijiaonr2 = JSON.parse(JSON.stringify(bijiaonr3));
            }



            //清空
            duibixx_min.innerHTML = '';

            // 比较创建元素
            // 日程比较
            var bijiao_dsj1 = collectArrays(JSON.parse(bijiaonr1[18]));
            var bijiao_dsj2 = collectArrays(JSON.parse(bijiaonr2[18]));
            for (var i = 0; i < bijiao_dsj2.length; i++) {
                if (JSON.stringify(bijiao_dsj1).indexOf(JSON.stringify(bijiao_dsj2[i])) == -1) {
                    bijiao_cj('日程', '新增日程 "' + bijiao_dsj2[i][0] + '"', '名称: ' + bijiao_dsj2[i][0] + '\n时戳: ' + bijiao_dsj2[i][1] + '\n时间: ' + bijiao_dsj2[i][2] + (+new Date() > bijiao_dsj2[i][1] ? '\n状态: 当前时间|已过|该日程' : '\n状态: 当前时间|未到|该日程'));
                }
            }
            for (var i = 0; i < bijiao_dsj1.length; i++) {
                if (JSON.stringify(bijiao_dsj2).indexOf(JSON.stringify(bijiao_dsj1[i])) == -1) {
                    bijiao_cj('日程', '删除日程 "' + bijiao_dsj1[i][0] + '"', '名称: ' + bijiao_dsj1[i][0] + '\n时戳: ' + bijiao_dsj1[i][1] + '\n时间: ' + bijiao_dsj1[i][2] + (+new Date() > bijiao_dsj1[i][1] ? '\n状态: 当前时间|已过|该日程' : '\n状态: 当前时间|未到|该日程'));
                }
            }
            // 周程比较
            var bijiao_dsj1 = bijiaonr1[34];
            var bijiao_dsj2 = bijiaonr2[34];
            if (bijiao_dsj1 !== bijiao_dsj2) {
                bijiao_cj('周程', '修改周程 "' + bijiao_dsj1 + ' 改为 ' + bijiao_dsj2 + '"', bijiao_dsj1 + '\n\n改为\n\n' + bijiao_dsj2);
            }
            // 作品比较
            var bijiao_zpzs1 = JSON.parse(bijiaonr1[20]);
            var bijiao_zpzs2 = JSON.parse(bijiaonr2[20]);
            var bijiao_zpzs1_2 = JSON.parse(bijiaonr1[21]);
            var bijiao_zpzs2_2 = JSON.parse(bijiaonr2[21]);
            var bijiao_zpzs_hb1 = [];
            var bijiao_zpzs_hb2 = [];
            for (var i = 0; i < bijiao_zpzs1.length; i++) {
                var lssz = [];
                lssz[0] = bijiao_zpzs1_2[i];
                lssz[1] = bijiao_zpzs1[i];
                bijiao_zpzs_hb1.push(lssz);
            }
            for (var i = 0; i < bijiao_zpzs2.length; i++) {
                var lssz = [];
                lssz[0] = bijiao_zpzs2_2[i];
                lssz[1] = bijiao_zpzs2[i];
                bijiao_zpzs_hb2.push(lssz);
            }
            for (var i = 0; i < bijiao_zpzs_hb2.length; i++) {
                if (JSON.stringify(bijiao_zpzs_hb1).indexOf(JSON.stringify(bijiao_zpzs_hb2[i])) == -1) {
                    bijiao_cj('作品', '新增作品 "' + bijiao_zpzs2_2[i] + '"', '名称: ' + bijiao_zpzs2_2[i] + '\n地址: ' + bijiao_zpzs2[i]);
                }
            }
            for (var i = 0; i < bijiao_zpzs_hb1.length; i++) {
                if (JSON.stringify(bijiao_zpzs_hb2).indexOf(JSON.stringify(bijiao_zpzs_hb1[i])) == -1) {
                    bijiao_cj('作品', '删除作品 "' + bijiao_zpzs1_2[i] + '"', '名称: ' + bijiao_zpzs1_2[i] + '\n地址: ' + bijiao_zpzs1[i]);
                }
            }
            // 链接比较
            var bijiao_ljym1 = JSON.parse(bijiaonr1[0]);
            var bijiao_ljym2 = JSON.parse(bijiaonr2[0]);
            for (var i = 0; i < bijiao_ljym2.length; i++) {
                if (bijiao_ljym1.indexOf(bijiao_ljym2[i]) == -1) {
                    bijiao_cj('链接', '新增链接栏 "' + bijiao_ljym2[i] + '"', '名称:' + bijiao_ljym2[i]);
                }
            }
            for (var i = 0; i < bijiao_ljym1.length; i++) {
                if (bijiao_ljym2.indexOf(bijiao_ljym1[i]) == -1) {
                    bijiao_cj('链接', '删除链接栏 "' + bijiao_ljym1[i] + '"', '名称:' + bijiao_ljym1[i]);
                }
            }

            var dhr_ym_dx = JSON.parse(bijiaonr1[1]);
            var bijiao_lj1 = [];
            for (var i = 0; i < Object.keys(dhr_ym_dx).length; i++) {
                var dhr_ym_dx_s = dhr_ym_dx['dhr_ym_dx' + i]
                for (var o = 0; o < Object.keys(dhr_ym_dx_s).length; o++) {
                    if (dhr_ym_dx_s['dhr_ym_sz' + o][4]) {
                        var dhr_ym_dx_s_s = [];
                        dhr_ym_dx_s_s[0] = dhr_ym_dx_s['dhr_ym_sz' + o][0];
                        dhr_ym_dx_s_s[1] = dhr_ym_dx_s['dhr_ym_sz' + o][1];
                        dhr_ym_dx_s_s[2] = dhr_ym_dx_s['dhr_ym_sz' + o][2];
                        dhr_ym_dx_s_s[3] = dhr_ym_dx_s['dhr_ym_sz' + o][3];
                        dhr_ym_dx_s_s[4] = dhr_ym_dx_s['dhr_ym_sz' + o][4];
                        bijiao_lj1[bijiao_lj1.length] = dhr_ym_dx_s_s;
                    } else {
                        var dhr_ym_dx_s_s = [];
                        dhr_ym_dx_s_s[0] = dhr_ym_dx_s['dhr_ym_sz' + o][0];
                        dhr_ym_dx_s_s[1] = dhr_ym_dx_s['dhr_ym_sz' + o][1];
                        dhr_ym_dx_s_s[2] = dhr_ym_dx_s['dhr_ym_sz' + o][2];
                        dhr_ym_dx_s_s[3] = dhr_ym_dx_s['dhr_ym_sz' + o][3];
                        bijiao_lj1[bijiao_lj1.length] = dhr_ym_dx_s_s;
                    }
                }
            }
            var dhr_ym_dx = JSON.parse(bijiaonr2[1]);
            var bijiao_lj2 = [];
            for (var i = 0; i < Object.keys(dhr_ym_dx).length; i++) {
                var dhr_ym_dx_s = dhr_ym_dx['dhr_ym_dx' + i]
                for (var o = 0; o < Object.keys(dhr_ym_dx_s).length; o++) {
                    if (dhr_ym_dx_s['dhr_ym_sz' + o][4]) {
                        var dhr_ym_dx_s_s = [];
                        dhr_ym_dx_s_s[0] = dhr_ym_dx_s['dhr_ym_sz' + o][0];
                        dhr_ym_dx_s_s[1] = dhr_ym_dx_s['dhr_ym_sz' + o][1];
                        dhr_ym_dx_s_s[2] = dhr_ym_dx_s['dhr_ym_sz' + o][2];
                        dhr_ym_dx_s_s[3] = dhr_ym_dx_s['dhr_ym_sz' + o][3];
                        dhr_ym_dx_s_s[4] = dhr_ym_dx_s['dhr_ym_sz' + o][4];
                        bijiao_lj2[bijiao_lj2.length] = dhr_ym_dx_s_s;
                    } else {
                        var dhr_ym_dx_s_s = [];
                        dhr_ym_dx_s_s[0] = dhr_ym_dx_s['dhr_ym_sz' + o][0];
                        dhr_ym_dx_s_s[1] = dhr_ym_dx_s['dhr_ym_sz' + o][1];
                        dhr_ym_dx_s_s[2] = dhr_ym_dx_s['dhr_ym_sz' + o][2];
                        dhr_ym_dx_s_s[3] = dhr_ym_dx_s['dhr_ym_sz' + o][3];
                        bijiao_lj2[bijiao_lj2.length] = dhr_ym_dx_s_s;
                    }
                }
            }
            for (var i = 0; i < bijiao_lj2.length; i++) {
                if (JSON.stringify(bijiao_lj1).indexOf(JSON.stringify(bijiao_lj2[i])) == -1) {
                    bijiao_cj('链接', '新增链接 "' + bijiao_lj2[i][1] + '"', 'logo: ' + ((bijiao_lj2[i][0].startsWith("http") || bijiao_lj2[i][0].startsWith("data")) ? '<img src="' + bijiao_lj2[i][0] + '" style="height: 50px;" alt="">' : bijiao_lj2[i][0]) + '\n名称: ' + bijiao_lj2[i][1] + '\n备注: ' + bijiao_lj2[i][2] + '\n路径1: ' + bijiao_lj2[i][3] + '\n路径2: ' + (bijiao_lj2[i][4] == undefined ? '无' : bijiao_lj2[i][4]));
                }
            }
            for (var i = 0; i < bijiao_lj1.length; i++) {
                if (JSON.stringify(bijiao_lj2).indexOf(JSON.stringify(bijiao_lj1[i])) == -1) {
                    bijiao_cj('链接', '删除链接 "' + bijiao_lj1[i][1] + '"', 'logo: ' + ((bijiao_lj1[i][0].startsWith("http") || bijiao_lj1[i][0].startsWith("data")) ? '<img src="' + bijiao_lj1[i][0] + '" style="height: 50px;" alt="">' : bijiao_lj1[i][0]) + '\n名称: ' + bijiao_lj1[i][1] + '\n备注: ' + bijiao_lj1[i][2] + '\n路径1: ' + bijiao_lj1[i][3] + '\n路径2: ' + (bijiao_lj1[i][4] == undefined ? '无' : bijiao_lj1[i][4]));
                }
            }
            // 记录比较
            var bijiao_jl1 = collectArrays(JSON.parse(bijiaonr1[4]));
            var bijiao_jl2 = collectArrays(JSON.parse(bijiaonr2[4]));
            var bijiao_jl1_qcbj = bijiao_jl1.map(subArray => subArray.slice(0, -1));
            var bijiao_jl2_qcbj = bijiao_jl2.map(subArray => subArray.slice(0, -1));
            for (var i = 0; i < bijiao_jl2_qcbj.length; i++) {
                if (JSON.stringify(bijiao_jl1_qcbj).indexOf(JSON.stringify(bijiao_jl2_qcbj[i])) == -1) {
                    bijiao_cj('记录', '添加记录<xmp>"' + bijiao_jl2_qcbj[i][0] + '</xmp>"', '时间: ' + bijiao_jl2_qcbj[i][1] + '\n状态: ' + (bijiao_jl2[i][2] == 1 ? '标记' : '未标记') + '\n内容: 下方↓\n\n' + bijiao_jl2_qcbj[i][0]);
                }
            }
            for (var i = 0; i < bijiao_jl1_qcbj.length; i++) {
                if (JSON.stringify(bijiao_jl2_qcbj).indexOf(JSON.stringify(bijiao_jl1_qcbj[i])) == -1) {
                    bijiao_cj('记录', '删除记录<xmp>"' + bijiao_jl1_qcbj[i][0] + '</xmp>"', '时间: ' + bijiao_jl1_qcbj[i][1] + '\n状态: ' + (bijiao_jl1[i][2] == 1 ? '标记' : '未标记') + '\n内容: 下方↓\n\n' + bijiao_jl1_qcbj[i][0]);
                }
            }
            for (var i = 0; i < bijiao_jl2_qcbj.length; i++) {
                if (JSON.stringify(bijiao_jl1_qcbj).indexOf(JSON.stringify(bijiao_jl2_qcbj[i])) !== -1 && JSON.stringify(bijiao_jl1).indexOf(JSON.stringify(bijiao_jl2[i])) == -1) {
                    if (bijiao_jl2[i][2] == 1) {
                        bijiao_cj('记录', '确认标记<xmp>"' + bijiao_jl2_qcbj[i][0] + '"</xmp>', '时间: ' + bijiao_jl2_qcbj[i][1] + '\n状态: ' + (bijiao_jl2[i][2] == 1 ? '标记' : '未标记') + '\n内容: 下方↓\n\n' + bijiao_jl2_qcbj[i][0]);
                    } else {
                        bijiao_cj('记录', '取消标记<xmp>"' + bijiao_jl2_qcbj[i][0] + '"</xmp>', '时间: ' + bijiao_jl2_qcbj[i][1] + '\n状态: ' + (bijiao_jl2[i][2] == 1 ? '标记' : '未标记') + '\n内容: 下方↓\n\n' + bijiao_jl2_qcbj[i][0]);
                    }
                }
            }
            // 壁纸比较
            var bijiao_bz1 = JSON.parse(bijiaonr1[5]);
            var bijiao_bz2 = JSON.parse(bijiaonr2[5]);
            for (var i = 0; i < bijiao_bz2.length; i++) {
                if (bijiao_bz1.indexOf(bijiao_bz2[i]) == -1) {
                    bijiao_cj('壁纸', '添加壁纸<xmp>"' + bijiao_bz2[i] + '</xmp>"', '<img src="' + bijiao_bz2[i] + '"" alt="">');
                }
            }
            for (var i = 0; i < bijiao_bz1.length; i++) {
                if (bijiao_bz2.indexOf(bijiao_bz1[i]) == -1) {
                    bijiao_cj('壁纸', '删除壁纸<xmp>"' + bijiao_bz1[i] + '</xmp>"', '<img src="' + bijiao_bz1[i] + '"" alt="">');
                }
            }
            // 主题比较
            var bijiao_zt1 = JSON.parse(bijiaonr1[30]);
            var bijiao_zt2 = JSON.parse(bijiaonr2[30]);
            var bijiao_zt1_name = JSON.parse(bijiaonr1[31]);
            var bijiao_zt2_name = JSON.parse(bijiaonr2[31]);
            for (var i = 0; i < bijiao_zt2_name.length; i++) {
                if (bijiao_zt1_name.indexOf(bijiao_zt2_name[i]) == -1) {
                    bijiao_cj('主题', '添加主题<xmp>"' + bijiao_zt2_name[i] + '</xmp>"', '桌面壁纸: ' + (bijiao_zt2[i][1] == '' ? '无' : bijiao_zt2[i][1]) + '\n桌面颜色: ' + (bijiao_zt2[i][0] == '' ? '无' : bijiao_zt2[i][0]) + '\n字体颜色: ' + bijiao_zt2[i][2] + '\n重字体颜色: ' + bijiao_zt2[i][3] + '\n背景颜色: ' + bijiao_zt2[i][4] + '\n背景透明度: ' + bijiao_zt2[i][5] + '%\n背景框颜色: ' + bijiao_zt2[i][6] + '\n背景框透明度: ' + bijiao_zt2[i][7] + '%\n背景框状态: ' + (bijiao_zt2[i][8] == 1 ? '开启' : '关闭') + '\n毛玻璃深度: ' + bijiao_zt2[i][9] + ' px\n天气代码: ' + bijiao_zt2[i][10]);
                }
            }
            for (var i = 0; i < bijiao_zt1_name.length; i++) {
                if (bijiao_zt2_name.indexOf(bijiao_zt1_name[i]) == -1) {
                    bijiao_cj('主题', '删除主题<xmp>"' + bijiao_zt1_name[i] + '</xmp>"', '桌面壁纸: ' + (bijiao_zt1[i][1] == '' ? '无' : bijiao_zt1[i][1]) + '\n桌面颜色: ' + (bijiao_zt1[i][0] == '' ? '无' : bijiao_zt1[i][0]) + '\n字体颜色: ' + bijiao_zt1[i][2] + '\n重字体颜色: ' + bijiao_zt1[i][3] + '\n背景颜色: ' + bijiao_zt1[i][4] + '\n背景透明度: ' + bijiao_zt1[i][5] + '%\n背景框颜色: ' + bijiao_zt1[i][6] + '\n背景框透明度: ' + bijiao_zt1[i][7] + '%\n背景框状态: ' + (bijiao_zt1[i][8] == 1 ? '开启' : '关闭') + '\n毛玻璃深度: ' + bijiao_zt1[i][9] + ' px\n天气代码: ' + bijiao_zt1[i][10]);
                }
            }
            // 注册表比较
            var bijiao_zcb1 = [];
            var bijiao_zcb2 = [];
            var bijiao_zcb1_2 = JSON.parse(bijiaonr1[28]);
            var bijiao_zcb2_2 = JSON.parse(bijiaonr2[28]);
            for (var i = 0; i < bijiao_zcb1_2[0].length; i++) {
                var lsbl = [bijiao_zcb1_2[0][i], bijiao_zcb1_2[1][i]];
                bijiao_zcb1.push(lsbl);
            }
            for (var i = 0; i < bijiao_zcb2_2[0].length; i++) {
                var lsbl = [bijiao_zcb2_2[0][i], bijiao_zcb2_2[1][i]];
                bijiao_zcb2.push(lsbl);
            }
            for (var i = 0; i < bijiao_zcb2.length; i++) {
                if (JSON.stringify(bijiao_zcb1).indexOf(JSON.stringify(bijiao_zcb2[i])) == -1) {
                    bijiao_cj('注册表', '新增注册表 "' + bijiao_zcb2[i][0] + '"', '名称: ' + bijiao_zcb2[i][0] + '\n路径: ' + bijiao_zcb2[i][1]);
                }
            }
            for (var i = 0; i < bijiao_zcb1.length; i++) {
                if (JSON.stringify(bijiao_zcb2).indexOf(JSON.stringify(bijiao_zcb1[i])) == -1) {
                    bijiao_cj('注册表', '删除注册表 "' + bijiao_zcb1[i][0] + '"', '名称: ' + bijiao_zcb1[i][0] + '\n路径: ' + bijiao_zcb1[i][1]);
                }
            }
            // 历史搜索比较
            var bijiao_lsss1 = JSON.parse(bijiaonr1[25]);
            var bijiao_lsss2 = JSON.parse(bijiaonr2[25]);
            for (var i = 0; i < bijiao_lsss2.length; i++) {
                if (bijiao_lsss1.indexOf(bijiao_lsss2[i]) == -1) {
                    bijiao_cj('历史搜索', '添加搜索<xmp>"' + bijiao_lsss2[i] + '</xmp>"', bijiao_lsss2[i]);
                }
            }
            for (var i = 0; i < bijiao_lsss1.length; i++) {
                if (bijiao_lsss2.indexOf(bijiao_lsss1[i]) == -1) {
                    bijiao_cj('历史搜索', '删除搜索<xmp>"' + bijiao_lsss1[i] + '</xmp>"', bijiao_lsss1[i]);
                }
            }
            // 音乐比较
            var bijiao_yy1 = [];
            var bijiao_yy2 = [];
            var bijiao_yy1_2 = JSON.parse(bijiaonr1[22]);
            var bijiao_yy2_2 = JSON.parse(bijiaonr2[22]);
            for (var i = 0; i < bijiao_yy1_2[0].length; i++) {
                var lsbl = [bijiao_yy1_2[0][i], bijiao_yy1_2[1][i]];
                bijiao_yy1.push(lsbl);
            }
            for (var i = 0; i < bijiao_yy2_2[0].length; i++) {
                var lsbl = [bijiao_yy2_2[0][i], bijiao_yy2_2[1][i]];
                bijiao_yy2.push(lsbl);
            }
            for (var i = 0; i < bijiao_yy2.length; i++) {
                if (JSON.stringify(bijiao_yy1).indexOf(JSON.stringify(bijiao_yy2[i])) == -1) {
                    bijiao_cj('音乐', '新增音乐 "' + bijiao_yy2[i][0] + '"', '名称: ' + bijiao_yy2[i][0] + '\n路径: ' + bijiao_yy2[i][1]);
                }
            }
            for (var i = 0; i < bijiao_yy1.length; i++) {
                if (JSON.stringify(bijiao_yy2).indexOf(JSON.stringify(bijiao_yy1[i])) == -1) {
                    bijiao_cj('音乐', '删除音乐 "' + bijiao_yy1[i][0] + '"', '名称: ' + bijiao_yy1[i][0] + '\n路径: ' + bijiao_yy1[i][1]);
                }
            }
            var bijiao_yybfsx1 = JSON.parse(bijiaonr1[23]);
            var bijiao_yybfsx2 = JSON.parse(bijiaonr2[23]);
            if (bijiao_yybfsx1 !== bijiao_yybfsx2) {
                bijiao_cj('音乐', '修改音乐播放顺序 "' + (bijiao_yybfsx1 == 1 ? '顺序播放' : (bijiao_yybfsx1 == 2 ? '随机播放' : '单曲循环')) + ' 改为 ' + (bijiao_yybfsx2 == 1 ? '顺序播放' : (bijiao_yybfsx2 == 2 ? '随机播放' : '单曲循环')) + '"', (bijiao_yybfsx1 == 1 ? '顺序播放' : (bijiao_yybfsx1 == 2 ? '随机播放' : '单曲循环')) + ' 改为 ' + (bijiao_yybfsx2 == 1 ? '顺序播放' : (bijiao_yybfsx2 == 2 ? '随机播放' : '单曲循环')) + '\n代码 ' + bijiao_yybfsx1 + ' 改为 ' + bijiao_yybfsx2);
            }
            var bijiao_yysydx1 = JSON.parse(bijiaonr1[24]);
            var bijiao_yysydx2 = JSON.parse(bijiaonr2[24]);
            if (bijiao_yysydx1 !== bijiao_yysydx2) {
                bijiao_cj('音乐', '修改音乐声音 "' + (bijiao_yysydx1 * 100) + '% 改为 ' + (bijiao_yysydx2 * 100) + '%"', '修改音乐声音大小 ' + (bijiao_yysydx1 * 100) + '% 改为 ' + (bijiao_yysydx2 * 100) + '%');
            }
            // AI比较
            var bijiao_jl1 = JSON.parse(bijiaonr1[32]);
            var bijiao_jl2 = JSON.parse(bijiaonr2[32]);
            for (var i = 0; i < bijiao_jl2.length; i++) {
                if (JSON.stringify(bijiao_jl1).indexOf(JSON.stringify(bijiao_jl2[i])) == -1) {
                    bijiao_cj('AI', (bijiao_jl2[i][0] == 1 ? '新增问答' : '新增回答') + '<xmp>"' + bijiao_jl2[i][1] + '</xmp>"', '时间: ' + bijiao_jl2[i][2] + '\n对象: ' + (bijiao_jl2[i][0] == 1 ? '用户' : 'AI') + '\n内容: 下方↓' + '\n\n' + bijiao_jl2[i][1]);
                }
            }
            for (var i = 0; i < bijiao_jl1.length; i++) {
                if (JSON.stringify(bijiao_jl2).indexOf(JSON.stringify(bijiao_jl1[i])) == -1) {
                    bijiao_cj('AI', (bijiao_jl1[i][0] == 1 ? '删除问答' : '删除回答') + '<xmp>"' + bijiao_jl1[i][1] + '</xmp>"', '时间: ' + bijiao_jl1[i][2] + '\n对象: ' + (bijiao_jl1[i][0] == 1 ? '用户' : 'AI') + '\n内容: 下方↓' + '\n\n' + bijiao_jl1[i][1]);
                }
            }
            // AI快捷指令比较
            var bijiao_jl1 = JSON.parse(bijiaonr1[33]);
            var bijiao_jl2 = JSON.parse(bijiaonr2[33]);
            for (var i = 0; i < bijiao_jl2.length; i++) {
                if (bijiao_jl1.indexOf(bijiao_jl2[i]) == -1) {
                    bijiao_cj('AI', '新增快捷指令<xmp>"' + bijiao_jl2[i] + '</xmp>"', bijiao_jl2[i]);
                }
            }
            for (var i = 0; i < bijiao_jl1.length; i++) {
                if (bijiao_jl2.indexOf(bijiao_jl1[i]) == -1) {
                    bijiao_cj('AI', '删除快捷指令<xmp>"' + bijiao_jl1[i] + '</xmp>"', bijiao_jl1[i]);
                }
            }
            // 打卡比较
            var bijiao_jl1 = collectArrays(JSON.parse(bijiaonr1[39]));
            var bijiao_jl2 = collectArrays(JSON.parse(bijiaonr2[39]));
            let bijiao_jl1_sc56 = JSON.parse(JSON.stringify(bijiao_jl1));
            let bijiao_jl2_sc56 = JSON.parse(JSON.stringify(bijiao_jl2));
            bijiao_jl1_sc56 = bijiao_jl1_sc56.map(item => {
                if (Array.isArray(item)) {
                    item.splice(5, 2); // 从索引5开始删除2个元素
                }
                return item;
            });
            bijiao_jl2_sc56 = bijiao_jl2_sc56.map(item => {
                if (Array.isArray(item)) {
                    item.splice(5, 2); // 从索引5开始删除2个元素
                }
                return item;
            });
            for (var i = 0; i < bijiao_jl2_sc56.length; i++) {
                if (JSON.stringify(bijiao_jl1_sc56).indexOf(JSON.stringify(bijiao_jl2_sc56[i])) == -1) {
                    bijiao_cj('习惯', '新增习惯 "' + bijiao_jl2_sc56[i][1] + '"', ((bijiao_jl2_sc56[i][0].startsWith("http") || bijiao_jl2_sc56[i][0].startsWith("data")) ? '<img src="' + bijiao_jl2_sc56[i][0] + '" style="height: 100px;">' : bijiao_jl2_sc56[i][0]) + '\n名称: ' + bijiao_jl2_sc56[i][1] + '\n打卡频率: ' + bijiao_jl2_sc56[i][2] + '\n开始日期: ' + (new Date(bijiao_jl2_sc56[i][3]).getFullYear()) + '年' + (new Date(bijiao_jl2_sc56[i][3]).getMonth() + 1) + '月' + (new Date(bijiao_jl2_sc56[i][3]).getDate()) + '日' + '\n坚持天数: ' + bijiao_jl2_sc56[i][4] + '天');
                }
            }
            for (var i = 0; i < bijiao_jl1_sc56.length; i++) {
                if (JSON.stringify(bijiao_jl2_sc56).indexOf(JSON.stringify(bijiao_jl1_sc56[i])) == -1) {
                    bijiao_cj('习惯', '删除习惯 "' + bijiao_jl1_sc56[i][1] + '"', ((bijiao_jl1_sc56[i][0].startsWith("http") || bijiao_jl1_sc56[i][0].startsWith("data")) ? '<img src="' + bijiao_jl1_sc56[i][0] + '" style="height: 100px;">' : bijiao_jl1_sc56[i][0]) + '\n名称: ' + bijiao_jl1_sc56[i][1] + '\n打卡频率: ' + bijiao_jl1_sc56[i][2] + '\n开始日期: ' + (new Date(bijiao_jl1_sc56[i][3]).getFullYear()) + '年' + (new Date(bijiao_jl1_sc56[i][3]).getMonth() + 1) + '月' + (new Date(bijiao_jl1_sc56[i][3]).getDate()) + '日' + '\n坚持天数: ' + bijiao_jl1_sc56[i][4] + '天');
                }
            }
            for (var i = 0; i < bijiao_jl2_sc56.length; i++) {
                if (JSON.stringify(bijiao_jl1_sc56).indexOf(JSON.stringify(bijiao_jl2_sc56[i])) !== -1 && (bijiao_jl1[i][5].length !== bijiao_jl2[i][5].length || bijiao_jl1[i][6].length !== bijiao_jl2[i][6].length)) {
                    bijiao_cj('习惯', '更改习惯 "' + bijiao_jl1[i][1] + '"', '前打卡总数: ' + bijiao_jl1[i][5].length + ' 次' + '\n后打卡总数:' + bijiao_jl2[i][5].length + ' 次' + '\n\n前日志总数:' + bijiao_jl1[i][6].length + ' 次' + '\n后日志总数:' + bijiao_jl2[i][6].length + ' 次');
                }
            }
            // 个性化比较
            if (bijiaonr1[3] !== bijiaonr2[3]) { //头像
                bijiao_cj('个性化', '修改头像', (bijiaonr1[3] == '' ? '空' : '<img src="' + bijiaonr1[3] + '" style="height: 100px;">') + '\n\n改为\n\n' + (bijiaonr2[3] == '' ? '空' : '<img src="' + bijiaonr2[3] + '" style="height: 100px;">'));
            }
            if (bijiaonr1[6] !== bijiaonr2[6]) { //壁纸
                bijiao_cj('个性化', '修改壁纸', (bijiaonr1[6] == '' ? '空' : '<img src="' + bijiaonr1[6] + '" style="height: 100px;">') + '\n\n改为\n\n' + (bijiaonr2[6] == '' ? '空' : '<img src="' + bijiaonr2[6] + '" style="height: 100px;">'));
            }
            if (bijiaonr1[7] !== bijiaonr2[7]) { //天气
                bijiao_cj('个性化', '修改天气', (bijiaonr1[7] == 0 ? '晴天' : (bijiaonr1[7] == 1 ? '小雨' : (bijiaonr1[7] == 2 ? '大雨' : (bijiaonr1[7] == 3 ? '小雪' : '大雪')))) + ' 改为 ' + (bijiaonr2[7] == 0 ? '晴天' : (bijiaonr2[7] == 1 ? '小雨' : (bijiaonr2[7] == 2 ? '大雨' : (bijiaonr2[7] == 3 ? '小雪' : '大雪')))));
            }
            if (bijiaonr1[8] !== bijiaonr2[8]) { //字体颜色
                bijiao_cj('个性化', '修改字体颜色', bijiaonr1[8] + '\n' + '<div style="width: 50px;height: 50px;background-color:' + bijiaonr1[8] + ';"></div>' + '\n\n改为\n\n' + bijiaonr2[8] + '\n' + '<div style="width: 50px;height: 50px;background-color:' + bijiaonr2[8] + ';"></div>');
            }
            if (bijiaonr1[9] !== bijiaonr2[9]) { //重字体颜色
                bijiao_cj('个性化', '修改重字体颜色', bijiaonr1[9] + '\n' + '<div style="width: 50px;height: 50px;background-color:' + bijiaonr1[9] + ';"></div>' + '\n\n改为\n\n' + bijiaonr2[9] + '\n' + '<div style="width: 50px;height: 50px;background-color:' + bijiaonr2[9] + ';"></div>');
            }
            if (bijiaonr1[10] !== bijiaonr2[10]) { //背景颜色
                bijiao_cj('个性化', '修改背景颜色', bijiaonr1[10] + '\n' + '<div style="width: 50px;height: 50px;background-color:' + bijiaonr1[10] + ';"></div>' + '\n\n改为\n\n' + bijiaonr2[10] + '\n' + '<div style="width: 50px;height: 50px;background-color:' + bijiaonr2[10] + ';"></div>');
            }
            if (bijiaonr1[13] !== bijiaonr2[13]) { //背景框颜色
                bijiao_cj('个性化', '修改背景框颜色', bijiaonr1[13] + '\n' + '<div style="width: 50px;height: 50px;background-color:' + bijiaonr1[13] + ';"></div>' + '\n\n改为\n\n' + bijiaonr2[13] + '\n' + '<div style="width: 50px;height: 50px;background-color:' + bijiaonr2[13] + ';"></div>');
            }
            if (bijiaonr1[29] !== bijiaonr2[29]) { //壁纸颜色
                bijiao_cj('个性化', '修改壁纸颜色', (bijiaonr1[29] == '' ? '空' : (bijiaonr1[29] + '\n' + '<div style="width: 50px;height: 50px;background-color:' + bijiaonr1[29] + ';"></div>')) + '\n\n改为\n\n' + (bijiaonr2[29] == '' ? '空' : (bijiaonr2[29] + '\n' + '<div style="width: 50px;height: 50px;background-color:' + bijiaonr2[29] + ';"></div>')));
            }
            if (bijiaonr1[11] !== bijiaonr2[11]) { //背景透明度
                bijiao_cj('个性化', '修改背景透明度', (bijiaonr1[11] * 100) + '% 改为 ' + (bijiaonr2[11] * 100) + '%');
            }
            if (bijiaonr1[14] !== bijiaonr2[14]) { //背景框透明度
                bijiao_cj('个性化', '修改背景框透明度', (bijiaonr1[14] * 100) + '% 改为 ' + (bijiaonr2[14] * 100) + '%');
            }
            if (bijiaonr1[12] !== bijiaonr2[12]) { //背景框状态
                bijiao_cj('个性化', '修改背景框状态', (bijiaonr1[12] == 1 ? '打开' : '关闭') + ' 改为 ' + (bijiaonr2[12] == 1 ? '打开' : '关闭'));
            }
            if (bijiaonr1[15] !== bijiaonr2[15]) { //毛玻璃深度
                bijiao_cj('个性化', '修改毛玻璃深度', bijiaonr1[15] + 'px 改为 ' + bijiaonr2[15] + 'px');
            }
            // htsp比较
            var bijiao_htsp1 = JSON.parse(bijiaonr1[27]);
            var bijiao_htsp2 = JSON.parse(bijiaonr2[27]);
            for (var i = 0; i < bijiao_htsp2.length; i++) {
                if (bijiao_htsp1.indexOf(bijiao_htsp2[i]) == -1) {
                    bijiao_cj('HTSP', '新增HTSP "' + bijiao_htsp2[i] + '"', bijiao_htsp2[i]);
                }
            }
            for (var i = 0; i < bijiao_htsp1.length; i++) {
                if (bijiao_htsp2.indexOf(bijiao_htsp1[i]) == -1) {
                    bijiao_cj('HTSP', '删除HTSP "' + bijiao_htsp1[i] + '"', bijiao_htsp1[i]);
                }
            }
            // 其他比较
            if (bijiaonr1[19] !== bijiaonr2[19]) { //密码
                bijiao_cj('其他', '修改密码', (bijiaonr1[19] == '' ? '空' : bijiaonr1[19]) + '\n改为\n' + (bijiaonr2[19] == '' ? '空' : bijiaonr2[19]) + '\n\n解密后\n\n' + (bijiaonr1[19] == '' ? '空' : S_ku_jiemi(bijiaonr1[19])) + '\n改为\n' + (bijiaonr2[19] == '' ? '空' : S_ku_jiemi(bijiaonr2[19])));
            }
            if (bijiaonr1[2] !== bijiaonr2[2]) { //搜索引擎
                bijiao_cj('其他', '修改搜索引擎', bijiaonr1[2] + ' 改为 ' + bijiaonr2[2]);
            }
            if (bijiaonr1[26] !== bijiaonr2[26]) { //大厅展览
                bijiao_cj('其他', '修改大厅展览', (bijiaonr1[26] == 0 ? '解压雪球' : (bijiaonr1[26] == 1 ? '动态内容' : '空白流畅')) + ' 改为 ' + (bijiaonr2[26] == 0 ? '解压雪球' : (bijiaonr2[26] == 1 ? '动态内容' : '空白流畅')));
            }
            if (bijiaonr1[16] !== bijiaonr2[16]) { //自动备份
                bijiao_cj('其他', '修改自动备份状态', (bijiaonr1[16] == 1 ? '打开' : '关闭') + ' 改为 ' + (bijiaonr2[16] == 1 ? '打开' : '关闭'));
            }
            if (bijiaonr1[17] !== bijiaonr2[17]) { //使用次数 及 使用时长
                bijiao_cj('其他', '使用次数 及 使用时长', '前 ' + bijiaonr1[17] + '次 ' + formatTime(bijiaonr1[36]) + '\n后 ' + bijiaonr2[17] + '次 ' + formatTime(bijiaonr2[36]) + '\n\n相差 ' + (bijiaonr2[17] - bijiaonr1[17]) + '次 ' + formatTime(bijiaonr2[36] - bijiaonr1[36]));
            }



            // 创建元素函数
            function bijiao_cj(cj_max, cj_min, cj_xx) {
                // 检测是否已有最大盒子
                var duibixx_s_bt = document.querySelectorAll('.duibixx_s_bt');
                var duibixx_s_bt_value = [];
                for (var i = 0; i < duibixx_s_bt.length; i++) {
                    duibixx_s_bt_value.push(duibixx_s_bt[i].innerText);
                }

                if (duibixx_s_bt_value.length == 0 || duibixx_s_bt_value.indexOf(cj_max) == -1) { //没有创建一个
                    var div_1 = document.createElement('div');

                    div_1.className = 'duibixx_s';
                    div_1.innerHTML = '<div class="duibixx_s_bt">' + cj_max + '</div><div class="duibixx_s_sx">▼</div>';

                    duibixx_min.appendChild(div_1);

                    var duibixx_s_bt = document.querySelectorAll('.duibixx_s_bt');
                    var duibixx_s_bt_value = [];
                    for (var i = 0; i < duibixx_s_bt.length; i++) {
                        duibixx_s_bt_value.push(duibixx_s_bt[i].innerText);
                    }

                    for (var i = 0; i < duibixx_s_bt_value.length; i++) {
                        if (duibixx_s_bt_value[i] == cj_max) {
                            var div_1 = document.createElement('div');

                            div_1.className = 'duibixx_s_xx';
                            div_1.innerHTML = '<div class="duibixx_s_xx_bt">' + cj_min + '</div><div class="duibixx_s_xxx">' + cj_xx + '</div>';

                            duibixx_s_bt[i].parentNode.appendChild(div_1);
                        }
                    }
                } else { //有就追加内容
                    var duibixx_s_bt = document.querySelectorAll('.duibixx_s_bt');
                    var duibixx_s_bt_value = [];
                    for (var i = 0; i < duibixx_s_bt.length; i++) {
                        duibixx_s_bt_value.push(duibixx_s_bt[i].innerText);
                    }
                    for (var i = 0; i < duibixx_s_bt_value.length; i++) {
                        if (duibixx_s_bt_value[i] == cj_max) {
                            var div_1 = document.createElement('div');

                            div_1.className = 'duibixx_s_xx';
                            div_1.innerHTML = '<div class="duibixx_s_xx_bt">' + cj_min + '</div><div class="duibixx_s_xxx">' + cj_xx + '</div>';

                            duibixx_s_bt[i].parentNode.appendChild(div_1);
                        }
                    }
                }
            }


            // 创建点击事件
            var duibixx_s_bt = document.querySelectorAll('.duibixx_s_bt');
            var duibixx_s_xx = document.querySelectorAll('.duibixx_s_xx');

            for (var i = 0; i < duibixx_s_bt.length; i++) {
                duibixx_s_bt[i].addEventListener('click', function(e) {
                    if (this.nextElementSibling.innerText == '▼') {
                        this.nextElementSibling.innerText = '▲'
                        this.parentNode.style.height = this.parentNode.scrollHeight + 'px';

                    } else if (this.nextElementSibling.innerText == '▲') {
                        this.nextElementSibling.innerText = '▼';
                        this.parentNode.style.height = this.parentNode.scrollHeight + 'px';
                        var this_s = this;
                        setTimeout(function() {
                            this_s.parentNode.style.height = '50px';
                        })
                    }
                });
            }

            for (var i = 0; i < duibixx_s_xx.length; i++) {
                duibixx_s_xx[i].addEventListener('click', function(e) {
                    if (this.offsetHeight == '30') {
                        this.style.height = this.scrollHeight + 'px';
                        this.parentNode.style.height = 'auto';
                    } else if (this.offsetHeight !== '30') {
                        this.style.height = '30px';
                        this.parentNode.style.height = 'auto';
                    }
                });
            }

        } else {
            Sku_tctx('密钥错误 ! 请重新填写');
        }

    } catch (error) {
        // 这个块会在 try 中有错误抛出时执行
        Sku_tctx('格式错误 ! 不符合的导入模块');
    }

});






// 历史搜索记录
var shezhi_ssjl = document.querySelector('.shezhi_ssjl');
var shezhi_ssjl_ym = document.querySelector('.shezhi_ssjl_ym');
var ssjl_min = document.querySelector('.ssjl_min');
var ssbqym_max = document.querySelector('.ssbqym_max');
var ssjl_max = document.querySelector('.ssjl_max');
var bizhi_gundon4 = document.querySelector('.bizhi_gundon4');
shezhi_ssjl.addEventListener('click', function(e) {
    shezhi_min.style.display = 'none';
    shezhi_ssjl_ym.style.display = 'block'; //设置页面打开
    bizhi_gundon4.innerHTML = '↓';
    ssjl_max.scroll(0, 0);
});
// 设置页面输出历史记录
function ssjl_shuchu() {
    ssjl_min.innerHTML = '';
    var ssjl_s = JSON.parse(localStorage.lsjl);
    for (var i = 0; i < ssjl_s.length; i++) {
        var div = document.createElement('div');
        div.className = 'ssjl_s';
        div.innerText = ssjl_s[i];
        // 添加左击搜索
        div.addEventListener('click', function(e) {
            so_ssk.value = this.innerText;
            so_anniu.click();
        });
        // 添加右击删除
        div.addEventListener('contextmenu', function(e) {
            // 删除html
            ssjl_min.removeChild(this);
            // 删除内存
            var lsjl = JSON.parse(localStorage.lsjl);
            lsjl.splice(lsjl.indexOf(this.innerText), 1);
            localStorage.lsjl = JSON.stringify(lsjl);
        });
        ssjl_min.appendChild(div);
    }
}
ssjl_shuchu();
// 删除搜索记录
i_ssjl_sc_tb = document.querySelector('.i_ssjl_sc_tb');
i_ssjl_sc_tb.addEventListener('click', function(e) {
    var lsjl = []
    localStorage.lsjl = JSON.stringify(lsjl);
    ssjl_shuchu();
});
// 匹配补全
var ssbqym_min = document.querySelector('.ssbqym_min');
var so_ssk = document.querySelector('.so_ssk');
var so_yq_s = document.querySelector('.so_yq_s');
so_ssk.addEventListener('click', function(e) {
    e.stopPropagation();
});
ssbqym.addEventListener('click', function(e) {
    e.stopPropagation();
});


so_ssk.addEventListener('input', function(e) {
    if (so_ssk.value !== '') {
        var mrrd = JSON.parse(localStorage.mrrd);
        var lsjl2_qjbl = [];
        var lsjl2 = JSON.parse(localStorage.lsjl);
        for (var i = 0; i < mrrd.length; i++) {
            if (lsjl2.indexOf(mrrd[i]) == -1) {
                lsjl2_qjbl.push(mrrd[i]);
            }
        }

        var lsjl = lsjl2.concat(lsjl2_qjbl);

        var ssjl_zuih = 0;
        var qrgs = 0;
        lsjl_jp_dys = -1;
        // 清除原有
        ssbqym_min.innerHTML = '';
        // 匹配添加
        for (var i = 0; i < lsjl.length; i++) {
            if (containsAllChars(so_ssk.value, lsjl[i]) && lsjl[i] !== so_ssk.value) {
                if (i > lsjl2.length - 1 && ssjl_zuih == 0) {
                    ssjl_zuih = 1;
                    var syjl = document.querySelectorAll('.ssbq_s');
                    if (syjl.length !== 0) {
                        syjl[syjl.length - 1].style.borderBottom = '2px dashed';
                    }
                }

                qrgs++;
                var div = document.createElement('div');
                div.className = 'ssbq_s';
                div.innerText = lsjl[i];
                div.addEventListener('click', function(e) {
                    so_ssk.value = this.innerText;
                    so_anniu.click();
                });
                div.addEventListener('contextmenu', function(e) {
                    e.stopPropagation();
                    e.preventDefault();
                    so_ssk.value = this.innerText;
                });
                div.style.borderBottom = '1px solid';

                ssbqym_min.appendChild(div);
            }

            if (qrgs == 100) { break; }
        }
        // 显示页面
        if (qrgs == 0) {
            ssbqym.style.display = 'none';
        } else {
            ssbqym.style.display = 'block';
            // 显示最上面
            ssbqym_max.scroll(0, 0);

            WGS_wenbengundon11('.ssbq_s', 9);
        }

        // 关键词搜索
        ss_gjcss(so_ssk.value);
    } else {
        var mrrd = JSON.parse(localStorage.mrrd);
        var lsjl2_qjbl = [];
        var lsjl2_qjbl2 = JSON.parse(localStorage.lsjl);
        for (var i = 0; i < lsjl2_qjbl2.length; i++) {
            if (mrrd.indexOf(lsjl2_qjbl2[i]) == -1) {
                lsjl2_qjbl.push(lsjl2_qjbl2[i]);
            }
        }

        var lsjl = mrrd.slice(0, 49).concat(lsjl2_qjbl);

        var qrgs = 0;
        lsjl_jp_dys = -1;
        // 清除原有
        ssbqym_min.innerHTML = '';
        // 添加所有
        for (var i = 0; i < lsjl.length; i++) {
            qrgs++;
            var div = document.createElement('div');
            div.className = 'ssbq_s';
            div.innerText = lsjl[i];
            div.addEventListener('click', function(e) {
                so_ssk.value = this.innerText;
                so_anniu.click();
            });
            div.addEventListener('contextmenu', function(e) {
                e.stopPropagation();
                e.preventDefault();
                so_ssk.value = this.innerText;
            });

            if (i == (mrrd.length >= 50 ? 48 : mrrd.length - 1)) {
                div.style.borderBottom = '2px dashed';
            } else {
                div.style.borderBottom = '1px solid';
            }

            ssbqym_min.appendChild(div);

            if (qrgs == 100) { break; }
        }
        // 显示页面
        if (qrgs == 0) {
            ssbqym.style.display = 'none';
        } else {
            ssbqym.style.display = 'block';
            // 显示最上面
            ssbqym_max.scroll(0, 0);

            WGS_wenbengundon11('.ssbq_s', 9);
        }
    }
});
so_ssk.addEventListener('focus', function(e) {
    if (so_ssk.value !== '') {
        var mrrd = JSON.parse(localStorage.mrrd);
        var lsjl2_qjbl = [];
        var lsjl2 = JSON.parse(localStorage.lsjl);
        for (var i = 0; i < mrrd.length; i++) {
            if (lsjl2.indexOf(mrrd[i]) == -1) {
                lsjl2_qjbl.push(mrrd[i]);
            }
        }

        var lsjl = lsjl2.concat(lsjl2_qjbl);

        var ssjl_zuih = 0;
        var qrgs = 0;
        lsjl_jp_dys = -1;
        // 清除原有
        ssbqym_min.innerHTML = '';
        // 匹配添加
        for (var i = 0; i < lsjl.length; i++) {
            if (containsAllChars(so_ssk.value, lsjl[i]) && lsjl[i] !== so_ssk.value) {
                if (i > lsjl2.length - 1 && ssjl_zuih == 0) {
                    ssjl_zuih = 1;
                    var syjl = document.querySelectorAll('.ssbq_s');
                    if (syjl.length !== 0) {
                        syjl[syjl.length - 1].style.borderBottom = '2px dashed';
                    }
                }

                qrgs++;
                var div = document.createElement('div');
                div.className = 'ssbq_s';
                div.innerText = lsjl[i];
                div.addEventListener('click', function(e) {
                    so_ssk.value = this.innerText;
                    so_anniu.click();
                });
                div.addEventListener('contextmenu', function(e) {
                    e.stopPropagation();
                    e.preventDefault();
                    so_ssk.value = this.innerText;
                });
                div.style.borderBottom = '1px solid';

                ssbqym_min.appendChild(div);
            }

            if (qrgs == 100) { break; }
        }
        // 显示页面
        if (qrgs == 0) {
            ssbqym.style.display = 'none';
        } else {
            ssbqym.style.display = 'block';
            // 显示最上面
            ssbqym_max.scroll(0, 0);

            WGS_wenbengundon11('.ssbq_s', 9);
        }

        // 关键词搜索
        ss_gjcss(so_ssk.value);
    } else {
        var mrrd = JSON.parse(localStorage.mrrd);
        var lsjl2_qjbl = [];
        var lsjl2_qjbl2 = JSON.parse(localStorage.lsjl);
        for (var i = 0; i < lsjl2_qjbl2.length; i++) {
            if (mrrd.indexOf(lsjl2_qjbl2[i]) == -1) {
                lsjl2_qjbl.push(lsjl2_qjbl2[i]);
            }
        }

        var lsjl = mrrd.slice(0, 49).concat(lsjl2_qjbl);

        var qrgs = 0;
        lsjl_jp_dys = -1;
        // 清除原有
        ssbqym_min.innerHTML = '';
        // 添加所有
        for (var i = 0; i < lsjl.length; i++) {
            qrgs++;
            var div = document.createElement('div');
            div.className = 'ssbq_s';
            div.innerText = lsjl[i];
            div.addEventListener('click', function(e) {
                so_ssk.value = this.innerText;
                so_anniu.click();
            });
            div.addEventListener('contextmenu', function(e) {
                e.stopPropagation();
                e.preventDefault();
                so_ssk.value = this.innerText;
            });

            if (i == (mrrd.length >= 50 ? 48 : mrrd.length - 1)) {
                div.style.borderBottom = '2px dashed';
            } else {
                div.style.borderBottom = '1px solid';
            }

            ssbqym_min.appendChild(div);

            if (qrgs == 100) { break; }
        }
        // 显示页面
        if (qrgs == 0) {
            ssbqym.style.display = 'none';
        } else {
            so_yq_s.style.display = 'none';
            ssbqym.style.display = 'block';
            // 显示最上面
            ssbqym_max.scroll(0, 0);

            WGS_wenbengundon11('.ssbq_s', 9);
        }
    }
});
// 上下选择补全
document.addEventListener('keydown', function(e) {
    if (ssbqym.style.display == 'block') {
        var ssbq_s = document.querySelectorAll('.ssbq_s');
        if (e.key == 'ArrowDown') {
            if (lsjl_jp_dys == -1 || lsjl_jp_dys == ssbq_s.length - 1) {
                lsjl_jp_dys = 0;
            } else {
                lsjl_jp_dys++;
            }
            // 自动带入输入框
            so_ssk.value = ssbq_s[lsjl_jp_dys].innerText;
            // so_ssk.selectionEnd = so_ssk.value.length;
            // 去除高亮
            for (var i = 0; i < ssbq_s.length; i++) {
                ssbq_s[i].style.backgroundColor = '';
                ssbq_s[i].style.color = '';
            }
            // 当前高亮
            ssbq_s[lsjl_jp_dys].style.backgroundColor = RGB_zhq(localStorage.zi_ti_click_color, 0.15);
            ssbq_s[lsjl_jp_dys].style.color = RGB_zhq(localStorage.zi_ti_click_color);
            // 阻挡时滚动
            if ((lsjl_jp_dys + 1) * 40 > ssbqym_max.scrollTop + ssbqym_max.clientHeight) {
                ssbqym_max.scrollTop = ((lsjl_jp_dys + 1) * 40) - ssbqym_max.clientHeight;
            } else if (lsjl_jp_dys * 40 < ssbqym_max.scrollTop) {
                ssbqym_max.scrollTop = lsjl_jp_dys * 40;
            }
        }
        if (e.key == 'ArrowUp') {
            if (lsjl_jp_dys == -1 || lsjl_jp_dys == 0) {
                lsjl_jp_dys = ssbq_s.length - 1;
            } else {
                lsjl_jp_dys--;
            }
            // 自动带入输入框
            so_ssk.value = ssbq_s[lsjl_jp_dys].innerText;
            // 消除自动上键光标靠左，实际靠右
            setTimeout(function() {
                so_ssk.setSelectionRange(so_ssk.value.length, so_ssk.value.length);
            });
            // 去除高亮
            for (var i = 0; i < ssbq_s.length; i++) {
                ssbq_s[i].style.backgroundColor = '';
                ssbq_s[i].style.color = '';
            }
            // 当前高亮
            ssbq_s[lsjl_jp_dys].style.backgroundColor = RGB_zhq(localStorage.zi_ti_click_color, 0.15);
            ssbq_s[lsjl_jp_dys].style.color = RGB_zhq(localStorage.zi_ti_click_color);
            // 阻挡时滚动
            if ((lsjl_jp_dys + 1) * 40 > ssbqym_max.scrollTop + ssbqym_max.clientHeight) {
                ssbqym_max.scrollTop = ((lsjl_jp_dys + 1) * 40) - ssbqym_max.clientHeight;
            } else if (lsjl_jp_dys * 40 < ssbqym_max.scrollTop) {
                ssbqym_max.scrollTop = lsjl_jp_dys * 40;
            }
        }
    }
});



// 首页内容选择
var sy_lbt = document.querySelector('.sy_lbt');
var shezhi_synr_ym = document.querySelector('.shezhi_synr_ym');
var shezhi_synr = document.querySelector('.shezhi_synr');
var sy_3d_kaiguan = document.querySelector('.sy_3d_kaiguan');
shezhi_synr.addEventListener('click', function(e) {
    shezhi_min.style.display = 'none';
    shezhi_synr_ym.style.display = 'block';
});
var sy_nr_xz1 = document.querySelector('.sy_nr_xz1');
var sy_nr_xz2 = document.querySelector('.sy_nr_xz2');
var sy_nr_xz3 = document.querySelector('.sy_nr_xz3');
var sy_nr_xz4 = document.querySelector('.sy_nr_xz4');
sy_nr_xz1.addEventListener('click', function(e) {
    sy_lbt.innerHTML = '';
    clearInterval(sy_lbnr_dsq);
    localStorage.sy_lbxz = 0;
    sy_3d_kaiguan.style.display = 'none';
    Sku_tctx('更换成功 ! 可以尝试戳一戳小球 -( ° ▽、° )');
});
sy_nr_xz2.addEventListener('click', function(e) {
    sy_lbt.innerHTML = '';
    clearInterval(sy_lbnr_dsq);
    localStorage.sy_lbxz = 1;
    sy_3d_kaiguan.style.display = 'block';
    Sku_tctx('更换成功 ! 内容过少可能会出现大量重复内容 ╮(╯-╰)╭');
});
sy_nr_xz3.addEventListener('click', function(e) {
    sy_lbt.innerHTML = '';
    clearInterval(sy_lbnr_dsq);
    localStorage.sy_lbxz = 2;
    sy_3d_kaiguan.style.display = 'none';
    Sku_tctx('更换成功 ! 我的电脑只配空白 (;´༎ຶД༎ຶ`)');
});
sy_nr_xz4.addEventListener('click', function(e) {
    Sku_tctx('不久将与世人见面 (ง •_•)ง');
});

// 轮播内容定时器 全局变量
sy_lbnr_dsq = undefined;
// 定时器设置 全局变量
sy_lbt_sc_jsq = undefined;
sy_lbt_sc_jsq2 = undefined;
// 固定位置数
var sjnr_wz_shu = [0, 0, 0, 0, 0];

function sy_lbnr_hs() {
    if (localStorage.sy_lbxz == 0) {
        // 球球
        var sy_lbt = document.querySelector('.sy_lbt');
        var yqdx_w = 30;

        function sjs3(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        sy_lbnr_dsq = setInterval(function() {
            var nrmaxs0 = document.querySelector('.nrmaxs0');
            if (nrmaxs0 && nrmaxs0.style.display == 'block') {
                wz_x = sjs3(0, (1100 - yqdx_w));
                var div = document.createElement('div');
                div.className = 'sy_lbt_qp';
                div.style.backgroundColor = RGB_zhq(localStorage.zi_ti_color);
                div.style.boxShadow = '0 0 20px ' + RGB_zhq(localStorage.zi_ti_color);
                div.style.left = wz_x + 'px';
                div.style.top = 523 + yqdx_w + 'px';
                div.style.width = yqdx_w + 'px';
                div.style.height = yqdx_w + 'px';
                div.style.opacity = sjs3(50, 100) / 100;
                sy_lbt.appendChild(div);

                var sy_lbt_qp = document.querySelectorAll('.sy_lbt_qp');
                sy_lbt_qp[sy_lbt_qp.length - 1].addEventListener('click', function(e) {
                    this.style.opacity = 0;
                    this.style.transform = 'scale(1.5)';
                });
            }
        }, 1000);

        // 消除球球
        sy_lbt_sc_jsq2 = setTimeout(function() {
            sy_lbt_sc_jsq = setInterval(function() {
                var sy_lbt_qp = document.querySelectorAll('.sy_lbt_qp');
                var sy_lbt = document.querySelector('.sy_lbt');
                if (sy_lbt && sy_lbt_qp.length !== 0) { sy_lbt.removeChild(sy_lbt_qp[0]); }
            }, 1000);
        }, 5000);
    } else if (localStorage.sy_lbxz == 1) {
        // 输出框架
        for (var i = 0; i < 5; i++) {
            var sy_lbt = document.querySelector('.sy_lbt');
            var div = document.createElement('div');
            div.className = 'lbnr_max';
            sy_lbt.appendChild(div);
        }
        // 随机函数
        function sjs4(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        // 直接输出
        var lbnr_max = document.querySelectorAll('.lbnr_max');
        // 固定位置数
        sjnr_wz_shu = [0, 0, 0, 0, 0];

        function sjnr_shuchu(gs) {
            // 1日程2作品3链接4未标记5设置6音乐7热点8周志9习惯
            var sj_nr_bl = [1, 2, 3, 3, 3, 4, 5, 6, 7, 7, 7, 8];

            // sz_zdsc(数组, 要删除的字符(不是索引号), 如果要替换成)
            function sz_zdsc(sz_s, sz_sc_zhi, sz_tj_zhi) {
                if (sz_sc_zhi && sz_s.indexOf(sz_sc_zhi) !== -1 && sz_tj_zhi) {
                    sz_s.splice(sz_s.indexOf(sz_sc_zhi), 2, sz_tj_zhi);
                } else if (sz_sc_zhi && sz_s.indexOf(sz_sc_zhi) !== -1) {
                    sz_s.splice(sz_s.indexOf(sz_sc_zhi), 1);
                }
            }

            function sj_nr_bl_schs(asd, num) { // 检测是否有元素,没有删除
                var sz = JSON.parse(localStorage[`${asd}`]);
                // 设置个数
                var count = 0;
                // 获取个数
                for (var key in sz) {
                    if (sz.hasOwnProperty(key)) { // 确保属性是对象自身的属性，而不是原型链上的
                        count++;
                    }
                }
                if (count == 0) { sz_zdsc(sj_nr_bl, num); }
            }
            // 检测习惯
            var da_ka = JSON.parse(localStorage.da_ka);
            da_ka.length == 0 ? sz_zdsc(sj_nr_bl, 9) : undefined;
            // 检测周志
            var sy_ke_biao_l_s2 = document.querySelectorAll('.sy_ke_biao_l_s2');
            var allEmpty = true;
            for (var i = 1; i < sy_ke_biao_l_s2.length; i++) {
                if (sy_ke_biao_l_s2[i].value && sy_ke_biao_l_s2[i].value.trim() !== '') {
                    allEmpty = false;
                    break;
                }
            }
            if (allEmpty) {
                sz_zdsc(sj_nr_bl, 8);
            }
            // 检测倒计时
            sj_nr_bl_schs('sy_djs', 1);
            // 检测作品
            sj_nr_bl_schs('sy_zpzs_lj', 2);
            // 检测链接
            var dhr_ym_dx = JSON.parse(localStorage.dhr_ym_dx);
            var dhr_ym_dx_zzgs = 0;
            var count6 = 0;
            for (var key in dhr_ym_dx) {
                if (dhr_ym_dx.hasOwnProperty(key)) { // 确保属性是对象自身的属性，而不是原型链上的
                    count6++;
                }
            }
            for (var i = 0; i < count6; i++) {
                var dhr_ym_dxs = dhr_ym_dx['dhr_ym_dx' + i];
                var count7 = 0;
                for (var key in dhr_ym_dxs) {
                    if (dhr_ym_dxs.hasOwnProperty(key)) { // 确保属性是对象自身的属性，而不是原型链上的
                        count7++;
                    }
                }
                if (count7 !== 0) {
                    dhr_ym_dx_zzgs++;
                }
            }
            if (dhr_ym_dx_zzgs == 0) {
                sz_zdsc(sj_nr_bl, 3);
                sz_zdsc(sj_nr_bl, 3);
                sz_zdsc(sj_nr_bl, 3);
            }
            // 检测记录
            var liu_yan_dx = JSON.parse(localStorage.liu_yan_dx);
            var count8 = 0;
            var liu_yan_dx_wbj = 0;
            for (var key in liu_yan_dx) {
                if (liu_yan_dx.hasOwnProperty(key)) { // 确保属性是对象自身的属性，而不是原型链上的
                    count8++;
                }
            }
            for (var i = 0; i < count8; i++) {
                if (liu_yan_dx['liu_yan_sz' + i][2] == 2) {
                    liu_yan_dx_wbj++;
                }
            }
            if (liu_yan_dx_wbj == 0) {
                sz_zdsc(sj_nr_bl, 4);
            }
            // 检测音乐
            var music_cd = JSON.parse(localStorage.music_cd);
            if (music_cd[0].length == 0) {
                sz_zdsc(sj_nr_bl, 6);
            }
            // 检测每日热点
            var mrrd = JSON.parse(localStorage.mrrd);
            if (mrrd.length < 10) {
                sz_zdsc(sj_nr_bl, 7);
                sz_zdsc(sj_nr_bl, 7);
                sz_zdsc(sj_nr_bl, 7);
            }





            for (var i = 0; i < 5; i++) {
                // 大于10不输出
                var sjnr_min_gs = document.querySelectorAll('.lbnr_max')[i].querySelectorAll('.lbnr_min').length;
                if (sjnr_min_gs > 10) {
                    continue;
                }
                // 小于10开始输出
                for (var t = 0; t < gs; t++) {
                    var sknr_sjs = sj_nr_bl[sjs4(0, sj_nr_bl.length - 1)];
                    if (sknr_sjs == 1) { //倒计时
                        var div = document.createElement('div');
                        div.className = 'lbnr_min';

                        div.addEventListener('click', function(e) {
                            sy_dw_richen.click();
                        });
                        // 获取倒计时内存
                        var sy_djs = JSON.parse(localStorage.sy_djs);
                        // 设置个数
                        var count = 0;
                        // 获取个数
                        for (var key in sy_djs) {
                            if (sy_djs.hasOwnProperty(key)) { // 确保属性是对象自身的属性，而不是原型链上的
                                count++;
                            }
                        }
                        var sknr_sjs2 = sjs4(0, count - 1);
                        // 内容编程
                        function countDown(time) {
                            var nowTime = +new Date();
                            var inputTime = +new Date(time);
                            var times = (inputTime - nowTime) / 1000;
                            var d = parseInt(times / 60 / 60 / 24);
                            d = d < 10 ? '0' + d : d;
                            var h = parseInt(times / 60 / 60 % 24);
                            h = h < 10 ? '0' + h : h;
                            var m = parseInt(times / 60 % 60);
                            m = m < 10 ? '0' + m : m;
                            var s = parseInt(times % 60);
                            s = s < 10 ? '0' + s : s;
                            if (times / 60 / 60 > 24) {
                                var time_ab = time.split(' ');
                                var sytians = parseInt((+new Date(time_ab[0] + ' 00:00:00') - +new Date()) / 1000 / 60 / 60 / 24) + 1;
                                if (sytians == 1) {
                                    return '就在明天';
                                } else if (sytians == 2) {
                                    return '就在后天';
                                } else if (sytians == 3) {
                                    return '就在大后天';
                                } else {
                                    return '再过 ' + sytians + ' 天后';
                                }
                                // return (h + d * 24) + ':' + m + ':' + s;
                            } else if (times < 0) {
                                return '日期已过,请注意时间!';
                            } else {
                                return '还剩:' + h + '时' + m + '分' + s + '秒';
                            }
                        }

                        div.innerHTML = '<div class="lbnr_djs">' + sy_djs['sy_djs' + sknr_sjs2][0] + '</div><div class="lbnr_djs2">' + countDown(sy_djs['sy_djs' + sknr_sjs2][2]) + '</div>';
                        lbnr_max[i].appendChild(div);
                        // 固定位置
                        div.style.left = sjnr_wz_shu[i] + 'px';
                        sjnr_wz_shu[i] += div.offsetWidth + 12;
                    } else if (sknr_sjs == 2) { //作品
                        var div = document.createElement('div');
                        div.className = 'lbnr_min';

                        function decodeUriComponent(str) {
                            return decodeURIComponent(str).replace(/%u([0-9a-f]{4})/gi, function(match, p1) {
                                return String.fromCharCode(parseInt(p1, 16));
                            });
                        }
                        var sy_zpzs_mz = JSON.parse(localStorage.sy_zpzs_mz);
                        var sy_zpzs_lj = JSON.parse(localStorage.sy_zpzs_lj);
                        var sknr_sjs2 = sjs4(0, sy_zpzs_mz.length - 1);
                        div.addEventListener('click', function(e) {
                            window.open(this.querySelector('.lbnr_zp2').innerText.substring(3, 1000));
                        });

                        div.innerHTML = ' <div class="lbnr_zp">个人作品:' + sy_zpzs_mz[sknr_sjs2] + '</div><div class="lbnr_zp2">地址 ' + decodeUriComponent(sy_zpzs_lj[sknr_sjs2]) + '</div>';
                        lbnr_max[i].appendChild(div);
                        // 固定位置
                        div.style.left = sjnr_wz_shu[i] + 'px';
                        sjnr_wz_shu[i] += div.offsetWidth + 12;
                    } else if (sknr_sjs == 3) { //链接
                        var div = document.createElement('div');
                        div.className = 'lbnr_min';

                        var dhr_ym_dx = JSON.parse(localStorage.dhr_ym_dx);
                        // 设置个数
                        var count2 = 0;
                        // 获取个数
                        for (var key in dhr_ym_dx) {
                            if (dhr_ym_dx.hasOwnProperty(key)) { // 确保属性是对象自身的属性，而不是原型链上的
                                count2++;
                            }
                        }
                        var sknr_sjs2 = sjs4(0, count2 - 1);
                        var dhr_ym_dx2 = dhr_ym_dx['dhr_ym_dx' + sknr_sjs2];
                        // 设置个数
                        var count3 = 0;
                        // 获取个数
                        for (var key in dhr_ym_dx2) {
                            if (dhr_ym_dx2.hasOwnProperty(key)) { // 确保属性是对象自身的属性，而不是原型链上的
                                count3++;
                            }
                        }

                        // 如果是空重新随机
                        while (count3 == 0) {
                            var sknr_sjs2 = sjs4(0, count2 - 1);
                            var dhr_ym_dx2 = dhr_ym_dx['dhr_ym_dx' + sknr_sjs2];
                            // 设置个数
                            count3 = 0;
                            // 获取个数
                            for (var key in dhr_ym_dx2) {
                                if (dhr_ym_dx2.hasOwnProperty(key)) { // 确保属性是对象自身的属性，而不是原型链上的
                                    count3++;
                                }
                            }
                        }

                        var sknr_sjs3 = sjs4(0, count3 - 1);
                        var sjnr_lj = dhr_ym_dx2['dhr_ym_sz' + sknr_sjs3]
                        if (sjnr_lj.length == 4) {
                            div.innerHTML = ((sjnr_lj[0].startsWith("http") || sjnr_lj[0].startsWith("data")) ? '<div class="lbnr_ljtp" style="background-image: url(' + sjnr_lj[0] + ');"></div>' : '<div class="lbnr_ljtp">' + sjnr_lj[0] + '</div>') + '<div class="lbnr_lj_xx"><div class="lbnr_ljmz">' + sjnr_lj[1] + '</div><div class="lbnr_ljbz">' + sjnr_lj[2] + '</div></div><div class="lbnr_lj_dz"><a class="lbnr_ljdz" target="_blank" href="' + sjnr_lj[3] + '">进入</a></div>';
                        } else if (sjnr_lj.length == 5) {
                            div.innerHTML = ((sjnr_lj[0].startsWith("http") || sjnr_lj[0].startsWith("data")) ? '<div class="lbnr_ljtp" style="background-image: url(' + sjnr_lj[0] + ');"></div>' : '<div class="lbnr_ljtp">' + sjnr_lj[0] + '</div>') + '<div class="lbnr_lj_xx"><div class="lbnr_ljmz">' + sjnr_lj[1] + '</div><div class="lbnr_ljbz">' + sjnr_lj[2] + '</div></div><div class="lbnr_lj_dz"><a class="lbnr_ljdz" target="_blank" href="' + sjnr_lj[3] + '">进入</a><a class="lbnr_ljxz" target="_blank" href="' + sjnr_lj[4] + '">下载</a></div>';
                        }

                        lbnr_max[i].appendChild(div);

                        // a标签打开方式替换
                        var className = document.querySelectorAll('a[href^="Sku-"]');
                        for (var iii = 0; iii < className.length; iii++) {
                            className[iii].target = '_self';
                            className[iii].innerHTML = '打开';
                        }
                        var hzm = ['.zip', '.exe'];
                        for (var ppp = 0; ppp < hzm.length; ppp++) {
                            var className = document.querySelectorAll('a[href$="' + hzm[ppp] + '"]');
                            for (var iii = 0; iii < className.length; iii++) {
                                className[iii].target = '_self';
                                className[iii].innerHTML = '安装';
                            }
                        }

                        // 固定位置
                        div.style.width = '302px'
                        div.style.left = sjnr_wz_shu[i] + 'px';
                        sjnr_wz_shu[i] += div.offsetWidth + 12;
                    } else if (sknr_sjs == 4) { //记录
                        var div = document.createElement('div');
                        div.className = 'lbnr_min';

                        var liu_yan_dx = JSON.parse(localStorage.liu_yan_dx);
                        // 设置个数
                        var count4 = 0;
                        // 获取个数
                        for (var key in liu_yan_dx) {
                            if (liu_yan_dx.hasOwnProperty(key)) { // 确保属性是对象自身的属性，而不是原型链上的
                                count4++;
                            }
                        }
                        var liu_yan_sz_wbj = [];
                        for (var u = 0; u < count4; u++) {
                            if (liu_yan_dx['liu_yan_sz' + u][2] == 2) {
                                liu_yan_sz_wbj.push(liu_yan_dx['liu_yan_sz' + u]);
                            }
                        }
                        var sknr_sjs2 = sjs4(0, liu_yan_sz_wbj.length - 1);
                        var liu_yan_sz = liu_yan_sz_wbj[sknr_sjs2];

                        div.innerHTML = '<div class="lbnr_jl">未标记录 ' + liu_yan_sz[1] + '</div><div class="lbnr_jl2"></div>';
                        div.querySelector('.lbnr_jl2').innerText = liu_yan_sz[0];
                        div.addEventListener('click', function(e) {
                            var top_dhl_div = document.querySelector('.top_dhl').querySelectorAll('div');
                            top_dhl_div[2].click();
                            liu_yan_sxuan_wbj.click();
                        });
                        lbnr_max[i].appendChild(div);
                        // 固定位置
                        div.style.left = sjnr_wz_shu[i] + 'px';
                        sjnr_wz_shu[i] += div.offsetWidth + 12;
                    } else if (sknr_sjs == 5) { //设置
                        var div = document.createElement('div');
                        div.className = 'lbnr_min';

                        var shezhi_min_div = document.querySelector('.shezhi_min').querySelectorAll('.shezhi_mins');
                        var sknr_sjs2 = sjs4(0, shezhi_min_div.length - 1);

                        div.innerHTML = '<div class="lbnr_sz">设置</div><div class="lbnr_sz2">' + shezhi_min_div[sknr_sjs2].innerText + '</div>';
                        div.addEventListener('click', function(e) {
                            var top_dhl_div = document.querySelector('.top_dhl').querySelectorAll('div');
                            top_dhl_div[3].click();
                            for (var w = 0; w < shezhi_min_div.length; w++) {
                                if (this.querySelector('.lbnr_sz2').innerText == shezhi_min_div[w].innerText) {
                                    shezhi_min_div[w].click();
                                }
                            }
                        });
                        lbnr_max[i].appendChild(div);
                        // 固定位置
                        div.style.left = sjnr_wz_shu[i] + 'px';
                        sjnr_wz_shu[i] += div.offsetWidth + 12;
                    } else if (sknr_sjs == 6) { //音乐
                        var div = document.createElement('div');
                        div.className = 'lbnr_min';

                        var music_cd = JSON.parse(localStorage.music_cd);
                        var sknr_sjs2 = sjs4(0, music_cd[0].length - 1);

                        div.innerHTML = '<div class="lbnr_yy"><i class="iconfont i_sy_sjnr_yybfq icon-kaishi3"></i><div>播放音乐</div></div><div class="lbnr_yy2">' + music_cd[0][sknr_sjs2] + '</div>';
                        div.addEventListener('click', function(e) {
                            var music_cd = JSON.parse(localStorage.music_cd);
                            var i_music_s_ks_tb = document.querySelectorAll('.i_music_s_ks_tb');
                            i_music_s_ks_tb[music_cd[0].indexOf(this.querySelector('.lbnr_yy2').innerText)].click();
                        });
                        lbnr_max[i].appendChild(div);
                        // 固定位置
                        div.style.left = sjnr_wz_shu[i] + 'px';
                        sjnr_wz_shu[i] += div.offsetWidth + 12;
                    } else if (sknr_sjs == 7) { //热点
                        var div = document.createElement('div');
                        div.className = 'lbnr_min';

                        var mrrd = JSON.parse(localStorage.mrrd);
                        var sknr_sjs2 = sjs4(0, mrrd.length - 1);

                        var mrrd_numtop = sknr_sjs2 + 1;
                        var mrrd_top = JSON.parse(localStorage.mrrd_top);
                        var i2 = 0;

                        for (var ii = 0; ii < mrrd_top.length; ii++) {
                            var num_ss = 0;
                            for (var tt = 0; tt <= ii; tt++) {
                                num_ss += mrrd_top[tt];
                            }
                            if (num_ss >= mrrd_numtop && ii >= 1) {
                                for (var pp = 0; pp < ii; pp++) {
                                    mrrd_numtop -= mrrd_top[pp];
                                }

                                i2 = ii;
                                break;
                            } else if (num_ss >= mrrd_numtop && ii == 0) {

                                i2 = ii;
                                break;
                            }
                        }

                        div.innerHTML = '<div class="lbnr_sz">' + JSON.parse(localStorage.mrrd_name)[i2] + ' 🔥TOP ' + mrrd_numtop + '</div><div class="lbnr_sz2">' + mrrd[sknr_sjs2] + '</div>';

                        div.addEventListener('click', function(e) {
                            so_ssk.value = this.querySelector('.lbnr_sz2').innerText;
                            so_anniu.click();
                        });

                        lbnr_max[i].appendChild(div);
                        // 固定位置
                        div.style.left = sjnr_wz_shu[i] + 'px';
                        sjnr_wz_shu[i] += div.offsetWidth + 12;
                    } else if (sknr_sjs == 8) { //周志
                        var div = document.createElement('div');
                        div.className = 'lbnr_min';

                        var sy_ke_biao_l_s2 = document.querySelectorAll('.sy_ke_biao_l_s2');
                        var allEmpty_js = [];
                        for (var y = 1; y < sy_ke_biao_l_s2.length; y++) {
                            if (sy_ke_biao_l_s2[y].value && sy_ke_biao_l_s2[y].value.trim() !== '') {
                                allEmpty_js.push(sy_ke_biao_l_s2[y].value);
                            }
                        }
                        var sknr_sjs22 = sjs4(0, allEmpty_js.length - 1);
                        div.innerHTML = '<div class="lbnr_jl">' + sy_ke_biao_l_s2[0].innerText + '</div><div class="lbnr_jl2">' + allEmpty_js[sknr_sjs22] + '</div>';
                        div.addEventListener('click', function(e) {
                            document.querySelector('.sy_dw_kebiao').click();
                        });

                        lbnr_max[i].appendChild(div);
                        // 固定位置
                        div.style.left = sjnr_wz_shu[i] + 'px';
                        sjnr_wz_shu[i] += div.offsetWidth + 12;
                    } else if (sknr_sjs == 9) { //习惯
                        var div = document.createElement('div');
                        div.className = 'lbnr_min';
                        div.style.width = '302px';

                        var da_ka = JSON.parse(localStorage.da_ka);
                        var sknr_sjs2 = sjs4(0, da_ka.length - 1);
                        var da_ka_jisuan_s = da_ka[sknr_sjs2][5].length > 0 ? ` 🗲${da_ka[sknr_sjs2][5].length}天` : '';
                        div.innerHTML = ((da_ka[sknr_sjs2][0].startsWith("http") || da_ka[sknr_sjs2][0].startsWith("data")) ? '<div class="lbnr_ljtp" style="background-image: url(' + da_ka[sknr_sjs2][0] + ');"></div>' : '<div class="lbnr_ljtp">' + da_ka[sknr_sjs2][0] + '</div>') + '<div class="lbnr_lj_xx2"><div class="lbnr_ljmz2">' + da_ka[sknr_sjs2][1] + da_ka_jisuan_s + '</div><div class="lbnr_ljbz2">' + da_ka[sknr_sjs2][2] + '</div></div>';
                        div.addEventListener('click', function(e) {
                            document.querySelector('.top_dhl').querySelectorAll('div')[5].click();
                        });

                        lbnr_max[i].appendChild(div);
                        // 固定位置
                        div.style.left = sjnr_wz_shu[i] + 'px';
                        sjnr_wz_shu[i] += div.offsetWidth + 12;
                    }
                }
            }

            // 删除无用动态
            for (var u = 0; u < 5; u++) {
                var lbnr_min_s = document.querySelectorAll('.lbnr_max')[u].querySelectorAll('.lbnr_min');
                for (var i = 0; i < lbnr_min_s.length; i++) {
                    if ((lbnr_min_s[i].offsetLeft + lbnr_min_s[i].offsetWidth) < lbnr_max[u].style.transform.substring(12, lbnr_max[u].style.transform.length - 3) - 100) {
                        lbnr_max[u].removeChild(lbnr_min_s[i]);
                    }
                }
            }

        }
        sjnr_shuchu(10);
        // 定时输出
        var lbnr_max = document.querySelectorAll('.lbnr_max');
        var sjnr_ydjl = 0;
        var lbnr_max_shu_du_haomiao = 1000;

        // 滚动
        sy_lbnr_dsq = setInterval(function() {
            sjnr_ydjl += 100;
            var lbnr_max = document.querySelectorAll('.lbnr_max');
            for (var i = 0; i < 5; i++) {
                lbnr_max[i].style.transform = 'translateX(-' + sjnr_ydjl + 'px)';
            }
            sjnr_shuchu(1);
        }, lbnr_max_shu_du_haomiao);

        for (var i = 0; i < 5; i++) {
            lbnr_max[i].style.transition = (lbnr_max_shu_du_haomiao / 1000) + 's linear';
        }

    } else if (localStorage.sy_lbxz == 2) {
        // 空、流畅
    }
}

if (localStorage.dr_mm == '' || (localStorage.dr_mm !== '' && mmdr_sf == 1)) {
    sy_lbnr_hs();
}

// 优化内存
top_dhl_S = document.querySelector('.top_dhl').querySelectorAll('div');
for (var i = 0; i < top_dhl_S.length; i++) {
    if (i == 0) {
        top_dhl_S[i].addEventListener('click', function(e) {
            sy_lbt.innerHTML = '';
            clearInterval(sy_lbnr_dsq);
            if (nrmaxs0.style.display == 'block') {
                sy_lbnr_hs();
            } else {
                setTimeout(function() {
                    sy_lbnr_hs();
                });
            }
        });
    } else {
        top_dhl_S[i].addEventListener('click', function(e) {
            sy_lbt.innerHTML = '';
            clearInterval(sy_lbnr_dsq);
            clearTimeout(sy_lbt_sc_jsq2);
            clearInterval(sy_lbt_sc_jsq);
        });
    }
}
var sy_3d_kaiguan = document.querySelector('.sy_3d_kaiguan');
sy_3d_kaiguan.addEventListener('click', function(e) {
    sy_lbt.innerHTML = '';
    clearInterval(sy_lbnr_dsq);
    clearTimeout(sy_lbt_sc_jsq2);
    clearInterval(sy_lbt_sc_jsq);
});





// HTSP
var WGS_HTSP = document.querySelector('.WGS_HTSP');
var gywm_ban_ben_HTSP = 0;
var gywm_ban_ben_sj;
var gywm_ban_ben_djcs = 0;
var gywm_ban_ben = document.querySelector('.gywm_ban_ben');
// sz_zdsc(数组, 要删除的字符(不是索引号), 如果要替换成)
function sz_zdsc(sz_s, sz_sc_zhi, sz_tj_zhi) {
    if (sz_sc_zhi && sz_s.indexOf(sz_sc_zhi) !== -1 && sz_tj_zhi) {
        sz_s.splice(sz_s.indexOf(sz_sc_zhi), 2, sz_tj_zhi);
    } else if (sz_sc_zhi && sz_s.indexOf(sz_sc_zhi) !== -1) {
        sz_s.splice(sz_s.indexOf(sz_sc_zhi), 1);
    }
}
// 本地搜索
gywm_ban_ben.addEventListener('click', function(e) {
    gywm_ban_ben_sj ? clearTimeout(gywm_ban_ben_sj) : undefined;
    gywm_ban_ben_djcs++;
    if (gywm_ban_ben_djcs == 10) {
        gywm_ban_ben_djcs = 0;

        var htsp_s = JSON.parse(localStorage.htsp_s);
        var htsp_s_gs = 0;
        var b = 0;
        Sku_tctx('正在从本地路线检测 HTSP');
        gywm_ban_ben.innerHTML = 'HTSP 玩命加载中....';

        function wzjc(dz, sj) {
            WGS_HTSP.src = dz;
            WGS_HTSP.addEventListener('load', function(e) {
                b = 1;
                console.log('加载成功:' + this.src);
                Sku_tctx('从 ' + dz + ' 检测到 HTSP');
                gywm_ban_ben_HTSP = 1;
                gywm_ban_ben.innerHTML = 'HTSP 地址:' + dz.substring(0, dz.length - 11) + ' (删除 ' + (htsp_s_gs) + ' 剩余 ' + (htsp_s.length - htsp_s_gs) + ')';
                Sku_tsy(0);
            });
            WGS_HTSP.addEventListener('error', function(e) {
                console.log('加载失败:' + this.src);
                // 删除
                var htsp_s2 = JSON.parse(localStorage.htsp_s);
                sz_zdsc(htsp_s2, dz);
                localStorage.htsp_s = JSON.stringify(htsp_s2);
            });

            setTimeout(function() {
                if (b !== 1) {
                    console.log('加载超时:' + dz);
                    gywm_ban_ben_HTSP = 1;
                    htsp_s_gs++;
                    if (htsp_s_gs <= htsp_s.length - 1) {
                        wzjc(htsp_s[htsp_s_gs], 1000);
                    } else {
                        Sku_tctx('本地没有发现有用链接 !');
                        console.log('本地没用发现有用链接 ! 请换全局搜索');
                        gywm_ban_ben.innerHTML = 'HTSP 本地没有发现有用链接,请换全局搜索';
                        Sku_tsy(0);
                    }
                }
            }, sj);
        }

        wzjc(htsp_s[htsp_s_gs], 1000);

        WGS_HTSP.addEventListener('click', function(e) {
            window.open(WGS_HTSP.src.substring(0, WGS_HTSP.src.length - 11));
        });

    }
    gywm_ban_ben_sj = setTimeout(function() {
        gywm_ban_ben_djcs = 0;
    }, 2000);

});

// 全局搜索 
var htsp_qjss_jdt = document.querySelector('.htsp_qjss_jdt');
var htsp_qjss_jdt2 = document.querySelector('.htsp_qjss_jdt2');
var gywm_l = document.querySelectorAll('.gywm_l')[0];
var gywm_ban_ben_djcs2 = 0;
var gywm_ban_ben_sj2;
var htsp_sysj_js;
gywm_l.addEventListener('click', function(e) {
    gywm_ban_ben_sj2 ? clearTimeout(gywm_ban_ben_sj2) : undefined;
    gywm_ban_ben_djcs2++;
    if (gywm_ban_ben_djcs2 == 10) {
        gywm_ban_ben_djcs2 = 0;

        var WGS_HTSP_S = document.querySelector('.WGS_HTSP_S');
        var s_sz = ['kt'];
        var s_sz_2 = ['vip'];
        var s_sz_3 = ['9527'];
        var htsp_s_tjgs = 0;
        var htsp_s_tjgs_cg = 0;
        var htsp_s_tjgs_sb = 0;
        var htsp_cgqcfgs = 0;
        gywm_ban_ben.innerHTML = 'HTSP 玩命搜索中....';
        sz_jcbbgx.style.display = 'none';

        // 剩余时间
        var htsp_miao = 0;
        var gywm_l_1 = document.querySelectorAll('.gywm_l')[0];
        htsp_sysj_js = setInterval(function() {
            htsp_miao++;
            var htsp_miao_g = (htsp_s_tjgs_sb + htsp_s_tjgs_cg) / htsp_miao;
            var htsp_pjsd = ((htsp_s_tjgs - htsp_s_tjgs_sb - htsp_s_tjgs_cg) / htsp_miao_g);
            if (htsp_pjsd == Infinity) {
                gywm_l_1.innerHTML = '版本:';
            } else if (htsp_pjsd <= 60) {
                gywm_l_1.innerHTML = '剩余' + Math.ceil(htsp_pjsd) + '秒:';
            } else {
                gywm_l_1.innerHTML = '剩余' + Math.ceil(htsp_pjsd / 60) + '分钟:';
            }

            if (htsp_s_tjgs_sb + htsp_s_tjgs_cg == htsp_s_tjgs) {
                clearInterval(htsp_sysj_js);
                console.log(htsp_miao);
                gywm_l_1.innerHTML = '用时' + (htsp_miao <= 60 ? htsp_miao + '秒:' : Math.ceil(htsp_miao / 60) + '分' + (htsp_miao % 60) + '秒:');
            }
        }, 1000);

        for (var p = 0; p < s_sz_3.length; p++) {
            for (var o = 0; o < s_sz_2.length; o++) {
                for (var i = 0; i < s_sz.length; i++) {
                    for (var u = 0; u < 400; u++) {
                        htsp_s_tjgs++;
                        var wz_shu = u < 10 ? '0' + u : u;
                        var imgs = document.createElement('img');
                        imgs.src = 'https://ht' + s_sz[i] + wz_shu + '.' + s_sz_2[o] + ':' + s_sz_3[p] + '/favicon.ico';
                        imgs.addEventListener('load', function(e) {
                            // 分支加速
                            setTimeout(function() {}, 0);

                            htsp_s_tjgs_cg++;
                            console.log('总共 ' + htsp_s_tjgs + ' 失败 ' + htsp_s_tjgs_sb + ' 成功 ' + htsp_s_tjgs_cg);
                            console.log(this.src);
                            HTSP_src = this.src;

                            // 保存
                            var htsp_s = JSON.parse(localStorage.htsp_s);
                            if (htsp_s.indexOf(this.src) !== -1) {
                                htsp_cgqcfgs++;
                                sz_zdsc(htsp_s, this.src);
                            } else {
                                Sku_tsy(1);
                            }
                            htsp_s.unshift(this.src);
                            localStorage.htsp_s = JSON.stringify(htsp_s);

                            gywm_ban_ben_HTSP = 1;

                            WGS_HTSP.src = this.src;

                            gywm_ban_ben.innerHTML = 'HTSP 成功 ' + htsp_s_tjgs_cg + ' 新增 ' + (htsp_s_tjgs_cg - htsp_cgqcfgs) + ' 本地 ' + htsp_s.length + ' 玩命搜索中...' + (htsp_s_tjgs_cg + htsp_s_tjgs_sb) + '/' + htsp_s_tjgs + ' (进程 ' + (((htsp_s_tjgs_cg + htsp_s_tjgs_sb) / htsp_s_tjgs) * 100).toFixed(2) + '%)';

                            htsp_qjss_jdt.style.display = 'block';
                            htsp_qjss_jdt2.style.width = (((htsp_s_tjgs_cg + htsp_s_tjgs_sb) / htsp_s_tjgs) * 100).toFixed(2) + '%';

                            if (htsp_s_tjgs_sb + htsp_s_tjgs_cg == htsp_s_tjgs) {
                                var htsp_s = JSON.parse(localStorage.htsp_s);
                                gywm_ban_ben.innerHTML = 'HTSP 搜索结束' + ' (检测 ' + htsp_s_tjgs + ' 失败 ' + htsp_s_tjgs_sb + ' 成功 ' + htsp_s_tjgs_cg + ' 重复 ' + htsp_cgqcfgs + ' 新增 ' + (htsp_s_tjgs_cg - htsp_cgqcfgs) + ' 本地 ' + htsp_s.length + ')';
                                htsp_qjss_jdt.style.display = 'none';
                                WGS_HTSP_S.innerHTML = '';
                                Sku_tctx('HTSP 全局搜索已结束 !');
                                Sku_tsy(0);
                            }
                        });
                        imgs.addEventListener('error', function(e) {
                            // 分支加速
                            setTimeout(function() {}, 0);
                            htsp_s_tjgs_sb++;
                            var htsp_s = JSON.parse(localStorage.htsp_s);

                            gywm_ban_ben.innerHTML = 'HTSP 成功 ' + htsp_s_tjgs_cg + ' 新增 ' + (htsp_s_tjgs_cg - htsp_cgqcfgs) + ' 本地 ' + htsp_s.length + ' 玩命搜索中...' + (htsp_s_tjgs_cg + htsp_s_tjgs_sb) + '/' + htsp_s_tjgs + ' (进程 ' + (((htsp_s_tjgs_cg + htsp_s_tjgs_sb) / htsp_s_tjgs) * 100).toFixed(2) + '%)';

                            htsp_qjss_jdt.style.display = 'block';
                            htsp_qjss_jdt2.style.width = (((htsp_s_tjgs_cg + htsp_s_tjgs_sb) / htsp_s_tjgs) * 100).toFixed(2) + '%';

                            console.log('总共 ' + htsp_s_tjgs + ' 失败 ' + htsp_s_tjgs_sb + ' 成功 ' + htsp_s_tjgs_cg);
                            if (htsp_s_tjgs_sb + htsp_s_tjgs_cg == htsp_s_tjgs) {
                                var htsp_s = JSON.parse(localStorage.htsp_s);
                                gywm_ban_ben.innerHTML = 'HTSP 搜索结束' + ' (检测 ' + htsp_s_tjgs + ' 失败 ' + htsp_s_tjgs_sb + ' 成功 ' + htsp_s_tjgs_cg + ' 重复 ' + htsp_cgqcfgs + ' 新增 ' + (htsp_s_tjgs_cg - htsp_cgqcfgs) + ' 本地 ' + htsp_s.length + ')';
                                htsp_qjss_jdt.style.display = 'none';
                                WGS_HTSP_S.innerHTML = '';
                                Sku_tctx('HTSP 全局搜索已结束 !');
                                Sku_tsy(0);
                            }
                        });
                        WGS_HTSP_S.appendChild(imgs);
                    }
                }
            }
        }

        Sku_tctx('搜索路线数量总共 ' + htsp_s_tjgs + ' 个');

        WGS_HTSP.addEventListener('click', function(e) {
            window.open(WGS_HTSP.src.substring(0, WGS_HTSP.src.length - 11));
        });
    }
    gywm_ban_ben_sj2 = setTimeout(function() {
        gywm_ban_ben_djcs2 = 0;
    }, 2000);
});

// 清除本地HTSP
var gywm_l2 = document.querySelectorAll('.gywm_l')[1];
var gywm_r2 = document.querySelectorAll('.gywm_r')[1];
var gywm_ban_ben_djcs3 = 0;
var gywm_ban_ben_sj3;
gywm_l2.addEventListener('click', function(e) {
    console.log(1);
    gywm_ban_ben_sj3 ? clearTimeout(gywm_ban_ben_sj3) : undefined;
    gywm_ban_ben_djcs3++;
    if (gywm_ban_ben_djcs3 == 10) {
        gywm_ban_ben_djcs3 = 0;
        Sku_tctx('已删除所有本地的HTSP地址 !');
        localStorage.htsp_s = '[]';
        gywm_r2.innerHTML = '已删除所有本地的HTSP地址,请重新进行全局搜索 !';
        setTimeout(function() {
            gywm_r2.innerHTML = '所有文件存储在个人电脑 !';
        }, 10000);
    }
    gywm_ban_ben_sj3 = setTimeout(function() {
        gywm_ban_ben_djcs3 = 0;
    }, 2000);
});

// 添加本地HTSP
var gywm_r2 = document.querySelectorAll('.gywm_r')[1];
var gywm_ban_ben_djcs4 = 0;
var WGS_HTSP_TJ = document.querySelector('.WGS_HTSP_TJ');
var gywm_ban_ben_sj4;
gywm_r2.addEventListener('click', function(e) {
    gywm_ban_ben_sj4 ? clearTimeout(gywm_ban_ben_sj4) : undefined;
    gywm_ban_ben_djcs4++;
    if (gywm_ban_ben_djcs4 == 10) {
        gywm_ban_ben_djcs4 = 0;
        if (WGS_HTSP_TJ.style.display == 'block') {
            WGS_HTSP_TJ.value = localStorage.htsp_s;
        } else {
            WGS_HTSP_TJ.style.display = 'block';
            WGS_HTSP_TJ.focus();
        }
    }
    WGS_HTSP_TJ.focus();
    gywm_ban_ben_sj4 = setTimeout(function() {
        gywm_ban_ben_djcs4 = 0;
    }, 2000);
});

function WGS_HTSP_TJ_click() {
    if (WGS_HTSP_TJ.value !== '' && WGS_HTSP_TJ.value !== localStorage.htsp_s) {
        try {
            // 可能产生错误的代码
            var htsp_s = JSON.parse(localStorage.htsp_s);
            var xing_htsp_s = [];
            var xing_htsp_s2;
            if (WGS_HTSP_TJ.value.substring(0, 4) == 'http') {
                xing_htsp_s2 = JSON.parse('["' + WGS_HTSP_TJ.value + '"]');
            } else {
                xing_htsp_s2 = JSON.parse(WGS_HTSP_TJ.value);
            }
            for (var i = 0; i < xing_htsp_s2.length; i++) {
                if (htsp_s.indexOf(xing_htsp_s2[i]) == -1) {
                    xing_htsp_s.push(xing_htsp_s2[i]);
                }
            }
            localStorage.htsp_s = JSON.stringify(xing_htsp_s.concat(JSON.parse(localStorage.htsp_s)));
            console.log('成功添加 ' + xing_htsp_s.length + ' 个不重复的HTSP地址');
            WGS_HTSP_TJ.value = '';
            WGS_HTSP_TJ.style.display = 'none';
            gywm_r2.innerHTML = '成功添加 ' + xing_htsp_s.length + ' 个不重复的HTSP地址';
            setTimeout(function() {
                gywm_r2.innerHTML = '所有文件存储在个人电脑 !';
            }, 10000);
        } catch (error) {
            // 这个块会在 try 中有错误抛出时执行
            Sku_tctx('无法识别的HTSP模块 !');
        }
    }
}

// 5下复制,快速复制htsp本地地址
var htsp_dz_fz_cs = 0;
var htsp_dz_fz_cs_jsq;
document.addEventListener('copy', function(e) {
    htsp_dz_fz_cs_jsq ? clearTimeout(htsp_dz_fz_cs_jsq) : undefined;
    htsp_dz_fz_cs++;
    if (htsp_dz_fz_cs == 5) {
        htsp_dz_fz_cs = 0;
        e.preventDefault();
        e.clipboardData.setData('text/plain', localStorage.htsp_s);
        Sku_tctx(' 复制成功 (本地HTSP地址 ' + JSON.parse(localStorage.htsp_s).length + ' 条) ');
    }
    htsp_dz_fz_cs_jsq = setTimeout(function() {
        htsp_dz_fz_cs = 0;
    }, 2000)
});





// 历史注册表
var lszcb_ym = document.querySelector('.lszcb_ym');
var shezhi_lszcb = document.querySelector('.shezhi_lszcb');
var ssjl_min2 = document.querySelector('.ssjl_min2');
var ssjl_max2 = document.querySelector('.ssjl_max2');
var bizhi_gundon3 = document.querySelector('.bizhi_gundon3');
shezhi_lszcb.addEventListener('click', function(e) {
    ssjl_min2.innerHTML = '';
    lszcb_yjqk.style.display = 'none';
    shezhi_min.style.display = 'none';
    lszcb_ym.style.display = 'block';
    bizhi_gundon3.innerHTML = '↓';
    ssjl_max2.scroll(0, 0);
    zcb_s_jz();
});

function zcb_s_jz() {
    var sku_zcb = JSON.parse(localStorage.sku_zcb);
    for (var i = 0; i < sku_zcb[0].length; i++) {
        var div = document.createElement('div');

        div.className = 'lszcb_s';
        div.innerHTML = '<div class="lszcb_s_name">' + sku_zcb[0][i] + '</div><div class="lszcb_s_dizhi">' + sku_zcb[1][i] + '</div><div class="lszcb_s_cj">下载注册表</div><div class="lszcb_s_sc">删除注册表</div>';

        ssjl_min2.appendChild(div);
    }
    // 滚动字体
    WGS_wenbengundon11('.lszcb_s_name', '5');
    WGS_wenbengundon11('.lszcb_s_dizhi', '5');
    // 添加创建reg
    var lszcb_s_cj = document.querySelectorAll('.lszcb_s_cj');
    for (var i = 0; i < lszcb_s_cj.length; i++) {
        lszcb_s_cj[i].addEventListener('click', function(e) {
            // 创建TXT文本 WGS_txt_wenbenchuanjian('文件名','文本内容');
            console.log('Windows Registry Editor Version 5.00\n[HKEY_CLASSES_ROOT\\' + this.previousElementSibling.previousElementSibling.innerText + ']\n@="URL:' + this.previousElementSibling.previousElementSibling.innerText + ' Protocol Handler"\n"URL Protocol"=""\n[HKEY_CLASSES_ROOT\\' + this.previousElementSibling.previousElementSibling.innerText + '\\DefaultIcon]\n@="' + this.previousElementSibling.innerText + '"\n[HKEY_CLASSES_ROOT\\' + this.previousElementSibling.previousElementSibling.innerText + '\\shell]\n[HKEY_CLASSES_ROOT\\' + this.previousElementSibling.previousElementSibling.innerText + '\\shell\\open]\n[HKEY_CLASSES_ROOT\\' + this.previousElementSibling.previousElementSibling.innerText + '\\shell\\open\\command]\n@="\\"' + this.previousElementSibling.innerText + '\\" \\"%1\\""');
            WGS_txt_wenbenchuanjian(this.previousElementSibling.previousElementSibling.innerText + '注册表.reg', 'Windows Registry Editor Version 5.00\n[HKEY_CLASSES_ROOT\\' + this.previousElementSibling.previousElementSibling.innerText + ']\n@="URL:' + this.previousElementSibling.previousElementSibling.innerText + ' Protocol Handler"\n"URL Protocol"=""\n[HKEY_CLASSES_ROOT\\' + this.previousElementSibling.previousElementSibling.innerText + '\\DefaultIcon]\n@="' + this.previousElementSibling.innerText + '"\n[HKEY_CLASSES_ROOT\\' + this.previousElementSibling.previousElementSibling.innerText + '\\shell]\n[HKEY_CLASSES_ROOT\\' + this.previousElementSibling.previousElementSibling.innerText + '\\shell\\open]\n[HKEY_CLASSES_ROOT\\' + this.previousElementSibling.previousElementSibling.innerText + '\\shell\\open\\command]\n@="\\"' + this.previousElementSibling.innerText + '\\" \\"%1\\""');

            function WGS_txt_wenbenchuanjian(fileName, txt) {
                // 创建文本内容
                var text = txt;

                // 创建Blob对象
                var blob = new Blob([text], {
                    type: 'text/plain;charset=utf-16le'
                });

                // 创建下载链接
                var url = URL.createObjectURL(blob);
                var link = document.createElement('a');
                link.href = url;
                link.download = fileName;
                document.body.appendChild(link);
                link.click();
                URL.revokeObjectURL(url); // 释放内存
            }
        })
    }
    // 添加删除创建reg
    //指定删除
    function sz_zdsc(sz_s, sz_sc_zhi, sz_tj_zhi) {
        if (sz_sc_zhi && sz_s.indexOf(sz_sc_zhi) !== -1 && sz_tj_zhi) {
            sz_s.splice(sz_s.indexOf(sz_sc_zhi), 2, sz_tj_zhi);
        } else if (sz_sc_zhi && sz_s.indexOf(sz_sc_zhi) !== -1) {
            sz_s.splice(sz_s.indexOf(sz_sc_zhi), 1);
        }
    }
    var lszcb_s_sc = document.querySelectorAll('.lszcb_s_sc');
    for (var i = 0; i < lszcb_s_sc.length; i++) {
        lszcb_s_sc[i].addEventListener('click', function(e) {
            // 删除本地
            if (this.innerHTML == '删除注册表') {
                // 创建TXT文本 WGS_txt_wenbenchuanjian('文件名','文本内容');
                console.log('Windows Registry Editor Version 5.00\n[-HKEY_CLASSES_ROOT\\' + this.previousElementSibling.previousElementSibling.previousElementSibling.innerText + ']');
                WGS_txt_wenbenchuanjian('删除' + this.previousElementSibling.previousElementSibling.previousElementSibling.innerText + '注册表.reg', 'Windows Registry Editor Version 5.00\n[-HKEY_CLASSES_ROOT\\' + this.previousElementSibling.previousElementSibling.previousElementSibling.innerText + ']');

                function WGS_txt_wenbenchuanjian(fileName, txt) {
                    // 创建文本内容
                    var text = txt;

                    // 创建Blob对象
                    var blob = new Blob([text], {
                        type: 'text/plain;charset=utf-8'
                    });

                    // 创建下载链接
                    var url = URL.createObjectURL(blob);
                    var link = document.createElement('a');
                    link.href = url;
                    link.download = fileName;
                    document.body.appendChild(link);
                    link.click();
                    URL.revokeObjectURL(url); // 释放内存
                }
            } else if (this.innerHTML == '删除此历史') {
                var sku_zcb = JSON.parse(localStorage.sku_zcb);
                sz_zdsc(sku_zcb[0], this.previousElementSibling.previousElementSibling.previousElementSibling.innerText);
                sz_zdsc(sku_zcb[1], this.previousElementSibling.previousElementSibling.innerText);
                localStorage.sku_zcb = JSON.stringify(sku_zcb);

                this.parentNode.parentNode.removeChild(this.parentNode);
            }
        })
    }
}
// 一键删除和下载
var lszcb_yjxz = document.querySelector('.lszcb_yjxz');
var lszcb_yjsc = document.querySelector('.lszcb_yjsc');
lszcb_yjxz.addEventListener('click', function(e) {
    var sku_zcb = JSON.parse(localStorage.sku_zcb);
    if (sku_zcb[0].length != 0) {
        // 创建TXT文本 WGS_txt_wenbenchuanjian('文件名','文本内容');
        var neron = '';
        var neme = '';
        for (var i = 0; i < sku_zcb[1].length; i++) {
            if (i == 0) {
                neron = neron.concat('Windows Registry Editor Version 5.00\n[HKEY_CLASSES_ROOT\\' + sku_zcb[0][i] + ']\n@="URL:' + sku_zcb[0][i] + ' Protocol Handler"\n"URL Protocol"=""\n[HKEY_CLASSES_ROOT\\' + sku_zcb[0][i] + '\\DefaultIcon]\n@="' + sku_zcb[1][i] + '"\n[HKEY_CLASSES_ROOT\\' + sku_zcb[0][i] + '\\shell]\n[HKEY_CLASSES_ROOT\\' + sku_zcb[0][i] + '\\shell\\open]\n[HKEY_CLASSES_ROOT\\' + sku_zcb[0][i] + '\\shell\\open\\command]\n@="\\"' + sku_zcb[1][i] + '\\" \\"%1\\""');
            } else {
                neron = neron.concat('\nWindows Registry Editor Version 5.00\n[HKEY_CLASSES_ROOT\\' + sku_zcb[0][i] + ']\n@="URL:' + sku_zcb[0][i] + ' Protocol Handler"\n"URL Protocol"=""\n[HKEY_CLASSES_ROOT\\' + sku_zcb[0][i] + '\\DefaultIcon]\n@="' + sku_zcb[1][i] + '"\n[HKEY_CLASSES_ROOT\\' + sku_zcb[0][i] + '\\shell]\n[HKEY_CLASSES_ROOT\\' + sku_zcb[0][i] + '\\shell\\open]\n[HKEY_CLASSES_ROOT\\' + sku_zcb[0][i] + '\\shell\\open\\command]\n@="\\"' + sku_zcb[1][i] + '\\" \\"%1\\""');
            }
        }
        for (var i = 0; i < sku_zcb[0].length; i++) {
            if (i == sku_zcb[0].length - 1) {
                neme = neme.concat(sku_zcb[0][i]);
            } else {
                neme = neme.concat(sku_zcb[0][i] + ',');
            }
        }

        console.log(neme);
        console.log(neron);
        WGS_txt_wenbenchuanjian(neme + '注册表.reg', neron);

        function WGS_txt_wenbenchuanjian(fileName, txt) {
            // 创建文本内容
            var text = txt;

            // 创建Blob对象
            var blob = new Blob([text], {
                type: 'text/plain;charset=utf-16le'
            });

            // 创建下载链接
            var url = URL.createObjectURL(blob);
            var link = document.createElement('a');
            link.href = url;
            link.download = fileName;
            document.body.appendChild(link);
            link.click();
            URL.revokeObjectURL(url); // 释放内存
        }
    } else {
        Sku_tctx('暂无历史注册表');
    }
});
lszcb_yjsc.addEventListener('click', function(e) {
    var sku_zcb = JSON.parse(localStorage.sku_zcb);
    if (sku_zcb[0].length != 0) {
        // 创建TXT文本 WGS_txt_wenbenchuanjian('文件名','文本内容');
        var neron = '';
        var neme = '';
        for (var i = 0; i < sku_zcb[1].length; i++) {
            if (i == 0) {
                neron = neron.concat('Windows Registry Editor Version 5.00\n[-HKEY_CLASSES_ROOT\\' + sku_zcb[0][i] + ']');
            } else {
                neron = neron.concat('\nWindows Registry Editor Version 5.00\n[-HKEY_CLASSES_ROOT\\' + sku_zcb[0][i] + ']');
            }
        }
        for (var i = 0; i < sku_zcb[0].length; i++) {
            if (i == sku_zcb[0].length - 1) {
                neme = neme.concat(sku_zcb[0][i]);
            } else {
                neme = neme.concat(sku_zcb[0][i] + ',');
            }
        }

        console.log(neme);
        console.log(neron);
        WGS_txt_wenbenchuanjian('删除' + neme + '注册表.reg', neron);

        function WGS_txt_wenbenchuanjian(fileName, txt) {
            // 创建文本内容
            var text = txt;

            // 创建Blob对象
            var blob = new Blob([text], {
                type: 'text/plain;charset=utf-16le'
            });

            // 创建下载链接
            var url = URL.createObjectURL(blob);
            var link = document.createElement('a');
            link.href = url;
            link.download = fileName;
            document.body.appendChild(link);
            link.click();
            URL.revokeObjectURL(url); // 释放内存
        }
    } else {
        Sku_tctx('暂无历史注册表');
    }
});

var lszcb_yjqk = document.querySelector('.lszcb_yjqk');
lszcb_yjqk.addEventListener('click', function(e) {
    // 删除本地
    lszcb_yjqk.style.display = 'none';
    localStorage.sku_zcb = '[[],[]]';
    ssjl_min2.innerHTML = '';
    Sku_tctx('以清空所有历史注册表');
});

var zh_scanniu = document.querySelector('.zh_scanniu');
zh_scanniu.addEventListener('click', function(e) {
    var lszcb_s_sc = document.querySelectorAll('.lszcb_s_sc');
    var lszcb_yjqk = document.querySelector('.lszcb_yjqk');
    if (lszcb_s_sc.length != 0) {
        if (lszcb_s_sc[0].innerHTML == '删除注册表') {
            for (var i = 0; i < lszcb_s_sc.length; i++) {
                lszcb_s_sc[i].innerHTML = '删除此历史';
            }

            lszcb_yjqk.style.display = 'block';
        } else {
            for (var i = 0; i < lszcb_s_sc.length; i++) {
                lszcb_s_sc[i].innerHTML = '删除注册表';
            }

            lszcb_yjqk.style.display = 'none';
        }
    }
});






// 传统颜色集
var shezhi_rgb_j_ym = document.querySelector('.shezhi_rgb_j_ym');
var shezhi_rgb_j = document.querySelector('.shezhi_rgb_j');
var grb_j_max = document.querySelector('.grb_j_max');
var rgbj_y_fxk_zt = document.querySelector('.rgbj_y_fxk_zt');
var rgbj_yy_fxk_zzt = document.querySelector('.rgbj_yy_fxk_zzt');
var rgbj_yy_fxk_nrbj = document.querySelector('.rgbj_yy_fxk_nrbj');
var rgbj_yy_fxk_bk = document.querySelector('.rgbj_yy_fxk_bk');
var rgbj_yy_fxk_bz = document.querySelector('.rgbj_yy_fxk_bz');

shezhi_rgb_j.addEventListener('click', function(e) {
    shezhi_min.style.display = 'none';
    shezhi_rgb_j_ym.style.display = 'block';
    grb_j_max.scroll(0, 0);
});

var rgbj_y_fxk_zt_sf = 0;
var rgbj_yy_fxk_zzt_sf = 0;
var rgbj_yy_fxk_nrbj_sf = 0;
var rgbj_yy_fxk_bk_sf = 0;
var rgbj_yy_fxk_bz_sf = 0;

rgbj_y_fxk_zt.addEventListener('click', function(e) {
    if (rgbj_y_fxk_zt_sf == 0) {
        rgbj_y_fxk_zt_sf = 1;
        rgbj_y_fxk_zt.innerHTML = '✔';
    } else {
        rgbj_y_fxk_zt_sf = 0;
        rgbj_y_fxk_zt.innerHTML = '';
    }
});
rgbj_yy_fxk_zzt.addEventListener('click', function(e) {
    if (rgbj_yy_fxk_zzt_sf == 0) {
        rgbj_yy_fxk_zzt_sf = 1;
        rgbj_yy_fxk_zzt.innerHTML = '✔';
    } else {
        rgbj_yy_fxk_zzt_sf = 0;
        rgbj_yy_fxk_zzt.innerHTML = '';
    }
});
rgbj_yy_fxk_nrbj.addEventListener('click', function(e) {
    if (rgbj_yy_fxk_nrbj_sf == 0) {
        rgbj_yy_fxk_nrbj_sf = 1;
        rgbj_yy_fxk_nrbj.innerHTML = '✔';
    } else {
        rgbj_yy_fxk_nrbj_sf = 0;
        rgbj_yy_fxk_nrbj.innerHTML = '';
    }
});
rgbj_yy_fxk_bk.addEventListener('click', function(e) {
    if (rgbj_yy_fxk_bk_sf == 0) {
        rgbj_yy_fxk_bk_sf = 1;
        rgbj_yy_fxk_bk.innerHTML = '✔';
    } else {
        rgbj_yy_fxk_bk_sf = 0;
        rgbj_yy_fxk_bk.innerHTML = '';
    }
});
rgbj_yy_fxk_bz.addEventListener('click', function(e) {
    if (rgbj_yy_fxk_bz_sf == 0) {
        rgbj_yy_fxk_bz_sf = 1;
        rgbj_yy_fxk_bz.innerHTML = '✔';
    } else {
        rgbj_yy_fxk_bz_sf = 0;
        rgbj_yy_fxk_bz.innerHTML = '';
    }
});

var rgb_name = [
    "暗玉紫", "牡丹粉红", "栗紫", "香叶红", "葡萄酱紫", "艳红", "玉红", "茶花红", "高粱红", "满江红", "鼠鼻红", "合欢红", "春梅红", "苋菜红", "烟红", "莓红", "鹅冠红", "枫叶红", "唐菖蒲红", "枣红", "猪肝紫", "葡萄紫", "暗紫苑红", "殷红", "草茉莉红", "酱紫", "山茶红", "锌灰", "海棠红", "蓟粉红", "石蕊红", "淡曙红", "李紫", "石竹红", "淡茜红", "金鱼紫", "山黎豆红", "鼠背灰", "淡蕊香红", "甘蔗紫", "月季红", "尖晶玉红", "水红", "姜红", "芦灰", "茄皮紫", "苍蝇灰", "锦葵红", "粉团花红", "石竹紫", "卵石紫", "晶红", "芝兰紫", "芍药耕红", "暮云灰", "豇豆红", "报春红", "淡绛红", "凤仙花红", "霞光红", "喜蛋红", "夹竹桃红", "松叶牡丹红", "莲瓣红", "白芨红", "隐红灰", "榲桲红", "酢酱草红", "火鹅紫", "鹞冠紫", "品红", "磨石紫", "墨紫", "檀紫", "初荷红", "菜头紫", "葡萄酒红", "淡青紫", "菠根红", "海象紫",
    "兔眼红", "嫩菱红", "洋葱紫", "吊钟花红", "绀紫", "紫荆红", "扁豆花红", "马鞭草紫", "藏花红", "斑鸠灰", "古铜紫", "丹紫红", "丁香淡紫", "玫瑰红", "古鼎灰", "菱锰红", "樱草紫", "龙须红", "电气石红", "玫瑰紫", "苋菜紫", "紫灰", "龙睛鱼紫", "青蛤壳紫", "萝兰紫", "荸荠紫", "豆蔻紫", "扁豆紫", "牵牛紫", "芓紫", "葛巾紫", "青莲", "芥花紫", "凤信紫", "深牵牛紫", "魏紫", "乌梅紫", "桔梗紫", "淡牵牛紫", "剑锋紫", "蕈紫", "槿紫", "芡食白", "龙葵紫", "藤萝紫", "沙鱼灰", "暗龙胆紫", "暗蓝紫", "野葡萄紫", "野菊紫", "水牛灰", "远山紫", "螺甸紫", "晶石紫", "满天星紫", "淡蓝紫", "山梗紫", "牛角灰", "鱼尾灰", "瓦罐灰", "钢蓝", "燕颔蓝", "鲸鱼灰", "青灰", "鸽蓝", "暗蓝", "钢青", "海涛蓝", "飞燕草蓝", "靛青", "安安蓝", "海军蓝", "景泰蓝", "品蓝", "尼罗蓝", "蝶翅蓝", "花青", "鷃蓝", "星蓝", "虹蓝", "柏林蓝",
    "群青", "云水蓝", "羽扇豆蓝", "战舰灰", "晴山蓝", "睛蓝", "搪磁蓝", "潮蓝", "天蓝", "大理石灰", "牵牛花蓝", "宝石蓝", "淡蓝灰", "嫩灰", "银鱼白", "釉蓝", "涧石蓝", "远天蓝", "云山蓝", "秋波蓝", "井天蓝", "鸢尾蓝", "云峰白", "星灰", "钴蓝", "碧青", "苍蓝", "深灰蓝", "灰蓝", "湖水蓝", "海青", "黄昏灰", "霁青", "玉鈫蓝", "胆矾蓝", "樫鸟蓝", "鸥蓝", "翠蓝", "蜻蜓蓝", "孔雀蓝", "蔚蓝", "瀑布蓝", "闪蓝", "甸子蓝", "晚波蓝", "清水蓝", "夏云灰", "海天蓝", "虾壳青", "石绿", "穹灰", "美蝶绿", "垩灰", "蓝绿", "竹绿", "亚丁绿", "月影白", "海王绿", "深海绿", "绿灰", "青矾绿", "苍绿", "飞泉绿", "莽丛绿", "梧枝绿", "铜绿", "草原远绿", "蛙绿", "浪花绿", "苷蓝绿", "粉绿", "淡绿灰", "麦苗绿", "翠绿", "葱绿", "荷叶绿", "淡绿", "田园绿", "玉簪绿", "蟾绿", "蔻梢绿", "薄荷绿", "月白", "蛋白石绿", "竹篁绿", "孔雀绿",
    "宫殿绿", "云杉绿", "毛绿", "冰山蓝", "明灰", "明绿", "松霜绿", "白屈菜绿", "狼烟灰", "瓦松绿", "槲寄生绿", "淡翠绿", "玉髓绿", "鲜绿", "油绿", "宝石绿", "嘉陵水绿", "田螺绿", "水绿", "鹦鹉绿", "艾背绿", "艾绿", "镍灰", "橄榄石绿", "芽绿", "嫩菊绿", "芦苇绿", "姚黄", "蒽油绿", "苹果绿", "海沬绿", "橄榄黄绿", "槐花黄绿", "蝶黄", "象牙白", "橄榄绿", "雪白", "淡灰绿", "佛手黄", "乳白", "香蕉黄", "新禾绿", "油菜花黄", "秋葵黄", "柚黄", "草黄", "硫华黄", "姜黄", "潭水绿", "金瓜黄", "麦秆黄", "蒿黄", "茉莉黄", "藤黄", "芒果黄", "海参灰", "碧螺春绿", "苔绿", "柠檬黄", "草灰绿", "向日葵黄", "素馨黄", "乳鸭黄", "月灰", "葵扇黄", "大豆黄", "金盏黄", "菊蕾白", "黄连黄", "杏仁黄", "谷黄", "木瓜黄", "淡茧黄", "雅梨黄", "银白", "棕榈绿", "鹦鹉冠黄", "枯绿", "浅烙黄", "淡密黄", "芥黄", "栀子黄", "暗海水绿", "篾黄",
    "蚌肉白", "炒米黄", "琥珀黄", "灰绿", "粽叶绿", "尘灰", "鼬黄", "象牙黄", "鲛青", "豆汁黄", "土黄", "香水玫瑰黄", "虎皮黄", "鸡蛋黄", "银鼠灰", "鱼肚白", "初熟杏黄", "山鸡黄", "莲子白", "蟹壳灰", "沙石黄", "甘草黄", "燕羽灰", "鹅掌黄", "麦芽糖黄", "浅驼色", "百灵鸟灰", "酪黄", "荔肉白", "淡肉色", "河豚灰", "蜴蜊绿", "汉白玉", "橙皮黄", "莱阳梨黄", "枇杷黄", "金叶黄", "苍黄", "粉白", "淡橘橙", "珍珠灰", "龟背黄", "浅灰", "铅灰", "中灰", "雄黄", "蜜黄", "风帆黄", "桂皮淡棕", "金莺黄", "肉色", "凋叶棕", "古铜绿", "落英淡粉", "软木黄", "瓜瓤粉", "榴萼黄", "玳瑁黄", "焦茶绿", "蟹壳绿", "山鸡褐", "猴毛灰", "鹿角棕", "淡松烟", "万寿菊黄", "蛋壳黄", "杏黄", "橄榄灰", "鹤灰", "玛瑙灰", "淡银灰", "瓦灰", "夜灰", "北瓜黄", "荷花白", "松鼠灰", "淡米粉", "深灰", "海鸥灰", "茶褐", "驼色", "银灰", "鹿皮褐", "槟榔综",
    "晓灰", "淡赭", "古铜褐", "麂棕", "醉瓜肉", "雁灰", "鲑鱼红", "橘橙", "金黄", "玫瑰粉", "美人焦橙", "米色", "蛛网灰", "淡咖啡", "海螺橙", "岩石棕", "芒果棕", "陶瓷红", "菠萝红", "余烬红", "金莲花橙", "火砖红", "初桃粉红", "铁棕", "介壳淡粉红", "蟹壳红", "金驼", "燕颔红", "淡可可棕", "晨曦红", "玉粉红", "野蔷薇红", "藕荷", "长石灰", "中红灰", "火泥棕", "绀红", "莓酱红", "丁香棕", "淡玫瑰灰", "瓜瓤红", "淡藏花红", "筍皮棕", "润红", "龙睛鱼红", "淡土黄", "珠母灰", "芙蓉红", "落霞红", "法螺红", "草珠红", "咖啡", "中灰驼", "椰壳棕", "蟹蝥红", "淡豆沙", "淡桃红", "淡铁灰", "石板灰", "淡栗棕", "银朱", "草莓红", "洋水仙红", "朱红", "榴花红", "柿红", "可可棕", "淡罂粟红", "大红", "柞叶棕", "蜻蜓红", "橡树棕", "颊红", "桃红", "火岩棕", "淡藤萝紫", "赭石", "铁水红", "胭脂红", "极光红", "红汞红", "萝卜红", "曲红",
    "谷鞘红", "苹果红", "桂红", "粉红", "暗驼棕", "夕阳红", "樱桃红", "珊瑚红", "火山棕", "栗棕", "鹤顶红", "舌红", "鹅血石红", "酱棕", "鱼鳃红", "芦穗灰", "丽春红", "覆盆子红", "海报灰", "豆沙", "榴子红", "秋海棠红", "无花果红", "淡绯", "玫瑰灰", "淡菽红", "枸枢红", "貂紫", "撫子", "紅梅", "蘇芳", "退紅", "一斥染", "桑染", "桃", "苺", "薄紅", "今様", "中紅", "桜", "梅鼠", "韓紅花", "燕脂", "紅", "鴇", "長春", "深緋", "桜鼠", "甚三紅", "小豆", "蘇芳香", "赤紅", "真朱", "灰桜", "栗梅", "海老茶", "銀朱", "黒鳶", "紅鳶", "曙", "紅樺", "水がき", "珊瑚朱", "紅檜皮", "猩猩緋", "鉛丹", "芝翫茶", "檜皮", "柿渋", "緋", "鳶", "紅緋", "栗皮茶", "弁柄", "照柿", "江戸茶", "洗朱", "百塩茶", "唐茶", "ときがら茶", "黄丹", "纁", "遠州茶", "樺茶", "焦茶", "赤香", "雀茶", "宍", "宗伝唐茶", "樺", "深支子", "胡桃", "代赭",
    "洗柿", "黄櫨染", "赤朽葉", "礪茶", "赤白橡", "煎茶", "萱草", "洒落柿", "紅鬱金", "梅染", "枇杷茶", "丁子茶", "憲法染", "琥珀", "薄柿", "伽羅", "丁子染", "柴染", "朽葉", "金茶", "狐", "煤竹", "薄香", "砥粉", "銀煤竹", "黄土", "白茶", "媚茶", "黄唐茶", "山吹", "山吹茶", "櫨染", "桑茶", "玉子", "白橡", "黄橡", "玉蜀黍", "花葉", "生壁", "鳥の子", "浅黄", "黄朽葉", "梔子", "籐黄", "鬱金", "芥子", "肥後煤竹", "利休白茶", "灰汁", "利休茶", "路考茶", "菜種油", "鶯茶", "黄海松茶", "海松茶", "刈安", "菜の花", "黄蘗", "蒸栗", "青朽葉", "女郎花", "鶸茶", "鶸", "鶯", "柳茶", "苔", "麹塵", "璃寛茶", "藍媚茶", "海松", "千歳茶", "梅幸茶", "鶸萌黄", "柳染", "裏柳", "岩井茶", "萌黄", "苗", "柳煤竹", "松葉", "青丹", "薄青", "柳鼠", "常磐", "若竹", "千歳緑", "緑", "白緑", "老竹", "木賊", "御納戸茶", "緑青", "錆青磁",
    "青竹", "ビロード", "虫襖", "藍海松茶", "沈香茶", "青緑", "青磁", "鉄", "水浅葱", "青碧", "錆鉄御納戸", "高麗納戸", "白群", "御召茶", "瓶覗", "深川鼠", "錆浅葱", "水", "浅葱", "御納戸", "藍", "新橋", "錆御納戸", "鉄御納戸", "花浅葱", "藍鼠", "舛花", "空", "熨斗目花", "千草", "御召御納戸", "縹", "勿忘草", "群青", "露草", "黒橡", "紺", "褐", "瑠璃", "瑠璃紺", "紅碧", "藤鼠", "鉄紺", "紺青", "紅掛花", "紺桔梗", "藤", "二藍", "楝", "藤紫", "桔梗", "紫苑", "滅紫", "薄", "半", "江戸紫", "紫紺", "深紫", "菫", "紫", "菖蒲", "藤煤竹", "紅藤", "黒紅", "茄子紺", "葡萄鼠", "鳩羽鼠", "杜若", "蒲葡", "牡丹", "梅紫", "似紫", "躑躅", "紫鳶", "白練", "胡粉", "白鼠", "銀鼠", "鉛", "灰", "素鼠", "利休鼠", "鈍", "青鈍", "溝鼠", "紅消鼠", "藍墨茶", "檳榔子染", "消炭", "墨", "黒", "呂", "乳白", "杏仁黄", "茉莉黄", "麦秆黄",
    "油菜花黄", "佛手黄", "篾黄", "葵扇黄", "柠檬黄", "金瓜黄", "藤黄", "酪黄", "香水玫瑰黄", "淡密黄", "大豆黄", "素馨黄", "向日葵黄", "雅梨黄", "黄连黄", "金盏黄", "蛋壳黄", "肉色", "鹅掌黄", "鸡蛋黄", "鼬黄", "榴萼黄", "淡橘橙", "枇杷黄", "橙皮黄", "北瓜黄", "杏黄", "雄黄", "万寿菊黄", "菊蕾白", "秋葵黄", "硫华黄", "柚黄", "芒果黄", "蒿黄", "姜黄", "香蕉黄", "草黄", "新禾绿", "月灰", "淡灰绿", "草灰绿", "苔绿", "碧螺春绿", "燕羽灰", "蟹壳灰", "潭水绿", "橄榄绿", "蚌肉白", "豆汁黄", "淡茧黄", "乳鸭黄", "荔肉白", "象牙黄", "炒米黄", "鹦鹉冠黄", "木瓜黄", "浅烙黄", "莲子白", "谷黄", "栀子黄", "芥黄", "银鼠灰", "尘灰", "枯绿", "鲛青", "粽叶绿", "灰绿", "鹤灰", "淡松烟", "暗海水绿", "棕榈绿", "米色", "淡肉色", "麦芽糖黄", "琥珀黄", "甘草黄", "初熟杏黄", "浅驼色", "沙石黄", "虎皮黄", "土黄", "百灵鸟灰", "山鸡黄",
    "龟背黄", "苍黄", "莱阳梨黄", "蜴蜊绿", "松鼠灰", "橄榄灰", "蟹壳绿", "古铜绿", "焦茶绿", "粉白", "落英淡粉", "瓜瓤粉", "蜜黄", "金叶黄", "金莺黄", "鹿角棕", "凋叶棕", "玳瑁黄", "软木黄", "风帆黄", "桂皮淡棕", "猴毛灰", "山鸡褐", "驼色", "茶褐", "古铜褐", "荷花白", "玫瑰粉", "橘橙", "美人焦橙", "润红", "淡桃红", "海螺橙", "桃红", "颊红", "淡罂粟红", "晨曦红", "蟹壳红", "金莲花橙", "草莓红", "龙睛鱼红", "蜻蜓红", "大红", "柿红", "榴花红", "银朱", "朱红", "鲑鱼红", "金黄", "鹿皮褐", "醉瓜肉", "麂棕", "淡银灰", "淡赭", "槟榔综", "银灰", "海鸥灰", "淡咖啡", "岩石棕", "芒果棕", "石板灰", "珠母灰", "丁香棕", "咖啡", "筍皮棕", "燕颔红", "玉粉红", "金驼", "铁棕", "蛛网灰", "淡可可棕", "中红灰", "淡土黄", "淡豆沙", "椰壳棕", "淡铁灰", "中灰驼", "淡栗棕", "可可棕", "柞叶棕", "野蔷薇红", "菠萝红", "藕荷", "陶瓷红",
    "晓灰", "余烬红", "火砖红", "火泥棕", "绀红", "橡树棕", "海报灰", "玫瑰灰", "火山棕", "豆沙", "淡米粉", "初桃粉红", "介壳淡粉红", "淡藏花红", "瓜瓤红", "芙蓉红", "莓酱红", "法螺红", "落霞红", "淡玫瑰灰", "蟹蝥红", "火岩棕", "赭石", "暗驼棕", "酱棕", "栗棕", "洋水仙红", "谷鞘红", "苹果红", "铁水红", "桂红", "极光红", "粉红", "舌红", "曲红", "红汞红", "淡绯", "无花果红", "榴子红", "胭脂红", "合欢红", "春梅红", "香叶红", "珊瑚红", "萝卜红", "淡茜红", "艳红", "淡菽红", "鱼鳃红", "樱桃红", "淡蕊香红", "石竹红", "草茉莉红", "茶花红", "枸枢红", "秋海棠红", "丽春红", "夕阳红", "鹤顶红", "鹅血石红", "覆盆子红", "貂紫", "暗玉紫", "栗紫", "葡萄酱紫", "牡丹粉红", "山茶红", "海棠红", "玉红", "高粱红", "满江红", "枣红", "葡萄紫", "酱紫", "淡曙红", "唐菖蒲红", "鹅冠红", "莓红", "枫叶红", "苋菜红", "烟红", "暗紫苑红",
    "殷红", "猪肝紫", "金鱼紫", "草珠红", "淡绛红", "品红", "凤仙花红", "粉团花红", "夹竹桃红", "榲桲舡", "姜红", "莲瓣红", "水红", "报春红", "月季红", "豇豆红", "霞光红", "松叶牡丹红", "喜蛋红", "鼠鼻红", "尖晶玉红", "山黎豆红", "锦葵红", "鼠背灰", "甘蔗紫", "石竹紫", "苍蝇灰", "卵石紫", "李紫", "茄皮紫", "吊钟花红", "兔眼红", "紫荆红", "菜头紫", "鹞冠紫", "葡萄酒红", "磨石紫", "檀紫", "火鹅紫", "墨紫", "晶红", "扁豆花红", "白芨红", "嫩菱红", "菠根红", "酢酱草红", "洋葱紫", "海象紫", "绀紫", "古铜紫", "石蕊红", "芍药耕红", "藏花红", "初荷红", "马鞭草紫", "丁香淡紫", "丹紫红", "玫瑰红", "淡牵牛紫", "凤信紫", "萝兰紫", "玫瑰紫", "藤萝紫", "槿紫", "蕈紫", "桔梗紫", "魏紫", "芝兰紫", "菱锰红", "龙须红", "蓟粉红", "电气石红", "樱草紫", "芦穗灰", "隐红灰", "苋菜紫", "芦灰", "暮云灰", "斑鸠灰", "淡藤萝紫", "淡青紫",
    "青蛤壳紫", "豆蔻紫", "扁豆紫", "芥花紫", "青莲", "芓紫", "葛巾紫", "牵牛紫", "紫灰", "龙睛鱼紫", "荸荠紫", "古鼎灰", "鸟梅紫", "深牵牛紫", "银白", "芡食白", "远山紫", "淡蓝紫", "山梗紫", "螺甸紫", "玛瑙灰", "野菊紫", "满天星紫", "锌灰", "野葡萄紫", "剑锋紫", "龙葵紫", "暗龙胆紫", "晶石紫", "暗蓝紫", "景泰蓝", "尼罗蓝", "远天蓝", "星蓝", "羽扇豆蓝", "花青", "睛蓝", "虹蓝", "湖水蓝", "秋波蓝", "涧石蓝", "潮蓝", "群青", "霁青", "碧青", "宝石蓝", "天蓝", "柏林蓝", "海青", "钴蓝", "鸢尾蓝", "牵牛花蓝", "飞燕草蓝", "品蓝", "银鱼白", "安安蓝", "鱼尾灰", "鲸鱼灰", "海参灰", "沙鱼灰", "钢蓝", "云水蓝", "晴山蓝", "靛青", "大理石灰", "海涛蓝", "蝶翅蓝", "海军蓝", "水牛灰", "牛角灰", "燕颔蓝", "云峰白", "井天蓝", "云山蓝", "釉蓝", "鸥蓝", "搪磁蓝", "月影白", "星灰", "淡蓝灰", "鷃蓝", "嫩灰", "战舰灰", "瓦罐灰",
    "青灰", "鸽蓝", "钢青", "暗蓝", "月白", "海天蓝", "清水蓝", "瀑布蓝", "蔚蓝", "孔雀蓝", "甸子蓝", "石绿", "竹篁绿", "粉绿", "美蝶绿", "毛绿", "蔻梢绿", "麦苗绿", "蛙绿", "铜绿", "竹绿", "蓝绿", "穹灰", "翠蓝", "胆矾蓝", "樫鸟蓝", "闪蓝", "冰山蓝", "虾壳青", "晚波蓝", "蜻蜓蓝", "玉鈫蓝", "垩灰", "夏云灰", "苍蓝", "黄昏灰", "灰蓝", "深灰蓝", "玉簪绿", "青矾绿", "草原远绿", "梧枝绿", "浪花绿", "海王绿", "亚丁绿", "镍灰", "明灰", "淡绿灰", "飞泉绿", "狼烟灰", "绿灰", "苍绿", "深海绿", "长石灰", "苷蓝绿", "莽丛绿", "淡翠绿", "明绿", "田园绿", "翠绿", "淡绿", "葱绿", "孔雀绿", "艾绿", "蟾绿", "宫殿绿", "松霜绿", "蛋白石绿", "薄荷绿", "瓦松绿", "荷叶绿", "田螺绿", "白屈菜绿", "河豚灰", "蒽油绿", "槲寄生绿", "云杉绿", "嫩菊绿", "艾背绿", "嘉陵水绿", "玉髓绿", "鲜绿", "宝石绿", "海沬绿", "姚黄", "橄榄石绿",
    "水绿", "芦苇绿", "槐花黄绿", "苹果绿", "芽绿", "蝶黄", "橄榄黄绿", "鹦鹉绿", "油绿", "象牙白", "汉白玉", "雪白", "鱼肚白", "珍珠灰", "浅灰", "铅灰", "中灰", "瓦灰", "夜灰", "雁灰", "深灰", "绾", "檀", "栗色", "玄", "胭脂", "殷红", "枣红", "赤", "绯红", "赫赤", "樱桃红", "茜色", "海棠红", "酡红", "妃色", "嫣红", "品红", "石榴红", "银红", "彤", "桃红", "酡颜", "洋红", "大红", "火红", "炎", "朱红", "丹", "粉红", "藕荷", "藕", "水红", "鱼肚白", "褐色", "棕黑", "赭色", "棕红", "赭", "驼色", "棕色", "茶色", "琥珀", "黄栌", "橙色", "橘红", "橘黄", "杏红", "橙黄", "杏黄", "姜黄", "黧", "黎", "棕绿", "秋色", "苍黄", "乌金", "棕黄", "昏黄", "枯黄", "秋香色", "金", "牙", "缃色", "赤金", "鸭黄", "鹅黄", "缟", "象牙白", "竹青", "黯", "黛绿", "松花绿", "绿沈", "深绿", "青葱", "铜绿", "苍翠", "松柏绿", "葱青",
    "油绿", "绿", "草绿", "豆青", "豆绿", "葱绿", "葱黄", "柳绿", "嫩绿", "柳黄", "松花", "樱草色", "水", "青碧", "碧", "石青", "青翠", "青", "碧绿", "玉", "翡翠", "缥", "碧蓝", "湖绿", "艾绿", "青白", "水绿", "鸭卵青", "素", "荼白", "藏蓝", "宝蓝", "绀青", "藏青", "靛蓝", "靛青", "群青", "蓝", "湖蓝", "蔚蓝", "月白", "水蓝", "莹白", "雪白", "黛", "紫檀", "紫棠", "黛紫", "绛紫", "紫酱", "酱紫", "黝", "青莲", "紫", "雪青", "丁香", "黑", "漆黑", "象牙黑", "乌黑", "玄青", "缁", "黝黑", "鸦青", "黛蓝", "苍黑", "墨", "灰", "苍", "墨灰", "苍青", "蓝灰", "老银", "蟹壳青", "苍白", "淡青", "银白", "霜", "铅白", "精白"
];
var rgb_ys = [
    "5C2223", "EEA2A4", "5A191B", "F07C82", "5A1216", "ED5A65", "C04851", "EE3F4D", "C02C38", "A7535A", "E3B4B8", "F0A1A8", "F1939C", "A61B29", "894E54", "C45A65", "D11A2D", "C21F30", "DE1C31", "7C1823", "541E24", "4C1F24", "82202B", "82111F", "EF475D", "4D1018", "ED556A", "7A7374", "F03752", "E6D2D5", "F0C9CF", "EE2746", "2B1216", "EE4863", "E77C8E", "500A16", "C27C88", "73575C", "EE4866", "621624", "CE5777", "CC163A", "F1C4CD", "EEB8C3", "856D72", "2D0C13", "36282B", "BF3553", "EC9BAD", "63071C", "30161C", "EEA6B7", "E9CCD3", "EBA0B3", "4F383E", "ED9DB2", "EC8AA4", "EC7696", "EA7293", "EF82A0", "EC2C64", "EB507E", "EB3C70", "EA517F", "DE7897", "B598A1", "ED2F6A", "C5708B", "33141E", "621D34", "EF3473", "382129", "310F1B", "381924",
    "E16C96", "951C48", "62102E", "E0C8D1", "D13C74", "4B1E2F", "EC4E8A", "DE3F7C", "A8456B", "CE5E8A", "461629", "EE2C79", "EF498B", "EDE3E7", "EC2D7A", "482936", "440E25", "D2568C", "E9D7DF", "D2357D", "36292F", "D276A3", "C06F98", "CC5595", "C35691", "BA2F7B", "9B1E64", "5D3F51", "4E2A40", "BC84A8", "C08EAF", "411C35", "AD6598", "A35C8F", "681752", "894276", "7E2065", "8B2671", "983680", "C8ADC4", "1C0D1A", "7E1671", "1E131D", "813C85", "D1C2D3", "3E3841", "815C94", "806D9E", "E2E1E4", "322F3B", "8076A3", "35333C", "22202E", "131124", "302F4B", "525288", "2F2F35", "CCCCD6", "74759B", "1F2040", "2E317C", "A7A8BD", "61649F", "2D2E36", "5E616D", "47484C", "0F1423", "131824", "475164", "2B333E", "1C2938", "101F30", "142334", "15559A", "0F59A4",
    "1661AB", "3170A7", "346C9C", "2775B6", "2B73AF", "2474B5", "4E7CA1", "2376B7", "144A74", "93B5CF", "2177B8", "126BAE", "1772B4", "BACCD9", "619AC3", "495C69", "8FB2C9", "5698C3", "11659A", "2983BB", "1677B3", "C4CBCF", "1177B0", "2486B9", "5E7987", "74787A", "CDD1D3", "1781B5", "66A9C9", "D0DFE6", "2F90B9", "8ABCD1", "C3D7DF", "158BB8", "D8E3E7", "B2BBBE", "1A94BC", "5CB3CC", "134857", "132C33", "21373D", "B0D5DF", "22A2C3", "474B4C", "63BBD0", "126E82", "0F95B0", "1491A8", "C7D2D4", "1E9EB3", "3B818C", "0EB0C9", "29B7CB", "51C4D3", "7CABB1", "10AEC2", "648E93", "93D5DC", "617172", "C6E6E8", "869D9D", "57C3C2", "C4D7D6", "12AA9C", "737C7B", "12A182", "1BA784", "428675", "C0C4C3", "248067", "1A3B32", "314A43", "2C9678", "223E36", "497568",
    "141E1B", "69A794", "2BAE85", "9ABEAF", "45B787", "92B3A5", "1F2623", "83CBAC", "70887D", "55BB8A", "20A162", "40A070", "1A6840", "61AC85", "68B88E", "A4CAB6", "3C9566", "5DBE8A", "207F4C", "EEF7F2", "579572", "B9DEC9", "229453", "20894D", "15231B", "66C18C", "A4ACA7", "8A988E", "9ECCAB", "83A78D", "485B4D", "5D655F", "6E8B74", "2B312C", "C6DFC8", "41B349", "43B244", "253D24", "41AE3C", "ADD5A2", "5E665B", "8CC269", "5BAE23", "DFECD5", "CAD3C3", "9FA39A", "B2CF87", "96C24E", "F0F5E5", "B7D07A", "D0DEAA", "373834", "BACF65", "E2E7BF", "BEC936", "D2D97A", "E2D849", "FFFEF8", "5E5314", "FFFEF9", "AD9E5F", "FED71A", "F9F4DC", "E4BF11", "D2B116", "FBDA41", "EED045", "F1CA17", "D2B42C", "F2CE2B", "E2C027", "645822", "FCD217", "F8DF70", "DFC243",
    "F8DF72", "FFD111", "DDC871", "FFFEFA", "867018", "887322", "FCD337", "8E804B", "FECC11", "FCCB16", "FFC90C", "B7AE8F", "F8D86A", "FBCD31", "FCC307", "E9DDB6", "FCC515", "F7E8AA", "E8B004", "F9C116", "F9D770", "FBC82F", "F1F0ED", "5B4913", "F6C430", "B78D12", "F9BD10", "F9D367", "D9A40E", "EBB10D", "584717", "F7DE98", "F9F1DB", "F4CE69", "FEBA07", "8A6913", "876818", "B6A476", "FCB70A", "F0D695", "87723E", "F8E8C1", "D6A01D", "F7DA94", "EAAD1A", "FBB612", "B5AA90", "F7F4ED", "F8BC31", "B78B26", "E5D3AA", "695E45", "E5B751", "F3BF4C", "685E48", "FBB929", "F9D27D", "E2C17C", "B4A992", "F6DEAD", "F2E6CE", "F8E0B0", "393733", "835E1D", "F8F4ED", "FCA104", "815F25", "FCA106", "FFA60F", "806332", "FBF2E3", "FBA414", "E4DFD7", "826B48", "DAD4CB",
    "BBB5AC", "BBB5AC", "FF9900", "FBB957", "DC9123", "C09351", "F4A83A", "F7C173", "E7A23F", "533C1B", "F9E8D0", "DE9E44", "F9CB8B", "F9A633", "DAA45A", "553B18", "513C20", "986524", "97846C", "E3BD8D", "4D4030", "FB8B05", "F8C387", "F28E16", "503E2A", "4A4035", "CFCCC9", "C1B2A3", "867E76", "847C74", "FC8C23", "FBECDE", "4F4032", "FBEEE2", "81776E", "9A8878", "5D3D21", "66462A", "918072", "D99156", "C1651A", "D4C4B7", "BE7E4A", "5C3719", "DE7622", "DB8540", "80766E", "F09C5A", "F97D1C", "F26B1F", "F8B37F", "FA7E23", "F9E9CD", "B7A091", "945833", "F0945D", "964D22", "954416", "E16723", "FC7930", "CF7543", "F86B1D", "CD6227", "F6DCCE", "D85916", "F7CFBA", "F27635", "E46828", "FC6315", "B7511D", "EA8958", "E8B49A", "FB9968", "EDC3AE", "363433",
    "8B614D", "AA6A4C", "A6522C", "FA5D19", "71361D", "B89485", "F68C60", "F6AD8F", "732E12", "F7CDBC", "EF632B", "8C4B31", "64483D", "F9723D", "CF4813", "EE8055", "F8EBE6", "753117", "603D30", "883A1E", "B14B28", "873D24", "F6CEC1", "5B423A", "624941", "673424", "F43E06", "EF6F48", "F4C7BA", "ED5126", "F34718", "F2481B", "652B1C", "EEA08C", "F04B22", "692A1B", "F1441D", "773D31", "EEAA9C", "F0ADA0", "863020", "F2E7E5", "862617", "F5391C", "F03F24", "F33B1F", "F23E23", "F13C22", "F05A46", "F17666", "F15642", "F25A47", "F2B9B2", "592620", "DE2A18", "ED3321", "F04A3A", "482522", "5C1E19", "D42517", "F19790", "AB372F", "5A1F1B", "ED3B2F", "BDAEAD", "EB261A", "AC1F18", "483332", "481E1C", "F1908C", "EC2B24", "EFAFAD", "F2CAC9", "4B2E2B", "ED4845", "ED3333", "5D3131",
    "DC9FB4", "E16B8C", "8E354A", "F8C3CD", "F4A7B9", "64363C", "F596AA", "B5495B", "E87A90", "D05A6E", "DB4D6D", "FEDFE1", "9E7A7A", "D0104C", "9F353A", "CB1B45", "EEA9A9", "BF6766", "86473F", "B19693", "EB7A77", "954A45", "A96360", "CB4042", "AB3B3A", "D7C4BB", "904840", "734338", "C73E3A", "554236", "994639", "F19483", "B54434", "B9887D", "F17C67", "884C3A", "E83015", "D75455", "B55D4C", "854836", "A35E47", "CC543A", "724832", "F75C2F", "6A4028", "9A5034", "C46243", "AF5F3C", "FB966E", "724938", "B47157", "DB8E71", "F05E1C", "ED784A", "CA7853", "B35C37", "563F2E", "E3916E", "8F5A3C", "F0A986", "A0674B", "C1693C", "FB9966", "947A6D", "A36336", "E79460", "7D532C", "C78550", "985F2A", "E1A679", "855B32", "FC9F4D", "FFBA84", "E98B2A", "E9A368", "B17844", "96632E",
    "43341B", "CA7A2C", "ECB88A", "78552B", "B07736", "967249", "E2943B", "C7802D", "9B6E23", "6E552F", "EBB471", "D7B98E", "82663A", "B68E55", "BC9F77", "876633", "C18A26", "FFB11B", "D19826", "DDA52D", "C99833", "F9BF45", "DCB879", "BA9132", "E8B647", "F7C242", "7D6C46", "DAC9A6", "FAD689", "D9AB42", "F6C555", "FFC408", "EFBB24", "CAAD5F", "8D742A", "B4A582", "877F6C", "897D55", "74673E", "A28C37", "6C6024", "867835", "62592C", "E9CD4C", "F7D94C", "FBE251", "D9CD90", "ADA142", "DDD23B", "A5A051", "BEC23F", "6C6A2D", "939650", "838A2D", "B1B479", "616138", "4B4E2A", "5B622E", "4D5139", "89916B", "90B44B", "91AD70", "B5CAA0", "646A58", "7BA23F", "86C166", "4A593D", "42602D", "516E41", "91B493", "808F7C", "1B813E", "5DAC81", "36563C", "227D51", "A8D8B9", "6A8372",
    "2D6D4B", "465D4C", "24936E", "86A697", "00896C", "096148", "20604F", "0F4C3A", "4F726C", "00AA90", "69B0AC", "26453D", "66BAB7", "268785", "405B55", "305A56", "78C2C4", "376B6D", "A5DEE4", "77969A", "6699A1", "81C7D4", "33A6B8", "0C4842", "0D5661", "0089A7", "336774", "255359", "1E88A8", "566C73", "577C8A", "58B2DC", "2B5F75", "3A8FB7", "2E5C6E", "006284", "7DB9DE", "51A8DD", "2EA9DF", "0B1013", "0F2540", "08192D", "005CAF", "0B346E", "7B90D2", "6E75A4", "261E47", "113285", "4E4F97", "211E55", "8B81C3", "70649A", "9B90C2", "8A6BBE", "6A4C9C", "8F77B5", "533D5B", "B28FCE", "986DB2", "77428D", "3C2F41", "4A225D", "66327C", "592C63", "6F3381", "574C57", "B481BB", "3F2B36", "572A3F", "5E3D50", "72636E", "622954", "6D2E5B", "C1328E", "A8497A", "562E37", "E03C8A",
    "60373E", "FCFAF2", "FFFFFB", "BDC0BA", "91989F", "787878", "828282", "787D7B", "707C74", "656765", "535953", "4F4F48", "52433D", "373C38", "3A3226", "434343", "1C1C1C", "080808", "0C0C0C", "F9F4DC", "F7E8AA", "F8DF72", "F8DF70", "FBDA41", "FED71A", "F7DE98", "F8D86A", "FCD337", "FCD217", "FFD111", "F6DEAD", "F7DA94", "F9D367", "FBCD31", "FCCB16", "FECC11", "FBC82F", "FCC515", "FCC307", "F8C387", "F7C173", "FBB929", "FBB612", "FCB70A", "F9A633", "FBA414", "FCA106", "FCA104", "FC8C23", "F28E16", "FF9900", "FB8B05", "E9DDB6", "EED045", "F2CE2B", "F1CA17", "DDC871", "DFC243", "E2C027", "E4BF11", "D2B42C", "D2B116", "B7AE8F", "AD9E5F", "8E804B", "887322", "867018", "685E48", "695E45", "645822", "5E5314", "F9F1DB", "F8E8C1", "F9D770", "FFC90C", "F2E6CE", "F0D695",
    "F4CE69", "F6C430", "F9C116", "F9BD10", "E5D3AA", "E8B004", "EBB10D", "D9A40E", "B5AA90", "B6A476", "B78D12", "87723E", "876818", "8A6913", "4A4035", "4D4030", "584717", "5B4913", "F9E9CD", "F8E0B0", "F9D27D", "FEBA07", "F3BF4C", "F8BC31", "E2C17C", "E5B751", "EAAD1A", "D6A01D", "B4A992", "B78B26", "826B48", "806332", "815F25", "835E1D", "4F4032", "503E2A", "513C20", "533C1B", "553B18", "FBF2E3", "F9E8D0", "F9CB8B", "FBB957", "FFA60F", "F4A83A", "E3BD8D", "E7A23F", "DAA45A", "DE9E44", "DC9123", "C09351", "97846C", "986524", "66462A", "5D3D21", "5C3719", "FBECDE", "F8B37F", "F97D1C", "FA7E23", "F7CDBC", "F6CEC1", "F0945D", "F0ADA0", "EEAA9C", "EEA08C", "EA8958", "F27635", "F86B1D", "EF6F48", "EF632B", "F1441D", "F04B22", "F2481B", "F34718", "F43E06", "ED5126",
    "F09C5A", "F26B1F", "D99156", "DB8540", "DE7622", "C1B2A3", "BE7E4A", "C1651A", "918072", "9A8878", "945833", "964D22", "954416", "624941", "64483D", "71361D", "753117", "732E12", "FC6315", "E8B49A", "E46828", "D85916", "B7A091", "B7511D", "8B614D", "8C4B31", "873D24", "883A1E", "5B423A", "603D30", "673424", "652B1C", "692A1B", "FB9968", "FC7930", "EDC3AE", "E16723", "D4C4B7", "CF7543", "CD6227", "AA6A4C", "AA6A4C", "773D31", "483332", "4B2E2B", "482522", "481E1C", "FBEEE2", "F6DCCE", "F7CFBA", "F6AD8F", "F68C60", "F9723D", "FA5D19", "EE8055", "CF4813", "B89485", "B14B28", "863020", "862617", "592620", "5A1F1B", "5C1E19", "F4C7BA", "F17666", "F15642", "F5391C", "F25A47", "F33B1F", "F2B9B2", "F19790", "F05A46", "F23E23", "F2CAC9", "EFAFAD", "F1908C", "F03F24",
    "F0A1A8", "F1939C", "F07C82", "F04A3A", "F13C22", "E77C8E", "ED5A65", "ED4845", "ED3B2F", "ED3321", "EE4866", "EE4863", "EF475D", "EE3F4D", "ED3333", "EC2B24", "EB261A", "DE2A18", "D42517", "AB372F", "AC1F18", "5D3131", "5C2223", "5A191B", "5A1216", "EEA2A4", "ED556A", "F03752", "C04851", "C02C38", "A7535A", "7C1823", "4C1F24", "4D1018", "EE2746", "DE1C31", "D11A2D", "C45A65", "C21F30", "A61B29", "894E54", "82202B", "82111F", "541E24", "500A16", "F8EBE6", "EC7696", "EF3473", "EA7293", "EC9BAD", "EB507E", "ED2F6A", "EEB8C3", "EA517F", "F1C4CD", "EC8AA4", "CE5777", "ED9DB2", "EF82A0", "EB3C70", "EC2C64", "E3B4B8", "CC163A", "C27C88", "BF3553", "73575C", "621624", "63071C", "36282B", "30161C", "2B1216", "2D0C13", "2D0C13", "EC4E8A", "EE2C79", "951C48", "621D34",
    "62102E", "382129", "381924", "33141E", "310F1B", "EEA6B7", "EF498B", "DE7897", "DE3F7C", "D13C74", "C5708B", "A8456B", "4B1E2F", "461629", "440E25", "F0C9CF", "EBA0B3", "EC2D7A", "E16C96", "EDE3E7", "E9D7DF", "D2568C", "D2357D", "D1C2D3", "C8ADC4", "C08EAF", "BA2F7B", "8076A3", "806D9E", "815C94", "813C85", "7E1671", "7E1671", "D276A3", "CC5595", "E6D2D5", "C35691", "C06F98", "BDAEAD", "B598A1", "9B1E64", "856D72", "4F383E", "482936", "F2E7E5", "E0C8D1", "BC84A8", "AD6598", "A35C8F", "983680", "8B2671", "894276", "7E2065", "681752", "5D3F51", "4E2A40", "411C35", "36292F", "1E131D", "1C0D1A", "F1F0ED", "E2E1E4", "CCCCD6", "A7A8BD", "61649F", "74759B", "CFCCC9", "525288", "2E317C", "7A7374", "302F4B", "3E3841", "322F3B", "22202E", "1F2040", "131124", "2775B6",
    "2474B5", "D0DFE6", "93B5CF", "619AC3", "2376B7", "5698C3", "2177B8", "B0D5DF", "8ABCD1", "66A9C9", "2983BB", "1772B4", "63BBD0", "5CB3CC", "2486B9", "1677B3", "126BAE", "22A2C3", "1A94BC", "158BB8", "1177B0", "0F59A4", "2B73AF", "CDD1D3", "3170A7", "5E616D", "475164", "FFFEFA", "35333C", "0F1423", "BACCD9", "8FB2C9", "1661AB", "C4CBCF", "15559A", "4E7CA1", "346C9C", "2F2F35", "2D2E36", "131824", "D8E3E7", "C3D7DF", "2F90B9", "1781B5", "C7D2D4", "11659A", "C0C4C3", "B2BBBE", "5E7987", "144A74", "74787A", "495C69", "47484C", "2B333E", "1C2938", "142334", "101F30", "EEF7F2", "C6E6E8", "93D5DC", "51C4D3", "29B7CB", "0EB0C9", "10AEC2", "57C3C2", "B9DEC9", "83CBAC", "12AA9C", "66C18C", "5DBE8A", "55BB8A", "45B787", "2BAE85", "1BA784", "12A182", "C4D7D6", "1E9EB3",
    "0F95B0", "1491A8", "7CABB1", "A4ACA7", "869D9D", "648E93", "3B818C", "126E82", "737C7B", "617172", "134857", "474B4C", "21373D", "132C33", "A4CAB6", "2C9678", "9ABEAF", "69A794", "92B3A5", "248067", "428675", "9FA39A", "8A988E", "70887D", "497568", "5D655F", "314A43", "223E36", "1A3B32", "363433", "1F2623", "141E1B", "C6DFC8", "9ECCAB", "68B88E", "20A162", "61AC85", "40A070", "229453", "CAD3C3", "3C9566", "20894D", "83A78D", "579572", "207F4C", "6E8B74", "1A6840", "5E665B", "485B4D", "393733", "373834", "2B312C", "15231B", "F0F5E5", "DFECD5", "ADD5A2", "41B349", "43B244", "41AE3C", "E2E7BF", "D0DEAA", "B2CF87", "8CC269", "B7D07A", "D2D97A", "BACF65", "96C24E", "E2D849", "BEC936", "5BAE23", "253D24", "FFFEF8", "F8F4ED", "FFFEF9", "F7F4ED", "E4DFD7", "DAD4CB",
    "BBB5AC", "BBB5AC", "867E76", "847C74", "80766E", "81776E", "A98175", "B36D61", "60281E", "622A1D", "9D2933", "BE002F", "C32136", "C3272B", "C83C23", "C91F37", "C93756", "CB3A56", "DB5A6B", "DC3023", "ED5736", "EF7A82", "F00056", "F20C00", "F05654", "F35336", "F47983", "F9906F", "FF0097", "FF2121", "FF2D51", "FF3300", "FF4C00", "FF4E20", "FFB3A7", "E4C6D0", "EDD1D8", "F3D3E7", "FCEFE8", "6E511E", "7C4B00", "955539", "9B4400", "9C5333", "A88462", "B25D25", "B35C44", "CA6924", "E29C45", "FA8C35", "FF7500", "FF8936", "FF8C31", "FFA400", "FFA631", "FFC773", "5D513C", "75664D", "827100", "896C39", "A29B7C", "A78E44", "AE7000", "C89B40", "D3B17D", "D9B611", "EACD76", "EEDEB0", "F0C239", "F2BE45", "FAFF72", "FFF143", "F2ECDE", "FFFBF0", "789262", "41555D", "426666",
    "057748", "0C8918", "009900", "0AA344", "549688", "519A73", "21A675", "0EB83A", "00BC12", "00E500", "40DE5A", "96CE54", "9ED048", "9ED900", "A3D900", "AFDD22", "BDDD22", "C9DD22", "BCE672", "EAFF56", "88ADA6", "48C0A3", "1BD1A5", "7BCFA6", "00E079", "00E09E", "2ADD9C", "2EDFA3", "3DE1AD", "7FECAD", "3EEDE7", "25F8CD", "A4E2C6", "C0EBD7", "D4F2E7", "E0EEE8", "E0F0E9", "F3F9F1", "3B2E7E", "4B5CC4", "003371", "2E4E7E", "065279", "177CB0", "4C8DAE", "44CEF6", "30DFF3", "70F3FF", "D6ECF0", "D2F0F4", "E3F9FD", "F0FCFF", "4A4266", "4C211B", "56004F", "574266", "8C4356", "815463", "815476", "6B6882", "801DAE", "8D4BBB", "B0A4E3", "CCA4E3", "000000", "161823", "312520", "392F41", "3D3B4F", "493131", "665757", "424C50", "425066", "395260", "50616D", "808080", "75878A",
    "758A99", "7397AB", "A1AFC9", "BACAC6", "BBCDC5", "D1D9E0", "D3E0F3", "E9E7EF", "E9F1F6", "F0F0F4", "FFFFFF"
];

function RGBToHex(rgb) {
    if (!rgb) rgb = 'rgb(237,237,237)';
    var regexp = /[0-9]{1,3}/g;
    var res = rgb.match(regexp);
    var hexRes = '#';
    var hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
    var hexArr = [];

    for (let i = 0; i < res.length; i++) {
        var num = parseInt(res[i]);
        var leftIndex = (num / 16) >> 0;
        var rightIndex = num % 16;
        hexArr.push(hex[leftIndex]);
        hexArr.push(hex[rightIndex]);
    }

    return hexRes + hexArr.join('');
}


for (var i = 0; i < rgb_name.length; i++) {
    var divs = document.createElement('div');

    divs.className = 'grb_j_s';
    divs.innerHTML = '<div class="grb_j_grb" style="background-color: #' + rgb_ys[i] + ';"></div><div class="grb_j_grb2" style="background-color: #' + rgb_ys[i] + ';"></div><div class="grb_j_grbname">#' + rgb_ys[i] + '</div><div class="grb_j_name">' + rgb_name[i] + '</div>';
    divs.addEventListener('click', function(e) {
        if (rgbj_y_fxk_zt_sf == 1) {
            localStorage.zi_ti_color = RGBToHex(this.querySelector('.grb_j_grb').style.backgroundColor);
            input_color1.value = RGBToHex(this.querySelector('.grb_j_grb').style.backgroundColor);
        }
        if (rgbj_yy_fxk_zzt_sf == 1) {
            localStorage.zi_ti_click_color = RGBToHex(this.querySelector('.grb_j_grb').style.backgroundColor);
            input_color2.value = RGBToHex(this.querySelector('.grb_j_grb').style.backgroundColor);
        }
        if (rgbj_yy_fxk_nrbj_sf == 1) {
            localStorage.bei_jing_color = RGBToHex(this.querySelector('.grb_j_grb').style.backgroundColor);
            input_color3.value = RGBToHex(this.querySelector('.grb_j_grb').style.backgroundColor);
            bei_jing_color_s();
        }
        if (rgbj_yy_fxk_bk_sf == 1) {
            localStorage.bei_jing_kuan_color = RGBToHex(this.querySelector('.grb_j_grb').style.backgroundColor);
            input_color4.value = RGBToHex(this.querySelector('.grb_j_grb').style.backgroundColor);
            bj_kuan_hs();
        }
        if (rgbj_yy_fxk_bz_sf == 1) {
            console.log(this.querySelector('.grb_j_grb').style.backgroundColor);

            console.log(RGBToHex(this.querySelector('.grb_j_grb').style.backgroundColor));

            document.documentElement.style.backgroundColor = RGBToHex(this.querySelector('.grb_j_grb').style.backgroundColor);
            document.documentElement.style.backgroundImage = '';
            localStorage.bi_zhi = '';
            localStorage.bi_zhi_ys = RGBToHex(this.querySelector('.grb_j_grb').style.backgroundColor);
        }

        if (rgbj_y_fxk_zt_sf == 1 || rgbj_yy_fxk_zzt_sf == 1) {
            zi_ti_color_s();
        }

    });

    grb_j_max.appendChild(divs);
}

//重置
var qian_bi_zhi = localStorage.bi_zhi;
var qian_bi_zhi_ys = localStorage.bi_zhi_ys;
var shezhi_rgb_qbcz = document.querySelector('.shezhi_rgb_qbcz');
shezhi_rgb_qbcz.addEventListener('click', function(e) {
    localStorage.bi_zhi = qian_bi_zhi;
    localStorage.bi_zhi_ys = qian_bi_zhi_ys;
    if (qian_bi_zhi_ys !== '') {
        document.documentElement.style.backgroundColor = qian_bi_zhi_ys;
        document.documentElement.style.backgroundImage = '';
    } else {
        document.documentElement.style.backgroundImage = ' url(' + qian_bi_zhi + ')';
        document.documentElement.style.backgroundColor = '';
    }
    ztsz_chongzhi.click();
    bjsz_chongzhi.click();

    if (rgbj_y_fxk_zt.innerHTML == '✔') {
        rgbj_y_fxk_zt.innerHTML = '';
        rgbj_y_fxk_zt_sf = 0;
    }
    if (rgbj_yy_fxk_zzt.innerHTML == '✔') {
        rgbj_yy_fxk_zzt.innerHTML = '';
        rgbj_yy_fxk_zzt_sf = 0;
    }
    if (rgbj_yy_fxk_nrbj.innerHTML == '✔') {
        rgbj_yy_fxk_nrbj.innerHTML = '';
        rgbj_yy_fxk_nrbj_sf = 0;
    }
    if (rgbj_yy_fxk_bk.innerHTML == '✔') {
        rgbj_yy_fxk_bk.innerHTML = '';
        rgbj_yy_fxk_bk_sf = 0;
    }
    if (rgbj_yy_fxk_bz.innerHTML == '✔') {
        rgbj_yy_fxk_bz.innerHTML = '';
        rgbj_yy_fxk_bz_sf = 0;
    }
});






function mrrd_Ahs() {
    var mrrd_top_A = 0;
    var mrrd_top = JSON.parse(localStorage.mrrd_top);
    for (var i = 0; i < mrrd_top.length; i++) {
        mrrd_top_A += mrrd_top[i];
    }
    return mrrd_top_A;
}

// 每日热点API
// function ssrd(链接, 来源名字, 循环对象, 循环对象2, 去除前几个字符/无用字符) 
function ssrd(url_s, num, dx, dx2, jie_qu) {
    fetch(url_s)
        .then(response => {
            if (!response.ok) {
                Sku_tctx('网络响应不正常 !');
                throw new Error('网络响应不正常 ' + response.statusText);
            }
            return response.text();
        })
        .then(data => {
            // 处理返回的数据
            var mrrd = JSON.parse(localStorage.mrrd);
            // 截取字符串
            if (jie_qu) {
                data = data.substring(jie_qu, data.length);
            }
            // 格式化数据
            var mrrd_s_dx = JSON.parse(data);
            // 提取所有热点到一个新数组
            if (dx2) {
                var names = mrrd_s_dx[`${dx}`].map(item => item[`${dx2}`]);
            } else if (dx) {
                var names = mrrd_s_dx[`${dx}`].map(item => item);
            }
            // 提取不重复内容
            var names2 = [];
            for (var i = 0; i < names.length; i++) {
                if (mrrd.indexOf(names[i]) == -1 && names2.indexOf(names[i]) == -1) {
                    names2.push(names[i]);
                }
            }

            if (names2.length !== 0) {
                // 拼接热点
                var mrrd2 = mrrd.concat(names2);
                localStorage.mrrd = JSON.stringify(mrrd2);
                // 拼接热点数
                var mrrd_top = JSON.parse(localStorage.mrrd_top);
                mrrd_top.push(names2.length);
                localStorage.mrrd_top = JSON.stringify(mrrd_top);
                // 拼接热点来源
                var mrrd_name = JSON.parse(localStorage.mrrd_name);
                mrrd_name.push(num);
                localStorage.mrrd_name = JSON.stringify(mrrd_name);
                // 控制台显示
                console.log('抓取成功 ' + names2.length + ' 条 ( ' + num + ' )');
            } else {
                console.log('您的抓取信息为空 ( ' + num + ' )' + '\n' + url_s);
            }

            names2.length == 0 ? mrrd_F++ : mrrd_T++;
            mrrd_zg_2++;
            so_ssk.placeholder = '抓取热点中......... ' + mrrd_zg_2 + '/' + mrrd_zg + ' T:' + mrrd_T + ' F:' + mrrd_F + ' A:' + mrrd_Ahs();

            if (mrrd_zg_2 == mrrd_zg) {
                setTimeout(function() {
                    if (so_ssk.placeholder[0] !== '搜') {
                        so_ssk.placeholder = '搜索引擎';
                    }
                }, 5000);
            }
        })
        .catch(error => {
            mrrd_F++;
            mrrd_zg_2++;
            console.log('您的抓取操作出现了问题 ( ' + num + ' )' + '\n' + url_s);
            so_ssk.placeholder = '抓取热点中......... ' + mrrd_zg_2 + '/' + mrrd_zg + ' T:' + mrrd_T + ' F:' + mrrd_F + ' A:' + mrrd_Ahs();

            if (mrrd_zg_2 == mrrd_zg) {
                setTimeout(function() {
                    if (so_ssk.placeholder[0] !== '搜') {
                        so_ssk.placeholder = '搜索引擎';
                    }
                }, 5000);
            }
        });
}

mrrd_dsq = null;

// 抓取准备
function mrrd_sx() {
    // 防止连续执行5分钟
    var sku_wlzt = document.querySelector('.sku_wlzt');
    if ((((+new Date()) - localStorage.mrrd_sxsj) >= (1000 * 60 * 5) || localStorage.mrrd_sxsj == 0) && drym_max.style.display == 'none' && sku_wlzt.innerText == 'Status:Online') {

        console.log('--------------------------------');
        console.log(new Date());
        localStorage.mrrd_sxsj = +new Date();
        localStorage.mrrd = '[]';
        localStorage.mrrd_top = '[]';
        localStorage.mrrd_name = '[]';

        // input显示正在执行
        so_ssk.placeholder = '抓取热点中.........';

        mrrd_asd = 0;

        // 需要手动更改
        mrrd_zg = 12;

        mrrd_zg_2 = 0;
        mrrd_F = 0;
        mrrd_T = 0;
        mrrd_dsq ? clearInterval(mrrd_dsq) : undefined;
        mrrd_dsq = setInterval(function() {
            mrrd_asd++;

            if (mrrd_asd == 1) {
                mryy_s();
            } else if (mrrd_asd == 2) {
                ssrd('https://api.vvhan.com/api/hotlist/douyinHot', '抖音', 'data', 'title'); //韩小韩Web API
            } else if (mrrd_asd == 3) {
                ssrd('https://api.vvhan.com/api/hotlist/baiduRD', '百度', 'data', 'title'); //韩小韩Web API
            } else if (mrrd_asd == 4) {
                ssrd('https://api.vvhan.com/api/hotlist/wbHot', '微博', 'data', 'title'); //韩小韩Web API
            } else if (mrrd_asd == 5) {
                ssrd('https://api.vvhan.com/api/hotlist/zhihuHot', '知乎', 'data', 'title'); //韩小韩Web API
            } else if (mrrd_asd == 6) {
                ssrd('https://api.vvhan.com/api/hotlist/bili', '哔哩', 'data', 'title'); //韩小韩Web API
            } else if (mrrd_asd == 7) {
                ssrd('https://api.vvhan.com/api/hotlist/toutiao', '头条', 'data', 'title'); //韩小韩Web API
            } else if (mrrd_asd == 8) {
                ssrd('https://api.vvhan.com/api/hotlist/itNews', 'IT之家', 'data', 'title'); //韩小韩Web API
            } else if (mrrd_asd == 9) {
                ssrd('https://api.vvhan.com/api/hotlist/huPu', '虎扑', 'data', 'title'); //韩小韩Web API
            } else if (mrrd_asd == 10) {
                ssrd('https://api.vvhan.com/api/hotlist/36Ke', '36氪', 'data', 'title'); //韩小韩Web API
            } else if (mrrd_asd == 11) {
                ssrd('https://api.vvhan.com/api/hotlist/huXiu', '虎嗅', 'data', 'title'); //韩小韩Web API
            } else if (mrrd_asd == 12) {
                ssrd('https://api.vvhan.com/api/hotlist/woShiPm', 'woShiPm', 'data', 'title'); //韩小韩Web API
            } else if (mrrd_asd == 13) {
                var max_node = document.querySelector('.max_node');
                if (max_node.innerText == 'node!') {
                    $(document).ready(function() {
                        // 使用 $.get() 发起 GET 请求
                        $.get("http://localhost/mrrd", function(data, status) {
                            // data 是从服务器返回的数据
                            var datas;
                            if (data[0] == '[' || data[0] == '{') {
                                datas = JSON.parse(data);
                            } else {
                                datas = data;
                            }
                            const mrrd_top = JSON.parse(localStorage.getItem('mrrd_top'));
                            const xsz = mrrd_top.concat(datas[2]);
                            const mrrd_name = JSON.parse(localStorage.getItem('mrrd_name'));
                            const xsz2 = mrrd_name.concat(datas[0]);
                            const mrrd = JSON.parse(localStorage.getItem('mrrd'));
                            const xsz3 = mrrd.concat(datas[1]);
                            for (var i = 0; i < xsz.length; i++) { //删除0的
                                if (xsz[i] == 0) {
                                    xsz.splice(i, 1);
                                    xsz2.splice(i, 1);
                                }
                            }
                            console.log(xsz, xsz2, xsz3);
                            localStorage.setItem('mrrd_top', JSON.stringify(xsz));
                            localStorage.setItem('mrrd_name', JSON.stringify(xsz2));
                            localStorage.setItem('mrrd', JSON.stringify(xsz3));
                            console.log('node抓取热点成功!');
                        }).fail(function(jqXHR, textStatus, errorThrown) {
                            // 如果请求失败，打印错误信息
                            console.log("请求失败: ", textStatus, errorThrown);
                            console.log('node抓取热点失败!');
                        });
                    });
                }
            } else {
                clearInterval(mrrd_dsq);
            }

        }, 1000);

    } else
    if (((+new Date()) - localStorage.mrrd_sxsj) < (1000 * 60 * 5) && drym_max.style.display == 'none') {
        console.log('热点抓取时间间隔小于5分钟,已放弃抓取\n下次抓取时间:' + ((1000 * 60 * 5) - ((+new Date()) - localStorage.mrrd_sxsj)) / 1000 + '秒后');
    } else if (((+new Date()) - localStorage.mrrd_sxsj) >= (1000 * 60 * 5) && drym_max.style.display == 'block') {
        console.log('热点抓取时为锁屏状态,已放弃抓取');
    }
}

// 开机启动搜索热点
document.addEventListener('DOMContentLoaded', function() {
    // 这里可以放置在DOM内容加载完成后需要执行的脚本
    mrrd_sx();
});
// 定时启动搜索热点
setInterval(function() {
    if (document.visibilityState === 'visible') {
        mrrd_sx();
    }
}, (1000 * 60 * 5) + 1000);
// 返回启动搜索热点
document.addEventListener('visibilitychange', function() {
    if (document.visibilityState === 'visible') {
        mrrd_sx();
    }
});


// 每日一言
var mryy = document.querySelector('.mryy');
mryy.innerText = localStorage.mryy;

function mryy_s() {
    fetch('https://api.vvhan.com/api/ian/rand')
        .then(response => {
            if (!response.ok) {
                Sku_tctx('网络响应不正常 !');
                throw new Error('网络响应不正常 ' + response.statusText);
            }
            return response.text();
        })
        .then(data => {
            console.log('抓取成功 ( 每日一言 )');
            // var data2 = JSON.parse(data);
            var data2 = data;
            //提取精华
            var nr1 = data2;
            // 处理返回的数据
            var mymj = nr1[nr1.length - 1] == '。' ? nr1.substring(0, nr1.length - 1) : nr1;
            mryy.innerText = mymj;
            localStorage.mryy = mymj;
            //添加其他
            // if (data2.data.en !== '') {
            //     mryy.innerText = mymj + ' —— ' + data2.data.en;
            //     localStorage.mryy = mymj + ' —— ' + data2.data.en;
            // }

            mrrd_T++;
            mrrd_zg_2++;
            so_ssk.placeholder = '抓取热点中......... ' + mrrd_zg_2 + '/' + mrrd_zg + ' T:' + mrrd_T + ' F:' + mrrd_F + ' A:' + mrrd_Ahs();
        })
        .catch(error => {
            console.log('您的抓取操作出现了问题 ( 每日一言 )');
            mrrd_F++;
            mrrd_zg_2++;
            so_ssk.placeholder = '抓取热点中......... ' + mrrd_zg_2 + '/' + mrrd_zg + ' T:' + mrrd_T + ' F:' + mrrd_F + ' A:' + mrrd_Ahs();
            // 处理返回的数据
            mryy.innerText = '';
            localStorage.mryy = '';
        });
}





// 搜索关键词
var ss_gjcss_ysq = undefined;

function ss_gjcss(so_ssk_value2) {
    var zhypxuxian = 'true';
    ss_gjcss_ysq ? clearTimeout(ss_gjcss_ysq) : undefined;
    ss_gjcss_ysq = setTimeout(function() {
        if (so_ssk.value !== '' && so_ssk_value2 == so_ssk.value) {
            var tjc_sz_max = [];

            function API_dz_syff(so_ssk_value, gjc, hdhs, ff, ff2, ff3, ff4, ff5, ff6, ff7, ff8) {
                //定义回调函数
                window[hdhs] = {
                        sug: function(json) {
                            var tjc_sz = undefined;
                            try {
                                // 可能产生错误的代码
                                if (ff8) {
                                    tjc_sz = json[`${ff}`][`${ff2}`][`${ff3}`][`${ff4}`][`${ff5}`][`${ff6}`][`${ff7}`][`${ff8}`];
                                } else if (ff7) {
                                    tjc_sz = json[`${ff}`][`${ff2}`][`${ff3}`][`${ff4}`][`${ff5}`][`${ff6}`][`${ff7}`];
                                } else if (ff6) {
                                    tjc_sz = json[`${ff}`][`${ff2}`][`${ff3}`][`${ff4}`][`${ff5}`][`${ff6}`];
                                } else if (ff5) {
                                    tjc_sz = json[`${ff}`][`${ff2}`][`${ff3}`][`${ff4}`][`${ff5}`];
                                } else if (ff4) {
                                    tjc_sz = json[`${ff}`][`${ff2}`][`${ff3}`][`${ff4}`];
                                } else if (ff3) {
                                    tjc_sz = json[`${ff}`][`${ff2}`][`${ff3}`];
                                } else if (ff2) {
                                    tjc_sz = json[`${ff}`][`${ff2}`];
                                } else if (ff) {
                                    tjc_sz = json[`${ff}`];
                                }

                                // 另类数据加工
                                if (hdhs === 'bing') {
                                    var tjc_sz2 = JSON.parse(JSON.stringify(tjc_sz));
                                    tjc_sz = [];
                                    tjc_sz2.forEach(function(asd) {
                                        // 将Txt值添加到txtArray数组中
                                        tjc_sz.push(asd.Txt);
                                    });
                                } else if (hdhs === 'sanliulin') {
                                    var tjc_sz2 = JSON.parse(JSON.stringify(tjc_sz));
                                    tjc_sz = [];
                                    tjc_sz2.forEach(function(asd) {
                                        // 将Txt值添加到txtArray数组中
                                        tjc_sz.push(asd.word);
                                    });
                                } else if (hdhs === 'taobao' || hdhs === 'yitao') {
                                    var tjc_sz2 = JSON.parse(JSON.stringify(tjc_sz));
                                    tjc_sz = [];
                                    tjc_sz2.forEach(function(asd) {
                                        // 将Txt值添加到txtArray数组中
                                        tjc_sz.push(asd[0]);
                                    });
                                }

                                // 判断是否还需要输出
                                if (so_ssk_value == so_ssk.value) {
                                    // 最先一排虚线
                                    if (tjc_sz.length !== 0 && zhypxuxian == 'true') {
                                        var syjl = document.querySelectorAll('.ssbq_s');
                                        if (syjl.length !== 0) {
                                            syjl[syjl.length - 1].style.borderBottom = '2px dashed';
                                        }
                                        zhypxuxian = 'false';
                                    }

                                    // 输出补全
                                    var qrgs = 0;
                                    for (var i = 0; i < tjc_sz.length; i++) {
                                        if (tjc_sz_max.indexOf(tjc_sz[i]) == -1 && tjc_sz[i] !== so_ssk.value) {
                                            qrgs++;
                                            var div = document.createElement('div');
                                            div.className = 'ssbq_s ssbq_s2';
                                            div.innerText = tjc_sz[i];
                                            // 添加点击快速搜索
                                            div.addEventListener('click', function(e) {
                                                so_ssk.value = this.innerText;
                                                so_anniu.click();
                                            });
                                            // 添加点击插入输入框
                                            div.addEventListener('contextmenu', function(e) {
                                                e.stopPropagation();
                                                e.preventDefault();
                                                so_ssk.value = this.innerText;
                                            });
                                            div.style.borderBottom = '1px solid';

                                            ssbqym_min.appendChild(div);
                                        }

                                        if (qrgs == 1000) { break; }
                                    }

                                    // 显示页面
                                    if (qrgs !== 0 && so_ssk_num == 1) {
                                        so_yq_s.style.display = 'none';
                                        ssbqym.style.display = 'block';

                                        WGS_wenbengundon11('.ssbq_s2', 9);
                                    }

                                    // 所有补全
                                    tjc_sz_max = tjc_sz_max.concat(tjc_sz);
                                }
                            } catch (error) {
                                // 这个块会在 try 中有错误抛出时执行
                                console.log('%c' + hdhs + ' 搜索补全API数据整理出错 \n' + gjc, "color: red");
                            }
                        }
                    }
                    //动态添加JS脚本
                var script = document.createElement("script");
                script.src = gjc;
                document.getElementsByTagName("head")[0].appendChild(script);
            }

            API_dz_syff(so_ssk.value, 'https://suggestion.baidu.com/su?wd=' + so_ssk.value, 'baidu', 's');
            API_dz_syff(so_ssk.value, 'https://api.bing.com/qsonhs.aspx?type=cb&cb=window.bing.sug&q=' + so_ssk.value, 'bing', 'AS', 'Results', '0', 'Suggests');
            API_dz_syff(so_ssk.value, 'https://sug.so.360.cn/suggest?encodein=utf-8&encodeout=utf-8&callback=window.sanliulin.sug&format=json&word=' + so_ssk.value, 'sanliulin', 'result');
            API_dz_syff(so_ssk.value, 'https://suggest.taobao.com/sug?code=utf-8&callback=window.taobao.sug&q=' + so_ssk.value, 'taobao', 'result');
            API_dz_syff(so_ssk.value, 'https://suggest.taobao.com/sug?area=etao&code=utf-8&callback=window.yitao.sug&q=' + so_ssk.value, 'yitao', 'result');

        }
    }, 100);
}






// 搜索策略
var shezhi_sscl = document.querySelector('.shezhi_sscl');
var shezhi_sscl_ym = document.querySelector('.shezhi_sscl_ym');
shezhi_sscl.addEventListener('click', function(e) {
    shezhi_min.style.display = 'none';
    shezhi_sscl_ym.style.display = 'block';
});

if (localStorage.sscl == undefined) {
    localStorage.sscl = 1;
}
if (localStorage.sscl_py == undefined) {
    localStorage.sscl_py = 1;
}
// 开始显示
var sscl_xzk = document.querySelectorAll('.sscl_xzk');
if (localStorage.sscl == 0) {
    sscl_xzk[0].innerHTML = '✔';
} else if (localStorage.sscl == 1) {
    sscl_xzk[1].innerHTML = '✔';
} else if (localStorage.sscl == 2) {
    sscl_xzk[2].innerHTML = '✔';
}
var sscl_xzk_py = document.querySelector('.sscl_xzk_py');
if (localStorage.sscl_py == 1) {
    sscl_xzk_py.innerHTML = '✔';
}
// 切换显示
for (var i = 0; i < sscl_xzk.length; i++) {
    sscl_xzk[i].addEventListener('click', function(e) {
        for (var p = 0; p < sscl_xzk.length; p++) {
            sscl_xzk[p].innerHTML = '';
        }
        this.innerHTML = '✔';
        localStorage.sscl = this.getAttribute('data-ssclnum');
    });
}
sscl_xzk_py.addEventListener('click', function(e) {
    if (localStorage.sscl_py == 1) {
        localStorage.sscl_py = 0;
        this.innerHTML = '';
    } else {
        localStorage.sscl_py = 1;
        this.innerHTML = '✔';
    }
});





// 拖拽读取导入信息
shezhi_daoru_ym.addEventListener('dragover', function(e) {
    e.preventDefault();
});
shezhi_daoru_ym.addEventListener('drop', function(e) {
    e.preventDefault();
    var dt = e.dataTransfer;
    var files = dt.files;
    var dx = new FileReader();
    dx.readAsText(files[0]);
    dx.onload = function(e) {
        var wj = e.target.result;
        // 处理信息
        daoru_ym_sc.value = wj;
        daoru_ym_sc_tjzs();
    }
});






// 口令码
var max_root = document.querySelector('.max_root');
var klm_qr = document.querySelector('.klm_qr');
var klm_srk = document.querySelector('.klm_srk');
var shezhi_klm_ym = document.querySelector('.shezhi_klm_ym');
var shezhi_klm = document.querySelector('.shezhi_klm');
shezhi_klm.addEventListener('click', function(e) {
    shezhi_min.style.display = 'none';
    shezhi_klm_ym.style.display = 'block';
    klm_srk.focus();
});
shezhi_klm_ym.addEventListener('click', function(e) {
    klm_srk.focus();
});
klm_qr.addEventListener('click', function(e) {
    if (localStorage.Sku_kfzms == 1) {
        console.log(WGS_zfc_jiemi(klm_srk.value, miyao));
    }

    var klm = WGS_zfc_jiemi(klm_srk.value, miyao);
    if (klm == '嶰兡芵梑嶿' || klm == '惣嶰嶰兡芵梑嶿' || klm == '惣嶰嶰兡芵' || klm == '嶰兡芵' || klm == '˂˟˟˄') {
        localStorage.Sku_kfzms = 1;

        // 关闭永久调试
        Sku_kfzgj_jsq !== null ? clearInterval(Sku_kfzgj_jsq) : undefined;

        max_root.innerHTML = 'root!';

        localStorage.dr_mmdr_drsj = 0;
        location.reload();
    } else if (klm == '參靝嶰兡芵' || klm == '參靝嶰兡芵梑嶿' || klm == '參愹嶰兡芵' || klm == '參愹嶰兡芵梑嶿' || klm == '˞˟˂˟˟˄') {
        localStorage.Sku_kfzms = 0;

        // 关闭永久调试
        Sku_kfzgj_jsq !== null ? clearInterval(Sku_kfzgj_jsq) : undefined;
        // 打开永久调试
        Sku_kfzgj_jsq = setInterval(function() {
            check();
        }, 1000);

        max_root.innerHTML = '';
        Sku_tctx('已关闭 开发者模式!');
    } else if (klm == '懯嗿' || klm == '溈䳵懯嗿' || klm == '靚銰' || klm == '徙氳' || klm == '˃˅˞˘˅ˑ˙') {
        localStorage.Sku_benghuai = 1;
        localStorage.dr_mmdr_drsj = 0;
        setTimeout(function() {
            window.close();
            location.replace('https://cn.bing.com/');
        }, 2000);

        Sku_tctx('网 页 已 崩 溃 !!!!!!!!!!!!!!!!!!!!');
    } else if (klm == '拒宽' || klm == '˘˅˙˖˅') {
        localStorage.Sku_benghuai = 0;
        localStorage.Sku_kfzms = 0;
        localStorage.dr_mmdr_drsj = 0;

        location.reload();
    } else if (klm == '˞˟˔˕') {
        localStorage.Sku_node = 1;
        Sku_tctx('已开启 node!');
    } else if (klm == '˞˟˞˟˔˕') {
        localStorage.Sku_node = 0;
        Sku_tctx('已关闭 node!');
    } else if (klm == 'ˈ˙˗˅ˑ˞') {
        // 提取所有数据
        const getLocalStorage = (key, transform = null) => {
            const data = localStorage[key];
            if (!data) return null;
            const parsed = JSON.parse(data);
            return transform ? transform(parsed) : parsed;
        };
        const processedData = {};
        // 处理日程数据
        processedData.日程数据 = getLocalStorage('sy_djs', data =>
            Object.values(data).map(item => ({ 名字: item[0], 时间: item[2] }))
        );
        // 处理周志数据
        processedData.周志数据 = getLocalStorage('ke_biao');
        // 处理作品名字数据
        processedData.作品名字数据 = getLocalStorage('sy_zpzs_mz');
        // 处理所有链接数据
        processedData.所有链接数据 = getLocalStorage('dhr_ym_dx', data => {
            const links = [];
            Object.values(data).forEach(category => Object.values(category).forEach(link => links.push({ 名字: link[1], 备注: link[2] || '' })));
            return links;
        });
        // 处理任务数据
        processedData.任务数据 = getLocalStorage('liu_yan_dx', data =>
            Object.values(data).map(item => ({ 内容: item[0] }))
        );
        // 处理音乐数据
        processedData.音乐数据 = getLocalStorage('music_cd', data => data[0]); // 歌曲名数组
        // 处理历史搜索记录
        processedData.历史搜索记录 = getLocalStorage('lsjl');
        // 格式化输出内容
        // 格式化输出内容（无换行，双引号加逗号分隔）
        // 创建格式化输出辅助函数
        const formatOutput = (key, data, formatter = null) => {
            if (!data) return null;
            const formattedValue = formatter ? formatter(data) : JSON.stringify(data);
            return formattedValue ? `"${key}：${formattedValue}"` : null;
        };
        const outputItems = [];
        // 处理日程数据
        const scheduleItem = formatOutput('日程数据', processedData.日程数据, data =>
            data.map(item => `名字: ${item.名字}，时间: ${item.时间}`).join('；')
        );
        if (scheduleItem) outputItems.push(scheduleItem);
        // 处理周志数据
        const journalItem = formatOutput('周志数据', processedData.周志数据);
        if (journalItem) outputItems.push(journalItem);
        // 处理作品名字数据
        const workItem = formatOutput('作品名字数据', processedData.作品名字数据);
        if (workItem) outputItems.push(workItem);
        // 处理所有链接数据（不要备注，全部名字逗号分开）
        const linkItem = formatOutput('所有链接数据', processedData.所有链接数据, data =>
            data.map(item => item.名字).join('，')
        );
        if (linkItem) outputItems.push(linkItem);
        // 处理任务数据
        const taskItem = formatOutput('任务数据', processedData.任务数据, data =>
            data.map(item => item.内容).join('；')
        );
        if (taskItem) outputItems.push(taskItem);
        // 处理音乐数据
        const musicItem = formatOutput('音乐数据', processedData.音乐数据);
        if (musicItem) outputItems.push(musicItem);
        // 处理历史搜索记录
        const searchItem = formatOutput('历史搜索记录数据', processedData.历史搜索记录);
        if (searchItem) outputItems.push(searchItem);
        // 合并所有项，用换行符分隔
        const output = outputItems.join('\n\n');
        // 输出到控制台
        console.log(output);
        // 复制到剪贴板
        if (navigator.clipboard) {
            navigator.clipboard.writeText(output)
                .then(() => {
                    Sku_tctx('数据已提取、输出到控制台并复制到剪贴板');
                })
                .catch(() => {
                    Sku_tctx('数据已提取并输出到控制台，但复制到剪贴板失败');
                });
        } else {
            Sku_tctx('数据已提取并输出到控制台，当前环境不支持剪贴板复制');
        }
    } else {
        Sku_tctx('无效口令! 请检查口令码是否正确');
    }
    klm_srk.value = '';
});
// 开始显示root
if (localStorage.Sku_kfzms == 1) { max_root.innerHTML = 'root!'; }
// 开始闪退
Sku_benghuai_jsq = null;
Sku_benghuai_jsq_t = null;
if (localStorage.Sku_benghuai == 1) {
    Sku_benghuai_jsq_t = 1;
    Sku_benghuai_jsq = setInterval(function() {
        window.close();
        location.replace('https://cn.bing.com/');
    }, 500);
}




// 滚动条(滚动页面、滚动条max、滚动条min)
Sku_gundontiao('.bzsz_max', '.bizhi_gundontiao_max', '.bizhi_gundontiao_min');
Sku_gundontiao('.shezhi_ym_max', '.ztfg_gundontiao_max', '.ztfg_gundontiao_min');
Sku_gundontiao('.grb_j_max', '.ctysj_gundontiao_max', '.ctysj_gundontiao_min');
Sku_gundontiao('.daorubendi_max_hd', '.daoru_bendi_gundontiao_max', '.daoru_bendi_gundontiao_min');
Sku_gundontiao('.ssjl_max2', '.lszcb_gundontiao_max', '.lszcb_gundontiao_min');
Sku_gundontiao('.ssjl_max', '.lsssjl_gundontiao_max', '.lsssjl_gundontiao_min');
Sku_gundontiao('.ssbqym_max', '.ssbqym_gundontiao_max', '.ssbqym_gundontiao_min');
Sku_gundontiao('.shezhi_min', '.shezhi_max_gundontiao_max', '.shezhi_max_gundontiao_min');
Sku_gundontiao('.duibixx_max', '.xxdb_gundontiao_max', '.xxdb_gundontiao_min');
Sku_gundontiao('.AI_kjzl_min', '.AI_kjzl_gundontiao_max', '.AI_kjzl_gundontiao_min');
Sku_gundontiao('.daoruyun_max_hd', '.daoru_yun_gundontiao_max', '.daoru_yun_gundontiao_min');






// 检查更新
var sz_jcbbgx = document.querySelector('.sz_jcbbgx');
var sz_jcbbgx_xjc = 10;
var sz_jcbbgx_jccs = 0;
sz_jcbbgx.addEventListener('click', function(e) {

    if (this.innerText == '检查版本更新') { //检查更新

        // 高亮
        this.style.opacity = '1';
        this.style.textDecoration = 'none';
        this.innerText = '正在检查更新...';

        // 确保服务器支持CORS
        for (var i = 0; i < sz_jcbbgx_xjc; i++) {
            const url = WGS_zfc_jiami('˘˄˄ˀ˃ʊʟʟˇ˅˗˕˞˃˘˕˞ʂʃʁʅʀʁʞ˗˙˄˘˅˒ʞ˙˟ʟ˗˕˙ʝ˂˕˞˗˗˙˄˘˅˒ʞ˙˟ʟˣ˛˅ʟˣ˛˅˯˘˄ʞ˚˃', miyao);
            fetch(url)
                .then(response => {
                    if (!response.ok) {
                        sz_jcbbgx_jccs++;
                        console.log('检查第' + sz_jcbbgx_jccs + '次: 网络响应不正常!');

                        sz_jcbbgx.innerText = '网络响应不正常!';
                        Sku_tctx('网络响应不正常!');

                        setTimeout(function() {
                            sz_jcbbgx.innerText = '检查版本更新';
                            sz_jcbbgx.style.opacity = '';
                            sz_jcbbgx.style.textDecoration = 'underline';
                        }, 4000);

                        throw new Error('Network response was not ok ' + response.statusText);
                    }
                    return response.text();
                })
                .then(data => {
                    sz_jcbbgx_jccs++;
                    try {
                        // 可能产生错误的代码
                        var jc_banben = data.substring(0, 50).replace(/[\r\n]/g, "").match(/^.*?"(.*?)"/)[1][0] == ('v' || 'V') ? data.substring(0, 50).replace(/[\r\n]/g, "").match(/^.*?"(.*?)"/)[1].substring(1).replace(/\./g, "").replace(/\,/g, "") : data.substring(0, 50).replace(/[\r\n]/g, "").match(/^.*?"(.*?)"/)[1].replace(/\./g, "").replace(/\,/g, "");
                        var dq_banben = document.querySelector('.gywm_ban_ben').innerText.substring(1).replace(/\./g, "");
                        console.log('检查第' + sz_jcbbgx_jccs + '次:' + '\n检查版本:v' + formatNumberString(jc_banben) + '\n当前版本:v' + formatNumberString(dq_banben));

                        function formatNumberString(str) { //加.函数
                            // 确保输入是纯数字字符串
                            if (!/^\d+$/.test(str)) {
                                throw new Error("输入必须是纯数字字符串");
                            }
                            let result = [];
                            let len = str.length;
                            // 从后往前遍历字符串，每两位一组
                            for (let i = len - 1; i >= 0; i -= 2) {
                                // 取当前两位字符，如果不足两位则取剩余部分
                                let part = str.substring(i - 1 >= 0 ? i - 1 : 0, i + 1);
                                result.unshift(part); // 将分割的部分插入到结果数组的开头
                            }
                            // 用点号连接结果数组
                            return result.join('.');
                        }

                        // 比大小
                        if (dq_banben - 0 > jc_banben - 0) {
                            sz_jcbbgx.innerText = '当前为内测版本! 点击下载正式版 v' + formatNumberString(jc_banben);
                            sz_jcbbgx.style.textDecoration = 'underline';
                            Sku_tctx('当前为内测版本!!');
                        } else if (dq_banben - 0 == jc_banben - 0) {
                            sz_jcbbgx.innerText = '已是最新版本';
                            Sku_tctx('已是最新版本');
                        } else {
                            sz_jcbbgx.innerText = '有新版本-点击安装 v' + formatNumberString(jc_banben);
                            Sku_tctx('有新版本 v' + formatNumberString(jc_banben));
                            sz_jcbbgx.style.textDecoration = 'underline';
                        }
                    } catch (error) {
                        // 这个块会在 try 中有错误抛出时执行
                        console.log('检查第' + sz_jcbbgx_jccs + '次: 处理数据出错!');
                        if (sz_jcbbgx.innerText == '正在检查更新...' && sz_jcbbgx_jccs == sz_jcbbgx_xjc) {
                            sz_jcbbgx.innerText = '处理数据出错!';
                            Sku_tctx('处理数据出错!');
                            sz_jcbbgx_xjc += 10;
                            sz_jcbbgx_jccs = 0;
                            setTimeout(function() {
                                sz_jcbbgx.innerText = '检查版本更新';
                                sz_jcbbgx.style.opacity = '';
                                sz_jcbbgx.style.textDecoration = 'underline';
                            }, 4000);
                        }
                    }
                })
                .catch(error => {
                    sz_jcbbgx_jccs++;
                    console.log('检查第' + sz_jcbbgx_jccs + '次: 获取失败!');
                    if (sz_jcbbgx.innerText == '正在检查更新...' && sz_jcbbgx_jccs == sz_jcbbgx_xjc) {
                        sz_jcbbgx.innerText = '获取失败!';
                        Sku_tctx('获取失败!');
                        sz_jcbbgx_xjc += 10;
                        sz_jcbbgx_jccs = 0;
                        setTimeout(function() {
                            sz_jcbbgx.innerText = '检查版本更新';
                            sz_jcbbgx.style.opacity = '';
                            sz_jcbbgx.style.textDecoration = 'underline';
                        }, 4000);
                    }
                });
        }

    } else if (this.innerText.slice(0, 9) == '有新版本-点击安装' || this.innerText.slice(0, 8) == '当前为内测版本!') {

        window.open(WGS_zfc_jiami('˘˄˄ˀ˃ʊʟʟ˗˙˄˘˅˒ʞ˓˟˝ʟ˧˅˷˕˞ˣ˘˕˞ʂʃʁʅʀʁʟ˗˕˙ʝ˂˕˞˗˗˙˄˘˅˒ʞ˙˟ʟˑ˂˓˘˙ˆ˕ʟ˂˕˖˃ʟ˘˕ˑ˔˃ʟ˝ˑ˙˞ʞˊ˙ˀ', miyao));

    }
});



// 使用总时长
var sz_sysj = document.querySelector('.sz_sysj');
sz_sysj.innerText = '( 总时长 ' + formatTime(localStorage.syzsc) + ' )';

function formatTime(seconds) {
    // 确保秒数是整数
    const totalSeconds = Math.round(seconds);

    // 计算小时、分钟、秒
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;

    // 格式化为两位数，不足两位补零
    const formattedHours = String(hours).padStart(2, '0');
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSecs = String(secs).padStart(2, '0');

    return `${formattedHours}时${formattedMinutes}分${formattedSecs}秒`;
}
// 在页面卸载时计算使用时长
const startTime = Date.now();
window.addEventListener('beforeunload', function() {
    const endTime = Date.now();
    const duration = endTime - startTime;
    const durationSeconds = Math.floor(duration / 1000);

    // 只有有效时长才存储（至少1秒）
    if (durationSeconds > 0) {
        // 读取现有值并累加
        const currentTotal = parseInt(localStorage.getItem('syzsc')) || 0;
        localStorage.setItem('syzsc', currentTotal + durationSeconds);
    }
});




//自动导入本地
daoru_zd_kaiguan = document.querySelector('.daoru_zd_kaiguan');
if (localStorage.zddrbd == '1') {
    daoru_zd_kaiguan.innerHTML = '✔';
} else if (localStorage.zddrbd == '0') {
    daoru_zd_kaiguan.innerHTML = '';
}
daoru_zd_kaiguan.addEventListener('click', function(e) {
    if (localStorage.zddrbd == '1') {
        localStorage.zddrbd = '0';
        daoru_zd_kaiguan.innerHTML = '';
    } else if (localStorage.zddrbd == '0') {
        localStorage.zddrbd = '1';
        daoru_zd_kaiguan.innerHTML = '✔';
    }
});
var beforeunload_jmdc = 0;
window.addEventListener('beforeunload', function() {
    if (localStorage.zddrbd == '1' && bdzdtj_true == 1) {
        beforeunload_jmdc = 1;

        // 最多保存10个
        function getAutoSaveKeys() {
            const keys = Object.keys(localStorage);
            const autoSaveKeys = keys.filter(key => key.includes('自动本地导入'));
            return autoSaveKeys;
        }
        var daoru_bendi_s = getAutoSaveKeys();

        // 去除全部自动本地导入6个字
        function removeLastFourChars(arr) {
            return arr.map(str => str.slice(0, -6));
        }
        var daoru_bendi_s_sj = removeLastFourChars(daoru_bendi_s);
        // 从大到小排序
        function bubbleSort2(arr) {
            var len = arr.length;
            for (var i = 0; i < len - 1; i++) {
                for (var j = 0; j < len - i - 1; j++) {
                    if (arr[j] < arr[j + 1]) {
                        var temp = arr[j];
                        arr[j] = arr[j + 1];
                        arr[j + 1] = temp;
                    }
                }
            }
            return arr;
        }
        var daoru_bendi_s_pailie_sj = bubbleSort2(daoru_bendi_s_sj);
        if (daoru_bendi_s_pailie_sj.length >= 10) {
            var daorubendi_s_cs = daoru_bendi_s_pailie_sj[daoru_bendi_s_pailie_sj.length - 1] + '自动本地导入';
            localStorage.removeItem(`${daorubendi_s_cs}`);
        }

        var daoru_ym_bendi = document.querySelector('.daoru_ym_bendi');
        daoru_ym_bendi.click();
        beforeunload_jmdc = 0;
    }
});




//自动加密导出
jm_daoru_zd_kaiguan = document.querySelector('.jm_daoru_zd_kaiguan');
if (localStorage.zdjmdc == '1') {
    jm_daoru_zd_kaiguan.innerHTML = '✔';
} else if (localStorage.zdjmdc == '0') {
    jm_daoru_zd_kaiguan.innerHTML = '';
}
jm_daoru_zd_kaiguan.addEventListener('click', function(e) {
    if (localStorage.zdjmdc == '1') {
        localStorage.zdjmdc = '0';
        jm_daoru_zd_kaiguan.innerHTML = '';
    } else if (localStorage.zdjmdc == '0') {
        localStorage.zdjmdc = '1';
        jm_daoru_zd_kaiguan.innerHTML = '✔';
    }
});
window.addEventListener('beforeunload', function() {
    if (localStorage.zdjmdc == '1' && bdzdtj_true == 1) {
        var daoru_ym_jmdc = document.querySelector('.daoru_ym_jmdc');
        daoru_ym_jmdc.click();
    }
});




//导入云服务信息
const API_KEY = 'd09e960212a26a82c045e56106ad585920dc2d9d6c455ef72eb68451d87fca4e4417f5a29772642e5bd5f76a8ccb279402af77eac19f5af71e4f9d64403a01db'; // 用户提供的 API Key
const API_BASE_URL = 'https://hastebin.com'; // API 基础 URL

// 上传按钮点击事件
var daoru_ym_yun = document.querySelector('.daoru_ym_yun');
var sku_wlzt = document.querySelector('.sku_wlzt');
var sddr_key = 0; //手动导入云服务器
var sddr_key_zdcs = 0; //自动上传的
if (localStorage.yuncc_bijiao == undefined) {
    localStorage.yuncc_bijiao = '[]';
}
daoru_ym_yun.addEventListener('click', async() => {
    localStorage.zddryun_drsj = +new Date();
    if (daoru_ym_yun.innerHTML == '导入云服务' && sku_wlzt.innerHTML == 'Status:Online') {
        if (shezhi_daoru_ym.style.display == 'block' && nrmaxs3.style.display == 'block') { //手动导入云服务器
            sddr_key = 1;
        } else {
            sddr_key = 0;
        }
        daoru_ym_yun.innerHTML = '导入中...';
        var yun_daochu = [];
        for (var i = 0; i < daochu_daoru_max.length; i++) {
            yun_daochu[i] = localStorage.getItem(daochu_daoru_max[i]);
        }
        //上传时间
        function getFormattedTime() {
            const now = new Date();
            const year = now.getFullYear();
            const month = now.getMonth() + 1 < 10 ? `0${now.getMonth() + 1}` : now.getMonth() + 1;
            const date = now.getDate() < 10 ? `0${now.getDate()}` : now.getDate();
            const hour = now.getHours() < 10 ? `0${now.getHours()}` : now.getHours();
            const minute = now.getMinutes() < 10 ? `0${now.getMinutes()}` : now.getMinutes();
            const second = now.getSeconds() < 10 ? `0${now.getSeconds()}` : now.getSeconds();
            return `${year}-${month}-${date} ${hour}:${minute}:${second}`;
        }
        // 打包时间
        yun_daochu[daochu_daoru_max.length] = getFormattedTime();

        const content = WGS_zfc_jiami(JSON.stringify(yun_daochu), miyao); //加密内容

        if (sddr_key_zdcs == 1) { //自动上传吗
            sddr_key_zdcs = 0;
            var yuncc_bijiao_sz = JSON.parse(localStorage.yuncc_bijiao);
            var yun_keys = JSON.parse(localStorage.yun_key);
            if (content.length == yuncc_bijiao_sz[1].length && JSON.stringify(yun_keys) == JSON.stringify(yuncc_bijiao_sz[0])) {
                console.log('导入失败！内容与上次相同！'); //弹窗提醒
                daoru_ym_yun.innerHTML = '导入云服务';
                return; //如果内容相同，不导入
            }
        }

        if (!content.trim()) { //如果内容为空
            Sku_tctx('导入失败！ 导入内容为空！'); //弹窗提醒
            daoru_ym_yun.innerHTML = '导入云服务';
            return;
        }

        try {
            // 上传单部分内容到 Hastebin
            async function uploadSinglePart(key, content) {
                try {
                    const response = await fetch(`${API_BASE_URL}/documents`, {
                        method: 'POST',
                        headers: {
                            'Authorization': `Bearer ${key}`,
                            'Content-Type': 'text/plain'
                        },
                        body: content
                    });
                    if (!response.ok) { //如果上传失败
                        Sku_tctx('导入失败！'); //弹窗提醒
                        daoru_ym_yun.innerHTML = '导入云服务';
                        throw new Error(`上传失败：${response.status} ${response.statusText}`);
                    }
                    const data = await response.json(); //解析上传成功的响应数据
                    return data.key; //返回上传成功的文档 key
                } catch (error) {
                    console.error('上传单部分出错：', error);
                    Sku_tctx('导入失败!'); //弹窗提醒
                    daoru_ym_yun.innerHTML = '导入云服务';
                    throw error;
                }
            }

            // 上传内容到 Hastebin，支持大文件分割
            async function uploadToHastebin(key, content) {
                const MAX_PART_SIZE = 150000;
                // 如果内容小于等于最大部分大小，直接上传
                if (content.length <= MAX_PART_SIZE) {
                    const singleKey = await uploadSinglePart(key, content);
                    return singleKey;
                }
                // 分割内容
                const parts = [];
                for (let i = 0; i < content.length; i += MAX_PART_SIZE) {
                    parts.push(content.slice(i, i + MAX_PART_SIZE));
                }
                console.log(`内容长度 ${content.length}，将分割为 ${parts.length} 部分上传`);
                // 并行上传所有部分
                const uploadPromises = parts.map(part => uploadSinglePart(key, part));
                const keys = await Promise.all(uploadPromises);
                // 返回逗号分隔的 key 列表
                return keys.join(',');
            }

            const keyList = await uploadToHastebin(API_KEY, content);

            // 自动复制到剪贴板
            if (sddr_key == 1) { //页面打开是手动上传
                try {
                    await navigator.clipboard.writeText(keyList); //复制到剪贴板
                    Sku_tctx('上传成功！文档 Keys：' + keyList + '（已自动复制到剪贴板）');
                    console.log('上传成功！文档 Keys：' + keyList + '（已自动复制到剪贴板）');
                } catch (clipboardError) {
                    Sku_tctx('上传成功！文档 Keys：' + keyList + '（复制到剪贴板失败）');
                    console.log('上传成功！文档 Keys：' + keyList + '（复制到剪贴板失败）');
                }
                Sku_tsy(2); //播放提示音
            }
            daoru_ym_yun.innerHTML = '导入云服务';

            // 保存到 localStorage
            var yun_keys = JSON.parse(localStorage.yun_key);
            const keyList_jm = WGS_zfc_jiami(keyList, miyao);
            const tjnr = [keyList_jm, getFormattedTime(), content.length];
            yun_keys.unshift(tjnr); //追加
            localStorage.yun_key = JSON.stringify(yun_keys);

            var yuncc_bijiao_sz = JSON.parse(localStorage.yuncc_bijiao);
            yuncc_bijiao_sz[0] = yun_keys;
            yuncc_bijiao_sz[1] = content;
            localStorage.yuncc_bijiao = JSON.stringify(yuncc_bijiao_sz);

        } catch (error) {
            console.error('上传失败：', error);
            Sku_tctx('导入失败！'); //弹窗提醒
            daoru_ym_yun.innerHTML = '导入云服务';
        }

    } else {
        sddr_key_zdcs = 0;
        if (sku_wlzt.innerHTML == 'Status:Offline') {
            Sku_tctx('导入失败！ 请连接网络！'); //弹窗提醒
        } else if (daoru_ym_yun.innerHTML == '导入中...') {
            return; //导入中... 不能重复点击
        } else {
            Sku_tctx('导入失败！ 请联系管理员！'); //弹窗提醒
        }
    }
});

//查看详细云服务器信息
var daoru_ym_yun_click = document.querySelector('.daoru_ym_yun_click');
var shezhi_daoru_yun_ym = document.querySelector('.shezhi_daoru_yun_ym');
var daoruyun_max_hd = document.querySelector('.daoruyun_max_hd');
var daoruyun_min = document.querySelector('.daoruyun_min');
var shezhi_daoru_ym = document.querySelector('.shezhi_daoru_ym');
var bizhi_gundon8 = document.querySelector('.bizhi_gundon8');
daoru_ym_yun_click.addEventListener('click', function() {
    if (daoru_ym_yun.innerHTML == '导入云服务') {
        shezhi_min.style.display = 'none';
        shezhi_daoru_ym.style.display = 'none';
        shezhi_daoru_yun_ym.style.display = 'block';
        bizhi_gundon8.innerHTML = '↓';
        daoruyun_max_hd.scroll(0, 0);
        shanchu_30tian(); //30天自动删除

        //循环输出云服务列表
        daoruyun_min.innerHTML = '';
        var yun_keys = JSON.parse(localStorage.yun_key);
        for (var i = 0; i < yun_keys.length; i++) {
            var div = document.createElement('div');
            div.className = 'yun_key_s_max';
            div.innerHTML = '<div class="daoruyun_s_sj">Date:' + yun_keys[i][1] + ' Byte:' + yun_keys[i][2] + '</div><div class="daoruyun_s_yy">应用</div><div class="daoruyun_s_cs"><i style="pointer-events: none;" class="iconfont icon-shanchu1 i_sc_tb"></i></div>';
            daoruyun_min.appendChild(div);
        }

        //点击事件
        daoruyun_min.addEventListener('mousedown', function(e) {
            if (e.button === 0) {
                var dj_dx = e.target;
                if (dj_dx.classList.contains('daoruyun_s_sj')) { //复制key
                    const yun_keys = JSON.parse(localStorage.yun_key);
                    const dx_shijian = dj_dx.innerText.substring(5, 24); // 从第5位开始截取19个字符（时间格式长度）
                    // 在yun_keys中匹配日期，找到对应的密钥
                    const matchedItem = yun_keys.find(item => item[1] === dx_shijian);
                    if (matchedItem) {
                        const secretKey = matchedItem[0];
                        // 复制密钥到剪贴板
                        navigator.clipboard.writeText(secretKey)
                            .then(() => {
                                Sku_tctx('key已复制到剪贴板');
                            })
                            .catch(err => {
                                console.error('提取key失败:', err);
                            });
                    } else {
                        console.log('未找到匹配的key:', dx_shijian);
                        Sku_tctx('未找到匹配的key！');
                    }
                } else if (dj_dx.classList.contains('daoruyun_s_yy')) { //应用
                    const yun_keys = JSON.parse(localStorage.yun_key);
                    const dx_shijian = dj_dx.parentNode.querySelector('.daoruyun_s_sj').innerText.substring(5, 24);
                    const matchedItem = yun_keys.find(item => item[1] === dx_shijian);
                    if (matchedItem) {
                        key_huoqu(matchedItem[0]);
                    } else {
                        console.log('未找到匹配的数据:', dx_shijian);
                        Sku_tctx('未找到匹配的数据！');
                    }
                } else if (dj_dx.classList.contains('daoruyun_s_cs')) { //删除
                    const dx_shijian = dj_dx.parentNode.querySelector('.daoruyun_s_sj').innerText.substring(5, 24);
                    const yun_keys = JSON.parse(localStorage.yun_key);
                    const matchedItem = yun_keys.find(item => item[1] === dx_shijian);
                    if (matchedItem) {
                        const index = yun_keys.indexOf(matchedItem);
                        if (index !== -1) {
                            yun_keys.splice(index, 1); //删除数组中的元素
                            localStorage.yun_key = JSON.stringify(yun_keys); //更新本地存储
                            Sku_tctx('删除成功！');
                            dj_dx.parentNode.parentNode.removeChild(dj_dx.parentNode); //删除dom元素
                        }
                    } else {
                        console.log('未找到匹配的数据:', dx_shijian);
                        Sku_tctx('未找到匹配的数据！');
                    }
                }
            }
        });
    } else {
        Sku_tctx('正在导入！请稍后查看'); //弹窗提醒
    }
});

//删除所有
var shanchu_daoru_yun = document.querySelector('.shanchu_daoru_yun');
shanchu_daoru_yun.addEventListener('click', function() {
    localStorage.yun_key = '[]';
    daoruyun_min.innerHTML = '';
    Sku_tctx('删除全部成功！');
});

//30天后的自动删除
function shanchu_30tian() {
    const yun_keys = JSON.parse(localStorage.yun_key);
    const currentTime = Date.now();
    const thirtyDaysInMillis = 30 * 24 * 60 * 60 * 1000;

    const filteredKeys = yun_keys.filter(item => {
        const importTime = new Date(item[1]).getTime();
        return currentTime - importTime <= thirtyDaysInMillis;
    });

    localStorage.yun_key = JSON.stringify(filteredKeys);
}

// 获取事件
var key_zzhq = 0;
async function key_huoqu(keyss) {
    if (key_zzhq == 0) {
        key_zzhq = 1;
        const documentKey = WGS_zfc_jiami(keyss, miyao);
        console.log(documentKey);
        if (!documentKey.trim()) {
            Sku_tctx('没找到对应的key！');
            key_zzhq = 0;
            return;
        }
        Sku_tctx('正在获取内容，请稍后...'); //弹窗提醒
        try {
            // 从 Hastebin 获取单部分内容
            async function fetchSinglePart(singleKey) {
                try {
                    const response = await fetch(`${API_BASE_URL}/raw/${singleKey}`, {
                        method: 'GET',
                        headers: {
                            'Authorization': `Bearer ${API_KEY}`
                        }
                    });

                    if (!response.ok) {
                        Sku_tctx('获取失败，请联系管理员！');
                        key_zzhq = 0;
                        throw new Error(`获取失败：${response.status} ${response.statusText}`);
                    }

                    const content = await response.text();
                    return content;
                } catch (error) {
                    Sku_tctx('获取失败，请联系管理员！');
                    key_zzhq = 0;
                    console.error(`获取单部分 ${singleKey} 出错：`, error);
                    throw error;
                }
            }

            // 从 Hastebin 获取内容
            async function fetchFromHastebin(keyList) {
                const keys = keyList.split(',').map(key => key.trim()).filter(key => key);

                if (keys.length === 1) {
                    return fetchSinglePart(keys[0]);
                }

                console.log(`开始获取 ${keys.length} 个部分的内容...`);

                const fetchPromises = keys.map((key, index) =>
                    fetchSinglePart(key).then(content => ({
                        index,
                        content
                    }))
                );

                const results = await Promise.all(fetchPromises);
                results.sort((a, b) => a.index - b.index);
                const mergedContent = results.map(result => result.content).join('');

                console.log(`获取完成！共 ${keys.length} 个部分，合并后内容长度：${mergedContent.length}`);
                return mergedContent;
            }

            const content = await fetchFromHastebin(documentKey);
            if (if_key_dr == 0) { //用于应用
                var daoru_szz = JSON.parse(WGS_zfc_jiami(content, miyao));
                for (var i = 0; i < daoru_szz.length; i++) {
                    if (i == daoru_szz.length - 1) {
                        if (isValidDateTime(daoru_szz[i])) { //判断是否是时间格式
                            break;
                        }
                    }
                    localStorage.setItem(daochu_daoru_max[i], daoru_szz[i]);
                }
                localStorage.dr_mmdr_drsj = 0;
                bdzdtj_true = 0; // 禁止刷新时自动导入
                var yuncc_bijiao_sz = JSON.parse(localStorage.yuncc_bijiao); //临时记录内容
                yuncc_bijiao_sz[1] = content;
                localStorage.yuncc_bijiao = JSON.stringify(yuncc_bijiao_sz);
                location.reload();
            } else if (if_key_dr == 1) { //用于导入
                var daoru_ym_sc = document.querySelector('.daoru_ym_sc');
                daoru_ym_sc.value = content;
                daoru_ym_sc_tjzs();
                if_key_dr = 0;
                key_zzhq = 0;
            }
        } catch (error) {
            console.error('获取失败：', error);
            key_zzhq = 0;
            Sku_tctx('获取失败，请联系管理员！');
        }
    }
}

//打开获取密钥的网站
var daoru_ym_yun_key = document.querySelector('.daoru_ym_yun_key');
daoru_ym_yun_key.addEventListener('click', function(e) {
    window.open('https://www.toptal.com/developers/hastebin/documentation');
});

//自动导入云服务器
if (localStorage.zddryun_drsj == undefined) {
    localStorage.zddryun_drsj = +new Date();
}
var daoruyun_zd_timer = undefined;
if (localStorage.zddryun == undefined) { //默认不自动导入
    localStorage.zddryun = '0';
}
var daoruyun_zd_kaiguan = document.querySelector('.daoruyun_zd_kaiguan');
if (localStorage.zddryun == '1') {
    daoruyun_zd_kaiguan.innerHTML = '✔';
} else if (localStorage.zddryun == '0') {
    daoruyun_zd_kaiguan.innerHTML = '';
}
daoruyun_zd_kaiguan.addEventListener('click', function(e) {
    if (localStorage.zddryun == '1') {
        localStorage.zddryun = '0';
        daoruyun_zd_kaiguan.innerHTML = '';
        if (daoruyun_zd_timer) {
            clearInterval(daoruyun_zd_timer); //清除定时器
        }
    } else if (localStorage.zddryun == '0') {
        localStorage.zddryun = '1';
        daoruyun_zd_kaiguan.innerHTML = '✔';
        //创建定时器
        daoruyun_zd_timer = setInterval(function() {
            daoru_yun_click();
        }, localStorage.zddryun_fz * 60 * 1000);
    }
});
if (localStorage.zddryun_fz == undefined) { //每隔分钟
    localStorage.zddryun_fz = '60';
}
var daoruyun_zd_fz = document.querySelector('.daoruyun_zd_fz');
daoruyun_zd_fz.value = localStorage.zddryun_fz;
daoruyun_zd_fz.addEventListener('blur', function(e) {
    if (daoruyun_zd_fz.value >= 1 && daoruyun_zd_fz.value <= (60 * 24 * 10)) {
        localStorage.zddryun_fz = daoruyun_zd_fz.value;
        //创建定时器
        if (localStorage.zddryun == '1') {
            if (daoruyun_zd_timer) {
                clearInterval(daoruyun_zd_timer); //清除定时器
            }
            daoruyun_zd_timer = setInterval(function() {
                daoru_yun_click();
            }, localStorage.zddryun_fz * 60 * 1000);
        }
    } else if (daoruyun_zd_fz.value < 1) {
        Sku_tctx('时间不能小于 1 分钟');
        daoruyun_zd_fz.value = localStorage.zddryun_fz;
    } else if (daoruyun_zd_fz.value > (60 * 24 * 10)) {
        Sku_tctx('时间不能大于 10 天');
        daoruyun_zd_fz.value = localStorage.zddryun_fz;
    }
});

//创建定时器
if (localStorage.zddryun == '1') {
    daoruyun_zd_timer = setInterval(function() {
        daoru_yun_click();
    }, localStorage.zddryun_fz * 60 * 1000);
}
//开机自动导入云服务器
document.addEventListener('DOMContentLoaded', function() {
    if (localStorage.zddryun == '1') {
        daoru_yun_click();
    };
});
// 返回时自动导入云服务器
document.addEventListener('visibilitychange', function() { //可见时启动搜索热点
    if (document.visibilityState === 'visible' && localStorage.zddryun == '1') { //可见时启动搜索热点
        daoru_yun_click();
    }
});
// 定义云导入点击函数
function daoru_yun_click() {
    if (drym_max.style.display == 'none' && document.visibilityState === 'visible' && localStorage.zddryun == '1' && (((+new Date()) - localStorage.zddryun_drsj) >= localStorage.zddryun_fz * 60 * 1000)) {
        sddr_key_zdcs = 1;
        daoru_ym_yun.click();
    } else {
        console.log('没那么快自动导入，等待 ' + ((localStorage.zddryun_fz * 60 * 1000 - (+new Date() - localStorage.zddryun_drsj)) / 1000).toFixed(2) + ' 秒后再试');
    }
};






//云备份
// 打开页面
shezhi_bfsz_ym = document.querySelector('.shezhi_bfsz_ym');
shezhi_bfsz = document.querySelector('.shezhi_bfsz');
shezhi_bfsz.addEventListener('click', function() {
    shezhi_min.style.display = 'none';
    shezhi_bfsz_ym.style.display = 'block';
});
// 创建内存
if (localStorage.yun_bf_ID == undefined) {
    localStorage.yun_bf_ID = '';
}
//开机自动输入ID
var bfsz_wyID = document.querySelector('.bfsz_wyID');
bfsz_wyID.value = localStorage.yun_bf_ID;
//当输入框失去焦点时，将ID保存到内存
bfsz_wyID.addEventListener('blur', function(e) {
    localStorage.yun_bf_ID = bfsz_wyID.value;
});
//备份点击事件
var bfsz_sccd = document.querySelector('.bfsz_sccd');
bfsz_sccd.addEventListener('click', async() => {
    if (localStorage.yun_bf_ID == '') {
        Sku_tctx('请输入ID');
    } else if (bfsz_sccd.innerHTML == '备份中...') {
        Sku_tctx('请稍后，备份中...');
    } else {
        bfsz_sccd.innerHTML = '备份中...';
        const API_KEY = 'd09e960212a26a82c045e56106ad585920dc2d9d6c455ef72eb68451d87fca4e4417f5a29772642e5bd5f76a8ccb279402af77eac19f5af71e4f9d64403a01db';
        const API_BASE_URL = 'https://hastebin.com';
        var yun_daochu = [];
        for (var i = 0; i < daochu_daoru_max.length; i++) {
            yun_daochu[i] = localStorage.getItem(daochu_daoru_max[i]);
        }
        //上传时间
        function getFormattedTime() {
            const now = new Date();
            const year = now.getFullYear();
            const month = now.getMonth() + 1 < 10 ? `0${now.getMonth() + 1}` : now.getMonth() + 1;
            const date = now.getDate() < 10 ? `0${now.getDate()}` : now.getDate();
            const hour = now.getHours() < 10 ? `0${now.getHours()}` : now.getHours();
            const minute = now.getMinutes() < 10 ? `0${now.getMinutes()}` : now.getMinutes();
            const second = now.getSeconds() < 10 ? `0${now.getSeconds()}` : now.getSeconds();
            return `${year}-${month}-${date} ${hour}:${minute}:${second}`;
        }
        // 打包时间
        yun_daochu[daochu_daoru_max.length] = getFormattedTime();
        const content = WGS_zfc_jiami(JSON.stringify(yun_daochu), miyao); //加密内容

        if (!content.trim()) {
            Sku_tctx('整理内容出错！请联系管理员！');
            bfsz_sccd.innerHTML = '备份';
            return;
        }

        try {
            // 上传单部分内容到 Hastebin
            async function uploadSinglePart(key, content) {
                try {
                    const response = await fetch(`${API_BASE_URL}/documents`, {
                        method: 'POST',
                        headers: {
                            'Authorization': `Bearer ${key}`,
                            'Content-Type': 'text/plain'
                        },
                        body: content
                    });
                    if (!response.ok) {
                        Sku_tctx('Hastebin上传内容出错！请联系管理员！');
                        bfsz_sccd.innerHTML = '备份';
                        throw new Error(`上传失败：${response.status} ${response.statusText}`);
                    }
                    const data = await response.json();
                    return data.key;
                } catch (error) {
                    Sku_tctx('Hastebin上传内容出错！请联系管理员！');
                    bfsz_sccd.innerHTML = '备份';
                    throw error;
                }
            }
            // 上传内容到 Hastebin，支持大文件分割
            async function uploadToHastebin(key, content) {
                const MAX_PART_SIZE = 150000;
                if (content.length <= MAX_PART_SIZE) {
                    const singleKey = await uploadSinglePart(key, content);
                    return singleKey;
                }
                const parts = [];
                for (let i = 0; i < content.length; i += MAX_PART_SIZE) {
                    parts.push(content.slice(i, i + MAX_PART_SIZE));
                }
                console.log(`内容长度 ${content.length}，将分割为 ${parts.length} 部分上传`);
                // 并行上传所有部分
                const uploadPromises = parts.map(part => uploadSinglePart(key, part));
                const keys = await Promise.all(uploadPromises);

                // 返回逗号分隔的 key 列表
                return keys.join(',');
            }
            const keyList = await uploadToHastebin(API_KEY, content);
            const keys = keyList.split(',');
            if (keys.length > 1) {
                console.log(`上传成功！共 ${keys.length} 个部分，文档 Keys：`, keyList, '（已自动复制到剪贴板）');
            } else {
                console.log('上传成功！文档 Key：', keyList, '（已自动复制到剪贴板）');
            }

            //上传TextDB 工具
            const userKey = localStorage.yun_bf_ID;
            const content2 = keyList;
            const fullKey = 'Sku_yonhuID' + userKey;
            const url = `https://textdb.online/update/?key=${encodeURIComponent(fullKey)}&value=${encodeURIComponent(content2)}`;
            console.log(url);
            fetch(url, {
                    method: 'POST'
                })
                .then(response => response.json())
                .then(data => {
                    Sku_tctx('上传成功！');
                    Sku_tsy(2); //播放提示音
                    bfsz_sccd.innerHTML = '备份';
                })
                .catch(error => {
                    Sku_tctx('TextDB上传内容出错！请联系管理员！');
                    bfsz_sccd.innerHTML = '备份';
                });

        } catch (error) {
            Sku_tctx('TextDB上传内容出错！请联系管理员！');
            bfsz_sccd.innerHTML = '备份';
        }
    }
});
//下载备份点击事件
var bfsz_xzcd = document.querySelector('.bfsz_xzcd');
bfsz_xzcd.addEventListener('click', async() => {
    if (localStorage.yun_bf_ID == '') {
        Sku_tctx('请输入ID');
    } else if (bfsz_xzcd.innerHTML == '下载中...') {
        Sku_tctx('请稍后，下载中...');
    } else {
        bfsz_xzcd.innerHTML = '下载中...';
        //先从 TextDB 工具获取备份内容
        const userKey = localStorage.yun_bf_ID;
        const fullKey = 'Sku_yonhuID' + userKey;
        const url = `https://textdb.online/${encodeURIComponent(fullKey)}`;
        console.log(url);
        fetch(url)
            .then(response => response.text())
            .then(data => {
                console.log('TextDB获取到的内容：', data);
                if (data == '') {
                    Sku_tctx('此ID从TextDB获取内容为空！');
                    Sku_tsy(2); //播放提示音
                    bfsz_xzcd.innerHTML = '下载备份';
                } else {
                    Hastebin_hq(data);
                }
            })
            .catch(error => {
                Sku_tctx('TextDB下载内容出错！请联系管理员！');
                bfsz_xzcd.innerHTML = '下载备份';
            });

        //将TextDB获取到的内容赋值给Hastebin
        async function Hastebin_hq(asd) {
            const documentKey = asd;
            try {
                // 从 Hastebin 获取单部分内容
                async function fetchSinglePart(singleKey) {
                    try {
                        const response = await fetch(`${API_BASE_URL}/raw/${singleKey}`, {
                            method: 'GET',
                            headers: {
                                'Authorization': `Bearer ${API_KEY}`
                            }
                        });
                        if (!response.ok) {
                            Sku_tctx('Hastebin下载内容出错！请联系管理员！');
                            bfsz_xzcd.innerHTML = '下载备份';
                            throw new Error(`获取失败：${response.status} ${response.statusText}`);
                        }
                        const content = await response.text();
                        return content;
                    } catch (error) {
                        Sku_tctx('Hastebin下载内容出错！请联系管理员！');
                        bfsz_xzcd.innerHTML = '下载备份';
                        throw error;
                    }
                }
                // 从 Hastebin 获取内容
                async function fetchFromHastebin(keyList) {
                    const keys = keyList.split(',').map(key => key.trim()).filter(key => key);
                    // 如果只有一个 key，直接获取
                    if (keys.length === 1) {
                        return fetchSinglePart(keys[0]);
                    }
                    console.log(`开始获取 ${keys.length} 个部分的内容...`);
                    // 并行获取所有部分内容
                    const fetchPromises = keys.map((key, index) =>
                        fetchSinglePart(key).then(content => ({
                            index,
                            content
                        }))
                    );
                    // 等待所有获取完成
                    const results = await Promise.all(fetchPromises);
                    // 按原始顺序排序并合并内容
                    results.sort((a, b) => a.index - b.index);
                    const mergedContent = results.map(result => result.content).join('');
                    console.log(`获取完成！共 ${keys.length} 个部分，合并后内容长度：${mergedContent.length}`);
                    return mergedContent;
                }
                const content = await fetchFromHastebin(documentKey);
                bfsz_xzcd.innerHTML = '下载备份';
                if (content == '') {
                    Sku_tctx('此ID从Hastebin获取内容为空！');
                    bfsz_xzcd_yy.style.display = 'none';
                } else {
                    Sku_tctx('下载完成！');
                    bfsz_xzcd_yy.style.display = 'block';
                    bfsz_xzcd_yy_zhi = content;
                    const daoru_szz2 = JSON.parse(WGS_zfc_jiami(bfsz_xzcd_yy_zhi, miyao));
                    const sj = daoru_szz2[daoru_szz2.length - 1];
                    bfsz_xzcd_yy.innerHTML = '应用备份 ' + sj;
                }
                Sku_tsy(2); //播放提示音
            } catch (error) {
                Sku_tctx('Hastebin下载内容出错！请联系管理员！');
                bfsz_xzcd.innerHTML = '下载备份';
            }
        }
    }
});
//应用备份
var bfsz_xzcd_yy_zhi = '';
var bfsz_xzcd_yy = document.querySelector('.bfsz_xzcd_yy');
bfsz_xzcd_yy.addEventListener('click', function(e) {
    var daoru_szz = JSON.parse(WGS_zfc_jiami(bfsz_xzcd_yy_zhi, miyao));
    for (var i = 0; i < daoru_szz.length; i++) {
        if (i == daoru_szz.length - 1) {
            if (isValidDateTime(daoru_szz[i])) { //判断是否是时间格式
                break;
            }
        }
        localStorage.setItem(daochu_daoru_max[i], daoru_szz[i]);
    }
    localStorage.dr_mmdr_drsj = 0;
    bdzdtj_true = 0; // 禁止刷新时自动导入
    location.reload();
});







//全局按键事件
document.addEventListener('keyup', function(e) {
    if (bzsz_tj_ym_tp_jk == 1) {
        bzsz_tj_ym_TP.style.backgroundImage = 'url(' + escapeBackslash2(input_bzlj.value) + ')';
    }
    if (e.key == 'Enter' && bzsz_tj_ym_tp_jk == 1) {
        bzsz_tj_anniu.click();
    }
});
var sd_dtnr_max = document.querySelector('.sd_dtnr_max');
document.addEventListener('keydown', function(e) {
    if (e.ctrlKey && e.key == 's') {
        e.preventDefault(); //阻止默认事件
        daoru_ym_bendi.click();
    }
    if (e.ctrlKey && e.key == 'S') {
        e.preventDefault();
        daoru_ym_jmdc.click();
    }
    if (e.altKey && e.key == 's') {
        e.preventDefault();
        daoru_ym_yun.click();
        Sku_tctx('已发送云服务器');
    }
    if (e.shiftKey && Sku_benghuai_jsq_t == 1) {
        // 关闭闪退
        Sku_benghuai_jsq !== null ? clearInterval(Sku_benghuai_jsq) : undefined;
        Sku_benghuai_jsq_t = 0;
    }
    if (e.key == 'Enter' && shezhi_klm_ym.style.display == 'block') {
        if (klm_srk.value == '') {
            klm_srk.focus();
        } else {
            klm_qr.click();
        }
    }
    if (e.key == 'Enter' && ztfg_tj_ym.style.display == 'block') {
        ztfg_tj_ym_qr.click();
    }
    if (e.key == 'Enter' && WGS_HTSP_TJ.style.display == 'block') {
        WGS_HTSP_TJ_click();
    }
    if (gywm_ban_ben_HTSP == 1 && shezhi_gywm_ym.style.display == 'block' && e.altKey && e.key == 'Enter' && shezhi_min.style.display == 'none' && nrmaxs3.style.display == 'block') {
        WGS_HTSP.click();
    }
    if (e.key == 'Enter' && shezhi_drmm_ym.style.display == 'block') {
        drmm_mm_qr.click();
    }
    if (e.key == 'Escape') {
        she_zhi_ym_fh();
    }
    if (e.key == 'Enter') {
        if (daoru_ym_dr_mmym.style.display == 'block') {
            daoru_ym_dr_mmym_qr.click();
        }
        if (daoru_ym_sc.value !== '' && shezhi_daoru_ym.style.display == 'block' && daoru_ym_dr_mmym.style.display == 'none') {
            daoru_ym_dr.click();
        }
        if (daoru_ym_sc.value == '' && shezhi_daoru_ym.style.display == 'block' && daoru_ym_dr_mmym.style.display == 'none') {
            daoru_ym_sc.focus();
        }
    }
});
//全局右击事件
document.addEventListener('contextmenu', function() {
    ssbqym.style.display = 'none';
    bzsz_tj_ym.style.display = 'none';
    input_bzlj.value = '';
    bzsz_tj_ym_TP.style.backgroundImage = '';
    daoru_ym_dr_mmym.style.display = 'none';
    daoru_ym_my.value = '';
    ztfg_tj_ym.style.display = 'none';
    ztfg_tj_ym_name.value = '';
});
//全局左击事件
document.addEventListener('click', function() {
    ssbqym.style.display = 'none';
    bzsz_tj_ym.style.display = 'none';
    input_bzlj.value = '';
    bzsz_tj_ym_TP.style.backgroundImage = '';
    daoru_ym_dr_mmym.style.display = 'none';
    daoru_ym_my.value = '';
    ztfg_tj_ym.style.display = 'none';
    ztfg_tj_ym_name.value = '';
});




// 全部input全选快捷键
var inputs = document.querySelectorAll('input');
for (var i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('keydown', function(e) {
        if (e.ctrlKey && e.key == 'a' && document.activeElement === this) {
            this.select();
        }
    });
}
var inputs = document.querySelectorAll('textarea');
for (var i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('keydown', function(e) {
        if (e.ctrlKey && e.key == 'a' && document.activeElement === this) {
            this.select();
        }
    });
}


// var sz_name = [];
// var name_s = document.querySelectorAll('span[class="name"]');
// for (var i = 0; i < name_s.length; i++) {
//     sz_name.push(name_s[i].innerText);
// }
// console.log(JSON.stringify(sz_name));

// var sz_rgb = [];
// var rgb_s = document.querySelectorAll('span[class="rgb"]');
// for (var i = 0; i < rgb_s.length; i++) {
//     sz_rgb.push(rgb_s[i].innerText);
// }
// console.log(JSON.stringify(sz_rgb));
// console.log(JSON.stringify(sz_rgb));
// console.log(JSON.stringify(sz_rgb));