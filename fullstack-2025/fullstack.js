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
