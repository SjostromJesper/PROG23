let winData = 0
let lossData = 0
let equalData = 0

let computerOption = null
let playerOption = null

const rock = document.querySelector('.rock')
rock.addEventListener('click', () => {
    playerOption = 0
    console.log('du valde sten!')
    createWeaponElement('images/rock.svg')

    
})


const scissors = document.querySelector('.scissors')
scissors.addEventListener('click', () => {
    playerOption = 1
    createWeaponElement('images/scissors.svg')
})


const paper = document.querySelector('.paper')
paper.addEventListener('click', () => {
    playerOption = 2
    createWeaponElement('images/paper.svg')
})

function createWeaponElement(option) {
    clearArena()

    

    const computer = document.createElement('img')
    computer.src = getRandomOption()
    computer.classList = 'computer-weapon weapon'
    document.querySelector('.arena').appendChild(computer)

    calculateScore()

    const target = document.createElement('img')
    target.src = option
    target.classList = 'player-weapon weapon'
    document.querySelector('.arena').appendChild(target)

    
}

const getRandomOption = () => {

    const r = Math.floor(Math.random() * 3)

    if(r === 0) {
        computerOption = 0
        return 'images/rock.svg'
    }
    if(r === 1) {
        computerOption = 1
        return 'images/scissors.svg'
    }
    if(r === 2) {
        computerOption = 2
        return 'images/paper.svg'
    }
}

const clearArena = () => {
    document.querySelector('.arena').innerHTML = ''
}

const calculateScore = () => {
    announceMessage = document.createElement('h2')
    announceMessage.classList = 'announcer'
    document.querySelector('.arena').appendChild(announceMessage)

    const announcer = document.querySelector('.announcer')

    if(computerOption === playerOption) {
        equalData++
        announcer.innerHTML = 'OAVGJORT'
    }
    else if(playerOption === 0 && computerOption === 1) {
        winData++
        announcer.innerHTML = 'VINST'
    }
    else if(playerOption === 1 && computerOption === 2) {
        winData++
        announcer.innerHTML = 'VINST'
    }
    else if(playerOption === 2 && computerOption === 0) {
        winData++
        announcer.innerHTML = 'VINST'
    }
    else {
        lossData++
        announcer.innerHTML = 'FÖRLUST'
    }


    const wins = document.querySelector('.wins')
    const losses = document.querySelector('.losses')
    const equals = document.querySelector('.equals')

    wins.innerHTML = 'vinster: ' + winData
    losses.innerHTML = 'förluster: ' + lossData
    equals.innerHTML = 'oavgjort: ' + equalData
}
