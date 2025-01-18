'use strict';
let secretNumber = Math.trunc(Math.random()*20+1);
let score = 20;
let highScore = 0;
const displayMessage = function(message) {
    document.querySelector('.message').textContent = message

}
document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    if(!guess){
        // document.querySelector('.message').textContent = "No Number !";
        displayMessage("No Number !");
    }
    else if (guess === secretNumber){
        // document.querySelector('.message').textContent = "Correct Answer 🎉";
        displayMessage("Correct Answer 🎉");
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor= "#33c926";
        document.querySelector('body').style.width= "30rem";
        if(score > highScore){
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    }
    //                                                  -----BEFORE REFACTORING OF CODE----- 
    // else if(guess > secretNumber){
    //     if(score > 1){
    //     document.querySelector('.message').textContent = "Entered Value is High ";
    //     score--;
    //     document.querySelector('.score').textContent = score;
    //     } else{
    //         document.querySelector('.message').textContent = "You have lost the Game 💔";
    //         score = 0;
    //         document.querySelector('.score').textContent = score;
    //     }
    // }
    // else if(guess < secretNumber){
    //     if(score > 1){
    //     document.querySelector('.message').textContent = "Entered Value is Low";
    //     score--;
    //     document.querySelector('.score').textContent = score;
    // } else{
    //     document.querySelector('.message').textContent = "You have lost the Game 💔";
    //     score = 0;
    //     document.querySelector('.score').textContent = score;
    // }
    // }
    
    //                                                  -----AFTER REFACTORING OF CODE----- 
    else if(guess !== secretNumber){
        if(score > 1){
        // document.querySelector('.message').textContent = guess > secretNumber ? 'Entered Value is High' : 'Entered Value is Low';
        displayMessage(guess > secretNumber ? 'Entered Value is High' : 'Entered Value is Low');
        score--;
        document.querySelector('.score').textContent = score;
        }
        else{
            // document.querySelector('.message').textContent = "You have lost the Game 💔";
            displayMessage("You have lost the Game 💔");
            score = 0;
            document.querySelector('.score').textContent = score;
        }
    }
})
document.querySelector('.again').addEventListener('click', function(){
     secretNumber = Math.trunc(Math.random()*20+1);
     score = 20;
        document.querySelector('body').style.backgroundColor = "#222";
        document.querySelector('body').style.width = "15rem";
        document.querySelector('.number').textContent = "?";
        document.querySelector('.score').textContent = score;
        // document.querySelector('.message').textContent = "Start guessing...";
        displayMessage("Start guessing...");
        document.querySelector('.guess').value = '';
})