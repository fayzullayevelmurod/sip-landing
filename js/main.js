let menu_close = document.querySelector('.menu_close');
let header_burger = document.querySelector('.header_burger');
let menu = document.querySelector('.menu');

header_burger.addEventListener('click', () => {
  menu.classList.add('active')
})

menu_close.addEventListener('click', () => {
  menu.classList.remove('active')
})
