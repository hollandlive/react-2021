let gameBoard = [1, 1, 1, 1, 1, 1, 1, 1, 1];
// computer starts the game and choose the random number 
function computerPlays(gameBoard) {
    for (let i = gameBoard.length - 1; i > 0; i--) {
        const computerDraws = Math.floor(Math.random() * (i + 1));
        gameBoard[computerDraws] = 0;

        // let computerNumber = delete gameBoard[computerDraws];
        return gameBoard;
    }
}
// human continues play and chose his number
function humanPlays(gameBoard) {
    let humanNumber = 6;
    gameBoard[humanNumber] = 'X';
    // delete gameBoard[humanNumber];
    //return humanNumber;
    return gameBoard;
}


console.log(computerPlays(gameBoard) + 'dd');
console.log(humanPlays(gameBoard) + 'num');




==============
let gameBoard = [1, 1, 1, 1, 1, 1, 1, 1, 1];

// Computer chooses a random available position
function computerPlays(gameBoard) {
    let availableMoves = gameBoard.map((val, index) => val === 1 ? index : null).filter(val => val !== null);

    if (availableMoves.length === 0) return gameBoard; // No more moves left

    let randomIndex = Math.floor(Math.random() * availableMoves.length);
    let computerMove = availableMoves[randomIndex];

    gameBoard[computerMove] = 0; // Computer marks the move
    return gameBoard;
}

// Human plays at a fixed position (replace with user input later)
function humanPlays(gameBoard) {
    let humanNumber = 6;
    if (gameBoard[humanNumber] === 1) {
        gameBoard[humanNumber] = 'X'; // Human marks the move
    }
    return gameBoard;
}

// Simulating turns
console.log(computerPlays(gameBoard));
console.log(humanPlays(gameBoard));
console.log(computerPlays(gameBoard));

===========
function getAvailableMoves(gameBoard) {
    let availableMoves = [];
    for (let i = 0; i < gameBoard.length; i++) {
        if (gameBoard[i] === 1) {
            availableMoves.push(i);
        }
    }
    return availableMoves;
}

// Computer chooses a random available position
function computerPlays(gameBoard) {
    let availableMoves = getAvailableMoves(gameBoard);

    if (availableMoves.length === 0) return gameBoard; // No more moves left

    let randomIndex = Math.floor(Math.random() * availableMoves.length);
    let computerMove = availableMoves[randomIndex];

    gameBoard[computerMove] = 0; // Computer marks the move
    return gameBoard;
}