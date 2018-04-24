var servicesCarousel = $('.services-carousel');

servicesCarousel.owlCarousel ({
  loop: false,
  nav: true,
  navText: ['<img class="scholastico-navigation-arrows" src="img/icons/control-left.png" />', '<img class="scholastico-navigation-arrows" src="img/icons/control-right.png" />'],
  dots: true,
  responsive:{
    0:{
      items:1,
      stagePadding: 10,
      margin: 45,
      center: true
    },
    700:{
      items: 2,
      stagePadding: 10,
      margin: 45,
    },
    880: {
      items: 1,
      stagePadding: 10,
      margin: 45,
      center: true
    },
    1000:{
      items:2,
      margin: 45,
      stagePadding: 12,
    }
  }
});

servicesCarousel.each(function(index) {
  $(this).find('.owl-nav, .owl-dots').wrapAll("<div class='scholastico-navigation-controls'></div>");
});
