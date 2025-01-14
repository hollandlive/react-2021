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