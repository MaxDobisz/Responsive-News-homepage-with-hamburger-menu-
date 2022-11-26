
const nav = document.querySelector('.header__nav');
const hamburgerClosed = document.querySelector('.header__hamburger--closed');
const hamburgerOpen = document.querySelector('.header__hamburger--open');
const darkerBackgroundLayer = document.querySelector('.darker-background-layer');

const toggleClass = (el, className) => el.classList.toggle(className);

hamburgerClosed.addEventListener('click', () => {
    toggleClass(); 
    darkerBackgroundLayer.classList.add('darker-background-layer--active');
});

hamburgerOpen.addEventListener('click', () => {
    toggleHamburgerMenu();
    darkerBackgroundLayer.classList.remove('darker-background-layer--active');
});

const navItems = document.querySelectorAll('.nav__item');
navItems.forEach(item => item.addEventListener('click', () => {
    nav.classList.remove('header__nav--active');
    darkerBackgroundLayer.classList.remove('darker-background-layer--active');
}))


// hamburgerClosed.addEventListener('click', () => {
//     navigation.classList.add('header__nav--active');
//     darkerBackgroundLayer.classList.add('darker-background-layer--active');
// });

// hamburgerOpen.addEventListener('click', () => {
//     navigation.classList.remove('header__nav--active');
//     darkerBackgroundLayer.classList.remove('darker-background-layer--active');
// });

// const navItems = document.querySelectorAll('.nav__item');
// navItems.forEach(item => item.addEventListener('click', () => {
//     navigation.classList.remove('header__nav--active');
//     darkerBackgroundLayer.classList.remove('darker-background-layer--active');
// }))