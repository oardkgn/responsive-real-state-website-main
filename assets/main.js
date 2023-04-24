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
const top_menu_home = document.querySelector('.top_menu_home') 
const top_menu_residances = document.querySelector('.top_menu_residances') 
const top_menu_values = document.querySelector('.top_menu_values') 
const top_menu_contact = document.querySelector('.top_menu_contact')
const checkbox = document.querySelector('#checkbox')
const brands = document.querySelector('.brands')


menuBtn.addEventListener('click',(e) => {
    menuBtn.classList.toggle('active') 
    bottomMenu.classList.toggle('showing')
})

window.addEventListener('scroll',() => {

    if(scrollY >= 100){
        header.classList.add('dragging')
        header__logo.classList.add('dragging')
        menu__toggler.classList.add('dragging')
        top_menu_home.classList.add('dragging')
        top_menu_residances.classList.add('dragging')
        top_menu_values.classList.add('dragging')
        top_menu_contact.classList.add('dragging')
    }else{
        header.classList.remove('dragging')
        header__logo.classList.remove('dragging')
        menu__toggler.classList.remove('dragging')
        top_menu_home.classList.remove('dragging')
        top_menu_residances.classList.remove('dragging')
        top_menu_values.classList.remove('dragging')
        top_menu_contact.classList.remove('dragging')
    }
    
    if(scrollY <= 1000){
        menu_home.classList.add('active')
        top_menu_home.classList.add('active')
        menu_residances.classList.remove('active')
        top_menu_residances.classList.remove('active')
        menu_values.classList.remove('active')
        top_menu_values.classList.remove('active')
        menu_contact.classList.remove('active')
        top_menu_contact.classList.remove('active')

    }else if(scrollY <= 1700){
        menu_home.classList.remove('active')
        top_menu_home.classList.remove('active')
        menu_residances.classList.add('active')
        top_menu_residances.classList.add('active')
        menu_values.classList.remove('active')
        top_menu_values.classList.remove('active')
        menu_contact.classList.remove('active')
        top_menu_contact.classList.remove('active')
    }else if(scrollY <= 2750){
        menu_home.classList.remove('active')
        menu_residances.classList.remove('active')
        top_menu_residances.classList.remove('active')
        menu_values.classList.add('active')
        top_menu_values.classList.add('active')
        menu_contact.classList.remove('active')
        top_menu_contact.classList.remove('active')
    }else{
        menu_home.classList.remove('active')
        menu_residances.classList.remove('active')
        top_menu_residances.classList.remove('active')
        menu_values.classList.remove('active')
        top_menu_values.classList.remove('active')
        menu_contact.classList.add('active')
        top_menu_contact.classList.add('active')
    }
})

const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    breakpoints: {
      600: {
            slidesPerView: 2,
      },
      930:{
        slidesPerView: 3,
      }
    },
    spaceBetween:10,
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

 checkbox.addEventListener('change', function() {
    if (this.checked) {
        document.querySelector('body').style.backgroundColor = 'var(--dark-header-color)'
        document.querySelectorAll('p').forEach(item => {
            item.style.color = 'whitesmoke'
        })
        document.querySelectorAll('h3').forEach(item => {
            item.style.color = 'skyblue'
        })
        document.querySelectorAll('.a__value__container').forEach(item => {
            item.style.backgroundColor = 'rgb(37, 37, 37)'
        })
        document.querySelectorAll('h4').forEach(item => {
            item.style.color = 'whitesmoke'
        })
        document.querySelectorAll('h2').forEach(item => {
            item.style.color = 'whitesmoke'
        })
        header.style.backgroundColor='var(--dark-header-color)'
    } else {
        document.querySelector('body').style.backgroundColor = 'whitesmoke'
        document.querySelectorAll('p').forEach(item => {
            item.style.color = 'var(--dark-header-color)'
        })
        document.querySelectorAll('h3').forEach(item => {
            item.style.color = 'rgb(46, 51, 57)'
        })
        document.querySelectorAll('.a__value__container').forEach(item => {
            item.style.backgroundColor = 'transparent'
        })
        document.querySelectorAll('h4').forEach(item => {
            item.style.color = 'var(--dark-header-color)'
        })
        document.querySelectorAll('h2').forEach(item => {
            item.style.color = 'var(--dark-header-color)'
        })
        header.style.backgroundColor='transparent'
    }
  });

  const sr = ScrollReveal({
    origin:'top',
    distance:'60px',
    duration:2500,
    delay:300,
    //reset:true
  })

  sr.reveal('.hero__title, .residences__carousel, .getStarted,.footer ')
  sr.reveal('.hero__text',{delay:400}) 
  sr.reveal('.hero__search__bar',{delay:500}) 
  sr.reveal('.hero__infos',{delay:600}) 
  sr.reveal('.hero__image__container',{delay:400,origin:'bottom'}) 
  sr.reveal('.brands',{interval:100}) 
  sr.reveal('.secondary__image, .contact__us__left',{origin:'left'}) 
  sr.reveal('.about__us__right,.contuct__image',{origin:'right'}) 