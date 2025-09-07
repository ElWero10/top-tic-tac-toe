const game = (function() {
    let gameBoard = ["", "", "", "", "", "", "", "", ""];
    let running = false;
})();

// Alt way to build out different sections

const gameBoard = {
    board: ["", "", "", "", "", "", "", "", ""],
}

const players = {
    player1: "X",
    player2: "O",
}

const gameLogic = {
    checkWinner: function() {}
}