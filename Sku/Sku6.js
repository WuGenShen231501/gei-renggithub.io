// 开始
var xg = document.querySelector('.top_dhl').querySelectorAll('div')[5];
xg.addEventListener('click', function(e) {
    daka_shuchu();
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
daka_quanpin_anniu.addEventListener('click', function(e) {
    if (localStorage.daka_qp == 0) {
        localStorage.daka_qp = 1;
        daka_max.classList.add('daka_max2');
    } else {
        localStorage.daka_qp = 0;
        daka_max.classList.remove('daka_max2');
    }
});




//全部和今日和成就切换
var daka_qh_tp = document.querySelector('.daka_qh_tp');
var daka_qiehuan_anniu = document.querySelector(".daka_qiehuan_anniu");
if (localStorage.daka_qb_jr == undefined) {
    localStorage.daka_qb_jr = '全部';
}
if (localStorage.daka_qb_jr == '全部') {
    daka_qh_tp.classList.add('icon-suoyou');
} else if (localStorage.daka_qb_jr == '今日') {
    daka_qh_tp.classList.add('icon-jintian');
} else if (localStorage.daka_qb_jr == '成就') {
    daka_qh_tp.classList.add('icon-jiangpin01-L');
}
daka_qiehuan_anniu.addEventListener('click', function(e) {
    if (localStorage.daka_qb_jr == '成就') {
        localStorage.daka_qb_jr = '今日';
        daka_qh_tp.classList.remove('icon-jiangpin01-L');
        daka_qh_tp.classList.add('icon-jintian');
    } else if (localStorage.daka_qb_jr == '今日') {
        localStorage.daka_qb_jr = '全部';
        daka_qh_tp.classList.remove('icon-jintian');
        daka_qh_tp.classList.add('icon-suoyou');
    } else if (localStorage.daka_qb_jr == '全部') {
        localStorage.daka_qb_jr = '成就';
        daka_qh_tp.classList.remove('icon-suoyou');
        daka_qh_tp.classList.add('icon-jiangpin01-L');
    }
    daka_shuchu();
})



//打开打卡添加页面
var daka_tianjia_ym = document.querySelector('.daka_tianjia_ym');
var daka_tianjia_anniu = document.querySelector('.daka_tianjia_anniu');
daka_tianjia_anniu.addEventListener('click', function(e) {
    e.stopPropagation();
    daka_tianjia_ym.style.display = 'block';
    var daka_tianjia_tx_srk = document.querySelector('.daka_tianjia_tx_srk');
    daka_tianjia_tx_srk.focus();
    var daka_tianjia_ksrq_nian = document.querySelector('.daka_tianjia_ksrq_nian');
    var daka_tianjia_ksrq_yue = document.querySelector('.daka_tianjia_ksrq_yue');
    var daka_tianjia_ksrq_ri = document.querySelector('.daka_tianjia_ksrq_ri');
    daka_tianjia_ksrq_nian.value = new Date().getFullYear();
    daka_tianjia_ksrq_yue.value = new Date().getMonth() + 1;
    daka_tianjia_ksrq_ri.value = new Date().getDate();
    var daka_tianjia_jcts_srk = document.querySelector('.daka_tianjia_jcts_srk');
    daka_tianjia_jcts_srk.value = 36500;
});
document.addEventListener('click', function(e) {
    if (daka_tianjia_ym.style.display !== 'none') {
        daka_tianjia_ym_huanyuan();
    }
});
// 打卡添加页面还原
function daka_tianjia_ym_huanyuan() {
    daka_tianjia_ym.style.display = 'none';
    var daka_tianjia_tx = document.querySelector('.daka_tianjia_tx');
    var daka_tianjia_tx_srk = document.querySelector('.daka_tianjia_tx_srk');
    daka_tianjia_tx.style.backgroundImage = 'url()';
    daka_tianjia_tx_srk.value = '';
    var daka_tianjia_pl_srk = document.querySelector('.daka_tianjia_pl_srk');
    daka_tianjia_pl_srk.style.border = '1px solid var(--zi_ti_color_50)';
    var daka_tianjia_pl_ym = document.querySelector('.daka_tianjia_pl_ym');
    daka_tianjia_pl_ym.style.display = 'none';
    daka_tianjia_pl_duixian = [1, [1, 1, 1, 1, 1, 1, 1], 1, 2];
    var daka_tianjia_mc_srk = document.querySelector('.daka_tianjia_mc_srk');
    daka_tianjia_mc_srk.value = '';
    var daka_tianjia_pl_srk = document.querySelector('.daka_tianjia_pl_srk');
    daka_tianjia_pl_srk.innerHTML = '点击选择';
    daka_tianjia_pl_srk.style.color = 'var(--zi_ti_color_50)';
    var daka_tianjia_ksrq_max = document.querySelector('.daka_tianjia_ksrq_max');
    daka_tianjia_ksrq_max.style.border = '1px solid var(--zi_ti_color_50)';
    var daka_tianjia_jcts_max = document.querySelector('.daka_tianjia_jcts_max');
    daka_tianjia_jcts_max.style.border = '1px solid var(--zi_ti_color_50)';
}
daka_tianjia_ym.addEventListener('click', function(e) {
    e.stopPropagation();
    var daka_tianjia_pl_srk = document.querySelector('.daka_tianjia_pl_srk');
    daka_tianjia_pl_srk.style.border = '1px solid var(--zi_ti_color_50)';
    var daka_tianjia_pl_ym = document.querySelector('.daka_tianjia_pl_ym');
    daka_tianjia_pl_ym.style.display = 'none';
    var daka_tianjia_ksrq_max = document.querySelector('.daka_tianjia_ksrq_max');
    daka_tianjia_ksrq_max.style.border = '1px solid var(--zi_ti_color_50)';
    var daka_tianjia_jcts_max = document.querySelector('.daka_tianjia_jcts_max');
    daka_tianjia_jcts_max.style.border = '1px solid var(--zi_ti_color_50)';
});



//打卡添加样式
var daka_tianjia_tx = document.querySelector('.daka_tianjia_tx');
var daka_tianjia_tx_srk = document.querySelector('.daka_tianjia_tx_srk');
daka_tianjia_tx_srk.addEventListener('input', function(e) {
    daka_tianjia_tx.style.backgroundImage = 'url(' + daka_tianjia_tx_srk.value + ')';
});
var daka_tianjia_pl_ym = document.querySelector('.daka_tianjia_pl_ym');
var daka_tianjia_pl_srk = document.querySelector('.daka_tianjia_pl_srk');
daka_tianjia_pl_srk.addEventListener('click', function(e) {
    e.stopPropagation();
    daka_tianjia_pl_srk.style.border = '1px solid var(--zi_ti_color)';
    daka_tianjia_pl_ym.style.display = 'block';
    daka_tianjia_pl_ym_xlhs();
    var daka_tianjia_ksrq_max = document.querySelector('.daka_tianjia_ksrq_max');
    daka_tianjia_ksrq_max.style.border = '1px solid var(--zi_ti_color_50)';
    var daka_tianjia_jcts_max = document.querySelector('.daka_tianjia_jcts_max');
    daka_tianjia_jcts_max.style.border = '1px solid var(--zi_ti_color_50)';
});

function daka_tianjia_pl_ym_xlhs() {
    var daka_tianjia_pl_ans = document.querySelectorAll('.daka_tianjia_pl_ans');
    var daka_tianjia_pl_yms = document.querySelectorAll('.daka_tianjia_pl_yms');
    for (let o = 0; o < daka_tianjia_pl_ans.length; o++) {
        if ((o - 0 + 1) == daka_tianjia_pl_duixian[0]) {
            daka_tianjia_pl_ans[o].style.backgroundColor = 'var(--zi_ti_color_20)';
            daka_tianjia_pl_yms[o].style.display = 'block';
            if ((o - 0 + 1) == 1) {
                var daka_tianjia_pl_ym_top_antian_ss = document.querySelectorAll('.daka_tianjia_pl_ym_top_antian_ss');
                for (var i = 0; i < daka_tianjia_pl_duixian[1].length; i++) {
                    if (daka_tianjia_pl_duixian[1][i] !== 0) {
                        daka_tianjia_pl_ym_top_antian_ss[i].style.backgroundColor = 'var(--zi_ti_color_20)';
                    } else {
                        daka_tianjia_pl_ym_top_antian_ss[i].style.backgroundColor = '';
                    }
                }
            } else if ((o - 0 + 1) == 2) {
                var daka_tianjia_pl_ym_top_antian_ym_zzxt = document.querySelectorAll('.daka_tianjia_pl_ym_top_antian_ym_zzxt');
                var daka_tianjia_pl_ym_top_anz_ss = document.querySelectorAll('.daka_tianjia_pl_ym_top_anz_ss');
                for (let i = 0; i < daka_tianjia_pl_ym_top_anz_ss.length; i++) {
                    if (daka_tianjia_pl_duixian[2] == (i - 0 + 1)) {
                        daka_tianjia_pl_ym_top_anz_ss[i].style.backgroundColor = 'var(--zi_ti_color_20)';
                        daka_tianjia_pl_ym_top_antian_ym_zzxt[1].innerHTML = '每周 ' + (i - 0 + 1) + ' 次';
                    } else {
                        daka_tianjia_pl_ym_top_anz_ss[i].style.backgroundColor = '';
                    }
                }
            } else if ((o - 0 + 1) == 3) {
                var daka_tianjia_pl_ym_top_ansjjg_ym_t = document.querySelector('.daka_tianjia_pl_ym_top_ansjjg_ym_t');
                daka_tianjia_pl_ym_top_ansjjg_ym_t.value = daka_tianjia_pl_duixian[3];
            }
        } else {
            daka_tianjia_pl_ans[o].style.backgroundColor = '';
            daka_tianjia_pl_yms[o].style.display = 'none';
        }
    }
}
daka_tianjia_pl_ym.addEventListener('click', function(e) {
    e.stopPropagation();
})
var daka_tianjia_pl_duixian = [1, [1, 1, 1, 1, 1, 1, 1], 1, 2];
var daka_tianjia_pl_ans = document.querySelectorAll('.daka_tianjia_pl_ans');
var daka_tianjia_pl_yms = document.querySelectorAll('.daka_tianjia_pl_yms');
for (let i = 0; i < daka_tianjia_pl_ans.length; i++) {
    daka_tianjia_pl_ans[i].addEventListener('click', function(e) {
        daka_tianjia_pl_duixian[0] = i + 1;
        daka_tianjia_pl_ym_xlhs();
    })
}
var daka_tianjia_pl_ym_top_antian_ss = document.querySelectorAll('.daka_tianjia_pl_ym_top_antian_ss');
for (let i = 0; i < daka_tianjia_pl_ym_top_antian_ss.length; i++) {
    daka_tianjia_pl_ym_top_antian_ss[i].addEventListener('click', function(e) {
        if (daka_tianjia_pl_duixian[1][i] == 0) {
            daka_tianjia_pl_duixian[1][i] = 1;
            daka_tianjia_pl_ym_xlhs();
        } else {
            daka_tianjia_pl_duixian[1][i] = 0;
            daka_tianjia_pl_ym_xlhs();
        }
    })
}
var daka_tianjia_pl_ym_top_anz_ss = document.querySelectorAll('.daka_tianjia_pl_ym_top_anz_ss');
for (let i = 0; i < daka_tianjia_pl_ym_top_anz_ss.length; i++) {
    daka_tianjia_pl_ym_top_anz_ss[i].addEventListener('click', function(e) {
        daka_tianjia_pl_duixian[2] = i + 1;
        daka_tianjia_pl_ym_xlhs();
    })
}
var daka_tianjia_pl_ym_top_ansjjg_ym_t = document.querySelector('.daka_tianjia_pl_ym_top_ansjjg_ym_t');
daka_tianjia_pl_ym_top_ansjjg_ym_t.addEventListener('input', function(e) {
    daka_tianjia_pl_duixian[3] = daka_tianjia_pl_ym_top_ansjjg_ym_t.value;
})
daka_tianjia_pl_ym_top_ansjjg_ym_t.addEventListener('blur', function(e) {
    if (daka_tianjia_pl_ym_top_ansjjg_ym_t.value == '' || daka_tianjia_pl_ym_top_ansjjg_ym_t.value < 1) {
        daka_tianjia_pl_ym_top_ansjjg_ym_t.value = 1;
        daka_tianjia_pl_duixian[3] = daka_tianjia_pl_ym_top_ansjjg_ym_t.value;
    }
});
var daka_tianjia_pl_srk = document.querySelector('.daka_tianjia_pl_srk');
var daka_tianjia_pl_ym_qd = document.querySelector('.daka_tianjia_pl_ym_qd');
daka_tianjia_pl_ym_qd.addEventListener('click', function(e) {
    if (daka_tianjia_pl_duixian[0] == 1) {
        let daka_tianjia_pl_duixian_1 = 0;
        for (let i = 0; i < daka_tianjia_pl_duixian[1].length; i++) {
            if (daka_tianjia_pl_duixian[1][i] == 1) {
                daka_tianjia_pl_duixian_1++;
            }
        }
        if (daka_tianjia_pl_duixian_1 == 7) {
            daka_tianjia_pl_srk.innerHTML = '每天';
        } else {
            let weekDays = ['周一', '周二', '周三', '周四', '周五', '周六', '周日'];
            let selectedDays = [];
            for (let i = 0; i < daka_tianjia_pl_duixian[1].length; i++) {
                if (daka_tianjia_pl_duixian[1][i] == 1) {
                    selectedDays.push(weekDays[i]);
                }
            }
            daka_tianjia_pl_srk.innerHTML = selectedDays.join('、');
        }
    } else if (daka_tianjia_pl_duixian[0] == 2) {
        daka_tianjia_pl_srk.innerHTML = '每周 ' + daka_tianjia_pl_duixian[2] + ' 次';
    } else if (daka_tianjia_pl_duixian[0] == 3) {
        if (daka_tianjia_pl_duixian[3] == 1) {
            daka_tianjia_pl_srk.innerHTML = '每天';
        } else {
            daka_tianjia_pl_srk.innerHTML = '每隔 ' + daka_tianjia_pl_duixian[3] + ' 天';
        }
    }
    daka_tianjia_pl_srk.style.color = 'var(--zi_ti_color)';
    daka_tianjia_pl_ym.style.display = 'none';
})
var daka_tianjia_ksrq_max_input = document.querySelector('.daka_tianjia_ksrq_max').querySelectorAll('input');
daka_tianjia_ksrq_max_input[0].addEventListener('blur', function(e) {
    if (this.value < 2003) {
        this.value = 2003;
    }
})
daka_tianjia_ksrq_max_input[1].addEventListener('blur', function(e) {
    if (this.value < 1) {
        this.value = 1;
    } else
    if (this.value > 12) {
        this.value = 12;
    }
})
daka_tianjia_ksrq_max_input[2].addEventListener('blur', function(e) {
    if (this.value < 1) {
        this.value = 1;
    } else if (this.value > 31) {
        this.value = 31;
    }
})
var daka_tianjia_ksrq_max = document.querySelector('.daka_tianjia_ksrq_max');
daka_tianjia_ksrq_max.addEventListener('click', function(e) {
    e.stopPropagation();
    daka_tianjia_ksrq_max.style.border = '1px solid var(--zi_ti_color)';
    var daka_tianjia_pl_srk = document.querySelector('.daka_tianjia_pl_srk');
    daka_tianjia_pl_srk.style.border = '1px solid var(--zi_ti_color_50)';
    var daka_tianjia_jcts_max = document.querySelector('.daka_tianjia_jcts_max');
    daka_tianjia_jcts_max.style.border = '1px solid var(--zi_ti_color_50)';
});
var daka_tianjia_jcts_max = document.querySelector('.daka_tianjia_jcts_max');
daka_tianjia_jcts_max.addEventListener('click', function(e) {
    e.stopPropagation();
    daka_tianjia_jcts_max.style.border = '1px solid var(--zi_ti_color)';
    var daka_tianjia_pl_srk = document.querySelector('.daka_tianjia_pl_srk');
    daka_tianjia_pl_srk.style.border = '1px solid var(--zi_ti_color_50)';
    var daka_tianjia_ksrq_max = document.querySelector('.daka_tianjia_ksrq_max');
    daka_tianjia_ksrq_max.style.border = '1px solid var(--zi_ti_color_50)';
});
var daka_tianjia_jcts_srk = document.querySelector('.daka_tianjia_jcts_srk');
daka_tianjia_jcts_srk.addEventListener('blur', function(e) {
    if (this.value < 7) {
        this.value = 7;
    } else if (this.value > 36500) {
        this.value = 36500;
    }
});




// 添加打卡按钮
var daka_tianjia_qd = document.querySelector('.daka_tianjia_qd');
daka_tianjia_qd.addEventListener('click', function(e) {
    var daka_tianjia_tx_srk = document.querySelector('.daka_tianjia_tx_srk');
    var daka_tianjia_mc_srk = document.querySelector('.daka_tianjia_mc_srk');
    var daka_tianjia_pl_srk = document.querySelector('.daka_tianjia_pl_srk');
    var daka_tianjia_ksrq_nian = document.querySelector('.daka_tianjia_ksrq_nian');
    var daka_tianjia_ksrq_yue = document.querySelector('.daka_tianjia_ksrq_yue');
    var daka_tianjia_ksrq_ri = document.querySelector('.daka_tianjia_ksrq_ri');
    var daka_tianjia_jcts_srk = document.querySelector('.daka_tianjia_jcts_srk');

    if (daka_tianjia_tx_srk.value !== '' && daka_tianjia_mc_srk.value !== '' && daka_tianjia_pl_srk.innerHTML !== '点击选择') {
        var da_ka = JSON.parse(localStorage.da_ka);
        let da_ka_tj = [];
        da_ka_tj[0] = daka_tianjia_tx_srk.value;
        da_ka_tj[1] = daka_tianjia_mc_srk.value;
        da_ka_tj[2] = daka_tianjia_pl_srk.innerText;
        // 创建日期对象并设置为当天凌晨0点
        const date = new Date(
            daka_tianjia_ksrq_nian.value,
            daka_tianjia_ksrq_yue.value - 1,
            daka_tianjia_ksrq_ri.value,
            0, 0, 0, 0
        );
        da_ka_tj[3] = date.getTime();
        da_ka_tj[4] = daka_tianjia_jcts_srk.value - 0;
        da_ka_tj[5] = [];
        da_ka_tj[6] = [];
        da_ka.push(da_ka_tj);
        localStorage.da_ka = JSON.stringify(da_ka);
        Sku_tctx('习惯添加:' + daka_tianjia_mc_srk.value);
        daka_shuchu();
        daka_tianjia_ym_huanyuan();
    } else {
        Sku_tctx('请填写完整信息');
    }
})




// 输出打卡列表
function daka_shuchu(dh_true) {
    // 是否需要动画
    var dh_trues = (dh_true !== undefined) ? dh_true : true;

    var daka_l_bot = document.querySelector('.daka_l_bot');
    daka_l_bot.innerHTML = '';
    var da_ka_max_gs = -1;

    var da_ka_wdk = []; // 今日未打卡
    var da_ka_xydk = []; // 今日已打卡
    var da_ka_wxdk = []; // 今日无需打卡
    var da_ka_ywc = []; // 已完成

    // 判断存放在哪个数组中
    var da_ka = JSON.parse(localStorage.da_ka);
    for (let index = 0; index < da_ka.length; index++) {
        daka_shuchu_pd(da_ka[index], index);
    }

    // 判断存放在哪个数组中的函数
    function daka_shuchu_pd(da_ka_dx, index) {
        var daka_ksrq = new Date(da_ka_dx[3]); // 开始日期时间戳
        var daka_dkpl = da_ka_dx[2]; // 打卡周期
        var daka_jcts = da_ka_dx[4]; // 持续时间
        var daka_dksj = da_ka_dx[5]; // 已经打卡的时间戳

        // 获取今天的日期(凌晨0点)
        var today = new Date();
        today.setHours(0, 0, 0, 0);

        // 检查是否在有效期内
        var endDate = new Date(daka_ksrq.getTime() + (daka_jcts * 24 * 60 * 60 * 1000));
        if (today < daka_ksrq || today > endDate) {
            da_ka_ywc.push(index); // 已完成
            return;
        }

        // 检查今天是否已经打卡
        for (let i = 0; i < daka_dksj.length; i++) {
            var checkDate = new Date(daka_dksj[i]);
            checkDate.setHours(0, 0, 0, 0);
            if (checkDate.getTime() === today.getTime()) {
                da_ka_xydk.push(index); // 今日已打卡
                return;
            }
        }

        // 检查今天是否需要打卡
        var needCheckToday = false;
        if (daka_dkpl === '每天') {
            needCheckToday = true;
        } else if (daka_dkpl.startsWith('每周')) {
            var timesPerWeek = parseInt(daka_dkpl.match(/\d+/)[0]);

            // 计算本周已打卡次数
            var currentWeekCheckCount = 0;
            var currentWeekStart = new Date(today);
            // 将周一作为一周的第一天
            currentWeekStart.setDate(today.getDate() - (today.getDay() === 0 ? 6 : today.getDay() - 1));
            currentWeekStart.setHours(0, 0, 0, 0);

            for (let i = 0; i < daka_dksj.length; i++) {
                var checkDate = new Date(daka_dksj[i]);
                checkDate.setHours(0, 0, 0, 0);
                // 检查是否在本周内
                if (checkDate >= currentWeekStart && checkDate <= today) {
                    currentWeekCheckCount++;
                }
            }

            // 如果本周打卡次数未达到要求，则需要打卡
            needCheckToday = currentWeekCheckCount < timesPerWeek;
        } else if (daka_dkpl.startsWith('每隔')) {
            var daysInterval = parseInt(daka_dkpl.match(/\d+/)[0]);
            var daysPassed = Math.floor((today - daka_ksrq) / (24 * 60 * 60 * 1000));
            needCheckToday = (daysPassed % daysInterval === 0);
        } else if (daka_dkpl.includes('周')) {
            var weekDays = ['周一', '周二', '周三', '周四', '周五', '周六', '周日'];
            var todayWeekDay = weekDays[today.getDay() === 0 ? 6 : today.getDay() - 1];

            needCheckToday = daka_dkpl.includes(todayWeekDay);
        }

        if (needCheckToday) {
            da_ka_wdk.push(index); // 今日未打卡
        } else {
            da_ka_wxdk.push(index); // 今日无需打卡
        }
    }

    // 顺序输出打卡
    if (localStorage.daka_qb_jr == '成就') {
        for (let i = 0; i < da_ka_ywc.length; i++) { //第四输出
            daka_shuchu2(da_ka_ywc[i], '已完成');
        }
    } else {
        for (let i = 0; i < da_ka_wdk.length; i++) { //第一输出
            daka_shuchu2(da_ka_wdk[i], '今日未打卡');
        }
        for (let i = 0; i < da_ka_xydk.length; i++) { //第二输出
            daka_shuchu2(da_ka_xydk[i], '今日已打卡');
        }
        if (localStorage.daka_qb_jr == '全部') {
            for (let i = 0; i < da_ka_wxdk.length; i++) { //第三输出
                daka_shuchu2(da_ka_wxdk[i], '今日无需打卡');
            }
        }
    }

    // 输出打卡函数
    function daka_shuchu2(id, liebie) {
        var da_ka = JSON.parse(localStorage.da_ka);
        da_ka_max_gs++;
        var da_ka_max = document.createElement('div');

        da_ka_max.style.setProperty('--delay-index', da_ka_max_gs);
        if (dh_trues) {
            da_ka_max.classList.add('daka_s_max');
        } else {
            da_ka_max.classList.add('daka_s_max_no_dh');
        }
        da_ka_max.setAttribute('data_num', id);
        var da_ka_jisuan_s = '✔ ' + da_ka[id][5].length + '🔥 ';
        var da_ka_pl_s = da_ka[id][2] + ' | ' + new Date(da_ka[id][3]).getFullYear() + '年' + new Date(da_ka[id][3]).getMonth() + 1 + '月' + new Date(da_ka[id][3]).getDate() + '日 - ' + new Date(da_ka[id][3] + da_ka[id][4] * 24 * 60 * 60 * 1000).getFullYear() + '年' + new Date(da_ka[id][3] + da_ka[id][4] * 24 * 60 * 60 * 1000).getMonth() + 1 + '月' + new Date(da_ka[id][3] + da_ka[id][4] * 24 * 60 * 60 * 1000).getDate() + '日';
        var da_ka_zt_s = '';
        var da_ka_ztwz_s = '';
        if (liebie == '今日已打卡') {
            da_ka_zt_s = 'daka_s_qd_dkcg';
            da_ka_ztwz_s = '✔';
        } else if (liebie == '今日未打卡') {
            da_ka_zt_s = 'daka_s_qd_dk';
            da_ka_ztwz_s = '';
        } else if (liebie == '今日无需打卡') {
            da_ka_zt_s = 'daka_s_qd_wxdk';
            da_ka_ztwz_s = '今日无需打卡';
        } else if (liebie == '已完成') {
            da_ka_zt_s = '';
            da_ka_ztwz_s = '';
        }
        da_ka_max.innerHTML = '<div class="daka_s_min"><div class="daka_s_tx" style="background-image:url(' + ((da_ka[id][0].startsWith("http") || da_ka[id][0].startsWith("data")) ? da_ka[id][0] : '') + ');">' + ((da_ka[id][0].startsWith("http") || da_ka[id][0].startsWith("data")) ? '' : da_ka[id][0]) + '</div><div class="daka_s_wzts_max"><div class="daka_s_wz">' + da_ka[id][1] + ' ' + da_ka_jisuan_s + '</div><div class="daka_s_ts">' + da_ka_pl_s + '</div></div><div class="' + da_ka_zt_s + '">' + da_ka_ztwz_s + '</div></div>';

        daka_l_bot.appendChild(da_ka_max);
    }

}
daka_shuchu();




// 打卡咯
var daka_l_bot = document.querySelector('.daka_l_bot');
daka_l_bot.addEventListener('click', function(e) {
    if (e.target.classList.contains('daka_s_qd_dk')) {
        var da_ka = JSON.parse(localStorage.da_ka);
        var da_ka_zhixian = e.target.parentNode.parentNode.getAttribute('data_num')
        console.log('指向: ' + da_ka_zhixian);
        da_ka[da_ka_zhixian][5].push(new Date().getTime());
        localStorage.da_ka = JSON.stringify(da_ka);
        Sku_tctx('打卡完成: ' + da_ka[da_ka_zhixian][1]);
        e.target.style.animation = 'daka_qr_dh 0.5s';
        setTimeout(function() {
            e.target.innerText = '✔';
            e.target.className = 'daka_s_qd_dkcg';
        }, 250);
    }
});