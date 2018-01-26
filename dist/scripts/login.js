require(['scripts/config.js'], function () { //加载配置文件
    require(["jquery","logins"],function ($,login) {
                
        login.init($(".register"));
        }
    )
})