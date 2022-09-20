document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');

    const start = document.querySelector('#start');
    const reset = document.querySelector('#reset');



    cells.forEach(
        (cell) => {
            cell.addEventListener('click', value());
        });

    function value() {
        console.log(cells);
    }

    let cells = [1, 2, 3];
});




