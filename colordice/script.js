

let dice = ['red', 'orange', 'yellow', 'green'];
let invalidRed = false;
let invalidOrange = false;
let invalidYellow = false;
let invalidGreen = false;
let invalidBlue = false;
let invalidPurple = false;

const showWords = [
    "FEELING LUCKY?",
    "WHAT COLOR WILL IT BE?",
    "FINGERS CROSSED...",
    "GOOD LUCK!"
]


document.querySelector('.red').addEventListener('click', () => {
    invalidRed = true;
    console.log("no red should appear")
})

document.querySelector('.orange').addEventListener('click', () => {
    invalidOrange = true;
    console.log("no orange should appear")

})
document.querySelector('.yellow').addEventListener('click', () => {
    invalidYellow = true;
    console.log("no yellow should appear")

})
document.querySelector('.green').addEventListener('click', () => {
    invalidGreen = true;
    console.log("no green should appear")

})
document.querySelector('.blue').addEventListener('click', () => {
    invalidBlue = true;
    console.log("no blue should appear")

})
document.querySelector('.purple').addEventListener('click', () => {
    invalidPurple = true;
    console.log("no purple should appear")

})

document.addEventListener('keydown', function (e) {
    if (e.key === '1') {
        invalidRed = true;
        console.log("no red should appear")
    }
    else if (e.key === '2') {
        invalidOrange = true;
        console.log("no orange should appear")
    }
    else if (e.key === '3') {
        invalidYellow = true;
        console.log("no yellow should appear")
    }
    else if (e.key === '4') {
        invalidGreen = true;
        console.log("no green should appear")
    }
    else if (e.key === '5') {
        invalidBlue = true;
        console.log("no blue should appear")
    }
    else if (e.key === '6') {
        invalidPurple = true;
        console.log("no purple should appear")
    }
})

function rollDice() {

    for (i = 1; i <= 4;) {
        colorNumber = Math.trunc(Math.random() * 6) + 1;

        if (colorNumber == 1) {
            if (invalidRed) {
                console.log("ignored red")
                continue;
            }
            dice[i] = 'red';
            i++;
        } else if (colorNumber == 2) {
            if (invalidOrange) {
                console.log("ignored orange")
                continue;
            }
            dice[i] = 'orange';
            i++;
        } else if (colorNumber == 3) {
            if (invalidYellow) {
                console.log("ignored yellow")
                continue;
            }
            dice[i] = 'yellow';
            i++;
        } else if (colorNumber == 4) {
            if (invalidGreen) {
                console.log("ignored green")
                continue;
            }
            dice[i] = 'green';
            i++;
        } else if (colorNumber == 5) {
            if (invalidBlue) {
                console.log("ignored blue")
                continue;
            }
            dice[i] = 'blue';
            i++;
        } else if (colorNumber == 6) {
            if (invalidPurple) {
                console.log("ignored purple")
                continue;
            }
            dice[i] = 'purple';
            i++;
        }
    }

    for (i = 1; i < dice.length; i++) {
        document.querySelector(`.dice--${i}`).style.backgroundColor = `${dice[i]}`
    }
    invalidRed = false;
    invalidOrange = false;
    invalidYellow = false;
    invalidGreen = false;
    invalidBlue = false;
    invalidPurple = false;
}

const audio = new Audio();
audio.src = 'audio/shake.MP3';
const rollButton = document.querySelector('.roll-again')

rollButton.addEventListener('click', rolled = () => {
    rollDice();
    let wordSelector = Math.trunc(Math.random() * showWords.length);
    document.querySelector('.loading__text').textContent = showWords[wordSelector];
    document.querySelector('.container__loading').style.display = 'block';
    audio.play();
    setTimeout(() => {
        document.querySelector('.container__loading').style.display = 'none';
    }, 1700);
    console.log("rolled")
})
diceNumber = document.querySelector('.choices__number').value;

function changeDice() {
    diceNumber = document.querySelector('.choices__number').value;
    if (diceNumber === '3') {
        rolled();
        document.querySelector('.dice--4').style.display = 'none';
        document.querySelector('.loading__dice .dice--4').style.display = 'none';
    }
    if (diceNumber === '4') {
        rolled();
        document.querySelector('.dice--4').style.display = 'block';
        document.querySelector('.loading__dice .dice--4').style.display = 'block';
    }
}



