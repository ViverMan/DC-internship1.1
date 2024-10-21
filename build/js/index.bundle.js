/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/modules/mobile-nav.js
function mobileNav() {
	// Mobile nav button
	const navBtn = document.querySelector('.mobile-nav-btn');
	const nav = document.querySelector('.mobile-nav');
	const menuIcon = document.querySelector('.nav-icon');

	navBtn.onclick = function () {
		nav.classList.toggle('mobile-nav--open');
		navBtn.classList.toggle('mobile-nav-btn-click');
		menuIcon.classList.toggle('nav-icon--active');
		document.body.classList.toggle('no-scroll');
	};
}

/* harmony default export */ var mobile_nav = (mobileNav);
;// CONCATENATED MODULE: ./src/js/modules/form-mail.js

function validate() {
    const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

    const input = document.querySelector('.sub-input');
    input.addEventListener('input', onInput);
    function isEmailValid(value) {
        return EMAIL_REGEXP.test(value);
    }

    function onInput() {

        let iconConfirm = document.querySelector('.icon--confirm');
        let iconError = document.querySelector('.icon--error');


        if (isEmailValid(input.value)) {
            input.style.borderColor = '#BEDB39';

            //--- меняю иконки валидации---//
            iconConfirm.classList.add('display-block');
            iconError.classList.remove('display-block');

            const checkbox = document.getElementById('id1');
            document.querySelector('.sub-btn').onclick = func;

            function func(event) {
                //--- проверка по клику нажат чекбокс или нет --- //
                if (checkbox.checked) {
                    //--- если true меняю bg формы отправки --- //
                    document.querySelector('.subscription__form').classList.add('subscription__form_disp-none');
                    document.querySelector('.subscription__form_confirm').classList.add('subscription__form_disp-block');
                }
                event.preventDefault();
            }
        }
        // -- смотрю что в value и меняю бордеры, удаляю иконки ---//
        else if (input.value == '') {
            input.style.border = '2px solid white';
            iconError.classList.remove('display-block');
            iconConfirm.classList.remove('display-block');
        }
        else {
            input.style.borderColor = '#FFAD20';
            iconError.classList.add('display-block');
        }
    }

    input.addEventListener('input', onInput);

}

/* harmony default export */ var form_mail = (validate);

;// CONCATENATED MODULE: ./src/js/modules/header-fly.js
function hedaderFly() {
    let lastScroll = 0;
    const deafult = 200;
    const header = document.querySelector('.header');

    // -- для кроссбраузерности или или --//
    const scrollPosition = () => window.scrollY || document.documentElement.scrollTop;
    const conainHide = () => header.classList.contains('hide');

    window.addEventListener('scroll', () => {

        if (scrollPosition() > lastScroll && !conainHide() && scrollPosition() > deafult) {
            //-- прокручиваем вниз --//
            // console.log('down');
            header.classList.add('hide');
        }
        else if (scrollPosition() < lastScroll && conainHide()) {
            //-- прокручиваем вверх --//
            // console.log('up');
            header.classList.remove('hide');
        }

        lastScroll = scrollPosition()
    })
}

/* harmony default export */ var header_fly = (hedaderFly);
;// CONCATENATED MODULE: ./src/js/index.js
// Галерея и лайтбоксы от Fancybox
// import { Fancybox } from '@fancyapps/ui';
// import '@fancyapps/ui/dist/fancybox/fancybox.css';

// Fancybox.bind('[data-fancybox]', {
// 	// Your custom options
// });

// Мобильная навигация

mobile_nav();


form_mail();


header_fly();

// import headerSearch from './modules/header-search.js';
// headerSearch();

/******/ })()
;