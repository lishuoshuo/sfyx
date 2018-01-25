define(["jquery"], function ($) {

    /*
     
     * 参数为放图片的框前提调用轮播图插件
     * 
     * 
     * 
     * */
    function goodsMagnify(lieles) {
        this.init(lieles);
    }
    goodsMagnify.prototype = {
        constructor: goodsMagnify,
        init: function (lieles) {
            this.$preview = lieles;
            this.$preview_mask = $("<div></div>");
            this.$right = $("<div></div>");
            this.$video = $("<div></div>");
            this.$right.css({
                display: 'none',
                width: "100%",
                height: "100%",
                position: 'absolute',
                top: 0,
                left: this.$preview.width() + 20 + "px",
                border: "1px solid #eee",
                overflow: "hidden"
            })
            this.$preview_mask.css({
                width: "100%",
                height: "100%",
                position: 'absolute',
                top: 0,
                left: 0,
                zIndex: 20
            })
            this.$video.css({
                display: 'none',
                width: "20%",
                height: "20%",
                position: 'absolute',
                background: 'rgba(255,255,255,0.5)',
                top: 0,
                left: 0,
                zIndex: 1
            })
            this.$right.append($('<img />'));
            this.$cloneimg = this.$right.find("img")
            this.$cloneimg.css({
                position: "absolute",
                width: "100%",
                height: "100%",
                border: 0
            })
            this.$preview.append($(this.$video));
            this.$preview.append($(this.$right));
            this.$preview.append($(this.$preview_mask));
            this.$preview_mask.on("mouseenter", $.proxy(this.mouesenterEvt, this));
            this.$preview.on("mouseout", $.proxy(this.mouesleaveEvt, this));
            this.$preview.on("mousemove", $.proxy(this.mouesmoveEvt, this));
        },

        mouesenterEvt: function (event) {
            $(this.$video).css({
                display: 'block'
            })

            $(this.$right).css({
                display: 'block',
                background:"#ffffff"
            })
            this.$cloneimg.attr("src", this.$preview.find("span.supperbanner_active").css("background-image").split('"')[1])
            //计算比例
            this.propX = 3 //
            this.propY = 3 //Math.round(this.$right.height() / this.$video.height());
            //等比例缩放大图;
            this.$cloneimg.css({
                width: this.$right.width() * this.propX + "px",
                height: this.$right.height() * this.propY + "px"
            })
        },
        mouesleaveEvt: function () {
            $(this.$video).css({
                display: 'none'
                
            })
            $(this.$right).css({
                display: 'none'
               
            })
        },
        mouesmoveEvt: function (event) {
            var e = event || window.event;
            var left = e.offsetX;
            var sTop = e.offsetY;
            /*边界检测 -start*/
            left = left <= (this.$video.width()) / 2 ? (this.$video.width()) / 2 : left;
            sTop = sTop <= (this.$video.width()) / 2 ? (this.$video.width()) / 2 : sTop;
            var maxLeft = this.$preview.width() - (this.$video.width()) / 2;
            var maxTop = this.$preview.height() - (this.$video.height()) / 2;
            left = left >= maxLeft ? maxLeft : left;
            sTop = sTop >= maxTop ? maxTop : sTop;
            /*边界检测 -end*/
            this.$video.css({
                left: left - (this.$video.width()) / 2 + "px",
                top: sTop - (this.$video.width()) / 2 + "px"
            })
            //大图运动;
            if (!this.propX || !this.propY) {
                return 0;
            }
            var bigLeft = (left - (this.$video.width()) / 2) * this.propX;
            var bigTop = (sTop - (this.$video.width()) / 2) * this.propY;
            this.$cloneimg.css({
                left: -bigLeft + "px",
                top: -bigTop + "px"
            })

            /*small_focus 框背景定位*/
            $(this.$video).css({
                backgroundPosition: -left + "px " + -sTop + "px"
            })
        }
    }
    return goodsMagnify;
})