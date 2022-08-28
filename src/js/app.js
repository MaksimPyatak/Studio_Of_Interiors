import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();


import Swiper, { Navigation, Pagination } from 'swiper';

const swiper = new Swiper('.first-section__swiper', {
    modules: [Navigation, Pagination],
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
    },
});