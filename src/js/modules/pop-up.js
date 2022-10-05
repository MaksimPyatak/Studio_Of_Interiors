const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll('.lock-padding');

let unlock = true;

const timeout = 800;

if (popupLinks.length > 0) {
   for (let index = 0; index < popupLinks.length; index++) {
      const popupLink = popupLinks[index];
      popupLink.addEventListener("click", function (e) {
         const popupName = popupLink.getAttribute('href').replace('#', '');
         const curentPopup = document.getElementById(popupName);
         popupOpen(curentPopup);
         e.preventDefault();
      })
      
   }
}

const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0) {
   for (let index = 0; index < popupCloseIcon.length; index++) {
      const el = popupCloseIcon[index];
      el.addEventListener('click', function (e) {
         popupClose(el.closest('.popup'));
         e.preventDefault();
      });
   }
}

function popupOpen(curentPopup) {
   if (curentPopup && unlock) {
      const popupActive = document.querySelector('.popup.open');
      if (popupActive) {
         popupClose(popupActive, false)
      } else {
         bodyLock();
      }
      curentPopup.classList.add('open');
      curentPopup.addEventListener("click", function (e) {
         if (!e.target.closest('.popup__body')) {
            popupClose(e.target.closest('.popup'));
         }
      })
   }
}

function popupClose(popupActive, doUnlock = true) {
   if (unlock) {
      popupActive.classList.remove('open');
      if (doUnlock) {
         bodyUnlock();
      }
   }
}

function bodyLock() {
   const lockPaddingVaue = window.innerWidth - document.querySelector('.wraper').offsetWidth + 'px';

   if (lockPadding.length > 0) {
      for (let index = 0; index < lockPadding.length; index++) {
         const el = lockPadding[index];
         el.style.paddingRight = lockPaddingVaue;
      }
   }
   body.style.paddingRight = lockPaddingVaue;
   body.classList.add('lock');

   unlock = false;
   setTimeout(function () {
      unlock = true;
   }, timeout);
}

function bodyUnlock() {
   setTimeout(function () {
      if (lockPadding.length > 0) {       
         for (let index = 0; index < lockPadding.length; index++) {
            const el = lockPadding[index];
            el.style.paddingRight = '0px';  
         }
      }
      body.style.paddingRight = '0px';
      body.classList.remove('lock');
   }, timeout);

   unlock = false;
   setTimeout(function () {
      unlock = true;
   },timeout);
}

document.addEventListener('keydown', function name(e) {
   if (e.key === Escape) {
      const popupActive = document.querySelector('.popup.open');
      popupClose(popupActive);
   }
})

//(function () {
//	// перевіряемо підтримку
//	if (!Element.prototype.closest) {
//		// реалізуємо
//		Element.prototype.closest = function (css) {
//			var node = this;
//			while (node) {
//				if (node.matches(css)) return node;
//				else node = node.parentElement;
//			}
//			return null;
//		};
//	}
//})();
//(function () {
//	// перевіряемо підтримку
//	if (!Element.prototype.matches) {
//		// визначаємо властивість
//		Element.prototype.matches = Element.prototype.matchesSelector ||
//			Element.prototype.webkitMatchesSelector ||
//			Element.prototype.mozMatchesSelector ||
//			Element.prototype.msMatchesSelector;
//	}
//})();