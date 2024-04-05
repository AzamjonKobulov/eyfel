// Initialize Swiper
var swiper = new Swiper('.mySwiper', {
  slidesPerView: 1,
  spaceBetween: 16,
  navigation: {
    nextEl: '.next',
    prevEl: '.prev',
  },
  loop: true,
  breakpoints: {
    0: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
    1280: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    1720: {
      spaceBetween: 50,
    },
  },
});

var swiper = new Swiper('.mySwiper4', {
  slidesPerView: 1,
  spaceBetween: 16,
  pagination: {
    el: '.swiper-pagination',
    type: 'progressbar',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    768: {
      slidesPerView: 2.2,
      spaceBetween: 24,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
    1280: {
      slidesPerView: 3.95,
      spaceBetween: 24,
    },
    1720: {
      slidesPerView: 3.95,
      spaceBetween: 30,
    },
  },
});
