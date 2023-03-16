const headerBtn = document.querySelector('.header__button');
const bodyMenu = document.querySelector('.page__body');
const menuNavDropDown = document.querySelector('.menu');
const menuNavDropDownTwo = document.querySelector('.menu__user');

headerBtn.addEventListener('click', () => {
  const exp = 'true' === headerBtn.getAttribute('aria-expanded')
  headerBtn.setAttribute('aria-expanded', !exp)


headerBtn.classList.toggle('header__button--active')
bodyMenu.classList.toggle('page__body--menu')
menuNavDropDown.classList.toggle('menu--drop-list')
menuNavDropDownTwo.classList.toggle('menu--drop-list')

exp ? headerBtn.setAttribute('aria-label', 'Открыть меню')
: headerBtn.setAttribute('aria-label', 'Закрыть меню')});

document.addEventListener('DOMContentLoaded', function (Event) {

  const  menuNoJs = document.querySelector('.menu')
  const  headerButton = document.querySelector('.header__button')
  const  headerNoJs = document.querySelector('.menu')
  menuNoJs.classList.remove('menu--no-js'),
  headerButton.classList.remove('header__button--no-js')
  headerNoJs.classList.remove('menu--no-js')});

document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      headerNavDropDown.classList.remove('menu--drop-list');
      bodyMenu.classList.remove('page__body--menu')
      headerBtn.classList.remove('header__button--active')
    }
  }
  );
