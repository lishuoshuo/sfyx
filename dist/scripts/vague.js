/*模糊搜索功能*/
define(["jquery"], function() {
	class Search {
		init(ele) {
			this.ele = ele;
			let _this = this;
			this.ele.on("input", function() {
				$(this).css({
					outline: "none",
				})
				_this.value = $(this).val();
				_this.change()
			})
		}
		change() {
			$.ajax({
				url: 'https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=' + this.value + '&cb=callback',
				type: "GET",
				dataType: "jsonp",
				jsonpCallback: "callback",
				success: function(data) {
					
					let html = "";
					for(let i = 0; i < data.s.length; i++) {
						html += `
 								<li>${data.s[i]}</li>
 								`
					}
					$("#searcList").show().html(html);

				}
			})

		}
	}
	return new Search();
})
