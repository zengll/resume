
var Swiper=require('./components/swiper/swiper-3.3.1.min');
var swiperAnimate=require('./components/swiper/swiper.animate1.0.2.min')

var swiper = new Swiper ('.swiper-container', {
  onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
    swiperAnimate.swiperAnimateCache(swiper); //隐藏动画元素 
    swiperAnimate.swiperAnimate(swiper); //初始化完成开始动画
  }, 
  onSlideChangeEnd: function(swiper){ 
    swiperAnimate.swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
  } 
  }) 
    var $ = require('zepto-modules/zepto');
    require('zepto-modules/event');
    require('zepto-modules/ajax');
    require('zepto-modules/touch');
    module.exports = $;
        $("#myIscroll").hide();
        $(".swiper-container").show();
        
        $("#enter").tap(function(){
            $("#myIscroll").show();
            $(".swiper-container").hide();

            var IScroll=require('./components/iscroll/iscroll');
            var myScroll;
            myScroll = new IScroll('#wrapper', { mouseWheel: true });
            
            
            $.post('/api/skill',{},function(data){
							console.log(data[0].name);
							
							for(var i=0;i<data.length;i++){
									$('#scroller').append("<ul><li>"+data[i].category+"</li><li><p>"+data[i].name+"</p><p>时间："+data[i].time+"</p><p>程度："+data[i].level+"</p></li></ul></br>");
							}
							
							
						})
            
            
            document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);

    })


//经历
$("#work").tap(function () {
	$("#scroller").html("");
	$.post('/api/work',{},function (data) {
								$('#scroller').html("");
		for(var i=0;i<data.length;i++){
					$('#scroller').append("<ul><li>"+
					data[i].category+"</li><li><p>"+data[i].name+
					"</p><p>时间："+data[i].time+
					"</p></li></ul>");
		}
	})
})
//技能
$("#skill").tap(function(){
						
						var IScroll=require('./components/iscroll/iscroll');
            var myScroll;
            myScroll = new IScroll('#wrapper', { mouseWheel: true });
            $.post('/api/skill',{},function(data){
							console.log(data[0].name);$("#scroller").html("");
								$('#scroller').html("");
							for(var i=0;i<data.length;i++){
									$('#scroller').append("<ul><li>"+data[i].category+"</li><li><p>"+data[i].name+"</p><p>时间："+data[i].time+"</p><p>程度："+data[i].level+"</p></li></ul></br>");
							}
						})
            document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);

    })
  //项目
  $("#project").tap(function(){
	var IScroll = require("./components/iscroll/iscroll");
	var myScroll;

	myScroll = new IScroll('#wrapper', { mouseWheel: true });
	$('#scroller').html("");
	$.post('/api/project',{},function(data){
	$('#scroller').html("");
		
		console.log(data[0].name);
		
		for(var i=0;i<data.length;i++){
			$('#scroller').append("<ul><li>"+data[i].category+"</li><li><p>"+data[i].name+"</p><p>地址："+data[i].url+"</p><p>使用："+data[i].tech+"</p></li></ul>");
		}
	})
	document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
})

 //我的
  $("#my").tap(function(){
	var IScroll = require("./components/iscroll/iscroll");
	var myScroll;
	$('#scroller').html("");
		$('#scroller').append("<img src='../images/1478956315.png'/><br /><p class='te'>如果对我感兴趣</p><br /><p class='te'>请联系我</p><br /><p class='te'>17854294178</p><br /><p class='te'>3161658988@qq.com</p>");
	
})

 //返回
  $("#return").tap(function(){
	$("#myIscroll").hide();
  $(".swiper-container").show();
	
		
})

