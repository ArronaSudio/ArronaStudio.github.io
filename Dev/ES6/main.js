let Layout = document.querySelector('.Content');
let btnMenu = document.querySelector('.btn--menu');
let btnMessenger = document.querySelector('.btn--messenger');
let Menu = document.querySelector('.menu--smartphone');
let Messenger =document.querySelector('.messenger');
let btnCrossMenu = document.querySelector('.btn--left');
let btnCrossMessenger = document.querySelector('.btn--right');

const Version ="V1.0.0 Alfa"

console.log(Version);

btnMenu.addEventListener('click', (e) =>{
    e.preventDefault();
    e.stopImmediatePropagation();
    Menu.style.display="block";
    btnCrossMenu.style.display="block";
});

btnMessenger.addEventListener('click', (e) =>{
    e.preventDefault();
    e.stopImmediatePropagation();
    Messenger.style.display="block";
    btnCrossMessenger.style.display="block";
});

btnCrossMenu.addEventListener('click', (e) =>{
    e.preventDefault();
    e.stopImmediatePropagation();
    Menu.style.display="none";
    btnCrossMenu.style.display="none";
});

btnCrossMessenger.addEventListener('click', (e) =>{
    e.preventDefault();
    e.stopImmediatePropagation();
    Messenger.style.display="none";
    btnCrossMessenger.style.display="none";
});
