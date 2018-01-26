require(['scripts/config.js'], function () { //加载配置文件
    require(["jquery", "navtab","footer"],
        function ($, navs, foots) {
            
            //头部下拉菜单
            $(".fr").nav();

            //加载底部数据
            new foots().init($("#shopp"),$("#gives"),$("#pay"),$("#sell"),$("#seller"));

        }
    )
})