(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-modal-readmore-open]"),
      closeModalBtn: document.querySelector("[data-modal-readmore-close]"),
      modal: document.querySelector("[data-modal-readmore]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
  })();