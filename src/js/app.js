import * as flsFunctions from "./modules/functions.js";
//import {preloaderF} from "./modules/preloader.js";

flsFunctions.isWebp();


//Слайдер  домашньої сторінки

import Swiper, { Navigation, Pagination, Scrollbar } from 'swiper';

export const swiper = new Swiper('.first-section__swiper', {
   modules: [Navigation, Pagination, Scrollbar],

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
      dragSize: 37.22,
   },
   slidesPerView: 'auto',
   spaceBetween: 0,
});


// Нумерація навігації Swiper
const firstSlider = document.querySelector('.first-section__swiper');
let prevNomberSlide;
let nextNomberSlide;
if (firstSlider) {
   console.log(firstSlider);
    prevNomberSlide = firstSlider.querySelector('.swiper-button-prev');
    nextNomberSlide = firstSlider.querySelector('.swiper-button-next');
   
}

let nomberSlide;
let prev;
let next;

window.onload = function () {

   //----------Зміна стилю Header-------------

   flsFunctions.changeStyle();

   //------Підключення  прелоудерa---------

   flsFunctions.preloaderF();
   //--------------------------------------
   let slider = document.querySelector('.first-section__swiper');

   if (slider) {
      nomberSlide = swiper.activeIndex;
      prev = nomberSlide;
      if (prev < 10) {
         prevNomberSlide.textContent = "0" + prev;
      } else {
         prevNomberSlide.textContent = prev;
      };

      next = nomberSlide + 2;
      if (next < 10) {
         nextNomberSlide.textContent = "0" + next;
      } else {
         nextNomberSlide.textContent = next;
      }
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

   next = nomberSlide + 2;
   if (next < 10) {
      nextNomberSlide.textContent = "0" + next;
   } else {
      nextNomberSlide.textContent = next;
   }
});



//!!Підключення файлу з бургер-меню
//import "./modules/burger-menu.js";
flsFunctions.burgerMenu();

//Підключення файлу з динамічної зміни падінгів контейнера
//import "./files/pdng-text-conteiner.js";

//Підключення файлу створення мініатюри попередньогоперегляду завантаженого фалу
import "./modules/input-file.js";

//Підключення файлу застосування модального вікна
import "./modules/pop-up.js";

//Підключення файлу відправки форми без перезавантаження вікна
//import "./modules/sending-data.js";

//Підключення файлу one-news
import "./modules/one-news.js";

//Підключення файлу створення мініатюри попередньогоперегляду завантаженого фалу
import "./modules/news.js";

//Підключення слайдера для сторінки one-news 

const swiperOneNews = new Swiper('.last-on-section__swiper', {  
   slidesPerView: 'auto',
   //spaceBetween: 48, //????????
});