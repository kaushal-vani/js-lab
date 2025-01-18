'use strict'
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeButton = document.querySelector('.close-modal');
const showButton = document.querySelectorAll('.show-modal');
const closeModal = function() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
    };
const openModal = function(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};    
for(let i = 0; i < showButton.length; i++)
{
    showButton[i].addEventListener('click',openModal )
};

closeButton.addEventListener('click',closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function(e){
    if(e.key === "Escape" && !modal.classList.contains('hidden')){
        if(!modal.classList.contains('hidden')){
            closeModal();
        }
    };
});