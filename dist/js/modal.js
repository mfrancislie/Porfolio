// for modal

const modal = document.querySelector('#modal-email');
const openBtn = document.querySelector('.navbar_btn');
const closeBtn = document.querySelector('.close-btn');

openBtn.addEventListener('click', () =>{

    modal.style.display = 'block';
});

closeBtn.addEventListener('click', () =>{

    modal.style.display = 'none';
});

window.addEventListener('submit', (e) =>{

    if (e.target === modal) {
        
        modal.style.display = 'none';
    }
});