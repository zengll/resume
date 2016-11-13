//js的入口文件
//引入zepto
var $ = require('./components/zepto-modules/_custom');
var wx = require('./components/weixin/jweixin');
require('./components/zepto-modules/ajax');
module.exports = $;

console.log(wx);
//引入IScroll
var IScroll = require('./components/iscroll/iscroll.js');

//设置iscroll对象默认为hide
$('#mainContent').hide();
$(".swiper-container").hide();


$('#enter').click(function() {
        $('#mainContent').show();
        $(".swiper-container").hide();

        //需要进行post请求，然后请求/api/skill，并且将数据列表显示在iscroll里
        $.post('http://1.13525442.applinzi.com/data/skill.php', {}, function(response) {
        	console.log(response);
            var html = "";
            for (var i = 0; i < response.length; i++) {
                html += "<li>" + response[i].category + "</li>";
            }

            $("#scroller ul").html(html);

            //调用IScroll
            myScroll = new IScroll('#wrapper', { mouseWheel: true });
            document.addEventListener('touchmove', function(e) { e.preventDefault(); }, false);
        })
    })
    //引入swiper
var Swiper = require('./components/swiper/swiper-3.3.1.min.js');
//引入swiper animate
var SwiperAnimate = require('./components/swiper/swiper.animate1.0.2.min.js');

var mySwiper = new Swiper('.swiper-container', {
    effect: 'cube',
    onInit: function(swiper) { //Swiper2.x的初始化是onFirstInit
        SwiperAnimate.swiperAnimateCache(swiper); //隐藏动画元素 
        SwiperAnimate.swiperAnimate(swiper); //初始化完成开始动画
    },
    onSlideChangeEnd: function(swiper) {
        SwiperAnimate.swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
    }
})

$("#footer div").tap(function() {
    var apiTarget = $(this).attr('id');
    $.post('/api/' + apiTarget, {}, function(response) {
        var html = "";
        for (var i = 0; i < response.length; i++) {
            html += "<li>" + response[i].category + "</li>";
        }
        $("#scroller ul").html(html);
    })
})


$("#scan").tap(function() {
    $.post("http://13525442.applinzi.com/php/getsign.php", {
        url: window.location.href
    }, function(data) {
        pos = data.indexOf('}');
        dataStr = data.substring(0, pos + 1);
        objData = JSON.parse(dataStr);
        console.log(dataStr);
        wx.config({
            debug: true,
            appId: objData.appId,
            timestamp: objData.timestamp,
            nonceStr: objData.nonceStr,
            signature: objData.signature,
            jsApiList: [
                'scanQRCode', 'getLocation'
                // 所有要调用的 API 都要加到这个列表中
            ]
        });

        wx.ready(function() {

            // 在这里调用 API
            wx.scanQRCode({
                needResult: 1, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
                scanType: ["qrCode", "barCode"], // 可以指定扫二维码还是一维码，默认二者都有
                success: function(res) {
                    var result = res.resultStr; // 当needResult 为 1 时，扫码返回的结果
                }
            });

        });

    });

})

var interval = setInterval(function() {
    if (document.readyState === 'complete') {
        clearInterval(interval);
        $('#preload').hide();
        $(".swiper-container").show();
        mySwiper.updateContainerSize();
        mySwiper.updateSlidesSize();
    } else {
        $('#preload').show();
    }
}, 100);
