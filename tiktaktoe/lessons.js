document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM fully loaded and parsed');
  
  const restart = document.querySelector('#restart');
  const cells = document.querySelectorAll('[data-cell]')

  cells.forEach(cell => {
    cell.addEventListener('click', cellClicked)
  })

  function cellClicked () {
    console.log('clicccked');
  }

  restart.addEventListener('click', () => {
    console.log('Game to Restart');
  });
});





// eloquent JS - lesson 1 exersises

// var length = 7;

// console.log('#');
// console.log('##');
// console.log('###');
// console.log('####');
// console.log('#####');
// console.log('######');
// console.log('#######');

// let text = "#";

// for (let i = 0; i < 5; i++) {
//   text = text + text;
//   console.log(text);
// }

// let lastName = 'aksen';
// let firstName = 'artem';
// let email = 'art@aksen.com';


// fullName = lastName + '' + firstName;

// console.log(fullName.length);
// console.log(email.indexOf('@'));