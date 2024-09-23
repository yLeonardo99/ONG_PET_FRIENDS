'use strict';

document.addEventListener('DOMContentLoaded', function () {

    let squares = document.querySelectorAll(".square");

    squares.forEach(function (square) {
        square.addEventListener('click', handleClick);
    });
});

function handleClick(event) {

    let square = event.target;
    let position = square.id;

    //Alguém ganhou?
    
    if (handleMove(position)) {

        //Atualize o score

        if (playerTime === 0) {
            let dogScoreVar = localStorage.getItem("dogScore");
            dogScoreVar++;
            localStorage.setItem("dogScore", dogScoreVar);
        } else {
            let catScoreVar = localStorage.getItem("catScore");
            catScoreVar++;
            localStorage.setItem("catScore", catScoreVar);
        }
        let titleScore = document.getElementById("titleScore");
        titleScore.innerText = 'Cachorro ' + localStorage.getItem("dogScore") + ' x ' + localStorage.getItem("catScore") + ' Gato';

        //Mostre a tela de GameOver

        setTimeout(function () {
            var gameOverScreen = document.getElementsByClassName("gameOverScreen")[0];
            gameOverScreen.style.display = "flex";
            var winnerDeclaration = document.getElementById("winnerDeclaration");
            winnerDeclaration.innerHTML = winner[playerTime] + ' Ganhou!<br>Agora outro pet primeireiro.';
        }, 10);
    }

    updateSquare(position);
}

function updateSquare(position) {

    let square = document.getElementById(position.toString());
    let symbol = board[position];

    square.innerHTML = '<div id=\'' + symbol + '\'></div>';
}

function resetGame() {
    let gameOverScreen = document.getElementsByClassName("gameOverScreen")[0];
    gameOverScreen.style.display = "none";
    let winnerDeclaration = document.getElementById("winnerDeclaration");
    winnerDeclaration.innerHTML = "";

    board = ['', '', '', '', '', '', '', '', ''];
    if (playerTime == 0) {
        playerTime = 1;
    } else {
        playerTime = 0;
    };
    gameOver = false;

    let squares = document.querySelectorAll(".square");

    squares.forEach(function (square) {
        let position = square.id;
        let symbol = board[position];

        if (symbol == '') {
            square.innerHTML = '<div id=\'' + symbol + '\'></div>';
        }
    });
};