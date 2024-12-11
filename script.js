let currentPlayer = "O";
let w = document.getElementById('winner');
let game = true;

let board = ["", "", "", "", "", "", "", "", ""];

function handleCellClick(index) {
    let cell = document.getElementById(`cell${index}`);

    if (game && board[index] === "") {
        cell.innerHTML = currentPlayer; 
        board[index] = currentPlayer; 

        if (checkWin()) {
            w.innerHTML = `${currentPlayer} is the winner!`;
            game = false;
            return;
        }

        if (board.every(cell => cell !== "")) {
            w.innerHTML = "It's a draw!";
            game = false;
            return;
        }

        currentPlayer = currentPlayer === "O" ? "X" : "O";
    }
}

function checkWin() {
    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    return winningCombinations.some(combination => {
        const [a, b, c] = combination;
        return (
            board[a] === currentPlayer &&
            board[b] === currentPlayer &&
            board[c] === currentPlayer
        );
    });
}

function Restart() {
    board = ["", "", "", "", "", "", "", "", ""]; 
    game = true; 
    currentPlayer = "O"; 
    w.innerHTML = ""; 
    for (let i = 0; i < 9; i++) {
        document.getElementById(`cell${i}`).innerHTML = "";
    }
}

for (let i = 0; i < 9; i++) {
    document.getElementById(`cell${i}`).onclick = () => handleCellClick(i);
}
