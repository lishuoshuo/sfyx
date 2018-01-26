define(["jquery", "cookie"], function ($) {
    //console.log($.cookie)
    function Shopp() {}
    Shopp.prototype = {
        constructor: Shopp,
        init: function (ele) {
            ele.on("click", $.proxy(this.setShop, this))

        },
        setShop: function (e) {
            var dataId = $(e.target).attr("data-id");
            if ($.cookie("shoppingCart")) {
                var scookie = $.cookie("shoppingCart");
                var acookie = JSON.parse(scookie);
                var flag = false;
                acookie.forEach(function (item) {
                    if (item.id == dataId) {
                        item.num++;
                        flag == true;
                    }
                })
                if (!flag) {
                    var item = {
                        "id": dataId,
                        "num": "1"
                    }
                    acookie.push(item);
                }
                scookie = JSON.stringify(acookie);
                $.cookie("shoppingCart", scookie);
            } else {
                $.cookie("shoppingCart", '[{"id":"' + dataId + '","num":"1"}]')
            }
        },
        getShop: function () {
            if ($.cookie("shoppingCart")) {
                return JSON.parse($.cookie("shoppingCart"))
            }
        },
        remove: function () {
            var scookie = $.cookie("shoppingCart");
            if (scookie) {
                var acookie = JSON.parse(scookie);
                acookie.forEach(function (item, index) {
                    if (item.id == id) {
                        acookie.splice(index, 1);
                    }
                })
            }
            scookie = JSON.stringify(acookie);
            $.cookie("shoppingCart", scookie);
        }
    }
    return new Shopp();

})