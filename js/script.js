let container = document.querySelector('.container');
let profile = document.querySelector('#account_popup');
let profileInfo = document.querySelector('#open_account');
let menu = document.querySelector('.menu');
let hamburger = document.querySelector('.hamburger');
let closes = document.querySelector('.closes');
let searchIcon = document.querySelector('#search_icon');
let searchForm = document.querySelector('#search');


//! Search form
searchIcon.addEventListener('click', () => {
    searchForm.classList.toggle('search_visible')
})

//! Account
profile.addEventListener('click', () => {
    profileInfo.classList.toggle('active')
    menu.style.transform = 'translateX(-250px)';
    container.classList.toggle('open');
});

//!Hamburger 


closes.addEventListener('click', () => {
    menu.style.transform = 'translateX(-250px)';
    profileInfo.classList.remove('active')
    container.classList.remove('open'); //? Overlay close
});

hamburger.addEventListener('click', () => {
    menu.style.transform = 'translateX(0px)';
    profileInfo.classList.remove('active');
    container.classList.add('open'); //? Overlay open
});

//! Overlay 
let overlay = document.querySelector('.overlay')

overlay.addEventListener('click', () => {
    menu.style.transform = 'translateX(-250px)';
    container.classList.remove('open'); //? Overlay close
    profileInfo.classList.remove('active');
})

//! Header

let navbar = document.querySelector('#navbar');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    let {pageYOffset} = window;
    if(pageYOffset>lastScrollTop) {  
        navbar.classList.add('visible');
    } else if (pageYOffset < lastScrollTop) { //! Yuxari cekende visible silinir ()
        navbar.classList.remove('visible');
    } 
    lastScrollTop = pageYOffset <= 0 ? 0 : pageYOffset; //?650px
}
);
