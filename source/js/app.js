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
  const modalFormInput = document.querySelector('.modal__button-input');

  const onModalButtonClick = (evt) => {
    evt.preventDefault();
    modal.classList.add('modal-open');
    modalFormInput.focus();
  };

  const onModalCloseButtonClick = (evt) => {
    evt.preventDefault();
    modal.classList.remove('modal-open');
  };

  modalCloseButton.addEventListener('click', () => {
    evt.preventDefault();
    modal.classList.remove('modal-open');
  });

  const onModalClick = (evt) => {
    if (evt.target === modal) {
      modal.classList.remove("modal-open");
    }
  };

const onDocumentKeydown = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    modal.classList.remove('modal-open');
  }
};




  modalButtons.forEach((button) => button.addEventListener('click', onModalButtonClick));
  modalCloseButton.addEventListener('click', onModalCloseButtonClick);
  modal.addEventListener('click', onModalClick);
  document.addEventListener('keydown', onDocumentKeydown);