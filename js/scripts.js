$(document).ready(function(){

  $("#menu li").hover(
    function(){
      var link = $(this).find("a");
      margin_left = link.css("margin-left");
      link.animate({
           marginLeft: '0',
      }, 1000);
    },
    function(){
      $(this).find("a").animate({
          marginLeft: margin_left,
      }, 1000);
    }
  );
});