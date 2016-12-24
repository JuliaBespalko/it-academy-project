$(function () {
  var $mainSlider = $('.slider-container');
  var $slider2 = $('.slider2-body');
  var $sliderPreview = $('.product-preview .thumbs');

  $mainSlider.slick({
    arrows: false,
    speed: 800
  });

  $('.slider2-previous').on('click', function (e) {
    e.preventDefault();
    $slider2.slick('slickPrev');
  });
  $('.slider2-next').on('click', function (e) {
    e.preventDefault();
    $slider2.slick('slickNext');
  });

  $slider2.slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
    speed: 800,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 630,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $sliderPreview.slick({
    vertical: true,
    slidesToShow: 3,
    verticalSwiping: true,
    slidesToScroll: 3,
    arrows: false
  });

  $('.fancybox').fancybox();

  /*  $('.product-photo a').on('click', function (e) {
   e.preventDefault();
   var photoView = $(this).attr('src');
   $('#product-photo').attr('href', photoView)
   });
   */

  $('.thumbs a').on('click', function (e) {
    e.preventDefault();
    var imgLink = $(this).attr('href');
    $('#product-photo').attr('src', imgLink)
  });

  var $ratingStars = $('.rating .rating-star');
  $ratingStars.find('input').on('click', function() {
    var $ratingVal = $(this).closest('label');
    $ratingVal.prevAll().addClass('rating-input');
    $ratingVal.nextAll().removeClass('rating-input')
  });

  $('.spinner input').spinner({ min: 0, max: 50, numberFormat: "n"}).val('01');


  $('.tabs .tab-nav li a').on('click', function(e) {
    e.preventDefault();
    $('.tab-nav li a').removeClass('active');
    $(this).addClass('active');

    var tabToShow = $(this).attr('rel');
    $('.tabcontent.active').fadeIn(300, showNextTab);

    function showNextTab() {
      $('.tabcontent.active').removeClass('active');
      $('#'+tabToShow).hide(300, function () {
        $(this).addClass('active')
      })
    }
  })
  });
