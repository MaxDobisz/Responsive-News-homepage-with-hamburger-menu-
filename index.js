const nav = document.querySelector('.header__nav');
const hamburgerClosed = document.querySelector('.header__hamburger--closed');
const hamburgerOpen = document.querySelector('.header__hamburger--open');
const darkerBackgroundLayer = document.querySelector('.darker-background-layer');
const menuItems = document.querySelectorAll('.header__nav-item');

const toggleActiveClass = (el) => el.classList.toggle('active');

const toggleMenu = () => {
    toggleActiveClass(nav);
    toggleActiveClass(darkerBackgroundLayer);
    toggleActiveClass(hamburgerOpen)
}

hamburgerClosed.addEventListener('click', toggleMenu);
hamburgerOpen.addEventListener('click', toggleMenu);
darkerBackgroundLayer.addEventListener('click', toggleMenu)
menuItems.forEach(el => el.addEventListener('click', toggleMenu));