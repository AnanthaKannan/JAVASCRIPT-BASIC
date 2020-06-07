import { onSnake, expandSnake } from './snake.js'
import { randomGirdPosition } from './gird.js'

let food = getRandomFoodPosition()
const EXAPNSION_RATE = 1;

export function update(){
    if(onSnake(food)){
        expandSnake(EXAPNSION_RATE)
        food = getRandomFoodPosition()
    }
}

export function draw(gameBoard){
        const foodElement = document.createElement('div');
        foodElement.style.gridRowStart = food.x;
        foodElement.style.gridColumnStart = food.y;
        foodElement.classList.add('food');
        gameBoard.appendChild(foodElement)
}

function getRandomFoodPosition(){
    let newFoodPosition
    while (newFoodPosition == null || onSnake(newFoodPosition)) {
        newFoodPosition = randomGirdPosition();
    }
    return newFoodPosition;
}