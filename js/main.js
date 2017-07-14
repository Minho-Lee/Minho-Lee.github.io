
$('body nav ul li').on('click', 'a', function() {
	if ($(this).attr('href') === '#whoWeAre') {
		scrollTo('section1');
	} else if ($(this).attr('href') === '#whatWeDo') {
		scrollTo('section2');
	} else if ($(this).attr('href') === '#whyChooseUs') {
		scrollTo('section3');
	} else if ($(this).attr('href') === '#ourteam') {
		scrollTo('section4');
	} else {
		scrollTo('section5');
	}
});




$(document).ready(function() {
	
});

//scrolls to the given id's position
var scrollTo = function(id) {
   $('html, body').animate({
                  scrollTop: $("#" + id).offset().top-50
               }, 2000);
}