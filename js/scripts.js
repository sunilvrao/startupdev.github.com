$(document).ready(function(){
  $('nav, .call-to-action').localScroll({
    duration: 1000,
    axis: 'y'
  });

  $("#menu li").hover(
    function(){
      var link = $(this).find("a");
      if (link.data('original-margin') == undefined) {
        link.data('original-margin', link.css("margin-left"));
      }
      link.animate({
           marginLeft: '0',
      }, 250);
    },
    function(){
      var link = $(this).find("a");
      link.animate({
          marginLeft: link.data('original-margin'),
      }, 250);
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

  $("#projects-slider-navigation a").click(function(){
    $("#projects-slider-navigation a").removeClass("selected");
    $(this).addClass("selected");
  });

  $("#developed-projects-slider div").jCarouselLite({
      btnNext: "#slider-next",
      btnPrev: "#slider-previous",
      visible: 1,
      btnGo: ["#projects-slider-navigation .1", "#projects-slider-navigation .2"]
  });
});
