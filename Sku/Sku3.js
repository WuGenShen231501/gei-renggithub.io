// 可文字选中
var liu_yan_top = document.querySelector('.liu_yan_top');
liu_yan_top.addEventListener('selectstart', function (e) {
    e.stopPropagation();
});

nrmaxs2 = document.querySelector('.nrmaxs2');

// 匹配浏览器高度
liu_yan_mao_bo_li = document.querySelector('.liu_yan_mao_bo_li');
liu_yan = document.querySelector('.liu_yan');
liu_yan.style.marginTop = (window.innerHeight + 56 - 523 - 80) / 2 + 'px';
liu_yan_mao_bo_li.style.marginTop = (window.innerHeight + 56 - 523 - 80) / 2 + 'px';
liu_yan_sxuan_div = document.querySelector('.liu_yan_sxuan_div');
liu_yan_sxuan_div.style.marginTop = (window.innerHeight + 56 - 523 - 80) / 2 + 'px';
window.addEventListener('resize', function () {
    liu_yan_mao_bo_li = document.querySelector('.liu_yan_mao_bo_li');
    liu_yan = document.querySelector('.liu_yan');
    liu_yan.style.marginTop = (window.innerHeight + 56 - 523 - 80) / 2 + 'px';
    liu_yan_mao_bo_li.style.marginTop = (window.innerHeight + 56 - 523 - 80) / 2 + 'px';
    liu_yan_sxuan_div = document.querySelector('.liu_yan_sxuan_div');
    liu_yan_sxuan_div.style.marginTop = (window.innerHeight + 56 - 523 - 80) / 2 + 'px';
});




// 指向
liu_yan_zhi_xian = '无';
liu_yan_zhi_xian2 = '无';

//开始
var liu_yan_sxgn = 1;
liu_yan_top = document.querySelector('.liu_yan_top');
liu_yan_sxuan_s = document.querySelectorAll('.liu_yan_sxuan_s');
liu_yan_sxuan_s[0].style.color = RGB_zhq(localStorage.zi_ti_click_color);
liu_yan_sxuan_s[0].style.borderBottom = '1px solid ' + RGB_zhq(localStorage.zi_ti_click_color);
liu_yan_sxuan_s[0].style.backgroundColor = RGB_zhq(localStorage.zi_ti_click_color, 0.15);
//标记个数检测
function liu_yan_biaoji_gs() {
    liu_yan_biaoji_num = 0;
    liu_yan_no_biaoji_num = 0;
    liu_yan_dx = JSON.parse(localStorage.liu_yan_dx);
    for (var i = 0; i < Object.keys(liu_yan_dx).length; i++) {
        //判断是否标记
        if (liu_yan_dx['liu_yan_sz' + i][2] == 2) {
            liu_yan_no_biaoji_num++;
        } else if (liu_yan_dx['liu_yan_sz' + i][2] == 1) {
            liu_yan_biaoji_num++;
        }
    }

    // 显示标记个数
    liu_yan_sxuan_bj = document.querySelector('.liu_yan_sxuan_bj');
    liu_yan_sxuan_wbj = document.querySelector('.liu_yan_sxuan_wbj');
    liu_yan_sxuan_bj.querySelector('span').innerHTML = ' ' + liu_yan_biaoji_num;
    liu_yan_sxuan_wbj.querySelector('span').innerHTML = ' ' + liu_yan_no_biaoji_num;
}
liu_yan_biaoji_gs();

ji_ru_ssk_max = document.querySelector('.ji_ru_ssk_max');
//输出内存
function liu_yan_shuchu_sz() {
    var i2 = 0;
    liu_yan_top_min = document.querySelector('.liu_yan_top_min');
    liu_yan_dx = JSON.parse(localStorage.liu_yan_dx);
    for (var i = 0; i < Object.keys(liu_yan_dx).length; i++) {
        var div = document.createElement('div');
        div.className = 'liu_yan_z_max';
        div.setAttribute('liu_yan_num', i);
        div.setAttribute('liu_yan_num2', i2);
        //判断是否标记
        if (liu_yan_dx['liu_yan_sz' + i][2] == 2) {
            div.innerHTML = '<div class="liu_yan_z liu_yan_z2">' + liu_yan_dx['liu_yan_sz' + i][0] + '</div><div class="liu_yan_tx"></div><div class="liu_yan_time">' + liu_yan_dx['liu_yan_sz' + i][1] + '</div>';
        } else if (liu_yan_dx['liu_yan_sz' + i][2] == 1) {
            div.innerHTML = '<div class="liu_yan_z" style="border-color:' + RGB_zhq(localStorage.zi_ti_click_color) + ';">' + liu_yan_dx['liu_yan_sz' + i][0] + '</div><div class="liu_yan_tx"></div><div class="liu_yan_time">' + liu_yan_dx['liu_yan_sz' + i][1] + '</div>';
        }
        div.querySelector('.liu_yan_tx').style.backgroundImage = 'url(' + localStorage.tou_xiang + ')';
        liu_yan_top_min.appendChild(div);
        i2++;
    }
    //显示最下方
    liu_yan_top.scroll(0, liu_yan_top_min.offsetHeight);
}
liu_yan_shuchu_sz();

//为所有留言添加按钮
liu_yan_shezhi_gn = document.querySelector('.liu_yan_shezhi_gn');

function liu_yan_anniu_click() {
    liu_yan_z = document.querySelectorAll('.liu_yan_z');
    for (var i = 0; i < liu_yan_z.length; i++) {
        liu_yan_z[i].addEventListener('contextmenu', function (e) {
            e.stopPropagation();
            e.preventDefault();


            liu_yan_shezhi_gn.style.display = 'block';
            liu_yan_shezhi_gn.style.top = e.pageY + 'px';
            liu_yan_shezhi_gn.style.left = e.pageX + 'px';
            //设置指向
            liu_yan_zhi_xian = this.parentNode.getAttribute('liu_yan_num');
            liu_yan_zhi_xian2 = this.parentNode.getAttribute('liu_yan_num2');
            console.clear();
            console.log('内存留言指向: ' + liu_yan_zhi_xian);
            console.log('留言指向: ' + liu_yan_zhi_xian2);
            console.log(e.pageY, e.pageX);
        });
    }
}
liu_yan_anniu_click();

//切换筛选样式
liu_yan_sxuan_s = document.querySelectorAll('.liu_yan_sxuan_s');
for (var i = 0; i < 3; i++) {
    liu_yan_sxuan_s[i].addEventListener('click', function () {
        for (var i = 0; i < 3; i++) {
            liu_yan_sxuan_s[i].style.color = '';
            liu_yan_sxuan_s[i].style.borderBottom = '';
            liu_yan_sxuan_s[i].style.backgroundColor = '';
        }
        this.style.color = RGB_zhq(localStorage.zi_ti_click_color);
        this.style.borderBottom = '1px solid ' + RGB_zhq(localStorage.zi_ti_click_color);
        this.style.backgroundColor = RGB_zhq(localStorage.zi_ti_click_color, 0.15);
    });
}

//筛选显示
liu_yan_sxuan_div = document.querySelector('.liu_yan_sxuan_div');
liu_yan_sxuan = document.querySelector('.liu_yan_sxuan');
liu_yan_sxuan.addEventListener('click', function (e) {
    e.stopPropagation();
    liu_yan_sxuan_div.style.display = 'block';
});

//标记按钮click
liu_yan_sxuan_bj = document.querySelector('.liu_yan_sxuan_bj');
liu_yan_sxuan_bj.addEventListener('click', function () {
    liu_yan_sxgn = 2;
    ji_ru_ssk_max.style.display = 'none';
    //删除所有留言
    liu_yan_top = document.querySelector('.liu_yan_top');
    liu_yan_top_min = document.querySelector('.liu_yan_top_min');
    liu_yan_top.removeChild(liu_yan_top_min);
    var div = document.createElement('div');
    div.className = 'liu_yan_top_min';
    liu_yan_top.appendChild(div);
    //添加标记留言
    var i2 = 0;
    liu_yan_top_min = document.querySelector('.liu_yan_top_min');
    liu_yan_dx = JSON.parse(localStorage.liu_yan_dx);
    for (var i = 0; i < Object.keys(liu_yan_dx).length; i++) {
        //判断是否标记
        if (liu_yan_dx['liu_yan_sz' + i][2] == '1') {
            var div_1 = document.createElement('div');
            div_1.className = 'liu_yan_z_max';
            div_1.setAttribute('liu_yan_num', i);
            div_1.setAttribute('liu_yan_num2', i2);
            div_1.innerHTML = '<div class="liu_yan_z" style="border-color:' + RGB_zhq(localStorage.zi_ti_click_color) + ';">' + liu_yan_dx['liu_yan_sz' + i][0] + '</div><div class="liu_yan_tx"></div><div class="liu_yan_time">' + liu_yan_dx['liu_yan_sz' + i][1] + '</div>';
            div_1.querySelector('.liu_yan_tx').style.backgroundImage = 'url(' + localStorage.tou_xiang + ')';
            liu_yan_top_min.appendChild(div_1);
            i2++;
        }
    }
    //添加事件
    liu_yan_anniu_click();
    //显示最下方
    liu_yan_top.scroll(0, liu_yan_top_min.offsetHeight);
    //选中输入框
    liu_yan_srk.focus();
});

//未标记按钮click
liu_yan_sxuan_wbj = document.querySelector('.liu_yan_sxuan_wbj');
liu_yan_sxuan_wbj.addEventListener('click', function () {
    liu_yan_sxgn = 3;
    ji_ru_ssk_max.style.display = 'none';
    //删除所有留言
    liu_yan_top = document.querySelector('.liu_yan_top');
    liu_yan_top_min = document.querySelector('.liu_yan_top_min');
    liu_yan_top.removeChild(liu_yan_top_min);
    var div = document.createElement('div');
    div.className = 'liu_yan_top_min';
    liu_yan_top.appendChild(div);
    //添加标记留言
    var i2 = 0;
    liu_yan_top_min = document.querySelector('.liu_yan_top_min');
    liu_yan_dx = JSON.parse(localStorage.liu_yan_dx);
    for (var i = 0; i < Object.keys(liu_yan_dx).length; i++) {
        //判断是否标记
        if (liu_yan_dx['liu_yan_sz' + i][2] == '2') {
            var div_0 = document.createElement('div');
            div_0.className = 'liu_yan_z_max';
            div_0.setAttribute('liu_yan_num', i);
            div_0.setAttribute('liu_yan_num2', i2);
            div_0.innerHTML = '<div class="liu_yan_z liu_yan_z2">' + liu_yan_dx['liu_yan_sz' + i][0] + '</div><div class="liu_yan_tx"></div><div class="liu_yan_time">' + liu_yan_dx['liu_yan_sz' + i][1] + '</div>';
            div_0.querySelector('.liu_yan_tx').style.backgroundImage = 'url(' + localStorage.tou_xiang + ')';
            liu_yan_top_min.appendChild(div_0);
            i2++;
        }
    }
    //添加事件
    liu_yan_anniu_click();
    //显示最下方
    liu_yan_top.scroll(0, liu_yan_top_min.offsetHeight);
    //选中输入框
    liu_yan_srk.focus();
});

//综合按钮click
liu_yan_sxuan_zh = document.querySelector('.liu_yan_sxuan_zh');
liu_yan_sxuan_zh.addEventListener('click', function () {
    liu_yan_sxgn = 1;
    ji_ru_ssk_max.style.display = 'block';
    input_ji_ru_srk.value = '';
    //删除所有留言
    liu_yan_top = document.querySelector('.liu_yan_top');
    liu_yan_top_min = document.querySelector('.liu_yan_top_min');
    liu_yan_top.removeChild(liu_yan_top_min);
    var div = document.createElement('div');
    div.className = 'liu_yan_top_min';
    liu_yan_top.appendChild(div);
    //添加标记留言
    liu_yan_shuchu_sz();
    //添加事件
    liu_yan_anniu_click();
    //选中输入框
    liu_yan_srk.focus();
});


//搜索按钮
ji_ru_ssk_max = document.querySelector('.ji_ru_ssk_max');
input_ji_ru_srk = document.querySelector('.input_ji_ru_srk');
i_liu_yan_ss_tp = document.querySelector('.i_liu_yan_ss_tp');
i_liu_yan_ss_tp.addEventListener('click', function () {
    if (input_ji_ru_srk.value !== '') {
        //删除所有留言
        liu_yan_top = document.querySelector('.liu_yan_top');
        liu_yan_top_min = document.querySelector('.liu_yan_top_min');
        liu_yan_top.removeChild(liu_yan_top_min);
        var div = document.createElement('div');
        div.className = 'liu_yan_top_min';
        liu_yan_top.appendChild(div);
        //添加搜索留言
        var i2 = 0;
        liu_yan_top_min = document.querySelector('.liu_yan_top_min');
        liu_yan_dx = JSON.parse(localStorage.liu_yan_dx);
        for (var i = 0; i < Object.keys(liu_yan_dx).length; i++) {
            //判断是搜索目标
            var ly_pd_zfc = liu_yan_dx['liu_yan_sz' + i][0];
            if (containsAllChars(input_ji_ru_srk.value, ly_pd_zfc)) {
                var div = document.createElement('div');
                div.className = 'liu_yan_z_max';
                div.setAttribute('liu_yan_num', i);
                div.setAttribute('liu_yan_num2', i2);
                //判断是否标记
                if (liu_yan_dx['liu_yan_sz' + i][2] == 2) {
                    div.innerHTML = '<div class="liu_yan_z liu_yan_z2">' + liu_yan_dx['liu_yan_sz' + i][0] + '</div><div class="liu_yan_tx"></div><div class="liu_yan_time">' + liu_yan_dx['liu_yan_sz' + i][1] + '</div>';
                } else if (liu_yan_dx['liu_yan_sz' + i][2] == 1) {
                    div.innerHTML = '<div class="liu_yan_z" style="border-color:' + RGB_zhq(localStorage.zi_ti_click_color) + ';">' + liu_yan_dx['liu_yan_sz' + i][0] + '</div><div class="liu_yan_tx"></div><div class="liu_yan_time">' + liu_yan_dx['liu_yan_sz' + i][1] + '</div>';
                }
                div.querySelector('.liu_yan_tx').style.backgroundImage = 'url(' + localStorage.tou_xiang + ')';
                liu_yan_top_min.appendChild(div);
                i2++;
            }
        }
        //添加事件
        liu_yan_anniu_click();
        //显示最下方
        liu_yan_top.scroll(0, liu_yan_top_min.offsetHeight);
    } else {
        liu_yan_sxuan_zh.click();
    }
});
//实时变动
var input_ji_ru_srk_bl = 0;
input_ji_ru_srk.addEventListener('focus', function () {
    input_ji_ru_srk_bl = 1;
    ji_ru_ssk_max.style.opacity = '1';
});
input_ji_ru_srk.addEventListener('blur', function () {
    input_ji_ru_srk_bl = 0;
    ji_ru_ssk_max.style.opacity = '0.2';
});

//输入框选择
liu_yan_bottom = document.querySelector('.liu_yan_bottom');
liu_yan_srk = document.querySelector('.liu_yan_srk');
liu_yan_bottom.addEventListener('click', function () {
    liu_yan_srk.focus();
});
//判断是否选中
liu_yan_srk_jc = 0;
liu_yan_srk.addEventListener('focus', function () {
    liu_yan_srk_jc = 1;
});
liu_yan_srk.addEventListener('blur', function (e) {
    liu_yan_srk_jc = 0;

    // 失去焦点暂停更改(重命名)功能
    if (cmm_jc == 1 && i_liu_yan_ksbc == 0) {
        cmm_jc = 0;
        liu_yan_button.innerHTML = '发送(E)';
        liu_yan_srk.value = '';
    }

});

//发送
cmm_jc = 0;
shi_jian = new Date();

function shi_jian_hs() {
    shi_jian = new Date();
    return shi_jian;
}

function shi_jian_hs2() {
    shi_jian = new Date();
    shi_jian_fen = shi_jian.getMinutes() < 10 ? '0' + shi_jian.getMinutes() : shi_jian.getMinutes();
    return shi_jian_fen;
}

function shi_jian_hs3() {
    shi_jian = new Date();
    shi_jian_shi = shi_jian.getHours() < 10 ? '0' + shi_jian.getHours() : shi_jian.getHours();
    return shi_jian_shi;
}

liu_yan_srk = document.querySelector('.liu_yan_srk');
liu_yan_button = document.querySelector('.liu_yan_button');
liu_yan_button.addEventListener('click', function () {
    if (liu_yan_srk.value !== '' && cmm_jc == 0) {
        //修改内存  
        liu_yan_dx = JSON.parse(localStorage.liu_yan_dx);
        liu_yan_dx['liu_yan_sz' + Object.keys(liu_yan_dx).length] = [liu_yan_srk.value, shi_jian_hs().getFullYear() + ' 年 ' + (shi_jian_hs().getMonth() + 1) + ' 月 ' + shi_jian_hs().getDate() + ' 日 ' + shi_jian_hs3() + ':' + shi_jian_hs2(), '2'];
        localStorage.liu_yan_dx = JSON.stringify(liu_yan_dx);
        //修改HTML
        liu_yan_sxuan_zh.click();
        //删除字
        liu_yan_srk.value = '';
        //设置标记个数
        liu_yan_biaoji_gs();
        //选择输入框
        liu_yan_srk.focus();
    } else if (cmm_jc == 1) {
        // 删除click
        cmm_jc = 0;
        liu_yan_srk.value = '';
        liu_yan_button.innerHTML = '发送(E)';
        liu_yan_srk.focus();
    } else {
        liu_yan_srk.focus();
    }
});

//标记按钮
liu_yan_top_min = document.querySelector('.liu_yan_top_min');
liu_yan_shezhi_gn_biaoji = document.querySelector('.liu_yan_shezhi_gn_biaoji');
liu_yan_shezhi_gn_biaoji.addEventListener('click', function () {
    if (liu_yan_sxuan_zh.style.color !== '') {
        //修改内存
        liu_yan_dx = JSON.parse(localStorage.liu_yan_dx);
        if (liu_yan_dx['liu_yan_sz' + liu_yan_zhi_xian][2] == 1) {
            liu_yan_dx['liu_yan_sz' + liu_yan_zhi_xian][2] = 2;
        } else {
            liu_yan_dx['liu_yan_sz' + liu_yan_zhi_xian][2] = 1;
        }
        localStorage.liu_yan_dx = JSON.stringify(liu_yan_dx);
        //修改HTML
        liu_yan_z = document.querySelectorAll('.liu_yan_z');
        liu_yan_dx = JSON.parse(localStorage.liu_yan_dx);
        if (liu_yan_dx['liu_yan_sz' + liu_yan_zhi_xian][2] == 1) {
            liu_yan_z[liu_yan_zhi_xian2].className = 'liu_yan_z';
            liu_yan_z[liu_yan_zhi_xian2].style.borderColor = RGB_zhq(localStorage.zi_ti_click_color);
        } else {
            liu_yan_z[liu_yan_zhi_xian2].className = 'liu_yan_z liu_yan_z2';
            liu_yan_z[liu_yan_zhi_xian2].style.borderColor = '';
        }
        //标记个数刷新
        liu_yan_biaoji_gs();
        // 提示音
        // Sku_tsy(4);
    } else if (liu_yan_sxuan_zh.style.color == '') {
        //修改内存
        liu_yan_dx = JSON.parse(localStorage.liu_yan_dx);
        if (liu_yan_dx['liu_yan_sz' + liu_yan_zhi_xian][2] == 1) {
            liu_yan_dx['liu_yan_sz' + liu_yan_zhi_xian][2] = 2;
        } else {
            liu_yan_dx['liu_yan_sz' + liu_yan_zhi_xian][2] = 1;
        }
        localStorage.liu_yan_dx = JSON.stringify(liu_yan_dx);
        //修改HTML
        liu_yan_z_max = document.querySelectorAll('.liu_yan_z_max');
        liu_yan_top_min.removeChild(liu_yan_z_max[liu_yan_zhi_xian2]);
        //重新排序
        liu_yan_z_max = document.querySelectorAll('.liu_yan_z_max');
        for (var i = 0; i < liu_yan_z_max.length; i++) {
            liu_yan_z_max[i].setAttribute('liu_yan_num2', i);
        }
        //标记个数刷新
        liu_yan_biaoji_gs();
        // 提示音
        // Sku_tsy(4);
    }
});

//删除按钮
liu_yan_shezhi_gn_sc = document.querySelector('.liu_yan_shezhi_gn_sc');
liu_yan_shezhi_gn_sc.addEventListener('click', function () {
    //删除内存
    liu_yan_dx = JSON.parse(localStorage.liu_yan_dx);
    delete liu_yan_dx['liu_yan_sz' + liu_yan_zhi_xian];
    localStorage.liu_yan_dx = JSON.stringify(liu_yan_dx);
    //删除mtml
    liu_yan_top_min = document.querySelector('.liu_yan_top_min');
    liu_yan_z_max = document.querySelectorAll('.liu_yan_z_max');
    liu_yan_top_min.removeChild(liu_yan_z_max[liu_yan_zhi_xian2]);
    //重新排序内存
    liu_yan_dx = JSON.parse(localStorage.liu_yan_dx);
    liu_yan_dx2 = {};
    for (var i = 0; i < Object.keys(liu_yan_dx).length; i++) {
        liu_yan_dx2['liu_yan_sz' + i] = liu_yan_dx[Object.keys(liu_yan_dx)[i]]
    }
    localStorage.liu_yan_dx = JSON.stringify(liu_yan_dx2);
    //重新排序html
    liu_yan_sxuan_zh = document.querySelector('.liu_yan_sxuan_zh');
    liu_yan_sxuan_bj = document.querySelector('.liu_yan_sxuan_bj');
    liu_yan_sxuan_wbj = document.querySelector('.liu_yan_sxuan_wbj');
    if (liu_yan_sxgn == 1) {
        if (input_ji_ru_srk.value == '') {
            liu_yan_z_max = document.querySelectorAll('.liu_yan_z_max');
            for (var i = 0; i < liu_yan_z_max.length; i++) {
                liu_yan_z_max[i].setAttribute('liu_yan_num', i);
                liu_yan_z_max[i].setAttribute('liu_yan_num2', i);
            }
        } else {
            liu_yan_z_max = document.querySelectorAll('.liu_yan_z_max');
            var i2 = 0;
            liu_yan_top_min = document.querySelector('.liu_yan_top_min');
            liu_yan_dx = JSON.parse(localStorage.liu_yan_dx);
            for (var i = 0; i < Object.keys(liu_yan_dx).length; i++) {
                //判断是搜索目标
                var ly_pd_zfc = liu_yan_dx['liu_yan_sz' + i][0];
                for (var o = 0; o < ly_pd_zfc.length; o++) {
                    if (ly_pd_zfc.charAt(o) == input_ji_ru_srk.value[0]) {
                        var zq_gs = 1;
                        for (var p = 1; p < input_ji_ru_srk.value.length; p++) {
                            if (ly_pd_zfc.charAt(o + p) == input_ji_ru_srk.value[p]) {
                                zq_gs++;
                            }
                        }
                        if (zq_gs == input_ji_ru_srk.value.length) {
                            liu_yan_z_max[i2].setAttribute('liu_yan_num', i);
                            liu_yan_z_max[i2].setAttribute('liu_yan_num2', i2);
                            i2++;
                            break;
                        }
                    }
                }
            }
        }
    } else if (liu_yan_sxgn == 2) {
        var i2 = 0;
        liu_yan_z_max = document.querySelectorAll('.liu_yan_z_max');
        liu_yan_dx = JSON.parse(localStorage.liu_yan_dx);
        for (var i = 0; i < Object.keys(liu_yan_dx).length; i++) {
            if (liu_yan_dx['liu_yan_sz' + i][2] == 1) {
                liu_yan_z_max[i2].setAttribute('liu_yan_num', i);
                liu_yan_z_max[i2].setAttribute('liu_yan_num2', i2);
                i2++;
            }
        }
    } else if (liu_yan_sxgn == 3) {
        var i2 = 0;
        liu_yan_z_max = document.querySelectorAll('.liu_yan_z_max');
        liu_yan_dx = JSON.parse(localStorage.liu_yan_dx);
        for (var i = 0; i < Object.keys(liu_yan_dx).length; i++) {
            if (liu_yan_dx['liu_yan_sz' + i][2] == 2) {
                liu_yan_z_max[i2].setAttribute('liu_yan_num', i);
                liu_yan_z_max[i2].setAttribute('liu_yan_num2', i2);
                i2++;
            }
        }
    }
    //标记个数刷新
    liu_yan_biaoji_gs();
    // 如果正在修改停止修改
    if (cmm_jc == 1) {
        // 删除click
        cmm_jc = 0;
        liu_yan_srk.value = '';
        liu_yan_button.innerHTML = '发送(E)';
        liu_yan_srk.focus();
    }
});

//修改留言
liu_yan_button = document.querySelector('.liu_yan_button');
liu_yan_shezhi_gn_cmm = document.querySelector('.liu_yan_shezhi_gn_cmm');
liu_yan_shezhi_gn_cmm.addEventListener('click', function () {
    liu_yan_z = document.querySelectorAll('.liu_yan_z');
    liu_yan_zhi_xian_jieting = liu_yan_zhi_xian;
    liu_yan_zhi_xian2_jieting = liu_yan_zhi_xian2;
    liu_yan_dx = JSON.parse(localStorage.liu_yan_dx);
    cmm_jc = 1;
    liu_yan_button.innerHTML = '确定(E)';
    liu_yan_srk.value = liu_yan_dx['liu_yan_sz' + liu_yan_zhi_xian][0];
    liu_yan_srk.focus();
});
liu_yan_srk.addEventListener('input', function () {
    if (cmm_jc == 1) {
        //修改内存
        liu_yan_dx['liu_yan_sz' + liu_yan_zhi_xian_jieting][0] = liu_yan_srk.value;
        localStorage.liu_yan_dx = JSON.stringify(liu_yan_dx);
        //修改HTML
        liu_yan_z[liu_yan_zhi_xian2_jieting].innerHTML = liu_yan_srk.value;
    }
});

//删除所有
var liu_yan_scsy = document.querySelector('.liu_yan_scsy');
liu_yan_top = document.querySelector('.liu_yan_top');
liu_yan_top_min = document.querySelector('.liu_yan_top_min');
liu_yan_sxuan_sc = document.querySelector('.liu_yan_sxuan_sc');
liu_yan_sxuan_sc.addEventListener('click', function () {
    liu_yan_scsy.style.display = 'block';
});
var liu_yan_scsy_qr = document.querySelector('.liu_yan_scsy_qr');
var liu_yan_scsy_qx = document.querySelector('.liu_yan_scsy_qx');
liu_yan_scsy_qr.addEventListener('click', function () {
    liu_yan_scsy.style.display = 'none';
    //删除所有留言
    liu_yan_top.removeChild(liu_yan_top_min);
    var div = document.createElement('div');
    div.className = 'liu_yan_top_min';
    liu_yan_top.appendChild(div);
    //删除所有内存
    liu_yan_dx = JSON.parse(localStorage.liu_yan_dx);
    liu_yan_dx = {};
    localStorage.liu_yan_dx = JSON.stringify(liu_yan_dx);
    //标记个数刷新
    liu_yan_biaoji_gs();
})
liu_yan_scsy_qx.addEventListener('click', function (e) {
    liu_yan_scsy.style.display = 'none';
});





//快速编程
var i_liu_yan_ksbc = 0;
i_liu_yan_tpbc_tp = document.querySelector('.i_liu_yan_tpbc_tp');
i_liu_yan_spbc_tp = document.querySelector('.i_liu_yan_spbc_tp');
i_liu_yan_yybc_tp = document.querySelector('.i_liu_yan_yybc_tp');
i_liu_yan_ljbc_tp = document.querySelector('.i_liu_yan_ljbc_tp');
i_liu_yan_wzbc_tp = document.querySelector('.i_liu_yan_wzbc_tp');
i_liu_yan_photoSH_tp = document.querySelector('.i_liu_yan_photoSH_tp');
i_liu_yan_AIlunse_tp = document.querySelector('.i_liu_yan_AIlunse_tp');
i_liu_yan_gaolian_tp = document.querySelector('.i_liu_yan_gaolian_tp');
// 批量添加鼠标事件
var liu_yan_btns = [i_liu_yan_tpbc_tp, i_liu_yan_spbc_tp, i_liu_yan_yybc_tp, i_liu_yan_ljbc_tp, i_liu_yan_wzbc_tp, i_liu_yan_photoSH_tp, i_liu_yan_AIlunse_tp, i_liu_yan_gaolian_tp];
liu_yan_btns.forEach(function (btn) {
    btn.addEventListener('mouseover', function () {
        i_liu_yan_ksbc = 1;
    });
    btn.addEventListener('mouseout', function () {
        i_liu_yan_ksbc = 0;
    });
});
//字符串指定添加脚本
function insertStr(source, start, newStr) {
    return source.slice(0, start) + newStr + source.slice(start)
}
//图片快速添加
i_liu_yan_tpbc_tp.addEventListener('click', function () {
    var zfc = liu_yan_srk.value;
    var cswz = liu_yan_srk.selectionEnd;
    var zfc_x = insertStr(zfc, cswz, '<img src="" width="" height="" loading="lazy">');
    liu_yan_srk.value = zfc_x;
    liu_yan_srk.focus();
    liu_yan_srk.setSelectionRange(cswz + 10, cswz + 10);
    liu_yan_srk.dispatchEvent(new Event('input'));
});
//视频快速添加
i_liu_yan_spbc_tp.addEventListener('click', function () {
    var zfc = liu_yan_srk.value;
    var cswz = liu_yan_srk.selectionEnd;
    var zfc_x = insertStr(zfc, cswz, '<video src="" width="" height="" controls></video>');
    liu_yan_srk.value = zfc_x;
    liu_yan_srk.focus();
    liu_yan_srk.setSelectionRange(cswz + 12, cswz + 12);
    liu_yan_srk.dispatchEvent(new Event('input'));
});
//音乐快速添加
i_liu_yan_yybc_tp.addEventListener('click', function () {
    var zfc = liu_yan_srk.value;
    var cswz = liu_yan_srk.selectionEnd;
    var zfc_x = insertStr(zfc, cswz, '<audio src="" controls></audio>');
    liu_yan_srk.value = zfc_x;
    liu_yan_srk.focus();
    liu_yan_srk.setSelectionRange(cswz + 12, cswz + 12);
    liu_yan_srk.dispatchEvent(new Event('input'));
});
//链接快速添加
i_liu_yan_ljbc_tp.addEventListener('click', function () {
    var zfc = liu_yan_srk.value;
    var cswz = liu_yan_srk.selectionEnd;
    var zfc_x = insertStr(zfc, cswz, '<a href="" target="_blank"></a>');
    liu_yan_srk.value = zfc_x;
    liu_yan_srk.focus();
    liu_yan_srk.setSelectionRange(cswz + 9, cswz + 9);
    liu_yan_srk.dispatchEvent(new Event('input'));
});
//网站快速添加
i_liu_yan_wzbc_tp.addEventListener('click', function () {
    var zfc = liu_yan_srk.value;
    var cswz = liu_yan_srk.selectionEnd;
    var zfc_x = insertStr(zfc, cswz, '<div class="irm"><iframe src="" frameborder="0"></iframe></div>');
    liu_yan_srk.value = zfc_x;
    liu_yan_srk.focus();
    liu_yan_srk.setSelectionRange(cswz + 30, cswz + 30);
    liu_yan_srk.dispatchEvent(new Event('input'));
});
//高亮快速添加
i_liu_yan_gaolian_tp.addEventListener('click', function () {
    var zfc = liu_yan_srk.value;
    var cswz = liu_yan_srk.selectionEnd;
    var zfc_x = insertStr(zfc, cswz, '<code></code>');
    liu_yan_srk.value = zfc_x;
    liu_yan_srk.focus();
    liu_yan_srk.setSelectionRange(cswz + 6, cswz + 6);
    liu_yan_srk.dispatchEvent(new Event('input'));
});






liu_yan_srk.addEventListener('keydown', function (e) {
    var sf_shift3 = 0;
    if (e.shiftKey) {
        sf_shift3 = 1;
    }
    // 检查是否按下了Shift键和Enter键
    if (sf_shift3 == 0 && e.key == 'Enter') {
        // 阻止默认行为
        e.preventDefault();
    }
});





// 滚动条
Sku_gundontiao('.liu_yan_top', '.liuyan_gundontiao_max', '.liuyan_gundontiao_min');






// 创建一个临时的textarea并执行复制
function copyToClipboard2(value, message) {
    const textArea = document.createElement('textarea');
    let text = value.replace(/(\n{2,})/g, '\n\n').replace(/\n+$/, ''); // 将两个以上的换行符替换为两个换行符，并去除结尾的换行符
    textArea.value = text; // 设置textarea的值
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy'); // 执行复制操作
    document.body.removeChild(textArea); // 移除临时textarea
    Sku_tctx(message); // 提示用户
}

var liu_yan_top = document.querySelector('.liu_yan_top');
// 为父元素添加点击事件监听器
let clickPosition2 = { x: 0, y: 0 }; // 定义一个变量来存储鼠标点击时的位置
var td_target2;
liu_yan_top.addEventListener('mousedown', function (e) {
    if (e.button === 0) {
        td_target2 = e.target;
        clickPosition2 = { x: e.clientX, y: e.clientY };
        liu_yan_top.addEventListener('mouseup', onMouseUp2);
    }
});

function onMouseUp2(e) {
    // 移除mousemove和mouseup事件监听器
    liu_yan_top.removeEventListener('mouseup', onMouseUp2);
    // 执行检查函数
    let releasePosition2 = { x: e.clientX, y: e.clientY };
    let distance2 = Math.sqrt(Math.pow(releasePosition2.x - clickPosition2.x, 2) + Math.pow(releasePosition2.y - clickPosition2.y, 2));
    // 如果距离小于5px，执行函数
    if (distance2 < 5) {
        if (td_target2.classList.contains('liu_yan_z')) {
            copyToClipboard2(td_target2.innerText, '文本已复制到剪贴板');
        }
        if (td_target2.tagName == 'CODE') {
            copyToClipboard2(td_target2.innerText, '片段已复制到剪贴板');
        }
    }
}






// 全屏按钮
if (localStorage.liuyan_quanpin_true == undefined) {
    localStorage.liuyan_quanpin_true = 0;
}

function liu_yan_quanpin_hs() {
    var liu_yan = document.querySelector('.liu_yan');
    var liu_yan_mao_bo_li = document.querySelector('.liu_yan_mao_bo_li');
    var liu_yan_srk = document.querySelector('.liu_yan_srk');
    var liu_yan_top = document.querySelector('.liu_yan_top');
    var liuyan_gundontiao_max = document.querySelector('.liuyan_gundontiao_max');
    var liu_yan_sxuan_div = document.querySelector('.liu_yan_sxuan_div');
    var ji_ru_ssk_max = document.querySelector('.ji_ru_ssk_max');
    var input_ji_ru_srk = document.querySelector('.input_ji_ru_srk');
    if (localStorage.liuyan_quanpin_true == 0) {
        liu_yan.className = 'liu_yan';
        liu_yan_mao_bo_li.className = 'liu_yan_mao_bo_li';
        liu_yan_top.className = 'liu_yan_top';
        liuyan_gundontiao_max.className = 'liuyan_gundontiao_max';
        liu_yan_sxuan_div.className = 'liu_yan_sxuan_div';
        ji_ru_ssk_max.className = 'ji_ru_ssk_max';
        input_ji_ru_srk.className = 'input_ji_ru_srk';
    } else {
        liu_yan.className = 'liu_yan liu_yan2';
        liu_yan_mao_bo_li.className = 'liu_yan_mao_bo_li liu_yan_mao_bo_li2';
        liu_yan_top.className = 'liu_yan_top liu_yan_top2';
        liuyan_gundontiao_max.className = 'liuyan_gundontiao_max liuyan_gundontiao_max2';
        liu_yan_sxuan_div.className = 'liu_yan_sxuan_div liu_yan_sxuan_div2';
        ji_ru_ssk_max.className = 'ji_ru_ssk_max ji_ru_ssk_max2';
        input_ji_ru_srk.className = 'input_ji_ru_srk input_ji_ru_srk2';
    }
}
liu_yan_quanpin_hs();
var liu_yan_quanpin = document.querySelector('.liu_yan_quanpin');
liu_yan_quanpin.addEventListener('click', function () {
    if (localStorage.liuyan_quanpin_true == 0) {
        localStorage.liuyan_quanpin_true = 1;
    } else {
        localStorage.liuyan_quanpin_true = 0;
    }
    liu_yan_quanpin_hs();
})




//拖拉调整大小
if (localStorage.liuyan_tuozhuai_bianlian == undefined) {
    localStorage.liuyan_tuozhuai_bianlian = '0px';
}
var liuyan_tuozhuai = document.querySelector('.liuyan_tuozhuai');
document.documentElement.style.setProperty('--liuyan_tuozhuai_bianlian', localStorage.liuyan_tuozhuai_bianlian);
// 拖拽触发事件
if (liuyan_tuozhuai) {
    let isDragging = false;
    let istuozhuai = false;
    let startY = 0;
    let startBottom; // 初始底部位置
    var tuozhuai_zhbl;

    liuyan_tuozhuai.addEventListener('mousedown', function (e) { // 拖拽点击事件
        e.preventDefault();
        isDragging = true;
        startY = e.clientY;
        // 记录拖拽开始时的底部位置
        startBottom = parseInt(window.getComputedStyle(liuyan_tuozhuai).bottom); // 转换为整数并移除px单位
        console.log(startBottom);
        liuyan_tuozhuai.style.opacity = 1;
    });

    document.addEventListener('mousemove', function (e) { // 拖拽移动事件
        e.preventDefault();
        if (isDragging) {
            istuozhuai = true;
            // 计算拖拽距离
            const currentY = e.clientY;
            const dragDistance = currentY - startY;
            // 基于初始底部位置和拖拽距离更新位置
            tuozhuai_zhbl = (startBottom - dragDistance - 148);
            if (tuozhuai_zhbl < '0') {
                tuozhuai_zhbl = '0';
            } else if (tuozhuai_zhbl > '409') {
                tuozhuai_zhbl = '409';
            }
            tuozhuai_zhbl = tuozhuai_zhbl + 'px';
            liuyan_tuozhuai.style.bottom = 'calc(148px + ' + tuozhuai_zhbl + ')';
        }
    });

    document.addEventListener('mouseup', function (e) { // 拖拽结束事件
        if (isDragging) {
            e.preventDefault();
            // 拖拽结束时触发事件
            console.log('拖拽结束触发事件');
            // 这里可以添加拖拽结束时的代码
            liuyan_tuozhuai.style.opacity = null;
            isDragging = false;
            // 保存拖拽结束时的位置
            if (istuozhuai) {
                localStorage.liuyan_tuozhuai_bianlian = tuozhuai_zhbl;
                document.documentElement.style.setProperty('--liuyan_tuozhuai_bianlian', tuozhuai_zhbl);
            }
            istuozhuai = false;
        }
    });
}




//图片拖拽保存及应用
function ImageUploader(elementClass, savePath, options = {}) {
    const config = {
        uploadUrl: 'http://localhost/Sku-Photo',
        onSuccess: options.onSuccess || null,
        onError: options.onError || null,
        dragOverClass: options.dragOverClass || 'drag-over',
        allowedTypes: options.allowedTypes || ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp']
    };

    // 初始化所有元素
    document.querySelectorAll('.' + elementClass).forEach(element => {
        element.setAttribute('tabindex', '0');
        element.addEventListener('dragover', e => {
            e.preventDefault();
            e.currentTarget.classList.add(config.dragOverClass);
        });
        element.addEventListener('dragleave', e => {
            e.preventDefault();
            e.currentTarget.classList.remove(config.dragOverClass);
        });
        element.addEventListener('drop', e => {
            e.preventDefault();
            const element = e.currentTarget;
            element.classList.remove(config.dragOverClass);

            Array.from(e.dataTransfer.files).forEach(file => {
                // 检查是否为图片文件
                if (config.allowedTypes.includes(file.type)) {
                    uploadFile(file, element);
                }
                // 检查是否为文本文件
                else if (file.type.startsWith('text/') || file.type === 'application/json' || file.type === 'application/javascript') {
                    const reader = new FileReader();
                    reader.readAsText(file);
                    reader.onload = function (e) {
                        const content = e.target.result;
                        // 在光标处插入文本
                        if (element.tagName === 'TEXTAREA' || element.isContentEditable) {
                            if (element.tagName === 'TEXTAREA') {
                                // 对于textarea，在光标位置插入文本
                                const startPos = element.selectionStart;
                                const endPos = element.selectionEnd;
                                const textBefore = element.value.substring(0, startPos);
                                const textAfter = element.value.substring(endPos);
                                element.value = textBefore + content + textAfter;
                                // 重新设置光标位置
                                element.selectionStart = element.selectionEnd = startPos + content.length;
                            } else if (element.isContentEditable) {
                                // 对于可编辑元素，在光标位置插入文本
                                const selection = window.getSelection();
                                if (selection.rangeCount > 0) {
                                    const range = selection.getRangeAt(0);
                                    range.deleteContents();
                                    const textNode = document.createTextNode(content);
                                    range.insertNode(textNode);
                                    // 移动光标到插入文本的末尾
                                    range.setStartAfter(textNode);
                                    range.collapse(true);
                                    selection.removeAllRanges();
                                    selection.addRange(range);
                                }
                            }
                        }
                    };
                } else {
                    config.onError && config.onError('不支持的文件类型', element);
                    Sku_tctx('不支持的文件类型');
                }
            });
        });
        element.addEventListener('paste', e => {
            const items = e.clipboardData.items;
            let hasImage = false;
            // 检查是否有图片
            for (const item of items) {
                if (item.type.startsWith('image/')) {
                    hasImage = true;
                    break;
                }
            }
            // 只有当有图片时才阻止默认行为
            if (hasImage) {
                e.preventDefault();
                const element = e.currentTarget;
                Array.from(items).forEach(item => {
                    if (item.type.startsWith('image/')) {
                        uploadFile(item.getAsFile(), element);
                    }
                });
            }
            // 否则允许默认的文本粘贴行为
        });

    });

    // 上传文件
    async function uploadFile(file, element) {
        // 检查服务器状态
        const maxNode = document.querySelector('.max_node');
        if (!maxNode || maxNode.textContent.trim() !== 'node!') {
            config.onError && config.onError('服务器未开启，无法上传文件', element);
            return;
        }

        const formData = new FormData();
        formData.append('image', file);
        try {
            const response = await fetch(`${config.uploadUrl}?path=${encodeURIComponent(savePath)}`, {
                method: 'POST',
                body: formData
            });
            const result = await response.json();
            if (result.success) {
                config.onSuccess && config.onSuccess(result, file, element);
            } else {
                config.onError && config.onError(result.error || '上传失败', element);
            }
        } catch (error) {
            config.onError && config.onError(error.message, element);
        }
    }
}
if (typeof module !== 'undefined' && module.exports) { // 导出ImageUploader函数
    module.exports = ImageUploader;
}
// 初始化上传组件
ImageUploader('liu_yan_srk', 'photo', {
    onSuccess: (result, file, element) => { // 处理上传成功后的逻辑
        console.log(`上传成功: ${result.originalname}`);
        //快速添加图片
        var zfc = liu_yan_srk.value;
        var cswz = liu_yan_srk.selectionEnd;
        var zfc_x = insertStr(zfc, cswz, '<img src="' + result.path + '" width="" height="" loading="lazy">');
        liu_yan_srk.value = zfc_x;
        liu_yan_srk.focus();
        liu_yan_srk.setSelectionRange(cswz + result.path.length + 46, cswz + result.path.length + 46); //最右边
    },
    onError: (message, element) => { // 处理上传失败后的逻辑
        console.log(`上传失败: ${message}`);
    }
});

//图片检查无应用时删除
window.deleteUnusedPhotos = async function () {
    // 1. 检查服务器状态
    const maxNode = document.querySelector('.max_node');
    if (!maxNode || maxNode.textContent.trim() !== 'node!') {
        Sku_tctx('服务器未开启，无法回收图片');
        return;
    }

    const usedPhotos = [];

    // 2. 收集【留言】中的图片路径
    try {
        const liu_yan_dx = JSON.parse(localStorage.liu_yan_dx || '{}');
        for (var key in liu_yan_dx) {
            const content = liu_yan_dx[key][0];
            const imgRegex = /<img[^>]*src="([^"]+)"[^>]*>/g;
            let match;
            while ((match = imgRegex.exec(content)) !== null) {
                const src = match[1];
                if (src.startsWith('photo/')) {
                    usedPhotos.push(src);
                }
            }
        }
    } catch (e) {
        console.error('读取留言图片出错:', e);
    }

    // 3. 收集【壁纸】中的图片路径 (防止误删壁纸)
    try {
        const bi_zhi_s_list = JSON.parse(localStorage.bi_zhi_s || '[]');
        bi_zhi_s_list.forEach(function (src) {
            if (src.startsWith('photo/')) {
                usedPhotos.push(src);
            }
        });
        // 检查当前壁纸
        if (localStorage.bi_zhi && localStorage.bi_zhi.startsWith('photo/')) {
            usedPhotos.push(localStorage.bi_zhi);
        }
    } catch (e) {
        console.error('读取壁纸图片出错:', e);
    }

    // 4. 收集【头像】中的图片路径 (防止误删头像)
    try {
        let avatarPath = localStorage.tou_xiang.replace(/\\\\/g, '/');
        console.log(avatarPath);
        if (avatarPath.startsWith('photo/')) {
            usedPhotos.push(avatarPath);
        }
    } catch (e) {
        console.error('读取头像图片出错:', e);
    }

    console.log('保护列表(留言+壁纸+头像):', usedPhotos);

    // 5. 发送删除请求
    try {
        const response = await fetch('http://localhost/Sku-Photo-Delete', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ usedPhotos: usedPhotos })
        });
        const result = await response.json();
        if (result.success) {
            Sku_tctx('图片回收完成，共清理 ' + result.deletedFiles.length + ' 张');
        } else {
            Sku_tctx('清理失败: ' + result.error);
        }
    } catch (error) {
        console.error('请求失败:', error);
        Sku_tctx('请求失败，请检查网络');
    }
};

var i_liu_yan_photoSH_tp = document.querySelector('.i_liu_yan_photoSH_tp');
i_liu_yan_photoSH_tp.addEventListener('click', window.deleteUnusedPhotos);







//AI润色
var i_liu_yan_AIlunse_tp = document.querySelector('.i_liu_yan_AIlunse_tp');
var AI_runse_diaoyon = 0; //调用AI索引,默认调用第一个AI
var AI_runse_diaoyon_ks = -1; //记录本轮尝试的起始模型索引,-1表示未开始
var AI_runse_diaoyon_hb = []; //后备模型调用顺序队列
var AI_runse_heji = ['GLM-Z1-Flash', 'GLM-4.7-Flash', 'GLM-4.5-Flash', 'GLM-4-Flash-250414', 'GLM-4-Flash'];
var AI_runse_zhilin = `
你是一个文本处理助手。请严格按照以下要求处理用户输入的文字：
1、关键信息标记：识别文本中的关键信息（如地点、路线、电话号码、地址、尺寸数据等），使用 <code> 和 </code> 标签将其包裹。
2、内容纠错：修正文本中的错别字、标点错误或语句不通顺之处，确保信息准确。
3、格式保留：严格保留原文的段落结构、换行符和列表符号（如✅），不要破坏原有的排版风格。

请参考以下示例进行处理：
示例输入：
臻鼎菁干班报到
7月31日，鹏鼎控股深圳第一园区南门
✅ 带好身份证原件，毕业证/学位证/学信网验证材料提前上传系统
✅ 松岗公园地铁站D出口有公司专车接站：深圳站一地铁1号线一地铁6号线一松岗公园地铁站D出口
✅ 近期休息好，请勿喝酒熬夜
HR电话
隆姐姐：13823301526
邵哥哥：13253629732
床大概尺寸是200cm X 90cm
邮寄地址：深圳市宝安区燕罗街道松罗路鹏鼎控股科技园菜鸟驿站

示例输出：
臻鼎菁干班报到
7月31日，<code>鹏鼎控股深圳第一园区南门</code>
✅ 带好身份证原件，毕业证/学位证/学信网验证材料提前上传系统
✅ 松岗公园地铁站D出口有公司专车接站：<code>深圳站一地铁1号线一地铁6号线一松岗公园地铁站D出口</code>
✅ 近期休息好，请勿喝酒熬夜

HR电话
隆姐姐：<code>13823301526</code>
邵哥哥：<code>13253629732</code>

床大概尺寸是<code>200cm X 90cm</code>
邮寄地址：<code>深圳市宝安区燕罗街道松罗路鹏鼎控股科技园菜鸟驿站</code>

现在，请直接处理用户输入的文字，不要输出任何解释或说明。
润色以下内容:
`;
var AI_runse_APIkey = 'a425dc93999e4afb8a45c769956df6c9.4lwlymysuIDCDwII';
i_liu_yan_AIlunse_tp.addEventListener('click', async function (e) {
    if (!liu_yan_srk.value.trim()) {
        Sku_tctx('内容为空,无法润色');
        return;
    }
    var yuanwen = liu_yan_srk.value;
    Sku_tctx('正在润色...');
    i_liu_yan_AIlunse_tp.style.pointerEvents = 'none';
    //重置错误切换状态,从默认模型开始
    AI_runse_diaoyon = 0;
    AI_runse_diaoyon_ks = -1;
    AI_runse_diaoyon_hb = [];
    var runse_jieguo;
    try {
        runse_jieguo = await callZhiPuAI_runse(yuanwen);
    } catch (e) {
        console.error('AI润色异常:', e.message);
        runse_jieguo = '请求失败';
    }
    i_liu_yan_AIlunse_tp.style.pointerEvents = '';
    if (runse_jieguo == '请求失败') {
        Sku_tctx('润色失败,请重试');
    } else {
        liu_yan_srk.value = runse_jieguo;
        Sku_tctx('润色成功');
        liu_yan_srk.dispatchEvent(new Event('input'));
    }
});
//AI润色调用(含错误自动切换模型功能)
async function callZhiPuAI_runse(userInput) {
    var models = AI_runse_heji[AI_runse_diaoyon];
    try {
        if (!userInput) {
            throw new Error('请输入问题内容');
        }
        if (!AI_runse_APIkey) {
            throw new Error('请提供 API Key');
        }
        // 调用智谱AI API
        const response = await fetch('https://open.bigmodel.cn/api/paas/v4/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${AI_runse_APIkey}`
            },
            body: JSON.stringify({
                model: models,
                messages: [{
                    role: 'user', //用户输入
                    content: AI_runse_zhilin + userInput
                }],
                temperature: 1.0,
                stream: false
            })
        });
        if (!response.ok) {
            throw new Error('[' + AI_runse_diaoyon + ']' + models + ' API 请求失败:' + response.statusText);
        }
        const data = await response.json();
        let result = data.choices[0].message.content;
        console.log(result);
        let thinkStart = result.indexOf('<think>');
        let thinkEnd = result.indexOf('</think>');
        if (thinkStart > -1 && thinkEnd > thinkStart) { //思考模式删除思考过程,删除think标签和里面所有内容
            result = result.substring(0, thinkStart) + result.substring(thinkEnd + 9);
        }
        Sku_tsy(2);
        return result;
    } catch (error) {
        //错误自动切换模型
        if (AI_runse_diaoyon_ks === -1) {
            AI_runse_diaoyon_ks = AI_runse_diaoyon;
            AI_runse_diaoyon_hb = [];
            for (let i = AI_runse_diaoyon + 1; i < AI_runse_heji.length; i++) AI_runse_diaoyon_hb.push(i);
            for (let i = AI_runse_diaoyon - 1; i >= 0; i--) AI_runse_diaoyon_hb.push(i);
        }
        if (AI_runse_diaoyon_hb.length === 0) {
            AI_runse_diaoyon_ks = -1;
            AI_runse_diaoyon_hb = [];
            console.log('所有API调用错误:' + error.message);
            return '请求失败';
        }
        AI_runse_diaoyon = AI_runse_diaoyon_hb.shift();
        console.log('当前AI调用失败,调用下一个AI:' + AI_runse_heji[AI_runse_diaoyon]);
        Sku_tctx('临时切换模型 ' + AI_runse_heji[AI_runse_diaoyon]);
        return await callZhiPuAI_runse(userInput);
    }
}






//全局右击事件
document.addEventListener('contextmenu', function () {
    liu_yan_sxuan_div.style.display = 'none';
    liu_yan_shezhi_gn.style.display = 'none';
});
//全局左击事件
document.addEventListener('click', function () {
    liu_yan_sxuan_div.style.display = 'none';
    liu_yan_shezhi_gn.style.display = 'none';
});
//全局按键事件
var sf_shift = 0;
document.addEventListener('keydown', function (e) {
    if (liu_yan_srk_jc == '1' && e.shiftKey && e.key === 'Enter') {
        sf_shift = 1;
    }
    if (liu_yan_srk_jc == '1' && e.ctrlKey && e.key === 'Enter') {
        // e.preventDefault();
        // 执行shift+回车的逻辑
        var zfc = liu_yan_srk.value;
        var cswz = liu_yan_srk.selectionEnd;
        var zfc_x = insertStr(zfc, cswz, '<br>');
        liu_yan_srk.value = zfc_x;
        liu_yan_srk.focus();
        liu_yan_srk.selectionEnd = cswz + 4;

        sf_shift = 1;
    }
})
document.addEventListener('keyup', function (e) {
    if (nrmaxs2.style.display == 'block' && so_ssk_num == 0) {
        if (e.key == 'Enter' && sf_shift == 0) {
            liu_yan_button.click();

        } else if (e.key == 'Enter' && sf_shift == 1) {
            sf_shift = 0;
        }

        if (input_ji_ru_srk_bl == 1) {
            if (input_ji_ru_srk.value !== '') {
                i_liu_yan_ss_tp.click();
            } else {
                i_liu_yan_ss_tp.click();
                input_ji_ru_srk.focus();
            }
        }
        if (e.key == 'Enter' && input_ji_ru_srk_bl == 1 && sf_shift == 0) {
            liu_yan_srk.focus();
        } else if (e.key == 'Enter' && sf_shift == 1) {
            sf_shift = 0;
        }

        if (e.key == 'Escape' && nrmaxs2.style.display == 'block') {
            if (cmm_jc == 1) {
                cmm_jc = 0;
                liu_yan_button.innerHTML = '发送(E)';
                liu_yan_srk.value = '';
            }

            liu_yan_sxuan_zh.click();
        }
        if (e.ctrlKey && e.key == '/' && nrmaxs2.style.display == 'block') {
            input_ji_ru_srk.focus();
        }
        if (liu_yan_shezhi_gn.style.display == 'block' && e.key == 'F2') {
            liu_yan_shezhi_gn_cmm.click();
        }
        if (liu_yan_shezhi_gn.style.display == 'block' && e.key == 'Delete') {
            liu_yan_shezhi_gn_sc.click();
        }
        if (liu_yan_shezhi_gn.style.display == 'block' && e.key == 'Alt') {
            liu_yan_shezhi_gn_biaoji.click();
        }
    }
});
var tab_switch_debounce = Sku_jie_liu(() => {
    var liu_yan_sxuan_s = document.querySelectorAll('.liu_yan_sxuan_s');
    for (let i = 0; i < liu_yan_sxuan_s.length - 1; i++) {
        console.log(liu_yan_sxuan_s[i].style.color);
        if (liu_yan_sxuan_s[i].style.color) {
            if (i < 2) {
                liu_yan_sxuan_s[i + 1].click();
            } else {
                liu_yan_sxuan_s[0].click();
            }
            if (i == 2) {
                Sku_tctx('切换到 综合');
            } else if (i == 0) {
                Sku_tctx('切换到 未标记');
            } else {
                Sku_tctx('切换到 已标记');
            }
            break;
        }
    }
}, 100);
document.addEventListener('keydown', function (e) {
    if (e.key == 'Tab' && nrmaxs2.style.display == 'block' && so_ssk_num == 0) { // Tab切换筛选
        e.preventDefault();
        tab_switch_debounce();
    }
});