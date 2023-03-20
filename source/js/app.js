// burger button

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

// modal open window

const modalButtons = document.querySelectorAll('.modal__open');
  const modal = document.querySelector('.modal');
  const modalCloseButton = document.querySelector('.modal__submit-button');

  const onModalButtonClick = (evt) => {
    evt.preventDefault();
    modal.classList.add('modal-open');
  };

  modalButtons.forEach((button) => button.addEventListener('click', onModalButtonClick));

  modalCloseButton.addEventListener('click', () => {
    modal.classList.remove('modal-open');
  });

  // close modal window on push keydown Escape

  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      modal.classList.remove('modal-open');
    }
  });