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
let fruits = ['apple', 'orange', 'pineapple', 'mango'];
fruits.push('pear', 'banana');
console.log(fruits);
//Write a for loop that prints odd numbers from 3 to 11 inclusive to the console.

for (let i = 3; i <= 11; i + 1) {

    if ((i % 2) === 1) {
        console.log(i);
        i = i + 1;
    } else if ((i % 2) === 0) {
        i = i + 1;
    }
}
// console.log(9 % 2);
// Write a for loop that outputs numbers from 5 to 1 inclusive to the console.
for (let i = 5; i >= 1; i--) {
    console.log(i);
}
/* Write a function sumFromTo, which:
        
Takes two integers, min and max.
Returns the sum of all integers from min to max inclusive. */
function sumFromTo(min, max) {
    let sum = 0;
    for (let i = min; i <= max; i++) {
        sum = sum + i;
    }
    return sum;
}
console.log(sumFromTo(1, 8));
// Write a function factorial that takes a natural number N and returns its factorial.
function factorial(N) {
    let res = 1;
    for (let i = 1; i <= N; i++) {
        res *= i;
    }
    return res;
}
console.log(factorial(5));
//The title variable contains a string. Use a loop to print this string to the console, one character per iteration, from first to last.
const title = 'Strings';
for (let i = 0; i <= title.length - 1; i++) {
    console.log(title[i]);
}
/* Write a printFromTo function that: 
 Accepts three parameters: input, start, and end.
Prints the characters of the input string to the console from 
the start to the end indexes, inclusive. */

function printFromTo(input, start, end) {
    for (let i = start; i <= end; i++) {
        console.log(input[i]);
    }
}

/*Write a function printBackwards that:
Takes three parameters: input, start, and end
Prints the characters of the input string to the console 
in reverse, i.e.: from the index end to start indexes, 
inclusive. */

function printBackwards(input, start, end) {
    for (let i = end; i >= start; i--) {
        console.log(input[i]);
    }
}
printBackwards('hellodjsjs', 1, 3);

/* 
The replaceSpaces function takes a string input.
Modify the function by adding a for loop that replaces 
each space in input with a hyphen -.
Return the modified string from the function.
*/

function replaceSpaces(input) {
    let result = '';
    for (let i = 0; i < input.length; i++) {
        if (input[i] === ' ') {
            result = result + '-';
        } else {
            result = result + input[i];
        }
    }
    //console.log(result);
    return result;
}
result = replaceSpaces('Hello F uckk cc');
console.log(result);
/*
Write a function replaceA that:

Takes a string input.
Replaces all a and A letters with *.
Returns the resulting string.
*/

function replaceA(input) {
    let result = '';
    for (let i = 0; i < input.length; i++) {
        if (input[i] === 'a') {
            result = result + '*';
        } else if (input[i] === 'A') {
            result = result + '*';
        } else {
            result = result + input[i];
        }
    }
    return result;
}
result = replaceA('Hello FaaAuckk cc');
console.log(result);
/*
Implement the countMs function that:
Takes the text string
Returns the number of uppercase M and lowercase m letters combined.
*/
function countMs(text) {
    let sum = 0;
    for (let i = 0; i < text.length; i++) {
        if ((text[i] === 'm') || ((text[i] === 'M'))) {
            sum = sum + 1;
        } else {
            sum === sum + 0;
        }
    }
    return sum;
}
sum = countMs('Hello MmFaaAuckk cc');
console.log(sum);
// convert string input to lower Case
function convertToLowerCase(input) {
    input = input.toLowerCase();
    return input;
}
input = convertToLowerCase('GHHS');
console.log(input);
/*
Takes a string input.
Returns the contents of the string in UPPERCASE.
*/
function convertToUpperCase(input) {
    input = input.toUpperCase();
    return input;
}
input = convertToUpperCase('skfkdk');
console.log(input);
/*
Takes a string input.
Replaces every instance of - with a space.
Returns the resulting string.
*/
function restoreSpaces(input) {
    input = input.replaceAll('-', ' ');
    return input;
}
input = restoreSpaces('skfk-d-k');
console.log(input);
/*
Create a isSubstring function that:

Takes two strings, phrase and part.
Returns the following:
true, if phrase contains part.
false, if phrase does not contain part
*/
function isSubstring(phrase, part) {
    if (phrase.includes(part)) { return true; }
    else {
        return false;
    }
    ;
}
phrase = isSubstring('Hello', 'al');
console.log(phrase)
/**
 * Create a function getPosition that:

Takes two strings: text and word.
Returns the index of the first word that occurs in text.
If word isn't found in text, the functon should return -1.
 */
function getPosition(text, word) {
    if (text.indexOf(word)) { return text.indexOf(word); }
    else {
        return -1;
    }
    ;
}
text = getPosition('Hello World', 'World');
console.log(text)
/*
Write a function countLetters, which should:

Accept a string input.
Return the letter count of the string.
*/
