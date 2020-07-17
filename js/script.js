
$('.page-scroll').on('click', function (e) {
	
	var destination=$(this).attr('href');
	var elemenDestination = $(destination);

	$('html , body').animate({
		scrollTop: elemenDestination.offset().top - 50

	}, 1250, 'swing');


	e.preventDefault();

});