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
				centeredSlides: false,
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

						let imageZoom = item.querySelector('.gallery__img');

						imageZoom.style.transformOrigin = `${X}px ${Y}px`;
						imageZoom.style.transform = `scale(2)`;
					});

					item.addEventListener('mouseleave', () => {
						let imageZoom = item.querySelector('.gallery__img');

						imageZoom.style.transformOrigin = `center`;
						imageZoom.style.transform = `scale(1)`;
					});
				});
			}
		});
	});
	/*
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
*/
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

// map
function initMap() {
	const centerPosition = { lat: 40.6748943, lng: -73.8989638 };

	const map = new google.maps.Map(document.getElementById('map'), {
		zoom: 15,
		center: centerPosition,
		mapID: '39c0c986cf023f57',
		Name: 'Monticello',
		styles: [
			{
				elementType: 'geometry',
				stylers: [
					{
						color: '#f5f5f5',
					},
				],
			},
			{
				elementType: 'labels.icon',
				stylers: [
					{
						visibility: 'off',
					},
				],
			},
			{
				elementType: 'labels.text.fill',
				stylers: [
					{
						color: '#616161',
					},
				],
			},
			{
				elementType: 'labels.text.stroke',
				stylers: [
					{
						color: '#f5f5f5',
					},
				],
			},
			{
				featureType: 'administrative.land_parcel',
				stylers: [
					{
						visibility: 'off',
					},
				],
			},
			{
				featureType: 'administrative.land_parcel',
				elementType: 'labels.text.fill',
				stylers: [
					{
						color: '#bdbdbd',
					},
				],
			},
			{
				featureType: 'administrative.neighborhood',
				stylers: [
					{
						visibility: 'off',
					},
				],
			},
			{
				featureType: 'poi',
				elementType: 'geometry',
				stylers: [
					{
						color: '#eeeeee',
					},
				],
			},
			{
				featureType: 'poi',
				elementType: 'labels.text.fill',
				stylers: [
					{
						color: '#757575',
					},
				],
			},
			{
				featureType: 'poi.park',
				elementType: 'geometry',
				stylers: [
					{
						color: '#e5e5e5',
					},
				],
			},
			{
				featureType: 'poi.park',
				elementType: 'labels.text.fill',
				stylers: [
					{
						color: '#9e9e9e',
					},
				],
			},
			{
				featureType: 'road',
				elementType: 'geometry',
				stylers: [
					{
						color: '#ffffff',
					},
				],
			},
			{
				featureType: 'road',
				elementType: 'labels',
				stylers: [
					{
						visibility: 'off',
					},
				],
			},
			{
				featureType: 'road.arterial',
				stylers: [
					{
						visibility: 'off',
					},
				],
			},
			{
				featureType: 'road.arterial',
				elementType: 'labels.text.fill',
				stylers: [
					{
						color: '#757575',
					},
				],
			},
			{
				featureType: 'road.highway',
				elementType: 'geometry',
				stylers: [
					{
						color: '#dadada',
					},
				],
			},
			{
				featureType: 'road.highway',
				elementType: 'labels',
				stylers: [
					{
						visibility: 'off',
					},
				],
			},
			{
				featureType: 'road.highway',
				elementType: 'labels.text.fill',
				stylers: [
					{
						color: '#616161',
					},
				],
			},
			{
				featureType: 'road.local',
				stylers: [
					{
						visibility: 'off',
					},
				],
			},
			{
				featureType: 'road.local',
				elementType: 'labels.text.fill',
				stylers: [
					{
						color: '#9e9e9e',
					},
				],
			},
			{
				featureType: 'transit.line',
				elementType: 'geometry',
				stylers: [
					{
						color: '#e5e5e5',
					},
				],
			},
			{
				featureType: 'transit.station',
				elementType: 'geometry',
				stylers: [
					{
						color: '#eeeeee',
					},
				],
			},
			{
				featureType: 'water',
				elementType: 'geometry',
				stylers: [
					{
						color: '#c9c9c9',
					},
				],
			},
			{
				featureType: 'water',
				elementType: 'labels.text',
				stylers: [
					{
						visibility: 'off',
					},
				],
			},
			{
				featureType: 'water',
				elementType: 'labels.text.fill',
				stylers: [
					{
						color: '#9e9e9e',
					},
				],
			},
		],
	});

	const markerPosition = { lat: 40.6775, lng: -73.8989638 };
	const marker = new google.maps.Marker({
		position: markerPosition,
		map: map,
		icon: '/Monticello__Project__2/assets/img/marker.png',
	});
}

window.initMap = initMap;
