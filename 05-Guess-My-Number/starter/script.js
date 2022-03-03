'use strict';
//Random number setter
let secretNumber = Math.trunc(Math.random()*20)+1;

//Score variable
let score = 20;
let highScore = 0;

const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}

//Execute changes to DOM when conditions are met at Click
document.querySelector('.check').addEventListener
('click', function() {
    const guess = Number(document.querySelector('.guess').value); //Collects input value
    console.log(guess, typeof guess);

    if(!guess) {
        
        //When there is no input
        displayMessage('No number!');
        //when player wins
    } else if (guess === secretNumber){
        document.querySelector('.number').textContent = secretNumber;
        displayMessage('Correct! You win!');
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        //set high score
        if (highScore < score){
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
        
        //When number is wrong
    } else if (guess !== secretNumber ) {
        console.log(score);
        if (score > 1 ) {
           displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
            score --;
            document.querySelector('.score').textContent = 
            score;
        } else {
            displayMessage("You've lost the game!");
            document.querySelector('.score').textContent = 0;
        }
        //When guess is too small
    } /*else if (guess < secretNumber) {
        console.log(score);
        if (score > 1 ) {
            document.querySelector('.message').textContent =
            'Guess is too small!';
            score --;
            document.querySelector('.score').textContent = 
            score;
        } else {
            document.querySelector('.message').textContent =
            "You've lost the game!";
            document.querySelector('.score').textContent = 0;
        }
    }*/
});

//Coding Challenge - Again button to restart loop

//select again
document.querySelector('.again').addEventListener('click', function(){
    //Reset score
    score = 20;
    //Reset score display
    document.querySelector('.score').textContent = score;
    //Reset number
    secretNumber = Math.trunc(Math.random()*20)+1;
    //Reset number display
    document.querySelector('.number').textContent = '?';
    //change background
    document.querySelector('body').style.backgroundColor = '#222';
    //box size
    document.querySelector('.number').style.width = '15rem';
    //message
    displayMessage('Start guessing...');
    //reset input?
    document.querySelector('.guess').value = '';
});