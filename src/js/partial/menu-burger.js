
function active() {
  let menuOpen = document.querySelector('.burger-menu');
  let menuClose = document.querySelector('.burger-menu__close-button');
  menuOpen.classList.toggle('burger-menu-active');
  menuClose.classList.toggle('burger-menu-active');
}