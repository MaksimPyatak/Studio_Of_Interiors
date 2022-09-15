import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();


import Swiper, { Navigation, Pagination, Scrollbar } from 'swiper';

export const swiper = new Swiper('.first-section__swiper', {
    modules: [Navigation, Pagination, Scrollbar],
    // Optional parameters
    // direction: 'vertical',
    // loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
        dragSize: 89.91,
    },
    slidesPerView: 'auto',
    spaceBetween: 0, 
});


// Нумерація навігації Swiper

const prevNomberSlide = document.querySelector('.swiper-button-prev');
const nextNomberSlide = document.querySelector('.swiper-button-next');
 
let nomberSlide;
let prev;
let next;

window.onload = function () {
   nomberSlide = swiper.activeIndex;
   prev = nomberSlide;
   if (prev < 10) {
      prevNomberSlide.textContent = "0" + prev;
   } else {
      prevNomberSlide.textContent = prev;
   };
    
   next = nomberSlide+2;
   if (next < 10) {
      nextNomberSlide.textContent = "0" + next;
   } else {
      nextNomberSlide.textContent = next;
   }
};
swiper.on('slideChange', function () {
   nomberSlide = swiper.activeIndex;
   prev = nomberSlide;
   if (prev < 10) {
      prevNomberSlide.textContent = "0" + prev;
   } else {
      prevNomberSlide.textContent = prev;
   };
    
   next = nomberSlide+2;
   if (next < 10) {
      nextNomberSlide.textContent = "0" + next;
   } else {
      nextNomberSlide.textContent = next;
   }
});


//Підключення файлу з бургер-меню
import "./files/burger-menu.js";

//Підключення файлу з динамічної зміни падінгів контейнера
//import "./files/pdng-text-conteiner.js";