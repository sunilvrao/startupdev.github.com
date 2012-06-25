$(document).ready(function(){
  $('nav, .call-to-action').localScroll({
    duration: 1000,
    axis: 'y'
  });

  $("#menu li").hover(
    function(){
      var link = $(this).find("a");
      margin_left = link.css("margin-left");
      link.animate({
           marginLeft: '0',
      }, 500);
    },
    function(){
      $(this).find("a").animate({
          marginLeft: margin_left,
      }, 500);
    }
  );
  $("#testimonials .slider-container").jCarouselLite({
    btnNext: "#testimonial-next",
    btnPrev: "#testimonial-previous",
    visible: 1,
    speed: 1000,
    beforeStart: function(e){
      $(e).animate({opacity:0});
      // We need both to be updated because the user can go either left or right.
      $(e).prev().css({opacity: 100})
      $(e).next().css({opacity: 100})
    }
  });

  $("#developed-projects-slider div").jCarouselLite({
      btnNext: "#slider-next",
      btnPrev: "#slider-previous",
      visible: 1
  });
});
