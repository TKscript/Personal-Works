//导航栏显示二级菜单
$(function() {
	$(".topList").hover(function(){
		$(".nav-list").fadeIn();
	},function(){
		$(".nav-list").hide();
	});
	$(".nav-list").hover(function(){
		$(".nav-list").show();
	},function(){
		$(".nav-list").fadeOut();
	});
})
//轮播效果启动
$(function() {
	$("#myCarousel").carousel("cycle");
});
//轮播部分锚点跳转
$(function() {
	$(".carousel-inner").find("a").click(function(){
		$("html, body").animate({
			scrollTop: $($.attr(this, "href")).offset().top
		});
		return false;
	});
});
//轮播部分导航
$(function() {
	$("#myCarousel").hover(function(){
		$(".carousel-control").fadeIn();
	},function(){
		$(".carousel-control").fadeOut();
	});
});
//伸缩样式代码
$(function() {
	$('.kwicks').kwicks({
		maxSize :550,
		spacing :0,
		behavior:'menu'
	});
});
$(function() {
	$(".kwicks").find("li").hover(function(){
		$(this).find("h4").fadeOut();
		$(this).find(".menu-show").delay(200).fadeIn();
	},function(){
		$(this).find("h4").fadeIn();
		$(this).find(".menu-show").fadeOut();
	});
});
//gallery
$(function() {
	$("#galleryBtns").click(function(){
		$("#gallery_2").fadeIn();
		$("#gallery_1").hide();
		$("#gallery_3").hide();
		$("#galleryBtns").addClass("gallery-active");
		$("#galleryBtnf, #galleryBtnt").removeClass("gallery-active");
   });
	$("#galleryBtnt").click(function(){
		$("#gallery_3").fadeIn();
		$("#gallery_1").hide();
		$("#gallery_2").hide();
		$("#galleryBtnt").addClass("gallery-active");
		$("#galleryBtnf, #galleryBtns").removeClass("gallery-active");
   });
	$("#galleryBtnf").click(function(){
		$("#gallery_1").fadeIn();
		$("#gallery_2").hide();
		$("#gallery_3").hide();
		$("#galleryBtnf").addClass("gallery-active");
		$("#galleryBtns, #galleryBtnt").removeClass("gallery-active");
   });
});
