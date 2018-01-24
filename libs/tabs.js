define(["jquery"],function($){
    function Tabs(){

    }
    Tabs.prototype={
        constructor:Tabs,
        init:function(btn,list){
           this.btn=btn;
           this.list=list;
           
           for(var i=0;i<this.btn.length;i++){
               this.btn[i].index=i;
               //console.log(this.btn[i].index)
               this.btn[i].onclick=this.btnIndex.bind(this);
           }
        },
        btnIndex:function(event){
            var target = event.target;
            this.index = target.index;
            this.btnList();
            
        },
        btnList:function(){
            $(this.btn).eq(this.index).addClass("btnlist").siblings().removeClass("btnlist");
            $(this.list).eq(this.index).addClass("contentbtn").siblings().removeClass("contentbtn");
        }
    }
    return new Tabs();
})