// Function for Mobile Menu
const hamburger = document.querySelector('#hamburger');
const mobileMenu = document.querySelector('#mobileMenu');

function toggleMobMenu() {
  mobileMenu.classList.toggle('-translate-x-full');
  document.body.classList.toggle('overflow-hidden');
}

hamburger.addEventListener('click', toggleMobMenu);

// Function for Searchbar
const searchButton = document.querySelectorAll('.search-button');
const searchMenu = document.querySelector('#searchMenu');

function toggleSearchMenu() {
  searchMenu.classList.toggle('-translate-x-full');
  document.body.classList.toggle('overflow-hidden');
}

searchButton.forEach((button) =>
  button.addEventListener('click', toggleSearchMenu)
);

const mobileMenuLinks = document
  .querySelectorAll('#mobileMenu a')
  .forEach((link) => link.addEventListener('click', toggleMobMenu));

// Function to toggle dropdown visibility
function toggleDropdown(dropdownId) {
  const dropdownList = document.getElementById(dropdownId);
  dropdownList.classList.toggle('hidden');
  dropdownList.style.maxHeight = dropdownList.classList.contains('hidden')
    ? '0'
    : dropdownList.scrollHeight + 'px';
}

function closeDropdownOnClickOutside(buttonId, listId) {
  const dropdownButton = document.getElementById(buttonId);
  const dropdownList = document.getElementById(listId);

  document.addEventListener('click', function (event) {
    const target = event.target;

    if (target !== dropdownButton && !dropdownList.contains(target)) {
      dropdownList.classList.add('hidden'); // Hide the dropdown
      dropdownList.style.maxHeight = '0';
    }
  });
}

closeDropdownOnClickOutside('dropdownButton', 'dropdownList');

document
  .getElementById('dropdownButton')
  .addEventListener('click', function () {
    toggleDropdown('dropdownList');
  });

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
