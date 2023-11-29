window.addEventListener("DOMContentLoaded", () => {
  console.log("Loaded Scripts");
});

import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-main-pagination',
  },

  // Navigation arrows
  navigation: {
    prevEl: '.swiper-button-left',
    nextEl: '.swiper-button-right',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});