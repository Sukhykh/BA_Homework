document.addEventListener(`DOMContentLoaded`, () => {
	const headerSwiper = new Swiper('.header__slider', {
		wrapperClass: 'slider__wrapper',
		slideClass: 'slider__slide',

		slidesPerView: 1,

		direction: 'horizontal',
		loop: true,
		simulateTouch: true,
		grabCursor: true,
		slideToClickedSlide: true,

		pagination: {
			el: '.slider__pagination',
			type: 'bullets',
			clickable: true,
			bulletClass: 'slider__bullet',
			bulletActiveClass: 'slider__bullet--active',
		},

		speed: 800,
		observer: true,
		observerParents: true,
		observerSlideChildren: true,

		keyboard: {
			enabled: true,
			onlyInViewport: true,
		},

		effect: 'fade',
		fadeEffect: {
			crossFade: true,
		},

		autoplay: {
			delay: 4000,
			disableOnInteraction: false,
		},
	});

	const newsSwiper = new Swiper('.latest-news__slider', {
		wrapperClass: 'news-slider__wrapper',
		slideClass: 'news-slider__slide',

		slidesPerView: 1,

		initialSlide: 1,
		spaceBetween: 30,

		direction: 'horizontal',
		loop: true,

		simulateTouch: true,
		grabCursor: true,
		slideToClickedSlide: true,

		pagination: {
			el: '.news-slider__pagination',
			type: 'bullets',
			clickable: true,
			bulletClass: 'slider__bullet',
			bulletActiveClass: 'slider__bullet--active',
		},

		navigation: {
			nextEl: '.news-slider__btn-next',
			prevEl: '.news-slider__btn-prev',
		},

		speed: 800,

		observer: true,
		observerParents: true,
		observerSlideChildren: true,

		keyboard: {
			enabled: true,
			onlyInViewport: true,
		},

		autoplay: {
			delay: 4000,
			disableOnInteraction: false,
		},

		breakpoints: {
			769: {
				slidesPerView: 2,
				slidesPerGroup: 1,
				loopedSlides: 2,
				centeredSlides: true,
			},

			1600: {
				slidesPerView: 3,
				slidesPerGroup: 1,
				loopedSlides: 3,
				centeredSlides: true,
			},
		},
	});

	//smoothScroll
	const jsContactsBtn = document.getElementById('contactsBtn');
	if (jsContactsBtn) {
		jsContactsBtn.addEventListener('click', function (event) {
			event.preventDefault();

			const contactsToScroll = document.getElementById('contacts');
			if (contactsToScroll) {
				contactsToScroll.scrollIntoView({
					behavior: 'smooth',
					block: 'start',
				});
			}
		});
	}
	const jsNewsBtn = document.getElementById('newsBtn');
	if (jsNewsBtn) {
		jsNewsBtn.addEventListener('click', function (event) {
			event.preventDefault();

			const contactsToScroll = document.getElementById('latestNews');
			if (contactsToScroll) {
				contactsToScroll.scrollIntoView({
					behavior: 'smooth',
					block: 'start',
				});
			}
		});
	}
	const jsProjecrsBtn = document.getElementById('projecrsBtn');
	if (jsProjecrsBtn) {
		jsProjecrsBtn.addEventListener('click', function (event) {
			event.preventDefault();

			const contactsToScroll = document.getElementById('whatWeDo');
			if (contactsToScroll) {
				contactsToScroll.scrollIntoView({
					behavior: 'smooth',
					block: 'start',
				});
			}
		});
	}
	const jsAboutBtn = document.getElementById('aboutBtn');
	if (jsAboutBtn) {
		jsAboutBtn.addEventListener('click', function (event) {
			event.preventDefault();

			const contactsToScroll = document.getElementById('header');
			if (contactsToScroll) {
				contactsToScroll.scrollIntoView({
					behavior: 'smooth',
					block: 'start',
				});
			}
		});
	}
	const jsLogoBtn = document.getElementById('logoBtn');
	if (jsLogoBtn) {
		jsLogoBtn.addEventListener('click', function (event) {
			event.preventDefault();

			const contactsToScroll = document.getElementById('header');
			if (contactsToScroll) {
				contactsToScroll.scrollIntoView({
					behavior: 'smooth',
					block: 'start',
				});
			}
		});
	}
	const jsScrollDownBtn = document.getElementById('scrollDownBtn');
	if (jsScrollDownBtn) {
		jsScrollDownBtn.addEventListener('click', function (event) {
			event.preventDefault();

			const contactsToScroll = document.getElementById('whatWeDo');
			if (contactsToScroll) {
				contactsToScroll.scrollIntoView({
					behavior: 'smooth',
					block: 'start',
				});
			}
		});
	}

	//gallery
	document.addEventListener('click', function (event) {
		let gallery = document.querySelectorAll('.gallery__img-wrapper');
		gallery.forEach(function (item) {
			if (item) {
				item.addEventListener('click', () => {
					gallery.forEach(function (anothetItem) {
						if (anothetItem) {
							anothetItem.classList.remove(
								'gallery__img-wrapper--big'
							);
						}
					});
					item.classList.add('gallery__img-wrapper--big');

					item.addEventListener('mousemove', (event) => {
						let X = event.offsetX;
						let Y = event.offsetY;

						let imageZoom = this.querySelector('.gallery__img');

						imageZoom.style.transformOrigin = `${X}px ${Y}px`;
						imageZoom.style.transform = `scale(2)`;
					});

					item.addEventListener('mouseleave', () => {
						let imageZoom = document.querySelector('.gallery__img');

						imageZoom.style.transformOrigin = `center`;
						imageZoom.style.transform = `scale(1)`;
					});
				});
			}
		});
	});

	//gallery
	let zoomer = document.querySelector('.gallery__img-wrapper--big');
	if (zoomer) {
		zoomer.addEventListener('mousemove', (event) => {
			let X = event.offsetX;
			let Y = event.offsetY;

			let imageZoom = document.querySelector('.gallery__img');

			imageZoom.style.transformOrigin = `${X}px ${Y}px`;
			imageZoom.style.transform = `scale(2)`;
		});

		zoomer.addEventListener('mouseleave', () => {
			let imageZoom = document.querySelector('.gallery__img');

			imageZoom.style.transformOrigin = `center`;
			imageZoom.style.transform = `scale(1)`;
		});
	}

	let burgerSocial = document.querySelector('.social__burger');
	if (burgerSocial) {
		burgerSocial.addEventListener('click', (event) => {
			burgerSocial.classList.toggle('social__burger--activ');
			document
				.querySelector('.instagram')
				.classList.toggle('instagram--activ');
			document
				.querySelector('.facebook')
				.classList.toggle('facebook--activ');
			document
				.querySelector('.twitter')
				.classList.toggle('twitter--activ');
		});
	}

	let burgerMenu = document.querySelector('.menu__burger');
	if (burgerMenu) {
		burgerMenu.addEventListener('click', (event) => {
			burgerMenu.classList.toggle('menu__burger--activ');
			document
				.getElementById('aboutBtn')
				.classList.toggle('about--activ');
			document
				.getElementById('projecrsBtn')
				.classList.toggle('projects--activ');
			document.getElementById('newsBtn').classList.toggle('news--activ');
			document
				.getElementById('contactsBtn')
				.classList.toggle('contact--activ');
		});
	}
});

/*
const addZoom = (target) => {
	let container = document.querySelector(target),
		imgsrc =
			container.currentStyle || window.getComputedStyle(container, false);
	imgsrc = imgsrc.backgroundImage.slice(4, -1).replace(/"/g, '');

	// (B) LOAD IMAGE + ATTACH ZOOM
	let img = new Image();
	img.src = imgsrc;
	img.onload = () => {
		// (B1) CALCULATE ZOOM RATIO
		let ratio = img.naturalHeight / img.naturalWidth,
			percentage = ratio * 100 + '%';

		// (B2) ATTACH ZOOM ON MOUSE MOVE
		container.onmousemove = (e) => {
			let rect = e.target.getBoundingClientRect(),
				xPos = e.clientX - rect.left,
				yPos = e.clientY - rect.top,
				xPercent = xPos / (container.clientWidth / 100) + '%',
				yPercent = yPos / ((container.clientWidth * ratio) / 100) + '%';

			Object.assign(container.style, {
				backgroundPosition: xPercent + ' ' + yPercent,
				backgroundSize: img.naturalWidth + 'px',
			});
		};

		// (B3) RESET ZOOM ON MOUSE LEAVE
		container.onmouseleave = (e) => {
			Object.assign(container.style, {
				backgroundPosition: 'center',
				backgroundSize: 'cover',
			});
		};
	};
};

// (C) ATTACH FOLLOW ZOOM
window.onload = () => {
	addZoom('.gallery__img-wrapper--big');
};
*/

// map
function initMap() {
	// The location of Uluru
	const centerPosition = { lat: 40.6748943, lng: -73.8989638 };
	// The map, centered at Uluru
	const map = new google.maps.Map(document.getElementById('map'), {
		zoom: 15,
		center: centerPosition,
		mapID: '35eef2831ce8997',
		Name: 'Monticello',
	});
	// The marker, positioned at Uluru
	const markerPosition = { lat: 40.6775, lng: -73.8989638 };
	const marker = new google.maps.Marker({
		position: markerPosition,
		map: map,
		icon: '/Monticello__Project__2/assets/img/marker.png',
	});
}

window.initMap = initMap;
