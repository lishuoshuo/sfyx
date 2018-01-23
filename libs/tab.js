define(["jquery"],function($){
    function Tab(){
        
    }
    Tab.prototype={
        constructor:Tab,
        init:function(btn,show){
            this.oBtn = document.querySelectorAll(btn);
            this.oShow = document.querySelectorAll(show);
            // console.log(this.oBtn)
            // console.log(this.oShow)
            for(var i=0;i<this.oBtn.length;i++){
                this.oBtn[i].index = i;
                this.oBtn[i].onmouseenter = this.Entershow.bind(this);
                //console.log(this.oBtn[i].onmouseout=this.LeaveOut.bind(this))
            }
        },
        Entershow:function(event){
            this.index = event.target.index;
            for(var i=0;i<this.oShow.length;i++){
                this.oShow[i].style.display="none";
                //console.log(this.oShow)
            }
            this.oShow[this.index].style.display="block";
           
        }
    }
    
    return Tab;
})