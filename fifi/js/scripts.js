(function($){

	"use strict";

	$(window).load(function() {

		// Preloader
		$('.loader').fadeOut();
		$('.loader-mask').delay(350).fadeOut('slow');

		$(window).trigger("resize");
		masonry();
		initOwlCarousel();

		setTimeout(function() {
			$.stellar('refresh');
		}, 1000);
	});


	$(window).resize(function(){

		container_full_height_init();
		$.stellar('refresh');
		$('.equal-height').matchHeight();
		
		var windowWidth = $(window).width();
		if (windowWidth <= 974) {
			$('.navigation-overlay').removeClass("sticky");	
		}

		/* Mobile Menu Resize
		-------------------------------------------------------*/
		$(".navbar .navbar-collapse").css("max-height", $(window).height() - $(".navbar-header").height() );
		
	});


	// Sticky menu
	$(window).scroll(function(){

		var windowWidth = $(window).width();

		if ($(window).scrollTop() > 10 & windowWidth > 974){
			$('.navigation-overlay, .navbar-fixed-top').addClass("sticky");
			$('.logo-wrap').addClass("shrink");
		}else{
			$('.navigation-overlay, .navbar-fixed-top').removeClass("sticky");
			$('.logo-wrap').removeClass("shrink");
		}
	});

	/* Onepage Nav
	-------------------------------------------------------*/
	$('.onepage-nav .navbar-collapse ul li a').on('click',function() {
		$(".navbar-collapse").collapse('hide');
	});


	// Smooth Scroll Navigation
	$('.local-scroll').localScroll({offset: {top: -60},duration: 1500,easing:'easeInOutExpo'});


	/* Full screen Navigation
	// -------------------------------------------------------*/

	$('#nav-icon, .overlay-menu').on("click", function(){
		$('#nav-icon, #overlay').toggleClass('open');

		$(function(){		 
			var delay = 0
			$('.overlay-menu > ul > li').each(function(){
				$(this).css({animationDelay: delay+'s'})
				delay += 0.1
			})	 
		})
	});


	/* Bootstrap Dropdown Navigation
	-------------------------------------------------------*/
	"use strict";!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){function b(b){this.$element=a(b),this.$main=this.$element.closest(".dropdown, .dropup, .btn-group"),this.$menu=this.$element.parent(),this.$drop=this.$menu.parent().parent(),this.$menus=this.$menu.siblings(".dropdown-submenu");var d=this.$menu.find("> .dropdown-menu > "+c);this.$submenus=d.filter(".dropdown-submenu"),this.$items=d.not(".dropdown-submenu"),this.init()}var c=":not(.disabled, .divider, .dropdown-header)";return b.prototype={init:function(){this.$element.on({"click.bs.dropdown":this.click.bind(this),keydown:this.keydown.bind(this)}),this.$menu.on("hide.bs.submenu",this.hide.bind(this)),this.$items.on("keydown",this.item_keydown.bind(this)),this.$menu.nextAll(c+":first:not(.dropdown-submenu)").children("a").on("keydown",this.next_keydown.bind(this))},click:function(a){a.stopPropagation(),this.toggle()},toggle:function(){this.$menu.hasClass("open")?this.close():(this.$menu.addClass("open"),this.$menus.trigger("hide.bs.submenu"))},hide:function(a){a.stopPropagation(),this.close()},close:function(){this.$menu.removeClass("open"),this.$submenus.trigger("hide.bs.submenu")},keydown:function(a){if(/^(32|38|40)$/.test(a.keyCode)&&a.preventDefault(),/^(13|32)$/.test(a.keyCode))this.toggle();else if(/^(27|38|40)$/.test(a.keyCode))if(a.stopPropagation(),27==a.keyCode)this.$menu.hasClass("open")?this.close():(this.$menus.trigger("hide.bs.submenu"),this.$drop.removeClass("open").children("a").trigger("focus"));else{var b=this.$main.find("li:not(.disabled):visible > a"),c=b.index(a.target);if(38==a.keyCode&&0!==c)c--;else{if(40!=a.keyCode||c===b.length-1)return;c++}b.eq(c).trigger("focus")}},item_keydown:function(a){27==a.keyCode&&(a.stopPropagation(),this.close(),this.$element.trigger("focus"))},next_keydown:function(a){if(38==a.keyCode){a.preventDefault(),a.stopPropagation();var b=this.$drop.find("li:not(.disabled):visible > a"),c=b.index(a.target);b.eq(c-1).trigger("focus")}}},a.fn.submenupicker=function(c){var d=this instanceof a?this:a(c);return d.each(function(){var c=a.data(this,"bs.submenu");c||(c=new b(this),a.data(this,"bs.submenu",c))})}});
	$('.dropdown-submenu > a').submenupicker();


	/* Mobile Navigation 
	-------------------------------------------------------*/
	$('.dropdown-toggle').on('click', function(e){ e.preventDefault(); });
	

	/* Mobile Detect
	-------------------------------------------------------*/
	if (/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i.test(navigator.userAgent || navigator.vendor || window.opera)) {
		 $("html").addClass("mobile");
		 $('.dropdown-toggle').attr('data-toggle', 'dropdown');
	}
	else {
		$("html").removeClass("mobile");
	}


	/* IE Detect
	-------------------------------------------------------*/
	if(Function('/*@cc_on return document.documentMode===10@*/')()){ $("html").addClass("ie"); }


	/* Text Rotator
	-------------------------------------------------------*/
	$(".rotate").textrotator({
		animation: "dissolve", // You can pick the way it animates when rotating through words. Options are dissolve (default), fade, flip, flipUp, flipCube, flipCubeUp and spin.
		separator: ",",
		speed: 3000 
	});


	/* Counters
	-------------------------------------------------------*/
	$('.statistic').appear(function() {
		$('.timer').countTo({
			speed: 4000,
			refreshInterval: 60,
			formatter: function (value, options) {
				return value.toFixed(options.decimals);
			}
		});
	});


	/* Owl Carousel
	-------------------------------------------------------*/

	function initOwlCarousel(){
		(function($){
			"use strict";


			/* Testimonials
			-------------------------------------------------------*/

			$("#owl-testimonials").owlCarousel({
			
				navigation: false,
				navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
				autoHeight: true,
				slideSpeed: 300,
				pagination: true,
				paginationSpeed: 400,
				singleItem: true,
				stopOnHover: true
			
			})


			/* Partners Logo
			-------------------------------------------------------*/

			$("#owl-partners").owlCarousel({

				autoPlay: 3000,
				pagination: false,
				itemsCustom: [
					[0, 2],      
					[450, 2],
					[700, 3],
					[1000, 3],
					[1200, 4],
					[1400, 5],
					[1600, 6]
				]

			})


			/* Team
			-------------------------------------------------------*/

			$("#team-slider").owlCarousel({

				autoPlay: 3000,
				pagination: false,
				stopOnHover:	true,
				itemsCustom: [
					[0, 1],      
					[450, 2],
					[700, 3],
					[1000, 3],
					[1200, 4],
					[1400, 5],
					[1600, 5]
				]

			})


			/* Single Image
			-------------------------------------------------------*/

			$("#owl-single").owlCarousel({
		 
				navigation: true,
				slideSpeed: 300,
				paginationSpeed: 400,
				singleItem: true,
				navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
		 
			})


		})(jQuery);
	};


	/* FlexSlider
	-------------------------------------------------------*/

	function masonry() {
		var $container = $('.masonry');
		$container.imagesLoaded( function() {
			$container.isotope({
				itemSelector: '.masonry-item',
				layoutMode: 'masonry'
			});
		});
	}

	 
	// Flexslider / Masonry
	$('#flexslider').flexslider({
		animation: "slide",
		directionNav: true,
		touch: true,
		slideshow: false,
		prevText: ["<i class='fa fa-angle-left'></i>"],
		nextText: ["<i class='fa fa-angle-right'></i>"],
		start: function(){
			var $container = $('.masonry');
			$container.imagesLoaded( function() {
				$container.isotope({
					itemSelector: '.masonry-item',
					layoutMode: 'masonry'
				});
			});
		}
	});


	/* Flickity Slider
	-------------------------------------------------------*/

	// Featured Works
	var $gallery = $('.works-slider').flickity({
		cellAlign: 'center',
		contain: true,
		wrapAround: true,
		autoPlay: false,
		prevNextButtons: true,
		percentPosition: true,
		imagesLoaded: true,
		lazyLoad: 1,
		pageDots: true,
		selectedAttraction : 0.1,
		friction: 0.6,
		rightToLeft: false,
		arrowShape: 'M 10,50 L 55,95 L 60,90 L 20,50  L 60,10 L 55,5 Z'
	});

	// magnific popup bug fix
	var popupItems = $.map( $gallery.find('.gallery-cell a'), function( link ) {
    return {
      src: link.href,
      type: $(link).attr('data-popup-type') || 'image'
    }
  });
  
  $gallery.on('staticClick', function(event, pointer, cellElement, cellIndex) {
    if (!cellElement) {
      return;
    }
    $.magnificPopup.open({
      items: popupItems,
      gallery: {
        enabled: true
      },
      callbacks: {
        open: function () {
          $.magnificPopup.instance.goTo( cellIndex );
        }
      }
    });
  });

  // prevent links from opening
  $gallery.on( 'click', 'a', function(event) {
    event.preventDefault();
  });


	// From Blog
	$('.blog-slider').flickity({
		cellAlign: 'center',
		contain: true,
		wrapAround: true,
		autoPlay: false,
		prevNextButtons: true,
		percentPosition: true,
		imagesLoaded: true,
		lazyLoad: 1,
		pageDots: false,
		selectedAttraction : 0.1,
		friction: 0.6,
		rightToLeft: false,
		arrowShape: 'M 10,50 L 55,95 L 60,90 L 20,50  L 60,10 L 55,5 Z'
	});



	/* Progress Bars
	-------------------------------------------------------*/
	var $section = $('#animated-skills').appear(function() {

		var bar = $('.progress-bar');
		var bar_width = $(this);
	
		function loadDaBars() { 
				 
			$(bar).each(function(){
				bar_width = $(this).attr('aria-valuenow');
				$(this).width(bar_width + '%');
			});
		}
		loadDaBars();
	});


	/* Lightbox popup
	-------------------------------------------------------*/

	$('.lightbox-gallery').magnificPopup({
		tLoading: 'Loading image #%curr%...',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1]
		},
		image: {
			titleSrc: 'title',
			verticalFit: true
		}
	});


	$(".lightbox-video").magnificPopup();



	/* Portfolio Isotope
	-------------------------------------------------------*/

	var $portfolio = $('#portfolio-container');
	$portfolio.imagesLoaded( function() {			
		$portfolio.isotope({
			isOriginLeft: true
		});
		$portfolio.isotope();

	});

	// filter items on button click
	$('.portfolio-filter').on( 'click', 'a', function(e) {
		e.preventDefault();
		var filterValue = $(this).attr('data-filter');
		$portfolio.isotope({ filter: filterValue });

		$('.portfolio-filter a').removeClass('active');
		$(this).closest('a').addClass('active');

	});


	/* Equal Height
	-------------------------------------------------------*/

	$('.equal-height').matchHeight({
		byRow: true,
		property: 'height',
		target: null,
		remove: false
	});


	/* Parallax
	-------------------------------------------------------*/

	$.stellar({
		horizontalScrolling: false
	});


	// Wow Animations

	var wow = new WOW({
		offset: 50,
		mobile: false
	});

	wow.init();

	/* FitVIds
	-------------------------------------------------------*/
	$(".video-wrap").fitVids();


	/* Contact Form
	-------------------------------------------------------*/

	var submitContact = $('#submit-message'),
		message = $('#msg');

	submitContact.on('click', function(e){
		e.preventDefault();

		var $this = $(this);
		
		$.ajax({
			type: "POST",
			url: 'contact.php',
			dataType: 'json',
			cache: false,
			data: $('#contact-form').serialize(),
			success: function(data) {

				if(data.info !== 'error'){
					$this.parents('form').find('input[type=text],input[type=email],textarea,select').filter(':visible').val('');
					message.hide().removeClass('success').removeClass('error').addClass('success').html(data.msg).fadeIn('slow').delay(5000).fadeOut('slow');
				} else {
					message.hide().removeClass('success').removeClass('error').addClass('error').html(data.msg).fadeIn('slow').delay(5000).fadeOut('slow');
				}
			}
		});
	});


})(jQuery);


/* Scroll to Top
-------------------------------------------------------*/

(function() {
	"use strict";

	var docElem = document.documentElement,
		didScroll = false,
		changeHeaderOn = 550;
		document.querySelector( '#back-to-top' );
	function init() {
		window.addEventListener( 'scroll', function() {
			if( !didScroll ) {
				didScroll = true;
				setTimeout( scrollPage, 50 );
			}
		}, false );
	}
	
})();

$(window).scroll(function(event){
	var scroll = $(window).scrollTop();
	if (scroll >= 50) {
		$("#back-to-top").addClass("show");
	} else {
		$("#back-to-top").removeClass("show");
	}

});

$('a[href="#top"]').on('click',function(){
	$('html, body').animate({scrollTop: 0}, 1350, "easeInOutQuint");
	return false;
});


/* Full Height Container
-------------------------------------------------------*/

function container_full_height_init(){
	(function($){
		$(".container-full-height").height($(window).height());
	})(jQuery);
}