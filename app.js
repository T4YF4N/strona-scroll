const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');

// Display Mobile Menu
const mobileMenu = () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

// Show active menu when scrolling
const highlightMenu = () => {
  const elem = document.querySelector('.highlight');
  const firma = document.querySelector('#firma-link');
  const onas = document.querySelector('#onas-link');
  const galeria = document.querySelector('#galeria-link');
  const oferta = document.querySelector('#oferta-link');
  const opinie = document.querySelector('#opinie-link');
  let scrollPos = window.scrollY;
  // console.log(scrollPos);

  // adds 'highlight' class to my menu items
  if (window.innerWidth > 960 && scrollPos < 600) {
    firma.classList.add('highlight');
    onas.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 1400) {
    onas.classList.add('highlight');
    firma.classList.remove('highlight');
    galeria.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 2345) {
    galeria.classList.add('highlight');
    onas.classList.remove('highlight');
    oferta.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 3295) {
    oferta.classList.add('highlight');
    galeria.classList.remove('highlight');
    opinie.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 4145) {
    opinie.classList.add('highlight');
    oferta.classList.remove('highlight');
    return;

  }

  if ((elem && window.innerWIdth < 960 && scrollPos < 600) || elem) {
    elem.classList.remove('highlight');
  }
};

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

//  Close mobile Menu when clicking on a menu item
const hideMobileMenu = () => {
  const menuBars = document.querySelector('.is-active');
  if (window.innerWidth <= 768 && menuBars) {
    menu.classList.toggle('is-active');
    menuLinks.classList.remove('active');
  }
};

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);