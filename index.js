$(function() {
  var $mainSlider = $('.slider-container');
  var $slider2 = $('.slider2-body');

  $mainSlider.slick({
    arrows: false,
    speed: 800
  });

  $('.slider2-previous').on('click', function(e) {
    e.preventDefault();
    $slider2.slick('slickPrev');
  });
  $('.slider2-next').on('click', function(e) {
    e.preventDefault();
    $slider2.slick('slickNext');
  });

  $slider2.slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
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
        breakpoint: 620,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  })
});
