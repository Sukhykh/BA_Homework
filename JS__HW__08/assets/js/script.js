'use strict';

// modal windows

let firstBtnOpen = document.getElementById('firstBtn'),
	secondBtnOpen = document.getElementById('secondBtn'),
	thirdBtnOpen = document.getElementById('thirdBtn'),
	firstModal = document.getElementById('first'),
	secondModal = document.getElementById('second'),
	thirdModal = document.getElementById('third'),
	closeBtnFirst = document.getElementById('closeBtnFirst'),
	closeBtnSecond = document.getElementById('closeBtnSecond'),
	closeBtnThird = document.getElementById('closeBtnThird');

closeBtnFirst.addEventListener('click', () => {
	if (closeBtnFirst) {
		firstModal.classList.add('none');
	}
});
closeBtnSecond.addEventListener('click', () => {
	if (closeBtnSecond) {
		secondModal.classList.add('none');
	}
});
closeBtnThird.addEventListener('click', () => {
	if (closeBtnThird) {
		thirdModal.classList.add('none');
	}
});
firstBtnOpen.addEventListener('click', () => {
	if (firstBtnOpen) {
		firstModal.classList.remove('none');
	}
});
secondBtnOpen.addEventListener('click', () => {
	if (secondBtnOpen) {
		secondModal.classList.remove('none');
	}
});
thirdBtnOpen.addEventListener('click', () => {
	if (thirdBtnOpen) {
		thirdModal.classList.remove('none');
	}
});

// textarea task

let textRead = document.querySelector('.first__text');
let textFormat = document.querySelector('.first__area');

document.addEventListener('keydown', (event) => {
	event.preventDefault();
	if (event.code == 'KeyE' && (event.ctrlKey || event.metaKey)) {
		textRead.classList.add('none');
		textFormat.classList.remove('none');

		let userText = textRead.textContent;
		textFormat.innerHTML = userText;
	}
});

document.addEventListener('keydown', (event) => {
	event.preventDefault();
	if (event.code == 'KeyS' && (event.ctrlKey || event.metaKey)) {
		textRead.classList.remove('none');
		textFormat.classList.add('none');

		let userText = textFormat.innerHTML;
		textRead.textContent = userText;
	}
});
