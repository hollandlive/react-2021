const name = 'John';
const age = 30;

// concatenation
const concatenationGreeting = 'Hello! My name is ' + name + ' and I am ' + age + '.';
console.log(concatenationGreeting); // 'Hello! My name is John and I am 30.'

// interploation
const interpolationGreeting = `Hello! My name is ${name} and I am ${age}.`;
console.log(interpolationGreeting); // 'Hello! My name is John and I am 30.'

let goal = 'Help 1 million people worldwide build their careers in IT.';
console.log(goal.length);


let goal = 'Help 1 million people worldwide build their careers in IT.';
console.log(
    goal[goal.length - 1]
);

/*
Declare a new variable, resultString.
Concatenate it with the previously declared variables — a, b, 
and c — to create the string Concatenation.
Display the result on the screen using console.log.*/
const name = 'Artem';
const lastName = 'Aksenovs';
const initials = name[0] + lastName[0];
console.log(initials);

/*
Declare a new resultString variable.
Use interpolation: Combine a and b in backticks `` to create the string 'Hello, world!'.
Assign the resulting string to resultString.
Use console.log to display the resulting string. */
const a = 'Hello';
const b = 'world';
const resultString = `${a}, ${b}!`;
console.log(resultString);

/*
Write a program that displays the number of an imaginary bank card with every four digits separated by a space. 
Use either concatenation or interpolation — your choice! */
const part1 = '2365';
const part2 = '7341';
const part3 = '3219';
const part4 = '3348';
const cardNumber = `${part1} ${part2} ${part3} ${part4}`;
console.log(cardNumber);

/* Here's an unfinished program that checks 
if we have enough money to buy milk. 
Complete it by replacing ? with the appropriate comparison operator. 
Click the Run button to check the result. */
let cash = 50;
let milkPrice = 40;
let canBuyMilk = cash >= milkPrice;
console.log(canBuyMilk);

/* John is 58 years old, and the retirement age 
in his country of residence is 65. Write a program 
that checks whether John has reached retirement age. 
You need to declare three variables: */
const age = 58;
const retirementAge = 65;
const isRetired = age >= retirementAge;
console.log(isRetired);

/*To pass the exam, a student must score at least 60 
out of 100 points. Use the negation operator ! 
so that mustTakeTheTestAgain always holds the 
value opposite to passedTheTest.*/
let mark = 85;
let passedTheTest = mark >= 60;
let mustTakeTheTestAgain = !passedTheTest;
console.log(mustTakeTheTestAgain);

/*n this task, you'll learn to work with the OR logical operator.
Take a look at two variables, isHoliday and isVacation.
Modify the value of either so that canStayHome is true.
Display the value of canStayHome in the console.
⚠ We can't change the following line:
const canStayHome = isHoliday || isVacation; */
const isHoliday = true;
const isVacation = false;
const canStayHome = isHoliday || isVacation; // don't change this line
console.log(canStayHome);

/*Take a look at two variables, isWaterHot and haveTea. 
Modify the value of either so 
that canMakeTea is false. Then, display canMakeTea in the console.*/
const isWaterHot = false;
const haveTea = true;
const canMakeTea = isWaterHot && haveTea; // don't change this line
console.log(canMakeTea);

/*To make a cake, we need both the appropriate ingredients 
(variable hasAllIngredients) and a working stove (variable hasStove).
Write a program that checks whether we have everything to make a cake 
(variable canMakeCake).
Display the result in the console.
to check that both conditions are true simultaneously, use the && operator 
— logical AND. */
const hasAllIngredients = true;
const hasStove = true;
let canMakeCake = hasAllIngredients && hasStove;
console.log(canMakeCake);

/*An employee can go home if they:
have finished the work planned for the day (variable workDone)
OR the workday has ended (variable dayFinished)
Write a program that checks whether the employee can go home 
(variable canGoHome).
Display the result in the console.
💡 To check if at least one condition is true, we can use the || operator — 
logical OR. */
let workDone = true;
let dayFinished = true;
let canGoHome = workDone || dayFinished;
console.log(canGoHome);

/* Create the calculateArea function using the function keyword 
to calculate the area of a rectangle.
Write the length and width parameters inside parentheses.
Use the return keyword in curly brackets {} to return the rectangle's area (length * width).
Call the function with arguments 8 and 9.
Call the function again, but with different arguments — 3 and 5. */
function calculateArea(length, width) {
    return length * width;
}
calculateArea(8, 9)
calculateArea(3, 5);
console.log(calculateArea);

/* greeter
Create a function greet, which:
Takes the name parameter.
Returns a greeting string in the form of 
Hi, ${name}! (use the keyword return).
Call the function twice:
With the name Mike.
With the name John.
💡 Remember: Interpolation is done with backticks ``. */
function greet(name) {
    return `Hi, ${name}!`;
}
greet('Mike');
greet('John');
console.log(greet);

/* Get Box Volume
Create a function getBoxVolume that:
Accepts length, width, and height parameters (height defaults to 1).
Returns the volume of a box with the specified dimensions.
Call the function twice:
With all dimensions — 3, 4, and 5.
With only two arguments — 5 and 10. */
function getBoxVolume(length, width, height = 1) {
    let getVolume = length * width * height;
    return getVolume;
}
getBoxVolume(3, 4, 5);
getBoxVolume(5, 10)
console.log(getBoxVolume);

/* Money Remaining Function
In the Numbers topic, we solved a task about Bob needing 
to withdraw money from the ATM. Write the getMoneyRemaining function, 
which takes two parameters:
bankAccount — the amount in Bob's bank account.
banknoteDenomination — the denomination of bills in the ATM 
(defaults to 100 euros).
Return the amount of money that'll remain in the account after 
Bob withdraws the maximum possible amount from the ATM. Call the function 
three times:

With 1473 and 20.
With 1250 and 50.
With only 534. */
function getMoneyRemaining(bankAccount, banknoteDenomination = 100) {
    let remainder = bankAccount % banknoteDenomination;
    return remainder;
}
getMoneyRemaining(1473, 20);
getMoneyRemaining(1250, 50);
getMoneyRemaining(534);
console.log(getMoneyRemaining);

/* Initials Function
Create a getInitials function, which accepts two parameters:
name — a person's first name.
lastName — a person's last name.
...and returns the initials for the specified first and last 
name. Call the function twice and get the initials for:
Alice Green
Bob Smith */
function getInitials(name, lastName) {
    let initials = name[0] + lastName[0];
    return initials;
}
getInitials('Alice', 'Green');
getInitials('Bob', 'Smith');
console.log(getInitials);

/* Greet if Kid
Let's begin with practicing the if statement.
Write a function greetIfKid that prints Hey! to the console 
if the person's age is less than 18 (using the >variable age). */
function greetIfKid(age) {
    if (age < 18) {
        age = 17;
        console.log('Hey!');
    }
}
/* Greet If Retired
Write a function greetIfRetired that:
Takes the age parameter (i.e.: the person's age)
Prints Have a nice day! in the console if the person is 65 or older (>= 65) */
function greetIfRetired(age) {
    if (age >= 65) {
        age = 67;
        console.log('Have a nice day!');
    }
}

/*Calculate Taxes
Taxes are due soon! Let's write a calculateTaxes function that 
calculates how much tax we need to pay. It should:
Accept a positive number income (our income).
Return the appropriate tax amount:
2%, if the income is up to 1000 inclusive.
3%, if the income exceeds 1000, but is not higher than 10000.
5%, if the income exceeds 10000. */
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

/* Get Tips Rating
Waiters love tips! They shared with us their system 
for evaluating the amounts received 💵. Let's help them automate 
this process by implementing the function getTipsRating, which takes 
the tip amount and returns a string rating according to the given amount:
excellent, if amount is more than 50;
great, if amount is more than 20;
good, if amount is more than 10;
poor, if amount is more than 0;
otherwise, return terrible. */
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

/* Print Odd or Even
Now let's practice using if and else. Write a function 
printOddOrEven, which takes a positive integer (as a parameter n), 
and prints in the console:
The word even — if the number n is even.
The word odd — if the number n is odd.
💡 Even numbers can be divided by 2 without a remainder, 
while odd numbers result in a remainder of 1. */
function printOddOrEven(n) {
    if ((n % 2) === 0) {
        console.log('even');
    } else {
        console.log('odd');
    }
}
printOddOrEven(4);
printOddOrEven(5);

/* Write a function checkWordLength, which takes a string 
word and prints one of the following statements to the console:
word followed by " is a short word", if word has less than 5 characters.
word followed by " is a long word", if word has 5 or more characters.*/
function checkWordLength(word) {
    if (word.length < 4) {
        console.log('is a short word');
    } else {
        console.log('is a long word');
    }
}
checkWordLength('Hi');
checkWordLength('Hello');

/* Can Buy Beer
In Europe, legal drinking age is 18. Create a function canBuyBeer that takes an integer age as a parameter, and returns either:
'You can not buy beer', if age is less than 18.
'You can buy beer', if age is 18 or higher.
💡 To return a value from the function, use the keyword return. */
function canBuyBeer(age) {
    if (age < 18) {
        return 'You can not buy beer';
    } else {
        return 'You can buy beer';
    }
}
canBuyBeer(15);

/* Countries Array
Create an array countries with 3 countries you'd like to visit.
Display the array using console.log.
💡 Remember that array values sholuld be enclosed in square brackets [ ]. */
let countries = [
    'Mongolia',
    'Yakutia',
    'Netherlands'
];
console.log(countries);

//Using length, print the number of elements in the distances array to the console.
let distances = [3, 20, 34, 56, 1];
console.log(distances.length);

//We've created an array of flowers with flower names. Output the array's second element to the console.
let flowers = ['rose', 'tulip', 'sunflower', 'daisy', 'lily', 'lilac', 'orchid'];
console.log(flowers[1]);

/* Add Fruits
Use the push method to add two fruits names — anything you'd like — to the end of the fruits array.
Display the array with console.log. */
let fruits = ['apple', 'orange', 'pineapple', 'mango'];
fruits.push('pear', 'banana');
console.log(fruits);

/*Write a for loop that prints odd numbers from 3 to 11 
inclusive to the console. */
for (let i = 3; i <= 11; i + 1) {

    if ((i % 2) === 1) {
        console.log(i);
        i = i + 1;
    } else if ((i % 2) === 0) {
        i = i + 1;
    }
}
// console.log(9 % 2);

/* Write a for loop that outputs numbers from 5 to 1 
inclusive to the console. */
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

/* Write a function factorial that takes a natural number N and 
returns its factorial. */
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

/* write a function that
Takes a string input.
Returns the contents of the string in UPPERCASE.
*/
function convertToUpperCase(input) {
    input = input.toUpperCase();
    return input;
}
input = convertToUpperCase('skfkdk');
console.log(input);

/* write a function that
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

/* Create a function getPosition that:
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
console.log(text);

/*
Write a function countLetters, which should:
Accept a string input.
Return the letter count of the string.
*/
function countLetters(input) {
    let charCount = 0;

    for (let i = 0; i < input.length; i++) {
        // Check if the character is not a space
        if (input[i] !== ' ' && (input[i].toLowerCase() !== input[i].toUpperCase())) {
            charCount++; // Increment the count for valid characters
        }
    }

    return charCount;
}
input = countLetters('dde de** wdd-dd');
console.log(input);

/*
Add a loop inside the getSum function to 
calculate the sum of the numbers stored in the numbers array */

function getSum(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}
num = getSum([5, 7, 9]);
console.log(num);

/*Write a function getLargestNumber that:
Takes a non-empty array numbers.
Returns the largest number stored in this array */
function getLargestNumber(values) {
    if (values.length === 0) {
        return 0;
    }
    let max = values[0];
    for (const value of values) {
        if (value > max) {
            max = value;
        }
    }
    return max;
}
const num = [5, 7, 9, 33];
const max = getLargestNumber(num);
console.log(max);

/*Write a function splitWords that:
Takes a text string with words, each separated by a single space.
Returns an array of individual words.*/
function splitWords(text) {
    const arrayText = text.split(' ');
    return arrayText;
}
const text = 'text bbb bbebe';
textArray = splitWords(text);
console.log(textArray);

/* Write a function joinWords that:
Accepts an array of strings words, and a joining character glue.
Returns a string with all words elements joined together with glue. */
function joinWords(words, glue) {
    const joinedWords = words.join(glue);
    return joinedWords;
}
const text1 = ['apple', 'banana'];
const glue = '---';
const textString = joinWords(text1, glue);
console.log(textString);

/* Write a function checkWord that:
Takes an array of strings words and a string word.
If word is found in the words array, returns true, otherwise — returns false. */
function checkWord(words, word) {
    let include = words.includes(word);
    return include;
}
const words = ['apple', 'pear'];
const word = 'apple';
let include = checkWord(words, word);
console.log(include);

/* Write a function getFirstPosition that:
Takes a values array and a value search value
Returns the index of the first value occurrence in the array.
Returns -1, if value isn't found in the array. */
function getFirstPosition(values, value) {
    let firstIndex = values.indexOf(value));;
    return firstIndex;
}
const values = ['apple', 'pear'];
const value = 'apple';
let firstIndex = getFirstPosition(values, value);
console.log(firstIndex);

