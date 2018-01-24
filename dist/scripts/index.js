require(['scripts/config.js'], function () { //加载配置文件
    require(["jquery", "fruit" ,"recommend","searchhot","needsBuy"/* ,"tabs" */,"navtab","supperBanner","timeMeter","countdown","footer","scrollT","list"/* ,"pop","goodslist","shopping" */ ], 
    function ($, fruitL ,recom,search,needs/* ,otab */,navbtn,supperBanner,times,counts,foots,scrollTo,lists/* ,supperBanner,pop,goodslist,shop */ ) {
         $(".lside").banner({
            src:[
                "http://001.sfimg.cn/web//b54d4efb/b54d4efbf9ad4869e19d6d8fe3c8f9f2.jpg",
                "http://003.sfimg.cn/web//4dd1c456/4dd1c456e01da81600ba60e750c4f2b7.jpg",
                "http://004.sfimg.cn/web//50518c6a/50518c6a4ad26c71a9a688c27ca41be7.jpg",
                "http://003.sfimg.cn/web//ff9c1917/ff9c1917cd210885b1b07d88e9fdcd69.jpg"
            ],
            autoplay:true,
			// /autoplay:false
        });
        /*$('.login').on("click",function(){
            pop.init(`
                <div><p>dasdfadsfasfdasfda</p><div>
            `);
        });
        goodslist.init($(".goodslist li"));
        shop.init($(".goodslist li button")); */
        new fruitL().init($("#fruitList"), "http://www.sfbest.com/ajaxIndex/GetFloorGoods/?callback=?&cId=7&floorId=297");
        new fruitL().init($("#meatList"), "http://www.sfbest.com/ajaxIndex/GetFloorGoods/?callback=?&floorId=301");
        new fruitL().init($("#foodList"), "http://www.sfbest.com/ajaxIndex/GetFloorGoods/?callback=?&floorId=357");
        new fruitL().init($("#grainList"), "http://www.sfbest.com/ajaxIndex/GetFloorGoods/?callback=?&floorId=309");
        new fruitL().init($("#arderList"), "http://www.sfbest.com/ajaxIndex/GetFloorGoods/?callback=?&floorId=173");
        new fruitL().init($("#teaList"), "http://www.sfbest.com/ajaxIndex/GetFloorGoods/?callback=?&floorId=371");
        new fruitL().init($("#drinksList"), "http://www.sfbest.com/ajaxIndex/GetFloorGoods/?callback=?&floorId=169");

        new recom().init($("#recommendList"),"http://www.sfbest.com/ajaxIndex/GetGuessYouLikeProducts/?callback=?");
        search.init($("#searchHot"),"http://www.sfbest.com/ajax/getWordAll/?callback=?");
        needs.init($("#bbig"));
        //new otab().init("#booksort>li","#booksortr li");
        //new otab().init("#booksort>li","#booksortr>li");
        $(".fr").nav();
        $("#booksort").nav();
        times.init($("#timeLimit"));
        //倒计时功能
        counts.init([02,59,52],["time1","time2","time3"]);
        $.getJSON("http://www.sfbest.com/ajax/GetHotSun/?callback=?",function(res){
           // console.log(res.data);
            $("#share").html(res.data);
        });
        new foots().init($("#shopp"),$("#gives"),$("#pay"),$("#sell"),$("#seller"));
        new scrollTo().init($("#scrollTOP"),$("#moveLeft"),$(".moveL"));
        //列表页
        $.post("http://www.sfbest.com/ajax/salesRank",function(res){
            // console.log(res.data);
             $("#salesRank").html(res);
         });
        $(".lists").cul();
    })
})