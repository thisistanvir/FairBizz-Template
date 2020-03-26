
(function ($) {
	"use strict";
   $(document).ready(function($){

     // Sticky Menu
    $('.js--sticky-menu').waypoint(function(direction){
        if(direction == 'down'){
                $('.menu-area').addClass('sticky');
            } else {
                $('.menu-area').removeClass('sticky');
        }
    });
    // Sticky Menu

    // Menu Active Color
    $('.main-menu li').on('click', function(){
        $('.main-menu li').removeClass('active');
        $(this).addClass('active');
    });
    // End Menu

    // Start Slick Nav
   $('#mobile-menu').slicknav({
        prependTo: '.show-mobile-menu',
        allowParentLinks: true
    });
    // End Slick Nav

    // Slick Slider
        $('.slider-active').on('init', function(e, slick) {
            var $firstAnimatingElements = $('div.single-slider:first-child').find('[data-animation]');
            doAnimations($firstAnimatingElements);    
        });
        $('.slider-active').on('beforeChange', function(e, slick, currentSlide, nextSlide) {
                    var $animatingElements = $('div.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
                    doAnimations($animatingElements);    
        });
        $('.slider-active').slick({
            autoplay: true,
            autoplaySpeed: 3000,
            dots: true,
            fade: true,
            prevArrow: '<button type="button" class="slick-prev"><i class="lnr lnr-arrow-left"></i> Prev</button>',
            nextArrow: '<button type="button" class="slick-next">Next <i class="lnr lnr-arrow-right"></i></button>',
            arrows: true,
            responsive: [
                { breakpoint: 767, settings: { dots: true, arrows: true } }
            ]
        });
        function doAnimations(elements) {
            var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            elements.each(function() {
                var $this = $(this);
                var $animationDelay = $this.data('delay');
                var $animationType = 'animated ' + $this.data('animation');
                $this.css({
                    'animation-delay': $animationDelay,
                    '-webkit-animation-delay': $animationDelay
                });
                $this.addClass($animationType).one(animationEndEvents, function() {
                    $this.removeClass($animationType);
                });
            });
        }
    // Slick Slider
    
      // Start Service-carousel
      $('.service-carousel').owlCarousel({
         loop: true,
         dots: true,
         nav: true,
         navText:['<i class="fa fa-arrow-left"></i> Prev', 'Next <i class="fa fa-arrow-right"></i>'],
         autoplay: true,
				 autoplayTimeout:3000,
    		 autoplayHoverPause:true,
         margin: 30,
         responsive: {
            0:{
                items:1
            },
            767:{
                items: 2
            },
            992:{
                items: 4
            },
        },
      });
      // End Service-carousel //

      // Start Case-carousel
      $('.case-carousel').owlCarousel({
         loop: true,
         dots: false,
         nav: true,
         navText:['<i class="far fa-arrow-alt-circle-left"></i>','<i class="far fa-arrow-alt-circle-right"></i>'],
         autoplay: false,
				 autoplayTimeout:3000,
    		 autoplayHoverPause:true,
         margin: 30,
         responsive: {
            0:{
                items:1
            },
            767:{
                items: 2
            },
            992:{
                items: 4
            },
        },
      });
      // End Case-carousel

     //  Testimonial Carousel
     $('.testimonial-carousel').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev"><i class="far fa-arrow-alt-circle-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="far fa-arrow-alt-circle-right"></i></button>',
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3000,
      });
    //  End Testimonial Carousel

     //  Brands Carousel
     $('.brand-carousel').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows: false,
        autoplay: false,
        autoplaySpeed: 3000,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          }
        ]
      });
    //  End Brand Carousel

    //   Magnific Popup
    $(".video-play").magnificPopup({
        type: 'iframe',
    });
    //   End  Magnific Popup

    // Nice Select
    $('select').niceSelect();
    // End Nice Select

    //  Scroll Up
    $.scrollUp({
        scrollName: 'scrollUp', // Element ID
        topDistance: '300', // Distance from top before showing element (px)
        topSpeed: 300, // Speed back to top (ms)
        animation: 'fade', // Fade, slide, none
        animationInSpeed: 200, // Animation in speed (ms)
        animationOutSpeed: 200, // Animation out speed (ms)
        scrollText: '<i class="fa fa-angle-up"></i>', // Text for element
        activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
    });
//   Scroll Up

     // Smooth Scroll for IE/ EDGE/ SAFARI
     $('a').on('click', function(event){
        if (this.hash !==''){
            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
                }, 800, function(){
                window.location.hash = hash;
            });
        }
    });
    // End Smooth Scroll for IE/ EDGE/ SAFARI

   });

})(jQuery);
