document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');

    const start = document.querySelector('#start');
    const reset = document.querySelector('#reset');

    const cells = [
        0, 1, 2,
        3, 4, 5,
        6, 7, 8
    ]
    cells[8] = 9;
    console.log(cells[8]);


    // let html = `
    // <h2>the blog $(author)</h2>
    // <p>Hello $(title)</p>
    // `;
    // console.log(html);
});




