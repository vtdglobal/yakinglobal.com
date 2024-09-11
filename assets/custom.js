// @ts-nocheck
// $('.header').addClass('change');
$(document).ready(function () {
    $('#detai_new article figure img').each(function(){
      $(this).wrap('<a data-fancybox href="'+$(this).attr('src')+'"></a>');
  })
      AOS.init({
          easing: 'ease-in-out',
          mirror: true,
          once: false,
          duration: 700,
          delay: .05
        });
      $("#about .history_about .right .item").mouseover(function () {
          var utiId = $(this).data('id');
          console.log(utiId);
          $("#about .history_about .right .item").removeClass('active');
          $(this).addClass('active');
          $('#about .history_about .left .img').each(function (id, item) {
              $(item).data('item') == utiId ? $(item).addClass('active') : $(item).removeClass('active');
          });
      });
      $(window).scroll(function () {
          var scroll = $(window).scrollTop();
          if (scroll >= 34) {
            $('.header').addClass('change');
          }
          else{
            $('.header').removeClass('change');
          }
      });
      // $('.header').addClass('change');
      
      $('.humbeger').click(function(){
          $('.menu_mobi,.humbeger').toggleClass('active');
      });
      $('.list_lead_about').not('.slick-initialized').slick({
          infinite: true,
          speed: 300,
          slidesToShow: 6,
          slidesToScroll: 1,
          fade: false,
          autoplay: true,
          autoplaySpeed: 3000,
          focusOnSelect: true,
          pauseOnHover:false,
          arrows: false,
          responsive: [
              {
                breakpoint: 800,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: false,
                  arrows: true,
                  prevArrow: '<i class="slideNav-prev arrows  fa-solid fa-arrow-left-long"></i>',
                  nextArrow: '<i class="slideNav-next arrows  fa-solid fa-arrow-right-long"></i>',
                }
              }
            ]
      });
      var slick1 = {
          infinite: true,
          speed: 300,
          slidesToShow:1,
          slidesToScroll: 1,
          fade: true,
          autoplay: true,
          autoplaySpeed: 3000,
          focusOnSelect: true,
          pauseOnHover:false,
      }
    $('.listlogo').slick({
              dots: false,
              infinite: true,
              speed: 300,
              slidesToShow: 8,
              slidesToScroll: 1,
              autoplay:true,
              autoplayspeed:1000,
              arrow:false,
              responsive: [
                {
                  breakpoint: 1200,
                  settings: {
                  slidesToShow: 6,
                  slidesToScroll: 1
                  }
               },
                {
                  breakpoint: 800,
                  settings: {
                  slidesToShow: 5,
                  slidesToScroll: 1
                  }
               },
                 {
                    breakpoint: 480,
                    settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                    }
                 }
  
              ]
          });
      $('#game .bannerGame').not('.slick-initialized').slick({
        ...slick1,
        dots: false,
        arrows: true,
        appendArrows: $('#arrow_game_banner'),
        nextArrow: '<i class="fas fa-angle-right"></i>',
        prevArrow: '<i class="fas fa-angle-left"></i>',
      });
      $('.list_content_recruit').slick({
        ...slick1,
        dots: false,
        arrows: false,
      });
      $('#about .about_environ .list_img_bot').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        fade: false,
        autoplay: true,
        autoplaySpeed: 2000,
        focusOnSelect: true,
        pauseOnHover:false,
        dots: false,
        arrows: false,
        asNavFor: '#about .about_environ .right',
        responsive: [
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          }
        ]
      });
      $('#about .about_environ .right').slick({
        ...slick1,
        dots: false,
        arrows: false,
        asNavFor: '#about .about_environ .list_img_bot',
      });
      
      $('.banner_option .list_banner').slick({
          ...slick1,
          dots: true,
          arrows: false,
      });
      $(".banner_option .list_banner .slick-dots").appendTo("#dots_banner");
      $('.homeGameLight .list_game_single').slick({
          ...slick1,
          dots: false,
          arrows: true,
          appendArrows: $('#arrow_game_single'),
          nextArrow: '<i class="fas fa-angle-right"></i>',
          prevArrow: '<i class="fas fa-angle-left"></i>',
      });
      $('.homeTestimonials .list_feedback').slick({
          ...slick1,
          arrows: true,
          dots: false,
          nextArrow: '<i class="fas fa-angle-right"></i>',
          prevArrow: '<i class="fas fa-angle-left"></i>',
          appendArrows: $('#arrowsTes'),
      })
      var widthwd = $(window).width();
      if (widthwd < 769){
        $('#about .about_vision .about_value').slick({
          dots: false,
          infinite: true,
          speed: 300,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay:false,
          autoplayspeed:2500,
       
          prevArrow: '<i class="slideNav-prev arrows  fa-solid fa-arrow-left-long"></i>',
          nextArrow: '<i class="slideNav-next arrows  fa-solid fa-arrow-right-long"></i>',
      });
          $('.studioRec .--right').slick({
              dots: false,
              infinite: true,
              speed: 300,
              slidesToShow: 1,
              slidesToScroll: 1,
              autoplay:true,
              autoplayspeed:1500,
              prevArrow: '<i class="slideNav-prev arrows  fa-solid fa-arrow-left-long"></i>',
              nextArrow: '<i class="slideNav-next arrows  fa-solid fa-arrow-right-long"></i>',
          });
          $('.listwork').slick({
              dots: false,
              infinite: true,
              speed: 300,
              slidesToShow: 1,
              slidesToScroll: 1,
              autoplay:true,
              autoplayspeed:1500,
           
              prevArrow: '<i class="slideNav-prev arrows  fa-solid fa-arrow-left-long"></i>',
              nextArrow: '<i class="slideNav-next arrows  fa-solid fa-arrow-right-long"></i>',
          });
          $('.header .right').appendTo('.header .menu_mobi');
          $('.header .right .search').appendTo('.header');
      }
      $("div.holder_game").jPages({
          containerID: "listAll_product",
          perPage: 12,
          first       : false,
          previous    : "span.arrowPrev",
          next        : "span.arrowNext",
          last        : false
        });

        $('.list_GamePuublic').not('.slick-initialized').slick({
          dots: false,
          infinite: true,
          speed: 300,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay:true,
          autoplaySpeed:5000,
          appendArrows: $('.arrowGamePuublic'),
          prevArrow: '<i class="slideNav-prev arrows  fa-solid fa-angle-left"></i>',
          nextArrow: '<i class="slideNav-next arrows  fa-solid fa-angle-right"></i>' ,
    });
  });