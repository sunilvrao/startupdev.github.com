$(document).ready(function(){
  $('nav').localScroll({
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
});
