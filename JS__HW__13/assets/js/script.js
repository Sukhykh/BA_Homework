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

/*
1) Реалізуй клас, що описує коло. У класі повинні бути такі компоненти:

поле, що зберігає радіус кола;
get-властивість, яке повертає радіус кола;
set-властивість, що встановлює радіус кола;
get-властивість, яке повертає діаметр кола;
метод, що обчислює площу кола;
метод, що обчислює довжину кола.
Продемонструй роботу властивостей і методів.

*/

class Circle {
	constructor(radiusValue) {
		this.radius = radiusValue;
	}

	get radius() {
		return this._radius;
	}

	get diametr() {
		return this._radius * 2;
	}

	areaCircle() {
		return Math.PI * this.radius * this.radius;
	}

	lengthCircle() {
		return 2 * Math.PI * this.radius;
	}

	set radius(radiusValue) {
		this._radius = radiusValue;
	}
}

let inputField = document.querySelector('.first__results');
document
	.querySelector('.first__radius-btn')
	.addEventListener('click', (event) => {
		event.preventDefault();
		let radiusValue = document.querySelector('.first__area').value;
		console.log(radiusValue);
		if (isNaN(radiusValue)) {
			inputField.innerHTML = 'Радіус кола має бути числовим значенням!';
		} else {
			inputField.innerHTML = '';
			createCircle(radiusValue);
		}
	});

function createCircle(radius) {
	let circle = new Circle(radius);
	let circleRadius = document.createElement('div');
	circleRadius.innerHTML = `Радіус кола становить ${circle.radius} одиниць;`;
	inputField.append(circleRadius);

	let circleDiametr = document.createElement('div');
	circleDiametr.innerHTML = `Діаметр кола становить ${circle.diametr} одиниць;`;
	inputField.append(circleDiametr);

	let circleArea = document.createElement('div');
	circleArea.innerHTML = `Площа кола становить ${circle
		.areaCircle()
		.toFixed(2)} квадратних одиниць;`;
	inputField.append(circleArea);

	let circleLength = document.createElement('div');
	circleLength.innerHTML = `Довжина кола становить ${circle
		.lengthCircle()
		.toFixed(2)} одиниць`;
	inputField.append(circleLength);
}

/*
2) Реалізуй клас, що описує канцелярський маркер. У класі 
повинні бути такі компоненти:

поле, яке зберігає колір маркера;
поле, яке зберігає кількість чорнил у маркері (у відсотках);
метод для вводу (приймає рядок і виводить текст відповідним 
кольором; текст виводиться доти, доки в маркері є чорнило; 
один не пробільний символ — це 0,5 % чорнил у маркері).

Реалізуй клас, що описує маркер, який можна перезаправляти. 
Успадкуй цей клас від простого маркера й додай метод для заправки.

Продемонструй роботу написаних методів.
*/

const colors = [
	{
		name: `red`,
		color: `ff0000`,
	},
	{
		name: `blue`,
		color: `0000ff`,
	},
	{
		name: `green`,
		color: `008000`,
	},
	{
		name: `yellow`,
		color: `ffff00`,
	},
	{
		name: `black`,
		color: `000000`,
	},
	{
		name: `orange`,
		color: `ffa500`,
	},
	{
		name: `pink`,
		color: `ffc0cb`,
	},
	{
		name: `violet`,
		color: `ee82ee`,
	},
];

class Marker {
	constructor(colorValue) {
		this.color = colorValue;
		this.paint = `100`;
	}

	get color() {
		return this._color;
	}

	get paint() {
		return this._paint;
	}

	set color(colorValue) {
		this._color = colorValue;
	}

	set paint(paintValue) {
		this._paint = paintValue;
	}

	getText() {
		let text = document.querySelector('.second__text-area');
		text.addEventListener('input', (event) => {
			let textArray = [...text.value];
			let fatherBlock = document.querySelector('.second__text-output');
			fatherBlock.innerHTML = ' ';
			let opacityVar = 1;
			textArray.forEach((element) => {
				let info = document.querySelector('.second__text-inform');
				let char = document.createElement('span');
				char.innerText = element;
				char.style.color = `#${this.color}`;
				if (element !== ' ') {
					char.style.opacity = opacityVar;
					opacityVar = opacityVar - 0.005;
				} else {
					char.style.opacity = opacityVar;
				}
				if (opacityVar < 0.3) {
					info.innerHTML = ' ';
					info.innerHTML = 'Маркер закінчується!';
				}
				if (opacityVar < 0) {
					info.innerHTML = ' ';
					info.innerHTML = 'Маркер закінчився!';
					this.paint = '0';
				}
				char.innerText = element;
				fatherBlock.append(char);
			});
		});
	}
}

class RechargebleMarker extends Marker {
	constructor(...args) {
		super(...args);
	}

	resetGetText() {
		let text = document.querySelector('.second__text-area');
		text.addEventListener('input', (event) => {
			let textArray = [...text.value];
			let fatherBlock = document.querySelector('.second__text-output');
			fatherBlock.innerHTML = ' ';
			let opacityVar = 1;
			textArray.forEach((element) => {
				let info = document.querySelector('.second__text-inform');
				let char = document.createElement('span');
				char.innerText = element;
				char.style.color = `#${this.color}`;
				if (element !== ' ') {
					char.style.opacity = opacityVar;
					opacityVar = opacityVar - 0.005;
				} else {
					char.style.opacity = opacityVar;
				}
				if (opacityVar < 0.3) {
					info.innerHTML = ' ';
					info.innerHTML = 'Маркер закінчується!';
				}
				if (opacityVar < 0) {
					info.innerHTML = ' ';
					info.innerHTML =
						'Маркер закінчився! Тепер ми його заправимо!';
					opacityVar = 1;
				}
				char.innerText = element;
				fatherBlock.append(char);
			});
		});
	}
}

document
	.querySelector('.second__text-area')
	.addEventListener('keydown', blocker);

function blocker(event) {
	event.preventDefault();
}
let toggleMarker = false;
let rechargebleBtn = document.querySelector('.second__rechargeable-option');
rechargebleBtn.addEventListener('click', (event) => {
	let startLength = rechargebleBtn.classList.length;
	rechargebleBtn.classList.toggle('second__rechargeable-option--select');
	let finalLength = rechargebleBtn.classList.length;
	startLength < finalLength ? (toggleMarker = true) : (toggleMarker = false);
	console.log(toggleMarker);
});

let colorArea = document.querySelector('.second__color-select');
colors.forEach((element) => {
	let newColor = document.createElement('div');
	newColor.classList.add('second__new-color');
	newColor.style.backgroundColor = `#${element.color}`;
	colorArea.append(newColor);
	newColor.addEventListener('click', (event) => {
		event.preventDefault();
		let allColors = colorArea.querySelectorAll('.second__new-color');
		allColors.forEach((element) => {
			element.classList.remove('second__picked-color');
		});
		newColor.classList.add('second__picked-color');
		console.log(element.name);
		document
			.querySelector('.second__text-area')
			.removeEventListener('keydown', blocker);
		if (toggleMarker) {
			let marker = new RechargebleMarker(element.color);
			marker.resetGetText();
		} else {
			let marker = new RechargebleMarker(element.color);
			marker.getText();
		}
	});
});

/*
3) Реалізуй клас Employee, що описує працівника, і створи 
масив працівників банку.
Реалізуй клас EmpTable для генерації HTML-коду таблиці 
зі списком працівників банку. Масив працівників необхідно 
передавати через конструктор, а отримувати HTML-код за 
допомогою методу getHtml ().
Створи об’єкт класу EmpTable і виведи на екран результат 
роботи методу getHtml ().
*/

class Employee {
	constructor(name, mail, position) {
		this.name = name;
		this.mail = mail;
		this.position = position;
	}
}

let people = [
	new Employee('Tony Stark', 't.stark@bank.com', 'Lead designer'),
	new Employee('Alex Cutter', 'a.cutter@bank.com', 'Developer'),
	new Employee('Elena Simpson', 'e.simpson@bank.com', 'Artist'),
	new Employee('Lily Allen', 'l.allen@bank.com', 'Graphic Designer'),
];

class EmpTable {
	constructor(arrayEmp) {
		this.people = arrayEmp;
	}

	getHtml() {
		let tableWrapper = document.querySelector('.table-task');
		let bankTable = document.createElement('table');
		bankTable.classList.add('third__table');
		let tableHead = document.createElement('thead');
		let tableTrHead = document.createElement('tr');
		let tableThName = document.createElement('th');
		let tableThMail = document.createElement('th');
		let tableThPos = document.createElement('th');

		tableThName.innerHTML = 'name';
		tableThMail.innerHTML = 'mail';
		tableThPos.innerHTML = 'position';

		tableTrHead.append(tableThName);
		tableTrHead.append(tableThMail);
		tableTrHead.append(tableThPos);
		tableHead.append(tableTrHead);
		bankTable.append(tableHead);
		tableWrapper.append(bankTable);

		this.people.forEach((element) => {
			let tableBody = document.createElement('tbody');
			let tableTrBody = document.createElement('tr');
			let tableThName = document.createElement('th');
			let tableThMail = document.createElement('th');
			let tableThPos = document.createElement('th');

			tableThName.innerHTML = element.name;
			tableThMail.innerHTML = element.mail;
			tableThPos.innerHTML = element.position;

			tableTrBody.append(tableThName);
			tableTrBody.append(tableThMail);
			tableTrBody.append(tableThPos);
			tableBody.append(tableTrBody);
			bankTable.append(tableBody);
		});
	}
}

let bankTable = new EmpTable(people);
console.log(bankTable.people);
//let createTable = bankTable.getHtml.bind(bankTable.people);
//createTable();
bankTable.getHtml();
