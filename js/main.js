$(document).ready(function() {

	//when refreshed, scroll back to the top automatically
   $('body').scrollTop('0'); //For Chrome, Safari and Opera
   document.documentElement.scrollTop = 0; // For IE and Firefox

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
	if (clickover.attr('href') === '#whoWeAre') {
			scrollTo('section1');
		} else if (clickover.attr('href') === '#whatWeDo') {
			scrollTo('section2');
		} else if (clickover.attr('href') === '#whyChooseUs') {
			scrollTo('section3');
		} else if (clickover.attr('href') === '#ourteam') {
			scrollTo('section4');
		} else if (clickover.attr('href') === '#contactUs') {
			scrollTo('section5');
		}
	});//document.click
});//document.ready

//scrolls to the given id's position
var scrollTo = function(id) {
   $('html, body').animate({
                  scrollTop: $("#" + id).offset().top-50
               }, 1000);
}