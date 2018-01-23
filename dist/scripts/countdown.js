define(["jquery"], function ($) {
    function msTimeCount() {
        this._hour = 0; //“小时”数
        this._minute = 0; //“分”数
        this._seconds = 0; //“秒”数
        //
        this._hourHtmlObj = {}; //“小时”html对象
        this._minuteHtmlObj = {}; //“分”html对象
        this._secondsHtmlObj = {}; //“秒”html对象
        //
        this._totalSeconds = 0; //总秒数
    };
    msTimeCount.prototype = {
        //1.获取对象
        $: function (ID) {
            return document.getElementById(ID);
        },
        //2.初始化：
        init: function (arrTime, arrHtmlObj) {
            var _this = this;
            _this._hour = parseInt(arrTime[0]);
            _this._minute = parseInt(arrTime[1]);
            _this._seconds = parseInt(arrTime[2]);
            _this._hourHtmlObj = _this.$(arrHtmlObj[0]);
            _this._minuteHtmlObj = _this.$(arrHtmlObj[1]);
            _this._secondsHtmlObj = _this.$(arrHtmlObj[2]);
            _this._totalSeconds = parseInt(_this._hour * 60 * 60 + _this._minute * 60 + _this._seconds);
            //开始计时：
            _this.timeCount();
        },
        //3.计时器：
        timeCount: function () {
            var _this = this;
            var tmpTimeCount = setInterval(
                function () {
                    _this._totalSeconds--;
                    //alert(_this._totalSeconds);
                    _this.refreshTime();
                    if (_this._totalSeconds < 1) {
                        clearInterval(tmpTimeCount);
                        return;
                    }
                }, 1000);
        },
        //4.刷新页面时间:
        refreshTime: function () {
            var _this = this;
            if (_this._totalSeconds > 0) {
                _this._hour = parseInt(_this._totalSeconds / 3600);
                _this._minute = parseInt((_this._totalSeconds - _this._hour * 3600) / 60);
                _this._seconds = _this._totalSeconds - _this._hour * 3600 - _this._minute * 60;
            } else {
                _this._hour = _this._minute = _this._seconds = 0;
            }
            _this._hourHtmlObj.innerHTML= _this._hour;
            _this._minuteHtmlObj.innerHTML = _this._minute;
            _this._secondsHtmlObj.innerHTML = _this._seconds;
        }
    }
    return new msTimeCount();
})