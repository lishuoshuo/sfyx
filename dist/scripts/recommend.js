define(["jquery"], function ($) {
    function RecommendList() {

    }
    RecommendList.prototype = {
        constructor: RecommendList,
        init: function (ele, url) {
            var url = url;
            this.ele = ele;
            var _this = this;
            $.getJSON(url, function (res) {
                //console.log(res);
                var recomList = "";
                res.forEach(function (item) {
                    recomList += '<li>' +
                        '<div class="pImg">' +
                        '<a href="">' +
                        '<img src="'+item.imgurl+'" alt="" title="'+item.name+'">' +
                        '</a>' +
                        '<div class="gBtn">' +
                        '<a pid="'+item.proudct_id+'" href="#">加入购物车</a>' +
                        '</div>' +
                        '</div>' +
                        '<p class="pt">' +
                        '<a href="#">'+item.name+'</a>' +
                        '</p>' +
                        '<p class="pb">' +
                        '<i>￥</i>' +
                        '<span>'+item.sfbestPrice+'</span>' +
                        '</p>' +
                        '</li>' 
                });
                (_this.ele).html(recomList);
            })
        }
    }
    return RecommendList;
})