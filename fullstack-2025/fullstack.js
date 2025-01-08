// const name = 'John';
// const age = 30;

// // concatenation
// const concatenationGreeting = 'Hello! My name is ' + name + ' and I am ' + age + '.';
// console.log(concatenationGreeting); // 'Hello! My name is John and I am 30.'

// interploation
const interpolationGreeting = `Hello! My name is ${name} and I am ${age}.`;
console.log(interpolationGreeting); // 'Hello! My name is John and I am 30.'

let goal = 'Help 1 million people worldwide build their careers in IT.';
// write your code below
console.log(goal.length);


let goal = 'Help 1 million people worldwide build their careers in IT.';
// write your code below
console.log(
    goal[goal.length - 1]
);

const name = 'Artem';
const lastName = 'Aksenovs';
const initials = name[0] + lastName[0];
console.log(initials);
//  Write code here

const a = 'Hello';
const b = 'world';
// write your code below
const resultString = `${a}, ${b}!`;
console.log(resultString);

const part1 = '2365';
const part2 = '7341';
const part3 = '3219';
const part4 = '3348';
// write your code below
const cardNumber = `${part1} ${part2} ${part3} ${part4}`;
console.log(cardNumber);

let cash = 50;
let milkPrice = 40;
let canBuyMilk = cash >= milkPrice;
console.log(canBuyMilk);
//
const age = 58;
const retirementAge = 65;
const isRetired = age >= retirementAge;
console.log(isRetired);
//
let mark = 85;
let passedTheTest = mark >= 60;
let mustTakeTheTestAgain = !passedTheTest;
console.log(mustTakeTheTestAgain);
//
const isHoliday = true;
const isVacation = false;
const canStayHome = isHoliday || isVacation; // don't change this line
console.log(canStayHome);
//
const hasAllIngredients = true;
const hasStove = true;
let canMakeCake = hasAllIngredients && hasStove;
console.log(canMakeCake);

let workDone = true;
let dayFinished = true;
//  Write code here
let canGoHome = workDone || dayFinished;
console.log(canGoHome);
//
function calculateArea(length, width) {
    return length * width;
}
calculateArea(8, 9)
calculateArea(3, 5);
console.log(calculateArea);
//
function greet(name) {
    return `Hi, ${name}!`;
}
greet('Mike');
greet('John');
console.log(greet);
//
function getBoxVolume(length, width, height = 1) {
    let getVolume = length * width * height;
    return getVolume;
}
getBoxVolume(3, 4, 5);
getBoxVolume(5, 10)
console.log(getBoxVolume);
//
function getMoneyRemaining(bankAccount, banknoteDenomination = 100) {
    let remainder = bankAccount % banknoteDenomination;
    return remainder;
}
getMoneyRemaining(1473, 20);
getMoneyRemaining(1250, 50);
getMoneyRemaining(534);
console.log(getMoneyRemaining);
//
function getInitials(name, lastName) {
    let initials = name[0] + lastName[0];
    return initials;
}
getInitials('Alice', 'Green');
getInitials('Bob', 'Smith');
console.log(getInitials);
//
function greetIfKid(age) {
    // write your code here
    if (age < 18) {
        age = 17;
        console.log('Hey!');
    }
}
//
function greetIfRetired(age) {
    if (age >= 65) {
        age = 67;
        console.log('Have a nice day!');
    }
}
//
function calculateTaxes(income) {
    if (income <= 0) {
        return 'neg';
    }
    if (income > 0 && income <= 1000) {
        return income * 0.02;
    } else if (income <= 10000) {
        return income * 0.03;

    } else {
        return income * 0.05;
    }
}
calculateTaxes(500);
//
function getTipsRating(amount) {
    if (amount > 50) {
        return 'excellent';
    } else if (amount > 20) {
        return 'great';
    } else if (amount > 10) {
        return 'good';
    } else if (amount > 0) {
        (console.log('poor'));
    } else {
        return 'terrible';
    }
}

getTipsRating(5);
//
function printOddOrEven(n) {

    if ((n % 2) === 0) {
        console.log('even');
    } else {
        console.log('odd');

    }
}
printOddOrEven(4);
printOddOrEven(5);
//
function checkWordLength(word) {
    if (word.length < 4) {
        console.log('is a short word');
    } else {
        console.log('is a long word');
    }
}
//
checkWordLength('Hi');
checkWordLength('Hello');

function canBuyBeer(age) {
    if (age < 18) {
        return 'You can not buy beer';
    } else {
        return 'You can buy beer';
    }
}
canBuyBeer(15);
//
function printOddOrEven(n) {

    if ((n % 2) = 0) {
        console.log('even');
    } else {
        console.log('odd');

        let n = 4;
        let n = 5;

    }
}
//
let countries = [
    'Mongolia',
    'Yakutia',
    'Netherlands'
];
console.log(countries);
//
let distances = [3, 20, 34, 56, 1];
console.log(distances.length);
//
let flowers = ['rose', 'tulip', 'sunflower', 'daisy', 'lily', 'lilac', 'orchid'];
console.log(flowers[1]);
//

