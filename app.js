
let imageClick = document.querySelector('.gallery-img');
let modalClose = document.querySelector('.modal-close');
let wrapper = document.querySelector('.modal-wrapper');


imageClick.addEventListener('click', function(){
    wrapper.classList.add('active');
})

modalClose.addEventListener('click', function(){
      wrapper.classList.remove('active');
});

/*

const modalOp = document.querySelector(".overlay");
const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".closeBtn");

modalOp.addEventListener("click", openModal);
modal.addEventListener('click', closeModal);
closeBtn.addEventListener('click', outsideClick);

function openModal(){
    modal.style.display = 'block';
}

function closeModal(){
    modal.style.display = 'none';
}

function outsideClick(e){
     if(e.target == modal){
         modal.style.display = 'none';
     }
}
*/