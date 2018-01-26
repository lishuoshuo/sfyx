require(['scripts/config.js'], function () { //加载配置文件
    require(["jquery", "fruit", "recommend", "searchhot", "needsBuy", "navtab", "timeMeter", "countdown", "footer", "scrollT", "list", "banner","vague"],
        function ($, fruitL, recom, search, needs, navbtn, times, counts, foots, scrollTo, lists, banner,vagues) {

            //轮播图功能
            new banner({
                src: [
                    ["http://004.sfimg.cn/web//075e2ede/075e2ede33ae61a7149cb1aaa9818cac.jpg"],
                    ["http://003.sfimg.cn/web//a23a98d7/a23a98d76741de75579d9a29a601e0b6.jpg"],
                    ["http://001.sfimg.cn/web//143c03c2/143c03c2e5044b9b3c47f325d5b0a77d.jpg"],
                    ["http://003.sfimg.cn/web//502de711/502de71138a29dd3b171ebf3b1580cea.jpg"],
                    ["http://001.sfimg.cn/web//a6c42491/a6c42491499c9a4251003bf3ef7cf5f4.jpg"],
                    ["http://004.sfimg.cn/web//8ce7e752/8ce7e7526080158c09172374b7681f39.jpg"],
                    ["http://001.sfimg.cn/web//443f719f/443f719f5523bb72ce886b8c7649687f.jpg"]
                ],
                create_btn: true,
                movement_mode: "fade",
                autoplay: true
            }, $(".lside"));

            //加载各个楼层数据
            new fruitL().init($("#fruitList"), "http://www.sfbest.com/ajaxIndex/GetFloorGoods/?callback=?&cId=7&floorId=297");
            new fruitL().init($("#meatList"), "http://www.sfbest.com/ajaxIndex/GetFloorGoods/?callback=?&floorId=301");
            new fruitL().init($("#foodList"), "http://www.sfbest.com/ajaxIndex/GetFloorGoods/?callback=?&floorId=357");
            new fruitL().init($("#grainList"), "http://www.sfbest.com/ajaxIndex/GetFloorGoods/?callback=?&floorId=309");
            new fruitL().init($("#arderList"), "http://www.sfbest.com/ajaxIndex/GetFloorGoods/?callback=?&floorId=173");
            new fruitL().init($("#teaList"), "http://www.sfbest.com/ajaxIndex/GetFloorGoods/?callback=?&floorId=371");
            new fruitL().init($("#drinksList"), "http://www.sfbest.com/ajaxIndex/GetFloorGoods/?callback=?&floorId=169");
            new recom().init($("#recommendList"), "http://www.sfbest.com/ajaxIndex/GetGuessYouLikeProducts/?callback=?");

            //加载热搜索词数据
            search.init($("#searchHot"), "http://www.sfbest.com/ajax/getWordAll/?callback=?");

            //模糊搜索功能
            vagues.init($("#searchText"));
            
            //加载优选必买数据
            needs.init($("#bbig"));

            //头部二级菜单
            $(".fr").nav();

            //左侧二级菜单
            $("#booksort").nav();

            //加载限时抢购数据
            times.init($("#timeLimit"));

            //倒计时功能
            counts.init([02, 59, 52], ["time1", "time2", "time3"]);

            //加载用户反馈数据
            $.getJSON("http://www.sfbest.com/ajax/GetHotSun/?callback=?", function (res) {
                $("#share").html(res.data);
            });

            //加载底部数据
            new foots().init($("#shopp"), $("#gives"), $("#pay"), $("#sell"), $("#seller"));

            //回到顶部
            new scrollTo().init($("#scrollTOP"), $("#moveLeft"), $(".moveL"));

            $(".lists").cul();
        })
})