// 所有文本超出字体浮动效果
// function WGS_wenbengundon(qwe) {
//     var wb = document.querySelectorAll(qwe);
//     for (var i = 0; i < wb.length; i++) {
//         wb[i].addEventListener('mouseover', function(e) {
//             var nrcd = this.scrollWidth;
//             var hzcd = this.offsetWidth;
//             if (nrcd > hzcd) {
//                 var duochu = nrcd - hzcd;
//                 var sj = duochu / 50;
//                 this.style.transition = sj + 's linear';
//                 this.style.textIndent = (nrcd * -1) + hzcd + 'px';
//             }
//         });
//         wb[i].addEventListener('mouseout', function(e) {
//             this.style.transition = '';
//             this.style.textIndent = '0px';
//         });
//     }
// }

function WGS_wenbengundon9(qwe) {
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
                this.style.textIndent = '0px';
            });
        }
    }
}

// 单独文本超出字体浮动效果
// function WGS_wenbengundon_dd(qwe) {
//     qwe.addEventListener('mouseover', function(e) {
//         var nrcd = this.scrollWidth;
//         var hzcd = this.offsetWidth;
//         if (nrcd > hzcd) {
//             var duochu = nrcd - hzcd;
//             var sj = duochu / 50;
//             this.style.transition = sj + 's linear';
//             this.style.textIndent = (nrcd * -1) + hzcd + 'px';
//         }
//     });
//     qwe.addEventListener('mouseout', function(e) {
//         this.style.transition = '';
//         this.style.textIndent = '0px';
//     });
// }

function WGS_wenbengundon_dd(qwe) {
    qwe.addEventListener('mouseover', function(e) {
        if (qwe.scrollWidth > qwe.offsetWidth) {
            var nrcd = this.scrollWidth;
            var hzcd = this.offsetWidth;
            var duochu = nrcd - hzcd;
            var sj = duochu / 50;
            this.style.transition = sj + 's linear';
            this.style.textIndent = (nrcd * -1) + hzcd + 'px';
        }
    });
    qwe.addEventListener('mouseout', function(e) {
        this.style.transition = '';
        this.style.textIndent = '0px';
    });
}




// 匹配浏览器高度
nrmaxs1 = document.querySelector('.nrmaxs1');
dhr_xg_tj = document.querySelector('.dhr_xg_tj');
lj_xg_tj = document.querySelector('.lj_xg_tj');
lj_zcb_ym = document.querySelector('.lj_zcb_ym');
nrmaxs1.style.marginTop = (window.innerHeight + 56 - 523 - 80) / 2 + 'px';
dhr_xg_tj.style.top = (window.innerHeight - dhr_xg_tj.offsetHeight) / 2 + 'px';
lj_xg_tj.style.top = (window.innerHeight - 221) / 2 + 'px';
lj_zcb_ym.style.top = (window.innerHeight - 221) / 2 + 'px';
window.addEventListener('resize', function() {
    nrmaxs1 = document.querySelector('.nrmaxs1');
    dhr_xg_tj = document.querySelector('.dhr_xg_tj');
    lj_xg_tj = document.querySelector('.lj_xg_tj');
    lj_zcb_ym = document.querySelector('.lj_zcb_ym');
    nrmaxs1.style.marginTop = (window.innerHeight + 56 - 523 - 80) / 2 + 'px';
    dhr_xg_tj.style.top = (window.innerHeight - dhr_xg_tj.offsetHeight) / 2 + 'px';
    lj_xg_tj.style.top = (window.innerHeight - 221) / 2 + 'px';
    lj_zcb_ym.style.top = (window.innerHeight - 221) / 2 + 'px';
});




//链接全局功能指向
function qjgnzx() {
    console.clear();
    console.log('指向: ' + zhi_xian);
    console.log('链接导航栏指向: ' + dhr_zhi_xian);
    console.log('链接导航栏右击指向: ' + dhr_zhi_xian2);
    console.log('链接指向: ' + lj_zhi_xian);
    console.log('功能指向: ' + gong_neng);
    console.log('------------------------');
}
//导航栏max 和 链接页面max 的右击事件
lian_jie_l = document.querySelector('.lian_jie_l');
lian_jie_l.addEventListener('contextmenu', function(e) {
    e.stopPropagation();
    e.preventDefault();
    zhi_xian = '导航栏';
    qjgnzx();
    var dhr_shezhi_gn_sc = document.querySelector('.dhr_shezhi_gn_sc');
    var dhr_shezhi_gn_cmm = document.querySelector('.dhr_shezhi_gn_cmm');
    dhr_shezhi_gn_cmm.style.display = 'none';
    dhr_shezhi_gn_sc.style.display = 'none';
    var dhr_shezhi_gn = document.querySelector('.dhr_shezhi_gn');
    dhr_shezhi_gn.style.display = 'block';
    dhr_shezhi_gn.style.top = e.pageY + 'px';
    dhr_shezhi_gn.style.left = e.pageX + 'px';
    var dhr_shezhi_gn_tj = document.querySelector('.dhr_shezhi_gn_tj');
    dhr_shezhi_gn_tj.style.display = 'block';
    ycgn_dhr_xgk();
    ycgn_lj_xgk();
});
lian_jie_r = document.querySelector('.lian_jie_r');
lian_jie_r.addEventListener('contextmenu', function(e) {
    e.stopPropagation();
    e.preventDefault();
    zhi_xian = '链接';
    qjgnzx();
    var dhr_shezhi_gn_sc = document.querySelector('.dhr_shezhi_gn_sc');
    var dhr_shezhi_gn_cmm = document.querySelector('.dhr_shezhi_gn_cmm');
    dhr_shezhi_gn_cmm.style.display = 'none';
    dhr_shezhi_gn_sc.style.display = 'none';
    var dhr_shezhi_gn = document.querySelector('.dhr_shezhi_gn');
    dhr_shezhi_gn.style.display = 'block';
    dhr_shezhi_gn.style.top = e.pageY + 'px';
    dhr_shezhi_gn.style.left = e.pageX + 'px';
    var dhr_shezhi_gn_tj = document.querySelector('.dhr_shezhi_gn_tj');
    dhr_shezhi_gn_tj.style.display = 'block';
    ycgn_dhr_xgk();
    ycgn_lj_xgk();
});

//链接导航栏开始
function lian_jie_l_kaishi() {
    // 创建全局指向对象和功能对象
    var dhr_sz = JSON.parse(localStorage.dhr_sz);
    zhi_xian = '无';
    if (dhr_sz.length !== 0) {
        dhr_zhi_xian = 0;
    } else {
        dhr_zhi_xian = '无';
    }
    dhr_zhi_xian2 = '无';
    lj_zhi_xian = '无'
    gong_neng = '无';
    //左侧导航栏
    lian_jie_l = document.querySelector('.lian_jie_l');
    lian_jie_r = document.querySelector('.lian_jie_r');
    //for循环输出指定导航栏个数
    var dhr_sz = JSON.parse(localStorage.dhr_sz);
    for (var i = 0; i < dhr_sz.length; i++) {
        var dhr_div = document.createElement('div');
        dhr_div.innerHTML = dhr_sz[i];
        //指定顺序值
        dhr_div.setAttribute('dhr_num', i);
        dhr_div.draggable = "true";
        dhr_div.className = 'tuodon_dhr_div';
        lian_jie_l.appendChild(dhr_div);
    }
    //for循环输出指定导航栏页面个数
    for (var i = 0; i < dhr_sz.length; i++) {
        var dhr_ym_div = document.createElement('div');
        dhr_ym_div.className = 'dhr_ym_r_s';
        lian_jie_r.appendChild(dhr_ym_div);
    }
    //第一个开始样式：显示第一个导航
    lian_jie_l = document.querySelector('.lian_jie_l');
    lian_jie_l_s = lian_jie_l.children;
    if (lian_jie_l_s.length !== 0) {
        lian_jie_l_s[0].style.color = RGB_zhq(localStorage.zi_ti_click_color);
        lian_jie_l_s[0].style.backgroundColor = RGB_zhq(localStorage.zi_ti_click_color, 0.15);
        lian_jie_l_s[0].style.borderBottom = '1px solid ' + RGB_zhq(localStorage.zi_ti_click_color);
    }
    //第一个开始样式：显示第一个导航栏页面
    lian_jie_r_s = lian_jie_r.children;
    for (var i = 0; i < dhr_sz.length; i++) {
        lian_jie_r_s[i].style.display = 'none';
    }
    if (lian_jie_r_s.length !== 0) {
        lian_jie_r_s[0].style.display = 'block';
    }
    //链接导航栏click事件
    for (var i = 0; i < lian_jie_l_s.length; i++) {
        //点击事件
        lian_jie_l_s[i].addEventListener('click', function() {
            //设置指向
            dhr_zhi_xian = this.getAttribute('dhr_num');
            qjgnzx();
            //变样式
            for (var i = 0; i < lian_jie_l_s.length; i++) {
                lian_jie_l_s[i].style.color = '';
                lian_jie_l_s[i].style.backgroundColor = '';
                lian_jie_l_s[i].style.borderBottom = '';
            }
            this.style.color = RGB_zhq(localStorage.zi_ti_click_color);
            this.style.backgroundColor = RGB_zhq(localStorage.zi_ti_click_color, 0.15);
            this.style.borderBottom = '1px solid ' + RGB_zhq(localStorage.zi_ti_click_color);
            //切换页面
            var dhr_sz = JSON.parse(localStorage.dhr_sz);
            for (var i = 0; i < dhr_sz.length; i++) {
                lian_jie_r_s[i].style.display = 'none';
            }
            lian_jie_r_s[this.getAttribute('dhr_num')].style.display = 'block';
            lian_jie_r.scroll(0, 0);
        });
        //右击事件
        lian_jie_l_s[i].addEventListener('contextmenu', function(e) {
            e.preventDefault();
            e.stopPropagation();
            // 设置指向
            dhr_zhi_xian2 = this.getAttribute('dhr_num');
            zhi_xian = '导航栏';
            qjgnzx();
            //显示设置
            dhr_shezhi_gn = document.querySelector('.dhr_shezhi_gn');
            dhr_shezhi_gn_sc = document.querySelector('.dhr_shezhi_gn_sc');
            dhr_shezhi_gn_cmm = document.querySelector('.dhr_shezhi_gn_cmm');
            dhr_shezhi_gn.style.display = 'block';
            dhr_shezhi_gn_sc.style.display = 'block';
            dhr_shezhi_gn_cmm.style.display = 'block';
            dhr_shezhi_gn.style.top = e.pageY + 'px';
            dhr_shezhi_gn.style.left = e.pageX + 'px';
            var dhr_shezhi_gn_tj = document.querySelector('.dhr_shezhi_gn_tj');
            dhr_shezhi_gn_tj.style.display = 'block';
            //隐藏修改框 
            ycgn_dhr_xgk();
            ycgn_lj_xgk();
        });
    }

    //导出所有链接
    var dhr_ym_dx = JSON.parse(localStorage.dhr_ym_dx);
    lian_jie_r_s = lian_jie_r.children;
    for (var j = 0; j < Object.keys(dhr_ym_dx).length; j++) {
        for (var i = 0; i < Object.keys(dhr_ym_dx['dhr_ym_dx' + j]).length; i++) {
            var lian_jie_rs_div = document.createElement('div');
            lian_jie_rs_div.className = 'lj_max';
            lian_jie_rs_div.draggable = "true";
            lian_jie_rs_div.setAttribute('lj_num', i);
            //判断是否有下载按钮
            if (dhr_ym_dx['dhr_ym_dx' + j]['dhr_ym_sz' + i][4]) {
                lian_jie_rs_div.innerHTML = '<div class="lj_tp" style="background-image: url(' + dhr_ym_dx['dhr_ym_dx' + j]['dhr_ym_sz' + i][0] + ');"></div><div class="lj_xx"><div class="lj_xx_t">' + dhr_ym_dx['dhr_ym_dx' + j]['dhr_ym_sz' + i][1] + '</div><div class="lj_xx_b">' + dhr_ym_dx['dhr_ym_dx' + j]['dhr_ym_sz' + i][2] + '</div></div><div class="lj_lj"><a class="lj_lj_t" target="_blank" href="' + dhr_ym_dx['dhr_ym_dx' + j]['dhr_ym_sz' + i][3] + '">进入</a><a class="lj_lj_b" target="_blank" href="' + dhr_ym_dx['dhr_ym_dx' + j]['dhr_ym_sz' + i][4] + '">下载</a></div>';
            } else {
                lian_jie_rs_div.innerHTML = '<div class="lj_tp" style="background-image: url(' + dhr_ym_dx['dhr_ym_dx' + j]['dhr_ym_sz' + i][0] + ');"></div><div class="lj_xx"><div class="lj_xx_t">' + dhr_ym_dx['dhr_ym_dx' + j]['dhr_ym_sz' + i][1] + '</div><div class="lj_xx_b">' + dhr_ym_dx['dhr_ym_dx' + j]['dhr_ym_sz' + i][2] + '</div></div><div class="lj_lj"><a class="lj_lj_t" target="_blank" href="' + dhr_ym_dx['dhr_ym_dx' + j]['dhr_ym_sz' + i][3] + '">进入</a></div>';
            }
            lian_jie_r_s[j].appendChild(lian_jie_rs_div);
        }
    }
    WGS_wenbengundon9('.lj_xx_b');
    // Sku-a转换href
    a_click_self();
    // 下载转换href
    a_click_self_xz();

    //为所有链接添加事   
    lj_max = document.querySelectorAll('.lj_max');
    for (var i = 0; i < lj_max.length; i++) {
        // 链接添加右击事件
        lj_max[i].addEventListener('contextmenu', function(e) {
            e.preventDefault();
            e.stopPropagation();
            // 设置指向
            lj_zhi_xian = this.getAttribute('lj_num');
            zhi_xian = '链接';
            qjgnzx();
            //显示设置
            var dhr_shezhi_gn = document.querySelector('.dhr_shezhi_gn');
            var dhr_shezhi_gn_sc = document.querySelector('.dhr_shezhi_gn_sc');
            var dhr_shezhi_gn_cmm = document.querySelector('.dhr_shezhi_gn_cmm');
            dhr_shezhi_gn.style.display = 'block';
            dhr_shezhi_gn_sc.style.display = 'block';
            dhr_shezhi_gn_cmm.style.display = 'block';
            dhr_shezhi_gn.style.top = e.pageY + 'px';
            dhr_shezhi_gn.style.left = e.pageX + 'px';
            var dhr_shezhi_gn_tj = document.querySelector('.dhr_shezhi_gn_tj');
            dhr_shezhi_gn_tj.style.display = 'block';
            //隐藏修改框
            ycgn_dhr_xgk();
            ycgn_lj_xgk();
        });
    }
}
lian_jie_l_kaishi();

//one开始
function one_kaishi() {
    //第一个开始样式：显示第一个导航栏
    lian_jie_l = document.querySelector('.lian_jie_l');
    lian_jie_l_s = lian_jie_l.children;
    lian_jie_r = document.querySelector('.lian_jie_r');
    for (var i = 0; i < lian_jie_l_s.length; i++) {
        lian_jie_l_s[i].style.color = '';
        lian_jie_l_s[i].style.backgroundColor = '';
        lian_jie_l_s[i].style.borderBottom = '1px solid rgba(255, 255, 255, 0.3)';
    }
    if (lian_jie_l_s.length !== 0) {
        lian_jie_l_s[0].style.color = RGB_zhq(localStorage.zi_ti_click_color);
        lian_jie_l_s[0].style.backgroundColor = RGB_zhq(localStorage.zi_ti_click_color, 0.15);
        lian_jie_l_s[0].style.borderBottom = '1px solid ' + RGB_zhq(localStorage.zi_ti_click_color);
    }
    //第一个开始样式：显示第一个导航栏页面
    lian_jie_r_s = lian_jie_r.children;
    dhr_sz = JSON.parse(localStorage.dhr_sz);
    for (var i = 0; i < dhr_sz.length; i++) {
        lian_jie_r_s[i].style.display = 'none';
    }
    if (lian_jie_r_s.length !== 0) {
        lian_jie_r_s[0].style.display = 'block';
    }
}

//重新排序
function cxpx() {
    if (zhi_xian == '导航栏') {
        //导航栏排序
        lian_jie_l_s = document.querySelector('.lian_jie_l').children;
        for (var i = 0; i < lian_jie_l_s.length; i++) {
            //指定顺序值
            lian_jie_l_s[i].setAttribute('dhr_num', i)
        }
    } else if (zhi_xian == '链接') {
        //链接排序
        lian_jie_r = document.querySelector('.lian_jie_r');
        var lian_jie_r_s_s = lian_jie_r.children[dhr_zhi_xian].children;
        for (var i = 0; i < lian_jie_r_s_s.length; i++) {
            //指定顺序值
            lian_jie_r_s_s[i].setAttribute('lj_num', i)
        }
    } else if (zhi_xian == '搜索中的链接') {
        //原全部链接排序
        var lian_jie_r = document.querySelector('.lian_jie_r');
        var lian_jie_r_s_s = lian_jie_r.children[dhr_zhi_xian].children;
        for (var i = 0; i < lian_jie_r_s_s.length; i++) {
            //指定顺序值
            lian_jie_r_s_s[i].setAttribute('lj_num', i)
        }
        //搜索中的链接排序
        lian_jie_r2 = document.querySelector('.lian_jie_r2');
        var lian_jie_r_s_s = lian_jie_r2.querySelectorAll('.lj_max');
        for (var i = 0; i < lian_jie_r_s_s.length; i++) {
            //指定顺序值
            lian_jie_r_s_s[i].setAttribute('lj_num', i);
            //搜索中的链接总排序
            var this_zong_lj_num = lian_jie_r_s_s[i].getAttribute('zong_lj_num');
            if (this_zong_lj_num - 0 > suo_shui_zhon_num2 - 0) {
                lian_jie_r_s_s[i].setAttribute('zong_lj_num', this_zong_lj_num - 1);
            }
        }
    }
}

//导航栏设置

//删除功能
var dhr_shezhi_gn_sc = document.querySelector('.dhr_shezhi_gn_sc');
dhr_shezhi_gn_sc.addEventListener('click', function() {
    if (zhi_xian == '导航栏') {
        //删除内存
        var sz1 = JSON.parse(localStorage.dhr_sz);
        sz1.splice(dhr_zhi_xian2, 1);
        localStorage.dhr_sz = JSON.stringify(sz1);
        var mz = lian_jie_l_s[dhr_zhi_xian2].innerHTML;
        dx1 = JSON.parse(localStorage.dhr_ym_dx);
        delete dx1['dhr_ym_dx' + dhr_zhi_xian2];
        var dx2 = {};
        for (var i = 0; i < Object.keys(dx1).length; i++) {
            dx2['dhr_ym_dx' + i] = dx1[Object.keys(dx1)[i]];
        }
        localStorage.dhr_ym_dx = JSON.stringify(dx2);
        // 删除HTML
        lian_jie_l = document.querySelector('.lian_jie_l');
        lian_jie_l_s = lian_jie_l.children;
        lian_jie_l.removeChild(lian_jie_l_s[dhr_zhi_xian2]);
        lian_jie_r = document.querySelector('.lian_jie_r');
        lian_jie_r_s2 = lian_jie_r.children;
        lian_jie_r.removeChild(lian_jie_r_s2[dhr_zhi_xian2]);
        //重新排序
        cxpx();
        if (dhr_zhi_xian == dhr_zhi_xian2) {
            //显示第一个
            one_kaishi();
            //指向更改
            lian_jie_l = document.querySelector('.lian_jie_l');
            lian_jie_l_s = lian_jie_l.children;
            if (lian_jie_l_s.length !== 0) {
                dhr_zhi_xian = 0;
            } else {
                dhr_zhi_xian = '无';
            }
            qjgnzx();
            // 显示最上方
            lian_jie_l.scroll(0, 0);
        } else {
            //指向更改
            lian_jie_l = document.querySelector('.lian_jie_l');
            lian_jie_l_s = lian_jie_l.children;
            if (lian_jie_l_s.length !== 0) {
                if (dhr_zhi_xian > dhr_zhi_xian2) {
                    dhr_zhi_xian--;
                }
            } else {
                dhr_zhi_xian = '无';
            }
            qjgnzx();
        }

        Sku_tctx('分页《' + mz + '》' + '删除成功');
    } else if (zhi_xian == '链接') {
        // 删除内存
        var dx1 = JSON.parse(localStorage.dhr_ym_dx);
        delete dx1['dhr_ym_dx' + dhr_zhi_xian]['dhr_ym_sz' + lj_zhi_xian];
        var dx2 = {};
        for (var i = 0; i < Object.keys(dx1).length; i++) {
            dx2['dhr_ym_dx' + i] = new Object();
        }
        for (var j = 0; j < Object.keys(dx1).length; j++) {
            for (var i = 0; i < Object.keys(dx1['dhr_ym_dx' + j]).length; i++) {
                dx2['dhr_ym_dx' + j]['dhr_ym_sz' + i] = dx1['dhr_ym_dx' + j][Object.keys(dx1['dhr_ym_dx' + j])[i]];
            }
        }
        localStorage.dhr_ym_dx = JSON.stringify(dx2);
        //删除HTML
        lian_jie_r = document.querySelector('.lian_jie_r');
        lian_jie_r_s = lian_jie_r.children;
        lian_jie_r_s_s = lian_jie_r_s[dhr_zhi_xian].children;
        var mz = lian_jie_r_s_s[lj_zhi_xian].querySelector('.lj_xx_t').innerHTML;
        lian_jie_r_s[dhr_zhi_xian].removeChild(lian_jie_r_s_s[lj_zhi_xian]);
        //重新排序
        cxpx();

        Sku_tctx('链接《' + mz + '》删除成功');
    } else if (zhi_xian == '搜索中的链接') {
        // 删除内存
        var dx1 = JSON.parse(localStorage.dhr_ym_dx);
        delete dx1['dhr_ym_dx' + dhr_zhi_xian]['dhr_ym_sz' + lj_zhi_xian];
        var dx2 = {};
        for (var i = 0; i < Object.keys(dx1).length; i++) {
            dx2['dhr_ym_dx' + i] = new Object();
        }
        for (var j = 0; j < Object.keys(dx1).length; j++) {
            for (var i = 0; i < Object.keys(dx1['dhr_ym_dx' + j]).length; i++) {
                dx2['dhr_ym_dx' + j]['dhr_ym_sz' + i] = dx1['dhr_ym_dx' + j][Object.keys(dx1['dhr_ym_dx' + j])[i]];
            }
        }
        localStorage.dhr_ym_dx = JSON.stringify(dx2);
        //删除HTML
        lian_jie_r = document.querySelector('.lian_jie_r');
        lian_jie_r_s = lian_jie_r.children;
        lian_jie_r_s_s = lian_jie_r_s[dhr_zhi_xian].children;
        lian_jie_r_s[dhr_zhi_xian].removeChild(lian_jie_r_s_s[lj_zhi_xian]);

        //删除HTML2(搜索中的html)
        var lian_jie_ssym = document.querySelector('.lian_jie_ssym');
        var xgwz = lian_jie_ssym.children[suo_shui_zhon_num];
        var mz = xgwz.querySelector('.lj_xx_t').innerHTML;
        lian_jie_ssym.removeChild(xgwz);

        //重新排序
        cxpx();

        Sku_tctx('链接《' + mz + '》删除成功');
    }
});

//修改功能 
lj_srk_tpid = document.querySelector('.lj_srk_tpid');
lj_srk_mc = document.querySelector('.lj_srk_mc');
lj_srk_zsm = document.querySelector('.lj_srk_zsm');
lj_srk_wzid = document.querySelector('.lj_srk_wzid');
lj_srk_xzid = document.querySelector('.lj_srk_xzid');
jl_qrk = document.querySelector('.jl_qrk');
lj_xg_tj = document.querySelector('.lj_xg_tj');
lj_xg_tj_ipt = lj_xg_tj.querySelectorAll('input');
dhr_shezhi_gn_cmm = document.querySelector('.dhr_shezhi_gn_cmm');
dhr_xg_tj = document.querySelector('.dhr_xg_tj');
dhr_srk = document.querySelector('.dhr_srk');
dhr_qrk = document.querySelector('.dhr_qrk');
lj_xg_tj_bdtj = document.querySelector('.lj_xg_tj_bdtj');
dhr_shezhi_gn_cmm.addEventListener('click', function(e) {
    e.stopPropagation();
    if (zhi_xian == '导航栏') {
        //功能指向
        gong_neng = '导航栏修改';
        qjgnzx();
        // 隐藏设置
        dhr_shezhi_gn = document.querySelector('.dhr_shezhi_gn');
        dhr_shezhi_gn.style.display = 'none';
        //显示修改框 
        dhr_xg_tj.style.display = 'block';
        dhr_srk.value = JSON.parse(localStorage.dhr_sz)[dhr_zhi_xian2];
        dhr_srk.select();
    } else if (zhi_xian == '链接') {
        //功能指向
        gong_neng = '链接修改';
        qjgnzx();
        // 隐藏设置
        dhr_shezhi_gn = document.querySelector('.dhr_shezhi_gn');
        dhr_shezhi_gn.style.display = 'none';
        //显示修改框内容
        var dx = JSON.parse(localStorage.dhr_ym_dx);
        lj_srk_tpid.value = dx['dhr_ym_dx' + dhr_zhi_xian]['dhr_ym_sz' + lj_zhi_xian][0];
        lj_srk_mc.value = dx['dhr_ym_dx' + dhr_zhi_xian]['dhr_ym_sz' + lj_zhi_xian][1];
        lj_srk_zsm.value = dx['dhr_ym_dx' + dhr_zhi_xian]['dhr_ym_sz' + lj_zhi_xian][2];
        lj_srk_wzid.value = dx['dhr_ym_dx' + dhr_zhi_xian]['dhr_ym_sz' + lj_zhi_xian][3];
        jl_qrk.innerHTML = '修改<span class="jl_qrk_fh">↵</span>';
        if (dx['dhr_ym_dx' + dhr_zhi_xian]['dhr_ym_sz' + lj_zhi_xian][4]) {
            lj_srk_xzid.value = dx['dhr_ym_dx' + dhr_zhi_xian]['dhr_ym_sz' + lj_zhi_xian][4];
        }
        //显示修改框
        lj_xg_tj.style.display = 'block';
        lj_srk_tpid.select();
        lj_xg_tj_ipt_xzs = 0;

        lj_xg_tj_bdtj.style.display = 'none';
    } else if (zhi_xian == '搜索中的链接') {
        //功能指向
        gong_neng = '链接修改';
        qjgnzx();
        // 隐藏设置
        dhr_shezhi_gn = document.querySelector('.dhr_shezhi_gn');
        dhr_shezhi_gn.style.display = 'none';
        //显示修改框内容
        var dx = JSON.parse(localStorage.dhr_ym_dx);
        lj_srk_tpid.value = dx['dhr_ym_dx' + dhr_zhi_xian]['dhr_ym_sz' + lj_zhi_xian][0];
        lj_srk_mc.value = dx['dhr_ym_dx' + dhr_zhi_xian]['dhr_ym_sz' + lj_zhi_xian][1];
        lj_srk_zsm.value = dx['dhr_ym_dx' + dhr_zhi_xian]['dhr_ym_sz' + lj_zhi_xian][2];
        lj_srk_wzid.value = dx['dhr_ym_dx' + dhr_zhi_xian]['dhr_ym_sz' + lj_zhi_xian][3];
        jl_qrk.innerHTML = '修改<span class="jl_qrk_fh">↵</span>';
        if (dx['dhr_ym_dx' + dhr_zhi_xian]['dhr_ym_sz' + lj_zhi_xian][4]) {
            lj_srk_xzid.value = dx['dhr_ym_dx' + dhr_zhi_xian]['dhr_ym_sz' + lj_zhi_xian][4];
        }
        //显示修改框
        lj_xg_tj.style.display = 'block';
        lj_srk_tpid.select();
        lj_xg_tj_ipt_xzs = 0;

        lj_xg_tj_bdtj.style.display = 'none';
    }
});

dhr_srk.addEventListener('click', function(e) {
    e.stopPropagation();
});

dhr_qrk.addEventListener('click', function(e) {
    e.stopPropagation();
    if (dhr_srk.value !== '') {
        if (gong_neng == '导航栏修改') {
            //更改内存
            dhr_srk = document.querySelector('.dhr_srk');
            var sz = JSON.parse(localStorage.dhr_sz);
            sz.splice(dhr_zhi_xian2, 1, dhr_srk.value);
            localStorage.dhr_sz = JSON.stringify(sz);
            //更改HTML
            lian_jie_l = document.querySelector('.lian_jie_l');
            lian_jie_r_l = lian_jie_l.children;
            var mz = lian_jie_r_l[dhr_zhi_xian2].innerHTML;
            lian_jie_r_l[dhr_zhi_xian2].innerHTML = dhr_srk.value;
            Sku_tctx('分页《' + mz + '》修改为《' + dhr_srk.value + '》');
            //隐藏
            ycgn_dhr_xgk();
        }
    } else {
        dhr_srk = document.querySelector('.dhr_srk');
        dhr_srk.style.borderColor = 'red';
    }
});

for (var i = 0; i < 5; i++) {
    lj_xg_tj_ipt[i].addEventListener('click', function(e) {
        e.stopPropagation();
    });
}

jl_qrk = document.querySelector('.jl_qrk');
jl_qrk.addEventListener('click', function(e) {
    e.stopPropagation();
    if (lj_srk_mc.value !== '' && lj_srk_wzid.value !== '' && gong_neng == '链接修改' && zhi_xian == '链接') {
        if (lj_srk_xzid.value !== '') {
            lj_sz_s = [];
            for (var i = 0; i < 5; i++) {
                lj_sz_s[i] = lj_xg_tj_ipt[i].value;
            }
        }
        if (lj_srk_xzid.value == '') {
            lj_sz_s = [];
            for (var i = 0; i < 4; i++) {
                lj_sz_s[i] = lj_xg_tj_ipt[i].value;
            }
        }
        if (gong_neng == '链接修改') {
            //修改内存
            var dx = JSON.parse(localStorage.dhr_ym_dx);
            dx['dhr_ym_dx' + dhr_zhi_xian]['dhr_ym_sz' + lj_zhi_xian] = lj_sz_s;
            localStorage.dhr_ym_dx = JSON.stringify(dx);
            //修改HTML
            var xgwz = lian_jie_r.children[dhr_zhi_xian].children[lj_zhi_xian];
            if (lj_sz_s.length == 5) {
                xgwz.innerHTML = '<div class="lj_tp" style="background-image: url(' + lj_sz_s[0] + ');"></div><div class="lj_xx"><div class="lj_xx_t">' + lj_sz_s[1] + '</div><div class="lj_xx_b" >' + lj_sz_s[2] + '</div></div><div class="lj_lj"><a class="lj_lj_t"target="_blank" href="' + lj_sz_s[3] + '">进入</a><a class="lj_lj_b"target="_blank" href="' + lj_sz_s[4] + '">下载</a></div>';
            } else if (lj_sz_s.length == 4) {
                xgwz.innerHTML = '<div class="lj_tp" style="background-image: url(' + lj_sz_s[0] + ');"></div><div class="lj_xx"><div class="lj_xx_t">' + lj_sz_s[1] + '</div><div class="lj_xx_b" >' + lj_sz_s[2] + '</div></div><div class="lj_lj"><a class="lj_lj_t"target="_blank" href="' + lj_sz_s[3] + '">进入</a></div>';
            }
            //隐藏
            var mz = lj_sz_s[1];
            ycgn_lj_xgk();

            Sku_tctx('链接修改成功《' + mz + '》');

            // 添加单独字体浮动
            var xgwz_lj_xx_b = xgwz.querySelector('.lj_xx_b');
            WGS_wenbengundon_dd(xgwz_lj_xx_b);

            // Sku-a转换href
            a_click_self();
            // 下载转换href
            a_click_self_xz();
        }
    } else if (lj_srk_mc.value !== '' && lj_srk_wzid.value !== '' && gong_neng == '链接修改' && zhi_xian == '搜索中的链接') {
        if (lj_srk_xzid.value !== '') {
            lj_sz_s = [];
            for (var i = 0; i < 5; i++) {
                lj_sz_s[i] = lj_xg_tj_ipt[i].value;
            }
        }
        if (lj_srk_xzid.value == '') {
            lj_sz_s = [];
            for (var i = 0; i < 4; i++) {
                lj_sz_s[i] = lj_xg_tj_ipt[i].value;
            }
        }
        if (gong_neng == '链接修改') {
            //修改内存
            var dx = JSON.parse(localStorage.dhr_ym_dx);
            dx['dhr_ym_dx' + dhr_zhi_xian]['dhr_ym_sz' + lj_zhi_xian] = lj_sz_s;
            localStorage.dhr_ym_dx = JSON.stringify(dx);
            //修改HTML
            var xgwz = lian_jie_r.children[dhr_zhi_xian].children[lj_zhi_xian];
            if (lj_sz_s.length == 5) {
                xgwz.innerHTML = '<div class="lj_tp" style="background-image: url(' + lj_sz_s[0] + ');"></div><div class="lj_xx"><div class="lj_xx_t">' + lj_sz_s[1] + '</div><div class="lj_xx_b" >' + lj_sz_s[2] + '</div></div><div class="lj_lj"><a class="lj_lj_t"target="_blank" href="' + lj_sz_s[3] + '">进入</a><a class="lj_lj_b"target="_blank" href="' + lj_sz_s[4] + '">下载</a></div>';
            } else if (lj_sz_s.length == 4) {
                xgwz.innerHTML = '<div class="lj_tp" style="background-image: url(' + lj_sz_s[0] + ');"></div><div class="lj_xx"><div class="lj_xx_t">' + lj_sz_s[1] + '</div><div class="lj_xx_b" >' + lj_sz_s[2] + '</div></div><div class="lj_lj"><a class="lj_lj_t"target="_blank" href="' + lj_sz_s[3] + '">进入</a></div>';
            }

            //修改HTML2(搜索中的html)
            var lian_jie_ssym = document.querySelector('.lian_jie_ssym');
            var xgwz = lian_jie_ssym.children[suo_shui_zhon_num];
            var xgwz_ly = xgwz.querySelector('.lj_laiyuan').innerText;
            if (lj_sz_s.length == 5) {
                xgwz.innerHTML = '<div class="lj_laiyuan">' + xgwz_ly + '</div><div class="lj_tp" style="background-image: url(' + lj_sz_s[0] + ');"></div><div class="lj_xx"><div class="lj_xx_t">' + lj_sz_s[1] + '</div><div class="lj_xx_b" >' + lj_sz_s[2] + '</div></div><div class="lj_lj"><a class="lj_lj_t"target="_blank" href="' + lj_sz_s[3] + '">进入</a><a class="lj_lj_b"target="_blank" href="' + lj_sz_s[4] + '">下载</a></div>';
            } else if (lj_sz_s.length == 4) {
                xgwz.innerHTML = '<div class="lj_laiyuan">' + xgwz_ly + '</div><div class="lj_tp" style="background-image: url(' + lj_sz_s[0] + ');"></div><div class="lj_xx"><div class="lj_xx_t">' + lj_sz_s[1] + '</div><div class="lj_xx_b" >' + lj_sz_s[2] + '</div></div><div class="lj_lj"><a class="lj_lj_t"target="_blank" href="' + lj_sz_s[3] + '">进入</a></div>';
            }

            var mz = lj_sz_s[1];
            // 隐藏
            ycgn_lj_xgk();

            Sku_tctx('链接修改成功《' + mz + '》');

            // 添加单独字体浮动
            var xgwz_lj_xx_b = xgwz.querySelector('.lj_xx_b');
            WGS_wenbengundon_dd(xgwz_lj_xx_b);

            // Sku-a转换href
            a_click_self();
            // 下载转换href
            a_click_self_xz();
        }
    } else if ((lj_srk_mc.value == '' || lj_srk_wzid.value == '') && gong_neng == '链接修改') {
        lj_srk_mc.style.borderColor = '';
        lj_srk_wzid.style.borderColor = '';
        if (lj_srk_mc.value == '') {
            lj_srk_mc.style.borderColor = 'red';
        }
        if (lj_srk_wzid.value == '') {
            lj_srk_wzid.style.borderColor = 'red';
        }

        setTimeout(function() {
            lj_srk_mc.style.borderColor = '';
            lj_srk_wzid.style.borderColor = '';
        }, 5000);
    }
});

//导航栏添加功能
dhr_shezhi_gn_tj = document.querySelector('.dhr_shezhi_gn_tj');
dhr_xg_tj = document.querySelector('.dhr_xg_tj');
dhr_srk = document.querySelector('.dhr_srk');
dhr_qrk = document.querySelector('.dhr_qrk');
dhr_shezhi_gn_tj.addEventListener('click', function(e) {
    e.stopPropagation();
    if (zhi_xian == '导航栏') {
        //功能指向
        gong_neng = '导航栏添加';
        qjgnzx();
        // 隐藏设
        dhr_shezhi_gn = document.querySelector('.dhr_shezhi_gn');
        dhr_shezhi_gn.style.display = 'none';
        //显示修改框 
        dhr_xg_tj.style.display = 'block';
        dhr_srk.select();
    } else if (zhi_xian == '链接') {
        //功能指向
        gong_neng = '链接添加';
        qjgnzx();
        // 隐藏设置
        dhr_shezhi_gn = document.querySelector('.dhr_shezhi_gn');
        dhr_shezhi_gn.style.display = 'none';
        //显示修改框
        lj_xg_tj.style.display = 'block';
        lj_srk_tpid.select();
        lj_xg_tj_ipt_xzs = 0;
        jl_qrk.innerHTML = '创建<span class="jl_qrk_fh">↵</span>';

        lj_xg_tj_bdtj.style.display = 'block';
        lj_xg_tj_bdtj.className = 'iconfont icon-fuzhi lj_xg_tj_bdtj';
        lj_xg_tj_bdtj_wz.innerHTML = '匹配添加已有链接';
    }
});

dhr_srk.addEventListener('click', function(e) {
    e.stopPropagation();
});

dhr_qrk.addEventListener('click', function(e) {
    e.stopPropagation();
    if (dhr_srk.value !== '') {
        if (gong_neng == '导航栏添加') {
            //更改内存
            lian_jie_l = document.querySelector('.lian_jie_l');
            lian_jie_l_s = lian_jie_l.children;
            dhr_srk = document.querySelector('.dhr_srk');
            var sz = JSON.parse(localStorage.dhr_sz);
            sz.splice(lian_jie_l_s.length, 0, dhr_srk.value);
            localStorage.dhr_sz = JSON.stringify(sz);
            var dx = JSON.parse(localStorage.dhr_ym_dx);
            dx['dhr_ym_dx' + lian_jie_l_s.length] = {};
            localStorage.dhr_ym_dx = JSON.stringify(dx);
            //更改HTML
            var mz = dhr_srk.value;
            lian_jie_l = document.querySelector('.lian_jie_l');
            var lian_jie_r_l = lian_jie_l.children;
            var dhr_div = document.createElement('div');
            dhr_div.innerHTML = dhr_srk.value;
            dhr_div.setAttribute('dhr_num', lian_jie_r_l.length);
            dhr_div.draggable = 'true';
            dhr_div.className = 'tuodon_dhr_div';
            lian_jie_l.appendChild(dhr_div);
            var dhr_ym_div = document.createElement('div');
            dhr_ym_div.className = 'dhr_ym_r_s';
            lian_jie_r.appendChild(dhr_ym_div);
            //添加add
            lian_jie_r = document.querySelector('.lian_jie_r');
            var lian_jie_r_s = lian_jie_r.children;
            lian_jie_l = document.querySelector('.lian_jie_l');
            var lian_jie_l_s = lian_jie_l.children;
            //点击事件
            lian_jie_l_s[lian_jie_l_s.length - 1].addEventListener('click', function() {
                //设置指向
                dhr_zhi_xian = this.getAttribute('dhr_num');
                qjgnzx();
                //变样式
                for (var i = 0; i < lian_jie_l_s.length; i++) {
                    lian_jie_l_s[i].style.color = '';
                    lian_jie_l_s[i].style.backgroundColor = '';
                    lian_jie_l_s[i].style.borderBottom = '';
                }
                this.style.color = RGB_zhq(localStorage.zi_ti_click_color);
                this.style.backgroundColor = RGB_zhq(localStorage.zi_ti_click_color, 0.15);
                this.style.borderBottom = '1px solid ' + RGB_zhq(localStorage.zi_ti_click_color);
                //切换页面
                var dhr_sz = JSON.parse(localStorage.dhr_sz);
                for (var i = 0; i < dhr_sz.length; i++) {
                    lian_jie_r_s[i].style.display = 'none';
                }
                lian_jie_r_s[this.getAttribute('dhr_num')].style.display = 'block';
            });
            //右击事件
            lian_jie_l_s[lian_jie_l_s.length - 1].addEventListener('contextmenu', function(e) {
                e.preventDefault();
                e.stopPropagation();
                // 设置指向
                dhr_zhi_xian2 = this.getAttribute('dhr_num');
                zhi_xian = '导航栏';
                qjgnzx();
                //显示设置
                dhr_shezhi_gn = document.querySelector('.dhr_shezhi_gn');
                dhr_shezhi_gn_sc = document.querySelector('.dhr_shezhi_gn_sc');
                dhr_shezhi_gn_cmm = document.querySelector('.dhr_shezhi_gn_cmm');
                dhr_shezhi_gn.style.display = 'block';
                dhr_shezhi_gn_sc.style.display = 'block';
                dhr_shezhi_gn_cmm.style.display = 'block';
                dhr_shezhi_gn.style.top = e.pageY + 'px';
                dhr_shezhi_gn.style.left = e.pageX + 'px';
                var dhr_shezhi_gn_tj = document.querySelector('.dhr_shezhi_gn_tj');
                dhr_shezhi_gn_tj.style.display = 'block';
                //隐藏修改框 
                ycgn_dhr_xgk();
            });
            //显示添加的页面
            //导航
            lian_jie_l = document.querySelector('.lian_jie_l');
            lian_jie_l_s = lian_jie_l.children;
            for (var i = 0; i < lian_jie_l_s.length; i++) {
                lian_jie_l_s[i].style.color = '';
                lian_jie_l_s[i].style.backgroundColor = '';
                lian_jie_l_s[i].style.borderBottom = '';
            }
            if (lian_jie_l_s.length !== 0) {
                lian_jie_l_s[lian_jie_l_s.length - 1].style.color = RGB_zhq(localStorage.zi_ti_click_color);
                lian_jie_l_s[lian_jie_l_s.length - 1].style.backgroundColor = RGB_zhq(localStorage.zi_ti_click_color, 0.15);
                lian_jie_l_s[lian_jie_l_s.length - 1].style.borderBottom = '1px solid ' + RGB_zhq(localStorage.zi_ti_click_color);
            }
            //导航栏页面
            lian_jie_r = document.querySelector('.lian_jie_r');
            lian_jie_r_s = lian_jie_r.children;
            for (var i = 0; i < lian_jie_r_s.length; i++) {
                lian_jie_r_s[i].style.display = 'none';
            }
            if (lian_jie_r_s.length !== 0) {
                lian_jie_r_s[lian_jie_l_s.length - 1].style.display = 'block';
            }
            //指向更改
            dhr_zhi_xian = lian_jie_r_s.length - 1;
            qjgnzx();
            //隐藏
            ycgn_dhr_xgk();
            // 添加拖动
            enableDragAndDrop2('tuodon_dhr_div');
            // 显示最下方
            lian_jie_l.scroll(0, lian_jie_l.scrollHeight);

            Sku_tctx('分页《' + mz + '》添加成功');
        }
    } else {
        dhr_srk = document.querySelector('.dhr_srk');
        dhr_srk.style.borderColor = 'red';
    }
});

jl_qrk = document.querySelector('.jl_qrk');
jl_qrk.addEventListener('click', function(e) {
    e.stopPropagation();
    var lj_xg_tj_bdtj_wz = document.querySelector('.lj_xg_tj_bdtj_wz');

    if (lj_srk_mc.value !== '' && lj_srk_wzid.value !== '' && gong_neng == '链接添加' && lj_xg_tj_bdtj_wz.innerHTML == '匹配添加已有链接') {
        if (lj_srk_xzid.value !== '') {
            lj_sz_s = [];
            for (var i = 0; i < 5; i++) {
                lj_sz_s[i] = lj_xg_tj_ipt[i].value;
            }
        }
        if (lj_srk_xzid.value == '') {
            lj_sz_s = [];
            for (var i = 0; i < 4; i++) {
                lj_sz_s[i] = lj_xg_tj_ipt[i].value;
            }
        }
        if (gong_neng == '链接添加') {
            //修改内存
            var dx = JSON.parse(localStorage.dhr_ym_dx);
            try {
                // 可能产生错误的代码
                var dx_sz_gs = document.querySelector('.lian_jie_r').children[dhr_zhi_xian].children;
            } catch (error) {
                // 这个块会在 try 中有错误抛出时执行
                Sku_tctx('添加错误 ! 请先创建左侧分页');
            }
            dx['dhr_ym_dx' + dhr_zhi_xian]['dhr_ym_sz' + dx_sz_gs.length] = lj_sz_s;
            localStorage.dhr_ym_dx = JSON.stringify(dx);
            //修改HTML
            var xgwz = lian_jie_r.children[dhr_zhi_xian];
            var divss = document.createElement('div');
            divss.className = 'lj_max';
            divss.draggable = "true";
            // 新链接添加右击事件
            divss.addEventListener('contextmenu', function(e) {
                e.preventDefault();
                e.stopPropagation();
                // 设置指向
                lj_zhi_xian = this.getAttribute('lj_num');
                zhi_xian = '链接';
                qjgnzx();
                //显示设置
                var dhr_shezhi_gn = document.querySelector('.dhr_shezhi_gn');
                var dhr_shezhi_gn_sc = document.querySelector('.dhr_shezhi_gn_sc');
                var dhr_shezhi_gn_cmm = document.querySelector('.dhr_shezhi_gn_cmm');
                dhr_shezhi_gn.style.display = 'block';
                dhr_shezhi_gn_sc.style.display = 'block';
                dhr_shezhi_gn_cmm.style.display = 'block';
                dhr_shezhi_gn.style.top = e.pageY + 'px';
                dhr_shezhi_gn.style.left = e.pageX + 'px';
                var dhr_shezhi_gn_tj = document.querySelector('.dhr_shezhi_gn_tj');
                dhr_shezhi_gn_tj.style.display = 'block';
                //隐藏修改框
                ycgn_dhr_xgk();
                ycgn_lj_xgk();
            });
            divss.setAttribute('lj_num', dx_sz_gs.length);
            if (lj_sz_s.length == 5) {
                divss.innerHTML = '<div class="lj_tp" style="background-image: url(' + lj_sz_s[0] + ');"></div><div class="lj_xx"><div class="lj_xx_t">' + lj_sz_s[1] + '</div><div class="lj_xx_b" >' + lj_sz_s[2] + '</div></div><div class="lj_lj"><a class="lj_lj_t"target="_blank" href="' + lj_sz_s[3] + '">进入</a><a class="lj_lj_b"target="_blank" href="' + lj_sz_s[4] + '">下载</a></div>';
            } else if (lj_sz_s.length == 4) {
                divss.innerHTML = '<div class="lj_tp" style="background-image: url(' + lj_sz_s[0] + ');"></div><div class="lj_xx"><div class="lj_xx_t">' + lj_sz_s[1] + '</div><div class="lj_xx_b" >' + lj_sz_s[2] + '</div></div><div class="lj_lj"><a class="lj_lj_t"target="_blank" href="' + lj_sz_s[3] + '">进入</a></div>';
            }
            xgwz.appendChild(divss);
            var mz = lj_sz_s[1];
            // 隐藏
            ycgn_lj_xgk();

            // 显示最下面
            var dhr_ym_r_s = document.querySelectorAll('.dhr_ym_r_s');
            lian_jie_r.scroll(0, dhr_ym_r_s[dhr_zhi_xian].scrollHeight);

            Sku_tctx('链接《' + mz + '》添加成功');

            // 换位功能
            enableDragAndDrop('lj_max');

            // 添加单独字体浮动
            var xgwz_lj_xx_b_2 = divss.querySelector('.lj_xx_b');
            WGS_wenbengundon_dd(xgwz_lj_xx_b_2);

            // Sku-a转换href
            a_click_self();
            // 下载转换href
            a_click_self_xz();

        }
    } else if ((lj_srk_tpid.value !== '' || lj_srk_mc.value !== '' || lj_srk_zsm.value !== '' || lj_srk_wzid.value !== '' || lj_srk_xzid.value !== '') && gong_neng == '链接添加' && lj_xg_tj_bdtj_wz.innerHTML !== '匹配添加已有链接') {
        var lj_sz_s2 = [];
        for (var i = 0; i < 5; i++) {
            lj_sz_s2[i] = lj_xg_tj_ipt[i].value;
        }

        var dx = JSON.parse(localStorage.dhr_ym_dx);
        var dx_l = Object.keys(dx);

        var zg_lj = 0;
        for (var o = 0; o < dx_l.length; o++) {
            // 本页跳过
            if (o == dhr_zhi_xian) { continue; }

            var dx_l_l = Object.keys(dx[dx_l[o]]);
            for (var p = 0; p < dx_l_l.length; p++) {
                var dx_l_l_l = dx[dx_l[o]][dx_l_l[p]];
                // 是否匹配
                var ji_shu = 0;
                for (var i = 0; i < lj_sz_s2.length; i++) {
                    if (lj_sz_s2[i] !== '' && dx_l_l_l[i]) {
                        if (containsAllChars(lj_sz_s2[i], dx_l_l_l[i])) {
                            ji_shu++;
                        }
                    } else if (lj_sz_s2[i] == '') {
                        ji_shu++;
                    }
                }

                // 满足添加
                if (ji_shu == 5) {
                    // 是否重复
                    var lj_cf = 0;
                    var dx_l_by = dx[dx_l[dhr_zhi_xian]];
                    var dx_l_l_by = Object.keys(dx_l_by);
                    for (var i = 0; i < dx_l_l_by.length; i++) {
                        if (JSON.stringify(dx_l_by[dx_l_l_by[i]]) == JSON.stringify(dx_l_l_l)) {
                            lj_cf++;
                        }
                    }

                    if (lj_cf == 0) { //不重复的添加
                        // 隐藏
                        ycgn_lj_xgk();
                        lj_xg_tj_bdtj_wz.innerHTML = '匹配添加已有链接';

                        lj_srk_tpid.value = dx_l_l_l[0];
                        lj_srk_mc.value = dx_l_l_l[1];
                        lj_srk_zsm.value = dx_l_l_l[2];
                        lj_srk_wzid.value = dx_l_l_l[3];
                        dx_l_l_l[4] ? lj_srk_xzid.value = dx_l_l_l[4] : lj_srk_xzid.value = '';

                        jl_qrk.click();
                        zg_lj++;
                    }
                }
            }
        }

        if (zg_lj == 0) {
            Sku_tctx('未找到匹配的链接! 或 重复链接!');
        }

    } else if ((lj_srk_mc.value == '' || lj_srk_wzid.value == '') && gong_neng == '链接添加' && lj_xg_tj_bdtj_wz.innerHTML == '匹配添加已有链接') {
        lj_srk_mc.style.borderColor = '';
        lj_srk_wzid.style.borderColor = '';
        if (lj_srk_mc.value == '') {
            lj_srk_mc.style.borderColor = 'red';
        }
        if (lj_srk_wzid.value == '') {
            lj_srk_wzid.style.borderColor = 'red';
        }

        setTimeout(function() {
            lj_srk_mc.style.borderColor = '';
            lj_srk_wzid.style.borderColor = '';
        }, 5000);

    } else if (lj_srk_tpid.value == '' && lj_srk_mc.value == '' && lj_srk_zsm.value == '' && lj_srk_wzid.value == '' && lj_srk_xzid.value == '' && gong_neng == '链接添加' && lj_xg_tj_bdtj_wz.innerHTML !== '匹配添加已有链接') {
        Sku_tctx('最少填写一个匹配项 !');
    }
});

//文本框选中事件
lj_srk_tpid = document.querySelector('.lj_srk_tpid');
lj_srk_mc = document.querySelector('.lj_srk_mc');
lj_srk_zsm = document.querySelector('.lj_srk_zsm');
lj_srk_wzid = document.querySelector('.lj_srk_wzid');
lj_srk_xzid = document.querySelector('.lj_srk_xzid');
lj_xg_tj = document.querySelector('.lj_xg_tj');
lj_srk_tpid.addEventListener('focus', function() {
    lj_xg_tj_ipt_xzs = 0;
});
lj_srk_mc.addEventListener('focus', function(e) {
    lj_xg_tj_ipt_xzs = 1;
});
lj_srk_zsm.addEventListener('focus', function(e) {
    lj_xg_tj_ipt_xzs = 2;
});
lj_srk_wzid.addEventListener('focus', function(e) {
    lj_xg_tj_ipt_xzs = 3;
});
lj_srk_xzid.addEventListener('focus', function(e) {
    lj_xg_tj_ipt_xzs = 4;
});


//封装隐藏功能

//隐藏导航栏修改框W
function ycgn_dhr_xgk() {
    dhr_srk = document.querySelector('.dhr_srk');
    dhr_xg_tj = document.querySelector('.dhr_xg_tj');
    dhr_xg_tj.style.display = 'none';
    dhr_srk.value = '';
    dhr_srk.style.borderColor = '';
}
//隐藏链接修改框
function ycgn_lj_xgk() {
    lj_srk_tpid = document.querySelector('.lj_srk_tpid');
    lj_srk_mc = document.querySelector('.lj_srk_mc');
    lj_srk_zsm = document.querySelector('.lj_srk_zsm');
    lj_srk_wzid = document.querySelector('.lj_srk_wzid');
    lj_srk_xzid = document.querySelector('.lj_srk_xzid');
    lj_xg_tj = document.querySelector('.lj_xg_tj');
    lj_xg_tj.style.display = 'none';
    lj_srk_tpid.value = '';
    lj_srk_mc.value = '';
    lj_srk_zsm.value = '';
    lj_srk_wzid.value = '';
    lj_srk_xzid.value = '';
    lj_srk_mc.style.borderColor = '';
    lj_srk_wzid.style.borderColor = '';
}


//搜索链接
lian_jie_l2 = document.querySelector('.lian_jie_l2');
lian_jie_ssym = document.querySelector('.lian_jie_ssym');
lian_jie_r2 = document.querySelector('.lian_jie_r2');
lian_jie_ssk = document.querySelector('.lian_jie_ssk');
i_lian_jie_ss_tb = document.querySelector('.i_lian_jie_ss_tb');
i_lian_jie_ss_tb.addEventListener('click', function() {
    if (lian_jie_ssk.value !== '') {
        lian_jie_r.style.display = 'none';
        lian_jie_l.style.display = 'none';
        lian_jie_r2.style.display = 'block';
        lian_jie_l2.style.display = 'block';
        lian_jie_ssym.innerHTML = '';
        var dhr_ym_dx = JSON.parse(localStorage.dhr_ym_dx);
        // 集合所有对象
        var lian_jie_dxs = {};
        for (var i = 0; i < Object.keys(dhr_ym_dx).length; i++) {
            var dhr_ym_dx_s = dhr_ym_dx['dhr_ym_dx' + i]
            for (var o = 0; o < Object.keys(dhr_ym_dx_s).length; o++) {
                lian_jie_dxs['lian_jie_dxs' + Object.keys(lian_jie_dxs).length] = dhr_ym_dx_s['dhr_ym_sz' + o];
            }
        }
        // 所有对象合并成一个字符串
        var lian_jie_szs = [];
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
                    lian_jie_szs[lian_jie_szs.length] = dhr_ym_dx_s_s;
                } else {
                    var dhr_ym_dx_s_s = [];
                    dhr_ym_dx_s_s[0] = dhr_ym_dx_s['dhr_ym_sz' + o][0];
                    dhr_ym_dx_s_s[1] = dhr_ym_dx_s['dhr_ym_sz' + o][1];
                    dhr_ym_dx_s_s[2] = dhr_ym_dx_s['dhr_ym_sz' + o][2];
                    dhr_ym_dx_s_s[3] = dhr_ym_dx_s['dhr_ym_sz' + o][3];
                    lian_jie_szs[lian_jie_szs.length] = dhr_ym_dx_s_s;
                }
            }
        }
        //获取每个导航栏中的个数
        var lian_jie_dxs_s_gs = [];
        for (var i = 0; i < Object.keys(dhr_ym_dx).length; i++) {
            lian_jie_dxs_s_gs.push(Object.keys(dhr_ym_dx['dhr_ym_dx' + i]).length);
        }
        // 匹配
        var sspp_gs = -1;
        for (var i = 0; i < lian_jie_szs.length; i++) {
            for (var u = 0; u < lian_jie_szs[i].length; u++) {
                if (containsAllChars(lian_jie_ssk.value, lian_jie_szs[i][u])) {
                    sspp_gs++;

                    var lian_jie_rs_div = document.createElement('div');
                    lian_jie_rs_div.className = 'lj_max';
                    lian_jie_rs_div.draggable = "true";

                    // 来源
                    var i2 = 0;
                    var i3;
                    for (var ii = 0; ii < lian_jie_dxs_s_gs.length; ii++) {
                        var num_ss = -1;
                        for (var tt = 0; tt <= ii; tt++) {
                            num_ss += lian_jie_dxs_s_gs[tt];
                        }
                        if (num_ss >= i && ii >= 1) {
                            i2 = ii;
                            i3 = lian_jie_dxs_s_gs[tt - 1] + (i - num_ss);
                            break;
                        } else if (num_ss >= i && ii == 0) {
                            i2 = ii;
                            i3 = lian_jie_dxs_s_gs[tt - 1] + (i - num_ss);
                            break;
                        }
                    }
                    var dhr_sz = JSON.parse(localStorage.dhr_sz);

                    if (lian_jie_dxs['lian_jie_dxs' + i][4]) {
                        lian_jie_rs_div.innerHTML = '<div class="lj_laiyuan">来源：' + dhr_sz[i2] + ' [' + i3 + ']' + '</div><div class="lj_tp" style="background-image: url(' + lian_jie_dxs['lian_jie_dxs' + i][0] + ');"></div><div class="lj_xx"><div class="lj_xx_t">' + lian_jie_dxs['lian_jie_dxs' + i][1] + '</div><div class="lj_xx_b_2">' + lian_jie_dxs['lian_jie_dxs' + i][2] + '</div></div><div class="lj_lj"><a class="lj_lj_t" target="_blank" href="' + lian_jie_dxs['lian_jie_dxs' + i][3] + '">进入</a><a class="lj_lj_b" target="_blank" href="' + lian_jie_dxs['lian_jie_dxs' + i][4] + '">下载</a></div>';
                    } else {
                        lian_jie_rs_div.innerHTML = '<div class="lj_laiyuan">来源：' + dhr_sz[i2] + ' [' + i3 + ']' + '</div><div class="lj_tp" style="background-image: url(' + lian_jie_dxs['lian_jie_dxs' + i][0] + ');"></div><div class="lj_xx"><div class="lj_xx_t">' + lian_jie_dxs['lian_jie_dxs' + i][1] + '</div><div class="lj_xx_b_2">' + lian_jie_dxs['lian_jie_dxs' + i][2] + '</div></div><div class="lj_lj"><a class="lj_lj_t" target="_blank" href="' + lian_jie_dxs['lian_jie_dxs' + i][3] + '">进入</a></div>';
                    }

                    // 添加右击按钮修改链接功能
                    lian_jie_rs_div.setAttribute('zong_lj_num', i);
                    lian_jie_rs_div.setAttribute('lj_num', sspp_gs);

                    lian_jie_rs_div.addEventListener('contextmenu', function(e) {
                        e.preventDefault();
                        e.stopPropagation();
                        // 设置指向
                        var i2 = 0;
                        var zong_num_ph = this.getAttribute('zong_lj_num');
                        suo_shui_zhon_num2 = this.getAttribute('zong_lj_num');
                        suo_shui_zhon_num = this.getAttribute('lj_num');

                        var dhr_ym_dx = JSON.parse(localStorage.dhr_ym_dx);
                        //获取每个导航栏中的个数
                        var lian_jie_dxs_s_gs = [];
                        for (var i = 0; i < Object.keys(dhr_ym_dx).length; i++) {
                            lian_jie_dxs_s_gs.push(Object.keys(dhr_ym_dx['dhr_ym_dx' + i]).length);
                        }
                        for (var ii = 0; ii < lian_jie_dxs_s_gs.length; ii++) {
                            var num_ss = -1;
                            for (var tt = 0; tt <= ii; tt++) {
                                num_ss += lian_jie_dxs_s_gs[tt];
                            }
                            if (num_ss >= zong_num_ph && ii >= 1) {
                                for (var pp = 0; pp < ii; pp++) {
                                    zong_num_ph -= lian_jie_dxs_s_gs[pp];
                                }
                                i2 = ii;
                                break;
                            } else if (num_ss >= zong_num_ph && ii == 0) {
                                i2 = ii;
                                break;
                            }
                        }

                        lj_zhi_xian = zong_num_ph;
                        dhr_zhi_xian = i2;
                        zhi_xian = '搜索中的链接';
                        qjgnzx();

                        //显示设置
                        var dhr_shezhi_gn = document.querySelector('.dhr_shezhi_gn');
                        var dhr_shezhi_gn_sc = document.querySelector('.dhr_shezhi_gn_sc');
                        var dhr_shezhi_gn_cmm = document.querySelector('.dhr_shezhi_gn_cmm');
                        var dhr_shezhi_gn_tj = document.querySelector('.dhr_shezhi_gn_tj');
                        dhr_shezhi_gn.style.display = 'block';
                        dhr_shezhi_gn_sc.style.display = 'block';
                        dhr_shezhi_gn_cmm.style.display = 'block';
                        dhr_shezhi_gn_tj.style.display = 'none';
                        dhr_shezhi_gn.style.top = e.pageY + 'px';
                        dhr_shezhi_gn.style.left = e.pageX + 'px';
                        //隐藏修改框
                        ycgn_dhr_xgk();
                        ycgn_lj_xgk();
                    });

                    lian_jie_ssym.appendChild(lian_jie_rs_div);

                    break;
                }
            }
        }

        lian_jie_r2.scroll(0, 0);
        WGS_wenbengundon9('.lj_xx_b_2');

        // Sku-a转换href
        a_click_self();
        // 下载转换href
        a_click_self_xz();

    } else {
        lian_jie_r.style.display = 'block';
        lian_jie_r2.style.display = 'none';
        lian_jie_l.style.display = 'block';
        lian_jie_l2.style.display = 'none';
    }
});

//是否选中
var lian_jie_ssk_xz = 0;
lian_jie_ssk.addEventListener('focus', function() {
    lian_jie_ssk_xz = 1;
});
lian_jie_ssk.addEventListener('blur', function() {
    lian_jie_ssk_xz = 0;
});

lian_jie_ssk.addEventListener('input', function(e) {
    if (lian_jie_ssk_xz == 1) {
        i_lian_jie_ss_tb.click();
    }
});

// 2023后加
lj_xg_tj.addEventListener('click', function(e) {
    e.stopPropagation();
});




// 注册表
var lj_zcb_ym = document.querySelector('.lj_zcb_ym');
var lj_zcb_i = document.querySelector('.lj_zcb_i');
var lj_zcb_qr = document.querySelector('.lj_zcb_qr');
var lj_zcb_dizhi = document.querySelector('.lj_zcb_dizhi');
var lj_zcb_name = document.querySelector('.lj_zcb_name');

function lj_zcb_ym_sc() {
    lj_zcb_ym.style.display = 'none';
    lj_zcb_dizhi.value = '';
    lj_zcb_name.value = '';
};
lj_zcb_ym.addEventListener('click', function(e) {
    e.stopPropagation();
});
lj_zcb_i.addEventListener('click', function(e) {
    e.stopPropagation();
    ycgn_dhr_xgk();
    ycgn_lj_xgk();
    lj_zcb_ym.style.display = 'block';
    lj_zcb_name.focus();
});

function escapeBackslash(path) {
    var path2 = path.replace(/\\\\/g, '\\');
    var path3 = path2.replace(/\//g, '\\');
    var path4 = path3.replace(/\/\//g, '\\');
    var path5 = path4.replace(/\"/g, '');
    var path6 = path5.replace(/\'/g, '');
    return path6.replace(/\\/g, '\\\\');
}

function isAlphaDash(str) {
    const pattern = /^[a-zA-Z-]+$/;
    return pattern.test(str);
}

lj_zcb_qr.addEventListener('click', function(e) {

    if (isAlphaDash(lj_zcb_name.value) && lj_zcb_name.value != '' && lj_zcb_dizhi.value != '' && (lj_zcb_dizhi.value.substr(lj_zcb_dizhi.value.length - 4, lj_zcb_dizhi.value.length) == 'exe"' || lj_zcb_dizhi.value.substr(lj_zcb_dizhi.value.length - 4, lj_zcb_dizhi.value.length) == 'exe\'' || lj_zcb_dizhi.value.substr(lj_zcb_dizhi.value.length - 3, lj_zcb_dizhi.value.length) == 'exe')) {
        // 保存历史
        var sku_zcb = JSON.parse(localStorage.sku_zcb);
        sku_zcb[0].unshift('Sku-' + lj_zcb_name.value);
        console.log(escapeBackslash(lj_zcb_dizhi.value));
        sku_zcb[1].unshift('' + escapeBackslash(lj_zcb_dizhi.value));
        localStorage.sku_zcb = JSON.stringify(sku_zcb);

        // 创建TXT文本 WGS_txt_wenbenchuanjian('文件名','文本内容');
        console.log('Windows Registry Editor Version 5.00\n[HKEY_CLASSES_ROOT\\' + 'Sku-' + lj_zcb_name.value + ']\n@="URL:' + 'Sku-' + lj_zcb_name.value + ' Protocol Handler"\n"URL Protocol"=""\n[HKEY_CLASSES_ROOT\\' + 'Sku-' + lj_zcb_name.value + '\\DefaultIcon]\n@="' + escapeBackslash(lj_zcb_dizhi.value) + '"\n[HKEY_CLASSES_ROOT\\' + 'Sku-' + lj_zcb_name.value + '\\shell]\n[HKEY_CLASSES_ROOT\\' + 'Sku-' + lj_zcb_name.value + '\\shell\\open]\n[HKEY_CLASSES_ROOT\\' + 'Sku-' + lj_zcb_name.value + '\\shell\\open\\command]\n@="\\"' + escapeBackslash(lj_zcb_dizhi.value) + '\\" \\"%1\\""');
        WGS_txt_wenbenchuanjian('Sku-' + lj_zcb_name.value + '注册表.reg', 'Windows Registry Editor Version 5.00\n[HKEY_CLASSES_ROOT\\' + 'Sku-' + lj_zcb_name.value + ']\n@="URL:' + 'Sku-' + lj_zcb_name.value + ' Protocol Handler"\n"URL Protocol"=""\n[HKEY_CLASSES_ROOT\\' + 'Sku-' + lj_zcb_name.value + '\\DefaultIcon]\n@="' + escapeBackslash(lj_zcb_dizhi.value) + '"\n[HKEY_CLASSES_ROOT\\' + 'Sku-' + lj_zcb_name.value + '\\shell]\n[HKEY_CLASSES_ROOT\\' + 'Sku-' + lj_zcb_name.value + '\\shell\\open]\n[HKEY_CLASSES_ROOT\\' + 'Sku-' + lj_zcb_name.value + '\\shell\\open\\command]\n@="\\"' + escapeBackslash(lj_zcb_dizhi.value) + '\\" \\"%1\\""');

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

    } else if (isAlphaDash(lj_zcb_name.value) == false) {
        Sku_tctx('创建失败! 命名格式错误 或 其他原因');
    } else {
        Sku_tctx('创建失败! 路径格式错误 或 其他原因');
    }
});

var ls_zcb_kjj = document.querySelector('.ls_zcb_kjj');
ls_zcb_kjj.addEventListener('click', function(e) {
    document.querySelector('.top_dhl').querySelectorAll('div')[3].click();
    document.querySelector('.shezhi_lszcb').click();
});




// 换位封装
var huanwei_class_name;

function enableDragAndDrop(className) {
    var draggies = document.querySelectorAll('.' + className);
    huanwei_class_name = className;

    // 移除已存在的拖拽相关事件监听器
    draggies.forEach(function(draggie) {
        draggie.removeEventListener('dragstart', handleDragStart);
        draggie.removeEventListener('dragover', handleDragOver);
        draggie.removeEventListener('drop', handleDrop);
        draggie.removeEventListener('dragend', handleDragEnd);
    });

    // 重新添加事件监听器
    draggies.forEach(function(draggie) {
        draggie.addEventListener('dragstart', handleDragStart, false);
        draggie.addEventListener('dragover', handleDragOver, false);
        draggie.addEventListener('drop', handleDrop, false);
        draggie.addEventListener('dragend', handleDragEnd, false);

    });

}

var draggedItem = null;
var draggedItem_lg = null;
var sfwuxiao = 0;

function handleDragStart(e) {
    draggedItem = this;
    draggedItem_lg = this;
    e.dataTransfer.effectAllowed = 'move';

    su_biao.style.display = 'none';

    var parent = draggedItem.parentNode;
    dragIndex2 = Array.prototype.indexOf.call(parent.children, draggedItem);
    dropIndex2 = Array.prototype.indexOf.call(parent.children, this);

    sfwuxiao = 0;

}

function handleDragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';

    if (draggedItem !== this && draggedItem !== null) {
        draggedItem.style.opacity = '';
        // 交换两个元素的位置
        var parent = draggedItem.parentNode;
        var dragIndex = Array.prototype.indexOf.call(parent.children, draggedItem);
        var dropIndex = Array.prototype.indexOf.call(parent.children, this);
        dropIndex2 = Array.prototype.indexOf.call(parent.children, this);
        if (dragIndex < dropIndex) {
            var qb = parent.querySelectorAll('.' + huanwei_class_name);
            parent.insertBefore(qb[dragIndex], qb[dropIndex + 1]);
        } else {
            var qb = parent.querySelectorAll('.' + huanwei_class_name);
            parent.insertBefore(qb[dragIndex], qb[dropIndex]);
        }
    }
}

function handleDrop(e) {
    e.stopPropagation();

    su_biao.style.transform = 'scale(1)';

    sfwuxiao = 1;
}

function handleDragEnd(e) {
    draggedItem.style.opacity = '';
    su_biao.style.transform = 'scale(1)';
    if (sfwuxiao == 0) {
        var parent = draggedItem.parentNode;
        var dragIndex = dropIndex2;
        var dropIndex = dragIndex2;
        if (dragIndex < dropIndex) {
            var qb = parent.querySelectorAll('.' + huanwei_class_name);
            parent.insertBefore(qb[dragIndex], qb[dropIndex + 1]);
        } else {
            var qb = parent.querySelectorAll('.' + huanwei_class_name);
            parent.insertBefore(qb[dragIndex], qb[dropIndex]);
        }
    } else if (sfwuxiao == 1) {
        // 最后交换两个元素的位置
        var parent = draggedItem.parentNode;
        dropIndex2 = Array.prototype.indexOf.call(parent.children, this);
        console.log(dragIndex2, dropIndex2);
        // 内存替换
        var dhr_ym_dx = JSON.parse(localStorage.dhr_ym_dx);
        var dx_z = dhr_ym_dx['dhr_ym_dx' + dhr_zhi_xian];

        if (dragIndex2 !== dropIndex2) {
            if (dragIndex2 < dropIndex2) {
                var key = Object.keys(dx_z);
                var dx_z2 = JSON.parse(JSON.stringify(dx_z));
                for (var i = dragIndex2; i <= dropIndex2; i++) {
                    if (i !== dropIndex2) {
                        dx_z[key[i]] = dx_z2[key[i + 1]];
                    } else {
                        dx_z[key[dropIndex2]] = dx_z2[key[dragIndex2]];
                    }
                }
            } else {
                var key = Object.keys(dx_z);
                var dx_z2 = JSON.parse(JSON.stringify(dx_z));
                for (var i = dragIndex2; i >= dropIndex2; i--) {
                    if (i !== dropIndex2) {
                        dx_z[key[i]] = dx_z2[key[i - 1]];
                    } else {
                        dx_z[key[dropIndex2]] = dx_z2[key[dragIndex2]];
                    }
                }
            }
        }

        // 赋值
        dhr_ym_dx['dhr_ym_dx' + dhr_zhi_xian] = dx_z;
        localStorage.dhr_ym_dx = JSON.stringify(dhr_ym_dx);

        //链接排序
        lian_jie_r = document.querySelector('.lian_jie_r');
        lian_jie_r_s_s = lian_jie_r.children[dhr_zhi_xian].children;
        for (var i = 0; i < lian_jie_r_s_s.length; i++) {
            //指定顺序值
            lian_jie_r_s_s[i].setAttribute('lj_num', i)
        }
    }


    draggedItem = null;

    // 获取所有自定义属性dhr_num不等于现在的
    var elements = document.querySelectorAll('[class*="dhr_num"], [dhr_num]:not([dhr_num="' + dhr_zhi_xian + '"])');
    // 遍历所有元素并执行操作
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = '';
    }

}
enableDragAndDrop('lj_max');

// 换位封装
var huanwei_class_name2;

function enableDragAndDrop2(className2) {
    var draggies = document.querySelectorAll('.' + className2);
    huanwei_class_name2 = className2;

    // 移除已存在的拖拽相关事件监听器
    draggies.forEach(function(draggie) {
        draggie.removeEventListener('dragstart', handleDragStart2);
        draggie.removeEventListener('dragover', handleDragOver2);
        draggie.removeEventListener('drop', handleDrop2);
        draggie.removeEventListener('dragend', handleDragEnd2);
    });

    // 重新添加事件监听器
    draggies.forEach(function(draggie) {
        draggie.addEventListener('dragstart', handleDragStart2, false);
        draggie.addEventListener('dragover', handleDragOver2, false);
        draggie.addEventListener('drop', handleDrop2, false);
        draggie.addEventListener('dragend', handleDragEnd2, false);

    });

}

var draggedItem2 = null;
var sfwuxiao2 = 0;

function handleDragStart2(e) {
    draggedItem_lg = null;
    draggedItem2 = this;
    e.dataTransfer.effectAllowed = 'move';

    su_biao.style.display = 'none';


    var parent2 = draggedItem2.parentNode;
    dragIndex22 = Array.prototype.indexOf.call(parent2.children, draggedItem2);
    dropIndex22 = Array.prototype.indexOf.call(parent2.children, this);

    sfwuxiao2 = 0;
}

function handleDragOver2(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';

    if (draggedItem2 !== this && draggedItem2 !== null) {
        // 交换两个元素的位置
        var parent2 = draggedItem2.parentNode;
        var dragIndex1 = Array.prototype.indexOf.call(parent2.children, draggedItem2);
        var dropIndex1 = Array.prototype.indexOf.call(parent2.children, this);
        dropIndex22 = Array.prototype.indexOf.call(parent2.children, this);
        if (dragIndex1 < dropIndex1) {
            var qb = parent2.querySelectorAll('.' + huanwei_class_name2);
            parent2.insertBefore(qb[dragIndex1], qb[dropIndex1 + 1]);
        } else {
            var qb = parent2.querySelectorAll('.' + huanwei_class_name2);
            parent2.insertBefore(qb[dragIndex1], qb[dropIndex1]);
        }
    }

    // 链接到别的页
    // 获取所有自定义属性dhr_num不等于现在的
    var elements = document.querySelectorAll('[class*="dhr_num"], [dhr_num]:not([dhr_num="' + dhr_zhi_xian + '"])');
    if (draggedItem_lg !== null && draggedItem_lg !== this) {
        draggedItem_lg.style.opacity = '0.3';

        // 遍历所有元素并执行操作
        for (var i = 0; i < elements.length; i++) {
            elements[i].style.backgroundColor = '';
        }

        this.style.backgroundColor = RGB_zhq(localStorage.zi_ti_click_color, 0.15);
    }
}

function handleDrop2(e) {
    e.stopPropagation();
    su_biao.style.transform = 'scale(1)';

    sfwuxiao2 = 1;

    // 链接到别的页
    if (draggedItem_lg !== null && draggedItem_lg !== this) {
        if (this.getAttribute('dhr_num') - 0 !== dhr_zhi_xian - 0) {
            sfwuxiao = 3;

            // 删除html
            lian_jie_r = document.querySelector('.lian_jie_r');
            lian_jie_r_s_s = lian_jie_r.children[dhr_zhi_xian];
            lian_jie_r_s_s.removeChild(draggedItem_lg);

            //链接排序
            lian_jie_r = document.querySelector('.lian_jie_r');
            lian_jie_r_s_s = lian_jie_r.children[dhr_zhi_xian].children;
            for (var i = 0; i < lian_jie_r_s_s.length; i++) {
                //指定顺序值
                lian_jie_r_s_s[i].setAttribute('lj_num', i);
            }

            // 添加内存
            var dx = JSON.parse(localStorage.dhr_ym_dx);
            var lj_sz_s = dx['dhr_ym_dx' + dhr_zhi_xian]['dhr_ym_sz' + dragIndex2];
            var dx_sz_gs = document.querySelector('.lian_jie_r').children[this.getAttribute('dhr_num')].children;
            dx['dhr_ym_dx' + this.getAttribute('dhr_num')]['dhr_ym_sz' + dx_sz_gs.length] = lj_sz_s;
            localStorage.dhr_ym_dx = JSON.stringify(dx);

            // 添加html
            var xgwz = lian_jie_r.children[this.getAttribute('dhr_num')];
            var divss = document.createElement('div');
            divss.className = 'lj_max';
            divss.draggable = "true";
            // 新链接添加右击事件
            divss.addEventListener('contextmenu', function(e) {
                e.preventDefault();
                e.stopPropagation();
                // 设置指向
                lj_zhi_xian = this.getAttribute('lj_num');
                zhi_xian = '链接';
                qjgnzx();
                //显示设置
                var dhr_shezhi_gn = document.querySelector('.dhr_shezhi_gn');
                var dhr_shezhi_gn_sc = document.querySelector('.dhr_shezhi_gn_sc');
                var dhr_shezhi_gn_cmm = document.querySelector('.dhr_shezhi_gn_cmm');
                dhr_shezhi_gn.style.display = 'block';
                dhr_shezhi_gn_sc.style.display = 'block';
                dhr_shezhi_gn_cmm.style.display = 'block';
                dhr_shezhi_gn.style.top = e.pageY + 'px';
                dhr_shezhi_gn.style.left = e.pageX + 'px';
                var dhr_shezhi_gn_tj = document.querySelector('.dhr_shezhi_gn_tj');
                dhr_shezhi_gn_tj.style.display = 'block';
                //隐藏修改框
                ycgn_dhr_xgk();
                ycgn_lj_xgk();
            });
            divss.setAttribute('lj_num', dx_sz_gs.length);
            if (lj_sz_s.length == 5) {
                divss.innerHTML = '<div class="lj_tp" style="background-image: url(' + lj_sz_s[0] + ');"></div><div class="lj_xx"><div class="lj_xx_t">' + lj_sz_s[1] + '</div><div class="lj_xx_b" >' + lj_sz_s[2] + '</div></div><div class="lj_lj"><a class="lj_lj_t"target="_blank" href="' + lj_sz_s[3] + '">进入</a><a class="lj_lj_b"target="_blank" href="' + lj_sz_s[4] + '">下载</a></div>';
            } else if (lj_sz_s.length == 4) {
                divss.innerHTML = '<div class="lj_tp" style="background-image: url(' + lj_sz_s[0] + ');"></div><div class="lj_xx"><div class="lj_xx_t">' + lj_sz_s[1] + '</div><div class="lj_xx_b" >' + lj_sz_s[2] + '</div></div><div class="lj_lj"><a class="lj_lj_t"target="_blank" href="' + lj_sz_s[3] + '">进入</a></div>';
            }
            xgwz.appendChild(divss);

            // 换位功能
            enableDragAndDrop('lj_max');

            // 添加单独字体浮动
            var xgwz_lj_xx_b_2 = divss.querySelector('.lj_xx_b');
            WGS_wenbengundon_dd(xgwz_lj_xx_b_2);

            // Sku-a转换href
            a_click_self();
            // 下载转换href
            a_click_self_xz();

            // 删除内存
            var dx1 = JSON.parse(localStorage.dhr_ym_dx);
            delete dx1['dhr_ym_dx' + dhr_zhi_xian]['dhr_ym_sz' + dragIndex2];
            var dx2 = {};
            for (var i = 0; i < Object.keys(dx1).length; i++) {
                dx2['dhr_ym_dx' + i] = new Object();
            }
            for (var j = 0; j < Object.keys(dx1).length; j++) {
                for (var i = 0; i < Object.keys(dx1['dhr_ym_dx' + j]).length; i++) {
                    dx2['dhr_ym_dx' + j]['dhr_ym_sz' + i] = dx1['dhr_ym_dx' + j][Object.keys(dx1['dhr_ym_dx' + j])[i]];
                }
            }
            localStorage.dhr_ym_dx = JSON.stringify(dx2);
        } else {
            sfwuxiao = 1;
        }
    }
}

function handleDragEnd2(e) {
    su_biao.style.transform = 'scale(1)';

    if (sfwuxiao2 == 0) {
        var parent2 = draggedItem2.parentNode;
        var dragIndex1 = dropIndex22;
        var dropIndex1 = dragIndex22;
        if (dragIndex1 < dropIndex1) {
            var qb = parent2.querySelectorAll('.' + huanwei_class_name2);
            parent2.insertBefore(qb[dragIndex1], qb[dropIndex1 + 1]);
        } else {
            var qb = parent2.querySelectorAll('.' + huanwei_class_name2);
            parent2.insertBefore(qb[dragIndex1], qb[dropIndex1]);
        }
    } else if (sfwuxiao2 == 1) {
        // 最后交换两个元素的位置
        var parent2 = draggedItem2.parentNode;
        dropIndex22 = Array.prototype.indexOf.call(parent2.children, this);

        // 页面替换
        var dhr_ym_r_s = document.querySelector('.dhr_ym_r_s');
        // 交换两个元素的位置
        var dahz = dhr_ym_r_s.parentNode;
        if (dragIndex22 < dropIndex22) {
            var dhr_ym_r_s = document.querySelectorAll('.dhr_ym_r_s');
            dahz.insertBefore(dhr_ym_r_s[dragIndex22], dhr_ym_r_s[dropIndex22 + 1]);
        } else {
            var dhr_ym_r_s = document.querySelectorAll('.dhr_ym_r_s');
            dahz.insertBefore(dhr_ym_r_s[dragIndex22], dhr_ym_r_s[dropIndex22]);
        }
        //导航栏排序
        lian_jie_l_s = document.querySelector('.lian_jie_l').children;
        for (var i = 0; i < lian_jie_l_s.length; i++) {
            //指定顺序值
            lian_jie_l_s[i].setAttribute('dhr_num', i)
        }
        //指向更改
        if (dragIndex22 > dhr_zhi_xian && dropIndex22 <= dhr_zhi_xian) {
            dhr_zhi_xian = dhr_zhi_xian - 0 + 1;
        } else if (dragIndex22 < dhr_zhi_xian && dropIndex22 >= dhr_zhi_xian) {
            dhr_zhi_xian = dhr_zhi_xian - 0 - 1;
        } else if (dragIndex22 == dhr_zhi_xian) {
            dhr_zhi_xian = dropIndex22;
        }
        qjgnzx();
        // 内存替换
        if (dragIndex22 !== dropIndex22) {
            if (dragIndex22 < dropIndex22) {
                var dhr_sz = JSON.parse(localStorage.dhr_sz);
                var dhr_sz2 = JSON.parse(JSON.stringify(dhr_sz));
                for (var i = dragIndex22; i <= dropIndex22; i++) {
                    if (i !== dropIndex22) {
                        dhr_sz[i] = dhr_sz2[i + 1];
                    } else {
                        dhr_sz[dropIndex22] = dhr_sz2[dragIndex22];
                    }
                }
                localStorage.dhr_sz = JSON.stringify(dhr_sz);
            } else {
                var dhr_sz = JSON.parse(localStorage.dhr_sz);
                var dhr_sz2 = JSON.parse(JSON.stringify(dhr_sz));
                for (var i = dragIndex22; i >= dropIndex22; i--) {
                    if (i !== dropIndex22) {
                        dhr_sz[i] = dhr_sz2[i - 1];
                    } else {
                        dhr_sz[dropIndex22] = dhr_sz2[dragIndex22];
                    }
                }
                localStorage.dhr_sz = JSON.stringify(dhr_sz);
            }
        }
        // 内存替换2
        if (dragIndex22 !== dropIndex22) {
            if (dragIndex22 < dropIndex22) {
                var dhr_ym_dx = JSON.parse(localStorage.dhr_ym_dx);
                var dhr_ym_dx2 = JSON.parse(JSON.stringify(dhr_ym_dx));
                for (var i = dragIndex22; i <= dropIndex22; i++) {
                    if (i !== dropIndex22) {
                        dhr_ym_dx['dhr_ym_dx' + i] = dhr_ym_dx2['dhr_ym_dx' + (i + 1)];
                    } else {
                        dhr_ym_dx['dhr_ym_dx' + dropIndex22] = dhr_ym_dx2['dhr_ym_dx' + dragIndex22];
                    }
                }
                localStorage.dhr_ym_dx = JSON.stringify(dhr_ym_dx);
            } else {
                var dhr_ym_dx = JSON.parse(localStorage.dhr_ym_dx);
                var dhr_ym_dx2 = JSON.parse(JSON.stringify(dhr_ym_dx));
                for (var i = dragIndex22; i >= dropIndex22; i--) {
                    if (i !== dropIndex22) {
                        dhr_ym_dx['dhr_ym_dx' + i] = dhr_ym_dx2['dhr_ym_dx' + (i - 1)];
                    } else {
                        dhr_ym_dx['dhr_ym_dx' + dropIndex22] = dhr_ym_dx2['dhr_ym_dx' + dragIndex22];
                    }
                }
                localStorage.dhr_ym_dx = JSON.stringify(dhr_ym_dx);
            }
        }
        console.log(dragIndex22, dropIndex22);
    }


    draggedItem2 = null;

}
enableDragAndDrop2('tuodon_dhr_div');




// a标签打开方式替换
function a_click_self() {
    var className = document.querySelectorAll('a[href^="Sku-"]');
    for (var i = 0; i < className.length; i++) {
        className[i].target = '_self';
        className[i].innerHTML = '打开';
    }
}

// 下载标签打开方式替换
function a_click_self_xz() {
    var hzm = ['.zip', '.exe', '.apk'];
    for (var p = 0; p < hzm.length; p++) {
        var className = document.querySelectorAll('a[href$="' + hzm[p] + '"]');
        for (var i = 0; i < className.length; i++) {
            className[i].target = '_self';
            className[i].innerHTML = '安装';
        }
    }
}




// 添加已有链接

var lj_xg_tj_bdtj_wz = document.querySelector('.lj_xg_tj_bdtj_wz');
lj_xg_tj_bdtj.addEventListener('click', function(e) {
    if (lj_xg_tj_bdtj.className == 'iconfont icon-fuzhi lj_xg_tj_bdtj') {
        lj_xg_tj_bdtj.className = 'iconfont icon-tianjia1 lj_xg_tj_bdtj';
        lj_xg_tj_bdtj_wz.innerHTML = '创建新的链接';
        jl_qrk.innerHTML = '匹配添加<span class="jl_qrk_fh">↵</span>';
    } else {
        lj_xg_tj_bdtj.className = 'iconfont icon-fuzhi lj_xg_tj_bdtj';
        lj_xg_tj_bdtj_wz.innerHTML = '匹配添加已有链接';
        jl_qrk.innerHTML = '创建<span class="jl_qrk_fh">↵</span>';
    }
    lj_srk_tpid.focus();
});





// 滚动条
Sku_gundontiao('.lian_jie_r', '.lianjie_gundontiao_max', '.lianjie_gundontiao_min');
Sku_gundontiao('.lian_jie_l', '.lianjied_gundontiao_max', '.lianjied_gundontiao_min');



//全局事件
dhr_xg_tj = document.querySelector('.dhr_xg_tj');
dhr_shezhi_gn = document.querySelector('.dhr_shezhi_gn');
nrmaxs1 = document.querySelector('.nrmaxs1');
//全局右击事件
document.addEventListener('contextmenu', function() {
    dhr_shezhi_gn.style.display = 'none';
    ycgn_dhr_xgk();
    ycgn_lj_xgk();
    lj_zcb_ym_sc();
});
//全局左击事件
document.addEventListener('click', function() {
    dhr_shezhi_gn.style.display = 'none';
    ycgn_dhr_xgk();
    ycgn_lj_xgk();
    lj_zcb_ym_sc();
});
//全局回车事件
document.addEventListener('keyup', function(e) {
    if (nrmaxs1.style.display == 'block') {
        if (e.key == '+') {
            dhr_shezhi_gn_tj.click();
        }
        if (e.key == 'Delete' && dhr_shezhi_gn_sc.style.display == 'block' && dhr_shezhi_gn.style.display == 'block') {
            dhr_shezhi_gn_sc.click();
        }
        if (e.key == 'F2' && dhr_shezhi_gn_cmm.style.display == 'block' && dhr_shezhi_gn.style.display == 'block') {
            dhr_shezhi_gn_cmm.click();
        }
    }
});

document.addEventListener('keydown', function(e) {

    if (nrmaxs1.style.display == 'block' && e.ctrlKey && e.key == '/') {
        lian_jie_ssk.focus();
    }
    if (lian_jie_ssk_xz == 1 && e.key == 'Enter') {
        i_lian_jie_ss_tb.click();
        lian_jie_ssk.blur();
    }
    if (nrmaxs1.style.display == 'block' && e.key == 'Escape') {
        lian_jie_ssk.value = '';
        lian_jie_ssk.blur();
        i_lian_jie_ss_tb.click();
    }

    if (e.key == 'Enter') {
        dhr_xg_tj = document.querySelector('.dhr_xg_tj');
        if (dhr_xg_tj.style.display == 'block') {
            dhr_qrk.click();
        }
        if (lj_xg_tj.style.display == 'block') {
            if (lj_xg_tj_ipt_xzs == 0) {
                lj_srk_tpid.blur();
                lj_srk_mc.select();
            } else if (lj_xg_tj_ipt_xzs == 1) {
                lj_srk_mc.blur();
                lj_srk_zsm.select();
            } else if (lj_xg_tj_ipt_xzs == 2) {
                lj_srk_zsm.blur();
                lj_srk_wzid.select();
            } else if (lj_xg_tj_ipt_xzs == 3) {
                lj_srk_wzid.blur();
                lj_srk_xzid.select();
            } else if (lj_xg_tj_ipt_xzs == 4 && lj_xg_tj_bdtj_wz.innerHTML == '匹配添加已有链接') {
                jl_qrk.click();
            }
        }
        if (lj_zcb_ym.style.display == 'block') {
            lj_zcb_qr.click();
        }
    }
    if (e.key == 'ArrowUp' || e.key == 'ArrowDown') {
        if (e.key == 'ArrowUp' && lj_xg_tj.style.display == 'block') {
            if (lj_xg_tj_ipt_xzs == 0) {
                lj_srk_tpid.blur();
                lj_srk_xzid.select();
            } else if (lj_xg_tj_ipt_xzs == 4) {
                lj_srk_xzid.blur();
                lj_srk_wzid.select();
            } else if (lj_xg_tj_ipt_xzs == 3) {
                lj_srk_wzid.blur();
                lj_srk_zsm.select();
            } else if (lj_xg_tj_ipt_xzs == 2) {
                lj_srk_zsm.blur();
                lj_srk_mc.select();
            } else if (lj_xg_tj_ipt_xzs == 1) {
                lj_srk_mc.blur();
                lj_srk_tpid.select();
            }
        }
        if (e.key == 'ArrowDown' && lj_xg_tj.style.display == 'block') {
            if (lj_xg_tj_ipt_xzs == 0) {
                lj_srk_tpid.blur();
                lj_srk_mc.select();
            } else if (lj_xg_tj_ipt_xzs == 1) {
                lj_srk_mc.blur();
                lj_srk_zsm.select();
            } else if (lj_xg_tj_ipt_xzs == 2) {
                lj_srk_zsm.blur();
                lj_srk_wzid.select();
            } else if (lj_xg_tj_ipt_xzs == 3) {
                lj_srk_wzid.blur();
                lj_srk_xzid.select();
            } else if (lj_xg_tj_ipt_xzs == 4) {
                lj_srk_mc.blur();
                lj_srk_tpid.select();
            }
        }
    }

});