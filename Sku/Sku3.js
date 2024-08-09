nrmaxs2 = document.querySelector('.nrmaxs2');



// 匹配浏览器高度
liu_yan_mao_bo_li = document.querySelector('.liu_yan_mao_bo_li');
liu_yan = document.querySelector('.liu_yan');
liu_yan.style.marginTop = (window.innerHeight + 56 - 523 - 80) / 2 + 'px';
liu_yan_mao_bo_li.style.marginTop = (window.innerHeight + 56 - 523 - 80) / 2 + 'px';
liu_yan_sxuan_div = document.querySelector('.liu_yan_sxuan_div');
liu_yan_sxuan_div.style.marginTop = (window.innerHeight + 56 - 523 - 80) / 2 + 'px';
window.addEventListener('resize', function() {
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
            div.innerHTML = '<div class="liu_yan_z liu_yan_z2">' + liu_yan_dx['liu_yan_sz' + i][0] + '</div><div class="liu_yan_tx" style="background-image: url(' + localStorage.tou_xiang + ');"></div><div class="liu_yan_time">' + liu_yan_dx['liu_yan_sz' + i][1] + '</div>';
        } else if (liu_yan_dx['liu_yan_sz' + i][2] == 1) {
            div.innerHTML = '<div class="liu_yan_z" style="border-color:' + RGB_zhq(localStorage.zi_ti_click_color) + ';">' + liu_yan_dx['liu_yan_sz' + i][0] + '</div><div class="liu_yan_tx" style="background-image: url(' + localStorage.tou_xiang + ');"></div><div class="liu_yan_time">' + liu_yan_dx['liu_yan_sz' + i][1] + '</div>';
        }
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
        liu_yan_z[i].addEventListener('contextmenu', function(e) {
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
        });
    }
}
liu_yan_anniu_click();

//切换筛选样式
liu_yan_sxuan_s = document.querySelectorAll('.liu_yan_sxuan_s');
for (var i = 0; i < 3; i++) {
    liu_yan_sxuan_s[i].addEventListener('click', function() {
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
liu_yan_sxuan.addEventListener('click', function(e) {
    e.stopPropagation();
    liu_yan_sxuan_div.style.display = 'block';
});

//标记按钮click
liu_yan_sxuan_bj = document.querySelector('.liu_yan_sxuan_bj');
liu_yan_sxuan_bj.addEventListener('click', function() {
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
            div_1.innerHTML = '<div class="liu_yan_z" style="border-color:' + RGB_zhq(localStorage.zi_ti_click_color) + ';">' + liu_yan_dx['liu_yan_sz' + i][0] + '</div><div class="liu_yan_tx" style="background-image: url(' + localStorage.tou_xiang + ');"></div><div class="liu_yan_time">' + liu_yan_dx['liu_yan_sz' + i][1] + '</div>';
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
liu_yan_sxuan_wbj.addEventListener('click', function() {
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
            div_0.innerHTML = '<div class="liu_yan_z liu_yan_z2">' + liu_yan_dx['liu_yan_sz' + i][0] + '</div><div class="liu_yan_tx" style="background-image: url(' + localStorage.tou_xiang + ');"></div><div class="liu_yan_time">' + liu_yan_dx['liu_yan_sz' + i][1] + '</div>';
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
liu_yan_sxuan_zh.addEventListener('click', function() {
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
i_liu_yan_ss_tp.addEventListener('click', function() {
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
                    div.innerHTML = '<div class="liu_yan_z liu_yan_z2">' + liu_yan_dx['liu_yan_sz' + i][0] + '</div><div class="liu_yan_tx" style="background-image: url(' + localStorage.tou_xiang + ');"></div><div class="liu_yan_time">' + liu_yan_dx['liu_yan_sz' + i][1] + '</div>';
                } else if (liu_yan_dx['liu_yan_sz' + i][2] == 1) {
                    div.innerHTML = '<div class="liu_yan_z" style="border-color:' + RGB_zhq(localStorage.zi_ti_click_color) + ';">' + liu_yan_dx['liu_yan_sz' + i][0] + '</div><div class="liu_yan_tx" style="background-image: url(' + localStorage.tou_xiang + ');"></div><div class="liu_yan_time">' + liu_yan_dx['liu_yan_sz' + i][1] + '</div>';
                }
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
input_ji_ru_srk.addEventListener('focus', function() {
    input_ji_ru_srk_bl = 1;
    ji_ru_ssk_max.style.opacity = '1';
});
input_ji_ru_srk.addEventListener('blur', function() {
    input_ji_ru_srk_bl = 0;
    ji_ru_ssk_max.style.opacity = '0.2';
});

//输入框选择
liu_yan_bottom = document.querySelector('.liu_yan_bottom');
liu_yan_srk = document.querySelector('.liu_yan_srk');
liu_yan_bottom.addEventListener('click', function() {
    liu_yan_srk.focus();
});
//判断是否选中
liu_yan_srk_jc = 0;
liu_yan_srk.addEventListener('focus', function() {
    liu_yan_srk_jc = 1;
});
liu_yan_srk.addEventListener('blur', function() {
    liu_yan_srk_jc = 0;

    if (cmm_jc == 1) {
        cmm_jc = 0;
        liu_yan_button.innerHTML = '发送(S)';
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
liu_yan_button.addEventListener('click', function() {
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
        liu_yan_button.innerHTML = '发送(S)';
        liu_yan_srk.focus();
    } else {
        liu_yan_srk.focus();
    }
});

//标记按钮
liu_yan_top_min = document.querySelector('.liu_yan_top_min');
liu_yan_shezhi_gn_biaoji = document.querySelector('.liu_yan_shezhi_gn_biaoji');
liu_yan_shezhi_gn_biaoji.addEventListener('click', function() {
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
liu_yan_shezhi_gn_sc.addEventListener('click', function() {
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
        liu_yan_button.innerHTML = '发送(S)';
        liu_yan_srk.focus();
    }
});

//修改留言
liu_yan_z = document.querySelectorAll('.liu_yan_z');
liu_yan_button = document.querySelector('.liu_yan_button');
liu_yan_shezhi_gn_cmm = document.querySelector('.liu_yan_shezhi_gn_cmm');
liu_yan_shezhi_gn_cmm.addEventListener('click', function() {
    liu_yan_zhi_xian_jieting = liu_yan_zhi_xian;
    liu_yan_zhi_xian2_jieting = liu_yan_zhi_xian2;
    liu_yan_dx = JSON.parse(localStorage.liu_yan_dx);
    cmm_jc = 1;
    liu_yan_button.innerHTML = '确定(S)';
    liu_yan_srk.value = liu_yan_dx['liu_yan_sz' + liu_yan_zhi_xian][0];
    liu_yan_srk.focus();

    document.addEventListener('keyup', function() {
        if (cmm_jc == 1) {
            //修改内存
            liu_yan_dx['liu_yan_sz' + liu_yan_zhi_xian_jieting][0] = liu_yan_srk.value;
            localStorage.liu_yan_dx = JSON.stringify(liu_yan_dx);
            //修改HTML
            liu_yan_z[liu_yan_zhi_xian2_jieting].innerHTML = liu_yan_srk.value;
        }
    });
});

//删除所有
var liu_yan_scsy = document.querySelector('.liu_yan_scsy');
liu_yan_top = document.querySelector('.liu_yan_top');
liu_yan_top_min = document.querySelector('.liu_yan_top_min');
liu_yan_sxuan_sc = document.querySelector('.liu_yan_sxuan_sc');
liu_yan_sxuan_sc.addEventListener('click', function() {
    liu_yan_scsy.style.display = 'block';
});
var liu_yan_scsy_qr = document.querySelector('.liu_yan_scsy_qr');
var liu_yan_scsy_qx = document.querySelector('.liu_yan_scsy_qx');
liu_yan_scsy_qr.addEventListener('click', function() {
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
liu_yan_scsy_qx.addEventListener('click', function(e) {
    liu_yan_scsy.style.display = 'none';
});





//快速编程
i_liu_yan_tpbc_tp = document.querySelector('.i_liu_yan_tpbc_tp');
i_liu_yan_spbc_tp = document.querySelector('.i_liu_yan_spbc_tp');
i_liu_yan_yybc_tp = document.querySelector('.i_liu_yan_yybc_tp');
i_liu_yan_ljbc_tp = document.querySelector('.i_liu_yan_ljbc_tp');
i_liu_yan_wzbc_tp = document.querySelector('.i_liu_yan_wzbc_tp');
//字符串指定添加脚本
function insertStr(source, start, newStr) {
    return source.slice(0, start) + newStr + source.slice(start)
}
//图片快速添加
i_liu_yan_tpbc_tp.addEventListener('click', function() {
    var zfc = liu_yan_srk.value;
    var cswz = liu_yan_srk.selectionEnd;
    var zfc_x = insertStr(zfc, cswz, '<img src="" width="" height="" loading="lazy">');
    liu_yan_srk.value = zfc_x;
    liu_yan_srk.focus();
    liu_yan_srk.setSelectionRange(cswz + 10, cswz + 10);
});
//视频快速添加
i_liu_yan_spbc_tp.addEventListener('click', function() {
    var zfc = liu_yan_srk.value;
    var cswz = liu_yan_srk.selectionEnd;
    var zfc_x = insertStr(zfc, cswz, '<video src="" width="" height="" controls></video>');
    liu_yan_srk.value = zfc_x;
    liu_yan_srk.focus();
    liu_yan_srk.setSelectionRange(cswz + 12, cswz + 12);
});
//音乐快速添加
i_liu_yan_yybc_tp.addEventListener('click', function() {
    var zfc = liu_yan_srk.value;
    var cswz = liu_yan_srk.selectionEnd;
    var zfc_x = insertStr(zfc, cswz, '<audio src="" controls></audio>');
    liu_yan_srk.value = zfc_x;
    liu_yan_srk.focus();
    liu_yan_srk.setSelectionRange(cswz + 12, cswz + 12);
});
//链接快速添加
i_liu_yan_ljbc_tp.addEventListener('click', function() {
    var zfc = liu_yan_srk.value;
    var cswz = liu_yan_srk.selectionEnd;
    var zfc_x = insertStr(zfc, cswz, '<a href="" target="_blank"></a>');
    liu_yan_srk.value = zfc_x;
    liu_yan_srk.focus();
    liu_yan_srk.setSelectionRange(cswz + 9, cswz + 9);
});
//网站快速添加
i_liu_yan_wzbc_tp.addEventListener('click', function() {
    var zfc = liu_yan_srk.value;
    var cswz = liu_yan_srk.selectionEnd;
    var zfc_x = insertStr(zfc, cswz, '<div class="irm"><iframe src="" frameborder="0"></iframe></div>');
    liu_yan_srk.value = zfc_x;
    liu_yan_srk.focus();
    liu_yan_srk.setSelectionRange(cswz + 30, cswz + 30);
});







liu_yan_srk.addEventListener('keydown', function(e) {
    var sf_shift2 = 0;
    if (e.shiftKey) {
        sf_shift2 = 1;
    }
    // 检查是否按下了Shift键和Enter键
    if (sf_shift2 == 0 && e.key == 'Enter') {
        // 阻止默认行为
        e.preventDefault();
    }
});







// 拖拽读取导入信息
liu_yan.addEventListener('dragover', function(e) {
    e.preventDefault();
});
liu_yan.addEventListener('drop', function(e) {
    e.preventDefault();
    var dt = e.dataTransfer;
    var files = dt.files;
    var dx = new FileReader();
    dx.readAsText(files[0]);
    dx.onload = function(e) {
        var wj = e.target.result;
        // 处理信息
        liu_yan_srk.value = wj;
        liu_yan_button.click();
    }
});






// 滚动条
Sku_gundontiao('.liu_yan_top', '.liuyan_gundontiao_max', '.liuyan_gundontiao_min');





//全局右击事件
document.addEventListener('contextmenu', function() {
    liu_yan_sxuan_div.style.display = 'none';
    liu_yan_shezhi_gn.style.display = 'none';
});
//全局左击事件
document.addEventListener('click', function() {
    liu_yan_sxuan_div.style.display = 'none';
    liu_yan_shezhi_gn.style.display = 'none';
});
//全局按键事件
var sf_shift = 0;
document.addEventListener('keydown', function(e) {
    if (liu_yan_srk_jc == '1' && e.shiftKey && e.key === 'Enter') {
        // e.preventDefault();
        // 执行shift+回车的逻辑
        // var zfc = liu_yan_srk.value;
        // var cswz = liu_yan_srk.selectionEnd;
        // var zfc_x = insertStr(zfc, cswz, '<br>');
        // liu_yan_srk.value = zfc_x;
        // liu_yan_srk.focus();
        // liu_yan_srk.selectionEnd = cswz + 4;

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
    if (liu_yan_srk_jc == '1' && e.ctrlKey && e.key === 'a') {
        liu_yan_srk.select();
    }
})
document.addEventListener('keyup', function(e) {
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
                liu_yan_button.innerHTML = '发送(S)';
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