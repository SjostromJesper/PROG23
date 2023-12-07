let posX = 0
let posY = 0

const speed = 3

const kvicken = document.querySelector('.move')

const maxX = document.body.clientWidth
const maxY = document.body.clientHeight

function moveKvicken() {
    kvicken.style.left = posX + 'px'
    kvicken.style.top = posY + 'px'

    posX += speed
    posY += speed

    if(posX >= maxX) {
        posX = 0
    }

    if(posY >= maxY) {
        posY = 0
    }




    setTimeout(requestAnimationFrame(moveKvicken), 10000)
}

requestAnimationFrame(moveKvicken)