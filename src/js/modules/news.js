const tabs = document.getElementsByClassName('tabs__tab');
const cards = document.getElementsByClassName('card');
const tabsBox = document.querySelector('.tabs');
const tabsList = document.querySelector('.tabs__list');
const openingBox = document.querySelector('.tabs__opening-box');

if (tabs.length > 0) {
    for (let i = 0; i < tabs.length; i++) {
      const tab = tabs[i];
      tab.addEventListener("click", showCard);
    }
   // tabsBox.addEventListener("click", showTabs);
    openingBox.addEventListener("click", showTabs);
}

function showCard(e) {
   let valueDisplay = window.getComputedStyle(openingBox).getPropertyValue('display');
   if (valueDisplay != "none") {
      tabsList.style.display = "none";
      
   }
   let target = e.target;
   for (let i = 0; i < tabs.length; i++) {
      tabs[i].classList.remove('active-tab');      
   }
   target.classList.add('active-tab'); 
   const whichCard = target.getAttribute('id');
   for (let i = 0; i < cards.length; i++) {
      cards[i].classList.remove('not-active'); 
   }
   if (whichCard != "all") {
      for (let i = 0; i < cards.length; i++) {
         let cardClass = cards[i].classList;
         let namberOfClasses = 0;
         for (let index = 0; index < cardClass.length; index++) {
            if (cardClass[index] != whichCard) {
               namberOfClasses = namberOfClasses + 1;
            }
         }
         if (namberOfClasses == cardClass.length) {
            cards[i].classList.add('not-active'); 
         }
      }      
   } 
}

function showTabs() {
   let valueDisplay = window.getComputedStyle(tabsList).getPropertyValue('display');
   if (valueDisplay == "none") {
      tabsList.style.display = "flex";
   } 
}

//Додати абсолютну позиції tabs__list з з-ындексом, щоб відображалося поверх батьківського блку.