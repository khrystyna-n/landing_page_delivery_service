const BASE_URL = window.location.protocol + '//' + window.location.host;

console.log('%cMade by Zakandaiev', 'background:#da4648;color:#fff;padding:10px;font-weight:bold;');


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEJBU0VfVVJMID0gd2luZG93LmxvY2F0aW9uLnByb3RvY29sICsgJy8vJyArIHdpbmRvdy5sb2NhdGlvbi5ob3N0O1xyXG5cclxuQEBpbmNsdWRlKCdwYXJ0aWFsL3dhdGVybWFyay5qcycpXHJcblxyXG4vLyBVVElMU1xyXG5AQGluY2x1ZGUoJ3V0aWwvZmFkZS1vdXQuanMnKVxyXG5AQGluY2x1ZGUoJ3V0aWwvc21vb3RoLXNjcm9sbC5qcycpXHJcbkBAaW5jbHVkZSgndXRpbC9yZXBsYWNlLWJyb2tlbi1pbWFnZS5qcycpXHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xyXG5cdC8vIFBBUlRJQUxTXHJcblx0QEBpbmNsdWRlKCdwYXJ0aWFsL2Zvcm1hdC10ZWwtbGluay5qcycpXHJcblx0QEBpbmNsdWRlKCdwYXJ0aWFsL2V4dGVybmFsLWxpbmstbm9yZWZlci5qcycpXHJcblx0QEBpbmNsdWRlKCdwYXJ0aWFsL3Byb3RlY3QtaW1hZ2UuanMnKVxyXG5cdEBAaW5jbHVkZSgncGFydGlhbC9yZXNwb25zaXZlLXRhYmxlLmpzJylcclxuXHRAQGluY2x1ZGUoJ3BhcnRpYWwvc3dpcGVyLmpzJylcclxuXHRAQGluY2x1ZGUoJ3BhcnRpYWwvbWVudS1idXJnZXIuanMnKVxyXG59KTtcclxuXHJcblxyXG5mdW5jdGlvbiBhY3RpdmUoKSB7XHJcbiAgbGV0IG1lbnVPcGVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1cmdlci1tZW51Jyk7XHJcbiAgbGV0IG1lbnVDbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXJnZXItbWVudV9fY2xvc2UtYnV0dG9uJyk7XHJcbiAgbWVudU9wZW4uY2xhc3NMaXN0LnRvZ2dsZSgnYnVyZ2VyLW1lbnUtYWN0aXZlJyk7XHJcbiAgbWVudUNsb3NlLmNsYXNzTGlzdC50b2dnbGUoJ2J1cmdlci1tZW51LWFjdGl2ZScpO1xyXG59Il0sImZpbGUiOiJtYWluLmpzIn0=