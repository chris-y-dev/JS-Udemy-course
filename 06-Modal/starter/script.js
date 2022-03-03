'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

//store functions
const openModal = function(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden'); 
}

const closeModal = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden'); 
}

//selecing multiple elements and create events for Array of items
console.log(btnsOpenModal);
for (let i =0; i < btnsOpenModal.length; i++){
    btnsOpenModal[i].addEventListener('click', openModal);
}

//close modal events
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

//keyboard events -> Checking Event Object for key
document.addEventListener('keydown', function
(e){
    console.log(`${e.key} was pressed`);
})

//Close modal with escape
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        if (!modal.classList.contains('hidden')){
            closeModal();
            console.log('Modal was open but now closed');
        }
    }
});