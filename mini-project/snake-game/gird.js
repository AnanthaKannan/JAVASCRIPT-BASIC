const GIRD_SIZE = 21;

export function randomGirdPosition(){
    return {
        x: Math.floor(Math.random() * GIRD_SIZE) + 1,
        y: Math.floor(Math.random() * GIRD_SIZE) + 1
    }
}

export function outsideGird(position){
    return(
        position.x < 1 || position.x > GIRD_SIZE ||
        position.y < 1 || position.y > GIRD_SIZE
    )
}