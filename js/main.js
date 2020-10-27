$(document).ready(function(){
	/* meanmenu                                                               */  
	
	$('#mobile-menu').meanmenu({
		meanScreenWidth: "991",
		meanMenuContainer: '.mobile-menu'
	});
	
	
	
	
	/* slider */

    $('.slider-active').slick({
        dots: false,
        infinite: true,
        speed: 300,
        prevArrow: false,
        nextArrow: false,
        slidesToShow: 1,
        adaptiveHeight: false
      });
	  
      /*     counter */
	$('.counter').counterUp({
    delay: 10,
    time: 1000
	});
	/* testimonial */

    $('.testimonial-active').slick({
        dots: true,
        infinite: true,
        speed: 300,
        prevArrow: false,
        nextArrow: false,
        slidesToShow: 1,
        adaptiveHeight: false
      });
	  	/* brand slider */

    $('.brand-active').slick({
        dots: false,
        infinite: true,
        speed: 300,
        prevArrow: false,
        nextArrow: false,
        slidesToShow: 5,
        slidesToScroll: 3,
        adaptiveHeight: false,
		 responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 3,
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
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
		

      });

})