'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
// console.log('modal', modal);
// console.log('show-modal', btnsOpenModal);
const modalContents = document.querySelectorAll('.modal-content')
let openedModal = -1

const openModal = (index) => {
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
    modalContents[index].classList.remove('hidden')
    openedModal = index

}
const closeModal = () => {
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
    modalContents[openedModal].classList.add('hidden')
    openedModal = -1
}

btnsOpenModal.forEach( (btn,modalIndex) => {
    btn.addEventListener('click',() => {
        openModal(modalIndex)
    })
});
btnCloseModal.addEventListener('click',closeModal)
document.addEventListener('keydown',(e) => {
    if ((e.key === 'Escape') && !modal.classList.contains('hidden')) {
        closeModal()
    }
})
overlay.addEventListener('click',() => {
    if (!modal.classList.contains('hidden')) {
        closeModal()
    }
})

