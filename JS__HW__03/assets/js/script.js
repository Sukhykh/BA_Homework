alert('Домашня робота на тему "Цикли й умови в JavaScriptS"');

//мінімум 1
//How old are you?
while (true) {
	let age = +prompt('How old are you?', 0);
	if (age == 0) {
		alert(`I was pleased to have a talk with you! Have a nice day!`);
		console.log(`I was pleased to have a talk with you! Have a nice day!`);
		break;
	} else if (age <= 11) {
		alert(
			`You are just a child. You are only ${age} years old! Go and play somewhere else!`
		);
		console.log(
			`You are just a child. You are only ${age} years old! Go and play somewhere else!`
		);
		break;
	} else if (age <= 17) {
		alert(
			`You are ${age}, so you become a teenager. Let's grab some beer! Or do you prefer something else?`
		);
		console.log(
			`You are ${age}, so you become a teenager. Let's grab some beer! Or do you prefer something else?`
		);
		break;
	} else if (age <= 59) {
		alert(
			`You are adult in your ${age}! Have you become a big man yet? I don't think you still have a lot of time for this...`
		);
		console.log(
			`You are adult in your ${age}! Have you become a big man yet? I don't think you still have a lot of time for this...`
		);
		break;
	} else if (age > 60) {
		alert(
			`Greetings! You age a pensioner in your ${age}. I hope you have some life experience that your grandsons don't expect you to share with them.`
		);
		console.log(
			`Greetings! You age a pensioner in your ${age}. I hope you have some life experience that your grandsons don't expect you to share with them.`
		);
		break;
	} else {
		alert(
			`I also don't like to tell strangers about my age. But you have to do it! I really need to pass this homework!`
		);
		console.log(
			`I also don't like to tell strangers about my age. But you have to do it! I really need to pass this homework!`
		);
	}
}

//мінімум 2
//Special symbols
while (true) {
	let symbol = +prompt(
		'To get special symbol, kindly ask you to input any digit here.',
		0
	);
	switch (symbol) {
		case 1:
			alert(
				`Special symbol, that is located on the key ${symbol} on the keyboard is "!".`
			);
			console.log(
				`Special symbol, that is located on the key ${symbol} on the keyboard is "!".`
			);
			break;
		case 2:
			alert(
				`Special symbol, that is located on the key ${symbol} on the keyboard is "@".`
			);
			console.log(
				`Special symbol, that is located on the key ${symbol} on the keyboard is "@".`
			);
			break;
		case 3:
			alert(
				`Special symbol, that is located on the key ${symbol} on the keyboard is "#".`
			);
			console.log(
				`Special symbol, that is located on the key ${symbol} on the keyboard is "#".`
			);
			break;
		case 4:
			alert(
				`Special symbol, that is located on the key ${symbol} on the keyboard is "$".`
			);
			console.log(
				`Special symbol, that is located on the key ${symbol} on the keyboard is "$".`
			);
			break;
		case 5:
			alert(
				`Special symbol, that is located on the key ${symbol} on the keyboard is "%".`
			);
			console.log(
				`Special symbol, that is located on the key ${symbol} on the keyboard is "%".`
			);
			break;
		case 6:
			alert(
				`Special symbol, that is located on the key ${symbol} on the keyboard is "^".`
			);
			console.log(
				`Special symbol, that is located on the key ${symbol} on the keyboard is "^".`
			);
			break;
		case 7:
			alert(
				`Special symbol, that is located on the key ${symbol} on the keyboard is "&".`
			);
			console.log(
				`Special symbol, that is located on the key ${symbol} on the keyboard is "&".`
			);
			break;
		case 8:
			alert(
				`Special symbol, that is located on the key ${symbol} on the keyboard is "*".`
			);
			console.log(
				`Special symbol, that is located on the key ${symbol} on the keyboard is "*".`
			);
			break;
		case 9:
			alert(
				`Special symbol, that is located on the key ${symbol} on the keyboard is "(".`
			);
			console.log(
				`Special symbol, that is located on the key ${symbol} on the keyboard is "(".`
			);
			break;
		case 0:
			alert(
				`Special symbol, that is located on the key ${symbol} on the keyboard is ")".`
			);
			console.log(
				`Special symbol, that is located on the key ${symbol} on the keyboard is ")".`
			);
			break;
		default:
			alert(
				`You should have entered any digit between 0 and 9. But you made a mistake. How is this even possible?`
			);
			console.log(
				`You should have entered any digit between 0 and 9. But you made a mistake. How is this even possible?`
			);
			break;
	}
	let nextSymbol = confirm('Do you want to try again?');
	if (nextSymbol == false) {
		break;
	}
}

//мінімум 3
//Sum of all numbers
alert('I will magically sum all the numbers between the two you enter below!');
console.log(
	'I will magically sum all the numbers between the two you enter below!'
);

function sumOfNumbers(small, big) {
	let resultOfSum = 0;
	while (small <= big) {
		resultOfSum = resultOfSum + small++;
	}
	return resultOfSum;
}

let firstNumberForSum;
let secondNumberForSum;
let sumOfAllNumbers;

while (true) {
	while (true) {
		firstNumberForSum = prompt(
			'For that awesome trick i need you to enter any first number you want.',
			0
		);
		if (isNaN(firstNumberForSum)) {
			alert(
				`Hey, is "${firstNumberForSum}" a number? Try again. No mistakes this time...`
			);
			console.log(
				`Hey, is "${firstNumberForSum}" a number? Try again. No mistakes this time...`
			);
		} else {
			break;
		}
	}
	while (true) {
		secondNumberForSum = prompt(
			'For that awesome trick i need you to enter any second number you want.',
			0
		);
		if (isNaN(secondNumberForSum)) {
			alert(
				`Hey, is "${secondNumberForSum}" a number? Try again. No mistakes this time...`
			);
			console.log(
				`Hey, is "${secondNumberForSum}" a number? Try again. No mistakes this time...`
			);
		} else {
			break;
		}
	}

	firstNumberForSum = +firstNumberForSum;
	secondNumberForSum = +secondNumberForSum;

	if (firstNumberForSum > secondNumberForSum) {
		sumOfAllNumbers = sumOfNumbers(secondNumberForSum, firstNumberForSum);
	} else if (firstNumberForSum < secondNumberForSum) {
		sumOfAllNumbers = sumOfNumbers(firstNumberForSum, secondNumberForSum);
	} else {
		sumOfAllNumbers = firstNumberForSum + secondNumberForSum;
	}

	alert(
		`Magic already happened! Two numbers which were inputted by you was ${firstNumberForSum} and ${secondNumberForSum}! Sum of all numbers between this two (these two obviously was included too) is... ${sumOfAllNumbers}!`
	);
	console.log(
		`Magic already happened! Two numbers which were inputted by you was ${firstNumberForSum} and ${secondNumberForSum}! Sum of all numbers between this two (these two obviously was included too) is... ${sumOfAllNumbers}!`
	);

	let nextSum = confirm('Do you want to be amazed again?');
	if (nextSum == false) {
		break;
	}
}

//мінімум 4
//Найбільший спільний дільник,
alert(`Тепер будему шукати найбільший спільний дільник двох довільних чисел.`);
console.log(
	`Тепер будему шукати найбільший спільний дільник двох довільних чисел.`
);

let firstNumberForNumerator;
let secondNumberForNumerator;
let largestDenominator;

function denominatorFinder(small, big) {
	let denominator = 0;
	let i = small;
	for (; i >= 0; ) {
		if (small % i == 0 && big % i == 0) {
			denominator = i;
			break;
		}
		i--;
	}
	return denominator;
}

while (true) {
	while (true) {
		firstNumberForNumerator = prompt(
			'Прошу тебе ввести будь-яке перше число',
			0
		);
		if (isNaN(firstNumberForNumerator)) {
			alert(
				`Ну таке. Оте усьо "${firstNumberForNumerator}" не є числом. Нумо спробуй ще раз!`
			);
			console.log(
				`Ну таке. Оте усьо "${firstNumberForNumerator}" не є числом. Нумо спробуй ще раз!`
			);
		} else {
			break;
		}
	}
	while (true) {
		secondNumberForNumerator = prompt(
			'Прошу тебе ввести будь-яке друге число',
			0
		);
		if (isNaN(secondNumberForNumerator)) {
			alert(
				`Ну таке. Оте усьо "${secondNumberForNumerator}" не є числом. Нумо спробуй ще раз!`
			);
			console.log(
				`Ну таке. Оте усьо "${secondNumberForNumerator}" не є числом. Нумо спробуй ще раз!`
			);
		} else {
			break;
		}
	}

	firstNumberForNumerator = +firstNumberForNumerator;
	secondNumberForNumerator = +secondNumberForNumerator;

	if (firstNumberForNumerator > secondNumberForNumerator) {
		largestDenominator = denominatorFinder(
			secondNumberForNumerator,
			firstNumberForNumerator
		);
	} else if (firstNumberForNumerator < secondNumberForNumerator) {
		largestDenominator = denominatorFinder(
			firstNumberForNumerator,
			secondNumberForNumerator
		);
	} else {
		largestDenominator = firstNumberForNumerator;
	}

	alert(
		`У двох чисел ${firstNumberForNumerator} та ${secondNumberForNumerator} найбільшим спільним дільником є ${largestDenominator}!`
	);
	console.log(
		`У двох чисел ${firstNumberForNumerator} та ${secondNumberForNumerator} найбільшим спільним дільником є ${largestDenominator}!`
	);

	let nextLargestDenominator = confirm('Спробуєм інші два числа?');
	if (nextLargestDenominator == false) {
		break;
	}
}

//мінімум 5
//Пошук дільників числі
let anyNumberForNumerator;

while (true) {
	while (true) {
		anyNumberForNumerator = prompt(
			'Тепер будему шукати всі дільники числа. Прошу тебе ввести будь-яке число',
			0
		);
		if (isNaN(anyNumberForNumerator)) {
			alert(
				`Знову ти за своє? "${anyNumberForNumerator}" не є числом. Може всеж таки спробуєш ввести щось коректне?`
			);
			console.log(
				`Знову ти за своє? "${anyNumberForNumerator}" не є числом. Може всеж таки спробуєш ввести щось коректне?`
			);
		} else {
			break;
		}
	}

	let allDenominators = '';
	anyNumberForNumerator = +anyNumberForNumerator;
	let denominatorCounter = anyNumberForNumerator;

	for (; denominatorCounter >= 0; ) {
		if (anyNumberForNumerator % denominatorCounter == 0) {
			allDenominators = allDenominators + denominatorCounter + ' ';
		}
		denominatorCounter--;
	}

	alert(
		`У числа ${anyNumberForNumerator} дільниками є числа ${allDenominators}!`
	);
	console.log(
		`У числа ${anyNumberForNumerator} дільниками є числа ${allDenominators}!`
	);

	let nextNumberForNumerator = confirm('Спробуєм інше число?');
	if (nextNumberForNumerator == false) {
		break;
	}
}

//норма 1
//Чи є число паліндромом?
while (true) {
	let numberForPalindrome;
	let reversNumberForPalindrome = '';
	while (true) {
		numberForPalindrome = prompt(
			'Давай дізнаємося чи буде введене тобою число паліндромом.',
			0
		);
		if (isNaN(numberForPalindrome)) {
			alert(
				`Знову ти за своє? "${numberForPalindrome}" не є числом. Може всеж таки спробуєш ввести щось коректне?`
			);
			console.log(
				`Знову ти за своє? "${numberForPalindrome}" не є числом. Може всеж таки спробуєш ввести щось коректне?`
			);
		} else {
			break;
		}
	}

	numberForPalindrome = +numberForPalindrome;
	let palindromeCounter = numberForPalindrome;
	let palindromeDigit;
	while (palindromeCounter) {
		palindromeDigit = palindromeCounter % 10;
		reversNumberForPalindrome = reversNumberForPalindrome + palindromeDigit;
		palindromeCounter = Math.floor(palindromeCounter / 10);
	}

	reversNumberForPalindrome = +reversNumberForPalindrome;
	if (numberForPalindrome == reversNumberForPalindrome) {
		alert(`Нічого собі! Число ${numberForPalindrome} тики є паліндромом!`);
		console.log(
			`Нічого собі! Число ${numberForPalindrome} тики є паліндромом!`
		);
	} else {
		alert(`На жаль, число ${numberForPalindrome} не є паліндромом.`);
		console.log(`На жаль, число ${numberForPalindrome} не є паліндромом.`);
	}

	let nextPalindrome = confirm('Спробуєм інше число?');
	if (nextPalindrome == false) {
		break;
	}
}

//норма 2
//Розрахунок суми знижки
while (true) {
	let sumToPay;
	while (true) {
		sumToPay = prompt(
			'Давай перевіремо наявність знижок на твою покупку. Введи суму покупки',
			0
		);
		if (isNaN(sumToPay)) {
			alert(
				`Знижка може бути надана лише за умови оплати товару в грошовій формі!`
			);
			console.log(
				`Знижка може бути надана лише за умови оплати товару в грошовій формі!`
			);
		} else {
			break;
		}
	}

	sumToPay = +sumToPay;
	let discount;
	let sumToPayWithDiscount;

	if (sumToPay < 200) {
		alert(
			`Сума покупки менша за 200 гривень. На вашу покупку знижка не може бути надана!`
		);
		console.log(
			`Сума покупки менша за 200 гривень. На вашу покупку знижка не може бути надана!`
		);
	} else if (sumToPay < 300) {
		discount = (sumToPay * 3) / 100;
		sumToPayWithDiscount = sumToPay - discount;
		alert(
			`Сума покупки становить ${sumToPay} гривень. Можемо запропонувати знижку в 3%. Сума до сплати буде ${sumToPayWithDiscount} гривень з урахуванням знижки ${discount} гривень.`
		);
		console.log(
			`Сума покупки становить ${sumToPay} гривень. Можемо запропонувати знижку в 3%. Сума до сплати буде ${sumToPayWithDiscount} гривень з урахуванням знижки ${discount} гривень.`
		);
	} else if (sumToPay < 500) {
		discount = (sumToPay * 5) / 100;
		sumToPayWithDiscount = sumToPay - discount;
		alert(
			`Сума покупки становить ${sumToPay} гривень. Можемо запропонувати знижку в 5%. Сума до сплати буде ${sumToPayWithDiscount} гривень з урахуванням знижки ${discount} гривень.`
		);
		console.log(
			`Сума покупки становить ${sumToPay} гривень. Можемо запропонувати знижку в 5%. Сума до сплати буде ${sumToPayWithDiscount} гривень з урахуванням знижки ${discount} гривень.`
		);
	} else {
		discount = (sumToPay * 7) / 100;
		sumToPayWithDiscount = sumToPay - discount;
		alert(
			`Сума покупки становить ${sumToPay} гривень. Можемо запропонувати знижку в 7%. Сума до сплати буде ${sumToPayWithDiscount} гривень з урахуванням знижки ${discount} гривень.`
		);
		console.log(
			`Сума покупки становить ${sumToPay} гривень. Можемо запропонувати знижку в 7%. Сума до сплати буде ${sumToPayWithDiscount} гривень з урахуванням знижки ${discount} гривень.`
		);
	}

	let nextDiscount = confirm('Бажаєте купити ще щось?');
	if (nextDiscount == false) {
		break;
	}
}

//норма 3
//Статистика по введених числах

while (true) {
	let allOfNumbers = '';
	let amountOfNumbers;
	let numberCounter;
	while (true) {
		amountOfNumbers = prompt(
			'Будемо рахувати статистику по введених числах. Скільки чисел ти хочеш ввести? (їх реально треба буде ввести!)',
			0
		);
		if (isNaN(amountOfNumbers)) {
			alert(`Це так не працює. Тут треба ввести число!`);
			console.log(`Це так не працює. Тут треба ввести число!`);
		} else {
			break;
		}
	}

	amountOfNumbers = +amountOfNumbers;

	let positiveNumbersStatistic = 0;
	let negativeNumbersStatistic = 0;
	let zeroNumbersStatistic = 0;
	let evenNumbersStatistic = 0;
	let oddNumbersStatistic = 0;
	let notNumbersStatistic = 0;
	let positiveNumbersStatisticAll = '';
	let negativeNumbersStatisticAll = '';
	let evenNumbersStatisticAll = '';
	let oddNumbersStatisticAll = '';
	let notNumbersStatisticAll = '';

	if (amountOfNumbers == 0) {
		alert('То й таке. Можна було не починати...');
	} else {
		alert('Чудово, почнімо?');

		for (i = amountOfNumbers; i > 0; ) {
			numberCounter = prompt('Ввведи число:', 0);
			allOfNumbers = allOfNumbers + numberCounter + ' ';

			if (isNaN(numberCounter)) {
				notNumbersStatistic++;
				notNumbersStatisticAll =
					notNumbersStatisticAll + numberCounter + ' ';
			} else if (numberCounter % 2 == 0 && numberCounter != 0) {
				evenNumbersStatistic++;
				evenNumbersStatisticAll =
					evenNumbersStatisticAll + numberCounter + ' ';
			} else if (numberCounter != 0) {
				oddNumbersStatistic++;
				oddNumbersStatisticAll =
					oddNumbersStatisticAll + numberCounter + ' ';
			}

			if (numberCounter == 0) {
				zeroNumbersStatistic++;
			}

			if (numberCounter > 0) {
				positiveNumbersStatistic++;
				positiveNumbersStatisticAll =
					positiveNumbersStatisticAll + numberCounter + ' ';
			}

			if (numberCounter < 0) {
				negativeNumbersStatistic++;
				negativeNumbersStatisticAll =
					negativeNumbersStatisticAll + numberCounter + ' ';
			}

			i--;
		}

		alert('Ми закінчили. Статистика доступна в консолі');
		console.log(
			`Було введено ${amountOfNumbers} чисел, а саме: ${allOfNumbers}. Серед них:`
		);

		if (notNumbersStatistic == 0) {
			console.log(`Всі числа.`);
		} else {
			console.log(
				`Не є числами: ${notNumbersStatistic}, а саме: ${notNumbersStatisticAll}.`
			);
		}

		if (zeroNumbersStatistic == 0) {
			console.log(`Нулі не вводилися`);
		} else {
			console.log(`Введено нулів: ${zeroNumbersStatistic}.`);
		}

		if (positiveNumbersStatistic == 0) {
			console.log(`Додатніх чисел не вводилося.`);
		} else {
			console.log(
				`Додатніх чисел: ${positiveNumbersStatistic}, а саме: ${positiveNumbersStatisticAll}.`
			);
		}

		if (negativeNumbersStatistic == 0) {
			console.log(`Від'ємних чисел не вводилося.`);
		} else {
			console.log(
				`Від'ємних чисел: ${negativeNumbersStatistic}, а саме: ${negativeNumbersStatisticAll}.`
			);
		}

		if (evenNumbersStatistic == 0) {
			console.log(`Парних чисел не вводилося`);
		} else {
			console.log(
				`Парних чисел: ${evenNumbersStatistic}, а саме: ${evenNumbersStatisticAll}.`
			);
		}

		if (oddNumbersStatistic == 0) {
			console.log(`Не парних чисел не вводилося.`);
		} else {
			console.log(
				`Не парних чисел: ${oddNumbersStatistic}, а саме: ${oddNumbersStatisticAll}.`
			);
		}
	}

	let nextAllOfNumbers = confirm('Можемо спробувати ще один набір чисел.');
	if (nextAllOfNumbers == false) {
		break;
	}
}

//норма 4
//Відображення днів тижня
alert(`Зараз будуть відображатися дні тижня по порядку.`);
while (true) {
	let weekDay;
	while (true) {
		weekDay = prompt(
			"З якого дня тижня ти бажаєш почати? Для понеділка введи 1 , для вівторка введи 2, для середи введи 3, для четверга введи 4, для п'ятниці введи 5, для суботи введи 6, для неділі введи 7.",
			0
		);
		if (isNaN(weekDay)) {
			alert(`Добре. Нехай буде Понеділок...`);
			console.log(`Добре. Нехай буде Понеділок...`);
			weekDay = 1;
			break;
		} else if (weekDay > 7 || weekDay == 0) {
			alert(`Добре. Нехай буде Понеділок...`);
			console.log(`Добре. Нехай буде Понеділок...`);
			weekDay = 1;
			break;
		} else {
			weekDay = +weekDay;
			switch (weekDay) {
				case 1:
					alert(`Добре. Нехай буде Понеділок...`);
					console.log(`Добре. Нехай буде Понеділок...`);
					break;
				case 2:
					alert(`Добре. Нехай буде Вівторок...`);
					console.log(`Добре. Нехай буде Вівторок...`);
					break;
				case 3:
					alert(`Добре. Нехай буде ереда...`);
					console.log(`Добре. Нехай буде Середа...`);
					break;
				case 4:
					alert(`Добре. Нехай буде Червер...`);
					console.log(`Добре. Нехай буде Четвер...`);
					break;
				case 5:
					alert(`Добре. Нехай буде П'ятниця...`);
					console.log(`Добре. Нехай буде П'ятниця...`);
					break;
				case 6:
					alert(`Добре. Нехай буде Субота...`);
					console.log(`Добре. Нехай буде Субота...`);
					break;
				case 7:
					alert(`Добре. Нехай буде Неділя...`);
					console.log(`Добре. Нехай буде Неділя...`);
					break;
			}
			break;
		}
	}

	let nextDay = true;
	while (nextDay) {
		nextDay = confirm('Хочеш побачити наступний день?');

		if (nextDay == false) {
			break;
		}

		if (weekDay == 7) {
			weekDay = 1;
		} else {
			weekDay++;
		}

		switch (weekDay) {
			case 1:
				alert(`Далі Понеділок...`);
				console.log(`Далі Понеділок...`);
				break;
			case 2:
				alert(`Далі Вівторок...`);
				console.log(`Далі Вівторок...`);
				break;
			case 3:
				alert(`Далі Середа...`);
				console.log(`Далі Середа...`);
				break;
			case 4:
				alert(`Далі Червер...`);
				console.log(`Далі Четвер...`);
				break;
			case 5:
				alert(`Далі П'ятниця...`);
				console.log(`Далі П'ятниця...`);
				break;
			case 6:
				alert(`Далі Субота...`);
				console.log(`Далі Субота...`);
				break;
			case 7:
				alert(`Далі Неділя...`);
				console.log(`Далі Неділя...`);
				break;
		}
	}

	if (nextDay == false) {
		break;
	}
}

//максимум 1
//Бінарний пошук
alert(
	'Давай пограємо з тобою в одну гру. Я буду намагатися вгадати число, яке ти загадаєш.'
);
while (true) {
	let firstNumberArea, secondNumberArea, minNumberArea, maxNumberArea;

	while (true) {
		firstNumberArea = prompt('Встанови нижню межу пошуку твого числа', 0);
		if (isNaN(firstNumberArea)) {
			alert(`Добре. Нижньою межею будемо вважати "0"`);
			console.log(`Добре. Нижньою межею будемо вважати "0"`);
			minNumberArea = 0;
			break;
		} else {
			minNumberArea = +firstNumberArea;
			break;
		}
	}

	while (true) {
		secondNumberArea = prompt('Встанови верхню межу пошуку твого числа', 0);
		if (isNaN(secondNumberArea)) {
			alert(`Добре. Верхньою межею будемо вважати "100"`);
			console.log(`Добре. Верхньою межею будемо вважати "100"`);
			maxNumberArea = 100;
			break;
		} else {
			maxNumberArea = +secondNumberArea;
			break;
		}
	}

	if (firstNumberArea > secondNumberArea) {
		minNumberArea = +secondNumberArea;
		maxNumberArea = +firstNumberArea;
	}

	alert(
		`Тепер загадай число в діапазові від ${minNumberArea} до ${maxNumberArea}`
	);

	while (true) {
		let playGamecheck = confirm('Все гаразд? Можемо починати?');
		if (playGamecheck == false) {
			alert('Добре, дам тобі ще хвилинку...');
		} else {
			break;
		}
	}

	let guesNumber;
	let yourAnswer;

	while (minNumberArea <= maxNumberArea) {
		if (maxNumberArea == minNumberArea) {
			guesNumber = minNumberArea;
		} else if (maxNumberArea - minNumberArea == 2) {
			guesNumber = minNumberArea + 1;
			break;
		} else {
			guesNumber = Math.floor((minNumberArea + maxNumberArea) / 2);
			yourAnswer = confirm(`Твоє число менше за ${guesNumber}?`);
			if (yourAnswer == true) {
				maxNumberArea = guesNumber;
			} else {
				minNumberArea = guesNumber;
			}
		}
	}

	alert(`Ага! Я знаю твоє число! Це ${guesNumber}!`);
	console.log(`Ага! Я знаю твоэ число! Це ${guesNumber}!`);

	let nextRundomNumber = confirm('Хочеш зіграти ще один раз?');
	if (nextRundomNumber == false) {
		break;
	}
}

//максимум 2
//Таблиця множення
alert(
	'Тепер на екран буде виведено таблицю множення. Будуть послідовно виведені результати множення чисел від 1 до 10 на числа івд 1 до 10. Загалом буде виведено 100 результатів математичних дій.'
);
alert('Тому вмощуйся зручніше, завари чайочок та запасися бутербродиками...');

while (true) {
	let playGamecheck = confirm('Все готово? Тоді можемо приступати?..');
	if (playGamecheck == false) {
		alert('Чайочок ще кипить? Дам тобі ще хвилинку...');
	} else {
		break;
	}
}

alert('Результатом множення 1 на 1 буде 1');
alert('Результатом множення 1 на 2 буде 2');
alert('Результатом множення 1 на 3 буде 3');
alert('Результатом множення 1 на 4 буде 4');
alert(
	'Результатом множення ... Ага! Невже ти й справді думав що я змушу тебе то всьо проклацати?.. Всі результати множення в консолі!'
);

let firstOperand = 1,
	secondOperand;

while (firstOperand <= 10) {
	secondOperand = 1;
	while (secondOperand <= 10) {
		console.log(
			`Результатом множення ${firstOperand} на ${secondOperand} буде `,
			firstOperand * secondOperand
		);
		secondOperand++;
	}
	firstOperand++;
}

//максимум 3
//Виведення послыдовносты дат
alert(
	`Пам'ятаєш, ми послідовно відображали дні тижня? Зараз спробуємо це зробити з датами.`
);
let curentData = new Date();
let inputUserData;
let yearData, monthData, dayData;
while (true) {
	alert('Давай встановимо бажану дату початку відліку');
	while (true) {
		yearData = prompt(
			'З якого року почнемо? (при не корректному вводі буде задано поточний рік)'
		);
		if (isNaN(yearData) || yearData <= 0) {
			yearData = curentData.getFullYear();
			alert(
				`Рік введено некоректно. Встановлено ${yearData} (поточний рік) роком початку.`
			);
			console.log(
				`Рік введено некоректно. Встановлено ${yearData} (поточний рік) роком початку.`
			);
			break;
		} else {
			alert(`Встановлено ${yearData} роком початку.`);
			console.log(`Встановлено ${yearData} роком початку.`);
			break;
		}
	}
	while (true) {
		let monthDataInput = prompt(
			'З якого місяця почнемо? (при не корректному вводі буде задано поточний місяць)'
		);
		if (
			isNaN(monthDataInput) ||
			monthDataInput < 1 ||
			monthDataInput > 12
		) {
			monthData = curentData.getMonth();
			monthDataInput = monthData + 1;
			alert(
				`Місяць введено некоректно. Встановлено ${monthDataInput} (поточний місяць) місяцем початку.`
			);
			console.log(
				`Місяць введено некоректно. Встановлено ${monthDataInput} (поточний місяць) місяцем початку.`
			);
			break;
		} else {
			monthData = monthDataInput;
			alert(`Встановлено ${monthDataInput} місяцем початку.`);
			console.log(`Встановлено ${monthDataInput} місяцем початку.`);
			break;
		}
	}
	while (true) {
		dayData = prompt(
			'З якого числа почнемо? (при не корректному вводі буде задано поточне число)'
		);
		if (isNaN(dayData) || dayData < 1 || dayData > 31) {
			dayData = curentData.getDate();
			alert(
				`Число введено некоректно. Встановлено ${dayData} (поточне число) числом початку.`
			);
			console.log(
				`Число введено некоректно. Встановлено ${dayData} (поточне число) числом початку.`
			);
			break;
		} else {
			alert(`Встановлено ${dayData} числом початку.`);
			console.log(`Встановлено ${dayData} числом початку.`);
			break;
		}
	}

	inputUserData = yearData + ', ' + monthData + ', ' + dayData;
	//console.log(inputUserData);
	curentData = new Date(inputUserData);

	alert(`Введена тобою дата: ${curentData}.`);
	console.log(`Введена тобою дата: ${curentData}.`);

	while (true) {
		let nextData = confirm(
			'Хочеш побачити наступну дату? (Дату буде відображено в консолі)'
		);
		if (nextData == false) {
			break;
		} else {
			curentData.setDate(curentData.getDate() + 1);
			console.log(curentData);
		}
	}

	let nextDataAgain = confirm('Хочеш встановити якусь іншу дату?');
	if (nextDataAgain == false) {
		break;
	}
}

alert('Це все. Далі буде 8)');
