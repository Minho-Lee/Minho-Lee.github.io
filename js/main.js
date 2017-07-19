$(document).ready(function() {

	//when refreshed, scroll back to the top automatically
	//commenting it out for development purposes. 
	// scrollToFast('header');
 //   	$('body').scrollTop('0'); //For Chrome, Safari and Opera
 //   	document.documentElement.scrollTop = 0; // For IE and Firefox
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
	
	var panelClick = true;
	//panel group (fa icon)
	// $(".panel-group").on('click', 'h4' ,function() {
	// 	// $(this).find('i:not(.hidden)').toggleClass('hidden');
	// 	//changes fa icon from plus to minus and back
	// 	if ($(this).parent().parent().data('open') === true ||
	// 		$(this).parent().parent().data('open') === 'undefined') {
	// 		$(this).find('i').toggleClass('hidden');	
	// 	}
	// 	// $(this).find('i').toggleClass('hidden');
	// });

	//switching between plus minus icons
	$('.panel-group .panel').on('shown.bs.collapse', function() {
		console.log('hi');
		$(this).find('i').toggleClass('hidden');
	});
	$('.panel-group .panel').on('hidden.bs.collapse', function() {
		$(this).find('i').toggleClass('hidden');
	});
	//panel group (collapsing panels)
	$('.panel-group').on('click' , '.panel' , function() {
		//console.log($('.panel-group .panel').not($(this)));
		$('.panel-group .panel').not($(this)).find('.collapse.in').collapse('toggle')
			.data('open'. false);
		$(this).data('open', true);

	});
});//document.ready

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


