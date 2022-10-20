(() => {
  const refs = {
    page: document.querySelector('.scroll-on'),
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.page.classList.toggle('scroll-on');
    refs.page.classList.toggle('no-scroll');
    refs.modal.classList.toggle('backdrop--is-hidden');
  }
})();
