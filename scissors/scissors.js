// start = document.getElementById('Start');
// start.addEventListener("click", (e) => {
//     console.log('nnn');
// });

// document.addEventListener('DOMContentLoaded', (event) => {
//     console.log('DOM fully loaded and parsedd')
// })


const btn = document.querySelector('#start');
console.log(btn);
const playerChoice = document.querySelector('#playerChoice');
btn.onclick = (event) => {
    e.preventDefault();
    // show the selected index
    alert(playerChoice.selectedIndex);
};

