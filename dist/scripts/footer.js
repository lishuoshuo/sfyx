define(["jquery"], function ($) {
    function Footers() {

    }
    Footers.prototype = {
        constructor: Footers,
        init: function (ele1,ele2,ele3,ele4,ele5) {
            this.ele1 = ele1;
            this.ele2=ele2;
            this.ele3=ele3;
            this.ele4=ele4;
            this.ele5=ele5;
            var foot = {
                url: "scripts/bottom.json",
                type: "GET",
                context: this
            }
            $.ajax(foot).then($.proxy(this.Bottom, this));
        },
        Bottom: function (res) {
            //console.log(res)
            //console.log(res.shopping.title)
            var lis = $("<li class=title></li>").html(res.shopping.title);
            lis.appendTo(this.ele1);
            var html = "";
            //console.log(res.shopping)
            res.shopping.list.forEach(function (item) {
                html += '<li>'+
                '<a href="##">'+item.name+'</a>'+
                '</li>'
            });
            this.ele1.append(html);

            var lis2 = $("<li class=title></li>").html(res.give.title);            
            lis2.appendTo(this.ele2);   
            var html2="";                
            res.give.list.forEach(function (item) {
                html2 += '<li>'+
                '<a href="##">'+item.name+'</a>'+
                '</li>'
            });
            this.ele2.append(html2);

            var lis3 = $("<li class=title></li>").html(res.pay.title);            
            lis3.appendTo(this.ele3);   
            var html3="";                
            res.pay.list.forEach(function (item) {
                html3 += '<li>'+
                '<a href="##">'+item.name+'</a>'+
                '</li>'
            });
            this.ele3.append(html3);

            var lis4 = $("<li class=title></li>").html(res.sell.title);            
            lis4.appendTo(this.ele4);   
            var html4="";                
            res.sell.list.forEach(function (item) {
                html4 += '<li>'+
                '<a href="##">'+item.name+'</a>'+
                '</li>'
            });
            this.ele4.append(html4);

            var lis5 = $("<li class=title></li>").html(res.seller.title);            
            lis5.appendTo(this.ele5);   
            var html5="";                
            res.seller.list.forEach(function (item) {
                html5 += '<li>'+
                '<a href="##">'+item.name+'</a>'+
                '</li>'
            });
            this.ele5.append(html5);

            /* var lis2 = $("<li class=title></li>").html(res.give.title);            
            lis2.appendTo(this.ele2);   
            var html2="";                
            res.give.list.forEach(function (item) {
                html2 += '<li>'+
                '<a href="##">'+item.name+'</a>'+
                '</li>'
            });
            this.ele2.append(html2);

            var lis2 = $("<li class=title></li>").html(res.give.title);            
            lis2.appendTo(this.ele2);   
            var html2="";                
            res.give.list.forEach(function (item) {
                html2 += '<li>'+
                '<a href="##">'+item.name+'</a>'+
                '</li>'
            });
            this.ele2.append(html2); */
            //console.log(this.ele2);
            //console.log(html)
        }
    }
    return Footers;
})