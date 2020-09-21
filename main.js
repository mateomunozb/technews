buttom = document.querySelector('.menu-btn')
navMenu = document.querySelector('.nav-menu')
console.log('TLC: navMenu', navMenu)
console.log('TLC: buttom', buttom)

const showMenu = (e) => navMenu.classList.toggle('show')

buttom.addEventListener('click', showMenu)

ScrollReveal().reveal('.showcase')
ScrollReveal().reveal('.news-cards', { delay: 500 })
ScrollReveal().reveal('.cards-banner-one', { delay: 500 })
ScrollReveal().reveal('.cards-banner-two', { delay: 500 })
