const square = document.querySelectorAll('.square');
const mole = document.querySelectorAll('.mole');
const timeLeft = document.querySelector('#time-left');
let score = document.querySelector('#score'); //Will change hence using let rather than const

let result = 0;
let currentTime = timeLeft.textContent;

function randomSquare() {
    square.forEach(className => {
        className.classList.remove('mole')
    })
    let randomPosition = square[Math.floor(Math.random() * 9)];
    randomPosition.classList.add('mole');

    hitPosition = randomPosition.id
}

square.forEach(id => {
    id.addEventListener('mouseup', () => {
        if(id.id === hitPosition) {
            result = result + 1;
            score.textContent = result;
        }
    })
})

function moveMole() {
    let timerId = null;
    timerId = setInterval(randomSquare, 1000);
}

 moveMole();

function countDown() {
    currentTime--
    timeLeft.textContent = currentTime

    if(currentTime === 0) {
        clearInterval(timerId);
        alert("Game is now over, you got" + result)
    }
}

let timerId = setInterval(countDown, 1000);






































/* const square = document.querySelectorAll('.square');
const mole = document.querySelectorAll('mole');
const timeLeft = document.querySelector('#time-left');
let score = document.querySelector('#score');//Using let because score will change throughout the game obv.

let result = 0;
let currentTime = timeLeft.textContent;

function randomSquare() {
    square.forEach(className => {
        className.classList.remove('mole')
    })

let randomPosition = square[Math.floor(Math.random() * 9)];
randomPosition.classList.add('mole');

//assign the position of the randomPosition to hitPosition for us to use later
 hitPosition = randomPosition.id
}

square.forEach(id => {
    id.addEventListener('mouseup', () => {
        if(id.id === hitPosition) {
            result = result + 1;
            score.textContent = result;
        }
    })
})

function moveMole() {
    let timerId = null;
    timerId = setInterval(randomSquare, 1000)
}

 moveMole();

function countDown() {
    currentTime--
    timeLeft.textContent = currentTime;

    if(currentTime === 0) {
        clearInterval(timerId)
        alert("Time is up I'm afraid, Buddy! Your score is" + result)
    }
}

let timerId = setInterval(countDown, 1000) */