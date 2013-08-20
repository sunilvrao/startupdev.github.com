$(document).on('ready', function() {
	$('#landing').append('<div class="bg-cover"></div>');

	// last and first child
	$(':last-child').addClass('last-child');
	$(':first-child').addClass('first-child');
})