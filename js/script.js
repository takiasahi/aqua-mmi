
//SMOOTH SCHROLL
$(function(){
  $('a[href^="#"]').click(function(){
    let speed = 500;
    let href= $(this).attr("href");
    let target = $(href == "#" || href == "" ? 'html' : href);
    let position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});

//SLIDER(FIRST VIEW)
$('.slider').slick({
  autoplay: true,
  autoplaySpeed: 2000,
  speed: 1000,
  fade: true,
  arrows: false,
  cssEase: 'linear'
});

//SLIDER(BANNER)
$(function(){

  function sliderSetting(){
  
    var width = $(window).width();

    if(width <= 768){
      $('.bn-slick').not('.slick-initialized').slick({
        centerMode: true,
        centerPadding: '15%',
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1000,
        infinite: true,
        arrows: false
      });
    } else {
        $('.bn-slick.slick-initialized').slick('unslick');
    }
  }

  sliderSetting();

  $(window).resize( function() {
    sliderSetting();
  });

});

//HAMBURGER MENU
$('.burger-btn').on('click',function() {
  $('.hamburger-menu').fadeToggle(300);
  $('.burger-btn').toggleClass('cross');
  $('body').toggleClass('noscroll');
});

//ページ内リンク対策(リンクが押された時にハンバーガーを閉じる)
$('.hbg-link').on('click', function() {
  $('.burger-btn').trigger('click');
});

// ページ内リンクを押した時に、固定ヘッダーに隠れないようにする
$(function(){
    var windowWidth = $(window).width();
    var headerHight = 100; 
    jQuery('.hbg-link').click(function() {
    var speed = 1000;
    var href= jQuery(this).attr("href");
    var target = jQuery(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top-headerHight;
    jQuery('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
   });
});

