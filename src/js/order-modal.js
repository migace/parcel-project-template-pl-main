(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-order-modal-open]"),
    openModalBtn2: document.querySelector("[data-order-modal-open-2]"),
    closeModalBtn: document.querySelector("[data-order-modal-close]"),
    modal: document.querySelector("[data-order-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.openModalBtn2.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();
