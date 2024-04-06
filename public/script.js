const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

function toggleMobMenu() {
  mobileMenu.classList.toggle('-translate-x-full');
  document.body.classList.toggle('overflow-hidden');
}

hamburger.addEventListener('click', toggleMobMenu);

// Initialize Swiper
var swiper = new Swiper('.mySwiper', {
  navigation: {
    nextEl: '.next',
    prevEl: '.prev',
  },
  loop: true,
  breakpoints: {
    0: {
      slidesPerView: 1.5,
      spaceBetween: 16,
    },
    640: {
      slidesPerView: 1.5,
      spaceBetween: 40,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
    1280: {
      slidesPerView: 4,
      spaceBetween: 32,
    },
    1720: {
      slidesPerView: 4,
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
    0: {
      slidesPerView: 1.1,
      spaceBetween: 16,
    },
    480: {
      slidesPerView: 1.3,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
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
