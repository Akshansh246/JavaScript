let canvas = document.querySelector('canvas')
let pen = canvas.getContext('2d');

let snakeCells = [[0,0]];
let cell = 50
let gameOver = false
let direction = 'right'

let randomCell = generateRandomCell()

let id = setInterval(()=>{
    draw() 
    update()
},100);


document.addEventListener('keydown',(e)=>{
    if(e.key === 'ArrowUp'){
        direction='up'
    }
    else if(e.key === 'ArrowDown'){
        direction = 'down'
    }
    else if(e.key === 'ArrowLeft'){
        direction = 'left'
    }
    else direction = 'right'
})

function draw() {
    if(gameOver === true){
        clearInterval(id)
        return
    }
    pen.clearRect(0,0,1100,600)
    for(let i of snakeCells){
        pen.fillStyle = 'red'
        pen.fillRect(i[0], i[1], cell, cell)
    }
    
    pen.fillStyle = 'yellow'
    pen.fillRect(randomCell[0], randomCell[1],cell, cell)
}


function update() {
    let headX = snakeCells[snakeCells.length-1][0];
    let headY = snakeCells[snakeCells.length-1][1]

    let newX, newY
    if(direction === 'right'){
        newX = headX + cell
        newY = headY
        if (newX === 1100) {
            gameOver = true
            printGameOver()
        }
    }
    else if(direction === 'left'){
        newX = headX - cell
        newY = headY
        if (newX < 0) {
            gameOver = true
            printGameOver()
        }
    }else if (direction === 'up') {
        newX = headX
        newY = headY - cell
        if (newY < 0) {
            gameOver = true
            printGameOver()
        }
    }else{
        newX = headX
        newY = headY + cell
        if (newY === 600) {
            gameOver = true
            printGameOver()
        }
    }

    snakeCells.push([newX, newY])

    if (newX === randomCell[0] && newY === randomCell[1]) {
        randomCell = generateRandomCell()
    } 
    else{
        snakeCells.shift()
    }
    
}
function generateRandomCell(){
    return[
        Math.round((Math.random()*1050)/cell)*cell,
        Math.round((Math.random()*550)/cell)*cell,
    ]
}


function printGameOver(){
    pen.fillStyle = 'red'
    pen.font = '40px sans-serif'
    pen.fillText('GAME OVER😒', 100, 100)
}