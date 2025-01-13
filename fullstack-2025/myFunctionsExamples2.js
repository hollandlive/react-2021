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
