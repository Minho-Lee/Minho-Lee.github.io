
$('body nav ul li').on('click', 'a', function(e) {
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
	e.preventDefault();
});




$(document).ready(function() {
	$(document).click(function(event) {
		var clickover = $(event.target);
		var _opened = $('.navbar-collapse').hasClass('in');

		var navMain = $(".navbar-collapse");

		navMain.on('click', 'a:not([data-toggle])', null, function() {
			navMain.collapse('hide');
		});
		
		if (!clickover.hasClass('navbar-collapse') && _opened) {
			navMain.collapse('hide');
		}
	});//document.click
});

//scrolls to the given id's position
var scrollTo = function(id) {
   $('html, body').animate({
                  scrollTop: $("#" + id).offset().top-50
               }, 2000);
}