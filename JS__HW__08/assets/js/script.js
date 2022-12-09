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
	if (event.code == 'KeyE' && (event.ctrlKey || event.metaKey)) {
		event.preventDefault();

		textRead.classList.add('none');
		textFormat.classList.remove('none');

		let userText = textRead.textContent;
		textFormat.value = userText;
	}

	if (event.code == 'KeyS' && (event.ctrlKey || event.metaKey)) {
		event.preventDefault();

		textRead.classList.remove('none');
		textFormat.classList.add('none');

		let userText = textFormat.value;
		textRead.textContent = userText;
	}
});

// sort task
let table = Array.from(document.querySelectorAll('.second__table-body-row'));
for (let outer = 0; outer < table.length; outer++) {
	let stringArrOuther = Array.from(table[outer].cells);
	for (let inner = 0; inner < stringArrOuther.length; inner++) {
		let stringArrInner = stringArrOuther[inner];
		table[outer].setAttribute(
			`data-${inner + 1}`,
			`${stringArrInner.innerHTML}`
		);
	}
}

let headers = Array.from(
	document.querySelector('.second__table-head-row').cells
);
for (let i = 0; i < headers.length; i++) {
	headers[i].setAttribute(`id`, `sortByData-${i + 1}`);
	headers[i].setAttribute(`data-counter`, `1`);
}

let tableForSort = document.querySelector('.second__table-body');

document.getElementById('sortByData-1').addEventListener('click', (event) => {
	let swicher = +document.getElementById('sortByData-1').dataset.counter;
	switch (swicher) {
		case 1:
			sortNumberRevers('data-1');
			break;
		case 2:
			sortNumber('data-1');
			break;
	}
	document.getElementById('sortByData-1').dataset.counter++;
	if (document.getElementById('sortByData-1').dataset.counter > 2) {
		document.getElementById('sortByData-1').dataset.counter = 1;
	}
});
document.getElementById('sortByData-2').addEventListener('click', (event) => {
	let swicher = +document.getElementById('sortByData-2').dataset.counter;
	switch (swicher) {
		case 1:
			sortString('data-2');
			break;
		case 2:
			sortStringRevers('data-2');
			break;
		case 3:
			sortNumber('data-1');
			break;
	}
	document.getElementById('sortByData-2').dataset.counter++;
	if (document.getElementById('sortByData-2').dataset.counter > 3) {
		document.getElementById('sortByData-2').dataset.counter = 1;
	}
});
document.getElementById('sortByData-3').addEventListener('click', (event) => {
	let swicher = +document.getElementById('sortByData-3').dataset.counter;
	switch (swicher) {
		case 1:
			sortNumber('data-3');
			break;
		case 2:
			sortNumberRevers('data-3');
			break;
		case 3:
			sortNumber('data-1');
			break;
	}
	document.getElementById('sortByData-3').dataset.counter++;
	if (document.getElementById('sortByData-3').dataset.counter > 3) {
		document.getElementById('sortByData-3').dataset.counter = 1;
	}
});
document.getElementById('sortByData-4').addEventListener('click', (event) => {
	let swicher = +document.getElementById('sortByData-4').dataset.counter;
	switch (swicher) {
		case 1:
			sortString('data-4');
			break;
		case 2:
			sortStringRevers('data-4');
			break;
		case 3:
			sortNumber('data-1');
			break;
	}
	document.getElementById('sortByData-4').dataset.counter++;
	if (document.getElementById('sortByData-4').dataset.counter > 3) {
		document.getElementById('sortByData-4').dataset.counter = 1;
	}
});
document.getElementById('sortByData-5').addEventListener('click', (event) => {
	let swicher = +document.getElementById('sortByData-5').dataset.counter;
	switch (swicher) {
		case 1:
			sortNumber('data-5');
			break;
		case 2:
			sortNumberRevers('data-5');
			break;
		case 3:
			sortNumber('data-1');
			break;
	}
	document.getElementById('sortByData-5').dataset.counter++;
	if (document.getElementById('sortByData-5').dataset.counter > 3) {
		document.getElementById('sortByData-5').dataset.counter = 1;
	}
});
document.getElementById('sortByData-6').addEventListener('click', (event) => {
	let swicher = +document.getElementById('sortByData-6').dataset.counter;
	switch (swicher) {
		case 1:
			sortNumber('data-6');
			break;
		case 2:
			sortNumberRevers('data-6');
			break;
		case 3:
			sortNumber('data-1');
			break;
	}
	document.getElementById('sortByData-6').dataset.counter++;
	if (document.getElementById('sortByData-6').dataset.counter > 3) {
		document.getElementById('sortByData-6').dataset.counter = 1;
	}
});
document.getElementById('sortByData-7').addEventListener('click', (event) => {
	let swicher = +document.getElementById('sortByData-7').dataset.counter;
	switch (swicher) {
		case 1:
			sortNumber('data-7');
			break;
		case 2:
			sortNumberRevers('data-7');
			break;
		case 3:
			sortNumber('data-1');
			break;
	}
	document.getElementById('sortByData-7').dataset.counter++;
	if (document.getElementById('sortByData-7').dataset.counter > 3) {
		document.getElementById('sortByData-7').dataset.counter = 1;
	}
});

let replacedNode;
function sortString(dataValue) {
	for (let i = 0; i < tableForSort.children.length; i++) {
		for (let j = i; j < tableForSort.children.length; j++) {
			if (
				tableForSort.children[i].getAttribute(dataValue) >
				tableForSort.children[j].getAttribute(dataValue)
			) {
				replacedNode = tableForSort.replaceChild(
					tableForSort.children[j],
					tableForSort.children[i]
				);
				insert(replacedNode, tableForSort.children[i]);
			}
		}
	}
}

function sortStringRevers(dataValue) {
	for (let i = 0; i < tableForSort.children.length; i++) {
		for (let j = i; j < tableForSort.children.length; j++) {
			if (
				tableForSort.children[i].getAttribute(dataValue) <
				tableForSort.children[j].getAttribute(dataValue)
			) {
				replacedNode = tableForSort.replaceChild(
					tableForSort.children[j],
					tableForSort.children[i]
				);
				insert(replacedNode, tableForSort.children[i]);
			}
		}
	}
}

function sortNumber(dataValue) {
	for (let i = 0; i < tableForSort.children.length; i++) {
		for (let j = i; j < tableForSort.children.length; j++) {
			if (
				+tableForSort.children[i].getAttribute(dataValue) >
				+tableForSort.children[j].getAttribute(dataValue)
			) {
				replacedNode = tableForSort.replaceChild(
					tableForSort.children[j],
					tableForSort.children[i]
				);
				insert(replacedNode, tableForSort.children[i]);
			}
		}
	}
}

function sortNumberRevers(dataValue) {
	for (let i = 0; i < tableForSort.children.length; i++) {
		for (let j = i; j < tableForSort.children.length; j++) {
			if (
				+tableForSort.children[i].getAttribute(dataValue) <
				+tableForSort.children[j].getAttribute(dataValue)
			) {
				replacedNode = tableForSort.replaceChild(
					tableForSort.children[j],
					tableForSort.children[i]
				);
				insert(replacedNode, tableForSort.children[i]);
			}
		}
	}
}

function insert(elem, refElem) {
	return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
}

// resize task

let resizeSection = document.querySelector('.third__text');
let resizeElement = document.querySelector('.third__area');
let startWidth, startHeight, startPositionX, startPositionY;

resizeElement.addEventListener('mousedown', (event) => {
	event.preventDefault();
	startWidth = resizeSection.offsetWidth;
	startHeight = resizeSection.offsetHeight;
	startPositionX = event.clientX;
	startPositionY = event.clientY;

	document.addEventListener('mousemove', resizeElementFn);

	document.addEventListener('mouseup', (event) => {
		document.removeEventListener('mousemove', resizeElementFn);
	});
});

function resizeElementFn(event) {
	let newPositionX = event.clientX - startPositionX;
	let newPositionY = event.clientY - startPositionY;
	resizeSection.style.width = `${startWidth + newPositionX}px`;
	resizeSection.style.height = `${startHeight + newPositionY}px`;
}
