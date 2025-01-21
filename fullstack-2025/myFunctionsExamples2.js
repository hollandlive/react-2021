/* Simple Maths Test
Let's recap how to work with numbers. 
Write the checkNumber function that takes an integer 
and checks it against three criteria:

Is this number positive?
Is this an even number?
Is this number divisible by 10?
The function should return an array with check results as booleans (true and false).
*/
function checkNumber(n) {
    let res = [];
    if (n > 0) {
        res[0] = true;
    }
    else {
        res[0] = false;
    }
    if (n % 2 === 0) {
        res[1] = true;
    } else {
        res[1] = false;
    }
    if (n % 10 === 0) {
        res[2] = true;
    } else {
        res[2] = false;
    }
    //let joinedString = res.join(', ');
    return res;
}
const res = checkNumber(20);
console.log(res);

/* 
Array of Numbers
Create the createArray function that:
Accepts an N integer.
Returns an array of integers from 1 to N inclusive.
💡 If N = 0, return an empty array, like so:
createArray(1); // [1]
createArray(3); // [1, 2, 3]
createArray(0); // [] */

function createArray(N) {
    let res = [];
    if (N === 0) {
        return res;
    } else {
        for (let i = 1; i <= N; i++) {
            res.push(i);
        }
        return res;

    }
}
const res11 = createArray(8);
console.log(res11);

/* Array Plus Array
Create a getArraysSum function that:
Accepts two arrays of numbers; both arrays should be of equal length.
Returns the sum of their elements. */

function getArraysSum(arr1, arr2) {
    // arr1 = [];
    // arr2 = [];
    if (arr1.length !== arr2.length) {
        return 0;
    } else {
        // return 10;
        // let res = [];
        let sum = 0;
        for (let i = 0; i < arr1.length; i++) {
            sum = sum + arr1[i] + arr2[i];

        }
        return sum;
    }
}
const arr3 = [10, 29];
const arr4 = [10, 29];

const res1 = getArraysSum(arr3, arr4);
console.log(res1);

/* Create the combineArrays function that:
Takes two number arrays of equal size,* first and second
Returns a number array, where each element is a sum of first[i] and second[i]. */
function combineArrays(first, second) {
    if (first.length !== second.length) {
        return 0;
    } else {
        let sum = [];
        for (let i = 0; i < second.length; i++) {
            sum[i] = first[i] + second[i];

        }
        return sum;
    }
}
const arr3 = [10, 29];
const arr4 = [10, 29];

const res1 = combineArrays(arr3, arr4);
console.log(res1);

/* Implement the doublePower function that:
Takes a number array currentPowers
Returns a new array of doubled currentPowers numbers.
💡 If currentPowers is empty, the function should return an empty array: If the currentPowers is empty, return an empty array; otherwise, create an empty array for the results.
Use a for loop to iterate over the array from 0 to currentPowers.length (not inclusive).
At every iteration, multiply the i-th element of the currentPowers by 2 and add it to the new array.
Use brackets (e.g., currentPowers[i]) to get the i-th element of the array. */
function doublePower(currentPowers) {
    if (currentPowers.length === 0) {
        let currentPowers = [];
        return currentPowers;
    } else {
        let res = [];
        for (let i = 0; i < currentPowers.length; i++) {
            res[i] = currentPowers[i] * 2;

        }
        return res;
    }
}

const res1 = [21, 23];
const res2 = doublePower(res1);
console.log(res2);

/* make stickers
Takes an integer detailsCount and a string robotPart.
Returns an array of strings formatted as {{robotPart}} detail #{{n}} (e.g., Hand detail #1).
💡 If detailsCount = 0, return an empty array, like so: 
makeStickers(3, 'Body'); // ['Body detail #1', 'Body detail #2', 'Body detail #3']
makeStickers(4, 'Head'); // ['Head detail #1', 'Head detail #2', 'Head detail #3', 'Head detail #4']
makeStickers(0, 'Foot'); // []
Hint
Create an empty array.
Set up a for loop to iterate from 1 up to and including detailsCount.
In each iteration, add a string to the array that combines robotPart and the current i in the specified format. Do this using the push method.
To construct the string, use interpolation. This involves combining robotPart and the current i. Remember to use the backticks ` */
function makeStickers(detailsCount, robotPart) {
    let readyStickers = [];
    for (let i = 1; i <= detailsCount; i++) {
        readyStickers.push(`${robotPart} detail #${i}`);
    }
    return readyStickers;
}
res2 = makeStickers(4, "body");
console.log(res2);

/*Decrypt Message
Create the decryptMessage function that:
Accepts the message string,
Returns a string with the message characters in reverse */
function decryptMessage(message) {
    let res = '';
    for (let ch = message.length - 1; ch >= 0; ch--) {
        res = res + message[ch];
    }
    return res;
}
mes = decryptMessage('sdewde');
console.log(mes);

/* get drinks
A wedding host wants to entertain his guests. They set a rule: 
for each guest who comes makes a toast, all guests have to drink 
for the health of the newlyweds. For instance...
With the arrival of the first guest, only 1 drink is needed.
When the second guest arrives, 2 more drinks are needed.
The third guest — 3 additional drinks, and so on. . Create the getDrinks function that:
Takes the number of wedding guests — numberOfGuests.
Returns the total number of drinks.
💡 If there are 5 guests, then we need 15 drinks in 
total (1 + 2 + 3 + 4 + 5 = 15); and if 10, then 55 drinks 
(1 + 2 + 3 + ... + 10 = 55).*/
function getDrinks(numberOfGuests) {
    //let drinksQuantity = 0;
    let sum = 0;
    for (let i = 1; i <= numberOfGuests; i++) {
        sum += i;
    }
    return sum;
}
const numberOfGuests = 3;
const res22 = getDrinks(numberOfGuests);
console.log(res);

/* Get Drinks With Step
Our drinking game was a bit too much for the guests, 
o the host changed the rules. He asked the newlyweds for a step number (a positive integer), and used it to limit the number of toasts. Now, the toasts are made by:
The first guest.
The guest who arrives at the given interval (step).
Each guest participates in the drinking, e.g.:
If step = 1, every incoming guest makes a toast — as before.
If step = 2, the 1st, 3rd, 5th guests, and so on, make toasts.
If step = 3, it's the 1st, 4th, 7th, 10th guests, and so forth. */
function getDrinksWithStep(numberOfGuests, step) {
    //let drinksQuantity = 0;

    let sum = 0;
    for (let i = 1; i <= numberOfGuests; i += step) {
        sum += i;
    }
    return sum;
}
const step = 3
const numberOfGuests = 18;
const res = getDrinksWithStep(numberOfGuests, step);
console.log(res);

/*Is Sorted
Let's teach our robots how to sort boxes in the warehouse. 
All boxes have numbers, and the robots learn to sort them in 
ascending order. But sorting isn't easy, and sometimes mistakes 
happen. Therefore, we'll check whether the robot sorted the boxes 
correctly.
Create the isSorted function that:
Accepts the array of numbers — boxNumbers/
Returns true if all numbers are in ascending order or false otherwise.
💡 Take into account the fact that numbers in the array can repeat.*/
function isSorted(boxNumbers) {

    for (let i = 1; i < boxNumbers.length; i++) {
        if (boxNumbers[i] < boxNumbers[i - 1]) {
            return false;
        }
    }
    return true;
}
const boxNumbers = [0, 1, 9, 4, 5]
const res223 = isSorted(boxNumbers);
console.log(res223);

/* Remove Vowels
Write the removeVowels function that:
Takes the doc string.
Returns it with all vowels removed.
💡 Vowels are the letters a, e, i, o, u, y in 
lowercase and uppercase. */
function removeVowels(doc) {
    let result = '';
    for (let i = 0; i < doc.length; i++) {
        if (
            doc[i] !== 'a' &&
            doc[i] !== 'e' &&
            doc[i] !== 'i' &&
            doc[i] !== 'o' &&
            doc[i] !== 'u' &&
            doc[i] !== 'y' &&
            doc[i] !== 'A' &&
            doc[i] !== 'E' &&
            doc[i] !== 'I' &&
            doc[i] !== 'O' &&
            doc[i] !== 'U' &&
            doc[i] !== 'Y'
        ) { result += doc[i]; };
    }
    return result;
}
const doc51 = 'ede dscwcw';
console.log(removeVowels(doc51));

/*Compare Robots
After testing the robots and upgrading the slower ones, Mate Post delivery service is interested in purchasing a dozen robots from us for citywide deliveries. They need robots capable of carrying the highest total weight per day.
Create the compareRobots function** that takes two arrays:

firstRobotResults — the weight of goods delivered in a day by the first robot.
secondRobotResults — the weight of goods delivered in a day by the second robot.
Determine which robot can carry more weight and return the corresponding recommendation:

'First robot for sale!', if the first robot carries more weight.
'Second robot for sale!', if the second robot carries more weight.
'Both robots for sale!', if the robots carry the same weight.
Example
compareRobots([12, 4, 13], [1, 1, 4, 5, 12]); // 'First robot for sale!' (29 > 23)
compareRobots([9, 7, 9], [1, 3, 4, 5, 12]); // 'Both robots for sale!' (25 = 25)
compareRobots([1, 3, 4], [1, 1, 4, 5]) */
function compareRobots(firstRobotResults, secondRobotResults) {
    let sumFirstRobot = 0;
    let sumSecondRobot = 0;
    for (let i = 0; i < firstRobotResults.length; i++) {
        sumFirstRobot = sumFirstRobot + firstRobotResults[i];
    }
    for (let i = 0; i < secondRobotResults.length; i++) {
        sumSecondRobot = sumSecondRobot + secondRobotResults[i];
    }
    if (sumFirstRobot > sumSecondRobot) {
        return 'First robot for sale!';
    } else if (sumFirstRobot < sumSecondRobot) {
        return 'Second robot for sale!';
    } else {
        return 'Both robots for sale!';
    }
}
res1111 = compareRobots([9, 7, 9], [1, 3, 4, 5, 12, 17]);
console.log(res1111);
/* Get Location
We're upgrading our robots! They can now convert motion commands into signals and move accordingly:

'forward' translates to y + 1.
'back' to y - 1.
'right' to x + 1.
'left' to x - 1.
But it would be great if the robot could track its location without GPS. So, let's create the getLocation function that accepts two parameters:
coordinates — an array of initial coordinates in the [x, y] format.
commands — an array with a history of commands like ['command1', 'command2', 'command3', ...].
The function should return an array of final coordinates ([x, y]) after moving according per commands.

Examples:
For coordinates = [2, 1] and commands = ['left', 'back', 'back']:
Coordinates after the first command are: [1, 1] (1 step left).
After the second command — [1, 0] (1 step back).
After the third command — [1, -1] (1 step back).
The result is the [1, -1] array.
Or, in code:
getLocation([0, 0], ['forward', 'right']); // [1, 1]
getLocation([2, 3], ['back', 'back', 'back', 'right']); // [3, 0]
getLocation([0, 5], ['back', 'back', 'back', 'right', 'left', 'forward']); // [0, 3] */
function getLocation(coordinates, commands) {
    let x = coordinates[0];
    let y = coordinates[1];
    for (let i = 0; i < commands.length; i++) {
        if (commands[i] === 'left') {
            x = x - 1;
        } else if (commands[i] === 'right') {
            x = x + 1;
        } else if (commands[i] === 'forward') {
            y = y + 1;
        } else if (commands[i] === 'back') {
            y = y - 1;
        } else {
            return 'wrong command';
        }

    }
    return [x, y];
}
let coordinates = [10, 20];
console.log(getLocation(coordinates, ['st', 'ss']))