

const randomNumber = parseInt(Math.random()*10 +1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let previosGuess = [];
let player = true;

let numGuess = 1;


if(player){
    submit.addEventListener('click',function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess();
    })
    }

function validateGuess(guess){

    if(isNaN(guess)){
        alert(`Please Enter a Valid Number`)
    } else if (guess < 1){
        alert(`Plese Enetr a number more then one`)
    } else if (guess > 10){
        alert(`Plese Enter a number less then ten`)
    } else{
        previosGuess.push(guess)
        if(numGuess===11){
            displayGuess(guess);
            displayMessage(`Game Over : Result was is ${randomNumber}`);
            endGame();
        }
        else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}



function checkGuess(guess){
if(guess === randomNumber){
    displayMessage(`You Guessed it right`)
    endGame();
} else if(guess < randomNumber){
    displayMessage(`Number is too low`)
} else if(guess > randomNumber){
    displayMessage(`Number is too High`)
    
}
}


function CleanUp(guess){
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;  
}


function displayMessage(message){
lowOrHi.innerHTML = `<h3>${message}</h3>`;
    
}


function validateGuess(guess){

    
}


function endGame(){

    
}


function newGame(){

    
}


