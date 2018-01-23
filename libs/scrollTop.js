define(["jquery"],function($){
    function ScrollTop(){
    }
    ScrollTop.prototype={
        constructor:ScrollTop,
        init:function(ele,ele2){
            this.crollBlock(ele);
            // /console.log(ele2)
            this.ele2=ele2;
            //console.log(this.ele2)
            this.ele2[0].onmouseenter=this.overBlock.bind(this);
            this.ele2[0].onmouseout=this.overNone.bind(this);
           
        },
        crollBlock:function(ele){
            // /console.log("adsaf")
            $("#scrollTOP").on("click",function(){
                if (document.body.scrollTop) {
                    document.body.scrollTop = 0;
                } else {
                    document.documentElement.scrollTop = 0;
                }
            })
        },
        overBlock:function(event){
            $(".moveL").show();
        },
        overNone:function(){
            $(".moveL").hide();
        }

    }
    return ScrollTop;
})