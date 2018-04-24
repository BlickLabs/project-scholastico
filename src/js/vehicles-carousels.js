var vehiclesCarousel = $('.vehicles-carousel');

vehiclesCarousel.owlCarousel ({
  loop: false,
  nav: true,
  navText: ['<img class="vehicles-navigation-arrows" src="img/icons/vehicles-arrow-left.png" />', '<img class="vehicles-navigation-arrows" src="img/icons/vehicles-arrow-right.png" />'],
  items: 1
});

vehiclesCarousel.each(function(index) {
  $(this).find('.owl-nav, .owl-dots').wrapAll("<div class='vehicles-navigation-controls'></div>");
});
