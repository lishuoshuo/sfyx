require(['scripts/config.js'], function () { //加载配置文件
    require(["jquery", "list", "navtab", "searchhot", "cutout", "listnum","footer","times","tabs"],
        function ($, lists, navs, search, cutouts, listn, foots,time,tab) {
            //商品左侧     
            $(".lists").cul();

            //头部下拉菜单
            $(".fr").nav();

            //导航商品下拉菜单
            $("#booksort").nav();

            //调热搜索接口
            search.init($("#searchHot"), "http://www.sfbest.com/ajax/getWordAll/?callback=?");

            //倒计时
            time.init($(".days"),$(".hours"),$(".mius"),$(".mis"));

            //加载底部数据
            new foots().init($("#shopp"),$("#gives"),$("#pay"),$("#sell"),$("#seller"));

            //选项卡
            tab.init($("#list>li"),$("#content>li"));
        }
    )
})