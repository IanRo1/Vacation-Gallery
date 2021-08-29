const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    navLinks.forEach((link, index) => {
        if(link.style.animation){
            link.style.animation = ''
        } else{
         link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
        }
 });
 burger.classList.toggle('toggle');
});

}

navSlide();

//Modal

const modalOp = document.querySelectorAll(".overlay");
const modal = document.querySelectorAll(".modal");
const closeBtn = document.querySelectorAll(".closeBtn");

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