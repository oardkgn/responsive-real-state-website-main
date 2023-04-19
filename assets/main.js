const menuBtn = document.querySelector('.menu__btn')
const bottomMenu = document.querySelector('.bottom__menu')
const header = document.querySelector('header')
const header__logo = document.querySelector('.header__logo')
const menu__toggler = document.querySelector('.menu__toggler') 
const a__value = document.querySelectorAll('.a__value') 
const secret__parag = document.querySelector('.secret__parag') 
const down__button = document.querySelectorAll('.down__button') 
const menu_home = document.querySelector('.menu_home') 
const menu_residances = document.querySelector('.menu_residances') 
const menu_values = document.querySelector('.menu_values') 
const menu_contact = document.querySelector('.menu_contact') 

menuBtn.addEventListener('click',(e) => {
    menuBtn.classList.toggle('active') 

    bottomMenu.classList.toggle('showing')
})

window.addEventListener('scroll',() => {

    if(scrollY >= 100){
        header.classList.add('dragging')
        header__logo.classList.add('dragging')
        menu__toggler.classList.add('dragging')
    }else{
        header.classList.remove('dragging')
        header__logo.classList.remove('dragging')
        menu__toggler.classList.remove('dragging')
    }
    
    if(scrollY <= 1000){
        menu_home.classList.add('active')
        menu_residances.classList.remove('active')
        menu_values.classList.remove('active')
        menu_contact.classList.remove('active')

    }else if(scrollY <= 1700){
        menu_home.classList.remove('active')
        menu_residances.classList.add('active')
        menu_values.classList.remove('active')
        menu_contact.classList.remove('active')
    }else if(scrollY <= 2750){
        menu_home.classList.remove('active')
        menu_residances.classList.remove('active')
        menu_values.classList.add('active')
        menu_contact.classList.remove('active')
    }else{
        menu_home.classList.remove('active')
        menu_residances.classList.remove('active')
        menu_values.classList.remove('active')
        menu_contact.classList.add('active')
    }
})

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });


 a__value.forEach((item) => {
    item.addEventListener('click',(e) => {
        e.target.parentNode.parentNode.children[1].classList.toggle('active')
        e.target.parentNode.children[2].children[0].classList.toggle('active')
    })
 })