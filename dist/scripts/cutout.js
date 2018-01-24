define(["jquery"], function ($) {
    $.fn.extend({
        cut: function () {
            this.each(function () {
                if ($(this).find("li").length > 10) {
                    var attrs = $(this).find("li:gt(9)");
                    attrs.addClass("hides");
                    $(this).children().children().last().removeClass("hideShow");
                    var _this = this;
                    $(this).children().children().last().on("click", function () {
                        if ($(_this).find("li:gt(9)").attr("class") == "hides") {
                            $(_this).find("li:gt(9)").removeClass("hides");
                            $(this).html('<span class="s-less"><b></b>收起</span>');
                        } else {
                            $(_this).find("li:gt(9)").addClass("hides");
                            $(this).html('<span class="s-more"><b></b>更多</span>');
                        }
                    })
                }
            });
        }
    })
})