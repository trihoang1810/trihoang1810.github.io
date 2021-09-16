const menuBtn = document.querySelector('.menu-btn');
const boxPopUp = document.querySelector('.box__popup');

let menuOpen = false;
menuBtn.addEventListener('click',()=>{
    if(!menuOpen){
        menuBtn.classList.add('open');
        document.body.classList.add('blur');
        boxPopUp.classList.add('activate');
        menuOpen=true;
    } else {
        boxPopUp.classList.remove('activate');
        menuBtn.classList.remove('open');
        document.body.classList.remove('blur');
        menuOpen=false;
    }
});