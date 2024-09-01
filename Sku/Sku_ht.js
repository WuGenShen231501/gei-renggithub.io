//检测是否第一次使用
var ban_ben_s = 'v45.35.4';
if (localStorage.ban_ben) {
    //检查是否最新
    if (localStorage.ban_ben !== ban_ben_s) {
        localStorage.ban_ben = ban_ben_s;
        console.log('版本以更新为 ' + ban_ben_s);
    }
} else {
    //删除所有内存
    console.log('欢迎使用最新版本 ' + ban_ben_s);
    //制定版本
    localStorage.ban_ben = ban_ben_s;
}



// 导航栏
if (localStorage.dhr_sz == undefined) {
    localStorage.dhr_sz = JSON.stringify(["学习", "娱乐", "个人", "AI大模型"]);
}
//导航栏页面
if (localStorage.dhr_ym_dx == undefined) {
    var dhr_ym_dx = {
        "dhr_ym_dx0": {
            "dhr_ym_sz0": ["https://developer.mozilla.org/apple-touch-icon.6803c6f0.png", "MDN", "Web", "https://developer.mozilla.org/zh-CN/#"],
            "dhr_ym_sz1": ["http://common.cnblogs.com/favicon.svg", "博客园", "Web", "https://www.cnblogs.com/"],
            "dhr_ym_sz2": ["https://static.runoob.com/images/icon/mobile-icon.png", "菜鸟教程", "Web", "https://www.runoob.com/"],
            "dhr_ym_sz3": ["https://g.csdnimg.cn/static/logo/favicon32.ico", "CSDN", "CSDN - 专业开发者社区", "https://www.csdn.net/"],
            "dhr_ym_sz4": ["https://www.w3school.com.cn/ui2019/logo-96-red.png", "W3school", "w3school 在线教程", "https://www.w3school.com.cn/"],
            "dhr_ym_sz5": ["http://static.hdslb.com/mobile/img/512.png", "jQuery", "jQuery 第一集", "https://www.bilibili.com/video/BV1Sy4y1C7ha/?p=358&spm_id_from=pageDriver&vd_source=f3ca2a0fe02a1e088d04e020f7bd5583"],
            "dhr_ym_sz6": ["https://static.hdslb.com/images/favicon.ico", "Web前端学习路线", "2023年Web前端开发学习路线图", "https://www.bilibili.com/read/cv10431130"],
            "dhr_ym_sz7": ["https://wangchujiang.com/linux-command/img/favicon.ico", "Linux命令搜索引擎", "添加命令 | 命令列表 | Chrome 插件 | Alfred | Dash | Krunner | 开源中国Web版", "https://wangchujiang.com/linux-command/"]
        },
        "dhr_ym_dx1": {
            "dhr_ym_sz0": ["https://i-1.cncrk.com/2022/3/3/836589de-b06d-4af1-9a1a-014c0923d00b.jpg", "抖音", "记录美好生活", "https://www.douyin.com/", "https://www.douyin.com/download/pc/obj/douyin-pc-client/7044145585217083655/releases/9818478/1.8.0/win32-ia32/douyin-v1.8.0-win32-ia32-douyinDownload1.exe"],
            "dhr_ym_sz1": ["http://static.hdslb.com/mobile/img/512.png", "哔哩哔哩", "官网", "https://www.bilibili.com/", "https://app.bilibili.com/?spm_id_from=333.1007.0.0"],
            "dhr_ym_sz2": ["https://store.steampowered.com/favicon.ico", "STEAM", "欢迎来到 Steam 官网", "https://store.steampowered.com/", "https://store.steampowered.com/about/"]
        },
        "dhr_ym_dx2": {
            "dhr_ym_sz0": ["https://img1.baidu.com/it/u=1989144613,149585719&fm=253&fmt=auto&app=138&f=JPG?w=500&h=500", "QQ空间", "官网", "https://i.qq.com/"],
            "dhr_ym_sz1": ["https://mail.qq.com/zh_CN/htmledition/images/favicon/qqmail_favicon_96h.png", "QQ邮箱", "腾讯qq邮箱", "https://mail.qq.com"],
            "dhr_ym_sz2": ["https://ts2.cn.mm.bing.net/th?id=ODLS.f9daea21-9936-4164-815f-b5209459f3c6&w=32&h=32&o=6&pid=13.1", "Microsoft 帐户 | 首页", "我的Microsoft设备", "https://account.microsoft.com/?refd=account.microsoft.com"]
        },
        "dhr_ym_dx3": {
            "dhr_ym_sz0": ["https://nlp-eb.cdn.bcebos.com/logo/favicon.ico", "文心一言", "百度文心大模型3.5 AI", "https://yiyan.baidu.com/"],
            "dhr_ym_sz1": ["https://nlp-eb.cdn.bcebos.com/logo/favicon.ico", "文心一格 - AI绘画", "百度文心一格 - AI艺术和创意辅助平台", "https://yige.baidu.com/creation"]
        }
    };
    localStorage.dhr_ym_dx = JSON.stringify(dhr_ym_dx);
}
//万能搜索引擎
if (localStorage.sy_sosuo_yq == undefined) {
    localStorage.sy_sosuo_yq = '百度';
}
//头像
if (localStorage.tou_xiang == undefined) {
    localStorage.tou_xiang = '';
}
//留言
if (localStorage.liu_yan_dx == undefined) {
    var liu_yan_dx = {
        "liu_yan_sz0": ["❄ 在这里可以记录你的日常任务，完成了可以右击标记一下 ❄", "2023 年 1 月 1 日 00:00", 1],
        "liu_yan_sz1": ["❄ 支持上传文字、图片、动态图片、文字链接、图片链接、视频、音乐... ❄", "2023 年 1 月 2 日 00:00", 1],
        "liu_yan_sz2": ["<a href=\"https://baidu.com\"><img src=\"https://wimg.588ku.com/gif620/20/06/16/02d760e4f246d75f853c608376d9afa8.gif\" height=\"150\"></a>", "2023 年 1 月 3 日 00:00", 1],
    };
    localStorage.liu_yan_dx = JSON.stringify(liu_yan_dx);
}
// 所有壁纸
if (localStorage.bi_zhi_s == undefined) {
    var bi_zhi_s = ["https://pic.3gbizhi.com/uploads/20231127/d6aa5a99f7dda1e2852dceeefcfa2a42.jpg", "https://pic.3gbizhi.com/uploads/20231030/421bbae86690f4a030370c284ee7e80e.jpg", "https://pic.3gbizhi.com/uploads/20231025/cd0f09132f8523395216a80ef2c1471c.png", "https://pic.3gbizhi.com/uploads/20231017/7f49389352de622b6c79dfadea3cb165.png", "https://pic.3gbizhi.com/uploads/20230927/76f57dacdab50cdb739b8beae3703b3e.png", "https://wallpapershome.com/images/pages/pic_h/25443.jpeg", "https://pic.3gbizhi.com/uploads/20231006/1944ecc5089e0cf6b8760f0f442195fc.jpg", "https://pic.3gbizhi.com/uploads/20231218/bc41092030bb7e763170bc172af92039.png"];
    localStorage.bi_zhi_s = JSON.stringify(bi_zhi_s);
}
// 当前壁纸
if (localStorage.bi_zhi == undefined) {
    localStorage.bi_zhi = 'https://pic.3gbizhi.com/uploads/20231218/bc41092030bb7e763170bc172af92039.png';
}
// 壁纸背景颜色
if (localStorage.bi_zhi_ys == undefined) {
    localStorage.bi_zhi_ys = '';
}
//天气
if (localStorage.tian_qi == undefined) {
    localStorage.tian_qi = '0';
}
//字体颜色
if (localStorage.zi_ti_color == undefined) {
    localStorage.zi_ti_color = '#ccfbff';
}
//重字体颜色
if (localStorage.zi_ti_click_color == undefined) {
    localStorage.zi_ti_click_color = '#ffe252';
}
//背景颜色
if (localStorage.bei_jing_color == undefined) {
    localStorage.bei_jing_color = '#000000';
}
//背景透明度
if (localStorage.bei_jing_tmd == undefined) {
    localStorage.bei_jing_tmd = '0.5';
}
//背景确认框
if (localStorage.bei_jing_kuan_ture == undefined) {
    localStorage.bei_jing_kuan_ture = '1';
}
//背景框颜色
if (localStorage.bei_jing_kuan_color == undefined) {
    localStorage.bei_jing_kuan_color = '#d1feff';
}
//背景框透明度
if (localStorage.bei_jing_kuan_tmd == undefined) {
    localStorage.bei_jing_kuan_tmd = '0.8';
}
//毛玻璃
if (localStorage.mao_bo_li == undefined) {
    localStorage.mao_bo_li = '0';
}
//自动备份
if (localStorage.zdbf == undefined) {
    localStorage.zdbf = '0';
}
//备份
if (localStorage.dhr_sz_bf == undefined) {
    localStorage.dhr_sz_bf = '';
}
if (localStorage.dhr_ym_dx_bf == undefined) {
    localStorage.dhr_ym_dx_bf = '';
}
if (localStorage.bi_zhi_s_bf == undefined) {
    localStorage.bi_zhi_s_bf = '';
}
if (localStorage.liu_yan_dx_bf == undefined) {
    localStorage.liu_yan_dx_bf = '';
}
if (localStorage.sy_djs_bf == undefined) {
    localStorage.sy_djs_bf = '';
}
if (localStorage.sy_zpzs_lj_bf == undefined) {
    localStorage.sy_zpzs_lj_bf = '';
}
if (localStorage.sy_zpzs_mz_bf == undefined) {
    localStorage.sy_zpzs_mz_bf = '';
}
//使用次数
if (localStorage.sy_ci_shu == undefined) {
    localStorage.sy_ci_shu = 0;
} else {
    localStorage.sy_ci_shu++;
}
//倒计时
if (localStorage.sy_djs == undefined) {
    var sy_djs = {
        "sy_djs0": ["2100年", 4102416000000, "2100-01-01 00:00:00"]
    };
    localStorage.sy_djs = JSON.stringify(sy_djs);
}
//密码
if (localStorage.dr_mm == undefined) {
    localStorage.dr_mm = '';
}
if (localStorage.dr_mm_cf == undefined) {
    localStorage.dr_mm_cf = 0;
}
if (localStorage.drym_cs == undefined) {
    localStorage.drym_cs = 0;
}
if (localStorage.drym_srcs == undefined) {
    localStorage.drym_srcs = 0;
}
if (localStorage.dr_mmdr == undefined) {
    localStorage.dr_mmdr = 0;
}
if (localStorage.dr_mmdr_drsj == undefined) {
    localStorage.dr_mmdr_drsj = 0;
}
if (localStorage.dr_mmdr_mmfw == undefined) {
    localStorage.dr_mmdr_mmfw = 60;
}
//作品展示
if (localStorage.sy_zpzs_lj == undefined) {
    var sy_zpzs_lj = [];
    localStorage.sy_zpzs_lj = JSON.stringify(sy_zpzs_lj);
}
if (localStorage.sy_zpzs_mz == undefined) {
    var sy_zpzs_mz = [];
    localStorage.sy_zpzs_mz = JSON.stringify(sy_zpzs_mz);
}
if (localStorage.sy_zpzs_kaiguan == undefined) {
    localStorage.sy_zpzs_kaiguan = 0;
}
//音乐
if (localStorage.music_cd == undefined) {
    var music_cd = [
        ["晴天", "放空", "我期待的不是雪", "冬天的秘密", "姑娘别哭泣"],
        ["https://le-sycdn.kuwo.cn/d70f70da5bb04325a8fd1db1f1f6d9a3/65814761/resource/m2/63/68/3517704569.mp4", "https://lv-sycdn.kuwo.cn/fcd146f7a6de2c4690f0c7bb29c5377a/6581475b/resource/30106/trackmedia/M50000250pUW4ezCK8.mp3", "https://lx-sycdn.kuwo.cn/dc21107c6f42496c6d77ae13be0e2180/658146a7/resource/n1/83/71/2375904687.mp3", "https://cx-sycdn.kuwo.cn/34e20de80df89906011c91a6fa89c714/657cf655/resource/n2/77/15/4226129402.mp3", "https://lx-sycdn.kuwo.cn/186fcc76ef5b6d4199a81bd7dc896247/6580099d/resource/n2/73/50/3073733696.mp3"]
    ];
    localStorage.music_cd = JSON.stringify(music_cd);
}
if (localStorage.music_bfsx == undefined) {
    var music_bfsx = 1;
    localStorage.music_bfsx = JSON.stringify(music_bfsx);
}
if (localStorage.music_sydx == undefined) {
    var music_sydx = 1;
    localStorage.music_sydx = JSON.stringify(music_sydx);
}
if (localStorage.music_cd_bf == undefined) {
    var music_cd_bf = '';
    localStorage.music_cd_bf = JSON.stringify(music_cd_bf);
}
//历史记录
if (localStorage.lsjl == undefined) {
    var lsjl = [];
    localStorage.lsjl = JSON.stringify(lsjl);
}
if (localStorage.lsjl_bf == undefined) {
    var lsjl_bf = [];
    localStorage.lsjl_bf = JSON.stringify(lsjl_bf);
}
// 轮播选择
if (localStorage.sy_lbxz == undefined) {
    localStorage.sy_lbxz = 0;
}
//锁屏
if (localStorage.sku_xp_sp == undefined) {
    localStorage.sku_xp_sp = 120;
}
//HTSP
if (localStorage.htsp_s == undefined) {
    var htsp_s = [];
    localStorage.htsp_s = JSON.stringify(htsp_s);
}
if (localStorage.htsp_s_bf == undefined) {
    var htsp_s_bf = [];
    localStorage.htsp_s_bf = JSON.stringify(htsp_s_bf);
}
//注册表
if (localStorage.sku_zcb == undefined) {
    localStorage.sku_zcb = '[[],[]]';
}
if (localStorage.sku_zcb_bf == undefined) {
    localStorage.sku_zcb_bf = '[[],[]]';
}
// 每日热点
if (localStorage.mrrd == undefined) {
    localStorage.mrrd = '[]';
}
if (localStorage.mrrd_sxsj == undefined) {
    localStorage.mrrd_sxsj = 0;
}
if (localStorage.mrrd_top == undefined) {
    localStorage.mrrd_top = '[]';
}
if (localStorage.mrrd_name == undefined) {
    localStorage.mrrd_name = '[]';
}
// 每日一言
if (localStorage.mryy == undefined) {
    localStorage.mryy = '';
}
// 主题风格
if (localStorage.ztfg == undefined) {
    // 纯颜色壁纸,图片壁纸url,字体颜色,重字体颜色,背景颜色,背景透明度100max,背景框颜色,背景框透明度100max,是否背景框1是0否,毛玻璃效果1是0否、场景0否1234...是
    var ztfg = [
        ['', 'https://pic.3gbizhi.com/uploads/20231218/bc41092030bb7e763170bc172af92039.png', '#ccfbff', '#ccfbff', '#000000', '10', '#d1feff', '80', '1', '5', '1'],
        ['', '#', '#000000', '#000000', '#ffffff', '90', '#000000', '100', '1', '0', '0'],
        ['', 'https://pic.3gbizhi.com/uploads/20231227/e0b15cfc41a57575ca154db81ed745f2.png', '#feb4b4', '#ffe5e5', '#0a0505', '59', '#ffc7c7', '80', '1', '0', '3'],
        ['', 'https://gss0.baidu.com/7Po3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/4e4a20a4462309f7e770251f7a0e0cf3d7cad6a4.jpg', '#ededed', '#ffffff', '#000000', '0', '#ffffff', '50', '1', '0', '0'],
        ['', 'https://pic.3gbizhi.com/uploads/20240130/d97c54c7a77532c34f74c5ee56562a70.jpg', '#fffae9', '#f8dca6', '#000000', '50', '#fff7eb', '80', '1', '0', '0']
    ];
    localStorage.ztfg = JSON.stringify(ztfg);
}
if (localStorage.ztfg_name == undefined) {
    localStorage.ztfg_name = '["月光琉璃", "雅致白绸", "丝绸粉霞", "寂静之章","阳光米色"]';
}

// 开发者模式
if (localStorage.Sku_kfzms == undefined) {
    localStorage.Sku_kfzms = 0;
}

// 崩溃
if (localStorage.Sku_benghuai == undefined) {
    localStorage.Sku_benghuai = 0;
}

// AI记录
if (localStorage.AI_jl == undefined) {
    localStorage.AI_jl = '[]';
}
// AI快捷指令
if (localStorage.AI_kjzl == undefined) {
    localStorage.AI_kjzl = '[]';
}






// 开机壁纸颜色(放前面免卡顿)
if (localStorage.bi_zhi_ys !== '') {
    document.documentElement.style.backgroundColor = localStorage.bi_zhi_ys;
}
//开机壁纸(放前面免卡顿)
if (localStorage.bi_zhi == 'sj') {
    var bizhi_sjwz = JSON.parse(localStorage.shuiji_bi_zhi_wz);
    var shuiji_biz = sjs(0, bizhi_sjwz.length - 1);
    document.documentElement.style.backgroundImage = 'url(' + bizhi_sjwz[shuiji_biz] + ')';
} else if (localStorage.bi_zhi !== 'sj' && localStorage.bi_zhi_ys == '') {
    document.documentElement.style.backgroundImage = 'url(' + localStorage.bi_zhi + ')';
}

// var str = 'wgs';
// var str64 = window.btoa(str);
// var str64_2 = window.btoa(str64);
// console.log("字符串是:" + str);
// console.log("经 base64 1次编码后:" + str64);
// console.log("经 base64 2次编码后:" + str64_2);
// console.log("base64 1次解码后:" + window.atob(str64_2));
// console.log("base64 2次解码后:" + window.atob(window.atob(str64_2)));

// function S_ku_jiami(myao) {
//     var jm_lsbl = myao;
//     // 10次加密
//     for (var i = 0; i < 10; i++) {
//         jm_lsbl = window.btoa(jm_lsbl);
//     }
//     return jm_lsbl + 'A';
// }
// S_ku_jiami('wgs');

// function S_ku_jiemi(myao2) {
//     var jm_lsbl2 = myao2.slice(0, -1);
//     // 10次解密
//     for (var i = 0; i < 10; i++) {
//         jm_lsbl2 = window.atob(jm_lsbl2);
//     }
//     return jm_lsbl2;
// }
// S_ku_jiemi(S_ku_jiami('wgs'));

// 加密函数：将 JSON 对象转换为 base64 编码字符串