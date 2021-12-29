document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM fully loaded and parsed');

  const restart = document.querySelector('#restart');
  const cells = document.querySelectorAll('[data-cell]');

  const activeCell = false;

  let gameBoard =
    ['x', '0', 'x',
      'x', '0', 'x',
      '0', 'x', '0'];

  // looping through cells - if clicked ONCE only - check it
  cells.forEach(cell => {
    cell.addEventListener('click', cellClicked, { once: true });
    function cellClicked() {

      let isActive = 'player_0';

      let render = cell.classList.add(isActive);
    }
  })

  class Game {
    constructor() {

    }
  }



  // test restart button
  restart.addEventListener('click', () => {
    console.log('Game to Restart');
  });

  let board = [];
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