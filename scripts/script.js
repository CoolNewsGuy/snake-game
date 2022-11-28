"use strict";

let apple = new Apple();
let snake = new Snake();
let container = new Container();

function moveSnake(e) {
    switch (e.key) {
        case "ArrowUp":
            snake.moveUp();
            break;

        case "ArrowDown":
            snake.moveDown();
            break;

        case "ArrowLeft":
            snake.moveLeft();
            break;

        case "ArrowRight":
            snake.moveRight();
    }
}

// event listeners
addEventListener("keydown", moveSnake);
