
let dice = ['red', 'orange', 'yellow', 'green'];
let invalidRed = false;
let invalidOrange = false;
let invalidYellow = false;
let invalidGreen = false;
let invalidBlue = false;
let invalidPurple = false;


document.querySelector('.clearer').addEventListener('click', () => {
    invalidRed = false;
    invalidOrange = false;
    invalidYellow = false;
    invalidGreen = false;
    invalidBlue = false;
    invalidPurple = false;
    console.log("cleared")
})


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

function rollDice (){
    
    for(i = 1; i <= 4; i++){
        colorNumber = Math.trunc(Math.random()*6)+1;

        if (colorNumber == 1) {
            if(invalidRed){
                console.log("ignored red")
                continue;
            }
            dice[i] = 'red';
        } else if (colorNumber == 2) {
            if(invalidOrange){
                console.log("ignored orange")
                continue;
            }
            dice[i] = 'orange';
        }else if (colorNumber == 3) {
            if(invalidYellow){
                console.log("ignored yellow")
                continue;
            }
            dice[i] = 'yellow';
        }else if (colorNumber == 4) {
            if(invalidGreen){
                console.log("ignored green")
                continue;
            }
            dice[i] = 'green';
        }else if (colorNumber == 5) {
            if(invalidBlue){
                console.log("ignored blue")
                continue;
            }
            dice[i] = 'blue';
        }else if (colorNumber == 6) {
            if(invalidPurple){
                console.log("ignored purple")
                continue;
            }
            dice[i] = 'purple';
        }
    }
    
    for(i = 1; i < dice.length; i++){
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

rollButton.addEventListener('click', () => {
    rollDice();
    document.querySelector('.container__loading').style.display = 'block';
    audio.play();
    setTimeout(() => {
        document.querySelector('.container__loading').style.display = 'none';
    }, 1700);
    console.log("rolled")
})




