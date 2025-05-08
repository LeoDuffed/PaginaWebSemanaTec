const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar-container-menu');
const navLogo =document.querySelector('#navbar__logo')

//Display mobile function 

const mobileMenu = () =>{
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

const higlighMenu = () => {
    const elem =document.querySelector('.higlight');
    const homeMenu =document.querySelector('#homa-page');
    const aboutMenu =document.querySelector('#about-page');
    const servicesMenu =document.querySelector('#sevices-page');
    const reciclarMenu = document.querySelector('#reciclaje-page');

    let scrollPos =window.scrollY

    if(window.innerWidth > 960 && scrollPos < 600){
        homeMenu.classList.add('highlight');
        servicesMenu.classList.remove('highlight');
        return;
    } else if (window.innerWidth > 960 && scrollPos < 1200){
        aboutMenu.classList.remove('highlight');
        homeMenu.classList.remove('highlight');
        servicesMenu.classList.add('highlight');
        return;
    } else if (window.innerWidth > 960 && scrollPos < 1700){
        servicesMenu.classList.remove('highlight');
        aboutMenu.classList.add('highlight');
        reciclarMenu.classList.remove('highlight');
        return;
    } else if (window.innerWidth > 960 && scrollPos < 2634){
        aboutMenu.classList.remove('highlight');
        reciclarMenu.classList.add('highlight');
        return;
    }

    if((elem && window.innerWidth <960 && scrollPos < 600) || elem){
        elem.classList.remove('highlight');
    }

};

window.addEventListener('scroll', higlighMenu);
window.addEventListener('click', higlighMenu);

const hideMenu = () =>{
    const menuBars = document.querySelector('.is-active');
    if(window.innerWidth <= 768 && menuBars){
        menu.classList.toggle('is-active');
        menuLinks.classList.remove('active');
    }
};

menuLinks.addEventListener('click', hideMenu);
navLogo.addEventListener('click', hideMenu);
