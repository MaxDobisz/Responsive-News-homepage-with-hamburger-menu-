const nav = document.querySelector('.header__nav');
const hamburgerClosed = document.querySelector('.header__hamburger-closed');
const hamburgerOpen = document.querySelector('.header__hamburger-open');
const darkerBackgroundLayer = document.querySelector('.darker-background-layer');

const toggleClass = (el, className) => el.classList.toggle(className);

const toggleMenu = () => {
    toggleClass(nav, 'header__nav--active');
    toggleClass(darkerBackgroundLayer, 'darker-background-layer--active');
    toggleClass(hamburgerOpen, 'header__hamburger-open--active')
    console.log('clcik')
}

hamburgerClosed.addEventListener('click', toggleMenu);
hamburgerOpen.addEventListener('click', toggleMenu);
nav.addEventListener('click', toggleMenu);
darkerBackgroundLayer.addEventListener('click', toggleMenu)