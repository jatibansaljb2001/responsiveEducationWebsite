burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navlist = document.querySelector('.navlist')
rightNavbar = document.querySelector('.right-navbar')

burger.addEventListener('click', () => {
    navlist.classList.toggle('visibility-resp')
    rightNavbar.classList.toggle('visibility-resp')
    navbar.classList.toggle('nav-height-resp')
})