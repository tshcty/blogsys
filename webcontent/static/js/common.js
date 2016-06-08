/*-- 所有页面公共特效  start--*/
$(function() {
//用户专栏特效
	function slide(){
		$('#choose .b-show .img').click(function(){
			//#choose .select
			$('#choose .xuanxka').slideToggle('slow',function(){
				//动画
			});
		});
	}
	slide();

//回顶部特效
	function totop(){
		$("#toTop").scrollToTop(500);
	}
	totop();

//设置导航的active
	function choose(tplab,tlab,tclass){

		var title=$('title').html();
		$(tplab).removeClass(tclass);
		$(tlab).each(function(index){
			if($(this).html()== title){
				$(tplab).eq(index).addClass(tclass);
			}
		});
	}
	(function(){
		var tplab='#header-wrapper .nav li'
		var tlab='#header-wrapper .nav a';
		var tclass= "on";
		choose(tplab,tlab,tclass);
	})();

	(function(){
		var tplab='#user-wrapper  li'
		var tlab='#user-wrapper  a';
		var tclass= "active";
		choose(tplab,tlab,tclass);
	})();



});



/*-- 所有页面公共特效  end--*/

//--------------------------所有与单个的界限
/*-- 各个页面特效  start--*/

/*-- 各个页面特效  end--*/

//--------------------------------未使用
/*-- 预备未使用的特效  start--*/
//鼠标移入移除变换显示文字特效
$('.info_2').hide();
$(".showlike .info-w").bind({
	mouseover: function(){
		$(this).addClass("xz")
		$('.xz .info_1').hide("linear");
		$('.xz .info_2').show("linear");
	},
	mouseleave: function(){
		$('.xz .info_2').hide("linear");
		$('.xz .info_1').show("linear");
		$(this).removeClass("xz");
	}
});

//图片轮播部分，使用插件
jQuery(function ($) {
	var slider = $('.mis-stage').miSlider({
		stageHeight: 400,
		slidesOnStage: false,
		slidePosition: 'center',
		slideStart: 'mid',
		slideScaling: 150,
		offsetV: -5,
		centerV: true,
		navButtonsOpacity: 1
	});
});
/*-- 预备未使用的特效  end--*/



