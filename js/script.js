(function ($) {
  $(document).ready(function () {
    "use strict";

    /*RSVP Form*/
    $(".submit_block_1").on("click", function (e) {
      send_form('block_1');
      return false;
    });

    function send_form (type) {

      var name = $("input#name_" + type).val();
      if (name == "") {
        $("input#name_" + type).css({border: "1px solid red"});
        $("input#name_" + type).focus();
        return false;
      }
      var phone = $("input#phone_" + type).val();
      if (phone == "") {
        $("input#phone_" + type).css({border: "1px solid red"});
        $("input#phone_" + type).focus();
        return false;
      }
      var attendees = $("input#attendees_" + type).val();
      if (attendees == "") {
        $("input#attendees_" + type).css({border: "1px solid red"});
        $("input#attendees_" + type).focus();
        return false;
      }
      var ages = $("input#ages_" + type).val();
      var food = $("input#food_" + type).val();

      console.log(name);
      console.log(phone);
      console.log(attendees);
      console.log(ages);
      console.log(food);

      var dataString = '&entry.743366543=' + name + '&entry.1734326818=' + phone + '&entry.2093060280=' + attendees + '&entry.994277914=' + ages + '&entry.1107245095=' + food;
      var form = $(this);
      var str = form.serialize();
      function sent(){
        $('#div_' + type).html("<div id='form_send_message'>Gracias :)</div>", 1500);
        $('#envelope').addClass("active")
      }
      $.ajax({
        type: "POST",
        url: "https://docs.google.com/forms/d/e/1FAIpQLSeEScvzEgnonx5Hk2pBj6bgKtKwd625zQV_nLppyLw09Y9NrA/formResponse",
        data: dataString,
        complete:sent
      });
    }

    /*ScrollR */
    if ($(window).width() > 1024) {
      var s = skrollr.init({
        forceHeight: false
      });
    }

    /*Gallery ColorBox */
    $('.gallery_txt a').colorbox({
      rel: 'gal',
      maxWidth: "100%",
    });

    /*Main Menu Button */
    $('.main_menu_btn').on("click", function (e) {
      $(this).toggleClass('main_menu_btn_open');
      $('.main_menu_block').toggleClass('main_menu_block_open').fadeToggle();
      $('.main_menu_block').find('.menu_wrapper').toggleClass('active');
      $('header .anim').toggleClass('active');
      e.preventDefault();
    });

    /* Section Background */
    $('section, .parallax').each(function () {
      var image = $(this).attr('data-image');
      if (image) {
        $(this).css('background-image', 'url(' + image + ')');
      }
    });

    /*ColorBox*/
    if ($(window).width() >= 760) {
      $(".youtube").colorbox({iframe: true, innerWidth: 640, innerHeight: 390});
    } else {
      $(".youtube").colorbox({iframe: true, innerWidth: 320, innerHeight: 240});
    }
    $(window).resize(function () {
      if ($(window).width() >= 760) {
        $(".youtube").colorbox({iframe: true, innerWidth: 640, innerHeight: 390});
      } else {
        $(".youtube").colorbox({iframe: true, innerWidth: 320, innerHeight: 240});
      }
    });

    /*Scroll Effect*/
    $('.intro_down, .go').on("click", function (e) {
      var anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: $(anchor.attr('href')).offset().top
      }, 1000);
      e.preventDefault();
    });

    /*Show/Hide Photo in When&Where Block*/
    $('.photocamera span').on("click", function (e) {
      $(this).parents('section').find('.opacity').toggleClass('fade');
      $(this).parents('section').find('.over').fadeToggle();
      e.preventDefault();
    });

    /*Player*/
    $('.music').on("click", function (e) {
      $('.player').fadeToggle();
      e.preventDefault();
    });

    /*CountDown*/
    $('.married_coundown').countdown({until: new Date("Sep 21, 2024 20:30:00")}, $.countdown.regionalOptions["es"]);

    /*OWL Carousel in Our Story*/
    $(".story_wrapper").owlCarousel({
      navigation: true, responsive: true, responsiveRefreshRate: 200, slideSpeed: 200,
      paginationSpeed: 200, rewindSpeed: 500, items: 3, itemsTablet: [768, 1], autoPlay: false,
      itemsMobile: [479, 1], itemsDesktopSmall: [980, 1], itemsDesktop: [1500, 2], mouseDrag: true
    });

    /*Gallery Carousel */
    $(".gallery_wrapper").owlCarousel({
      navigation: true, responsive: true, responsiveRefreshRate: 200, slideSpeed: 200,
      paginationSpeed: 200, rewindSpeed: 500, items: 3, itemsTablet: [768, 2], autoPlay: true,
      itemsMobile: [479, 1], mouseDrag: true
    });

    /*Registry Carousel */
    $(".registry_wrapper").owlCarousel({
      navigation: true, responsive: true, responsiveRefreshRate: 200, slideSpeed: 200, paginationSpeed: 200,
      rewindSpeed: 500, stopOnHover: true, autoHeight: true, items: 3, mouseDrag: true, autoPlay: true
    });

    /*The Crew Carousel*/
    $(".guest_wrapper").owlCarousel({
      navigation: true, responsive: true, responsiveRefreshRate: 200, slideSpeed: 200, paginationSpeed: 200,
      rewindSpeed: 500, stopOnHover: true, autoHeight: true, items: 4, mouseDrag: true, autoPlay: true
    });

    /*Slider Carousel*/
    $(".slider").owlCarousel({
      navigation: true,
      responsive: true,
      responsiveRefreshRate: 200,
      slideSpeed: 200,
      paginationSpeed: 200,
      rewindSpeed: 500,
      stopOnHover: false,
      autoHeight: true,
      singleItem: true,
      mouseDrag: true,
      autoPlay: true,
      transitionStyle: "fade"
    });

    /* Top Menu Click to Section */
    $('.sub_menu').find('a').on("click", function (e) {
      $('.sub_menu').find('a').removeClass('active');
      $(this).addClass('active');
      var anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: $(anchor.attr('href')).offset().top + 1
      }, 1000);
      $(".main_menu_btn").trigger('click');
      e.preventDefault();
    });

    /*FireFly in Intro*/
    $.firefly({
      color: '#fff', minPixel: 1, maxPixel: 3, total: 55, on: '.into_firefly'
    });

    /* Refresh ScrollR */
    // s.refresh($(".guest_wrapper, .our_story"));

  });
}(jQuery));
