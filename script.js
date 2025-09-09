const game = (function() {
    const stats = document.querySelector(".stats");
    const board = document.querySelector(".board");
    const resetBtn = document.querySelector(".reset");

    let gameBoard = ["", "", "", "", "", "", "", "", ""];
    let running = false;
    let currentPlayer = "X";
    let winCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    function createBoard() {
        for(let i = 0; i < gameBoard.length; i++) {
            let cell = document.createElement("div");
            cell.classList.add("cell");
            board.appendChild(cell);
        }
    }

    function addCellListeners() {
        let cells = Array.from(board.children);
        cells.forEach((cell, index) => {
            cell.setAttribute('id', index);
            cell.addEventListener("click", updateBoard)
        })
    };

    function changePlayer() {
        currentPlayer == "X" ? currentPlayer = "O" : currentPlayer = "X";
    };

    function updateBoard(e) {
        let cellId = e.target.id;
        let cell = document.getElementById(cellId);
        cell.textContent = currentPlayer;
        changePlayer();
        checkWinner();
    };

    function checkWinner() {
        
    };

    function restartGame() {};

    function updateStats() {};

    function initializeGame() {
        createBoard();
        addCellListeners();
    };

    initializeGame();
    return {createBoard}
})();