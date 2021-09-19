const menuBtn = document.querySelector('.menu-btn');
const content = document.querySelector('.content');
const boxPopup =document.querySelector('.box__popup');
let menuOpen = false;

menuBtn.addEventListener('click',()=>{
    if(!menuOpen){
        menuBtn.classList.add('open');
        boxPopup.classList.add('activate');
        document.body.classList.add('blur');
        content.classList.add('pop');
        menuOpen=true;
    } else {
        content.classList.remove('pop');
        boxPopup.classList.remove('activate');
        menuBtn.classList.remove('open');
        document.body.classList.remove('blur');
        menuOpen=false;
    }
});