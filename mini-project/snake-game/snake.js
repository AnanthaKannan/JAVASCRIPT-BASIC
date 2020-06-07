import { getInputDirection } from './input.js'

export const SNAKE_SPEED = 5; // move per second
const snakeBody = [{x:11, y:11}]
let newSegment = 0;

export function update(){
    addSegment();
    const inputDirection = getInputDirection();
    for(let i = snakeBody.length - 2; i>=0; i--){
        snakeBody[i+1] = { ...snakeBody[i] }
    }

    snakeBody[0].x += inputDirection.y;
    snakeBody[0].y += inputDirection.x;

    console.log(snakeBody)
}

export function draw(gameBoard){
    snakeBody.forEach((segment) =>{
        const snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = segment.x;
        snakeElement.style.gridColumnStart = segment.y;
        snakeElement.classList.add('snake');
        gameBoard.appendChild(snakeElement)
    })
}

export function expandSnake(amount){
    newSegment += amount;
}

export function onSnake(position, { ignoreHead = false} = {}){
    return snakeBody.some((segment, index) =>{
        if(ignoreHead && index == 0) return false
        return equalPosition(segment, position)
    })
}

export function equalPosition(pos1, pos2){
    return pos1.x === pos2.x && pos1.y === pos2.y
}

export function getSnakeHead(){
    return snakeBody[0]
}

export function snakeIntersection(){
    return onSnake(snakeBody[0], { ignoreHead: true})
}

function addSegment(){
    for(let i=0; i < newSegment; i++){
        snakeBody.push({...snakeBody[snakeBody.length -1]})
    }
    newSegment = 0;
}