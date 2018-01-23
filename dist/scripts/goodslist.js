define(["jquery"],function($){
    function GoodList(){

    }
    GoodList.prototype={
        constructor:GoodList,
        init:function(ele){
            var temp = {
                url:"/zcool",
                type:"GET",
                data:{
                    pageSize:5,
                    contentId:"6372959_3",
                    day:"2018-01-01"
                },
                context:this
            }
            this.ele=ele;
            $.ajax(temp).then(this.redImg);
        },
        redImg:function(res){
            var _this=this;
            //console.log(res.data.contents[0])
            res.data.contents.forEach(function(item,index){
                //console.log(res)
                _this.ele.eq(index).find("button").attr("data-id",item.id);
                _this.ele.eq(index).find("img").attr("src",item.cover1x);
                _this.ele.eq(index).find("p").html(item.title);

            }) 
            
        }
    }
    return new GoodList();
})