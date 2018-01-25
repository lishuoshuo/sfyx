define(["jquery"], function($) {
    function Register(){

    }
    Register.prototype={
        constructor:Register,
        init:function(){
            //获取手机号、密码、确认密码、阅读、注册等id 
            this.username=$("#username");
            this.userpass=$("#userpass");
           
            this.read=$("#read");
            this.enroll=$("#enroll");
            this.userM=$("#userM");
            this.passPrompt=$("#passPrompt");
            this.wordPrompt=$("#wordPrompt");
            //console.log(this.username[0])
            //账户名input事件及获得焦点失去焦点的提示信息
            this.username.on("blur",$.proxy(this.downUserName,this));
            this.username.on("focus",this.addBorder);
            this.username.on("blur",this.removeName);

            //密码input事件及获得焦点失去焦点的提示信息
            this.userpass.on("blur",$.proxy(this.downUserpass,this));
            this.userpass.on("focus",this.addBorder);
            this.userpass.on("blur",this.removeName);

        
            //立即登录
            this.enroll.on("click",$.proxy(this.enrollC,this));
            this.flagName = false;
            this.flagPass = false;
        },
        downUserName:function(){
            clearTimeout(this.timer);
            var _this = this;
            this.timer=setTimeout(function(){
                var nameVal = _this.username.val();
               // console.log(nameVal)
                var nameReg = /^1[34578]\d{9}$/;
                if(nameReg.test(nameVal)){
                    $(_this.username).siblings().css("display","block");
                    $(_this.username).parent().css("border","1px solid green");
                    $(_this.username).parent().parent().children().last().css("display","none");
                    $(_this.username).parent().parent().children().last().css("color","#666666")
                    _this.flagName=true;
                }else{
                    $(_this.username).siblings().css("display","none");
                    $(_this.username).parent().css("border","1px solid red")
                    $(_this.username).parent().parent().children().last().css("color","red")
                    _this.flagName = false;
                }
            },20);
        },
        downUserpass:function(){
            clearTimeout(this.timer);
            var _this=this;
            this.timer=setTimeout(function(){
                var passVal=_this.userpass.val();
                var passSix = $("#pwdStrong");
                var pone = ((/[a-zA-Z]/g).test(passVal)) ? 1 : 0;
				var ptwo = ((/[0-9]/g).test(passVal)) ? 1 : 0;
				var pthree = ((/[A-Z]/g).test(passVal)) ? 1 : 0;
                var strength = pone + ptwo + pthree;
                // /console.log(passVal) 

                if(passVal.length>5){//大于6位进行密码 强度判断
                    if(strength==1){
                        // /console.log(passSix.children().eq(1).css("background"))
                        $(_this.userpass).siblings().css("display","block");
                        passSix.children().eq(1).addClass("ok");
                        $(_this.passPrompt).css("display","block");
                    }else if(strength==2){
                        passSix.children().eq(2).addClass("ok");
                        $(_this.passPrompt).css("display","none");
                    }else if(strength==3){
                        passSix.children().eq(3).addClass("ok");
                        $(_this.passPrompt).css("display","none");
                    }
                    $(_this.userpass).parent().css("border","1px solid green");
                    _this.flagPass = true;
                }else{//小于6位边框变红
                    $(_this.userpass).parent().css("border","1px solid red");
                    $(_this.userpass).siblings().css("display","none");
                    $(_this.passPrompt).css("display","none");
                    console.log()
                }
            },20);
        },
       
        enrollC: function() {
            console.log("点击按钮了")
			var _this = this;
			//判断是否全部输入正确
			if(_this.flagName && _this.flagPass) {
				location.href="../dist/index.html"
			} else {
				alert("您输入的信息有误，请重新输入");
			}
		},
        addBorder:function(){
            $(this).parents().addClass("okBorder");
            $(this).parent().parent().children().last().css("display","block")
            console.log($(this).parent().parent().children().last())
        },
        removeName:function(){
            $(this).parents().removeClass("okBorder");
            $(this).parent().parent().css("border","none")
        },
        addBorders:function(){
            $(this).addClass("okBorders");
        },
        removeNames:function(){
            $(this).removeClass("okBorders");
        }
    }
    return new Register();
})