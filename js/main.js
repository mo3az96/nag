$(window).on("load", function () {
  $("body").removeClass("overflow");
});
$(document).ready(function () {
  /***** Menu *****/
  if ($(window).width() <= 991) {
    $(".menu-btn").click(function () {
      $(".nav-overlay").fadeIn(500);
      $(".header-nav").addClass("active");
      $("body").addClass("overflow");
    });
    $(".nav-overlay").click(function () {
      $(".nav-overlay").fadeOut(500);
      $(".header-nav").removeClass("active");
      $("body").removeClass("overflow");
    });

    $(".has-level2>a").click(function (e) {
      e.preventDefault();
      e.stopPropagation();
      $(".has-level2>a").not(this).removeClass("active");
      $(this).toggleClass("active");
      if ($(this).siblings().css("display") == "none") {
        $(this).siblings().slideDown(500);
      } else {
        $(this).siblings().slideUp(500);
      }
      $(".has-level2>a").not(this).siblings().slideUp(500);
    });
    $(".has-level3>a>span").click(function (e) {
      e.preventDefault();
      e.stopPropagation();
      var parent = $(this).parent("a");
      $(".has-level3>a").not(parent).removeClass("active");
      parent.toggleClass("active");
      if (parent.siblings().css("display") == "none") {
        parent.siblings().slideDown(500);
      } else {
        parent.siblings().slideUp(500);
      }
      $(".has-level3>a").not(parent).siblings().slideUp(500);
    });
  }
  /***** main slider *****/
  var mainSwiper = new Swiper(".main-slider .swiper-container", {
    spaceBetween: 10,
    loop: true,
    // speed: 500,
    // autoplay: {
    //   delay: 5000,
    // },
    pagination: {
      el: ".main-slider .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".main-slider .swiper-btn-next",
      prevEl: ".main-slider .swiper-btn-prev",
    },
  });

  /***** Projects slider *****/
  var ProjectsSwiper = new Swiper(".projects-slider .swiper-container", {
    loop: true,
    pagination: {
      el: ".projects-slider .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".projects-slider .swiper-btn-next",
      prevEl: ".projects-slider .swiper-btn-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      767: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      },
    },
  });

  /***** Arrow *****/
  $(window).scroll(function () {
    $(this).scrollTop() >= 500
      ? $(".arrow-top").fadeIn(500)
      : $(".arrow-top").fadeOut(500);
  });
  $(".arrow-top").click(function () {
    $("html,body").animate(
      {
        scrollTop: 0,
      },
      1000
    );
  });

  /***** Search *****/
  $(".search-trigger").click(function () {
    $("body").addClass("overflow");
    $(".search-overlay,.search-form").fadeIn(300);
    $(".search-cont").addClass("active");
  });
  $(".search-overlay").click(function () {
    $("body").removeClass("overflow");
    $(".search-overlay,.search-form").fadeOut(400);
    $(".search-cont").removeClass("active");
  });

  /***** CatPage *****/
  $(".main-cat-link.active").siblings(".sub-cats-list").show();
  $(".sub-cat-link.active").parents(".sub-cats-list").show();

  $(".main-cat-link>span").click(function (e) {
    e.preventDefault();
    e.stopPropagation();
    var parent = $(this).parent(".main-cat-link");
    parent.toggleClass("active").siblings(".sub-cats-list").slideToggle();
  });

  var swiper = new Swiper(".gallery-thumbs", {
    spaceBetween: 10,
    slidesPerView: 4,
    watchSlidesProgress: true,
  });
  var swiper2 = new Swiper(".gallery-top", {
    spaceBetween: 10,
    thumbs: {
      swiper: swiper,
    },
  });
});
