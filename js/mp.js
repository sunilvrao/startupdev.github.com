$(document).on('ready', function() {
	$('#landing').append('<div class="bg-cover"></div>');
	$('#who-we-are').append('<div class="bg-cover"></div>');

	// last and first child
	$(':last-child').addClass('last-child');
	$(':first-child').addClass('first-child');

	$('#testimonials ul li:nth-child(2n)').addClass('n2');

	// with jQuery
	$('#testimonials ul').masonry({
	  columnWidth: 480,
	  itemSelector: 'li'
	});

	$("select.text").chosen();
});
