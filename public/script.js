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
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
});
