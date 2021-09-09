(function ($) {
  "use strict";
  $(document).ready(function () {
    $(".partner__slider").slick({
      infinite: true,
      slidesToShow: 6,
      slidesToScroll: 1,
      settings: "unslick",

      autoplay: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 6,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
      ],
    });
    $(".design__slider").slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      variableWidth: true,
    });
    $(".testimonial_wrap").owlCarousel({
      loop: true,
      items: 1,
      nav: false,
      autoplay: true,
      autoplayTimeout: 5000,
      dots: true,
    });
  });
})(jQuery);
