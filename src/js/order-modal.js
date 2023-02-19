(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-order-modal-open]'),
    closeModalBtn: document.querySelector('[data-order-modal-close]'),
    modal: document.querySelector('[data-order-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
