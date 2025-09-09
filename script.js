const game = (function() {
    const stats = document.querySelector(".stats");
    const board = document.querySelector(".board");
    const resetBtn = document.querySelector(".reset");
    resetBtn.addEventListener("click", restartGame);

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
        stats.textContent = `It is ${currentPlayer}'s turn.`;
    };

    function updateBoard(e) {
        let cellId = e.target.id;
        let cell = document.getElementById(cellId);

        if(cell.textContent === "") {
            cell.textContent = currentPlayer;
            gameBoard[cellId] = currentPlayer;
            checkWinner();
        } else {
           return;
        }
        
    };

    function restartGame() {
        board.innerHTML = "";
        stats.textContent = "";
        gameBoard = ["", "", "", "", "", "", "", "", ""];
        initializeGame();
    };

    function checkWinner() {
        let a;
        let b;
        let c;

        for(let i = 0; i < winCombinations.length; i++) {
            let combination = winCombinations[i];
            a = combination[0];
            b = combination[1];
            c = combination[2];
            
            if(gameBoard[a] == gameBoard[b] && gameBoard[b] == gameBoard[c] && gameBoard[b] != "") {
                stats.textContent = `${currentPlayer} is the winner!`;
                running = false;
                return;
            } else if (!gameBoard.includes("")) {
                stats.textContent = "It's a tie!";
                running = false;
                return;
            }
        }
        changePlayer();
    };

    function endGame() {
        if(!running) {
            
        }
    }

    function initializeGame() {
        running = true;
        stats.textContent = "It is X's turn.";
        currentPlayer = 'X';
        gameBoard = ["", "", "", "", "", "", "", "", ""];
        createBoard();
        addCellListeners();
    };

    initializeGame();
    return {createBoard, restartGame, gameBoard}
})();