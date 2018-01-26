(function (factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD
		define(['jquery'], factory);
	} else if (typeof exports === 'object') {
		// CommonJS
		factory(require('jquery'));
	} else {
		// Browser globals
		factory(jQuery);
	}
})(function($,window){
	/*
	 		ele 有数字的框
	 		ele1 加减按钮的父元素，该元素只包含这两个按钮
	 		ele,ele1,必须同时拥有相同的父元素，并且该父元素中只有这3个按钮
	 		ele为ele1的兄弟级 ；
	 * 
	 * 
	 * 
	 * */
		function NumCalculation(){
		}
		NumCalculation.prototype = {
			constructor:NumCalculation,
			init:function(ele,ele1){
				this.ele = ele ;
				this.ele1 = ele1;
				this.ele1.on("click",$.proxy(this.numtarget,this));
			},
			
			numtarget:function(event){
				if(event instanceof Object){
					this.target = $(event.target) ;
				}
				if(this.target[0] == $(event.currentTarget).children().eq(0)[0]){
					this.add();
				} ;
				if(this.target[0] == $(event.currentTarget).children().eq(1)[0]){
					this.substract();
				} ;
			},
			 
			add:function(){
				var sum = parseInt(this.target.parent().siblings().html()) + 1 ;
				this.target.parent().siblings().html(sum) ;
			},
			substract:function(){		
				var sum  ;
				if(this.target.parent().siblings().html() == 0){
					sum = 0 ;
				}else{
					sum = parseInt(this.target.parent().siblings().html()) - 1 ;
				}
				this.target.parent().siblings().html(sum) ;
			}
		}
	return NumCalculation ;
})