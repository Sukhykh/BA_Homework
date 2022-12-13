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
});
