require(['scripts/config.js'], function () { //加载配置文件
    require(["jquery","register"],function ($,register) {
           
        register.init($(".register"));
        
        }
    )
})