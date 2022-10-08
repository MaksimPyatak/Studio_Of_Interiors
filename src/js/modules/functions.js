/* Проверка поддержки webp, добавление класса webp или no-webp для HTML */
export function isWebp() {
	// Проверка поддержки webp
	function testWebP(callback) {
		let webP = new Image();
		webP.onload = webP.onerror = function () {
			callback(webP.height == 2);
		};
		webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
	}
	// Добавление класса _webp или _no-webp для HTML
	testWebP(function (support) {
		let className = support === true ? 'webp' : 'no-webp';
		document.documentElement.classList.add(className);
	});
}
//------------------------------
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//Підключення  прелоудерa

export function preloaderF(delay) {
   //const delay = 10000;
   console.log(delay);
   const preloader = document.querySelector('.preloader');
   preloader.classList.add('loaded_hiding');
   window.setTimeout(function () {
      preloader.classList.add('loaded');
      preloader.classList.remove('loaded_hiding');
   }, delay);
}
//----------------------------------
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//Підключення файлу з бургер-меню
export function burgerMenu() {   
   const iconMenu = document.querySelector('.menu__burger');
   if (iconMenu){
      const menuBoxList = document.querySelector('.menu__box-list');
      const headerZero = document.querySelector('.header__zero');
      const firstSection = document.querySelector('.first-section__swiper');
      const menuBurgerIcon = document.querySelector('.menu__burger-icon');
      const menyHeading = document.querySelector('.menu__heading');
      iconMenu.addEventListener("click", function (e) {
         document.body.classList.toggle('_lock');
         menuBurgerIcon.classList.toggle('_active');
         headerZero.classList.toggle('_active');
         firstSection.classList.toggle('_active');
         menuBoxList.classList.toggle('_active');
         menyHeading.classList.toggle('_active');
      })
   }
}
