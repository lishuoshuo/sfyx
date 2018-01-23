define(["jquery"],function(){
    /* function List(){

    }
    List.prototype={
        constructor:List,
        init:function(ele){

        }
    }
    return new List(); */

    $.fn.extend({
        cul: function () {
            this.find("li").on("click",function(){
                $(this).children().first().attr("id","curr");
                $(this).children().last().show();
            })
            /* this.find("li:has(ul)").on("click", function () {
                $(this).addClass(".curr");
            })
            this.find("li:has(ul)").on("mouseout", function () {
                $(this).children().last().stop().hide();
            }) */
        }
    })
})