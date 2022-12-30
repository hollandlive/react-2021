document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');

    // const start = document.getElementById('start');
    // console.log(start);
    // const reset = document.querySelector('reset');

    let cells = [
        0, 1, 2,
        3, 4, 5,
        6, 7, 8
    ]

    const winningCondtitions = [
        012, 345,
        678, 036,
        147, 258,
        048, 246
    ]


    document.addEventListener("click", function () {

        let computerStartCell = Math.floor(Math.random() * cells.length);

        activeClass = this.getElementById(cells[computerStartCell]);
        activeClass.classList.add("active");

        console.log(cells[computerStartCell]);

        let board = cells.splice(computerStartCell, 1);
        console.log('formatted cells = ', cells);

        switchPlayer();

        return cells;

    });




    function switchPlayer() {
        document.addEventListener("click", function () {

        });
    }

    console.log(cells);


    // startGame() {
    //     let computerStartCell = Math.floor(Math.random() * cells.length);

    //     return computerStartCell;
    // }

    // });




    //cells.splice(computerStartCell, 1);
    //console.log('formatted cells = ', cells);



    // console.log(startGame());


    let key = document.querySelectorAll(".cell");
    for (item of key) {
        let a = item.getAttribute("data-cell");
        console.log('this is ', a);
        const note = document.querySelector('.cell');
        note.style.backgroundColor = 'yellow';


    }



    //console.log(cell);


    // array.push - array.pop disruptive methods - it alters the initial value of a variable
    // push - adds at the end, pop - distracts the last one

    // let result = cells.push(11);
    // result = cells.pop();

    // let result = cells.join('');


    //========================

    // let playerTurn = Math.floor(Math.random() * cells.length);

    // // console.log(result);
    // console.log(playerTurn, cells[playerTurn]);

    // cells.splice(playerTurn, 1);

    // console.log('last', cells);

    //========================





    //result was initially defined - but we can remove 'let' and redifine it



    // let html = `
    // <h2>the blog $(author)</h2>
    // <p>Hello $(title)</p>
    // `;
    // console.log(html); - template string
});





