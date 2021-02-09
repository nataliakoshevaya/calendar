function openModal(modalSelector) {
    const modal = document.querySelector(modalSelector);
    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';
}

function closeModal(modalSelector) {
    const modal = document.querySelector(modalSelector);
    modal.classList.remove('show');
    modal.classList.add('hide');
    document.body.style.overflow = '';
}

function Modal(parent, btnYesSelector, btnNoSelector, hideModal) {
    const btnYes = document.querySelector(btnYesSelector),
          btnNo = document.querySelector(btnNoSelector);

    const removeCard = () => {
        parent.classList.remove('active');
        const id = parent.getAttribute('id');
        const activeCard = document.getElementById(`${id}`);
        activeCard.classList.remove('active')
        const inner = activeCard.querySelector('.inner');
        inner.classList.add('hide')
        localStorage.removeItem(id);
        closeModal(hideModal);
    }


    btnYes.addEventListener('click', removeCard);
    btnNo.addEventListener('click', () => {
        closeModal(hideModal);
    })
}


export default Modal;
export {openModal};
export {closeModal};

