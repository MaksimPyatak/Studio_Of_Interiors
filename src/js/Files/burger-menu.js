const iconMenu = document.querySelector('.menu__burger');
if (iconMenu){
   const menuList = document.querySelector('.menu__list');
   const headerZero = document.querySelector('.header__zero');
   const firstSection = document.querySelector('.first-section__swiper');
   const menuBurgerIcon = document.querySelector('.menu__burger-icon');
   const menyHeading = document.querySelector('.menu__heading');
   iconMenu.addEventListener("click", function (e) {
      document.body.classList.toggle('_lock');
      menuBurgerIcon.classList.toggle('_active');
      headerZero.classList.toggle('_active');
      firstSection.classList.toggle('_active');
      menuList.classList.toggle('_active');
      menyHeading.classList.toggle('_active');
   })
}