require(['scripts/config.js'], function () { //加载配置文件
    require(["jquery", "list", "navtab", "searchhot", "cutout", "listnum", "footer", "times", "tabs","banner","magnify"],
        function ($, lists, navs, search, cutouts, listn, foots, time, tab,banner,magnify) {
            //商品左侧     
            $(".lists").cul();

            //头部下拉菜单
            $(".fr").nav();

            //导航商品下拉菜单
            $("#booksort").nav();

            //调热搜索接口
            search.init($("#searchHot"), "http://www.sfbest.com/ajax/getWordAll/?callback=?");

            //倒计时
            time.init($(".days"), $(".hours"), $(".mius"), $(".mis"));

            //加载底部数据
            new foots().init($("#shopp"), $("#gives"), $("#pay"), $("#sell"), $("#seller"));

            //选项卡
            tab.init($("#list>li"), $("#content>li"));

            //放大镜
            console.log(1)
            new banner({

                src: [
                    ["http://p02.sfbest.com/2017/4100279055/middle_4100279055_1_4.jpg"],
                    ["http://p02.sfbest.com/2017/4100279055/middle_4100279055_1_1.jpg"],
                    ["http://p02.sfbest.com/2017/4100279055/middle_4100279055_1_3.jpg"],
                    ["http://p02.sfbest.com/2017/4100279055/middle_4100279055_1_02.jpg"]
                ],
                create_btn: true,
                movement_mode: "fade",
                autoplay: false,
                btnhasbg: true
            }, $(".goodsleft .goodsleftbgimg"));
            new magnify($(".goodsleft .goodsleftbgimg"));
        }
    )
})