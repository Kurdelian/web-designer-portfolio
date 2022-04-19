(() => {
    const refs = {
        openModalBtn: document.querySelector('.header__button'),
        closeModalBtn: document.querySelector('[data-modal-close]'),
        feedBackButton: document.querySelector('.feed-back__button'),
        footerButton: document.querySelector('.footer__button'),
        modal: document.querySelector('[data-modal]'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
    refs.feedBackButton.addEventListener('click', toggleModal);
    refs.footerButton.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle('is-hidden');
    }
  })();