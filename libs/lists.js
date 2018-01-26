require(['scripts/config.js'], function () { //加载配置文件
    require(["jquery", "list", "navtab", "searchhot", "cutout", "listnum","footer","shoppingcart","add"],
        function ($, lists, navs, search, cutouts, listn, foots,shopping,adds) {
            //商品左侧     
            $(".lists").cul();

            //头部下拉菜单
            $(".fr").nav();

            //导航商品下拉菜单
            $("#booksort").nav();

            //调热搜索接口
            search.init($("#searchHot"), "http://www.sfbest.com/ajax/getWordAll/?callback=?");

            //展开收起
            $(".salesRank > .attr").cut();

            //加载商品数据和分页功能
            listn.init($("#listsnum"),$(".ulbtn span"));
			
			//按钮加减
			setTimeout(function(){
				new adds().init($("li .p-num"));
			},1000)
			
            //加载底部数据
            new foots().init($("#shopp"),$("#gives"),$("#pay"),$("#sell"),$("#seller"));
            //console.log( shopping.init($(".p-btn")));
           
            setTimeout(function(){
                shopping.init($("#listsnum li .btns"));
            },500)
            setTimeout(function(){
            	$("li #subtraction").on("click",function(){
            		console.log("加")
            	});
            	$("li #addss").on("click",function(){
            		console.log("减")
            	})
            },1000)
        }
    )
})