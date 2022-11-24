
const navigation = document.querySelector('.header__nav');
const hamburgerClosed = document.querySelector('.header__hamburger--closed');
const hamburgerOpen = document.querySelector('.header__hamburger--open');
const darkerBackgroundLayer = document.querySelector('.darker-background-layer');

hamburgerClosed.addEventListener('click', () => {
    navigation.classList.add('header__nav--active');
    darkerBackgroundLayer.classList.add('darker-background-layer--active');
});

hamburgerOpen.addEventListener('click', () => {
    navigation.classList.remove('header__nav--active');
    darkerBackgroundLayer.classList.remove('darker-background-layer--active');
});