const mdlBtn = document.querySelector('.modal-btn');
const extBtn = document.querySelector('.exit-modal');
const modal = document.querySelector('.modal');

const modalShow = mdlBtn.addEventListener('click', () => {
    modal.classList.toggle('modal-show');
})
const modalHide = extBtn.addEventListener('click', () => {
    modal.classList.toggle('modal-show');
})