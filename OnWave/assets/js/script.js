document.addEventListener(`DOMContentLoaded`, () => {
	let burgerBtn = document.querySelector('.header__burger');
	let burgerMenu = document.querySelector('.header__menu');
	burgerBtn.addEventListener('click', (event) => {
		if (burgerBtn) {
			event.preventDefault();
			burgerBtn.classList.toggle('click-btn');
			burgerMenu.classList.toggle('click-menu');
		}
	});

	window.addEventListener('resize', (event) => {
		if (window.innerWidth > 700) {
			burgerBtn.classList.remove('click-btn');
			burgerMenu.classList.remove('click-menu');
		}
	});

	const swiperMain = new Swiper('.main-slider__swiper', {
		wrapperClass: 'main-slider__swiper-wrapper',
		slideClass: 'main-slider__swiper-slide',

		direction: 'horizontal',
		loop: true,
		simulateTouch: true,
		grabCursor: true,
		slideToClickedSlide: true,
		slidesPerView: 1,

		pagination: {
			el: '.main-slider__swiper-pagination',
			type: 'bullets',
			clickable: true,
			bulletClass: 'main-slider__bullet',
			bulletActiveClass: 'main-slider__bullet--active',
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

	const swiperNew = new Swiper('.new__swiper', {
		direction: 'horizontal',
		spaceBetween: 15,
		loop: true,
		initialSlide: 1,
		slidesPerView: 1,
		centeredSlides: true,
		simulateTouch: true,
		grabCursor: true,
		slideToClickedSlide: true,

		pagination: {
			el: '.new__swiper-pagination',
			type: 'bullets',
			clickable: true,
			bulletClass: 'new__swiper-bullet',
			bulletActiveClass: 'new__swiper-bullet--active',
		},

		navigation: {
			nextEl: '.new__swiper-button--next',
			prevEl: '.new__swiper-button--prev',
		},

		breakpoints: {
			580: {
				slidesPerView: 2,
				centeredSlides: false,
			},
			768: {
				slidesPerView: 3,
				centeredSlides: false,
			},
			1200: {
				slidesPerView: 4,
				centeredSlides: false,
			},
			1400: {
				spaceBetween: 20,
				slidesPerView: 5,
			},
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
	});

	const swiperBrands = new Swiper('.brands__swiper', {
		direction: 'horizontal',
		spaceBetween: 10,
		loop: true,
		initialSlide: 1,
		slidesPerView: 2,
		centeredSlides: false,
		simulateTouch: true,
		grabCursor: true,
		slideToClickedSlide: true,

		pagination: {
			el: '.brands__swiper-pagination',
			type: 'bullets',
			clickable: true,
			bulletClass: 'brands__swiper-bullet',
			bulletActiveClass: 'brands__swiper-bullet--active',
		},

		navigation: {
			nextEl: '.brands__swiper-button--next',
			prevEl: '.brands__swiper-button--prev',
		},

		breakpoints: {
			500: {
				slidesPerView: 3,
			},
			620: {
				slidesPerView: 4,
			},
			700: {
				slidesPerView: 5,
			},
			768: {
				slidesPerView: 6,
			},
			1000: {
				slidesPerView: 7,
			},
			1200: {
				spaceBetween: 20,
				slidesPerView: 8,
			},
			1400: {
				slidesPerView: 9,
			},
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
	});

	let mainBtn = document.querySelectorAll('.main-slider__btn');
	mainBtn.forEach((item) => {
		item.addEventListener('click', (event) => {
			event.preventDefault();
		});
	});

	document
		.querySelector('.new__btn-wrapper')
		.addEventListener('click', (event) => {
			event.preventDefault();
		});

	let headerMenu = document.querySelectorAll('.header__menu-link');
	headerMenu.forEach((item) => {
		item.addEventListener('click', (event) => {
			event.preventDefault();
		});
	});

	let footerMenu = document.querySelectorAll('.footer__menu-link');
	footerMenu.forEach((item) => {
		item.addEventListener('click', (event) => {
			event.preventDefault();
		});
	});
});
