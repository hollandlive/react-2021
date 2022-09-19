document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');

    const start = document.querySelector('#start');
    const reset = document.querySelector('#reset');

    const cells = [1, 0, 1, , 1];

    cells.forEach(
        (cell) => {
            console.log({ cell });
        });
});




