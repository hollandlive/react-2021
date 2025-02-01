/*refactor program
Format the program by following these rules:

Each variable should be defined in a new line using a let or const keyword.
Modify variable names so that they follow the camelCase style. Make sure they are short and meaningful, e.g.:
nameofaperson --> userName;
neweventgetfromserver --> newEvent;
thedateofthenewevent --> eventDate;
eventtextfrommessage --> eventMessage.
Place a single space before and after =;
Make sure all variables are properly formatted, e.g.:
elonmusk --> Elon Musk;
сreatedAnewCar --> created a new car;
2019,10,10 --> 2019.10.10.*/
const userName = 'Elon Musk';
const newEvent = 'created a new car';
const eventDate = '2019.10.10';
const eventMessage = `${userName} ${newEvent} in ${eventDate}`;

function getNumbersEquality(a, b) {
    if (a > b) {
        return 'a > b';
    }

    if (a < b) {
        return 'a < b';
    }

    return 'a and b are equal';
}

/*remove else


In this task, everything is already written for us. We only need to refactor the code! Your task is to:

Remove the declared variable let result. You're not allowed to replace it by declaring new ones.
Get rid of the keyword else and replace it with return, making sure that the logic of the function is not affected.
Do not use the ternary operator.*/
/**
 * @param {number} a
 * @param {number} b
 *
 * @returns {string}
 */
function getNumbersEquality(a, b) {
    if (a > b) {
        return 'a > b';
    }

    if (a < b) {
        return 'a < b';
    }

    return 'a and b are equal';
}

/*The isEven function takes a number as its argument. 
Check if the number is even (is divisible by 2 without a remainder). 
Return true if the number is even and false if the number is odd. 
Remember that fractional numbers aren't even. */
function isEven(number) {
    if (number % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
}

