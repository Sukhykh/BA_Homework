alert('Домашня робота на тему "Об’єкти в JavaScriptS"');
/* Мінімум
Створи об'єкт, що описує автомобіль 
(виробник, модель, рік випуску, середня швидкість, 
обсяг паливного баку, середня витрата палива на 100 км., водії), 
і наступні методи для роботи з цим об'єктом:
Метод, який виводить на екран інформацію про автомобіль.
Додавання ім’я водія у список
Перевірка водія на наявність його ім’я у списку
Підрахунок необхідного часу та кількості палива для подолання 
переданої відстані з середньою швидкістю. Враховуй, що через 
кожні 4 години дороги водієві необхідно робити перерву на 1 годину. 
*/
alert('Робота з автомобілем');

let fastCar = {
	company: 'Porsche',
	model: 'Panamera Turbo S Executive',
	year: '2022 рік випуску',
	maxSpeed: 315,
	fuel: 90,
	fuelUse: 12,
	drivers: ['Agent 007', 'O.Arestovych', 'raccoon "Rocket"'],

	driversArray(driverArgument) {
		let driverNumber = 0,
			temporaryDriver = '';
		switch (driverArgument) {
			case 1:
				console.log(
					`Для ${this.model} наразі доступні ${this.drivers} в якості водіїв.`
				);
				break;
			case 2:
				while (true) {
					driverNumber = prompt(
						`Зараз доступні ${this.drivers} в якості водіїв. Якого водія будемо замінювати (введи його порядковий номер починаючи з 1)?`
					);
					if (isNaN(driverNumber)) {
						alert(
							`Порядковий номер має бути числовим значенням більшим за 0!`
						);
					} else if (driverNumber > this.drivers.length) {
						alert(`Такий водій у списку відсутній!`);
					} else {
						break;
					}
				}
				driverNumber = driverNumber - 1;
				temporaryDriver = this.drivers[driverNumber];
				this.drivers[driverNumber] = prompt(
					`Введи імя нового водія замість ${this.drivers[driverNumber]}:`
				);
				console.log(
					`Список водіїв змінено. Замість ${temporaryDriver} до списку внесено ${this.drivers[driverNumber]}.`
				);
				console.log(
					`Для ${this.model} наразі доступні ${this.drivers} в якості водіїв.`
				);
				break;
			case 3:
				temporaryDriver = prompt(
					'Якого водія необхідно додати до списку?'
				);
				this.drivers.push(`${temporaryDriver}`);
				console.log(
					`Список водіїв змінено. До списку додано ${temporaryDriver}.`
				);
				console.log(
					`Для ${this.model} наразі доступні ${this.drivers} в якості водіїв.`
				);
				break;
			case 4:
				while (true) {
					driverNumber = prompt(
						`Зараз доступні ${this.drivers} в якості водіїв. Якого водія необхідно викреслити зі списку (введи його порядковий номер починаючи з 1)?`
					);
					if (isNaN(driverNumber)) {
						alert(
							`Порядковий номер має бути числовим значенням більшим за 0!`
						);
					} else if (driverNumber > this.drivers.length) {
						alert(`Такий водій у списку відсутній!`);
					} else {
						break;
					}
				}
				driverNumber = driverNumber - 1;
				console.log(
					`Список водіїв змінено. Зі списку видалено ${this.drivers[driverNumber]}.`
				);
				this.drivers.splice(driverNumber, 1);
				console.log(
					`Для ${this.model} наразі доступні ${this.drivers} в якості водіїв.`
				);
				break;
			case 5:
				let finder = false;
				temporaryDriver = prompt(
					`Кого саме будемо шукати серед водіїв ${this.model}?`
				);
				this.drivers.forEach(function (item) {
					console.log(item);
					console.log(temporaryDriver);
					if (temporaryDriver == item) {
						finder = true;
						console.log(`Такий водій доступний для цієї машини.`);
					}
				});
				if (finder == false) {
					console.log(`Такий водій не доступний для цієї машини.`);
				}
				break;
		}
	},

	carInfo() {
		alert('Інформіція про автомобіль буде доступна в консолі');
		console.log(fastCar);
	},

	needTime(distance) {
		while (true) {
			speed = prompt(
				`З якою швидкістю будемо їхати (максимальна швидкість становить ${this.maxSpeed} км/год)?`
			);
			if (isNaN(speed)) {
				alert(`Швидкість має бути числовим значенням!`);
			} else if (speed > this.maxSpeed) {
				alert(`Занадто швидко для цього авто!`);
			} else if (speed > 90) {
				let userSpeed = confirm('Любиш порушувати правила?');
				if (userSpeed == true) {
					console.log(`Швидкість руху - ${speed} км/год`);
					alert('Тоді в дорогу!');
					break;
				}
			} else {
				console.log(`Швидкість руху - ${speed} км/год`);
				alert('Тоді в дорогу!');
				speed = +speed;
				break;
			}
		}

		alert('Інформіція буде доступна в консолі');

		let totalTime = 0;
		let sppedCounter = 0;
		let timeIterator = 0;

		for (sppedCounter = 0; sppedCounter < distance; ) {
			sppedCounter = sppedCounter + +speed;
			totalTime = totalTime + 1;
			timeIterator = timeIterator + 1;
			if (timeIterator == 3) {
				timeIterator = 0;
				totalTime = totalTime + 1;
			}
		}

		if (totalTime > distance / speed) {
			return console.log(
				`На дорогу знадобиться трішки менше за повних ${totalTime} години.`
			);
		} else {
			return console.log(
				`На дорогу знадобиться повних ${totalTime} години.`
			);
		}
	},

	needFuel: function (distance) {
		return console.log(
			`Для подорожі знадобиться ${
				(distance / 100) * this.fuelUse
			} літрів пального. Це ${(
				((distance / 100) * this.fuelUse) /
				this.fuel
			).toFixed(1)} бака машини`
		);
	},
};

let userDistance;
let speed;
let driversVar;

while (true) {
	let carInfoVar = prompt(
		`Тобі для подорожі доступна непогана машина. Що хочеш про неї дізнатися?
            Загальна інформація - введи 1
            Інформація про заплановану подорож - введи 2
            Інформація про водіїв - введи 3`
	);
	if (isNaN(carInfoVar) || carInfoVar <= 0 || carInfoVar > 3) {
		alert(`Ти маєш ввести або 1 або 2 або 3!`);
	} else if (carInfoVar == 1) {
		fastCar.carInfo();
	} else if (carInfoVar == 2) {
		while (true) {
			userDistance = prompt('Яку відстань необхідно подолати?');
			if (isNaN(userDistance) || userDistance < 0) {
				alert(`Відстань має бути числовим значенням більшим за 0!`);
			} else {
				userDistance = +userDistance;
				break;
			}
		}
		fastCar.needTime(userDistance);
		fastCar.needFuel(userDistance);
	} else if (carInfoVar == 3) {
		while (true) {
			while (true) {
				driversVar = prompt(
					`Наразі для цієї машини доступні ${fastCar.drivers.length} водії. Що будему з ними робити?
                        Для перегляду інформації про водіїв - введи 1
                        Для заміни існуючого водія - введи 2
                        Для додавання водія - введи 3,
                        Для видалення водія - введи 4,
                        Перевірка на наявність водія у списку - введи 5`
				);
				if (isNaN(driversVar) || driversVar <= 0 || driversVar > 5) {
					alert(`Ти маєш ввести або 1 або 2 або 3 або 4 або 5!`);
				} else {
					break;
				}
			}

			alert('Інформіція буде доступна в консолі');
			driversVar = +driversVar;
			fastCar.driversArray(driversVar);

			let driverAction = confirm(`Ми закінчили з водіями?`);
			if (driverAction == true) {
				break;
			}
		}
	} else {
		break;
	}

	let carWork = confirm(`Хочеш ще щось дізнатися?`);
	if (carWork == false) {
		break;
	}
}

/* Норма
Створити об'єкт, що описує час (години, хвилини, секунди), 
і такі функції для роботи з цим об'єктом:
Для виведення часу на екран.
Зміни часу на передану кількість секунд.
Зміни часу на передану кількість хвилин.
Зміни часу на передану кількість годин.
Враховуйте, що в останніх 3-х функціях, при зміні однієї 
частини часу, може змінитися і інша. Наприклад: якщо до 
часу «20:59:45» додати 30 секунд, то повинно вийти «21:00:15», 
а не «20:59:75». Також потрібно передбачити можливість того 
що користувач може передати 150 секунд, або 75 хвилин.
*/

alert('Робота з годинником');
let setHours, setMinutes, setSeconds;
let addHours, addMinutes, addSeconds;

while (true) {
	setHours = prompt(
		`Для встановлення початкового часу зазнач кількість годин.`
	);
	if (isNaN(setHours) || setHours < 0 || setHours > 24) {
		alert(`Це має бути числове значення в межах 24 години!`);
	} else if (setHours == 24) {
		setHours = Number(0);
		break;
	} else {
		setHours = +setHours;
		break;
	}
}
while (true) {
	setMinutes = prompt(
		`Для встановлення початкового часу зазнач кількість хвилин.`
	);
	if (isNaN(setMinutes) || setMinutes < 0 || setMinutes > 60) {
		alert(`Це має бути числове значення в межах 60 хвилин!`);
	} else if (setMinutes == 60) {
		setMinutes = Number(0);
		break;
	} else {
		setMinutes = +setMinutes;
		break;
	}
}
while (true) {
	setSeconds = prompt(
		`Для встановлення початкового часу зазнач кількість секунд.`
	);
	if (isNaN(setSeconds) || setSeconds < 0 || setSeconds > 60) {
		alert(`Це має бути числове значення в межах 60 секунд!`);
	} else if (setSeconds == 60) {
		setSeconds = Number(0);
		break;
	} else {
		setSeconds = +setSeconds;
		break;
	}
}

let time = {
	hours: setHours,
	minutes: setMinutes,
	seconds: setSeconds,

	showVar: function (value) {
		if (value < 9) {
			return `0${value}`;
		} else {
			return `${value}`;
		}
	},

	addingTime(seconds, minutes, hours) {
		let temporarySeconds = 0,
			temporaryMinutes = 0,
			temporaryHours = 0;
		if (seconds < 0) {
			seconds = -seconds;
			temporarySeconds = seconds - this.seconds;
			if (temporarySeconds < 60) {
				if (temporarySeconds < 0) {
					temporarySeconds = -temporarySeconds;
					temporarySeconds = 60 - temporarySeconds;
				}
				this.seconds = 60 - temporarySeconds;
				time.addingTime(0, -Math.floor(seconds / 60), 0);
			} else {
				this.seconds = temporarySeconds % 60;

				time.addingTime(0, -Math.floor(seconds / 60), 0);
			}
		} else if (seconds > 0) {
			temporarySeconds = this.seconds + seconds;
			if (temporarySeconds < 60) {
				this.seconds = temporarySeconds;
			} else {
				this.seconds = temporarySeconds % 60;
				time.addingTime(0, Math.floor(seconds / 60), 0);
			}
		}
		if (minutes < 0) {
			minutes = -minutes;
			temporaryMinutes = minutes - this.minutes;
			if (temporaryMinutes < 60) {
				if (temporaryMinutes < 0) {
					temporaryMinutes = -temporaryMinutes;
					temporaryMinutes = 60 - temporaryMinutes;
				}
				this.minutes = 60 - temporaryMinutes;
				time.addingTime(0, -Math.floor(minutes / 60), 0);
			} else {
				this.minutes = temporaryMinutes % 60;
				time.addingTime(0, -Math.floor(minutes / 60), 0);
			}
		} else if (minutes > 0) {
			temporaryMinutes = this.minutes + minutes;
			if (temporaryMinutes < 60) {
				this.minutes = temporaryMinutes;
			} else {
				this.minutes = temporaryMinutes % 60;
				time.addingTime(0, 0, Math.floor(minutes / 60));
			}
		}
		if (hours < 0) {
			temporaryHours = this.hours + hours;
			if (temporaryHours >= 0) {
				this.hours = temporaryHours;
			} else {
				this.hours = -temporaryHours % 24;
			}
		} else if (hours > 0) {
			temporaryHours = this.hours + hours;
			if (temporaryHours < 24) {
				this.hours = temporaryHours;
			} else {
				this.hours = temporaryHours % 60;
			}
		}
	},
};

console.log(
	`Встановлено наступний початковий час: ${time.showVar(
		time.hours
	)} годин ${time.showVar(time.minutes)} хвилин ${time.showVar(
		time.seconds
	)} секунд`
);

while (true) {
	let timeSelector;
	while (true) {
		timeSelector = prompt(`
        Що будемо змінювати? 
        Для годин - введи 1
        Для хвилин - введи 2
        Для секунд - введи 3`);
		if (isNaN(timeSelector) || timeSelector <= 0 || timeSelector > 3) {
			alert(`Ти маєш ввести або 1 або 2 або 3!`);
		} else {
			break;
		}
	}

	timeSelector = +timeSelector;

	switch (timeSelector) {
		case 1:
			while (true) {
				addHours = prompt(
					`На скільки годин бажаєш перевести годинник?`
				);
				if (isNaN(addHours)) {
					alert(`Тільки цілі числа!`);
				} else {
					break;
				}
			}
			addHours = +addHours;
			time.addingTime(0, 0, addHours);
			console.log(
				`Час змінено на: ${time.showVar(
					time.hours
				)} годин ${time.showVar(time.minutes)} хвилин ${time.showVar(
					time.seconds
				)} секунд`
			);
			break;
		case 2:
			while (true) {
				addMinutes = prompt(
					`На скільки хвилин бажаєш перевести годинник?`
				);
				if (isNaN(addMinutes)) {
					alert(`Тільки цілі числа!`);
				} else {
					break;
				}
			}
			addMinutes = +addMinutes;
			time.addingTime(0, addMinutes, 0);
			console.log(
				`Час змінено на: ${time.showVar(
					time.hours
				)} годин ${time.showVar(time.minutes)} хвилин ${time.showVar(
					time.seconds
				)} секунд`
			);
			break;
		case 3:
			while (true) {
				addSeconds = prompt(
					`На скільки секунд бажаєш перевести годинник?`
				);
				if (isNaN(addSeconds)) {
					alert(`Тільки цілі числа!`);
				} else {
					break;
				}
			}
			addSeconds = +addSeconds;
			time.addingTime(addSeconds, 0, 0);
			console.log(
				`Час змінено на: ${time.showVar(
					time.hours
				)} годин ${time.showVar(time.minutes)} хвилин ${time.showVar(
					time.seconds
				)} секунд`
			);
			break;
		default:
			break;
	}

	let nextTime = confirm(`Спробуєш змінити ще щось?`);
	if (nextTime == false) {
		break;
	}
}

/* Максимум
Створи об'єкт, що описує звичайний дріб. Створи об'єкт, який має 
методи роботи з дробом:
Складання 2-х об'єктів-дробів.
Віднімання 2-х об'єктів-дробів.
Множення 2-х об'єктів-дробів.
Ділення 2-х об'єктів-дробів.
Скорочення об'єкта-дробу.
(Тобі потрібно буде створити ще деякі методи не зазначені в 
завданні, для отримання математично правильної відповіді)
*/
alert('Робота з дробами');
alert(
	`Дроби будуть створені автоматично. Вся інформація щодо арефметичних операція буде доступна в консолі`
);
let dribWorkshop = {
	dribGenerator: function (max) {
		while (true) {
			let number = Math.floor(Math.random() * max);
			if (number != 0) {
				return number;
			}
		}
	},

	spilniDilnik: function (pershe, druge) {
		let dilnik = 0;
		let i;
		pershe < 0 ? (pershe = -pershe) : (pershe = pershe);
		druge < 0 ? (druge = -druge) : (druge = druge);
		pershe < druge ? (i = pershe) : (i = druge);
		for (; i >= 0; ) {
			if (pershe % i == 0 && druge % i == 0) {
				dilnik = i;
				break;
			}
			i--;
		}
		return dilnik;
	},

	korektnyiRezultat: function (pershe, druge) {
		return (pershe / druge).toFixed(3);
	},

	dodavannia: function (verh1, niz1, verh2, niz2) {
		let spilniZnamennikSkorochenii, spilniChiselnikSkorochenii;
		let spilniZnamennik = niz1 * niz2;
		verh1 = verh1 * niz2;
		verh2 = verh2 * niz1;
		let spilniChiselnik = verh1 + verh2;

		spilniZnamennikSkorochenii =
			spilniZnamennik /
			dribWorkshop.spilniDilnik(spilniZnamennik, spilniChiselnik);
		spilniChiselnikSkorochenii =
			spilniChiselnik /
			dribWorkshop.spilniDilnik(spilniZnamennik, spilniChiselnik);

		return dribWorkshop.korektnyiRezultat(
			spilniChiselnikSkorochenii,
			spilniZnamennikSkorochenii
		);
	},

	vidnimannia: function (verh1, niz1, verh2, niz2) {
		let spilniZnamennikSkorochenii, spilniChiselnikSkorochenii;
		let spilniZnamennik = niz1 * niz2;
		verh1 = verh1 * niz2;
		verh2 = verh2 * niz1;
		let spilniChiselnik = verh1 - verh2;

		spilniZnamennikSkorochenii =
			spilniZnamennik /
			dribWorkshop.spilniDilnik(spilniZnamennik, spilniChiselnik);
		spilniChiselnikSkorochenii =
			spilniChiselnik /
			dribWorkshop.spilniDilnik(spilniZnamennik, spilniChiselnik);

		return dribWorkshop.korektnyiRezultat(
			spilniChiselnikSkorochenii,
			spilniZnamennikSkorochenii
		);
	},

	mnojennia: function (verh1, niz1, verh2, niz2) {
		let spilniZnamennikSkorochenii, spilniChiselnikSkorochenii;
		let spilniZnamennik = niz1 * niz2;
		let spilniChiselnik = verh1 * verh2;

		spilniZnamennikSkorochenii =
			spilniZnamennik /
			dribWorkshop.spilniDilnik(spilniZnamennik, spilniChiselnik);
		spilniChiselnikSkorochenii =
			spilniChiselnik /
			dribWorkshop.spilniDilnik(spilniZnamennik, spilniChiselnik);

		return dribWorkshop.korektnyiRezultat(
			spilniChiselnikSkorochenii,
			spilniZnamennikSkorochenii
		);
	},

	dilennia: function (verh1, niz1, verh2, niz2) {
		let spilniZnamennikSkorochenii, spilniChiselnikSkorochenii;
		let spilniZnamennik = niz1 * verh2;
		let spilniChiselnik = verh1 * niz2;

		spilniZnamennikSkorochenii =
			spilniZnamennik /
			dribWorkshop.spilniDilnik(spilniZnamennik, spilniChiselnik);
		spilniChiselnikSkorochenii =
			spilniChiselnik /
			dribWorkshop.spilniDilnik(spilniZnamennik, spilniChiselnik);

		return dribWorkshop.korektnyiRezultat(
			spilniChiselnikSkorochenii,
			spilniZnamennikSkorochenii
		);
	},
};

let drobovi = [
	(dribPershi = {
		chiselnik: dribWorkshop.dribGenerator(100),
		znamennik: dribWorkshop.dribGenerator(100),
	}),
	(dribDrugyi = {
		chiselnik: dribWorkshop.dribGenerator(100),
		znamennik: dribWorkshop.dribGenerator(100),
	}),
];

while (true) {
	console.log(drobovi);
	console.log(
		`Перший створений дріб: ${drobovi[0].chiselnik}/${drobovi[0].znamennik}`
	);
	console.log(
		`Другий створений дріб: ${drobovi[1].chiselnik}/${drobovi[1].znamennik}`
	);

	console.log(
		'Результатом додавання зазначених дробів є: ' +
			dribWorkshop.dodavannia(
				drobovi[0].chiselnik,
				drobovi[0].znamennik,
				drobovi[1].chiselnik,
				drobovi[1].znamennik
			)
	);
	console.log(
		'Результатом віднімання зазначених дробів є: ' +
			dribWorkshop.vidnimannia(
				drobovi[0].chiselnik,
				drobovi[0].znamennik,
				drobovi[1].chiselnik,
				drobovi[1].znamennik
			)
	);
	console.log(
		'Результатом множення зазначених дробів є: ' +
			dribWorkshop.mnojennia(
				drobovi[0].chiselnik,
				drobovi[0].znamennik,
				drobovi[1].chiselnik,
				drobovi[1].znamennik
			)
	);
	console.log(
		'Результатом ділення зазначених дробів є: ' +
			dribWorkshop.dilennia(
				drobovi[0].chiselnik,
				drobovi[0].znamennik,
				drobovi[1].chiselnik,
				drobovi[1].znamennik
			)
	);

	let nextDrib = confirm(`Згенерувати нові дроби?`);
	if (nextDrib == false) {
		break;
	}
}

alert('Це все. Далі буде 8)');
