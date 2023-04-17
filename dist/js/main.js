const BASE_URL = window.location.protocol + '//' + window.location.host;


// UTILS
function fadeOut(element, soft = false, callback = null) {
	if(!element) {
		return false;
	}

	element.style.opacity = 1;

	(function fade() {
		if((element.style.opacity -= 0.1) < 0) {
			if(soft) {
				element.style.display = "none";
			} else {
				element.remove();
			}

			if(callback instanceof Function) {
				callback();
			} else if(window[callback] instanceof Function) {
				window[callback]();
			}
		} else {
			requestAnimationFrame(fade);
		}
	})();

}

function smoothScroll(element) {
	if(element) {
		element.scrollIntoView({
			behavior: 'smooth'
		});
	}
}

function smoothScrollToTop() {
	window.scrollTo({
		top: 0,
		behavior: 'smooth'
	});
}

document.addEventListener('click', event => {
	if(event.target.tagName !== 'A') {
		return false;
	}
	const anchor = event.target;
	const anchor_href = anchor.getAttribute('href');

	if(anchor_href === '#') {
		event.preventDefault();
		smoothScrollToTop();
	}
	else if(anchor_href.charAt(0) === '#' || (anchor_href.charAt(0) === '/' && anchor_href.charAt(1) === '#')) {
		if(!anchor.hash) {
			return false;
		}

		const target = document.querySelector(anchor.hash);
		if(target) {
			event.preventDefault();
			smoothScroll(target);
		}
	}
});

window.onload = () => {
	document.querySelectorAll('img').forEach(image => {
		if(image.complete && typeof image.naturalWidth != 'undefined' && image.naturalWidth <= 0) {
			image.src = BASE_URL + '/img/no-image.jpg';
		}
	});
};


document.addEventListener('DOMContentLoaded', () => {
	// PARTIALS
	document.querySelectorAll('a').forEach(anchor => {
	if(anchor.hasAttribute('href') && anchor.href.startsWith('tel:')) {
		anchor.href = 'tel:' + anchor.href.replaceAll(/[^\d+]/g, '');
	}
});

	document.querySelectorAll('a').forEach(anchor => {
	if(anchor.hasAttribute('target') && anchor.getAttribute('target') === '_blank') {
		anchor.setAttribute('rel', 'noopener noreferrer nofollow');
	}
});

	document.addEventListener('contextmenu', event => {
	if(event.target.nodeName === 'IMG') {
		event.preventDefault();
	}
});

	document.querySelectorAll('table').forEach(table => {
	if(!table.parentElement.classList.contains('table-responsive')) {
		table.outerHTML = '<div class="table-responsive">' + table.outerHTML + '</div>';
	}
});

	var swiper = new Swiper(".mySwiper", {
  slidesPerView: 5,
  centerSlide: 'true',
  loop: true,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    // dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    576: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
    1500: {
      slidesPerView: 5,
    }
  },
});
	
function active() {
  let menuOpen = document.querySelector('.burger-menu');
  let menuClose = document.querySelector('.burger-menu__close-button');
  menuOpen.classList.toggle('burger-menu-active');
  menuClose.classList.toggle('burger-menu-active');
}
	
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEJBU0VfVVJMID0gd2luZG93LmxvY2F0aW9uLnByb3RvY29sICsgJy8vJyArIHdpbmRvdy5sb2NhdGlvbi5ob3N0O1xyXG5cclxuXHJcbi8vIFVUSUxTXHJcbkBAaW5jbHVkZSgndXRpbC9mYWRlLW91dC5qcycpXHJcbkBAaW5jbHVkZSgndXRpbC9zbW9vdGgtc2Nyb2xsLmpzJylcclxuQEBpbmNsdWRlKCd1dGlsL3JlcGxhY2UtYnJva2VuLWltYWdlLmpzJylcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XHJcblx0Ly8gUEFSVElBTFNcclxuXHRAQGluY2x1ZGUoJ3BhcnRpYWwvZm9ybWF0LXRlbC1saW5rLmpzJylcclxuXHRAQGluY2x1ZGUoJ3BhcnRpYWwvZXh0ZXJuYWwtbGluay1ub3JlZmVyLmpzJylcclxuXHRAQGluY2x1ZGUoJ3BhcnRpYWwvcHJvdGVjdC1pbWFnZS5qcycpXHJcblx0QEBpbmNsdWRlKCdwYXJ0aWFsL3Jlc3BvbnNpdmUtdGFibGUuanMnKVxyXG5cdEBAaW5jbHVkZSgncGFydGlhbC9zd2lwZXIuanMnKVxyXG5cdEBAaW5jbHVkZSgncGFydGlhbC9tZW51LWJ1cmdlci5qcycpXHJcblx0XHJcbn0pO1xyXG5cclxuXHJcbmZ1bmN0aW9uIGFjdGl2ZSgpIHtcclxuICBsZXQgbWVudU9wZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnVyZ2VyLW1lbnUnKTtcclxuICBsZXQgbWVudUNsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1cmdlci1tZW51X19jbG9zZS1idXR0b24nKTtcclxuICBtZW51T3Blbi5jbGFzc0xpc3QudG9nZ2xlKCdidXJnZXItbWVudS1hY3RpdmUnKTtcclxuICBtZW51Q2xvc2UuY2xhc3NMaXN0LnRvZ2dsZSgnYnVyZ2VyLW1lbnUtYWN0aXZlJyk7XHJcbn1cclxuXHJcblxyXG5sZXQgdG9wQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvcEJ0bicpO1xyXG4gIFxyXG53aW5kb3cub25zY3JvbGwgPSBmdW5jdGlvbigpIHtzY3JvbGxGdW5jdGlvbigpfTtcclxuXHJcbmZ1bmN0aW9uIHNjcm9sbEZ1bmN0aW9uKCkge1xyXG4gIGlmIChkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCA+IDEwMCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wID4gMTAwKSB7XHJcbiAgICB0b3BCdXR0b24uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICB9IGVsc2Uge1xyXG4gICAgdG9wQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRvcEZ1bmN0aW9uKCkge1xyXG4gIGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wID0gMDtcclxuICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wID0gMDtcclxufSJdLCJmaWxlIjoibWFpbi5qcyJ9