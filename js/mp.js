$(document).on('ready', function() {
	$('article#testimonials ul li:nth-child(3n)').css('marginRight', 0);

	$('#how-works-gallery').cycle();


	// var $c = $('#cases ul');
 //  	while ($c.children('li').length) {
 //  		// console.log('ok');
 //  		console.log($c.children('li:lt(18)'));
 //    	// $c.children('li:lt(18)').wrapAll('<li class="wrap">');
 //    };

 	var ProjQtd = $('#cases ul').children('li').length;
 	console.log(ProjQtd); // 55

 	while (ProjQtd--) {
 		console.log($(this));
 		$('#cases ul li:lt(18)').wrapAll('<li class="item"><ul>');
 	};

	// $("#developed-projects-slider div").jCarouselLite({
	// 	btnNext: "#slider-next",
	// 	btnPrev: "#slider-previous",
	// 	visible: 1,
	// 	btnGo: ["#projects-slider-navigation .1", "#projects-slider-navigation .2", "#projects-slider-navigation .3"]
	// });
})