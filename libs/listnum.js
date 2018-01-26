define(["jquery"], function () {
    function Listnum() {

    }
    Listnum.prototype = {
        constructor: Listnum,
        init: function (ele, btn) {
            this.ele = ele;
            this.load();

            this.btn = btn;
            this.index = 0;
            for (var i = 0; i < this.btn.length; i++) {
                this.btn[i].index = i;
                this.btn[i].onclick = this.btnIndex.bind(this);
            }
        },
        btnIndex: function (event) {
            var target = event.target;
            this.index = target.index;
            this.ListNum();
        },
        load: function () {
            var listnums = {
                url: "scripts/listnum.json",
                type: "GET",
                context: this
            }
            $.ajax(listnums).then($.proxy(this.ListNum, this));
        },
        ListNum: function (res) {
            if (!this.res) {
                this.res = res;
            }
            
            var rendringArr;
            //每页最多可加载16个商品
            rendringArr = this.res.slice(this.index * 16, (this.index + 1) * 16);
            var html = "";
            rendringArr.forEach(function (item) {
                html += '<li>' +
                    '<div class="l-wrap">' +
                    '<div class="pic">' +
                    '<a href="' + item.src + '">' +
                    '<img src="' + item.tag_img + '" alt="">' +
                    '</a>' +
                    '</div>' +
                    '<div class="price">' +
                    '<span>￥</span>' +
                    '<strong>69.9</strong>' +
                    '</div>' +
                    '<p class="title-a">' + item.sfshipping1 + '</p>' +
                    '<p class="title-b">' + item.ad_words + '</p>' +
                    '<div class="title-c"><a href="##">' + item.actTag + '</a></div>' +
                    '<div class="comment"><a href="##">' + item.evaluate + '</a><div class="comment-r">自营</div></div>' +
                    '<div class="action">' +
                    '<div class="p-num">' +
                    '<span class="p-reduce" id="addss">-</span>' +
                    '<span class="numberInp">1</span>' +
                    '<span id="subtraction">+</span>' +
                    '<div><span>-</span><span>+</span></div>'+
                    '</div>' +
                    '<div class="p-btn">' +
                    '<a href="'+item.src+'" class="btns" data-id="'+item.eid+'">加入购物车</a>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '</li>'

            });
            this.ele.html(html);
            //给分页sapn标签添加class名
            this.btn.eq(this.index).addClass("btncol").siblings().removeClass("btncol");
        }
    }
    return new Listnum();
})