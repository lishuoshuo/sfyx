define(["jquery"],function($){
    function SearchHot(){

    }
    SearchHot.prototype={
        constructor:SearchHot,
        init:function(ele,url){
            var url = url;
            this.ele=ele;
            var _this=this;
            $.getJSON(url,function(res){
                //console.log(res);
                var hotWord="";
                //console.log(res.keyWords)
                $(_this.ele).prev().find(".inputl").val(res.keyWords);                
                res.hotWords.forEach(function(item){
                    hotWord +='<a href="'+item.link+'">'+item.word+'</a>'
                });
                (_this.ele).html(hotWord);
            })
        }
    }
    return new SearchHot();
})