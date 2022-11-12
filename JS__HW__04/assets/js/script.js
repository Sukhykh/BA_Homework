//alert('Домашня робота на тему "Функції в JavaScriptS"');

//мінімум 1
alert('Можливі варіанти оголошення функцій (інформація буде в консолі).');

// Function declaration
function functionDeclaration(text) {
	console.log(text);
}
functionDeclaration('Function declaration');

// Function expression
let functionExpression = function (text) {
	console.log(text);
};
functionExpression('Function expression');

// Arrow function
let arrowFunction = (text) => console.log(text);
arrowFunction('Arrow function');

//Immediately Invoked Function Expressions (IIFE)
(function (text) {
	console.log(text);
})('Immediately Invoked Function Expressions (IIFE)');

// The "new Function" syntax
let newFunction = new Function('text', 'console.log(text)');
newFunction(`The "new Function" syntax`);

//мінімум 2
alert(
	'Функція, що обраховує кількість переданих до неї аргументів (результати будуть в консолі).'
);
while (true) {
	let functionArgs = '';
	let functionArgString = '';

	while (true) {
		functionArgs = prompt(
			'Через пробіл введи аргументи, які хочеш передати в функцію:'
		);

		functionArgString =
			functionArgString.length > 0
				? functionArgString + ' ' + functionArgs
				: functionArgs;

		let nextArgs = confirm('Може щось іще?');
		if (nextArgs == false) {
			break;
		}
	}

	function allOfArgs(stringOfArgs) {
		let arreyArgs = stringOfArgs.split(' ');
		return arreyArgs;
	}

	function allOfArgsLength(stringOfArgs) {
		let arreyArgs = stringOfArgs.split(' ');
		return arreyArgs.length;
	}

	console.log(
		`У функцію передано такі аргументи: ${allOfArgs(functionArgString)}`
	);
	console.log(
		'Кількість переданих агрументів: ' + allOfArgsLength(functionArgString)
	);

	let nextArgs = confirm('Хочеш знову спробувати?');
	if (nextArgs == false) {
		break;
	}
}

//мінімум 3
alert('Функція, що порівнює два числа (результати будуть в консолі).');
while (true) {
	let firstNumber;
	let secondNumber;
	while (true) {
		firstNumber = prompt('Прошу тебе ввести будь-яке перше число');
		if (isNaN(firstNumber)) {
			alert(
				`Ну таке. Оте усьо "${firstNumber}" не є числом. Нумо спробуй ще раз!`
			);
			console.log(
				`Ну таке. Оте усьо "${firstNumber}" не є числом. Нумо спробуй ще раз!`
			);
		} else {
			break;
		}
	}
	while (true) {
		secondNumber = prompt('Прошу тебе ввести будь-яке друге число', 0);
		if (isNaN(secondNumber)) {
			alert(
				`Ну таке. Оте усьо "${secondNumber}" не є числом. Нумо спробуй ще раз!`
			);
			console.log(
				`Ну таке. Оте усьо "${secondNumber}" не є числом. Нумо спробуй ще раз!`
			);
		} else {
			break;
		}
	}

	(function (first, second) {
		console.log(`Було введено два числа: ${first} та ${second}`);
		if (first < second) {
			console.log('Перше введене число менше за друге');
		} else if (first > second) {
			console.log('Перше введене число більше за друге');
		} else {
			console.log('Введені числі рівні');
		}
	})(firstNumber, secondNumber);

	let nextTwoNumbers = confirm('Хочеш знову спробувати?');
	if (nextTwoNumbers == false) {
		break;
	}
}

//мінімум 4
alert('Функція, що обраховує факторіал числа (результати будуть в консолі).');
while (true) {
	let numberForFactorial;

	while (true) {
		numberForFactorial = prompt(
			'Прошу тебе ввести число для обрахунку факторіала'
		);
		if (isNaN(numberForFactorial)) {
			alert(
				`Ну таке. Оте усьо "${numberForFactorial}" не є числом. Нумо спробуй ще раз!`
			);
			console.log(
				`Ну таке. Оте усьо "${numberForFactorial}" не є числом. Нумо спробуй ще раз!`
			);
		} else {
			break;
		}
	}

	let factorial = function (number) {
		let factorialSum = 1;
		for (let i = 1; i <= number; ) {
			factorialSum = factorialSum * i++;
		}
		return factorialSum;
	};

	console.log(
		`Факторіал числа ${numberForFactorial} - ${factorial(
			numberForFactorial
		)}`
	);

	let nextFactorial = confirm('Хочеш знову спробувати?');
	if (nextFactorial == false) {
		break;
	}
}

//мінімум 5
alert('Функція, що перетворює цифри в число (результати будуть в консолі).');
while (true) {
	let firstDigit;
	let secondDigit;
	let thirdDigit;

	while (true) {
		firstDigit = prompt('Прошу тебе ввести цифру від 1 до 9');
		if (isNaN(firstDigit) || firstDigit > 9 || firstDigit < 1) {
			alert(`Введене не відповідає умові!`);
			console.log(`Введене не відповідає умові!`);
		} else {
			break;
		}
	}
	while (true) {
		secondDigit = prompt('Прошу тебе ввести цифру від 1 до 9');
		if (isNaN(secondDigit) || secondDigit > 9 || secondDigit < 1) {
			alert(`Введене не відповідає умові!`);
			console.log(`Введене не відповідає умові!`);
		} else {
			break;
		}
	}
	while (true) {
		thirdDigit = prompt('Прошу тебе ввести цифру від 1 до 9');
		if (isNaN(thirdDigit) || thirdDigit > 9 || thirdDigit < 1) {
			alert(`Введене не відповідає умові!`);
			console.log(`Введене не відповідає умові!`);
		} else {
			break;
		}
	}

	let numberFromDigits = (a, b, c) => (numberString = '' + a + b + c);

	numberFromDigits(firstDigit, secondDigit, thirdDigit);

	console.log(
		`З цифр ${firstDigit}, ${secondDigit} та ${thirdDigit} вийшло число ` +
			numberFromDigits(firstDigit, secondDigit, thirdDigit)
	);

	let nextDigits = confirm('Хочеш знову спробувати?');
	if (nextDigits == false) {
		break;
	}
}

//мінімум 6
alert('Функція, що обчислює площу прямокутника (результати будуть в консолі).');
while (true) {
	sidesArgs = prompt('Через пробіл введи довжини сторін прямокутника:');

	let rectunglArea = function (sides) {
		let sidesArgs = sides.split(' ');

		let area;
		if (sidesArgs.length > 1) {
			area = sidesArgs[0] * sidesArgs[1];
		} else {
			area = sidesArgs[0] ** 2;
		}

		return area;
	};

	console.log(
		`Площа прямокутника зі сторонами ${sidesArgs} становить ` +
			rectunglArea(sidesArgs)
	);

	let nextRectungle = confirm('Хочеш знову спробувати?');
	if (nextRectungle == false) {
		break;
	}
}

//норма 1
alert(
	'Функція, що перевіряє чи є число досконалим (результати будуть в консолі).'
);

let isNumberIsPerfect = function (number) {
	let sum = 0;
	for (let i = 1; i < number; i++) {
		if (number % i == 0) {
			sum = sum + i;
		}
	}

	if (sum == number) {
		return true;
	} else {
		return false;
	}
};

while (true) {
	while (true) {
		perfectNumber = prompt('Введи число для перевірки');
		if (isNaN(perfectNumber)) {
			alert(`Введене тобою ${perfectNumber} не є числом`);
			console.log(`Введене тобою ${perfectNumber} не є числом`);
		} else {
			break;
		}
	}

	if (isNumberIsPerfect(perfectNumber) === true) {
		console.log(`Введене число ${perfectNumber} є досконалим`);
	} else {
		console.log(`Введене число ${perfectNumber} не є досконалим`);
	}

	let nextPerfect = confirm('Хочеш знову спробувати?');
	if (nextPerfect == false) {
		break;
	}
}

//норма 2
alert(
	'Функція, що виводить досконалі числа з діапазону (результати будуть в консолі).'
);

function allOffPerfectNumbers(first, second) {
	let allOffPerfectNumbers = '';
	for (i = first; i <= second; i++) {
		if (isNumberIsPerfect(i) === true) {
			allOffPerfectNumbers = allOffPerfectNumbers + i + ' ';
		}
	}
	return allOffPerfectNumbers;
}

while (true) {
	while (true) {
		firstNumberOfArea = prompt(
			'Прошу тебе ввести одну з границь діапазону'
		);
		if (isNaN(firstNumberOfArea)) {
			alert(
				`Ну таке. Оте усьо "${firstNumberOfArea}" не є числом. Нумо спробуй ще раз!`
			);
			console.log(
				`Ну таке. Оте усьо "${firstNumberOfArea}" не є числом. Нумо спробуй ще раз!`
			);
		} else {
			break;
		}
	}
	while (true) {
		secondNumberOfArea = prompt('Прошу тебе ввести іншу границю діапазону');
		if (isNaN(firstNumberOfArea)) {
			alert(
				`Ну таке. Оте усьо "${secondNumberOfArea}" не є числом. Нумо спробуй ще раз!`
			);
			console.log(
				`Ну таке. Оте усьо "${secondNumberOfArea}" не є числом. Нумо спробуй ще раз!`
			);
		} else {
			break;
		}
	}

	firstNumberOfArea = +firstNumberOfArea;
	secondNumberOfArea = +secondNumberOfArea;

	if (firstNumberOfArea > secondNumberOfArea) {
		console.log(
			`В діапазоні від ${secondNumberOfArea} до ${firstNumberOfArea} досконалими числами є ${allOffPerfectNumbers(
				secondNumberOfArea,
				firstNumberOfArea
			)}`
		);
	} else {
		console.log(
			`В діапазоні від ${firstNumberOfArea} до ${secondNumberOfArea} досконалими числами є ${allOffPerfectNumbers(
				firstNumberOfArea,
				secondNumberOfArea
			)}`
		);
	}

	let nextPerfectAll = confirm('Хочеш знову спробувати?');
	if (nextPerfectAll == false) {
		break;
	}
}

alert('Це все. Далі буде 8)');
