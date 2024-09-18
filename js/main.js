let menu_close = document.querySelector('.menu_close');
let header_burger = document.querySelector('.header_burger');
let menu = document.querySelector('.menu');

header_burger.addEventListener('click', () => {
  menu.classList.add('active')
})

menu_close.addEventListener('click', () => {
  menu.classList.remove('active')
})

const homeSwpBtns = document.querySelectorAll('.home_btns button');

const homeSwp = new Swiper('.home .swiper', {
  slidesPerView: 1,
  spaceBetween: window.innerWidth / 2,
  allowTouchMove: false,
})

homeSwp.on('slideChange', function (e) {
  homeSwpBtns.forEach((btn, btnID) => {
    if (homeSwp.realIndex == btnID) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  })
});

homeSwpBtns.forEach((btn, btnID) => {
  btn.onclick = () => {
    homeSwp.slideTo(btnID);
  }
})