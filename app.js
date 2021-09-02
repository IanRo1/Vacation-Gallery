
let imageClick = document.querySelectorAll('.gallery-img');
let modalClose = document.querySelectorAll('.modal-close');
let wrapper = document.querySelector('.modal-wrapper');



imageClick.forEach((image) => {image.addEventListener('click', () => {
    wrapper.classList.add('active');
});
});

modalClose.forEach((modal) => {modal.addEventListener('click', () => {
      wrapper.classList.remove('active');
});
});

