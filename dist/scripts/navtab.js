define(["jquery"], function ($) {
    $.fn.extend({
        nav: function () {
            this.find("li:has(ul)").on("mouseover", function () {
                $(this).children().last().stop().show()
            })
            this.find("li:has(ul)").on("mouseout", function () {
                $(this).children().last().stop().hide();
            })
        }
    })
})