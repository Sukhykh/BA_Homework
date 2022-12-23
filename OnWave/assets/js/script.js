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

	const swiper = new Swiper('.main-slider__swiper', {
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
});
