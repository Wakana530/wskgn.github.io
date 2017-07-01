$('.fa-bars').on('click',function(){
	$('.top-menu-item').slideToggle();
});

$("#page1-images").skippr({
	transition:'fade',
	speed: 1000,
	easing: 'easeOutQuart',
	navType:'block',
	childrenElementType: 'div',
	arrows: true,
	autoPlay: false,
	autoPlayDuration: 5000,
	keyboardOnAlways: true,
	hidePrevious: false
});

$('.page3-image-box1').hover(function(){
	$('.page3-overlay-box1').stop().fadeToggle();
});

$('.page3-image-box2').hover(function(){
	$('.page3-overlay-box2').stop().fadeToggle();
});

$('.page3-image-box3').hover(function(){
	$('.page3-overlay-box3').stop().fadeToggle();
});

new WOW().init();

$(function() {
    var topBtn = $('#page-top');    
    topBtn.hide();
    //スクロールが100に達したらボタン表示
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }
    });
    //スクロールしてトップ
    topBtn.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
});