const BASE_URL = window.location.protocol + '//' + window.location.host;


// UTILS
@@include('util/fade-out.js')
@@include('util/smooth-scroll.js')
@@include('util/replace-broken-image.js')

document.addEventListener('DOMContentLoaded', () => {
	// PARTIALS
	@@include('partial/format-tel-link.js')
	@@include('partial/external-link-norefer.js')
	@@include('partial/protect-image.js')
	@@include('partial/responsive-table.js')
	@@include('partial/swiper.js')
	@@include('partial/menu-burger.js')
	
});


function active() {
  let menuOpen = document.querySelector('.burger-menu');
  let menuClose = document.querySelector('.burger-menu__close-button');
  menuOpen.classList.toggle('burger-menu-active');
  menuClose.classList.toggle('burger-menu-active');
}


let topButton = document.querySelector('.topBtn');
  
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}