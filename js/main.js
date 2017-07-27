//loading circle
$(window).bind("load", function () {
    $('#spinner-id').fadeOut(100);
});

//when refreshed, scroll back to the top automatically
	//commenting it out for development purposes. 
	$(window).on('beforeunload', function(){
		// console.log(location);
		document.body.scrollTop = document.documentElement.scrollTop = 0;
		$(window).scrollTop(0);
	 	$('body').scrollTop('0'); //For Chrome, Safari and Opera
	 	location.reload();
	}); 

$(document).ready(function() {
	'use strict';
	history.pushState("", document.title, window.location.pathname);

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
	      // console.log(hash);
	      // Using jQuery's animate() method to add smooth page scroll
	      $('html, body').animate({
	        scrollTop: $(hash).offset().top - 49
	      	}, 1000, function(){
	        		// Add hash (#) to URL when done scrolling (default click behavior)
	        		window.location.hash = hash;
	      	});
    	};// End if
  	});
  	

	//on mobile device or small browser, when menu is minimized, clicking anywhere else closes the menu
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
	
	//randomly assigns a percentage of skills for each team member from 40~99
	//and using circliful, makes it into a circle percentage display
	$('.modal .skills').find('div').each(function() {
		var randNum = Math.floor(Math.random() * 60) + 40;
		$(this).html('').circliful({
			percent: randNum,
			textColor: 'black',
			textY: 200,
			textStyle: "font-size : 1.5em",
			foregroundBorderWidth: 19,
			backgroundBorderWidth: 20,
			foregroundColor: '#00d664'
		});
	});

	/* ISOTOPE- arranging photos in portfolio section*/
	var $container = $(".portfolio-wrapper");

	$container.isotope({
		itemSelector: '.portfolio-item',
		animationEngine: 'best-available',
      	animationOptions: {
          duration: 500,
          queue: false
      },
		layoutMode: 'fitRows'
	});

	// Split columns for different size layout (fits bootstrap sizes)
   function splitColumns() {
   	var windowWidth = $(window).width(),
      	 columnNumber = 1; //  default column number
    	if (windowWidth > 1200) {
    		columnNumber = 4;
  		} else if (windowWidth > 767) {
    		columnNumber = 3;
  		} else if (windowWidth > 600) {
      	columnNumber = 2;
  		}
  		return columnNumber;
   }

  // Set width for portfolio item (so it spans out to the browser fully as browser resizes)
  	function setColumns() {
    	var windowWidth = $(window).width(),
      	 columnNumber = splitColumns(),
        	 postWidth = Math.floor(windowWidth / columnNumber);

   		$container.find('.portfolio-item').each(function() {
        	$(this).css({
      	   width: postWidth + 'px'
        	});
    	});
  	}//setColumns

  	// initialize isotope
  	function initIsotope() {
		setColumns();
		//option: layout -> when all items need to be laid out without filtering/sorting
		$container.isotope('layout');
  	}
  	$container.imagesLoaded(function() {
  		setColumns();
  	}).always( function( instance ) {
   	console.log('all images loaded');
	}).done( function( instance ) {
   	console.log('all images successfully loaded');
  	});//imagesLoaded
  	
  	//when window resizes, reinitialize isotope
  	$(window).bind('resize', function() {
  		initIsotope();
  	});
  	initIsotope();

	/* Toggling active classes in filters under portfolio*/
	/* Also toggling filtering of isotope images underneath */
	$(".filters ul").find('a').on('click', function() {
		$('.filters ul').find('a.active').removeClass('active');
		$(this).addClass('active');
		//Simplified:
		/* $(".filters ul a").removeClass('active');
		$(this).addClass('active'); */
		var filterVal = $(this).attr('data-filter');
		$container.isotope({
			filter: filterVal
		});
		initIsotope();
	});

	/* Activating Nivo-lightbox*/
	$("#section5 .portfolio").find('a').nivoLightbox({
		effect: 'slideDown',
		errorMessage: 'The requested content cannot be loaded. Please try again later.'
	});

	/*Contact us section*/
	//using change() over click() in this case cause click() is triggered in the intial click
	$(".service-info select").change(function() {
		if ($(this).find(':selected').val() === 'other') {
			$("#insert-other").html('<label><input type="text" name="other" placeholder="Specify Here" \
				onfocus="this.placeholder=\'\'" onblur="this.placeholder=\'Specify Here\'"/></label>').show();
		} else {
			$("#insert-other").html('').hide();
		};
	});
	
	//toggles radio button fonts to blue and black as they are selected
	$(".service-info .radio-options").change(function() {
		$('.service-info .radio-options span').css('color', 'black');
		$(this).find(':checked').next().css('color', '#428bca');
	})
	
});//document.ready
/* * * * * * * * * * * * * * * * * */

//using bootstrap's scrollspy, keeps track of where the user is and navbar is updated accordingly
//adds in animation according to the scroll position
$(window).scroll(function() {
	//console.log($(window).scrollTop() + ' / ' + ($("#section1").offset().top + $("#section1").height()));
	//console.log($(window).height() + $(window).scrollTop());
	$("#myNavbar").on('activate.bs.scrollspy', function() {
		var hash = $(this).find('li.active a').attr('href');
		//adding the if statment in order to only trigger the animation once per hash
		if ($(hash).data('animated') === false || $(hash).data('animated') == null) {
			$('body').find(hash).find('.insert-slideInLeft').removeClass('invisible').addClass('slideInLeft');
			$('body').find(hash).find('.insert-slideInRight').removeClass('invisible').addClass('slideInRight');
			$('body').find(hash).find('.insert-fadeInLeft').removeClass('invisible').addClass('fadeInLeft');
			$('body').find(hash).find('.insert-fadeInRight').removeClass('invisible').addClass('fadeInRight');
			$('body').find(hash).find('.insert-fadeInUp').removeClass('invisible').addClass('fadeInUp');
			$('body').find(hash).find('.insert-fadeInDown').removeClass('invisible').addClass('fadeInDown');
			$('body').find(hash).find('.insert-bounceInLeft').removeClass('invisible').addClass('bounceInLeft');
			$('body').find(hash).find('.insert-bounceInRight').removeClass('invisible').addClass('bounceInRight');
			$(hash).data('animated', true);
		}
		// if (($(window).scrollTop() + $(window).height() > $("#section1").height()+ 50) &&
		//  $("#section2").data('animated') === false) {
		// 	$("#section2 .insert-animation-left").addClass('fadeInLeft');
		// 	$("#section2 .insert-animation-right").addClass('fadeInRight');
		// 	$("#section2").data('animated', true);
		// }
	});
});//window.scroll

//scrolls to the given id's position
var scrollTo = function(id) {
   $('html, body').animate({
                  scrollTop: $("#" + id).offset().top-50
               }, 1000);
}
//scrolls to given id's position fast
var scrollToFast = function(id) {
   $('html, body').animate({
                  scrollTop: $("#" + id).offset().top-50
               }, 
               {duration: 500});
}

//loading Google Maps
var marker, map, infowindow;

function initMap() {
	//xerox building at finch
   var uluru = {lat: 43.7800423, lng: -79.4159908};
   map = new google.maps.Map(document.getElementById('myMap1'), {
      zoom: 15,
      center: uluru
   });
   marker = new google.maps.Marker({
      position: uluru,
      animation: google.maps.Animation.DROP,
      map: map
   });
   marker.addListener('click', toggleBounce);

   infowindow = new google.maps.InfoWindow({
   	content: "Xerox Building"
  	});
   marker.addListener('click', function() {
   	toggleInfowindow();
   	infowindow.isOpen = true;
   });

   google.maps.event.addListener(marker, 'click', function () {
	   map.panTo(marker.getPosition());
	   //map.setCenter(marker.getPosition()); // sets center without animation
	});
   //google maps resizes as browser resizes
	google.maps.event.addDomListener(window, "resize", function() {
	    var center = map.getCenter();
	    google.maps.event.trigger(map, "resize");
	    map.setCenter(center);
	});
};//initMap

function toggleBounce() {
  	if (marker.getAnimation() !== null) {
    	marker.setAnimation(null);
  	} else {
    	marker.setAnimation(google.maps.Animation.BOUNCE);
    	setTimeout(function() { marker.setAnimation(null); }, 3000);
  	}
}
function toggleInfowindow() {
	infowindow.open(map, marker);
	setTimeout(function() { infowindow.close(); }, 3000);
}


