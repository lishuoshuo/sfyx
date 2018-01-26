define(["jquery"], function ($) {
    function FruitsList() {

    }
    FruitsList.prototype = {
        constructor: FruitsList,
        init: function (ele,url) {
            var url = url;
            this.ele=ele;
            var _this=this;
            $.getJSON(url, function (res) {
                // console.log(_this)
                // console.log(res);
                // console.log(res[0])
                //var fruitUl = _this.ele;
                //console.log(fruitUl);
                var fruitUlLi = "";
                res.forEach(function (item) {
                    fruitUlLi += '<li>' +
                        '<div class="subCont_img">' +
                        '<a href="../dist/list.html">' +
                        '<img src="'+item.img+'" title="'+item.name+'" alt="../images/150pic.jpg">' +
                        '</a>' +
                        '<div class="move_img">' +
                        '<a pid="'+item.product_id+'" href="">加入购物车</a>' +
                        '</div>' +
                        '</div>' +
                        '<p class="subT">' +
                        '<a href="../dist/list.html"></a>' +
                        '</p>' +
                        ' <p class="subB">' +
                        '<i>￥</i>' +
                        '<span>'+item.price+'</span>' +
                        '</p>' +
                        ' </li>'
                });
                (_this.ele).html(fruitUlLi);
                // console.log(_this.ele);
                //console.log(fruitUlLi)
            })
        }
    }
    return FruitsList;
})