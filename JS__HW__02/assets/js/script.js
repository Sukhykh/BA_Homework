alert('Домашня робота на тему "Типи даних та оператори в JavaScriptS"');

//мінімум 1
let firstOperant = 0.1,
    secondOperant = 0.2;
let sumOperantFirst = (firstOperant*10 + secondOperant*10)/10;
let sumOperantSecond = firstOperant + secondOperant;
let resultToFixed = sumOperantSecond.toFixed(1);
alert(`Sum of ${firstOperant} and ${secondOperant} is ${sumOperantFirst}`);
console.log(`Sum of ${firstOperant} and ${secondOperant} is ${resultToFixed}`);

//мінімум 2
let firstString = '1',
    secondNumber = 2;
let sumStringNumber = secondNumber + +firstString;
alert(`Sum of string ${firstString} and number ${secondNumber} is ${sumStringNumber}`);
console.log(`Sum of string ${firstString} and number ${secondNumber} is ${sumStringNumber}`);

//мінімум 3
const fileSize = 820;
let fleshSize = +prompt("Your Flash drive size is");
let file = Math.floor(fleshSize * 1024 / 820);
alert(`You can save just ${file} files`);
console.log(`You can save just ${file} files`);

//норма 1
let sumMoney = +prompt("How much money do you have?");
let chocoCost = +prompt("How much is this chocolate cost?");
let chocoAmount = Math.floor(sumMoney / chocoCost);
let restMoney = sumMoney % chocoCost;
alert(`You can buy ${chocoAmount} chocolate. The rest will be ${restMoney}`);
console.log(`You can buy ${chocoAmount} chocolate. The rest will be ${restMoney}`);

//норма 2
let revers = "",
    digit;
let numberCore = +prompt("Input any number you want");
let number = numberCore;
while (number) { 
    digit = number % 10;
    digit = String(digit);
    revers = revers + digit;
    number = Math.floor(number / 10)
}
alert(`You number was ${numberCore}. Revers number is ${revers}`);
console.log(`You number was ${numberCore}. Revers number is ${revers}`);

//максимум 1
const interest = 0.05,
    term = 2;
let deposit = +prompt("The deposit amount will be:");
let sum = deposit * interest / 12 * 2;
sum = +sum.toFixed(2);
let allMoney = deposit + sum;
alert(`You will earn ${sum}. In general, you will have ${allMoney}`);
console.log(`You will earn ${sum}. In general, you will have ${allMoney}`);
/*
//максимум 2
alert(2 && 0 && 3);
alert(2 || 0 || 3);
alert(2 && 0 || 3);
*/
alert('Це все. Далі буде 8)');