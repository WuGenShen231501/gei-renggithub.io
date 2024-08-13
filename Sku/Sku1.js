// 提示音
var sku_tsy = document.querySelectorAll('.sku_tsy');

function Sku_tsy(num) {
    sku_tsy[num].play();
}

// RGB转换器
function RGB_zhq(hex, opacity) {
    // 提取 RGB 分量
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);

    // 返回 RGB 或 RGBA 字符串
    return opacity !== undefined ?
        `rgba(${r}, ${g}, ${b}, ${opacity})` :
        `rgb(${r}, ${g}, ${b})`;
}


// 遍历对象到数组
function collectArrays(obj) {
    const arrays = [];

    function traverse(value) {
        if (Array.isArray(value)) {
            arrays.push(value);
        } else if (typeof value === 'object' && value !== null) {
            Object.values(value).forEach(traverse);
        }
    }
    Object.values(obj).forEach(traverse);
    return arrays;
}



// 匹配函数/不区分大小写
function containsAllChars(str11, str22) {
    var str1 = str11.toLowerCase(); //全部转为小写
    var str2 = str22.toLowerCase(); //全部转为小写
    if (localStorage.sscl == 0) {
        // 创建一个对象来记录str1中每个字符的出现次数
        const charCounts = {};
        for (const char of str1) {
            // 增加字符在str1中的出现次数
            charCounts[char] = (charCounts[char] || 0) + 1;
        }
        // 遍历str2，减少每个字符的计数
        for (const char of str2) {
            if (charCounts.hasOwnProperty(char)) {
                // 如果字符在str1中出现过，则减少其计数
                charCounts[char]--;
                // 如果计数变为0，则从对象中删除该字符
                if (charCounts[char] === 0) {
                    delete charCounts[char];
                }
            }
        }
        // 如果对象中没有剩余的字符，则说明str2中包含了str1中所有字符且满足出现次数要求
        return Object.keys(charCounts).length === 0;
    } else if (localStorage.sscl == 1) {
        return str2.indexOf(str1) !== -1;
    } else if (localStorage.sscl == 2) {
        return str2 === str1;
    }
}


// 所有文本超出字体浮动效果
function WGS_wenbengundon(qwe, asd) {
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
                this.style.textIndent = (nrcd * -1) + hzcd + (asd * 1) + 'px';
            });
            wb[i].addEventListener('mouseout', function(e) {
                this.style.transition = '';
                this.style.textIndent = asd + 'px';
            });
        }
    }
}



// 弹窗提醒
function Sku_tctx(zdysx1) {
    // 防止重复调用
    if (typeof Sku_tctx_ture === 'undefined') Sku_tctx_ture = 1;
    if (Sku_tctx_ture === 1) {
        Sku_tctx_ture = 0;
        setTimeout(() => Sku_tctx_ture = 1, 500);

        // 创建并配置 div 元素
        const div = document.createElement('div');
        div.className = "Sku_tcjg_Max";
        div.innerHTML = zdysx1;

        // 设置边框样式
        if (localStorage.bei_jing_kuan_ture == 1) {
            div.style.border = `1px solid ${RGB_zhq(localStorage.bei_jing_kuan_color, localStorage.bei_jing_kuan_tmd)}`;
        }

        // 添加到文档
        document.body.appendChild(div);

        // 居中显示
        div.style.position = 'absolute';
        div.style.left = `${(window.innerWidth - div.offsetWidth) / 2}px`;

        // 设定 3000 毫秒后移除 div
        setTimeout(() => document.body.removeChild(div), 3000);
    }
}



// 滚动条
function Sku_gundontiao(gun_don_ye1, gun_don_tiao_max1, gun_don_tiao_min1) {
    let scrollEndTimer;
    var gun_don_ye = document.querySelector(gun_don_ye1);
    var gun_don_tiao_max = document.querySelector(gun_don_tiao_max1);
    var gun_don_tiao_min = document.querySelector(gun_don_tiao_min1);
    // 页面滚动时
    gun_don_ye.addEventListener('scroll', function(e) {
        var gun_don_tiao_min_h = this.offsetHeight / this.scrollHeight;
        if (gun_don_tiao_min_h * (gun_don_tiao_max.offsetHeight) < 20) {
            gun_don_tiao_min.style.height = '20px';
        } else {
            gun_don_tiao_min.style.height = gun_don_tiao_min_h * 100 + '%';
        }
        var top_bdz;
        if (this.scrollHeight > this.offsetHeight) {
            top_bdz = (this.scrollTop / (this.scrollHeight - this.offsetHeight)) * (gun_don_tiao_max.offsetHeight - gun_don_tiao_min.offsetHeight);
        } else {
            top_bdz = 0;
        }
        gun_don_tiao_min.style.top = top_bdz + 'px';
        if (gun_don_tiao_max.offsetHeight > gun_don_tiao_min.offsetHeight) {
            gun_don_tiao_max.style.transition = '0.2s';
            gun_don_tiao_max.style.opacity = '1';
        } else {
            gun_don_tiao_max.style.transition = '0s';
            gun_don_tiao_max.style.opacity = '0';
        }

        // 滚动结束计时器
        if (scrollEndTimer) clearTimeout(scrollEndTimer);
        scrollEndTimer = setTimeout(onScrollEnd, 500);
    });
    // 触摸滚动条
    gun_don_tiao_max.addEventListener('mouseover', function(e) {
        var gun_don_tiao_min_h = gun_don_ye.offsetHeight / gun_don_ye.scrollHeight;
        if (gun_don_tiao_min_h * (gun_don_tiao_max.offsetHeight) < 20) {
            gun_don_tiao_min.style.height = '20px';
        } else {
            gun_don_tiao_min.style.height = gun_don_tiao_min_h * 100 + '%';
        }
        var top_bdz;
        if (gun_don_ye.scrollHeight > gun_don_ye.offsetHeight) {
            top_bdz = (gun_don_ye.scrollTop / (gun_don_ye.scrollHeight - gun_don_ye.offsetHeight)) * (gun_don_tiao_max.offsetHeight - gun_don_tiao_min.offsetHeight);
        } else {
            top_bdz = 0;
        }
        gun_don_tiao_min.style.top = top_bdz + 'px';
        if (gun_don_tiao_max.offsetHeight > gun_don_tiao_min.offsetHeight) {
            this.style.transition = '0.2s';
            this.style.opacity = '1';
        } else {
            gun_don_tiao_max.style.transition = '0s';
            gun_don_tiao_max.style.opacity = '0';
        }
    });
    gun_don_tiao_max.addEventListener('mouseout', function(e) {
        this.style.transition = '0.5s';
        this.style.opacity = '0';
    });
    // 拖拉滚动条
    gun_don_tiao_min.addEventListener('mousedown', function(e) {
        e.stopPropagation();
        e.preventDefault();

        var y2 = e.pageY - this.offsetTop;

        document.addEventListener('mousemove', wgsLAIDONTIAO2);

        function wgsLAIDONTIAO2(e) {
            var y_ZhouPianYiLian = e.pageY - y2;
            if (y_ZhouPianYiLian < 0) {
                y_ZhouPianYiLian = 0;
            } else if (y_ZhouPianYiLian > gun_don_tiao_max.offsetHeight - gun_don_tiao_min.offsetHeight) {
                y_ZhouPianYiLian = gun_don_tiao_max.offsetHeight - gun_don_tiao_min.offsetHeight;
            }

            gun_don_tiao_min.style.top = y_ZhouPianYiLian + 'px';
            gun_don_ye.scroll(0, parseFloat(gun_don_tiao_min.style.top) / (gun_don_tiao_max.offsetHeight - gun_don_tiao_min.offsetHeight) * (gun_don_ye.scrollHeight - gun_don_ye.offsetHeight));
        }

        document.addEventListener('mouseup', wgsTanQiXiaoChu2);

        function wgsTanQiXiaoChu2(e) {
            document.removeEventListener('mousemove', wgsLAIDONTIAO2);
            document.removeEventListener('mouseup', wgsTanQiXiaoChu2);
        }
    });
    // 滚动结束
    function onScrollEnd() {
        gun_don_tiao_max.style.transition = '0.5s';
        gun_don_tiao_max.style.opacity = '0';
    }
}








//定义高度
window.addEventListener('resize', function() {
    gaodu_hs();
});

function gaodu_hs() {
    nrmaxs0 = document.querySelector('.nrmaxs0');
    nrmaxs0.style.height = window.innerHeight + 'px';
}
gaodu_hs();



//滚动隐藏导航栏
topmax = document.querySelector('.topmax');
nrmaxs0_nr = document.querySelector('.nrmaxs0_nr');
nrmaxs0_nr.addEventListener('scroll', function() {
    if (nrmaxs0_nr.scrollTop >= 90) {
        topmax.style.top = '-200px';
        topmax.click();
    } else {
        topmax.style.top = '0px';
    }
});

//滚动显示回到顶部
sy_lbt_b = document.querySelector('.sy_lbt_b');
sy_hddb = document.querySelector('.sy_hddb');
nrmaxs0_nr = document.querySelector('.nrmaxs0_nr');
nrmaxs0_nr.addEventListener('scroll', function() {
    if (nrmaxs0_nr.scrollTop >= sy_lbt_b.offsetTop) {
        sy_hddb.style.transform = 'translateY(0px)';
        sy_hddb.style.opacity = '1';
    } else {
        sy_hddb.style.transform = 'translateY(200px)';
        sy_hddb.style.opacity = '0';
    }
});
sy_hddb.addEventListener('click', function() {
    sy_dw_top.click();
});

// 匹配浏览器高度
sy_lbt = document.querySelector('.sy_lbt');
sy_lbt_b = document.querySelector('.sy_lbt_b');
sy_djs_tjym = document.querySelector('.sy_djs_tjym');
sy_zp_tj_ym = document.querySelector('.sy_zp_tj_ym');
sy_lbt.style.marginTop = (window.innerHeight + 56 - 523 - 84) / 2 + 'px';
sy_lbt_b.style.marginTop = ((window.innerHeight + 56 - 523 - 84) / 2) - 56 + 'px';
sy_djs_tjym.style.top = ((window.innerHeight - 300) / 2) + 'px';
sy_zp_tj_ym.style.top = ((window.innerHeight - 300) / 2) + 'px';
window.addEventListener('resize', function() {
    sy_lbt = document.querySelector('.sy_lbt');
    sy_lbt_b = document.querySelector('.sy_lbt_b');
    sy_djs_tjym = document.querySelector('.sy_djs_tjym');
    sy_zp_tj_ym = document.querySelector('.sy_zp_tj_ym');
    sy_lbt.style.marginTop = (window.innerHeight + 56 - 523 - 84) / 2 + 'px';
    sy_lbt_b.style.marginTop = ((window.innerHeight + 56 - 523 - 84) / 2) - 56 + 'px';
    sy_djs_tjym.style.top = ((window.innerHeight - 300) / 2) + 'px';
    sy_zp_tj_ym.style.top = ((window.innerHeight - 300) / 2) + 'px';
});




//开始轮播图上浮
mmdr_sf = 0;
if (localStorage.dr_mmdr == 1 && ((localStorage.dr_mmdr_drsj - 0 + (1000 * 60 * localStorage.dr_mmdr_mmfw)) - (+new Date()) > 0)) {
    mmdr_sf = 1;
}

if (localStorage.dr_mm == '' || (localStorage.dr_mm !== '' && mmdr_sf == 1)) {
    setTimeout(function() {
        nrmaxs0_nr = document.querySelector('.nrmaxs0_nr');
        nrmaxs0_nr.style.opacity = 1;
        nrmaxs0_nr.style.transform = 'translateY(0px)';
    }, 100);
}





//浮动效果
// fudong_xiaoguo(需要浮动的盒子, 相对盒子)
function fudong_xiaoguo(dong_div_s, xian_dui_s) {
    var dong_div = document.querySelectorAll(dong_div_s);
    var xian_dui = document.querySelector(xian_dui_s);
    for (var i = 0; i < dong_div.length; i++) {
        dong_div[i].style.transition = '1s';
        dong_div[i].style.transitionDelay = '100ms';
    }
    for (var i = 0; i < dong_div.length; i++) {
        if (window.innerHeight < dong_div[i].offsetTop) {
            dong_div[i].style.transform = 'translateY(400px)';
            dong_div[i].style.opacity = '0';
        } else {
            dong_div[i].style.transform = 'translateY(0px)';
            dong_div[i].style.opacity = '1';
        }
    }
    xian_dui.addEventListener('scroll', function() {
        for (var i = 0; i < dong_div.length; i++) {
            if (xian_dui.offsetHeight + xian_dui.scrollTop > dong_div[i].offsetTop) {
                dong_div[i].style.transform = 'translateY(0px)';
                dong_div[i].style.opacity = '1';
            } else {
                dong_div[i].style.transform = 'translateY(400px)';
                dong_div[i].style.opacity = '0';
            }
        }
    });
}

fudong_xiaoguo('.fundong', '.nrmaxs0_nr');




//输出指向
sy_gn_zhixian = '无'
sy_nb_zhixian = '无'

function sy_zhixian() {
    console.clear();
    console.log('功能指向:' + sy_gn_zhixian);
    console.log('内部指向:' + sy_nb_zhixian);
}



//倒计时

//添加按钮
sy_djs_r = document.querySelector('.sy_djs_r');
sy_shezhi_gn = document.querySelector('.sy_shezhi_gn');
sy_shezhi_gn_cmm = document.querySelector('.sy_shezhi_gn_cmm');
sy_shezhi_gn_sc = document.querySelector('.sy_shezhi_gn_sc');
sy_djs_r.addEventListener('contextmenu', function(e) {
    e.stopPropagation();
    e.preventDefault();
    sy_gn_zhixian = '倒计时';
    sy_zhixian();
    //显示设置功能
    sy_shezhi_gn.style.display = 'block';
    sy_shezhi_gn_cmm.style.display = 'none';
    sy_shezhi_gn_sc.style.display = 'none';
    sy_shezhi_gn.style.top = e.pageY + 'px';
    sy_shezhi_gn.style.left = e.pageX + 'px';
});

// 时间
function time_day_yr() {
    var time_day = new Date();
    var y = time_day.getMonth() + 1;
    var r = time_day.getDate();
    y = y < 10 ? '0' + y : y;
    r = r < 10 ? '0' + r : r;
    return y + '月' + r + '日';
}

function time_day_sfm() {
    var time_day = new Date();
    var s = time_day.getHours();
    var f = time_day.getMinutes();
    var m = time_day.getSeconds();
    s = s < 10 ? '0' + s : s;
    f = f < 10 ? '0' + f : f;
    m = m < 10 ? '0' + m : m;
    return s + ':' + f + ':' + m;
}
sy_djs_l_yr_time = document.querySelector('.sy_djs_l_yr_time');
sy_djs_l_time = document.querySelector('.sy_djs_l_time');
sy_djs_l_yr_time.innerHTML = time_day_yr();
sy_djs_l_time.innerHTML = time_day_sfm();
var sy_djs_zxsj_sjq;
sy_djs_zxsj_sjq = setInterval(function() {
    sy_djs_l_yr_time.innerHTML = time_day_yr();
    sy_djs_l_time.innerHTML = time_day_sfm();
}, 1000);

// 重新排序
function sy_djs_px() {
    var sy_djs = JSON.parse(localStorage.sy_djs);
    //对象排序
    var asd = {};
    for (var i = 0; i < Object.keys(sy_djs).length; i++) {
        asd['sy_djs' + i] = sy_djs[Object.keys(sy_djs)[i]];
    }
    //内容排序
    for (var i = 0; i < Object.keys(asd).length; i++) {
        for (var j = 0; j < Object.keys(asd).length - 1 - i; j++) {
            if (asd[Object.keys(asd)[j]][1] > asd[Object.keys(asd)[j + 1]][1]) {
                var th = asd[Object.keys(asd)[j + 1]];
                asd[Object.keys(asd)[j + 1]] = asd[Object.keys(asd)[j]];
                asd[Object.keys(asd)[j]] = th;
            }
        }

    }
    localStorage.sy_djs = JSON.stringify(asd);
}
sy_djs_px();

//输出倒计时
var djs_s;

function SC_djs() {
    //输出个数
    sy_djs_r_min = document.querySelector('.sy_djs_r_min');
    var sy_djs = JSON.parse(localStorage.sy_djs);
    for (var i = 0; i < Object.keys(sy_djs).length; i++) {
        var divs = document.createElement('div');
        divs.className = 'sy_djs_r_s';
        divs.setAttribute('djs-num', i);
        //添加按键
        divs.addEventListener('contextmenu', function(e) {
            e.stopPropagation();
            e.preventDefault();
            sy_nb_zhixian = this.getAttribute('djs-num');
            sy_gn_zhixian = '倒计时';
            sy_zhixian();
            //显示设置
            sy_shezhi_gn.style.display = 'block';
            sy_shezhi_gn_cmm.style.display = 'none';
            sy_shezhi_gn_sc.style.display = 'block';
            sy_shezhi_gn.style.top = e.pageY + 'px';
            sy_shezhi_gn.style.left = e.pageX + 'px';
        });
        divs.innerHTML = '<sy_djs_l class="sy_djs_r_t">' + sy_djs['sy_djs' + i][0] + '</sy_djs_l><sy_djs_l class="sy_djs_r_time"></sy_djs_l><sy_djs_l class="sy_djs_r_b">' + sy_djs['sy_djs' + i][2] + '</sy_djs_l>';
        sy_djs_r_min.appendChild(divs);
    }
    //定义长度
    sy_djs_r_min.style.width = (200 * Object.keys(sy_djs).length) + 'px';

    //倒计时
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
                return '明天';
            } else if (sytians == 2) {
                return '后天';
            } else if (sytians == 3) {
                return '大后天';
            } else {
                return sytians + '天后';
            }
            // return (h + d * 24) + ':' + m + ':' + s;
        } else {
            return h + ':' + m + ':' + s;
        }
    }

    var sy_djs_r_s = document.querySelectorAll('.sy_djs_r_s');
    var sy_djs = JSON.parse(localStorage.sy_djs);
    for (var i = 0; i < Object.keys(sy_djs).length; i++) {
        if (+new Date(sy_djs[Object.keys(sy_djs)[i]][2]) - +new Date() < 0) {
            if (+new Date(sy_djs[Object.keys(sy_djs)[i]][2]) - +new Date() > (-1 * 1000 * 60 * 60 * 24 * 3)) {
                sy_djs_r_s[i].style.color = localStorage.zi_ti_click_color;
                sy_djs_r_s[i].querySelector('.sy_djs_r_time').style.fontSize = '18px';
                sy_djs_r_s[i].querySelector('.sy_djs_r_time').style.lineHeight = '40px';
                sy_djs_r_s[i].querySelector('.sy_djs_r_time').innerHTML = '时间已到<br>超过三天自动删除';
            } else if (+new Date(sy_djs[Object.keys(sy_djs)[i]][2]) - +new Date() < (-1 * 1000 * 60 * 60 * 24 * 3)) {
                //删除内存
                sy_djs = JSON.parse(localStorage.sy_djs);
                delete sy_djs['sy_djs' + i];
                localStorage.sy_djs = JSON.stringify(sy_djs);
                //删除HTML
                sy_djs_r_min.innerHTML = '';
                sy_djs_px();
                SC_djs();
                sy_djs_yd();
                continue;
            }
        } else {
            sy_djs_r_s[i].querySelector('.sy_djs_r_time').innerHTML = countDown(sy_djs[Object.keys(sy_djs)[i]][2]);
        }
    }

    djs_s = setInterval(function() {
        for (var i = 0; i < Object.keys(sy_djs).length; i++) {
            if (+new Date(sy_djs[Object.keys(sy_djs)[i]][2]) - +new Date() < 0) {
                if (+new Date(sy_djs[Object.keys(sy_djs)[i]][2]) - +new Date() > (-1 * 1000 * 60 * 60 * 24 * 3)) {
                    sy_djs_r_s[i].style.color = localStorage.zi_ti_click_color;
                    sy_djs_r_s[i].querySelector('.sy_djs_r_time').style.fontSize = '18px';
                    sy_djs_r_s[i].querySelector('.sy_djs_r_time').style.lineHeight = '40px';
                    sy_djs_r_s[i].querySelector('.sy_djs_r_time').innerHTML = '时间已到<br>超过三天自动删除';
                } else if (+new Date(sy_djs[Object.keys(sy_djs)[i]][2]) - +new Date() < (-1 * 1000 * 60 * 60 * 24 * 3)) {
                    //删除内存
                    sy_djs = JSON.parse(localStorage.sy_djs);
                    delete sy_djs['sy_djs' + i];
                    localStorage.sy_djs = JSON.stringify(sy_djs);
                    //删除HTML
                    sy_djs_r_min.innerHTML = '';
                    sy_djs_px();
                    SC_djs();
                    sy_djs_yd();
                    // 重新加载边框
                    if (localStorage.bei_jing_kuan_ture == 1) {
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
                    }
                    continue;
                }
            } else {
                sy_djs_r_s[i].querySelector('.sy_djs_r_time').innerHTML = countDown(sy_djs[Object.keys(sy_djs)[i]][2]);
            }
        }
    }, 1000);

}
SC_djs();

//移动

//拖动封装wgsTUODONGKUANG('点击盒子','要动盒子');
function wgsTUODONGKUANG() {
    sy_djs_r_s = document.querySelectorAll('.sy_djs_r_s');
    var dianJiYuangSu = document.querySelector(arguments[0]);
    var tuoDongYuangSu = document.querySelector(arguments[1]);
    x_ZhouPianYiLian = 0;

    dianJiYuangSu.addEventListener('mousedown', function(e) {
        e.stopPropagation();
        e.preventDefault();

        var x2 = e.pageX - tuoDongYuangSu.offsetLeft + 200;

        function wgsLAIDONTIAO(e) {
            tuoDongYuangSu.style.position = 'relative';
            tuoDongYuangSu.style.margin = '0';

            x_ZhouPianYiLian = e.pageX - x2;

            if (sy_djs_r_s.length * 200 > 1048) {
                if (x_ZhouPianYiLian >= 0) {
                    x_ZhouPianYiLian = 0;
                } else if (x_ZhouPianYiLian <= -(sy_djs_r_s.length * 200 - 1049)) {
                    x_ZhouPianYiLian = -(sy_djs_r_s.length * 200 - 1049);
                }
            } else if (sy_djs_r_s.length * 200 < 1048) {
                x_ZhouPianYiLian = 0;
            }

            sy_djs_r_min.style.transition = '0s';
            tuoDongYuangSu.style.left = x_ZhouPianYiLian + 'px';
        }

        document.addEventListener('mousemove', wgsLAIDONTIAO);

        document.addEventListener('mouseup', wgsTanQiXiaoChu);

        function wgsTanQiXiaoChu() {
            document.removeEventListener('mousemove', wgsLAIDONTIAO);

            console.clear();
            console.log('x:' + x_ZhouPianYiLian);

            document.removeEventListener('mouseup', wgsTanQiXiaoChu);
        }
    });
}

function sy_djs_yd() {
    var sy_djs_r_s = document.querySelectorAll('.sy_djs_r_s');
    if (sy_djs_r_s.length > 0) {
        sy_djs_r_min = document.querySelector('.sy_djs_r_min');
        wgsTUODONGKUANG('.sy_djs_r_min', '.sy_djs_r_min');

        sy_djs_r_min.style.transition = '1s';
        if (sy_djs_r_s.length > 5 && parseFloat(sy_djs_r_min.style.left) + 200 < 0) {
            sy_djs_r_min.style.left = parseFloat(sy_djs_r_min.style.left) + 200 + 'px';
        } else {
            sy_djs_r_min.style.left = '0px';
        }
    }
}
sy_djs_yd()

//倒计时添加

// 撤销默认
sy_djs_tjym = document.querySelector('.sy_djs_tjym');
sy_djs_tjym.addEventListener('click', function(e) {
    e.stopPropagation();
    e.preventDefault();
});
sy_djs_tjym.addEventListener('contextmenu', function(e) {
    e.stopPropagation();
    e.preventDefault();
});
//默认值
function sy_djs_tjym_mrz() {
    var time_day = new Date();
    input_djs_tjym_time_s = document.querySelectorAll('.input_djs_tjym_time_s');
    input_djs_tjym_time_s[0].value = time_day.getFullYear();
    input_djs_tjym_time_s[1].value = (time_day.getMonth() + 1 < 10 ? '0' + (time_day.getMonth() + 1) : time_day.getMonth() + 1);
    input_djs_tjym_time_s[2].value = (time_day.getDate() < 10 ? '0' + time_day.getDate() : time_day.getDate());
    input_djs_tjym_time_s2 = document.querySelectorAll('.input_djs_tjym_time_s2');
    // var ss = time_day.getHours();
    // var ff = time_day.getMinutes();
    // var mm = time_day.getSeconds();
    // input_djs_tjym_time_s2[0].value = mm < 10 ? '0' + mm : mm;
    // input_djs_tjym_time_s2[1].value = ff < 10 ? '0' + ff : ff;
    // input_djs_tjym_time_s2[2].value = ss < 10 ? '0' + ss : ss;
    input_djs_tjym_time_s2[0].value = '00';
    input_djs_tjym_time_s2[1].value = '00';
    input_djs_tjym_time_s2[2].value = '00';
}
//确认
djs_tjym_qr = document.querySelector('.djs_tjym_qr');
djs_tjym_qr.addEventListener('click', function() {
    //更改内存
    input_djs_tjym_sj = document.querySelector('.input_djs_tjym_sj');
    input_djs_tjym_time_s = document.querySelectorAll('.input_djs_tjym_time_s');
    input_djs_tjym_time_s2 = document.querySelectorAll('.input_djs_tjym_time_s2');
    if ((input_djs_tjym_time_s[0].value.length == 4 || input_djs_tjym_time_s[0].value.length == 2) && input_djs_tjym_time_s[1].value.length <= 2 && input_djs_tjym_time_s[1].value <= 12 && input_djs_tjym_time_s[1].value > 0 && input_djs_tjym_time_s[2].value.length <= 2 && input_djs_tjym_time_s[2].value <= 31 && input_djs_tjym_time_s[2].value > 0 && input_djs_tjym_time_s2[2].value.length <= 2 && input_djs_tjym_time_s2[2].value <= 23 && input_djs_tjym_time_s2[2].value > -1 && input_djs_tjym_time_s2[1].value.length <= 2 && input_djs_tjym_time_s2[1].value <= 59 && input_djs_tjym_time_s2[1].value > -1 && input_djs_tjym_time_s2[0].value.length <= 2 && input_djs_tjym_time_s2[0].value <= 59 && input_djs_tjym_time_s2[0].value > -1) {
        var nian = input_djs_tjym_time_s[0].value.length == 2 ? '20' + input_djs_tjym_time_s[0].value : input_djs_tjym_time_s[0].value;
        var yue = input_djs_tjym_time_s[1].value.length == 1 ? '0' + input_djs_tjym_time_s[1].value : input_djs_tjym_time_s[1].value;
        var ri = input_djs_tjym_time_s[2].value.length == 1 ? '0' + input_djs_tjym_time_s[2].value : input_djs_tjym_time_s[2].value;
        var shi = input_djs_tjym_time_s2[2].value.length == 1 ? '0' + input_djs_tjym_time_s2[2].value : input_djs_tjym_time_s2[2].value;
        var fen = input_djs_tjym_time_s2[1].value.length == 1 ? '0' + input_djs_tjym_time_s2[1].value : input_djs_tjym_time_s2[1].value;
        var miao = input_djs_tjym_time_s2[0].value.length == 1 ? '0' + input_djs_tjym_time_s2[0].value : input_djs_tjym_time_s2[0].value;
        var times_tj = nian + '-' + yue + '-' + ri + ' ' + shi + ':' + fen + ':' + miao;
        var sy_djs = JSON.parse(localStorage.sy_djs);
        sy_djs['sy_djs' + Object.keys(sy_djs).length] = [input_djs_tjym_sj.value, +new Date(times_tj), times_tj];
        localStorage.sy_djs = JSON.stringify(sy_djs);
        //更改HTML
        clearInterval(djs_s);
        sy_djs_r_min.innerHTML = '';
        sy_djs_px();
        SC_djs();
        sy_djs_yd();
        sy_djs_tj_yc();
        // 重新加载边框
        if (localStorage.bei_jing_kuan_ture == 1) {
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
        }
        Sku_tctx('日程添加成功');
    } else {
        input_djs_tjym_time_s[0].style.borderColor = '';
        input_djs_tjym_time_s[0].style.color = '';
        input_djs_tjym_time_s[1].style.borderColor = '';
        input_djs_tjym_time_s[1].style.color = '';
        input_djs_tjym_time_s[2].style.borderColor = '';
        input_djs_tjym_time_s[2].style.color = '';
        input_djs_tjym_time_s2[2].style.borderColor = '';
        input_djs_tjym_time_s2[2].style.color = '';
        input_djs_tjym_time_s2[1].style.borderColor = '';
        input_djs_tjym_time_s2[1].style.color = '';
        input_djs_tjym_time_s2[0].style.borderColor = '';
        input_djs_tjym_time_s2[0].style.color = '';
        console.log(input_djs_tjym_time_s[0].value.length == 4);
        if (input_djs_tjym_time_s[0].value.length != 4 && input_djs_tjym_time_s[0].value.length !== 2) {
            input_djs_tjym_time_s[0].style.borderColor = 'red';
            input_djs_tjym_time_s[0].style.color = 'red';
        }
        if (input_djs_tjym_time_s[1].value.length > 2 || input_djs_tjym_time_s[1].value > 12 || input_djs_tjym_time_s[1].value <= 0) {
            input_djs_tjym_time_s[1].style.borderColor = 'red';
            input_djs_tjym_time_s[1].style.color = 'red';
        }
        if (input_djs_tjym_time_s[2].value.length > 2 || input_djs_tjym_time_s[2].value > 31 || input_djs_tjym_time_s[2].value <= 0) {
            input_djs_tjym_time_s[2].style.borderColor = 'red';
            input_djs_tjym_time_s[2].style.color = 'red';
        }
        if (input_djs_tjym_time_s2[2].value.length > 2 || input_djs_tjym_time_s2[2].value > 23 || input_djs_tjym_time_s2[2].value < 0) {
            input_djs_tjym_time_s2[2].style.borderColor = 'red';
            input_djs_tjym_time_s2[2].style.color = 'red';
        }
        if (input_djs_tjym_time_s2[1].value.length > 2 || input_djs_tjym_time_s2[1].value > 59 || input_djs_tjym_time_s2[1].value < 0) {
            input_djs_tjym_time_s2[1].style.borderColor = 'red';
            input_djs_tjym_time_s2[1].style.color = 'red';
        }
        if (input_djs_tjym_time_s2[0].value.length > 2 || input_djs_tjym_time_s2[0].value > 59 || input_djs_tjym_time_s2[0].value < 0) {
            input_djs_tjym_time_s2[0].style.borderColor = 'red';
            input_djs_tjym_time_s2[0].style.color = 'red';
        }
    }
});

//倒计时删除
function sy_djs_sc() {
    //删除内存
    var sy_djs = JSON.parse(localStorage.sy_djs);
    delete sy_djs['sy_djs' + sy_nb_zhixian];
    localStorage.sy_djs = JSON.stringify(sy_djs);
    //删除HTML
    clearInterval(djs_s);
    sy_djs_r_min.innerHTML = '';
    sy_djs_px();
    SC_djs();
    sy_djs_yd();
    // 重新加载边框
    if (localStorage.bei_jing_kuan_ture == 1) {
        sy_djs_r_s = document.querySelectorAll('.sy_djs_r_s');
        for (var i = 0; i < sy_djs_r_s.length; i++) {
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
    }

    Sku_tctx('日程删除成功');
}

//隐藏倒计时添加
function sy_djs_tj_yc() {
    input_djs_tjym_sj = document.querySelector('.input_djs_tjym_sj');
    input_djs_tjym_time_s = document.querySelectorAll('.input_djs_tjym_time_s');
    input_djs_tjym_time_s2 = document.querySelectorAll('.input_djs_tjym_time_s2');
    sy_shezhi_gn.style.display = 'none';
    sy_shezhi_gn_cmm.style.display = 'none';
    sy_shezhi_gn_sc.style.display = 'none';
    sy_djs_tjym.style.display = 'none';
    input_djs_tjym_sj = document.querySelector('.input_djs_tjym_sj');
    input_djs_tjym_sj.value = '';
    input_djs_tjym_time_s[0].style.borderColor = '';
    input_djs_tjym_time_s[0].style.color = '';
    input_djs_tjym_time_s[1].style.borderColor = '';
    input_djs_tjym_time_s[1].style.color = '';
    input_djs_tjym_time_s[2].style.borderColor = '';
    input_djs_tjym_time_s[2].style.color = '';
    input_djs_tjym_time_s2[2].style.borderColor = '';
    input_djs_tjym_time_s2[2].style.color = '';
    input_djs_tjym_time_s2[1].style.borderColor = '';
    input_djs_tjym_time_s2[1].style.color = '';
    input_djs_tjym_time_s2[0].style.borderColor = '';
    input_djs_tjym_time_s2[0].style.color = '';
}

//倒计时输入快捷键
input_djs_tjym_sj = document.querySelector('.input_djs_tjym_sj');
input_djs_tjym_time_s = document.querySelectorAll('.input_djs_tjym_time_s');
input_djs_tjym_time_s2 = document.querySelectorAll('.input_djs_tjym_time_s2');
input_djs_tjym_sj.addEventListener('focus', function() {
    input_djs_tjym_gs = -1;
    this.select();
});
input_djs_tjym_time_s[0].addEventListener('focus', function() {
    input_djs_tjym_gs = 0;
    this.select();
});
input_djs_tjym_time_s[1].addEventListener('focus', function() {
    input_djs_tjym_gs = 1;
    this.select();
});
input_djs_tjym_time_s[2].addEventListener('focus', function() {
    input_djs_tjym_gs = 2;
    this.select();
});
input_djs_tjym_time_s2[0].addEventListener('focus', function() {
    input_djs_tjym_gs = 2 + 3;
    this.select();
});
input_djs_tjym_time_s2[1].addEventListener('focus', function() {
    input_djs_tjym_gs = 1 + 3;
    this.select();
});
input_djs_tjym_time_s2[2].addEventListener('focus', function() {
    input_djs_tjym_gs = 0 + 3;
    this.select();
});
// 日程移动
var sy_djs_cm = 0;
var sy_djs = document.querySelector('.sy_djs');
sy_djs.addEventListener('mouseover', function(e) {
    sy_djs_cm = 1;
});
sy_djs.addEventListener('mouseout', function(e) {
    sy_djs_cm = 0;
});
// 监听鼠标滚轮事件
var sy_djs_r_min = document.querySelector('.sy_djs_r_min');
document.addEventListener('wheel', function(e) {
    if (isShiftPressed && e.deltaY < 0 && sy_djs_cm == 1) {
        sy_djs_r_min.style.transition = '0.05s linear';
        if (parseFloat(sy_djs_r_min.style.left) + 100 > 0) {
            sy_djs_r_min.style.left = '0px';
        } else {
            sy_djs_r_min.style.left = parseFloat(sy_djs_r_min.style.left) + 100 + 'px';
        }
    } else if (isShiftPressed && e.deltaY > 0 && sy_djs_cm == 1) {
        sy_djs_r_min.style.transition = '0.05s linear';
        if (parseFloat(sy_djs_r_min.style.left) - 100 < sy_djs_r_s.length * -200 + 1049) {
            if (sy_djs_r_s.length > 5) {
                sy_djs_r_min.style.left = sy_djs_r_s.length * -200 + 1049 + 'px';
            } else {
                sy_djs_r_min.style.left = '0px';
            }
        } else {
            sy_djs_r_min.style.left = parseFloat(sy_djs_r_min.style.left) - 100 + 'px';
        }
    }
});
// 按钮左右
var i_djs_z_tb = document.querySelector('.i_djs_z_tb');
var i_djs_y_tb = document.querySelector('.i_djs_y_tb');
i_djs_z_tb.addEventListener('click', function(e) {
    sy_djs_r_min.style.transition = '1s';
    if (parseFloat(sy_djs_r_min.style.left) + 1000 > 0) {
        sy_djs_r_min.style.left = '0px';
    } else {
        sy_djs_r_min.style.left = parseFloat(sy_djs_r_min.style.left) + 1000 + 'px';
    }
});
i_djs_y_tb.addEventListener('click', function(e) {
    sy_djs_r_min.style.transition = '1s';
    if (parseFloat(sy_djs_r_min.style.left) - 1000 < sy_djs_r_s.length * -200 + 1049) {
        if (sy_djs_r_s.length > 5) {
            sy_djs_r_min.style.left = sy_djs_r_s.length * -200 + 1049 + 'px';
        } else {
            sy_djs_r_min.style.left = '0px';
        }
    } else {
        sy_djs_r_min.style.left = parseFloat(sy_djs_r_min.style.left) - 1000 + 'px';
    }
});






//页面展示

//输出内存
function sy_zp_shuc_hs() {
    iframe2 = document.querySelector('.iframe2');
    sy_zpzs_max = document.querySelector('.sy_zpzs_max');
    var sy_zpzs_lj = JSON.parse(localStorage.sy_zpzs_lj);
    var sy_zpzs_mz = JSON.parse(localStorage.sy_zpzs_mz);
    for (var i = 0; i < sy_zpzs_lj.length; i++) {
        var divs = document.createElement('div');
        divs.className = 'iframe1';
        divs.draggable = 'true';
        if (localStorage.sy_zpzs_kaiguan == 0) {
            divs.innerHTML = '<iframe src="' + sy_zpzs_lj[i] + '"></iframe><div class="sy_zpzs_jr">' + sy_zpzs_mz[i] + '</div><div class="sy_zpzs_sc"><i class="iconfont icon-shanchu1 i_sc_tb"></i></div>';
        } else {
            divs.innerHTML = '<div class="sy_zpzs_jr">' + sy_zpzs_mz[i] + '</div><div class="sy_zpzs_sc"><i class="iconfont icon-shanchu1 i_sc_tb"></i></div>';
        }

        sy_zpzs_max.insertBefore(divs, iframe2);
    }
}
sy_zp_shuc_hs();

//设置各页面高度
function iframe1_heigth() {
    if (localStorage.sy_zpzs_kaiguan == 0) {
        iframe1 = document.querySelectorAll('.iframe1');
        iframe2 = document.querySelector('.iframe2');
        for (var i = 0; i < iframe1.length; i++) {
            iframe1[i].style.height = 'calc((' + window.innerHeight + 'px / 2.61) + 50px)';
            iframe1[i].querySelector('iframe').style.height = window.innerHeight + 'px';
        }
        iframe2.style.height = 'calc((' + window.innerHeight + 'px / 2.61) + 50px)';
        iframe2.querySelector('div').style.height = 'calc(' + window.innerHeight + 'px / 2.61)';
        iframe2.querySelector('div').style.lineHeight = 'calc((' + window.innerHeight + 'px / 2.61) - 2px)';
    } else {
        iframe1 = document.querySelectorAll('.iframe1');
        iframe2 = document.querySelector('.iframe2');
        for (var i = 0; i < iframe1.length; i++) {
            iframe1[i].style.height = '40px';
        }
        iframe2.style.height = '40px';
        iframe2.querySelector('div').style.height = '40px';
        iframe2.querySelector('div').style.lineHeight = '40px';
    }
}
iframe1_heigth();
window.addEventListener('resize', function() {
    iframe1_heigth();
});

//添加事件
function iframe1_sygn() {
    var iframe1 = document.querySelectorAll('.iframe1');
    for (var i = 0; i < iframe1.length; i++) {
        //取消鼠标
        if (localStorage.sy_zpzs_kaiguan == 0) {
            iframe1[i].querySelector('iframe').addEventListener('mouseenter', function() {
                su_biao.style.display = 'none';
            });
        }
        //进入
        iframe1[i].querySelector('.sy_zpzs_jr').addEventListener('click', function() {
            var sy_zpzs_mz = JSON.parse(localStorage.sy_zpzs_mz);
            var sy_zpzs_lj = JSON.parse(localStorage.sy_zpzs_lj);
            window.open(sy_zpzs_lj[sy_zpzs_mz.indexOf(this.innerText)]);
        });
        //删除
        iframe1[i].querySelector('.sy_zpzs_sc').addEventListener('click', function() {
            this.parentNode.parentNode.removeChild(this.parentNode);
            //删除内存
            var sy_zpzs_lj = JSON.parse(localStorage.sy_zpzs_lj);
            var sy_zpzs_mz = JSON.parse(localStorage.sy_zpzs_mz);
            sy_zpzs_lj.splice(this.parentNode.getAttribute('iframe_num'), 1);
            sy_zpzs_mz.splice(this.parentNode.getAttribute('iframe_num'), 1);
            localStorage.sy_zpzs_lj = JSON.stringify(sy_zpzs_lj);
            localStorage.sy_zpzs_mz = JSON.stringify(sy_zpzs_mz);
            //重新排序
            iframe_cxpx();
            Sku_tctx('作品删除成功');
        });
    }
}
iframe1_sygn();

//添加事件2单独添加
function iframe1_sygn2() {
    var iframe1 = document.querySelector('.iframe1');
    //取消鼠标
    if (localStorage.sy_zpzs_kaiguan == 0) {
        iframe1.querySelector('iframe').addEventListener('mouseenter', function() {
            su_biao.style.display = 'none';
        });
    }
    //进入
    iframe1.querySelector('.sy_zpzs_jr').addEventListener('click', function() {
        var sy_zpzs_mz = JSON.parse(localStorage.sy_zpzs_mz);
        var sy_zpzs_lj = JSON.parse(localStorage.sy_zpzs_lj);
        window.open(sy_zpzs_lj[sy_zpzs_mz.indexOf(this.innerText)]);
    });
    //删除
    iframe1.querySelector('.sy_zpzs_sc').addEventListener('click', function() {
        this.parentNode.parentNode.removeChild(this.parentNode);
        //删除内存
        var sy_zpzs_lj = JSON.parse(localStorage.sy_zpzs_lj);
        var sy_zpzs_mz = JSON.parse(localStorage.sy_zpzs_mz);
        sy_zpzs_lj.splice(this.parentNode.getAttribute('iframe_num'), 1);
        sy_zpzs_mz.splice(this.parentNode.getAttribute('iframe_num'), 1);
        localStorage.sy_zpzs_lj = JSON.stringify(sy_zpzs_lj);
        localStorage.sy_zpzs_mz = JSON.stringify(sy_zpzs_mz);
        //重新排序
        iframe_cxpx();
        Sku_tctx('作品删除成功');
    });
}

//重新排序
function iframe_cxpx() {
    var sy_zpzs_lj = JSON.parse(localStorage.sy_zpzs_lj);
    for (var i = 0; i < sy_zpzs_lj.length; i++) {
        var iframe1 = document.querySelectorAll('.iframe1');
        iframe1[i].setAttribute('iframe_num', i);
    }
}
iframe_cxpx();

//添加作品
sy_zp_tj_anniu = document.querySelector('.sy_zp_tj_anniu');
sy_zp_tj_mz = document.querySelector('.sy_zp_tj_mz');
sy_zp_tj_lj = document.querySelector('.sy_zp_tj_lj');
sy_zp_tj_ym = document.querySelector('.sy_zp_tj_ym');
sy_zp_tj_ym.addEventListener('click', function(e) {
    e.stopPropagation();
    e.preventDefault();
});
sy_zp_tj_ym.addEventListener('contextmenu', function(e) {
    e.stopPropagation();
    e.preventDefault();
});
sy_zpzs_tj = document.querySelector('.sy_zpzs_tj');
sy_zpzs_tj.addEventListener('click', function(e) {
    e.stopPropagation();
    e.preventDefault();
    sy_zp_tj_ym.style.display = 'block';
    sy_zp_tj_mz.focus();
});

function sy_zp_tj_sc_dsq() {
    setTimeout(function() {
        sy_zp_tj_mz.style.borderColor = '';
        sy_zp_tj_lj.style.borderColor = '';
    }, 2000);
}
sy_zp_tj_anniu.addEventListener('click', function() {
    if (sy_zp_tj_mz.value == '' || sy_zp_tj_lj.value == '') {
        sy_zp_tj_mz.style.borderColor = '';
        sy_zp_tj_lj.style.borderColor = '';
        if (sy_zp_tj_mz.value == '') {
            sy_zp_tj_mz.style.borderColor = 'red';
        }
        if (sy_zp_tj_lj.value == '') {
            sy_zp_tj_lj.style.borderColor = 'red';
        }
        sy_zp_tj_sc_dsq();
    } else {
        var sy_zpzs_lj = JSON.parse(localStorage.sy_zpzs_lj);
        var sy_zpzs_mz = JSON.parse(localStorage.sy_zpzs_mz);
        sy_zpzs_lj.unshift(sy_zp_tj_lj.value);
        sy_zpzs_mz.unshift(sy_zp_tj_mz.value);
        localStorage.sy_zpzs_lj = JSON.stringify(sy_zpzs_lj);
        localStorage.sy_zpzs_mz = JSON.stringify(sy_zpzs_mz);
        //修改HTML
        var sy_zpzs_lj = JSON.parse(localStorage.sy_zpzs_lj);
        var divs = document.createElement('div');
        divs.className = 'iframe1';
        divs.draggable = 'true';
        if (localStorage.sy_zpzs_kaiguan == 0) {
            divs.innerHTML = '<iframe src="' + sy_zp_tj_lj.value + '"></iframe><div class="sy_zpzs_jr">' + sy_zp_tj_mz.value + '</div><div class="sy_zpzs_sc"><i class="iconfont icon-shanchu1 i_sc_tb"></i></div>';
        } else {
            divs.innerHTML = '<div class="sy_zpzs_jr">' + sy_zp_tj_mz.value + '</div><div class="sy_zpzs_sc"><i class="iconfont icon-shanchu1 i_sc_tb"></i></div>';
        }
        iframe1 = document.querySelectorAll('.iframe1');
        if (iframe1.length == 0) {
            sy_zpzs_max.insertBefore(divs, iframe2);
        } else {
            sy_zpzs_max.insertBefore(divs, iframe1[0]);
        }
        sy_zp_tj_sc();
        iframe1_heigth();
        iframe1_sygn2();
        iframe_cxpx();
        Sku_tctx('作品添加成功');

        enableDragAndDrop3('iframe1');
    }
});
//删除作品添加
function sy_zp_tj_sc() {
    sy_zp_tj_ym = document.querySelector('.sy_zp_tj_ym');
    sy_zp_tj_mz.value = '';
    sy_zp_tj_lj.value = '';
    sy_zp_tj_ym.style.display = 'none';
}

//隐藏作品按钮
sy_zpzs_kaiguan = document.querySelector('.sy_zpzs_kaiguan');
sy_zpzs_kaiguan.addEventListener('click', function(e) {
    if (localStorage.sy_zpzs_kaiguan == 0) {
        localStorage.sy_zpzs_kaiguan = 1;
        sy_zpzs_kaiguan.innerText = '✔';
        var iframe1 = document.querySelectorAll('.iframe1');
        for (var i = 0; i < iframe1.length; i++) {
            sy_zpzs_max.removeChild(iframe1[i]);
        }
        sy_zp_shuc_hs();
        iframe1_heigth();
        iframe_cxpx();
        iframe1_sygn();
    } else {
        localStorage.sy_zpzs_kaiguan = 0;
        sy_zpzs_kaiguan.innerText = '';
        var iframe1 = document.querySelectorAll('.iframe1');
        for (var i = 0; i < iframe1.length; i++) {
            sy_zpzs_max.removeChild(iframe1[i]);
        }
        sy_zp_shuc_hs();
        iframe1_heigth();
        iframe_cxpx();
        iframe1_sygn();
    }
    enableDragAndDrop3('iframe1');
});
if (localStorage.sy_zpzs_kaiguan == 1) {
    sy_zpzs_kaiguan.innerText = '✔';
} else {
    sy_zpzs_kaiguan.innerText = '';
}





//定位窗口
sy_dwck = document.querySelector('.sy_dwck');
sy_dwck_ym = document.querySelector('.sy_dwck_ym');
sy_dw_top = document.querySelector('.sy_dw_top');
sy_dw_richen = document.querySelector('.sy_dw_richen');
sy_dw_kcb = document.querySelector('.sy_dw_kcb');
sy_dw_zpzs = document.querySelector('.sy_dw_zpzs');
//点击显示窗口
sy_dwck.addEventListener('click', function(e) {
    e.stopPropagation();
    e.preventDefault();
    sy_dwck_ym.style.left = '20px';
    sy_dwck_ym.style.opacity = '1';
    sy_dwck.style.display = 'none';
});
//隐藏窗口
function sy_dwck_ym_yc() {
    if (sy_dwck_ym.style.left == '20px') {
        sy_dwck_ym.style.left = '-150px';
        sy_dwck_ym.style.opacity = '0';
        sy_dwck_ym_dsq = setTimeout(function() {
            sy_dwck.style.display = 'block';
        }, 300);
    }
}

//定位
// function SHITIDONGHUA(class名, 移动距离(右为正, 左为负), function() {});
var obj_dwjsq = undefined;
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
sy_dw_top.addEventListener('click', function() {
    SHITIDONGHUA2('.nrmaxs0_nr', 0);
});
sy_dw_richen.addEventListener('click', function() {
    var sz = sy_djs.offsetTop - window.innerHeight / 2 + 100;
    SHITIDONGHUA2('.nrmaxs0_nr', sz);
});
sy_dw_zpzs.addEventListener('click', function() {
    var sz = sy_zpzs_max.offsetTop - 80;
    SHITIDONGHUA2('.nrmaxs0_nr', sz);
});
// 滚轮滚动暂停定位
document.addEventListener('wheel', function(e) {
    obj_dwjsq ? clearInterval(obj_dwjsq.time) : undefined;
});




//设置功能

//添加功能
sy_shezhi_gn_tj = document.querySelector('.sy_shezhi_gn_tj');
sy_shezhi_gn_tj.addEventListener('click', function(e) {
    e.stopPropagation();
    e.preventDefault();
    sy_shezhi_gn.style.display = 'none';
    if (sy_gn_zhixian == '倒计时') {
        sy_djs_tjym.style.display = 'block';
        sy_djs_tjym_mrz()
        input_djs_tjym_sj = document.querySelector('.input_djs_tjym_sj');
        input_djs_tjym_sj.focus();
    }
});

//删除功能
sy_shezhi_gn_sc = document.querySelector('.sy_shezhi_gn_sc');
sy_shezhi_gn_sc.addEventListener('click', function(e) {
    e.stopPropagation();
    e.preventDefault();
    sy_shezhi_gn.style.display = 'none';
    if (sy_gn_zhixian == '倒计时') {
        sy_djs_sc();
    }
});



// 音乐功能   
var music_boyyom_zsj = document.querySelector('.music_boyyom_zsj');
var music_tjym_qd = document.querySelector('.music_tjym_qd');
var music_tjym_url = document.querySelector('.music_tjym_url');
var music_tjym_mz = document.querySelector('.music_tjym_mz');
var music_bfq2 = document.querySelector('.music_bfq2');
var i_music_boyyom_tj = document.querySelector('.i_music_boyyom_tj');
var music_bottom_hk3 = document.querySelector('.music_bottom_hk3');
var i_music_boyyom_sy = document.querySelector('.i_music_boyyom_sy');
var i_music_boyyom_bfsx = document.querySelector('.i_music_boyyom_bfsx');
var i_music_boyyom_sys = document.querySelector('.i_music_boyyom_sys');
var i_music_boyyom_xys = document.querySelector('.i_music_boyyom_xys');
var i_music_boyyom_ks = document.querySelector('.i_music_boyyom_ks');
var music_boyyom_gm = document.querySelector('.music_boyyom_gm');
var music_boyyom_sssj = document.querySelector('.music_boyyom_sssj');
var music_bottom_hk2 = document.querySelector('.music_bottom_hk2');
var music_boyyom_tj_ym = document.querySelector('.music_boyyom_tj_ym');
var music_boyyom_yj = document.querySelector('.music_boyyom_yj');
var music_ym = document.querySelector('.music_ym');
var i_music_tb = document.querySelector('.i_music_tb');
var music_min = document.querySelector('.music_min');
var music_bfq = document.querySelector('.music_bfq');
var yy_ks = 0;
var music_max_sj = 0;
// 打开音乐总页面
i_music_tb.addEventListener('click', function(e) {
    e.stopPropagation();
    music_ym.style.display = 'block';
});
// 防止音乐总页面关闭
music_ym.addEventListener('click', function(e) {
    e.stopPropagation();
    music_boyyom_yj.style.display = 'none';
    music_boyyom_tj_ym.style.display = 'none';
});
// 打开音量页面
i_music_boyyom_sy.addEventListener('click', function(e) {
    e.stopPropagation();
    music_boyyom_yj.style.display = 'block';
});
// 音量页面防止关闭
music_boyyom_yj.addEventListener('click', function(e) {
    e.stopPropagation();
});
// 打开添加页面
i_music_boyyom_tj.addEventListener('click', function(e) {
    e.stopPropagation();
    music_boyyom_tj_ym.style.display = 'block';
    music_tjym_mz.focus();
});
// 添加页面防止关闭
music_boyyom_tj_ym.addEventListener('click', function(e) {
    e.stopPropagation();
});
// 隐藏音乐
function music_yms_yc() {
    music_ym.style.display = 'none';
    music_boyyom_yj.style.display = 'none';
    music_boyyom_tj_ym.style.display = 'none';
    music_tjym_mz.value = '';
    music_tjym_url.value = '';
    music_bfq2.src = '';
}

// 输出音乐
function music_cd_sc() {
    var music_cd = JSON.parse(localStorage.music_cd);
    for (var i = 0; i < music_cd[1].length; i++) {
        var div = document.createElement('div');
        div.className = 'music_s';
        div.innerHTML = '<div class="music_s_mz">' + music_cd[0][i] + '</div><i class="iconfont icon-shanchu1 i_music_s_cs_tp"></i><i class="iconfont icon-xiangshang4 i_music_s_zd_tb"></i><i class="iconfont icon-kaishi1 i_music_s_ks_tb"></i>';
        music_min.appendChild(div);
    }
}
music_cd_sc();

WGS_wenbengundon('.music_s_mz', '16');

// 添加开始按钮功能
function music_cd_ks() {
    var i_music_s_ks_tb = document.querySelectorAll('.i_music_s_ks_tb');
    var music_s = document.querySelectorAll('.music_s');
    for (var i = 0; i < i_music_s_ks_tb.length; i++) {
        var music_cd = JSON.parse(localStorage.music_cd);
        i_music_s_ks_tb[i].addEventListener('click', function(e) {
            // html变色
            for (var i = 0; i < music_s.length; i++) {
                music_s[i].style.backgroundColor = '';
                music_s[i].style.borderColor = '';
            }
            this.parentNode.style.backgroundColor = RGB_zhq(localStorage.zi_ti_click_color, 0.15);
            this.parentNode.style.borderColor = RGB_zhq(localStorage.zi_ti_click_color, 1);
            // 播放音乐
            console.clear();
            console.log('播放:' + this.previousElementSibling.previousElementSibling.previousElementSibling.innerText);
            music_bfq.src = music_cd[1][music_cd[0].indexOf(this.previousElementSibling.previousElementSibling.previousElementSibling.innerText)];
            console.log(music_cd[1][music_cd[0].indexOf(this.previousElementSibling.previousElementSibling.previousElementSibling.innerText)]);
            // 进度条0
            music_bfq.removeEventListener('timeupdate', music_ssjc);
            music_bottom_hk2.value = 0;
            music_bottom_hk2.style.backgroundSize = '0% 100%';
            yy_ks = 1;
            music_kss();
            //总时间
            music_bfq.addEventListener('canplay', function(e) {
                music_boyyom_zsj.innerText = Math.floor(music_bfq.duration / 60) + ':' + (Math.floor(music_bfq.duration % 60) < 10 ? '0' + Math.floor(music_bfq.duration % 60) : Math.floor(music_bfq.duration % 60));
                music_bfq.addEventListener('timeupdate', music_ssjc);
            });
        });
    }
}
music_cd_ks();

// 添加置顶按钮
function music_cd_zd() {
    var i_music_s_zd_tb = document.querySelectorAll('.i_music_s_zd_tb');
    for (var i = 0; i < i_music_s_zd_tb.length; i++) {
        i_music_s_zd_tb[i].addEventListener('click', function(e) {
            var music_cd = JSON.parse(localStorage.music_cd);
            var music_lsbl2 = music_cd[1][music_cd[0].indexOf(this.previousElementSibling.previousElementSibling.innerText)];
            var music_lsbl = this.previousElementSibling.previousElementSibling.innerText;
            var music_lsbl3 = music_cd[0].indexOf(this.previousElementSibling.previousElementSibling.innerText);
            // 删除内存
            music_cd[0].splice(music_lsbl3, 1);
            music_cd[1].splice(music_lsbl3, 1);
            //添加内存
            music_cd[0].unshift(music_lsbl);
            music_cd[1].unshift(music_lsbl2);
            localStorage.music_cd = JSON.stringify(music_cd);
            //修改html
            music_min.innerText = '';
            music_cd_sc();
            music_cd_ks();
            music_cd_zd();
            music_cd_dlt();
            var music_bfq = document.querySelector('.music_bfq');
            if (music_bfq.src !== 'https:') {
                music_glxs();
            }
            // 重新添加滚动字体
            WGS_wenbengundon('.music_s_mz', '16');
        });
    }
}
music_cd_zd();

//高亮当前播放
function music_glxs() {
    var music_bfq = document.querySelector('.music_bfq');
    var music_cd = JSON.parse(localStorage.music_cd);
    var music_s = document.querySelectorAll('.music_s');
    var music_glxs = music_cd[1].indexOf(music_bfq.src);
    for (var i = 0; i < music_s.length; i++) {
        music_s[i].style.backgroundColor = '';
        music_s[i].style.borderColor = '';
    }
    music_s[music_glxs].style.backgroundColor = RGB_zhq(localStorage.zi_ti_click_color, 0.15);
    music_s[music_glxs].style.borderColor = RGB_zhq(localStorage.zi_ti_click_color, 1);
}

//音乐删除按钮
function music_cd_dlt() {
    var i_music_s_cs_tp = document.querySelectorAll('.i_music_s_cs_tp');
    for (var i = 0; i < i_music_s_cs_tp.length; i++) {
        i_music_s_cs_tp[i].addEventListener('click', function(e) {
            // 如果音乐正在播放
            var music_cd = JSON.parse(localStorage.music_cd);
            var music_lsbl3 = music_cd[1][music_cd[0].indexOf(this.previousElementSibling.innerText)];
            if (music_lsbl3 == music_bfq.src) {
                music_bfq.pause();
                music_bfq.src = 'https:';
                yy_ks = 0;
                // 显示暂停
                i_music_boyyom_ks.classList.remove("icon-zanting");
                i_music_boyyom_ks.classList.add("icon-kaishi3");
                // 时间为0
                music_boyyom_zsj.innerText = '0:00';
                music_boyyom_sssj.innerText = '0:00 /';
                // 内容删除
                music_boyyom_gm.innerText = '';
                // 滑动条
                setTimeout(function() {
                    music_bottom_hk2.value = 0;
                    music_bottom_hk2.style.backgroundSize = '0% 100%';
                });
            }
            // 删除内存
            var music_cd = JSON.parse(localStorage.music_cd);
            var music_lsbl3 = music_cd[0].indexOf(this.previousElementSibling.innerText);
            music_cd[0].splice(music_lsbl3, 1);
            music_cd[1].splice(music_lsbl3, 1);
            localStorage.music_cd = JSON.stringify(music_cd);
            // 删除html
            music_min.removeChild(this.parentNode);
            Sku_tctx('音乐删除成功');
        });
    }
}
music_cd_dlt();

// 设置自动下一首定时器
var music_zd_dsq;
//音乐开始时
function music_kss() {
    if (yy_ks == 0) {
        // 显示暂停
        var music_bfq = document.querySelector('.music_bfq');
        i_music_boyyom_ks.classList.remove("icon-zanting");
        i_music_boyyom_ks.classList.add("icon-kaishi3");
        // 暂停音乐
        music_bfq.pause();
    } else {
        // 显示歌名
        var music_bfq = document.querySelector('.music_bfq');
        var music_cd = JSON.parse(localStorage.music_cd);
        var music_glxs = music_cd[1].indexOf(music_bfq.src);
        music_glxs !== -1 ? music_boyyom_gm.innerText = music_cd[0][music_glxs] : music_boyyom_gm.innerText = '';

        // 开始音乐
        var music_bfq = document.querySelector('.music_bfq');
        music_bfq.play().then(function() { // 播放成功
            music_zd_dsq ? clearTimeout(music_zd_dsq) : undefined;
            // 显示开始
            i_music_boyyom_ks.classList.remove("icon-kaishi3");
            i_music_boyyom_ks.classList.add("icon-zanting");
            music_max_sj = 0;
        }).catch(function() { // 播放失败
            yy_ks = 0;
            // 显示暂停
            i_music_boyyom_ks.classList.remove("icon-zanting");
            i_music_boyyom_ks.classList.add("icon-kaishi3");
            // 时间为0
            music_boyyom_zsj.innerText = '0:00';
            music_boyyom_sssj.innerText = '0:00 /';
            // 删除高亮
            var music_s = document.querySelectorAll('.music_s');
            music_glxs !== -1 ? music_s[music_glxs].querySelector('.i_music_s_cs_tp').style.opacity = '1' : undefined;
            // 下一首死机保护
            music_max_sj++;
            if (music_max_sj == music_s.length) {
                Sku_tctx('全部歌曲不可播放 !');
                music_max_sj = 0;
            } else {
                // 自动下一首
                music_zd_dsq ? clearTimeout(music_zd_dsq) : undefined;
                music_zd_dsq = setTimeout(function() { i_music_boyyom_xys.click() }, 300);
            }
        });
    }
}

// 开始暂停
i_music_boyyom_ks.addEventListener('click', function(e) {
    if (yy_ks == 0) {
        yy_ks = 1;
        music_bfq2.pause();
    } else {
        yy_ks = 0;
    }
    // 开始自动第一个
    var music_bfq = document.querySelector('.music_bfq');
    if (music_bfq.src == 'https:') {
        var music_s = document.querySelectorAll('.music_s');
        if (music_s.length != 0) {
            music_s[0].querySelector('.i_music_s_ks_tb').click();
        }
    } else {
        music_kss();
    }
});

// 当前时间
function music_ssjc() {
    music_bottom_hk2.value = (music_bfq.currentTime / music_bfq.duration) * 100;
    music_bottom_hk2.style.backgroundSize = music_bottom_hk2.value + '% 100%';

    music_boyyom_sssj.innerText = Math.floor(music_bfq.currentTime / 60) + ':' + (Math.floor(music_bfq.currentTime % 60) < 10 ? '0' + Math.floor(music_bfq.currentTime % 60) : Math.floor(music_bfq.currentTime % 60)) + ' /';
}
music_bfq.addEventListener('timeupdate', music_ssjc);

//滑动条
music_bottom_hk2.value = 0;
music_bottom_hk2.style.backgroundSize = '0% 100%';
music_bottom_hk2.addEventListener('input', function(e) {
    this.style.backgroundSize = this.value + '% 100%';
    console.log(music_bfq.duration);
    music_bfq.duration ? (music_boyyom_sssj.innerText = Math.floor(((this.value / 100) * music_bfq.duration) / 60) + ':' + (Math.floor(((this.value / 100) * music_bfq.duration) % 60) < 10 ? '0' + Math.floor(((this.value / 100) * music_bfq.duration) % 60) : Math.floor(((this.value / 100) * music_bfq.duration) % 60)) + ' /') : (music_boyyom_sssj.innerText = '0:00' + ' /');
});
music_bottom_hk2.addEventListener('mousedown', function(e) {
    music_bfq.removeEventListener('timeupdate', music_ssjc);
});
music_bottom_hk2.addEventListener('mouseup', function(e) {
    music_bfq.currentTime = (e.offsetX / this.offsetWidth) * (music_bfq.duration ? music_bfq.duration : 0);
    music_bfq.addEventListener('timeupdate', music_ssjc);
    if (yy_ks == 0) {
        yy_ks = 1;
        music_kss();
    }
});

// 播放顺序
if (localStorage.music_bfsx == 2) {
    i_music_boyyom_bfsx.classList.remove("icon-shunxubofang");
    i_music_boyyom_bfsx.classList.add("icon-suijisenlin");
} else if (localStorage.music_bfsx == 3) {
    i_music_boyyom_bfsx.classList.remove("icon-shunxubofang");
    i_music_boyyom_bfsx.classList.add("icon-danquxunhuan");
}

i_music_boyyom_bfsx.addEventListener('click', function(e) {
    console.clear();
    if (localStorage.music_bfsx == 1) {
        localStorage.music_bfsx = 2;
        console.log('随机播放');
        i_music_boyyom_bfsx.classList.remove("icon-shunxubofang");
        i_music_boyyom_bfsx.classList.add("icon-suijisenlin");
    } else if (localStorage.music_bfsx == 2) {
        localStorage.music_bfsx = 3;
        console.log('单曲循环');
        i_music_boyyom_bfsx.classList.remove("icon-suijisenlin");
        i_music_boyyom_bfsx.classList.add("icon-danquxunhuan");
    } else if (localStorage.music_bfsx == 3) {
        localStorage.music_bfsx = 1;
        console.log('顺序播放');
        i_music_boyyom_bfsx.classList.remove("icon-danquxunhuan");
        i_music_boyyom_bfsx.classList.add("icon-shunxubofang");
    }
});


// 随机数
function sjs(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 下一首
i_music_boyyom_xys.addEventListener('click', function(e) {
    // 下一首
    if (localStorage.music_bfsx == 1 || localStorage.music_bfsx == 3) {
        var music_bfq = document.querySelector('.music_bfq');
        var music_cd = JSON.parse(localStorage.music_cd);
        var music_s = document.querySelectorAll('.music_s');
        var music_glxs = music_cd[1].indexOf(music_bfq.src);
        if (music_s.length != 0) {
            music_s[music_glxs + 1 < music_s.length ? music_glxs + 1 : 0].querySelector('.i_music_s_ks_tb').click();
        }
    } else {
        var music_cd = JSON.parse(localStorage.music_cd);
        var music_bfq = document.querySelector('.music_bfq');
        var music_s = document.querySelectorAll('.music_s');
        var music_glxs = music_cd[1].indexOf(music_bfq.src);
        var sjs2 = sjs(0, music_s.length - 1);
        if (music_s.length != 1 && music_s.length != 0) {
            while (sjs2 == music_glxs) {
                //循环体
                sjs2 = sjs(0, music_s.length - 1);
            }
            music_s[sjs2].querySelector('.i_music_s_ks_tb').click();
        } else if (music_s.length == 1) {
            music_s[0].querySelector('.i_music_s_ks_tb').click();
        }
    }
});

// 上一首
i_music_boyyom_sys.addEventListener('click', function(e) {
    // kais
    if (localStorage.music_bfsx == 1 || localStorage.music_bfsx == 3) {
        var music_bfq = document.querySelector('.music_bfq');
        var music_cd = JSON.parse(localStorage.music_cd);
        var music_s = document.querySelectorAll('.music_s');
        var music_glxs = music_cd[1].indexOf(music_bfq.src);
        if (music_s.length != 0) {
            music_s[music_glxs - 1 < 0 ? music_s.length - 1 : music_glxs - 1].querySelector('.i_music_s_ks_tb').click();
        }
    } else {
        var music_cd = JSON.parse(localStorage.music_cd);
        var music_bfq = document.querySelector('.music_bfq');
        var music_s = document.querySelectorAll('.music_s');
        var music_glxs = music_cd[1].indexOf(music_bfq.src);
        var sjs2 = sjs(0, music_s.length - 1);
        if (music_s.length != 1 && music_s.length != 0) {
            while (sjs2 == music_glxs) {
                //循环体
                sjs2 = sjs(0, music_s.length - 1);
            }
            music_s[sjs2].querySelector('.i_music_s_ks_tb').click();
        } else if (music_s.length == 1) {
            music_s[0].querySelector('.i_music_s_ks_tb').click();
        }
    }
});



// 播放完时
music_bfq.addEventListener('ended', function(e) {
    if (localStorage.music_bfsx == 1) {
        var music_bfq = document.querySelector('.music_bfq');
        var music_cd = JSON.parse(localStorage.music_cd);
        var music_s = document.querySelectorAll('.music_s');
        var music_glxs = music_cd[1].indexOf(music_bfq.src);
        music_s[music_glxs + 1 < music_s.length ? music_glxs + 1 : 0].querySelector('.i_music_s_ks_tb').click();
    } else if (localStorage.music_bfsx == 2) {
        var music_cd = JSON.parse(localStorage.music_cd);
        var music_bfq = document.querySelector('.music_bfq');
        var music_s = document.querySelectorAll('.music_s');
        var music_glxs = music_cd[1].indexOf(music_bfq.src);
        var sjs2 = sjs(0, music_s.length - 1);

        while (sjs2 == music_glxs) {
            //循环体
            sjs2 = sjs(0, music_s.length - 1);
            console.log(1);
        }

        music_s[sjs2].querySelector('.i_music_s_ks_tb').click();
    } else if (localStorage.music_bfsx == 3) {
        var music_cd = JSON.parse(localStorage.music_cd);
        var music_bfq = document.querySelector('.music_bfq');
        var music_s = document.querySelectorAll('.music_s');
        var music_glxs = music_cd[1].indexOf(music_bfq.src);
        music_s[music_glxs].querySelector('.i_music_s_ks_tb').click();
    }
});

// 声音
var music_bfq = document.querySelector('.music_bfq');
var yuan = localStorage.music_sydx;
if ((new Date().getHours() >= 22 || new Date().getHours() <= 6) && localStorage.music_sydx > 0.3) {
    localStorage.music_sydx = 0.3; // 天黑自动减小声音
}
music_bfq.volume = localStorage.music_sydx;
music_bottom_hk3.style.backgroundSize = (localStorage.music_sydx * 100) + '% 100%';
music_bottom_hk3.value = localStorage.music_sydx * 100;
localStorage.music_sydx = yuan;
music_bottom_hk3.addEventListener('input', function(e) {
    music_bottom_hk3.style.backgroundSize = music_bottom_hk3.value + '% 100%';
    music_bfq.volume = music_bottom_hk3.value / 100;
    localStorage.music_sydx = music_bottom_hk3.value / 100;
});


// 添加音乐
var music_tj_cxg = 0;
var music_tj_cxg2 = 0;
music_tjym_qd.addEventListener('click', function(e) {
    music_bfq2.play().then(function() { // 播放成功
        music_bfq2.pause();
        // 检测重复
        var music_cd = JSON.parse(localStorage.music_cd);
        music_tj_cxg = 0;
        for (var i = 0; i < music_cd.length; i++) {
            for (var t = 0; t < music_cd[i].length; t++) {
                if (music_tjym_mz.value == music_cd[i][t]) {
                    music_tj_cxg++;
                }
                if (music_bfq2.src == music_cd[i][t]) {
                    music_tj_cxg++;
                }
            }
        }

        // 达标添加
        if (music_tjym_url.value != '' && music_tjym_mz.value != '' && music_tj_cxg == 0 && music_tj_cxg2 == 0) {
            Sku_tctx('音乐添加成功');
            var music_cd = JSON.parse(localStorage.music_cd);
            music_cd[0].unshift(music_tjym_mz.value);
            music_cd[1].unshift(music_bfq2.src);
            localStorage.music_cd = JSON.stringify(music_cd);
            //修改html
            music_tjym_mz.value = '';
            music_tjym_url.value = '';
            music_min.innerHTML = '';
            music_bfq2.src = '';
            music_boyyom_tj_ym.style.display = 'none';
            music_cd_sc();
            music_cd_ks();
            music_cd_zd();
            music_cd_dlt();
            var music_bfq = document.querySelector('.music_bfq');
            if (music_bfq.src !== 'https:') {
                music_glxs();
            }
            // 重新添加滚动字体
            WGS_wenbengundon('.music_s_mz', '16');
        } else {
            Sku_tctx('重复歌名或链接 !');
        }
    }).catch(function() { // 播放失败
        Sku_tctx('错误的URL !');
    });
});


music_tjym_url.addEventListener('input', function(e) {
    if (music_tjym_url.value[0] == '"' && music_tjym_url.value[music_tjym_url.value.length - 1] == '"') {
        music_bfq2.src = music_tjym_url.value.substring(1, music_tjym_url.value.length - 1);
    } else {
        music_bfq2.src = music_tjym_url.value;
    }
});

music_bfq2.addEventListener('play', function(e) {
    yy_ks = 0;
    // 显示暂停
    var music_bfq = document.querySelector('.music_bfq');
    i_music_boyyom_ks.classList.remove("icon-zanting");
    i_music_boyyom_ks.classList.add("icon-kaishi3");
    // 暂停音乐
    music_bfq.pause();
});

// 音乐滚动条
setTimeout(function() {
    music_hzmax = document.querySelector('.music_hzmax');
    music_ym_gundontiao_max = document.querySelector('.music_ym_gundontiao_max');
    music_ym_gundontiao_max.style.height = parseFloat(music_hzmax.style.maxHeight) - 2 + 'px';
});
window.addEventListener('resize', function() {
    setTimeout(function() {
        music_hzmax = document.querySelector('.music_hzmax');
        music_ym_gundontiao_max = document.querySelector('.music_ym_gundontiao_max');
        music_ym_gundontiao_max.style.height = parseFloat(music_hzmax.style.maxHeight) - 2 + 'px';
    });
});





// 提醒栏
var sy_djs_txl = document.querySelector('.sy_djs_txl');
sy_djs_txl.addEventListener('click', function(e) {
    sy_dw_richen.click();
});
var sy_djs_txl2 = document.querySelector('.sy_djs_txl2');
sy_djs_txl2.addEventListener('click', function(e) {
    sy_dw_richen.click();
});

var sy_djs_txl_jsq;
sy_djs_txl_jsq = setInterval(function() {
    var sy_djs_r_s_one = document.querySelectorAll('.sy_djs_r_s')[0];
    if (sy_djs_r_s_one !== undefined) {
        var sy_djs_r_t_1 = document.querySelectorAll('.sy_djs_r_s')[0].querySelector('.sy_djs_r_t');
        var sy_djs_r_s_1 = document.querySelectorAll('.sy_djs_r_time')[0].innerHTML;
        var nr = '';

        if (nrmaxs0_nr.scrollTop < 20 && sy_djs_r_s_1 == '时间已到<br>超过三天自动删除') {
            sy_djs_txl.style.display = 'block';

            nr = '“' + sy_djs_r_t_1.innerHTML + '”时间已到 ↓';
        } else if (nrmaxs0_nr.scrollTop < 20 && sy_djs_r_s_1.indexOf('后') == -1 && sy_djs_r_s_1.indexOf('明') == -1) {
            sy_djs_txl.style.display = 'block';

            nr = '距离 “' + sy_djs_r_t_1.innerHTML + '”只有 ' + sy_djs_r_s_1 + ' ↓';
        } else {
            sy_djs_txl.style.display = 'none';
        }

        sy_djs_txl.innerHTML = nr;
    }

    var sy_djs_r_s_one = document.querySelectorAll('.sy_djs_r_s')[1];
    if (sy_djs_r_s_one !== undefined) {
        var sy_djs_r_t_1 = document.querySelectorAll('.sy_djs_r_s')[1].querySelector('.sy_djs_r_t');
        var sy_djs_r_s_1 = document.querySelectorAll('.sy_djs_r_time')[1].innerHTML;
        var nr = '';

        if (nrmaxs0_nr.scrollTop < 20 && sy_djs_r_s_1 == '时间已到<br>超过三天自动删除') {
            sy_djs_txl2.style.display = 'block';

            nr = '“' + sy_djs_r_t_1.innerHTML + '”时间已到 ↓';
        } else if (nrmaxs0_nr.scrollTop < 20 && sy_djs_r_s_1.indexOf('后') == -1 && sy_djs_r_s_1.indexOf('明') == -1) {
            sy_djs_txl2.style.display = 'block';

            nr = '距离 “' + sy_djs_r_t_1.innerHTML + '”只有 ' + sy_djs_r_s_1 + ' ↓';
        } else {
            sy_djs_txl2.style.display = 'none';
        }

        sy_djs_txl2.innerHTML = nr;
    }
}, 200);





// 优化内存
top_dhl_S = document.querySelector('.top_dhl').querySelectorAll('div');
top_dhl_S[0].addEventListener('click', function(e) {
    // 倒计时优化
    clearInterval(sy_djs_zxsj_sjq);
    sy_djs_r_min.innerHTML = '';
    clearInterval(djs_s);
    sy_djs_zxsj_sjq = setInterval(function() {
        sy_djs_l_yr_time.innerHTML = time_day_yr();
        sy_djs_l_time.innerHTML = time_day_sfm();
    }, 1000);
    sy_djs_px();
    SC_djs();
    sy_djs_yd();
    // 重新加载边框
    if (localStorage.bei_jing_kuan_ture == 1) {
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
    }

    // 倒计时提示优化
    sy_djs_txl_jsq = setInterval(function() {
        var sy_djs_r_s_one = document.querySelectorAll('.sy_djs_r_s')[0];
        if (sy_djs_r_s_one !== undefined) {
            var sy_djs_r_t_1 = document.querySelectorAll('.sy_djs_r_s')[0].querySelector('.sy_djs_r_t');
            var sy_djs_r_s_1 = document.querySelectorAll('.sy_djs_r_time')[0].innerHTML;
            var nr = '';

            if (nrmaxs0_nr.scrollTop < 20 && sy_djs_r_s_1 == '时间已到<br>超过三天自动删除') {
                sy_djs_txl.style.display = 'block';

                nr = '“' + sy_djs_r_t_1.innerHTML + '”时间已到 ↓';
            } else if (nrmaxs0_nr.scrollTop < 20 && sy_djs_r_s_1.indexOf('后') == -1 && sy_djs_r_s_1.indexOf('明') == -1) {
                sy_djs_txl.style.display = 'block';

                nr = '距离 “' + sy_djs_r_t_1.innerHTML + '”只有 ' + sy_djs_r_s_1 + ' ↓';
            } else {
                sy_djs_txl.style.display = 'none';
            }

            sy_djs_txl.innerHTML = nr;
        }

        var sy_djs_r_s_one = document.querySelectorAll('.sy_djs_r_s')[1];
        if (sy_djs_r_s_one !== undefined) {
            var sy_djs_r_t_1 = document.querySelectorAll('.sy_djs_r_s')[1].querySelector('.sy_djs_r_t');
            var sy_djs_r_s_1 = document.querySelectorAll('.sy_djs_r_time')[1].innerHTML;
            var nr = '';

            if (nrmaxs0_nr.scrollTop < 20 && sy_djs_r_s_1 == '时间已到<br>超过三天自动删除') {
                sy_djs_txl2.style.display = 'block';

                nr = '“' + sy_djs_r_t_1.innerHTML + '”时间已到 ↓';
            } else if (nrmaxs0_nr.scrollTop < 20 && sy_djs_r_s_1.indexOf('后') == -1 && sy_djs_r_s_1.indexOf('明') == -1) {
                sy_djs_txl2.style.display = 'block';

                nr = '距离 “' + sy_djs_r_t_1.innerHTML + '”只有 ' + sy_djs_r_s_1 + ' ↓';
            } else {
                sy_djs_txl2.style.display = 'none';
            }

            sy_djs_txl2.innerHTML = nr;
        }
    }, 200);
});
top_dhl_S[1].addEventListener('click', function(e) {
    clearInterval(sy_djs_zxsj_sjq);
    clearInterval(djs_s);
    sy_djs_r_min.innerHTML = '';
    clearInterval(sy_djs_txl_jsq);
    sy_djs_txl.style.display = 'none';
});
top_dhl_S[2].addEventListener('click', function(e) {
    clearInterval(sy_djs_zxsj_sjq);
    clearInterval(djs_s);
    sy_djs_r_min.innerHTML = '';
    clearInterval(sy_djs_txl_jsq);
    sy_djs_txl.style.display = 'none';
});
top_dhl_S[3].addEventListener('click', function(e) {
    clearInterval(sy_djs_zxsj_sjq);
    clearInterval(djs_s);
    sy_djs_r_min.innerHTML = '';
    clearInterval(sy_djs_txl_jsq);
    sy_djs_txl.style.display = 'none';
});




// 3D动态内容
var sd_dtnr_min = document.querySelector('.sd_dtnr_min');

// 点击时的效果
function sd_dtnr_min_s_click() {
    // 去除定时器
    clearInterval(sy_lbnr_dsq_sd);
    // 清楚HTML
    sd_dtnr_min.innerHTML = '';
    // 显示关闭
    topmax.style.display = 'block';
    nrmax.style.display = 'block';
    sd_dtnr_max.style.display = 'none';
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

// 轮播内容定时器
sy_lbnr_dsq_sd = undefined;
//定义高度
window.addEventListener('resize', function() {
    sd_dtnr_min.style.top = (window.innerHeight - sd_dtnr_min.offsetHeight) / 2 + 'px';
});

// 固定位置数
var sjnr_wz_shu = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

function sy_lbnr_hs2(max_gs) {


    // 输出框架
    for (var i = 0; i < 17; i++) {
        var sd_dtnr_min = document.querySelector('.sd_dtnr_min');
        var div = document.createElement('div');
        div.className = 'sd_dtnr_s';
        sd_dtnr_min.appendChild(div);
    }

    // 条数
    var sjtiao_gs = document.querySelectorAll('.sd_dtnr_s').length;
    //设置高度
    sd_dtnr_min.style.top = (window.innerHeight - sd_dtnr_min.offsetHeight) / 2 + 'px';

    // 随机函数
    function sjs4(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    // 直接输出
    var lbnr_max = document.querySelectorAll('.sd_dtnr_s');
    // 固定位置数
    sjnr_wz_shu = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    function sjnr_shuchu2(gs) {
        // 1日程2作品3链接4未标记5设置6音乐
        var sj_nr_bl = [1, 2, 3, 3, 3, 4, 5, 6, 7, 7];

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
        }




        for (var i = 0; i < sjtiao_gs; i++) {
            // 大于不输出
            var sjnr_min_gs = document.querySelectorAll('.sd_dtnr_s')[i].querySelectorAll('.lbnr_min').length;
            if (sjnr_min_gs > max_gs) {
                continue;
            }
            // 小于开始输出
            for (var t = 0; t < gs; t++) {
                var sknr_sjs = sj_nr_bl[sjs4(0, sj_nr_bl.length - 1)];
                if (sknr_sjs == 1) { //倒计时
                    var div = document.createElement('div');
                    div.className = 'lbnr_min';

                    div.addEventListener('click', function(e) {
                        var top_dhl_s = document.querySelector('.top_dhl').querySelectorAll('div');
                        top_dhl_s[0].click();
                        sd_dtnr_min_s_click();
                        setTimeout(function() {
                            sy_dw_richen.click();
                        });
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
                        div.innerHTML = '<div class="lbnr_ljtp" style="background-image: url(' + sjnr_lj[0] + ');"></div><div class="lbnr_lj_xx"><div class="lbnr_ljmz">' + sjnr_lj[1] + '</div><div class="lbnr_ljbz">' + sjnr_lj[2] + '</div></div><div class="lbnr_lj_dz"><a class="lbnr_ljdz" target="_blank" href="' + sjnr_lj[3] + '">进入</a></div>';
                    } else if (sjnr_lj.length == 5) {
                        div.innerHTML = '<div class="lbnr_ljtp" style="background-image: url(' + sjnr_lj[0] + ');"></div><div class="lbnr_lj_xx"><div class="lbnr_ljmz">' + sjnr_lj[1] + '</div><div class="lbnr_ljbz">' + sjnr_lj[2] + '</div></div><div class="lbnr_lj_dz"><a class="lbnr_ljdz" target="_blank" href="' + sjnr_lj[3] + '">进入</a><a class="lbnr_ljxz" target="_blank" href="' + sjnr_lj[4] + '">下载</a></div>';
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
                        sd_dtnr_min_s_click();
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
                        sd_dtnr_min_s_click();
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

                    div.innerHTML = '<div class="lbnr_sz">' + JSON.parse(localStorage.mrrd_name)[i2] + '热点🔥TOP ' + mrrd_numtop + '</div><div class="lbnr_sz2">' + mrrd[sknr_sjs2] + '</div>';

                    div.addEventListener('click', function(e) {
                        so_ssk.value = this.querySelector('.lbnr_sz2').innerText;
                        so_anniu.click();
                    });

                    lbnr_max[i].appendChild(div);
                    // 固定位置
                    div.style.left = sjnr_wz_shu[i] + 'px';
                    sjnr_wz_shu[i] += div.offsetWidth + 12;
                }
            }
        }

        // 删除无用动态
        for (var u = 0; u < sjtiao_gs; u++) {
            var lbnr_min_s = document.querySelectorAll('.sd_dtnr_s')[u].querySelectorAll('.lbnr_min');
            for (var i = 0; i < lbnr_min_s.length; i++) {
                if ((lbnr_min_s[i].offsetLeft + lbnr_min_s[i].offsetWidth) < lbnr_max[u].style.transform.substring(12, lbnr_max[u].style.transform.length - 3) - 100) {
                    lbnr_max[u].removeChild(lbnr_min_s[i]);
                }
            }
        }

    }
    sjnr_shuchu2(max_gs);
    // 定时输出
    var lbnr_max = document.querySelectorAll('.sd_dtnr_s');
    var sjnr_ydjl = 0;
    var lbnr_max_shu_du_haomiao = 1000;

    // 滚动
    sy_lbnr_dsq_sd = setInterval(function() {
        sjnr_ydjl += 100;
        var lbnr_max = document.querySelectorAll('.sd_dtnr_s');
        for (var i = 0; i < sjtiao_gs; i++) {
            lbnr_max[i].style.transform = 'translateX(-' + sjnr_ydjl + 'px)';
        }
        sjnr_shuchu2(1);
    }, lbnr_max_shu_du_haomiao);

    for (var i = 0; i < sjtiao_gs; i++) {
        lbnr_max[i].style.transition = (lbnr_max_shu_du_haomiao / 1000) + 's linear';
    }


}
// 3d开关
var sy_3d_kaiguan = document.querySelector('.sy_3d_kaiguan');
var sd_dtnr_max = document.querySelector('.sd_dtnr_max');
// 设置高度
sy_3d_kaiguan.style.top = ((window.innerHeight + 56 - 523 - 84) / 2) + 497 + 'px';
window.addEventListener('resize', function() {
    sy_3d_kaiguan.style.top = ((window.innerHeight + 56 - 523 - 84) / 2) + 497 + 'px';
});
// 开始如果不是隐藏
if (localStorage.sy_lbxz == 1) { sy_3d_kaiguan.style.display = 'block'; }
sy_3d_kaiguan.addEventListener('click', function(e) {
    topmax.style.display = 'none';
    nrmax.style.display = 'none';
    sd_dtnr_max.style.display = 'block';
    sy_lbnr_hs2(20);
    var el = document.documentElement;
    el.requestFullscreen || el.mozRequestFullScreen || el.webkitRequestFullscreen || el.msRequestFullScreen ? el.requestFullscreen() || el.mozRequestFullScreen() || el.webkitRequestFullscreen() || el.msRequestFullscreen() : null;

});






// 换位
// 换位封装
var huanwei_class_name3;

function enableDragAndDrop3(className2) {
    var draggies = document.querySelectorAll('.' + className2);
    huanwei_class_name3 = className2;

    // 移除已存在的拖拽相关事件监听器
    draggies.forEach(function(draggie) {
        draggie.removeEventListener('dragstart', handleDragStart3);
        draggie.removeEventListener('dragover', handleDragOver3);
        draggie.removeEventListener('drop', handleDrop3);
        draggie.removeEventListener('dragend', handleDragEnd3);
    });

    // 重新添加事件监听器
    draggies.forEach(function(draggie) {
        draggie.addEventListener('dragstart', handleDragStart3, false);
        draggie.addEventListener('dragover', handleDragOver3, false);
        draggie.addEventListener('drop', handleDrop3, false);
        draggie.addEventListener('dragend', handleDragEnd3, false);

    });

}

var draggedItem2 = null;
var sfwuxiao2 = 0;

function handleDragStart3(e) {
    draggedItem2 = this;
    e.dataTransfer.effectAllowed = 'move';

    su_biao.style.display = 'none';


    var parent2 = draggedItem2.parentNode;
    dragIndex22 = Array.prototype.indexOf.call(parent2.children, draggedItem2);
    dropIndex22 = Array.prototype.indexOf.call(parent2.children, this);

    sfwuxiao2 = 0;
}

function handleDragOver3(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    if (draggedItem2 !== this) {
        // 交换两个元素的位置
        var parent2 = draggedItem2.parentNode;
        var dragIndex1 = Array.prototype.indexOf.call(parent2.children, draggedItem2);
        var dropIndex1 = Array.prototype.indexOf.call(parent2.children, this);
        dropIndex22 = Array.prototype.indexOf.call(parent2.children, this);
        if (dragIndex1 < dropIndex1) {
            var qb = parent2.querySelectorAll('.' + huanwei_class_name3);
            parent2.insertBefore(qb[dragIndex1], qb[dropIndex1].nextElementSibling);
        } else {
            var qb = parent2.querySelectorAll('.' + huanwei_class_name3);
            parent2.insertBefore(qb[dragIndex1], qb[dropIndex1]);
        }
    }
}

function handleDrop3(e) {
    e.stopPropagation();

    su_biao.style.transform = 'scale(1)';

    sfwuxiao2 = 1;
}

function handleDragEnd3(e) {

    su_biao.style.transform = 'scale(1)';


    if (sfwuxiao2 == 0) {
        var parent2 = draggedItem2.parentNode;
        var dragIndex1 = dropIndex22;
        var dropIndex1 = dragIndex22;
        if (dragIndex1 < dropIndex1) {
            var qb = parent2.querySelectorAll('.' + huanwei_class_name3);
            parent2.insertBefore(qb[dragIndex1], qb[dropIndex1].nextElementSibling);
        } else {
            var qb = parent2.querySelectorAll('.' + huanwei_class_name3);
            parent2.insertBefore(qb[dragIndex1], qb[dropIndex1]);
        }
    } else {
        // 最后交换两个元素的位置
        var parent2 = draggedItem2.parentNode;
        dropIndex22 = Array.prototype.indexOf.call(parent2.children, this);
        console.log(dragIndex22, dropIndex22);
        // 内存变换1
        if (dragIndex22 !== dropIndex22) {
            if (dragIndex22 < dropIndex22) {
                var sy_zpzs_mz = JSON.parse(localStorage.sy_zpzs_mz);
                var sy_zpzs_mz2 = JSON.parse(JSON.stringify(sy_zpzs_mz));
                for (var i = dragIndex22; i <= dropIndex22; i++) {
                    if (i !== dropIndex22) {
                        sy_zpzs_mz[i] = sy_zpzs_mz2[i + 1];
                    } else {
                        sy_zpzs_mz[dropIndex22] = sy_zpzs_mz2[dragIndex22];
                    }
                }
                localStorage.sy_zpzs_mz = JSON.stringify(sy_zpzs_mz);
            } else {
                var sy_zpzs_mz = JSON.parse(localStorage.sy_zpzs_mz);
                var sy_zpzs_mz2 = JSON.parse(JSON.stringify(sy_zpzs_mz));
                for (var i = dragIndex22; i >= dropIndex22; i--) {
                    if (i !== dropIndex22) {
                        sy_zpzs_mz[i] = sy_zpzs_mz2[i - 1];
                    } else {
                        sy_zpzs_mz[dropIndex22] = sy_zpzs_mz2[dragIndex22];
                    }
                }
                localStorage.sy_zpzs_mz = JSON.stringify(sy_zpzs_mz);
            }
        }
        // 内存变换2
        if (dragIndex22 !== dropIndex22) {
            if (dragIndex22 < dropIndex22) {
                var sy_zpzs_lj = JSON.parse(localStorage.sy_zpzs_lj);
                var sy_zpzs_lj2 = JSON.parse(JSON.stringify(sy_zpzs_lj));
                for (var i = dragIndex22; i <= dropIndex22; i++) {
                    if (i !== dropIndex22) {
                        sy_zpzs_lj[i] = sy_zpzs_lj2[i + 1];
                    } else {
                        sy_zpzs_lj[dropIndex22] = sy_zpzs_lj2[dragIndex22];
                    }
                }
                localStorage.sy_zpzs_lj = JSON.stringify(sy_zpzs_lj);
            } else {
                var sy_zpzs_lj = JSON.parse(localStorage.sy_zpzs_lj);
                var sy_zpzs_lj2 = JSON.parse(JSON.stringify(sy_zpzs_lj));
                for (var i = dragIndex22; i >= dropIndex22; i--) {
                    if (i !== dropIndex22) {
                        sy_zpzs_lj[i] = sy_zpzs_lj2[i - 1];
                    } else {
                        sy_zpzs_lj[dropIndex22] = sy_zpzs_lj2[dragIndex22];
                    }
                }
                localStorage.sy_zpzs_lj = JSON.stringify(sy_zpzs_lj);
            }
        }
        iframe_cxpx();
        console.log('---------------');
    }


    draggedItem2 = null;

}
enableDragAndDrop3('iframe1');






// 滚动条
Sku_gundontiao('.music_hzmax', '.music_ym_gundontiao_max', '.music_ym_gundontiao_min');






//全局按键事件
let isShiftPressed = false;
document.addEventListener('keyup', function(event) {
    if (event.key === 'Shift') {
        isShiftPressed = false;
    }
});
document.addEventListener('keydown', function(e) {
    if (e.key === 'Shift') {
        isShiftPressed = true;
    }
    if (music_ym.style.display == 'block') {
        if (e.key == ' ' && music_boyyom_tj_ym.style.display == 'none') {
            i_music_boyyom_ks.click();
        }
        if (e.key == '.' && music_boyyom_tj_ym.style.display == 'none') {
            i_music_boyyom_xys.click();
        }
        if (e.key == ',' && music_boyyom_tj_ym.style.display == 'none') {
            i_music_boyyom_sys.click();
        }
    }

    if (e.key == 'Enter') {
        if (sy_djs_tjym.style.display == 'block') {
            if (input_djs_tjym_gs == -1) {
                input_djs_tjym_time_s[0].focus();
            } else if (input_djs_tjym_gs == 0) {
                input_djs_tjym_time_s[1].focus();
            } else if (input_djs_tjym_gs == 1) {
                input_djs_tjym_time_s[2].focus();
            } else if (input_djs_tjym_gs == 2) {
                input_djs_tjym_time_s2[2].focus();
            } else if (input_djs_tjym_gs == 3) {
                input_djs_tjym_time_s2[1].focus();
            } else if (input_djs_tjym_gs == 4) {
                input_djs_tjym_time_s2[0].focus();
            } else if (input_djs_tjym_gs == 5) {
                djs_tjym_qr.click();
            }
        }
        if (sy_zp_tj_ym.style.display == 'block') {
            sy_zp_tj_anniu.click();
        }
        if (music_boyyom_tj_ym.style.display == 'block') {
            music_tjym_qd.click();
        }
    } else if (e.key == 'Escape') {
        if (nrmaxs0.style.display == 'block') {
            sy_dw_top.click();
        }
        if (sd_dtnr_max.style.display == 'block') {
            // 如果首页，开始轮播图
            if (nrmaxs0.style.display == 'block') {
                var top_dhl_s = document.querySelector('.top_dhl').querySelectorAll('div');
                top_dhl_s[0].click();
            }
            // 去除定时器
            clearInterval(sy_lbnr_dsq_sd);
            // 清楚HTML
            sd_dtnr_min.innerHTML = '';
            // 显示关闭
            topmax.style.display = 'block';
            nrmax.style.display = 'block';
            sd_dtnr_max.style.display = 'none';
        }
    } else if (e.altKey && e.key == 'l') {
        if (localStorage.dr_mm == '') {
            if (sd_dtnr_max.style.display == 'none') {
                // 停止音乐
                if (i_music_boyyom_ks.className == 'iconfont i_music_boyyom_ks icon-zanting') {
                    i_music_boyyom_ks.click();
                }
                // 开始3d
                sy_3d_kaiguan.click();
            }
        } else {
            if (drym_max.style.display == 'none') {
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
            }
        }
    }

    if (nrmaxs0.style.display == 'block') {
        if (e.key == 'Delete' && sy_shezhi_gn.style.display == 'block') {
            sy_shezhi_gn_sc.click();
        }
        if (e.key == '+' && sy_shezhi_gn.style.display == 'block') {
            sy_shezhi_gn_tj.click();
        }
    }
});
//全局右击事件
document.addEventListener('contextmenu', function() {
    sy_djs_tj_yc();
    sy_zp_tj_sc();
    sy_dwck_ym_yc();
    music_yms_yc();
});
//全局左击事件
document.addEventListener('click', function() {
    sy_djs_tj_yc();
    sy_zp_tj_sc();
    sy_dwck_ym_yc();
    music_yms_yc();
});