(function ($) {
  "use strict";
  $(document).ready(function () {
    $(".partner__slider").slick({
      infinite: true,
      slidesToShow: 6,
      slidesToScroll: 1,
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
            centerMode: true,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            centerMode: true,
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
            centerMode: true,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            centerMode: true,
          },
        },
      ],
    });
    $(".design_slider__bottom").slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3500,
      speed: 400,
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
            centerMode: true,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            centerMode: true,
          },
        },
      ],
    });

    // product slider
    var slider = $(".product__slider__items");
    slider.slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 3000,
      speed: 600,
      responsive: [
        {
          breakpoint: 1600,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            variableWidth: true,
          },
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            variableWidth: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            centerMode: true,
            variableWidth: true,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            centerMode: true,
            variableWidth: true,
          },
        },
      ],
    });

    function jumpBack() {
      setTimeout(function () {
        slider.slick("slickGoTo", 0);
      }, 3000);
    }

    slider.on("afterChange", function (event, slick, currentSlide, nextSlide) {
      console.log(currentSlide);
      if (currentSlide === 3) {
        console.log("last slide");
        jumpBack();
      }
    });

    $(".testimonial_wrap").owlCarousel({
      loop: true,
      items: 1,
      nav: false,
      autoplay: true,
      autoplayTimeout: 5000,
      dots: false,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
          margin: 10,
        },
        600: {
          items: 1,
          margin: 10,
        },
        1000: {
          items: 1,
          margin: 10,
        },
      },
    });

    $(".mobile_view_lookBook_wrap").slick({
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 3,
      autoplay: true,
      centerMode: true,
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
            slidesToShow: 4,
            slidesToScroll: 1,
            centerMode: true,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            centerMode: true,
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
