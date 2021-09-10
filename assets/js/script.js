(function ($) {
  "use strict";
  $(document).ready(function () {
    $(".partner__slider").slick({
      infinite: true,
      slidesToShow: 6,
      slidesToScroll: 1,
      settings: "unslick",
      autoplay: true,
      autoplaySpeed: 3000,
      speed: 600,
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
      autoplaySpeed: 3000,
      speed: 600,
      variableWidth: true,
    });

    $(".product__slider__items").slick({
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      speed: 600,
      variableWidth: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
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
    $(".testimonial_wrap").owlCarousel({
      loop: true,
      items: 1,
      nav: false,
      // autoplay: true,
      autoplayTimeout: 5000,
      dots: true,
    });
    // $(".mobile_view_lookBook_wrap").owlCarousel({
    //   loop: true,
    //   items: 1,
    //   nav: false,
    //   autoplay: true,
    //   autoplayTimeout: 5000,
    //   dots: true,
    // });

    $(".mobile_view_lookBook_wrap").slick({
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      centerMode: true,
      variableWidth: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            centerPadding: "40px",
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            centerPadding: "40px",
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            centerPadding: "40px",
          },
        },
      ],
    });
    $(window).scroll(function () {
      var scroll = $(window).scrollTop();
      if (scroll >= 50) {
        $(".header__main__wrap").addClass("stickyHeader");
      } else {
        $(".header__main__wrap").removeClass("stickyHeader");
      }
    });
  });
})(jQuery);
