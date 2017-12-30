//=require jquery/dist/jquery.min.js
//=require bootstrap-sass/assets/javascripts/bootstrap.min.js 
//=require owl.carousel/dist/owl.carousel.min.js

jQuery(document).ready(function($) { 
  
  // sales-carousel
  $(function() {
    $(".sales-carousel").owlCarousel({
      items: 4,
      navigation: true,
      navText : ["",""],
      responsiveClass:true,
      responsive : {
        0:{
          items: 1,
          nav:true,
          loop:false
        },
        768:{
          items: 2,
          nav:true,
          loop:false
        },
        992:{
          items: 3,
          nav:true,
          loop:false
        },
        1200:{
          items: 4,
          nav:true,
          loop:false
        }
      }
    });
  });

// amount-carousel
  $(function() {
    $(".amount-carousel").owlCarousel({
      items: 4,
      navigation:true,
      navText : ["",""],
      responsiveClass:true,
      responsive : {
        0:{
          items: 1,
          nav:true,
          loop:false
        },
        768:{
          items: 2,
          nav:true,
          loop:false
        },
        992:{
          items: 3,
          nav:true,
          loop:false
        },
        1200:{
          items: 4,
          nav:true,
          loop:false
        }
      }
    });
  });

  // activity-carousel
  $(function() {
    $(".activity-carousel").owlCarousel({
      items: 4,
      navigation:true,
      navText : ["",""],
      responsiveClass:true,
      responsive : {
        0:{
          items: 1,
          nav:true,
          loop:false
        },
        768:{
          items: 2,
          nav:true,
          loop:false
        },
        992:{
          items: 3,
          nav:true,
          loop:false
        },
        1200:{
          items: 4,
          nav:true,
          loop:false
        }
      }
    });
  });

  // progress-carousel
  $(function() {
    $(".progress-carousel").owlCarousel({
      items: 4,
      navigation:true,
      navText : ["",""],
      responsiveClass:true,
      responsive : {
        0:{
          items: 1,
          nav:true,
          loop:false
        },
        768:{
          items: 2,
          nav:true,
          loop:false
        },
        992:{
          items: 3,
          nav:true,
          loop:false
        },
        1200:{
          items: 4,
          nav:true,
          loop:false
        }
      }
    });
  });

  // status-carousel
  $(function() {
    $(".status-carousel").owlCarousel({
      items: 4,
      navigation:true,
      navText : ["",""],
      responsiveClass:true,
      responsive : {
        0:{
          items: 1,
          nav:true,
          loop:false
        },
        768:{
          items: 2,
          nav:true,
          loop:false
        },
        992:{
          items: 3,
          nav:true,
          loop:false
        },
        1200:{
          items: 4,
          nav:true,
          loop:false
        }
      }
    });
  });

});