/*
Створи масив «Список покупок». Кожен елемент масиву є об'єктом, який містить 
назву продукту, кількість і куплений він чи ні, ціну за одиницю товару, сума. 
Написати кілька функцій для роботи з таким масивом:
+ Виводити весь список на екран таким чином, щоб спочатку йшли продукти, 
  що ще не придбані, а потім - ті, що вже придбали.
+ Покупка продукту. Функція приймає назву продукту і відзначає його як придбаний.
+ Видалення продукту зі списку (видалення повинно проводитися шляхом створення 
  нового масиву, в якому продукт, що ми шукаємо, буде відсутнім)
+ Додавання покупки в список. Враховуй, що при додаванні покупки з уже існуючим 
  в списку продуктом, необхідно збільшувати кількість в існуючій покупці, а не додавати нову. 
  При цьому також повинна змінитися сума, наприклад, якщо ціна за одиницю 12, а кількості товарів стало 2, то сума буде 24.
+ Підрахунок суми всіх продуктів (враховуючи кількість кожного) в списку.
+ Підрахунок суми всіх (не) придбаних продуктів.
+ Показання продуктів в залежності від суми, (від більшого до меншого / від меншого до більшого, 
  в залежності від параметра функції, який вона приймає)
*/
alert('Домашня робота на тему "Масиви в JavaScriptS"');
alert('Список покупок');

let varName, varAmount, varPrice, varBought, totalPrice;

let cart = [];

let workShop = {
	// рандом ціна
	random: function () {
		while (true) {
			let number = Math.floor(Math.random() * 100);
			if (number != 0) {
				return number;
			}
		}
	},

	// пошуки
	toFindElement: function (name) {
		let result = cart.find((object) => object.name == name);
		return result;
	},

	toFindElementIndex: function (name) {
		let result = cart.findIndex((object) => object.name == name);
		return result;
	},

	toFindElementAmount: function (name) {
		let result = cart.find((object) => object.name == name);
		return result.amount;
	},

	// постійний фільтр кошика
	sortCart: function () {
		console.log(`--- =(@_@)= ---`);
		console.log(`Наразі в кошику`);
		cart.sort((first, second) => second.bought - first.bought);
		cart.forEach((item) => {
			console.log(
				`${item.name}: кількість ${item.amount} за ціною ${item.price}. Загальна вартість ${item.totalPrice};`
			);
		});
	},

	// сортування
	sortCartPriceMinMax: function () {
		console.log(`--- =(@_@)= ---`);
		console.log(`Наразі в кошику (за зростанням ціни за одиницю)`);
		cart.sort((first, second) => first.price - second.price);
		cart.forEach((item) => {
			console.log(
				`${item.name}: кількість ${item.amount} за ціною ${item.price}. Загальна вартість ${item.totalPrice};`
			);
		});
	},

	sortCartPriceMaxMin: function () {
		console.log(`--- =(@_@)= ---`);
		console.log(`Наразі в кошику (за спаданням ціни за одиницю)`);
		cart.sort((first, second) => second.price - first.price);
		cart.forEach((item) => {
			console.log(
				`${item.name}: кількість ${item.amount} за ціною ${item.price}. Загальна вартість ${item.totalPrice};`
			);
		});
	},

	sortCartTotalPriceMinMax: function () {
		console.log(`--- =(@_@)= ---`);
		console.log(`Наразі в кошику (за зростанням загальної вартості)`);
		cart.sort((first, second) => first.totalPrice - second.totalPrice);
		cart.forEach((item) => {
			console.log(
				`${item.name}: кількість ${item.amount} за ціною ${item.price}. Загальна вартість ${item.totalPrice};`
			);
		});
	},

	sortCartTotalPriceMaxMin: function () {
		console.log(`--- =(@_@)= ---`);
		console.log(`Наразі в кошику (за спаданням загальної вартості)`);
		cart.sort((first, second) => second.totalPrice - first.totalPrice);
		cart.forEach((item) => {
			console.log(
				`${item.name}: кількість ${item.amount} за ціною ${item.price}. Загальна вартість ${item.totalPrice};`
			);
		});
	},

	//вартість товарів
	totalFunction: function () {
		let totalCart = 0,
			totalBoughtTrue = 0,
			totalBoughtFalse = 0;
		console.log(`--- =(@_@)= ---`);
		console.log(`Вартість товарів в кошику:`);
		cart.forEach((item) => {
			totalCart = totalCart + item.totalPrice;
			if (item.bought == true) {
				totalBoughtTrue = totalBoughtTrue + item.totalPrice;
			} else {
				totalBoughtFalse = totalBoughtFalse + item.totalPrice;
			}
		});
		console.log(
			`Наразі, товарів у кошику на загальну суму ${totalCart}. Серед них придбаних - на суму ${totalBoughtTrue}, не придбаних - на суму ${totalBoughtFalse}.`
		);
	},

	// додавання в кошик
	addToCart: function () {
		while (true) {
			varName = prompt(`Який товар ти бажаєш додати до кошика?`);
			if (workShop.toFindElement(varName) == undefined) {
				varAmount = prompt(
					`Скільки ${varName} ти бажаєш додати до кошика?`
				);
				if (isNaN(varAmount)) {
					alert(
						`Введене значення не є числовим. До кошика буде додано одиницю товару.`
					);
					varAmount = 1;
				}
				varAmount = +varAmount;
				varPrice = workShop.random();

				let product = {
					name: varName,
					amount: varAmount,
					price: varPrice,
					totalPrice: varPrice * varAmount,
					bought: false,
				};

				cart.push(product);
			} else {
				let oldAmount = workShop.toFindElementAmount(varName);
				let addAmount = prompt(
					`${varName} вже додано в кошик у кількості ${oldAmount}. Бажаєш додати ще?`
				);
				if (isNaN(addAmount)) {
					alert(
						`Введене значення не є числовим. До кошика буде додано ще одиницю товару.`
					);
					varAmount = oldAmount + 1;
				} else {
					varAmount = oldAmount + +addAmount;
				}
				workShop.toFindElement(varName).amount = varAmount;
				alert(`Товар додано до кошика.`);
			}

			workShop.sortCart();

			let newProduct = confirm(`Бажаєш додати ще один товар?`);
			if (newProduct == false) {
				break;
			}
		}
	},

	// віднімання з кошика
	deleteFromCart: function () {
		while (true) {
			varName = prompt(`Який товар ти бажаєш видалити з кошика?`);
			if (workShop.toFindElement(varName) == undefined) {
				alert(`Такий товар в кошику відсутній!`);
			} else {
				let oldAmount = workShop.toFindElementAmount(varName);
				let allOrNot = confirm(
					`Ти бажаєш видалити з кошика весь товар?`
				);
				if (allOrNot == true) {
					let deleted = workShop.toFindElementIndex(varName);
					cart.splice(deleted, 1);
				} else {
					let addAmount = prompt(
						`Наразі в кошику знаходиться ${oldAmount} ${varName}. Скільки ти бажаєш прибрати з кошика?`
					);
					if (isNaN(addAmount)) {
						alert(
							`Введене значення не є числовим. З кошика буде прибрано весь товар!.`
						);

						varAmount = 0;
					} else if (addAmount < 0) {
						alert(
							`Я так розумію, ти є адептом "атріцатєльного" додавання 8). З кошика буде "прибрано" ${addAmount} товарів!`
						);
						varAmount = oldAmount + -addAmount;
					} else if (addAmount > oldAmount) {
						alert(`В кошику немає стільки товару!`);
						varAmount = oldAmount;
					} else {
						varAmount = oldAmount - +addAmount;
					}

					workShop.toFindElement(varName).amount = varAmount;
					alert(`Кількість товару в кошику змінено.`);
				}
			}

			workShop.sortCart();

			let newProduct = confirm(`Бажаєш видалити ще один товар?`);
			if (newProduct == false) {
				break;
			}
		}
	},

	buyItems: function () {
		while (true) {
			cart.forEach((item) => {
				if (item.bought == false) {
					let buyVar = confirm(
						`Ти бажаєш придбати ${item.amount} ${item.name} загальною вартістю ${item.totalPrice}?`
					);
					if (buyVar == true) {
						item.bought = true;
					}
				}
			});

			workShop.sortCart();

			let newBuy = confirm(
				`Може ти про щось забув? Бажаєш докупити товари?`
			);
			if (newBuy == false) {
				break;
			}
		}
	},
};
alert(`Ти стоїш посеред величезного торгівельного центру з порожным кошиком. 
До комендантської години залишилося зовсім трішки, а тобі ще конче необхідно придбати найнеобхідніше.
Ти стрімголов мчих до рядів з товарами різного вжитку...`);
while (true) {
	while (true) {
		let choise = prompt(
			`Ти в розгубленості стоїш серед полиць супермаркету. 
Втомлений чоловічий голос з динаміків попереджає про скоре закриття магазину... Ти: 
1) Біжиш до найближчої полиці з бажанням вхопити які-небудь товари...; 
2) Поспіхом оглядаєш накидані до кошика товари...;
3) Викладаєш з кошика явно замалі капці та прострочену ковбасу (як вони взагалі туди потрапили?)...;
4) Біжиш на касу з єдиним бажанням оплатити бодай щось...;
5) Спілкуєшся з внутрішнім матемаиком та підбиваєш проміжні підсумки витрат...`
		);
		choise = +choise;
		switch (choise) {
			case 1:
				workShop.addToCart();
				break;
			case 2:
				while (true) {
					let nameProduct = prompt(
						`Ти риєшся в кошику в марних сподіваннях знайти там ...`
					);
					if (workShop.toFindElement(nameProduct) == undefined) {
						alert(`Неа... ти в кошик такого не поклав(-ла...).`);
					} else {
						alert(
							`Витративши купу дорогоцінного часу, ти таки знайшов(-ла) ${nameProduct} серед покупок.`
						);
					}

					let oneMoreTime = confirm(`Ще бажаєш трішки поритися?`);
					if (oneMoreTime == false) {
						alert(
							`Поки ти безглкздо витрачав (-ла) час риючись в кошику, твій внутрішній математик працював як навіжений. Ось що йому вдалося проаналізувати:`
						);
						workShop.sortCartPriceMinMax();
						workShop.sortCartPriceMaxMin();
						workShop.sortCartTotalPriceMinMax();
						workShop.sortCartTotalPriceMaxMin();
						break;
					}
				}
				break;
			case 3:
				workShop.deleteFromCart();
				break;
			case 4:
				workShop.buyItems();
				break;
			case 5:
				workShop.sortCart();
				workShop.totalFunction();
				break;
			default:
				break;
		}

		let oneMoreChoise = confirm(
			`Ти вже втомився(-лася) та хочеш піти звідси?`
		);
		if (oneMoreChoise == true) {
			break;
		}
	}

	let fewMinutesLater = confirm(
		`На екрані мобільного ти бачиш підтвердження! 
Оплата пройшла успішно! Mission acomplished! Овації та феєрверки ... 
Чи нє? 
А чи ти не забув(-ла) про ... ?`
	);
	if (fewMinutesLater == false) {
		break;
	}
}

alert('Це все. Далі буде 8)');
