const buttonOpenModal = document.getElementById('openModal')

const divModalWrapper = document.querySelector('.modal-wrapper')

buttonOpenModal.onclick = function() {
    divModalWrapper.classList.remove('invisible')
}

document.addEventListener('keydown', function(event) {
    const isEscKey = event.key === 'Escape'

    if(isEscKey) {
        divModalWrapper.classList.add('invisible')
    }
})