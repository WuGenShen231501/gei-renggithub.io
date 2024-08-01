// 提示音
var sku_tsy = document.querySelectorAll('.sku_tsy');

function Sku_tsy(num) {
    sku_tsy[num].play();
}

// 保护localStorage值
var shui_you_nc = ['sy_ci_shu', 'Sku_kfzms', 'ztfg_name', 'ztfg', 'mrrd_name', 'mryy', 'mrrd_sxsj', 'mrrd', 'bi_zhi_ys', 'dr_mmdr_mmfw', 'dr_mmdr_drsj', 'dhr_sz', 'dhr_ym_dx', 'sy_sosuo_yq', 'tou_xiang', 'liu_yan_dx', 'bi_zhi_s', 'bi_zhi', 'tian_qi', 'zi_ti_color', 'zi_ti_click_color', 'bei_jing_color', 'bei_jing_tmd', 'bei_jing_kuan_ture', 'bei_jing_kuan_color', 'bei_jing_kuan_tmd', 'mao_bo_li', 'zdbf', 'dhr_sz_bf', 'dhr_ym_dx_bf', 'bi_zhi_s_bf', 'liu_yan_dx_bf', 'sy_djs_bf', 'sy_zpzs_lj_bf', 'sy_zpzs_mz_bf', 'sy_ci_shu', 'sy_djs', 'dr_mm', 'dr_mm_cf', 'drym_cs', 'drym_srcs', 'sy_zpzs_lj', 'sy_zpzs_mz', 'sy_zpzs_kaiguan', 'music_cd', 'music_bfsx', 'music_cd_bf', 'lsjl', 'lsjl_bf', 'sy_lbxz', 'sku_xp_sp', 'htsp_s', 'htsp_s_bf', 'sku_zcb', 'sku_zcb_bf', 'dr_mmdr'];
window.addEventListener('storage', function(event) {
    if (localStorage.Sku_kfzms == 0 && event.key == 'sy_ci_shu' && decodeURI(event.url).substring(decodeURI(event.url).length - 8, decodeURI(event.url).length) == decodeURI(location.href).substring(decodeURI(location.href).length - 8, decodeURI(location.href).length)) {

        window.close();
        location.replace('https://cn.bing.com/');

    } else {
        if (shui_you_nc.indexOf(event.key) !== -1 && localStorage.Sku_kfzms == 0) {
            console.clear();

            // event.key 为被修改的键名
            console.log('键名:', event.key);

            // event.oldValue 为旧值（在更改之前）
            console.log('旧值:', event.oldValue);

            // event.newValue 为新值（在更改之后）
            console.log('新值:', event.newValue);

            // event.url 是触发 storage 更改的页面的URL
            console.log('触发 storage 更改的页面URL:', decodeURI(event.url));

            localStorage.setItem(
                `${event.key}`,
                event.oldValue
            );
            console.log('保护后的值:' + localStorage.getItem(`${event.key}`));

            Sku_tctx('༼ 🖕 ◕_◕ ༽🖕 请不要这样做! ' + event.key + ' 已被保护!');

            setTimeout(function() {
                localStorage.Sku_benghuai = 1;
                localStorage.dr_mmdr_drsj = 0;
                window.close();
                setTimeout(function() { location.replace('https://cn.bing.com/'); });
            }, 1500);
        } else if (shui_you_nc.indexOf(event.key) !== -1 && localStorage.Sku_kfzms == 1) {
            Sku_tctx('温馨提示: 窜改文件可能导致网页崩溃! ( ROOT 用户请谨慎 )');
        }
    }
});

// 防止打开开发者工具
document.onkeydown = function() {
    var e = window.e || arguments[0];
    if (localStorage.Sku_kfzms == 0 && (e.keyCode == 123 || (e.ctrlKey) && (e.shiftKey) && (e.keyCode == 73) || (e.ctrlKey) && (e.keyCode == 85) || (e.ctrlKey) && (e.key == 'C'))) {
        e.preventDefault();
        localStorage.Sku_benghuai = 1;
        localStorage.dr_mmdr_drsj = 0;
        Sku_tctx('༼ 🖕 ◕_◕ ༽🖕 请不要这样做!');
        setTimeout(function() {
            window.close();
            setTimeout(function() { location.replace('https://cn.bing.com/'); });
        }, 1000);
        return false;
    }
}

// 禁止开发者工具运行
var check = function() {
    function doCheck(a) {
        if (("" + a / a)["length"] !== 1 || a % 20 === 0) {
            (function() {}
                ["constructor"]("debugger")())
        } else {
            (function() {}
                ["constructor"]("debugger")())
        }
        doCheck(++a)
    }
    try {
        doCheck(0)
    } catch (err) {}
};
Sku_kfzgj_jsq = null;
if (localStorage.Sku_kfzms == 0) {
    Sku_kfzgj_jsq = setInterval(function() {
        check();
    }, 1000);
}




// 全部密钥
var miyao = 688;
//WGS_zfc_jiami('要加密的文本','整数值(密钥)');
function WGS_zfc_jiami(nr, key) {
    function xorEncode(str, key) {
        let result = '';
        for (let i = 0; i < str.length; i++) {
            let charCode = str.charCodeAt(i);
            result += String.fromCharCode(charCode ^ key);
        }
        return result;
    }
    const encrypted = xorEncode(nr, key);
    return encrypted;
}




// 定位
var music_hzmax = document.querySelector('.music_hzmax');
music_hzmax.style.maxHeight = window.innerHeight - (60 + 60) + 'px';
var drym_min = document.querySelector('.drym_min');
drym_min.style.top = ((window.innerHeight - 56) / 2) - 150 + 56 + 'px';
var mryy = document.querySelector('.mryy');
mryy.style.top = ((window.innerHeight - 56) / 2) - 150 + 430 + 'px';
window.addEventListener('resize', function(e) {
    var music_hzmax = document.querySelector('.music_hzmax');
    music_hzmax.style.maxHeight = window.innerHeight - (60 + 60) + 'px';
    var drym_min = document.querySelector('.drym_min');
    drym_min.style.top = ((window.innerHeight - 56) / 2) - 150 + 56 + 'px';
    var mryy = document.querySelector('.mryy');
    mryy.style.top = ((window.innerHeight - 56) / 2) - 150 + 430 + 'px';
});



//鼠标
su_biao = document.querySelector('.su_biao');
document.documentElement.addEventListener('mouseover', function() {
    su_biao.style.display = 'block';
});
document.documentElement.addEventListener('mouseout', function() {
    su_biao.style.display = 'none';
});
document.documentElement.addEventListener('mousemove', function(e) {
    su_biao.style.transition = '0s'
    su_biao.style.top = e.pageY - 5 + 'px';
    su_biao.style.left = e.pageX - 5 + 'px';
});
document.documentElement.addEventListener('mousedown', function() {
    // su_biao.style.animation = '';
    su_biao.style.transition = '0.1s'
    su_biao.style.transform = 'scale(0.5)';
});
document.documentElement.addEventListener('mouseup', function() {
    su_biao.style.transition = '0.1s'
    su_biao.style.transform = 'scale(1)';
    // su_biao.style.animation = 'su_biao_shuidi 0.1s';
});



// logo跳转
i_toplogo_tb = document.querySelector('.i_toplogo_tb');
i_toplogo_tb.addEventListener('click', function(e) {
    document.querySelector('.top_dhl').querySelectorAll('div')[3].click();
    shezhi_gywm.click();
});


//清楚右键默认
document.oncontextmenu = function(e) {
    e.preventDefault();
};

//取消头部导航栏闪烁
document.querySelector('.topmax').style.display = 'block';
// 头部导航栏点击效果
var top_dhl = document.querySelector('.top_dhl').children;
var nrmax_s = document.querySelectorAll('.nrmaxs');
//显示第一个导航栏
if (localStorage.zi_ti_click_color !== '') {
    top_dhl[0].style.color = localStorage.zi_ti_click_color;
    top_dhl[0].style.borderBottom = '2px solid ' + localStorage.zi_ti_click_color;
} else {
    top_dhl[0].classList.add('dhr_click');
}
//标记数组
for (var i = 0; i < 4; i++) {
    top_dhl[i].setAttribute('date-num', i);
}
for (var i = 0; i < 4; i++) {
    // 禁止选择字体
    top_dhl[i].addEventListener('selectstart', function(e) {
        e.preventDefault();
    });
    //点击效果
    top_dhl[i].addEventListener('click', function() {
        topmax.style.top = '0px';
        // 变颜色
        for (var i = 0; i < 4; i++) {
            if (localStorage.zi_ti_click_color !== '') {
                top_dhl[i].style.color = '';
                top_dhl[i].style.borderBottom = '';
            } else {
                top_dhl[i].classList.remove('dhr_click');
            }
        }
        if (localStorage.zi_ti_click_color !== '') {
            this.style.color = localStorage.zi_ti_click_color;
            this.style.borderBottom = '2px solid ' + localStorage.zi_ti_click_color;
        } else {
            this.classList.add('dhr_click');
        }
        // 切换页面
        for (var i = 0; i < 4; i++) {
            nrmax_s[i].style.display = 'none';
            nrmax_s[i].style.opacity = '0';
        }
        nrmax_s[this.getAttribute('date-num')].style.display = 'block';
        this_nrmax_s = nrmax_s[this.getAttribute('date-num')];
        setTimeout(function() {
            this_nrmax_s.style.opacity = '1';
        });
        console.clear();
        if (this.getAttribute('date-num') == 0) {
            if (so_ssk.placeholder == '搜索引擎') {
                so_ssk.placeholder = '搜索引擎 / Ctrl + ?';
            }
            nrmaxs0_nr.scrollTop = 0;
        }
        if (this.getAttribute('date-num') == 1) {
            if (so_ssk.placeholder == '搜索引擎 / Ctrl + ?') {
                so_ssk.placeholder = '搜索引擎';
            }
            console.log('指向: ' + zhi_xian);
            console.log('链接导航栏指向: ' + dhr_zhi_xian);
            console.log('链接导航栏右击指向: ' + dhr_zhi_xian2);
            console.log('链接指向: ' + lj_zhi_xian);
            console.log('功能指向: ' + gong_neng);
            console.log('------------------------');
        }
        if (this.getAttribute('date-num') == 2) {
            if (so_ssk.placeholder == '搜索引擎 / Ctrl + ?') {
                so_ssk.placeholder = '搜索引擎';
            }
            liu_yan_srk = document.querySelector('.liu_yan_srk');
            liu_yan_srk.focus();
            console.log('内存留言指向: ' + liu_yan_zhi_xian);
            console.log('留言指向: ' + liu_yan_zhi_xian2);
            //显示最下方
            liu_yan_top.scroll(0, 100000000);
        }
        if (this.getAttribute('date-num') == 3) {
            if (so_ssk.placeholder == '搜索引擎') {
                so_ssk.placeholder = '搜索引擎 / Ctrl + ?';
            }
            var shezhi_min = document.querySelector('.shezhi_min');
            shezhi_ym = document.querySelectorAll('.shezhi_ym');
            for (var i = 0; i < shezhi_ym.length; i++) {
                shezhi_ym[i].style.display = 'none';
            }
            shezhi_min.style.display = 'block';
            shezhi_min.scroll(0, 0);
        }
    });
}

//万能搜索
so_ssk = document.querySelector('.so_ssk');
so_anniu = document.querySelector('.so_anniu');
so_yq = document.querySelector('.so_yq');
so_yqs = document.querySelectorAll('.so_yqs');
so_yq_s = document.querySelector('.so_yq_s');
nrmaxs3 = document.querySelector('.nrmaxs3');
//设置引擎
so_yq.innerHTML = localStorage.sy_sosuo_yq;
//添加紧选
so_yq.addEventListener('selectstart', function(e) {
    e.preventDefault();
});
//显示切换引擎
so_yq.addEventListener('click', function(e) {
    e.stopPropagation();
    ssbqym.style.display = 'none';
    so_yq_s.style.display = 'block';
});
//切换引擎
for (var i = 0; i < so_yqs.length; i++) {
    so_yqs[i].addEventListener('click', function() {
        //更改内存
        localStorage.sy_sosuo_yq = this.getAttribute('date_yq_num');
        // 更改HTML
        so_yq.innerHTML = localStorage.sy_sosuo_yq;
    });
}
//检测是否选中搜索框
so_ssk_num = 0;
so_ssk.addEventListener('focus', function() {
    so_ssk_num = 1;
});
so_ssk.addEventListener('blur', function() {
    so_ssk_num = 0;
});
//搜索按钮
so_anniu.addEventListener('click', function() {
    if (so_ssk.value !== '') {
        // 检测是否是直接网址
        if (so_ssk.value.substring(0, 4) == 'http' || so_ssk.value.substring(0, 4) == 'file') {
            window.open(so_ssk.value);
        } else if (so_ssk.value[0] == '[' && so_ssk.value[so_ssk.value.length - 1] == ']') {
            var lsjl = JSON.parse(localStorage.lsjl);
            var rsjl = JSON.parse(so_ssk.value);
            var rsjl2 = [];
            for (var i = 0; i < rsjl.length; i++) {
                if (lsjl.indexOf(rsjl[i]) == -1) {
                    rsjl2.push(rsjl[i]);
                }
            }
            var xlsjl = lsjl.concat(rsjl2);
            localStorage.lsjl = JSON.stringify(xlsjl);
            Sku_tctx('已添 ' + rsjl2.length + ' 条无重复搜索记录');
        } else if (so_ssk.value == 'wugenshen') {
            mrrd_sx();
        } else {
            // 不是直接网址时搜索
            if (so_yq.innerHTML == '百度') {
                window.open('https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=baidu&wd=' + so_ssk.value);
            } else if (so_yq.innerHTML == '搜狗') {
                window.open('https://www.sogou.com/sogou?query=' + so_ssk.value);
            } else if (so_yq.innerHTML == '360') {
                window.open('https://www.so.com/s?q=' + so_ssk.value);
            } else if (so_yq.innerHTML == '必应') {
                window.open('https://cn.bing.com/search?q=' + so_ssk.value);
            } else if (so_yq.innerHTML == '神马') {
                window.open('https://so.m.sm.cn/s?q=' + so_ssk.value);
            } else if (so_yq.innerHTML == '头条') {
                window.open('https://so.toutiao.com/search?dvpf=pc&source=input&keyword=' + so_ssk.value);
            } else if (so_yq.innerHTML == '中国') {
                window.open('https://www.chinaso.com/newssearch/all/allResults?q=' + so_ssk.value);
            } else if (so_yq.innerHTML == '谷歌') {
                window.open('https://www.google.com/search?q=' + so_ssk.value);
            } else if (so_yq.innerHTML == '抖音') {
                window.open('https://www.douyin.com/search/' + so_ssk.value + '?ug_source=lenovo_stream');
            } else if (so_yq.innerHTML == '知乎') {
                window.open('https://www.zhihu.com/search?q=' + so_ssk.value + '&type=content');
            } else if (so_yq.innerHTML == 'B站') {
                window.open('https://search.bilibili.com/all?keyword=' + so_ssk.value + '&from_source=webtop_search');
            } else if (so_yq.innerHTML == '淘宝') {
                window.open('https://ai.taobao.com/search/index.htm?key=' + so_ssk.value);
            } else if (so_yq.innerHTML == '京东') {
                window.open('https://search.jd.com/Search?keyword=' + so_ssk.value);
            } else if (so_yq.innerHTML == '微博') {
                window.open('https://s.weibo.com/weibo?q=' + so_ssk.value);
            }
        }
    }


    // 检测是否在记录里
    var inputValue = so_ssk.value;;
    var trimmedValue = inputValue.trim();
    // 检测输入的值是否全是空格
    if (trimmedValue.length !== 0) {
        if (so_ssk.value[0] !== '[' && so_ssk.value[so_ssk.value.length - 1] !== ']' && so_ssk.value !== 'wugenshen') {
            var lsjl = JSON.parse(localStorage.lsjl);
            var qrgs = lsjl.indexOf(so_ssk.value);
            var mrrd = JSON.parse(localStorage.mrrd);
            if (qrgs == -1) {
                // 没有时：添加
                lsjl.unshift(so_ssk.value);
                // 热点置顶
                if (mrrd.indexOf(so_ssk.value) !== -1) {
                    var asd = mrrd.indexOf(so_ssk.value);
                    mrrd.splice(asd, 1);
                    mrrd.unshift(so_ssk.value);
                    localStorage.mrrd = JSON.stringify(mrrd);
                }
            } else {
                // 有时：置顶
                lsjl.splice(qrgs, 1);
                lsjl.unshift(so_ssk.value);
                // 热点置顶
                if (mrrd.indexOf(so_ssk.value) !== -1) {
                    var asd = mrrd.indexOf(so_ssk.value);
                    mrrd.splice(asd, 1);
                    mrrd.unshift(so_ssk.value);
                    localStorage.mrrd = JSON.stringify(mrrd);
                }
            }
            localStorage.lsjl = JSON.stringify(lsjl);
        }
        // 设置页面重新加载
        var ssjl_min = document.querySelector('.ssjl_min');
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

    so_ssk.value = '';
    so_ssk.blur();
    var ssbqym_max = document.querySelector('.ssbqym_max');
    ssbqym_max.scroll(0, 0);
    ssbqym.style.display = 'none';
});

//头像上传
top_tou_xian = document.querySelector('.top_tou_xian');
top_tou_xian_sc = document.querySelector('.top_tou_xian_sc');
tou_xian_tp = document.querySelector('.tou_xian_tp');
input_tou_xian = document.querySelector('.input_tou_xian');
tou_xian_qr = document.querySelector('.tou_xian_qr');
top_tou_xian.style.backgroundImage = 'url(' + localStorage.tou_xiang + ')';
top_tou_xian.addEventListener('click', function(e) {
    e.stopPropagation();
    top_tou_xian_sc.style.display = 'block';
    tou_xian_tp.style.backgroundImage = 'url(' + localStorage.tou_xiang + ')';
    input_tou_xian.value = '';
    input_tou_xian.focus();
});
top_tou_xian_sc.addEventListener('click', function(e) {
    e.stopPropagation();
});
tou_xian_qr.addEventListener('click', function() {
    if (input_tou_xian.value !== '') {
        localStorage.tou_xiang = input_tou_xian.value;
        top_tou_xian.style.backgroundImage = 'url(' + input_tou_xian.value + ')';
        input_tou_xian.value = '';
        top_tou_xian_sc.style.display = 'none';
        Sku_tctx('头像上传成功');
    } else {
        top_tou_xian_sc.style.display = 'none';
    }
});



//全局选择事件
document.addEventListener('selectstart', function(e) {
    e.preventDefault();
});
//全局右击事件
document.addEventListener('contextmenu', function() {
    so_yq_s.style.display = 'none';
    top_tou_xian_sc.style.display = 'none';
});
//全局左击事件
document.addEventListener('click', function() {
    so_yq_s.style.display = 'none';
    top_tou_xian_sc.style.display = 'none';
});
//全局按键事件
document.addEventListener('keyup', function(e) {
    if (top_tou_xian_sc.style.display == 'block') {
        if (input_tou_xian.value !== '') {
            tou_xian_tp.style.backgroundImage = 'url(' + input_tou_xian.value + ')';
        } else {
            tou_xian_tp.style.backgroundImage = 'url(' + localStorage.tou_xiang + ')';
        }
    }
})

document.addEventListener('keydown', function(e) {
    if (e.key == 'Enter' && so_ssk_num == 1) {
        so_anniu.click();
    }
    if (e.key == 'Enter' && drym_max.style.display == 'block') {
        drym_dr.click();
    }
    if (top_tou_xian_sc.style.display == 'block' && e.key == 'Enter') {
        tou_xian_qr.click();
    }

    var nrmaxs = document.querySelectorAll('.nrmaxs');
    if (e.altKey && e.key == '1' && drym_max.style.display == 'none' && nrmaxs[0].style.display == 'none') {
        top_dhl_z = document.querySelector('.top_dhl');
        top_dhl_z.querySelectorAll('div')[0].click();
    }
    if (e.altKey && e.key == '2' && drym_max.style.display == 'none' && nrmaxs[1].style.display == 'none') {
        top_dhl_z = document.querySelector('.top_dhl');
        top_dhl_z.querySelectorAll('div')[1].click();
    }
    if (e.altKey && e.key == '3' && drym_max.style.display == 'none' && nrmaxs[2].style.display == 'none') {
        top_dhl_z = document.querySelector('.top_dhl');
        top_dhl_z.querySelectorAll('div')[2].click();
    }
    if (e.altKey && e.key == '4' && drym_max.style.display == 'none' && nrmaxs[3].style.display == 'none') {
        top_dhl_z = document.querySelector('.top_dhl');
        top_dhl_z.querySelectorAll('div')[3].click();
    }
    if (e.ctrlKey && e.key == '/') {
        if ((nrmaxs0.style.display == 'block' || nrmaxs3.style.display == 'block') && nrmax.style.display == 'block') {
            sy_dw_top.click();
            so_ssk.focus();
        }
    }
});

//动态背景
function max_dtbj_hs() {
    max_dtbj = document.querySelector('.max_dtbj');
    max_dtbj.style.width = window.innerWidth + 'px';
    max_dtbj.style.height = window.innerHeight + 'px';
}
max_dtbj_hs();
window.addEventListener('resize', function() {
    max_dtbj_hs();
});



//开机天气
max_dtbj = document.querySelector('.max_dtbj');
if (localStorage.tian_qi) {
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

// RGB转换器
function RGB_zhq(hex, opacity) {
    if (!opacity) {
        let rgb = 'rgb(' + parseInt('0x' + hex.slice(1, 3)) + ', ' +
            parseInt('0x' + hex.slice(3, 5)) + ', ' +
            parseInt('0x' + hex.slice(5, 7)) + ')';
        return rgb;
    } else {
        let rgba = 'rgba(' + parseInt('0x' + hex.slice(1, 3)) + ', ' +
            parseInt('0x' + hex.slice(3, 5)) + ', ' +
            parseInt('0x' + hex.slice(5, 7)) + ', ' +
            (opacity) + ')';
        return rgba;
    }
}

//开机字体
if (localStorage.zi_ti_color !== '') {

    function zi_ti_color_bh(color, tmd) {
        var style_s1 = document.querySelector('.style_s1');
        style_s1.innerHTML = 'html {color:' + RGB_zhq(localStorage.zi_ti_color) + ';} .top_dhl div:hover,.sy_dwck_s:hover {background-color:' + RGB_zhq(localStorage.zi_ti_click_color, 0.15) + ';} .so_yq:hover {color:' + RGB_zhq(localStorage.zi_ti_click_color) + ';} .so_yq {border-color:' + RGB_zhq(localStorage.zi_ti_color) + ';} ::placeholder {color:' + RGB_zhq(localStorage.zi_ti_color, 0.5) + ';} .iconfont:hover {color:' + RGB_zhq(localStorage.zi_ti_click_color) + ';} .so_ssk {color:' + RGB_zhq(localStorage.zi_ti_color) + '; border-color:' + RGB_zhq(localStorage.zi_ti_color) + ';} .iconfont {color:' + RGB_zhq(localStorage.zi_ti_color) + ';} .so_anniu {border-color:' + RGB_zhq(localStorage.zi_ti_color) + ';} .lian_jie_l div:hover {background-color:' + RGB_zhq(localStorage.zi_ti_click_color, 0.15) + ';} .lian_jie_l div {border-bottom:1px solid ' + RGB_zhq(localStorage.zi_ti_color, 0.3) + ';} .lj_xx_b,.lj_xx_b_2 {color:' + RGB_zhq(localStorage.zi_ti_color, 0.5) + ';} .lj_lj_t {color:' + RGB_zhq(localStorage.zi_ti_color) + '; border-color:' + RGB_zhq(localStorage.zi_ti_color) + ';} .lj_lj_b {color:' + RGB_zhq(localStorage.zi_ti_color) + '; border-color:' + RGB_zhq(localStorage.zi_ti_color) + ';} .lj_max {border-color:' + RGB_zhq(localStorage.zi_ti_color) + ';} .dhr_srk {border-color:' + RGB_zhq(localStorage.zi_ti_color) + '; color:' + RGB_zhq(localStorage.zi_ti_color) + ';} .dhr_qrk{border-color:' + RGB_zhq(localStorage.zi_ti_color) + ';} .dhr_qrk:hover {border-color:' + RGB_zhq(localStorage.zi_ti_click_color) + '; color:' + RGB_zhq(localStorage.zi_ti_click_color) + ';} .lj_max:hover {border-color:' + RGB_zhq(localStorage.zi_ti_click_color) + ';} .lj_lj_t:hover,.lj_lj_b:hover {color:' + RGB_zhq(localStorage.zi_ti_click_color) + ';border-color:' + RGB_zhq(localStorage.zi_ti_click_color) + ';} .lj_xg_tj input {color:' + RGB_zhq(localStorage.zi_ti_color) + ';border-color:' + RGB_zhq(localStorage.zi_ti_color) + ';} .jl_qrk:hover {border-color:' + RGB_zhq(localStorage.zi_ti_click_color) + '; color:' + RGB_zhq(localStorage.zi_ti_click_color) + ';} .jl_qrk {border-color:' + RGB_zhq(localStorage.zi_ti_color) + '; color:' + RGB_zhq(localStorage.zi_ti_color) + ';} .liu_yan_z {border-color:' + RGB_zhq(localStorage.zi_ti_color) + ';} .liu_yan_tx {border-color:' + RGB_zhq(localStorage.zi_ti_color, 0.75) + '; background-color:' + RGB_zhq(localStorage.zi_ti_color, 0.2) + ';} .liu_yan_sxuan_s:hover {background-color:' + RGB_zhq(localStorage.zi_ti_click_color, 0.15) + ';}';

        var style_s2 = document.querySelector('.style_s2');
        style_s2.innerHTML = '.liu_yan_top {border-color:' + RGB_zhq(localStorage.zi_ti_color, 0.7) + ';} .liu_yan_time {color:' + RGB_zhq(localStorage.zi_ti_color) + ';} .liu_yan_button {border-color:' + RGB_zhq(localStorage.zi_ti_color) + ';} .liu_yan_button:hover,.drym_dr:hover {border-color:' + RGB_zhq(localStorage.zi_ti_click_color) + '; color:' + RGB_zhq(localStorage.zi_ti_click_color) + ';} .input_djs_tjym_time_s,.input_djs_tjym_sj,.liu_yan_srk {color:' + RGB_zhq(localStorage.zi_ti_color) + ';} .liu_yan_sxuan_s {border-color:' + RGB_zhq(localStorage.zi_ti_color, 0.3) + ';} .shezhi_mins {border-color:' + RGB_zhq(localStorage.zi_ti_color, 0.2) + ';} .shezhi_ym_top {border-color:' + RGB_zhq(localStorage.zi_ti_color) + ';} .tianqi_s {border-color:' + RGB_zhq(localStorage.zi_ti_color) + ';} .bzsz_tj {background-color:' + RGB_zhq(localStorage.zi_ti_color, 0.5) + ';} .ztsz_chongzhi,.bjsz_chongzhi {border-color:' + RGB_zhq(localStorage.zi_ti_color) + ';} .ztsz_chongzhi:hover,.bjsz_chongzhi:hover {border-color:' + RGB_zhq(localStorage.zi_ti_click_color) + '; color:' + RGB_zhq(localStorage.zi_ti_click_color) + ';} .bjk_xzk {border-color:' + RGB_zhq(localStorage.zi_ti_color) + ';} .input_bzlj {border-color:' + RGB_zhq(localStorage.zi_ti_color) + '; color:' + RGB_zhq(localStorage.zi_ti_color) + ';} .bzsz_tj_anniu {border-color:' + RGB_zhq(localStorage.zi_ti_color) + '; color:' + RGB_zhq(localStorage.zi_ti_color) + ';} .bzsz_tj_anniu:hover { color:' + RGB_zhq(localStorage.zi_ti_click_color) + ';} .bzsz_tj_ym_TP {background-color:' + RGB_zhq(localStorage.zi_ti_color, 0.5) + ';} .shezhi_mins:hover {background-color:' + RGB_zhq(localStorage.zi_ti_click_color, 0.15) + ';color:' + RGB_zhq(localStorage.zi_ti_click_color) + ';} .ztfg_s {border-color:' + RGB_zhq(localStorage.zi_ti_color) + ';} .cdcsh_click,.bfsz_sccd,.bfsz_xzcd {background-color:' + RGB_zhq(localStorage.zi_ti_color, 0.2) + '; border-color:' + RGB_zhq(localStorage.zi_ti_color) + ';} .top_tou_xian {border-color:' + RGB_zhq(localStorage.zi_ti_color) + ';background-color:' + RGB_zhq(localStorage.zi_ti_color, 0.2) + ';} .top_tou_xian:hover {border-color:' + RGB_zhq(localStorage.zi_ti_click_color) + ';} .tou_xian_tp {background-color:' + RGB_zhq(localStorage.zi_ti_color, 0.5) + ';} .input_tou_xian,.tou_xian_qr {color:' + RGB_zhq(localStorage.zi_ti_color) + '; border-color:' + RGB_zhq(localStorage.zi_ti_color) + ';} .tou_xian_qr:hover {color:' + RGB_zhq(localStorage.zi_ti_click_color) + ';}';

        var style_s3 = document.querySelector('.style_s3');
        style_s3.innerHTML = '.sy_dwck_ym,.sy_dwck,.sy_zp_tj_ym,.sy_zpzs_max,.sy_hddb,.kcp_kc span,.kcp_xq span,.top_tou_xian_sc,.drym_min,.wl_max,.bzsz_tj_ym,.sy_djs_tjym,.sy_djs,.liu_yan_sxuan_div,.liu_yan_mao_bo_li,.lj_xg_tj,.dhr_xg_tj,.lian_jie_l_max,.lian_jie_r_max,.topmax,.shezhi_max,.music_ym {backdrop-filter: blur(' + localStorage.mao_bo_li + 'px);} .input_djs_tjym_time_s2,.input_djs_tjym_sj,.input_djs_tjym_time_s,.djs_tjym_qr,.mblxg,.input_drmm_mm,.daoru_ym_sc,.drmm_mm_qr,.drym_tx,.imput_drym_mm,.sy_zpzs_jr,.sy_zpzs_tj,.sy_zp_tj_anniu,.input_sy_zp_tj,.sy_hddb,.input_ji_ru_srk,.input_ji_ru_ss,.bfsz_zdbf_qrk,.sy_lbt_b {border-color:' + localStorage.zi_ti_color + ';} .input_djs_tjym_time_s2,.input_drmm_mm,.daoru_ym_sc,.imput_drym_mm,.input_sy_zp_tj,.input_ji_ru_srk,.input_ji_ru_ss {color:' + localStorage.zi_ti_color + ';} .sy_zp_tj_anniu:hover,.drmm_mm_qr:hover,.djs_tjym_qr:hover,.sy_zpzs_tj:hover,.sy_zpzs_jr:hover,.sy_dwck_s:hover,.daoru_ym_bendi_click:hover {color:' + localStorage.zi_ti_click_color + ';border-color:' + localStorage.zi_ti_click_color + ';} .drym_tx {background-color:' + RGB_zhq(localStorage.zi_ti_color, 0.2) + ';} .sy_dwck {color:' + RGB_zhq(localStorage.zi_ti_color, 0.5) + ';border-color:' + RGB_zhq(localStorage.zi_ti_color, 0.5) + ';} .sy_dwck_s {border-color:' + RGB_zhq(localStorage.zi_ti_color, 0.3) + ';} .liu_yan_z a, .lian_jie_ssk {color:' + localStorage.zi_ti_color + ';} .liu_yan_z a:hover {color:' + localStorage.zi_ti_click_color + ';} .daoru_ym_dc,.daoru_ym_dr,.daoru_ym_bendi,.daorubendi_s_sj,.daorubendi_s_yy,.daorubendi_s_cs {background-color:' + RGB_zhq(localStorage.zi_ti_color, 0.2) + '; border-color:' + RGB_zhq(localStorage.zi_ti_color) + ';}.input_tmd{background: -webkit-linear-gradient(' + localStorage.zi_ti_color + ', ' + localStorage.zi_ti_color + ') no-repeat, none;border: 1px solid ' + localStorage.zi_ti_color + ';}.input_tmd::-webkit-slider-thumb {background: ' + localStorage.zi_ti_color + ';}.music_s {border-bottom:1px solid ' + RGB_zhq(localStorage.zi_ti_color, 0.3) + ';}';

        var style_s5 = document.querySelector('.style_s5');
        style_s5.innerHTML = '.music_s:hover {background-color:' + RGB_zhq(localStorage.zi_ti_click_color, 0.1) + ';}.music_bottom_hk {background: -webkit-linear-gradient(' + RGB_zhq(localStorage.zi_ti_color) + ', ' + RGB_zhq(localStorage.zi_ti_color) + ') no-repeat,' + RGB_zhq(localStorage.zi_ti_color, 0.2) + ';}.music_bottom_hk::-webkit-slider-thumb { background: ' + RGB_zhq(localStorage.zi_ti_color) + ';} .music_boyyom_tj_ym,.Sku_tcjg_Max,.sy_lbt,.sy_djs_txl,.sy_nrs_t_span,.ssbqym,.sd_dtnr_max,.lj_zcb_ym {backdrop-filter: blur(' + localStorage.mao_bo_li + 'px);}.music_tjym_qd:hover {border-color:' + localStorage.zi_ti_click_color + ';color:' + localStorage.zi_ti_click_color + ';}.music_tjym_mz,.music_tjym_url,.ssjl_s{border-color:' + localStorage.zi_ti_color + ';color:' + localStorage.zi_ti_color + ';}.lian_jie_l2_sy{background-color:' + RGB_zhq(localStorage.zi_ti_click_color, 0.15) + ';border-bottom:1px solid ' + RGB_zhq(localStorage.zi_ti_click_color) + ';}.ssbq_s {border-bottom-color:' + RGB_zhq(localStorage.zi_ti_color, 0.5) + ' !important;}.ssbq_s:hover {background-color:' + RGB_zhq(localStorage.zi_ti_click_color, 0.15) + ';color:' + RGB_zhq(localStorage.zi_ti_click_color) + ';} .daoru_ym_jmdc{background-color:' + RGB_zhq(localStorage.zi_ti_color, 0.2) + '; border-color:' + RGB_zhq(localStorage.zi_ti_color) + ';} .su_biao{color:' + localStorage.zi_ti_color + ';}.daoru_ym_my{border-color:' + localStorage.zi_ti_color + ';color:' + localStorage.zi_ti_color + ';}.lbnr_ljbz{color:' + RGB_zhq(localStorage.zi_ti_color, 0.5) + ';}.lbnr_ljxz,.lbnr_ljdz,.lbnr_max {color:' + RGB_zhq(localStorage.zi_ti_color) + '; border-color:' + RGB_zhq(localStorage.zi_ti_color) + ';}.lbnr_ljxz:hover,.lbnr_ljdz:hover {color:' + RGB_zhq(localStorage.zi_ti_click_color) + ';border-color:' + RGB_zhq(localStorage.zi_ti_click_color) + ';}.sy_zpzs_kaiguan,.lbnr_ljtp{border-color:' + RGB_zhq(localStorage.zi_ti_color, 0.5) + ';}.sy_zpzs_kaiguan_ts{color:' + RGB_zhq(localStorage.zi_ti_color, 0.5) + ';}.WGS_HTSP_TJ,.shezhi_sp_xp_min2,.htsp_qjss_jdt,.lj_zcb_name,.lj_zcb_dizhi,.lj_zcb_qr {color:' + RGB_zhq(localStorage.zi_ti_color) + '; border-color:' + RGB_zhq(localStorage.zi_ti_color) + ';}.htsp_qjss_jdt2 {background-color:' + RGB_zhq(localStorage.zi_ti_color) + ';}.lj_lj_t:hover,.lj_lj_b:hover { box-shadow: 0px 0px 30px ' + RGB_zhq(localStorage.zi_ti_click_color, 0.3) + ';}.lj_max:hover { box-shadow: inset 0px -17px 15px -20px ' + RGB_zhq(localStorage.zi_ti_click_color, 0.8) + ';}';

        html_css();
    }

    zi_ti_color_bh();
}



function html_css() {
    document.documentElement.style.setProperty('--zi_ti_color', RGB_zhq(localStorage.zi_ti_color));
    document.documentElement.style.setProperty('--zi_ti_click_color', RGB_zhq(localStorage.zi_ti_click_color));
    document.documentElement.style.setProperty('--mao_bo_li', 'blur(' + localStorage.mao_bo_li + 'px)');
    document.documentElement.style.setProperty('--bei_jing_color', RGB_zhq(localStorage.bei_jing_color, localStorage.bei_jing_tmd));
    document.documentElement.style.setProperty('--bei_jing_kuan_color', RGB_zhq(localStorage.bei_jing_kuan_color, localStorage.bei_jing_kuan_tmd));
    document.documentElement.style.setProperty('--zi_ti_color_20', RGB_zhq(localStorage.zi_ti_color, 0.20));
    document.documentElement.style.setProperty('--zi_ti_click_color_15', RGB_zhq(localStorage.zi_ti_click_color, 0.15));
    document.documentElement.style.setProperty('--bei_jing_kuan_true', localStorage.bei_jing_kuan_ture + 'px');
}




//开机背景
topmax = document.querySelector('.topmax');
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

document.documentElement.style.setProperty('--bei_jing_color', RGB_zhq(localStorage.bei_jing_color, localStorage.bei_jing_tmd));


//开机背景框
var music_ym = document.querySelector('.music_ym');
var music_boyyom_yj = document.querySelector('.music_boyyom_yj');
var music_boyyom_tj_ym = document.querySelector('.music_boyyom_tj_ym');
var daoru_ym_dr_mmym = document.querySelector('.daoru_ym_dr_mmym');
var lj_zcb_ym = document.querySelector('.lj_zcb_ym');
var ztfg_tj_ym = document.querySelector('.ztfg_tj_ym');
var sy_hddb = document.querySelector('.sy_hddb');
var sy_zpzs_max = document.querySelector('.sy_zpzs_max');
var so_yq_s = document.querySelector('.so_yq_s');
if (localStorage.bei_jing_kuan_ture == 1) {
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
    sy_zp_tj_ym = document.querySelector('.sy_zp_tj_ym');
    sy_zp_tj_ym.style.border = '1px solid ' + RGB_zhq(localStorage.bei_jing_kuan_color, localStorage.bei_jing_kuan_tmd);
    sy_dwck_ym.style.border = '1px solid ' + RGB_zhq(localStorage.bei_jing_kuan_color, localStorage.bei_jing_kuan_tmd);
    sy_lbt = document.querySelector('.sy_lbt');
    sy_lbt.style.border = '1px solid ' + RGB_zhq(localStorage.bei_jing_kuan_color, localStorage.bei_jing_kuan_tmd);
    sy_djs.style.border = '1px solid ' + RGB_zhq(localStorage.bei_jing_kuan_color, localStorage.bei_jing_kuan_tmd);
    sy_nrs_t_span = document.querySelectorAll('.sy_nrs_t_span');
    for (var i = 0; i < sy_nrs_t_span.length; i++) {
        sy_nrs_t_span[i].style.border = '1px solid ' + RGB_zhq(localStorage.bei_jing_kuan_color, localStorage.bei_jing_kuan_tmd);
    }
    sy_djs_r_s = document.querySelectorAll('.sy_djs_r_s');
    for (var i = 0; i < (sy_djs_r_s.length < 6 ? sy_djs_r_s.length : sy_djs_r_s.length - 1); i++) {
        sy_djs_r_s[i].style.borderRight = '1px solid ' + RGB_zhq(localStorage.bei_jing_kuan_color, localStorage.bei_jing_kuan_tmd);
    }
    sy_djs_r_t = document.querySelectorAll('.sy_djs_r_t');
    for (var i = 0; i < sy_djs_r_t.length; i++) {
        sy_djs_r_t[i].style.borderBottom = '1px solid ' + RGB_zhq(localStorage.bei_jing_kuan_color, localStorage.bei_jing_kuan_tmd);
    }
    sy_djs_r_time = document.querySelectorAll('.sy_djs_r_time');
    for (var i = 0; i < sy_djs_r_time.length; i++) {
        sy_djs_r_time[i].style.borderBottom = '1px solid ' + RGB_zhq(localStorage.bei_jing_kuan_color, localStorage.bei_jing_kuan_tmd);
    }
    sy_djs_l = document.querySelector('.sy_djs_l');
    sy_djs_l.style.borderRight = '1px solid ' + RGB_zhq(localStorage.bei_jing_kuan_color, localStorage.bei_jing_kuan_tmd);
    sy_djs_l_t = document.querySelector('.sy_djs_l_t');
    sy_djs_l_t.style.borderBottom = '1px solid ' + RGB_zhq(localStorage.bei_jing_kuan_color, localStorage.bei_jing_kuan_tmd);
    sy_djs_l_time = document.querySelector('.sy_djs_l_time');
    sy_djs_l_time.style.borderBottom = '1px solid ' + RGB_zhq(localStorage.bei_jing_kuan_color, localStorage.bei_jing_kuan_tmd);
    sy_hddb.style.border = '1px solid ' + RGB_zhq(localStorage.bei_jing_kuan_color, localStorage.bei_jing_kuan_tmd);
    sy_zpzs_max.style.border = '1px solid ' + RGB_zhq(localStorage.bei_jing_kuan_color, localStorage.bei_jing_kuan_tmd);
    music_ym.style.border = '1px solid ' + RGB_zhq(localStorage.bei_jing_kuan_color, localStorage.bei_jing_kuan_tmd);
    music_boyyom_yj.style.border = '1px solid ' + RGB_zhq(localStorage.bei_jing_kuan_color, localStorage.bei_jing_kuan_tmd);
    music_boyyom_tj_ym.style.border = '1px solid ' + RGB_zhq(localStorage.bei_jing_kuan_color, localStorage.bei_jing_kuan_tmd);
    sy_djs_txl = document.querySelector('.sy_djs_txl');
    sy_djs_txl.style.border = '1px solid ' + RGB_zhq(localStorage.bei_jing_kuan_color, localStorage.bei_jing_kuan_tmd);
    ssbqym = document.querySelector('.ssbqym');
    ssbqym.style.border = '1px solid ' + RGB_zhq(localStorage.bei_jing_kuan_color, localStorage.bei_jing_kuan_tmd);
    daoru_ym_dr_mmym.style.border = '1px solid ' + RGB_zhq(localStorage.bei_jing_kuan_color, localStorage.bei_jing_kuan_tmd);
    sy_3d_kaiguan = document.querySelector('.sy_3d_kaiguan');
    sy_3d_kaiguan.style.border = '1px solid ' + RGB_zhq(localStorage.bei_jing_kuan_color, localStorage.bei_jing_kuan_tmd);
    lj_zcb_ym.style.border = '1px solid ' + RGB_zhq(localStorage.bei_jing_kuan_color, localStorage.bei_jing_kuan_tmd);
    ztfg_tj_ym.style.border = '1px solid ' + RGB_zhq(localStorage.bei_jing_kuan_color, localStorage.bei_jing_kuan_tmd);
    so_yq_s.style.border = '1px solid ' + RGB_zhq(localStorage.bei_jing_kuan_color, localStorage.bei_jing_kuan_tmd);
}



//开机密码
if (localStorage.dr_mm !== '') {
    //显示密码框
    drmm_mm_mm_max = document.querySelector('.drmm_mm_mm_max');
    drmm_mm_mm_max.style.display = 'block';
    //显示提示
    drmm_mm_xmm = document.querySelector('.drmm_mm_xmm');
    drmm_mm_xmm.placeholder = '为空时，既取消 密码 与 密钥';
}
if (localStorage.dr_mm !== '' && mmdr_sf == 0) {
    //显示密码框
    drmm_mm_mm_max = document.querySelector('.drmm_mm_mm_max');
    drmm_mm_mm_max.style.display = 'block';
    //显示提示
    drmm_mm_xmm = document.querySelector('.drmm_mm_xmm');
    drmm_mm_xmm.placeholder = '为空时，既取消 密码 与 密钥';
    //显示登入页面
    drym_max = document.querySelector('.drym_max');
    drym_max.style.display = 'block';
    //隐藏内容
    nrmax = document.querySelector('.nrmax');
    nrmax.style.display = 'none';
    //设置登录页面
    drym_max = document.querySelector('.drym_max');
    drym_max.style.height = window.innerHeight + 'px';
    //头像
    drym_tx = document.querySelector('.drym_tx');
    drym_tx.style.backgroundImage = 'url(' + localStorage.tou_xiang + ')';
    //输入框
    imput_drym_mm = document.querySelector('.imput_drym_mm');
    imput_drym_mm.focus();
    //添加防盗网
    drmm_dsq = setInterval(function() {
        var drym_max = document.querySelector('.drym_max');
        var drym_min = document.querySelector('.drym_min');
        if (drym_min == null || drym_min.style.display == 'none' || nrmax.style.display !== 'none' || drym_max.style.display !== 'block' || drym_max == null || (localStorage.dr_mm_cf != 0 && imput_drym_mm.disabled == false)) {
            location.reload();
        }
    }, 1000);
}

//开机版本
max_bbxs = document.querySelector('.max_bbxs');
max_bbxs.innerHTML = localStorage.ban_ben;



//内存占用比

setInterval(function() {
    function calculateLocalStorageLength() {
        let length = 0;
        for (const key in localStorage) {
            if (localStorage.hasOwnProperty(key)) {
                length += key.length;
            }
        }
        return length;
    }
    const result = calculateLocalStorageLength();

    function calculateLocalStorageValueLengthAndSum() {
        let sum = 0;
        for (const key in localStorage) {
            if (localStorage.hasOwnProperty(key)) {
                sum += localStorage[key].length;
            }
        }
        return {
            sum
        };
    }
    const result2 = calculateLocalStorageValueLengthAndSum();
    var sync = 1 - (((result + result2.sum) * 1) / 5242880);
    var zgzfc = 5242880 - (result + result2.sum);

    // 转化为百分比并输出结果
    const remainingPercent = (sync * 100).toFixed(3);
    const remainingPercent2 = (sync * 100).toFixed(10);
    // console.log(`剩余内存:${remainingPercent}%`);

    var max_ncxs = document.querySelector('.max_ncxs');
    if (max_ncxs) { max_ncxs.innerHTML = `Free Memory:${remainingPercent}%`; }
    var gywm_nczbl = document.querySelector('.gywm_nczbl');
    if (gywm_nczbl) { gywm_nczbl.innerHTML = `${remainingPercent2}%  ( ` + zgzfc + ' / 5242880 )'; }


    // 放一个外来的：网络状态
    var sku_wlzt = document.querySelector('.sku_wlzt');
    // 使用函数检查设备是否在线
    function isOnline() {
        return navigator.onLine;
    }
    if (isOnline()) {
        //   在线
        if (sku_wlzt) { sku_wlzt.innerHTML = 'Status:Online'; }
    } else {
        //   不在线
        if (sku_wlzt) { sku_wlzt.innerHTML = 'Status:Offline'; }
    }
}, 5000);


window.addEventListener('unhandledrejection', function(event) {
    console.error('捕获到未处理的Promise拒绝:', event.reason);
});

var max_ncxs = document.querySelector('.max_ncxs');
max_ncxs.addEventListener('click', function(e) {
    document.querySelector('.top_dhl').querySelectorAll('div')[3].click();
    document.querySelector('.shezhi_gywm').click();
});





// 挂机锁屏
var sd_dtnr_max = document.querySelector('.sd_dtnr_max');
var i_sy_3d_kaiguan = document.querySelector('.i_sy_3d_kaiguan');
var sd_dtnr_min = document.querySelector('.sd_dtnr_min');
var i_music_boyyom_ks = document.querySelector('.i_music_boyyom_ks');

function sku_gjsp() {
    if (localStorage.dr_mm !== '' && drym_max.style.display == 'none') {
        //显示登入页面
        drym_max = document.querySelector('.drym_max');
        drym_max.style.display = 'block';
        //隐藏内容
        nrmax = document.querySelector('.nrmax');
        nrmax.style.display = 'none';
        //设置登录页面
        drym_max = document.querySelector('.drym_max');
        drym_max.style.height = window.innerHeight + 'px';
        //头像
        drym_tx = document.querySelector('.drym_tx');
        drym_tx.style.backgroundImage = 'url(' + localStorage.tou_xiang + ')';
        //输入框
        imput_drym_mm = document.querySelector('.imput_drym_mm');
        imput_drym_mm.focus();
        //添加防盗网
        drmm_dsq = setInterval(function() {
            var drym_max = document.querySelector('.drym_max');
            var drym_min = document.querySelector('.drym_min');
            if (drym_min == null || drym_min.style.display == 'none' || nrmax.style.display !== 'none' || drym_max.style.display !== 'block' || drym_max == null || (localStorage.dr_mm_cf != 0 && imput_drym_mm.disabled == false)) {
                location.reload();
            }
        }, 1000);
        // 去除定时器
        sy_lbt.innerHTML = '';
        sy_lbnr_dsq ? clearInterval(sy_lbnr_dsq) : undefined;
        sy_lbt_sc_jsq2 ? clearTimeout(sy_lbt_sc_jsq2) : undefined;
        sy_lbt_sc_jsq ? clearInterval(sy_lbt_sc_jsq) : undefined;
        // 推出3d
        if (sd_dtnr_max.style.display == 'block') {
            sd_dtnr_min.innerHTML = '';
            sd_dtnr_max.style.display = 'none';
            sy_lbnr_dsq_sd ? clearInterval(sy_lbnr_dsq_sd) : undefined;
            // 推出全屏
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            }
        }
        // 显示头部导航栏
        topmax.style.display = 'block';
        // 停止音乐
        if (i_music_boyyom_ks.className == 'iconfont i_music_boyyom_ks icon-zanting') {
            i_music_boyyom_ks.click();
        }
        // 时间戳0
        localStorage.dr_mmdr_drsj = 0;

        // 模拟点击
        drym_max.click();

        Sku_tctx('无操作 ' + localStorage.sku_xp_sp + ' 分钟 自动锁定');

    } else if (localStorage.dr_mm == '' && sd_dtnr_max.style.display == 'none') {
        // 停止音乐
        if (i_music_boyyom_ks.className == 'iconfont i_music_boyyom_ks icon-zanting') {
            i_music_boyyom_ks.click();
        }
        // 开始3d
        i_sy_3d_kaiguan.click();

        Sku_tctx('无操作 ' + localStorage.sku_xp_sp + ' 分钟 自动休眠');
    }
}

var zdsp_sjc = 0;
setInterval(function() {
    zdsp_sjc++;
    if (zdsp_sjc == (localStorage.sku_xp_sp * 60)) {
        sku_gjsp();
    }
}, 1000);

function handleMouseMove() {
    zdsp_sjc = 0;
}

// 绑定鼠标移动事件
document.addEventListener('mousemove', handleMouseMove);
document.addEventListener('mousedown', handleMouseMove); // 包括鼠标点击事件
document.addEventListener('keypress', handleMouseMove); // 包括键盘按键事件

// 锁屏设置页面
var shezhi_sp_xp_ym = document.querySelector('.shezhi_sp_xp_ym');
var shezhi_sp_xp = document.querySelector('.shezhi_sp_xp');
var shezhi_sp_xp_min2 = document.querySelector('.shezhi_sp_xp_min2');
shezhi_sp_xp.addEventListener('click', function(e) {
    shezhi_min.style.display = 'none';
    shezhi_sp_xp_ym.style.display = 'block';
});
shezhi_sp_xp_min2.value = localStorage.sku_xp_sp;
shezhi_sp_xp_min2.addEventListener('blur', function(e) {
    if (shezhi_sp_xp_min2.value >= 1 && shezhi_sp_xp_min2.value <= (60 * 24)) {
        Sku_tctx('更改成功 ! 无操作 ' + shezhi_sp_xp_min2.value + ' 分钟后自动(休眠/锁定)');
        localStorage.sku_xp_sp = shezhi_sp_xp_min2.value;
        localStorage.dr_mmdr_drsj = 0;
    } else if (shezhi_sp_xp_min2.value < 1) {
        Sku_tctx('更改失败 ! 时间不能小于 1 分钟');
        shezhi_sp_xp_min2.value = localStorage.sku_xp_sp;
    } else if (shezhi_sp_xp_min2.value > (60 * 24)) {
        Sku_tctx('更改失败 ! 时间不能大于 24 小时');
        shezhi_sp_xp_min2.value = localStorage.sku_xp_sp;
    }
});



// 相互关闭
// 点击的,不需要隐藏的...
function xhgb_dx(class1, class2, class3) {
    var xhgb_dx = ['lj_zcb_ym', 'so_yq_s', 'ssbqym', 'music_ym', 'top_tou_xian_sc', 'lj_xg_tj', 'dhr_xg_tj'];
    var dj = document.querySelector('.' + class1);
    dj.addEventListener('click', function(e) {
        for (var i = 0; i < xhgb_dx.length; i++) {
            if (xhgb_dx[i] !== class2 && xhgb_dx[i] !== class3) {
                document.querySelector('.' + xhgb_dx[i]).style.display = 'none';
            }
        }
    });
}
xhgb_dx('so_ssk', 'ssbqym');
xhgb_dx('so_yq', 'so_yq_s');
xhgb_dx('i_music_tb', 'music_ym');
xhgb_dx('top_tou_xian', 'top_tou_xian_sc');
xhgb_dx('dhr_shezhi_gn_tj', 'lj_xg_tj', 'dhr_xg_tj');
xhgb_dx('dhr_shezhi_gn_cmm', 'lj_xg_tj', 'dhr_xg_tj');
xhgb_dx('lj_zcb_i', 'lj_xg_tj', 'lj_zcb_ym');




// 页面可见度
// document.addEventListener('visibilitychange', function() {
//     if (document.visibilityState === 'hidden') {
//         console.log('页面不可见');
//         // 可以在这里执行一些操作，比如暂停视频播放
//     } else {
//         console.log('页面可见');
//         // 页面再次可见时，可以恢复之前暂停的操作
//     }
// });



// 区分千和万函数
function insertCommasEveryFourDigits(numberStr) {
    var numberStr = numberStr.toString();
    var xyds = 0;
    if (numberStr.length % 4 == 0) {
        xyds = (numberStr.length - 4) / 4;
    } else {
        xyds = (numberStr.length - (numberStr.length % 4)) / 4;
    }
    var numberStr_sz = [];
    numberStr = numberStr.split('').reverse().join('');
    for (var i = 0; i <= xyds; i++) {
        // 使用slice方法分割字符串，然后在指定位置插入逗号
        numberStr_sz[i] = numberStr.substring((i * 4), ((i + 1) * 4));
    }
    var numberStr2 = '';
    for (var i = 0; i < numberStr_sz.length; i++) {
        if (i === numberStr_sz.length - 1) {
            numberStr2 = numberStr2.concat(numberStr_sz[i]);
        } else {
            numberStr2 = numberStr2.concat(numberStr_sz[i]) + ',';
        }
    }
    numberStr2 = numberStr2.split('').reverse().join('');
    return numberStr2;
}




// var dhr_ym_r_s = document.querySelector('.dhr_ym_r_s');
// dhr_ym_r_s.addEventListener('click', (e) => {
//     if (e.target.classList.contains('lj_max')) {
//         console.log('Clicked on an element with class "lj_max"');

//         // 打印出触发事件的元素
//         console.log(e.target);

//         // 如果这个元素有id，打印出它的id
//         if (e.target.id) {
//             console.log('Element ID:', e.target.id);
//         }

//         // 打印出这个元素的HTML内容
//         console.log('Element HTML:', e.target.innerHTML);

//         // 打印出这个元素的文本内容
//         console.log('Element Text:', e.target.textContent);
//     }
// });