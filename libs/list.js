define(["jquery"], function () {
    $.fn.extend({
        cul: function () {
            this.find("li").on("click", function () {
                $(this).addClass("curr").stop().siblings().removeClass("curr").children().last().hide();
                $(this).children().last().show();
            })
        }
    })
})