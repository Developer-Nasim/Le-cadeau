(function($) {
  "use strict";
  
 // menu 
  $('.siteBar-btn').click( function (){ 
    $('.mobile-menu').toggleClass('siteBar');   
  }); 

   
  // Hero-slider
  $(".hero-area").owlCarousel({
    loop: true, 
    items: 1,
    navText: [
      '<i class="fa fa-angle-right"></i>',
      '<i class="fa fa-angle-left"></i>'
    ],
    nav: true,
    dots: false, 
  }); 
  // Bundles
  $(".bundle-slider").owlCarousel({
    loop: true,
    margin: 40,
    items: 2,
    navText: [
      '<i class="fa fa-angle-right"></i>',
      '<i class="fa fa-angle-left"></i>'
    ],
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1
      },
      767: {
        items: 1
      },
      992: {
        items:2
      }
    }
  }); 
  
 
})(jQuery);
