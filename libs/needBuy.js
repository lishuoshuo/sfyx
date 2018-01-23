define(["jquery"], function ($) {
    function NeedBuy() {

    }
    NeedBuy.prototype = {
        constructor: NeedBuy,
        init: function (ele) {
            var url = "http://www.sfbest.com/ajaxIndex/GetPerfectGoods/?callback=?";
            this.ele = ele;
            var _this = this;
            $.getJSON(url, function (res) {
                //console.log(res)
                var html = "";
                res.upProduct.forEach(function (item) {
                    html += '<li>' +
                        '<a href="##">' +
                        '<p>' + item.name + '</p>' +
                        ' <h3>' +
                        ' <i>￥</i>' +
                        '<span>' + item.price + '</span>' +
                        '</h3>' +
                        '<div class="bbig_img">' +
                        '<img src="' + item.productIndexPic + '" alt="">' +
                        '</div>' +
                        '</a>' +
                        '</li>'
                });
                res.downProduct.forEach(function (item) {
                    html += '<li>' +
                        '<a href="##">' +
                        '<p>' + item.name + '</p>' +
                        ' <h3>' +
                        ' <i>￥</i>' +
                        '<span>' + item.price + '</span>' +
                        '</h3>' +
                        '<div class="bbig_img">' +
                        '<img src="' + item.productIndexPic + '" alt="">' +
                        '</div>' +
                        '</a>' +
                        '</li>'
                });
                (_this.ele).html(html);
                //console.log(res.downProduct)
            });
        }
    }
    return new NeedBuy();
})