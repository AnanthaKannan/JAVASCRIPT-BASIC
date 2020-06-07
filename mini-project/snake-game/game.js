import { SNAKE_SPEED, update as updateSnake, draw as drawSnake, getSnakeHead, snakeIntersection } from './snake.js'
import { update as updateFood, draw as drawFood } from './food.js'
import { outsideGird } from './gird.js';

let lastRenderTime = 0;
let gameOver = false;
const gameBoard = document.getElementById('game-board');

function main(currentTime){

    if(gameOver){
        if(confirm('You lost, press ok to restart')){
            window.location = '/'
        }
        return
    }

    window.requestAnimationFrame(main);
    const secoundSinceLastRender = (currentTime - lastRenderTime)/1000;
    if(secoundSinceLastRender < 1/SNAKE_SPEED) return

    console.log('render')
    lastRenderTime = currentTime;

    update();
    draw();
}

window.requestAnimationFrame(main);


function update(){
    updateSnake();
    updateFood();
    checkDeath();
}

function draw(){
    gameBoard.innerHTML = ''; // remove the old render
    drawSnake(gameBoard);
    drawFood(gameBoard);
}

function checkDeath(){
    gameOver = outsideGird(getSnakeHead()) || snakeIntersection()
}