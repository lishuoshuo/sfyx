define(["jquery"], function () {
    function Timemeter() {

    }
    Timemeter.prototype = {
        constructor: Timemeter,
        init: function (ele) {
            // var url = "http://www.sfbest.com/ajax/GetQingIndex";
            // this.ele=ele;
            // $.ajax(url.then(),function(res){
            //     console.log(res.nowList)
            // })
            this.ele=ele;
            var _this=this;
            var setup = {
                url: "scripts/d.json",
                type: "GET",
                context: this
            }
            $.ajax(setup).then($.proxy(this.Rendering, this));

        },
        Rendering: function (res) {
            // /console.log(res.nowList)
            var html = "";
            res.nowList.forEach(function (item) {
                html += '<li>' +
                    '<a href="../dist/list.html">' +
                    '<div class="bImg">' +
                    '<img src="'+item.img+'" alt="">' +
                    '</div>' +
                    '<p class="p1">'+item.title+'</p>' +
                    '<p class="p2">￥'+item.sfprice+'</p>' +
                    '<p class="p3">' +
                    '<i>会员价</i>' +
                    '<b>￥'+item.mgprice+'</b>' +
                    '</p>' +
                    ' <p class="btn">抢购</p>' +
                    '</a>' +
                    '</li>'
            });
            this.ele.html(html);
        }
    }
    return new Timemeter();
})