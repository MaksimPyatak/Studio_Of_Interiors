const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll('.lock-padding');
let form;

let unlock = true;

const timeout = 800;

if (popupLinks.length > 0) {
   for (let index = 0; index < popupLinks.length; index++) {
      const popupLink = popupLinks[index];
      popupLink.addEventListener("click", function startPopup (e) {
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
   let i=0
   while (i<1) {
   if (curentPopup && unlock) {
      const popupActive = document.querySelector('.popup.open');
      
      if (popupActive) {
         form = popupActive.querySelector('form');
         if (form) {
            let error = formValidate();
            if (error === 0) {
               popupClose(popupActive, false)
            } else {
               alert('Fill in the required fields!');
               break;
            }
         } else {
            popupClose(popupActive, false)
         }           
      } else {
         bodyLock();
      }
      curentPopup.classList.add('open');
      curentPopup.addEventListener("click", function (e) {
         if (!e.target.closest('.close-area')) {
            popupClose(e.target.closest('.popup'));
         }  
      })      
      i = 1;
   }   
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
   const lockPaddingVaue = window.innerWidth - document.querySelector('body').offsetWidth + 'px';
   if (lockPadding.length > 0) {
      for (let index = 0; index < lockPadding.length; index++) {
         const el = lockPadding[index];
         el.style.paddingRight = lockPaddingVaue;
      }
   }
   body.style.paddingRight = lockPaddingVaue;
   body.classList.add('_lock');

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
      body.classList.remove('_lock');
   }, timeout);

   unlock = false;
   setTimeout(function () {
      unlock = true;
   },timeout);
}

document.addEventListener('keydown', function name(e) {
   //const esc = Escape;
   if (e.code == 'Escape') {
      const popupActive = document.querySelector('.popup.open');
      popupClose(popupActive);
   }
})

function formValidate() {
   let error = 0;
   let formReq = document.querySelectorAll('._req');

   for (let index = 0; index < formReq.length; index++) {
      const input = formReq[index];
      formRemoveError(input);

      if (input.classList.contains('_email')) {
         if(emailTest(input)){
            formAddError(input);
            error++;
        }
      } else {
         if (input.value === ""){
             formAddError(input);
             error++;
         }
     }
   }
   return error;
}

function formAddError(input) {
   input.parentElement.classList.add('_error');
   input.classList.add('_error');
}
function formRemoveError(input) {
   input.parentElement.classList.remove('_error');
   input.classList.remove('_error');
}
function emailTest(input) {
   return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
}
