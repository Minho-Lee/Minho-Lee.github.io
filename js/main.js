$(document).ready(function() {

	//when refreshed, scroll back to the top automatically
   $('body').scrollTop('0'); //For Chrome, Safari and Opera
   document.documentElement.scrollTop = 0; // For IE and Firefox

   	$('nav li a').click(function(e) {

   		var $parent = $(this).parent();
   		if (!$parent.hasClass('active')) {
			//console.log($("nav ul li"));
			//console.log($(this)[0]);
			$("nav ul li").removeClass('active');
			$parent.addClass('active');
		}
		e.preventDefault();
   	});

	$(document).click(function(event) {
		var clickover = $(event.target),
		 	_opened = $('.navbar-collapse').hasClass('in'),
			$parent = clickover.parent();

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

		event.preventDefault();
	});//document.click

	$(".icon-section").mouseenter(function() {
		$(".options .service-links").hover(function() {
			$(this).toggleClass('active');
		}, function() {
			$(this).toggleClass('active');
		});//hover	
	}).mouseleave(function() {
		$(".options .service-links").hover(function() {
			$(this).toggleClass('active');
		}, function() {
			$(this).toggleClass('active');
		});//hover	
	});
	
		
	// 	$(this).css({'color': 'black'});
	// },
	// function() {
	// 	$(this).css({'color': 'gray'});
	// });
});//document.ready

//scrolls to the given id's position
var scrollTo = function(id) {
   $('html, body').animate({
                  scrollTop: $("#" + id).offset().top-50
               }, 1000);
}