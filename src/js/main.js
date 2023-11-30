window.addEventListener("DOMContentLoaded", () => {
    console.log("Loaded Scripts");
    document.querySelectorAll(".buttonHollow-orange").forEach(function (item) {
        item.addEventListener('mouseover', function () {
            item.querySelector('.buttonHollow-orange__phone-orange').style.display = 'none';
            item.querySelector('.buttonHollow-orange__phone-white').style.display = 'flex';
        })
    })
    document.querySelectorAll(".buttonHollow-orange").forEach(function (item) {
        item.addEventListener('mouseleave', function () {
            item.querySelector('.buttonHollow-orange__phone-orange').style.display = 'flex';
            item.querySelector('.buttonHollow-orange__phone-white').style.display = 'none';
        })
    })
});

import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'

const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true, // зацикленность слайдов, должны бить или нет, значения true / false
    pagination: {
        el: '.swiper-main-pagination',
        clickable: true,
    },
    navigation: {
        prevEl: '.swiper-button-left',
        nextEl: '.swiper-button-right',
    },
    spaceBetween: 70, // регулировка расстояния между слайдами
    // autoplay: {
    //   delay: 2000 // задержка при авто-пролистывании
    // },
});