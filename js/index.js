$(document).ready(function() {


// Prevent default behaviour of anchor elements
$('a').on('click', function(event) {
	event.preventDefault();
});


/******************************************
/* Readmore / Readless
/*******************************************/



// $('.readmore').on('click', function() {

// 	// reveal #show-this-on-click
// 	$('#show-this-on-click').slideDown();
// 	// show .readless
// 	$('.readless').show();
// 	// hide .readmore
// 	$('.readmore').hide();
	
// });

// $('.readless').on('click', function() {

// 	// hide #show-this-on-click
// 	$('#show-this-on-click').slideUp();
// 	// hide .readless
// 	$('.readless').hide();
// 	//show .readmore
// 	$('.readmore').show();
	
// });

////////// 'Works' but creates a jarring effect on paragraph reveal ('assuming' I've implemented correctly!)



$('.readmore').on('click', function() {

	// hide 'clicked' anchor (readmore)
	$(this).addClass('hide');
	// reveal 'next' anchor, 'after next' paragraph (readless)
	$(this).next('p').next('a').toggle();  // <-- Traversal feels a bit hacky!
	// reveal 'next' paragraph text
	$(this).next('p').slideToggle();

});

$('.readless').on('click', function() {
	
	// hide 'clicked' anchor (readless)
	$(this).slideToggle();
	// hide 'previous' paragraph text
	$(this).prev('p').slideToggle();	
	// reveal 'previous' anchor, 'before previous' paragraph (readmore)
	$(this).prev('p').prev('a').removeClass('hide');  // <-- Tried to create a short delay with .setTimeout() to reduce jarring return. Failed though...

});

////////// Tried to work in some DOM traversals



/******************************************
/* Learnmore
/*******************************************/



$('.learnmore').on('click', function() {

	// hide .learnmore
	$('.learnmore').hide();
	// reveal #leanmoretext
	$('#learnmoretext').slideDown();

});



});