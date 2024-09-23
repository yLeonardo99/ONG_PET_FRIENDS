'use strict';

// Declaração de Variaveis;

let board = ['', '', '', '', '', '', '', '', ''];
let playerTime = 0;
let symbols = ['o', 'x'];
let gameOver = false;

let winner = ["Cachorro", "Gato"];

let winStates = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

localStorage.setItem("dogScore", 0);
localStorage.setItem("catScore", 0);

function handleMove(position) {

    if (gameOver) {
        return;
    }

    if (board[position] == '') {
        board[position] = symbols[playerTime];

        gameOver = isWinOrTie();

        if (!gameOver) {
            playerTime = playerTime == 0 ? 1 : 0;
        }

        return gameOver;
    }
}

function isWinOrTie() {

    for (let i = 0; i < winStates.length; i++) {

        let seq = winStates[i];

        let pos1 = seq[0];
        let pos2 = seq[1];
        let pos3 = seq[2];

        if (board[pos1] == board[pos2] && board[pos1] == board[pos3] && board[pos1] != '') {
            return true;
        }
    }

    function isFilled(space) {
        return space != '';
    }

    if (board.every(function (space) {
        return space != '';
    })) {
        setTimeout(function () {
            let gameOverScreen = document.getElementsByClassName("gameOverScreen")[0];
            gameOverScreen.style.display = "flex";
            let winnerDeclaration = document.getElementById("winnerDeclaration");
            winnerDeclaration.innerHTML = 'Ninguém ganhou!<br>Agora é outro pet primeiro.';
        }, 10);
    };

    return false;
}