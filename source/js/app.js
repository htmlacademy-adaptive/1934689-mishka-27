const header = document.querySelector('.header');
const headerButton = document.querySelector('.header__button');



header.classList.remove('no-js');
headerButton.addEventListener('click', () =>
  header.classList.toggle('is-open'));

document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    header.classList.remove('is-open');
  }
}
);