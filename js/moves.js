$(function() {

  var slideWidth = $('.slide').width(),
      slideCount = $('.slide').size(),
      pos = 0;

  $('.slide_tray').width(slideWidth * slideCount);

  $('.prev, .next').hide();
  
  $('.carousel').hide();
  $('.carousel').eq(0).show();

  $('.carousel').hover(function(){
    $(this).find('.prev, .next').show();
  },function(){
   $(this).find('#prev, #next').hide();
  });

  $('.next').click(function() {
    if (pos < slideCount - 1) {
      pos += 1;
    } else {
      pos = 0;
    }
    var slideAmount = slideWidth * pos;
    $(this).parent().find('.slide_tray').animate({ 'right': slideAmount }, 400);
  });

  $('.prev').click(function() {
    if (pos > 0) {
      pos -= 1;
    } else {
      pos = slideCount - 1;
    }
    var slideAmount = slideWidth * pos;
    $(this).parent().find('.slide_tray').animate({ 'right': slideAmount }, 400);
  });

  $('.Work-page a').click(function(){
    var selCarousel = $(this).attr('href');
    $('.carousel').hide();
    $(selCarousel).show();
  });

});