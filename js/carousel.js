$(function () {

  $('.carousel').hide();
  $('.carousel').eq(0).show();
  $('.prev, .next').hide();

  $('.carousel').each(function () {

    var slideWidth = $(this).find('.slide').width(),
        slideCount = $(this).find('.slide').size(),
        pos = 0;

    $(this).find('.slide_tray').width(slideWidth * slideCount);
    
    $(this).hover(function () {
      $(this).find('.prev, .next').show();
    },function(){
     $(this).find('.prev, .next').hide();
    });

    $(this).find('.next').click(function () {
      if (pos < slideCount - 1) {
        pos += 1;
      } else {
        pos = 0;
      }
      var slideAmount = slideWidth * pos;
      $(this).parent().find('.slide_tray').animate({ 'right': slideAmount }, 400);
    });

    $(this).find('.prev').click(function () {
      if (pos > 0) {
        pos -= 1;
      } else {
        pos = slideCount - 1;
      }
      var slideAmount = slideWidth * pos;
      $(this).parent().find('.slide_tray').animate({ 'right': slideAmount }, 400);
    });

  });

  $('.Work-page a').click(function () {
    var selCarousel = $(this).attr('href');
    $('.carousel').hide();
    $(selCarousel).show();
  });

});