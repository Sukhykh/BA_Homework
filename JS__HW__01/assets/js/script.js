// Hello User!
userName = prompt("Як ти кажеш тебе звати?");
alert(`Привіт, ${userName}! (дублюється в консоль)`);
console.log(`Привіт, ${userName}!`);

// How old are you?
const YEAR = 2022;
let yearOfBirth = +prompt("В якому році ти народився? (я ще розробник-початківець, тому введи цифру, будь-ласка)");
let age = YEAR - yearOfBirth;
alert(`А тобі вже аж, ${age} рочки! (дублюється в консоль)`);
console.log(`А тобі вже аж, ${age} рочки!`);

// Perimeter of a square
let sideSquare = +prompt("Трішки математики! Вкажи довжину сторони квадрата (знову цифри з тих самих підстав):");
let perimeterSquare = 4 * sideSquare;
alert(`Наш квадрат має периметр ${perimeterSquare} одиниць! (дублюється в консоль)`);
console.log(`Наш квадрат має периметр ${perimeterSquare} одиниць!`);
let areaSquare = sideSquare ** 2;
alert(`Якшо шо, то площа квадрата ${areaSquare} квадратних одиниці (дублюється в консоль).`);
console.log(`Якшо шо, то площа квадрата ${areaSquare} квадратних одиниці.`);

// Area of a circle
let radiusСircle = +prompt("Знов математика! Вкажи радіус кола (так, знову цифри, будь ласка):");
let areaСircle = radiusСircle ** 2 * Math.PI;
alert(`Коло має площу ${areaСircle} квадратних одиниці (дублюється в консоль).`);
console.log(`Коло має площу ${areaСircle} квадратних одиниці.`);
let perimeterСircle = radiusСircle * 2 * Math.PI;
alert(`Якшо шо, то периметр кола ${perimeterСircle} одиниці (дублюється в консоль).`);
console.log(`Якшо шо, то периметр кола ${perimeterСircle} одиниці.`);

// Speed Test
let distance = +prompt("Тепер давай порахуємо швидкість. Вкажи відстань в кілометрах");
let time = +prompt("А тепер наявний час в годинах:");
let speed = distance / time;
alert(`Для подолання відстані в ${distance} кілометрів за ${time} годин тобі треба рухатися зі швидкістю ${speed} км/год (дублюється в консоль)`);
console.log(`Для подолання відстані в ${distance} кілометрів за ${time} годин тобі треба рухатися зі швидкістю ${speed} км/год`);

// Сurrency converter
// https://minfin.com.ua/ua/currency/converter/usd-eur/?val1=1&val2=1.0126582278481013
const exchangeRate = 1.01,
    exchangeUSDtoUAH = 40;
    exchangeUAHtoEUR = 0.0253;
let usdCross = +prompt("Рахуємо заощадження. Скільки ти кажеш у тебе зберігається доларів?");
let eurCross = usdCross * exchangeRate;
let myUAH = usdCross * exchangeUSDtoUAH;
let myEUR = myUAH * exchangeUAHtoEUR;
alert(`Нічого собі! По курсу ${exchangeRate} EUR за один USD в тебе аж ${eurCross} EUR! (дублюється в консоль)`);
console.log(`Нічого собі! По курсу ${exchangeRate} EUR за один USD в тебе аж ${eurCross} EUR!`);
alert(`Хоча, якщо ти вирішиш конвертувати через гривню, то в тебе вийде ${myEUR} EUR. (дублюється в консоль)`);
console.log(`Хоча, якщо ти вирішиш конвертувати через гривню, то в тебе вийде ${myEUR} EUR.`);

alert('Це все. Далі буде 8)');
