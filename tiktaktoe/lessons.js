// eloquent JS - lesson 1 exersises

// var length = 7;

// console.log('#');
// console.log('##');
// console.log('###');
// console.log('####');
// console.log('#####');
// console.log('######');
// console.log('#######');

let text = "#";

for (let i = 0; i < 5; i++) {
  text = text + text;
  console.log(text);
}

let lastName = 'aksen';
let firstName = 'artem';
let email = 'art@aksen.com';


fullName = lastName + '' + firstName;

console.log(fullName.length);
console.log(email.indexOf('@'));