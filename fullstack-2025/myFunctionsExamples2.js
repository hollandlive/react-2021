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

