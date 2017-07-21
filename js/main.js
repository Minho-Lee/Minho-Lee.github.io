//loading circle
$(window).bind("load", function () {
    $('#work-in-progress').fadeOut(100);
});


$(document).ready(function() {

	//when refreshed, scroll back to the top automatically
	//commenting it out for development purposes. 
	$(window).on('beforeunload', function(){
		location.reload();
		// document.body.scrollTop = document.documentElement.scrollTop = 0;

		// $(window).scrollTop(0);
	 	//   $('body').scrollTop('0'); //For Chrome, Safari and Opera
		// document.documentElement.scrollTop = 0; // For IE and Firefox
	}); 

 	$('.back-to-top').click(function(e) {
 		scrollToFast('header');
 		e.preventDefault();
 	});
	$('nav li a').click(function(e) {

		var $parent = $(this).parent();
		if (!$parent.hasClass('active')) {
		//console.log($("nav ul li"));
		//console.log($(this)[0]);
		$("nav ul li").removeClass('active');
			$parent.addClass('active');
		}
    });

	// Add smooth scrolling on all links inside the navbar
 	$("#myNavbar a, #post-carousel a, #myCarousel a").on('click', function(event) {
   	// Make sure this.hash has a value before overriding default behavior
   	if (this.hash !== "") {
	      // Prevent default anchor click behavior
	      event.preventDefault();

	      // Store hash
	      var hash = this.hash;
	      console.log(hash);
	      // Using jQuery's animate() method to add smooth page scroll
	      $('html, body').animate({
	        scrollTop: $(hash).offset().top - 49
	      	}, 1000, function(){
	        		// Add hash (#) to URL when done scrolling (default click behavior)
	        		window.location.hash = hash;
	      	});
    	};// End if
  	});
  	

	//on mobile device, when menu is minimized, clicking anywhere else closes the menu
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
		


		// if (clickover.attr('href') === '#section1') {
		// 	scrollTo('section1');
		// } else if (clickover.attr('href') === '#section2') {
		// 	scrollTo('section2');
		// } else if (clickover.attr('href') === '#section3') {
		// 	scrollTo('section3');
		// } else if (clickover.attr('href') === '#section4') {
		// 	scrollTo('section4');
		// } else if (clickover.attr('href') === '#section5') {
		// 	scrollTo('section5');
		// }

		//event.preventDefault();
	});//document.click

	$(".icon-section").mouseenter(function() {
		$(".options .service-links").hover(function() {
			$(this).addClass('active');
		}, function() {
			$(this).removeClass('active');
		});//hover	
	}).mouseleave(function() {
		$(".options .service-links").hover(function() {
			$(this).addClass('active');
		}, function() {
			$(this).removeClass('active');
		});//hover	
	});
	
	// $(".panel-group").on('click', 'h4' ,function() {
	// 	// $(this).find('i:not(.hidden)').toggleClass('hidden');
	// 	//changes fa icon from plus to minus and back
	// 	// $(this).find('i').toggleClass('hidden');
	// });

	//switching between plus minus icons
	$('.panel-group .panel').on('show.bs.collapse', function() {
		$(this).find('i').toggleClass('hidden');
		$(this).toggleClass('panel-danger');
	});
	$('.panel-group .panel').on('hide.bs.collapse', function() {
		$(this).find('i').toggleClass('hidden');
		$(this).toggleClass('panel-danger');
	});
	//panel group (collapsing panels)
	$('.panel-group .panel').on('click', '.panel-title' , function() {
		//console.log($('.panel-group .panel').not($(this)));
		$('.panel-group .panel').not($(this)).find('.collapse.in').collapse('toggle');
		//console.log($('.panel-group .panel').not($(this)).next());
	});
	
	$("#section2").data('animated', false);
});//document.ready

$(window).scroll(function() {
	//console.log($(window).scrollTop() + ' / ' + ($("#section1").offset().top + $("#section1").height()));
	//console.log($(window).height() + $(window).scrollTop());
	if (($(window).scrollTop() + $(window).height() > $("#section1").height()+ 50) &&
		 $("#section2").data('animated') === false) {
			$("#section2 .insert-animation-left").addClass('slideInLeft');
			$("#section2 .insert-animation-right").addClass('slideInRight');
			$("#section2").data('animated', true);
		}
})

//scrolls to the given id's position
var scrollTo = function(id) {
   $('html, body').animate({
                  scrollTop: $("#" + id).offset().top-50
               }, 1000);
}

var scrollToFast = function(id) {
   $('html, body').animate({
                  scrollTop: $("#" + id).offset().top-50
               }, 
               {duration: 500});
}

var reset = function() {
	$('body').scrollTop(0);
}

