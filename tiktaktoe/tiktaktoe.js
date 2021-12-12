// add event listener on html (DOM) loaded and parsed because JS is in <head>
// Example from developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM fully loaded and parsed');
  
  const reset = document.querySelector('#reset');
  const player_x = document.querySelector('#player_x');
  const player_0 = document.querySelector('#player_0');


  reset.addEventListener('click', () => {
    console.log('preseed');
  });

  player_x.addEventListener('click', () => {
    console.log('player_x');
  });

  player_0.addEventListener('click', () => {
    console.log('player_0');
  });
});







