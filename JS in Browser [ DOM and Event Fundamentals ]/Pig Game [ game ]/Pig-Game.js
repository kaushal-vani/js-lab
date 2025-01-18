'use strict'
//Selecting elements
let player0 = document.querySelector('.player--0');
let player1 = document.querySelector('.player--1');
let score0 = document.querySelector('#score--0');
let score1 = document.getElementById('score--1'); //getElementById is faster than querySelector
let dice = document.querySelector('.dice');
let btnRoll = document.querySelector('.btn--roll')
let btnNew = document.querySelector('.btn--new')
let btnHold = document.querySelector('.btn--hold')
let currentScore0 = document.getElementById('current--0');
let currentScore1 = document.getElementById('current--1');

let scores, currentScore, activePlayer, gameOver;

const init = function() {
    scores = [0,0];
    currentScore = 0;
    activePlayer = 0;
    gameOver = false;
    
    document.querySelector('#score--0').textContent = 0;
    document.querySelector('#score--1').textContent = 0;
    document.getElementById('current--0').textContent = 0;
    document.getElementById('current--1').textContent = 0;

    dice.classList.add('hidden');

    player0.classList.remove('player--winner');
    player1.classList.remove('player--winner');
    player0.classList.add('player--active');
    player1.classList.remove('player--active');
};
init();

const switchPlayer =  function(){
    currentScore = 0;
activePlayer = activePlayer === 0 ? 1 : 0 ;
document.getElementById(`current--${activePlayer}`).textContent = currentScore;
player0.classList.toggle('player--active');
player1.classList.toggle('player--active');
};

//Starting Condition
score0.textContent = 0;
score1.textContent = 0;
dice.classList.add('hidden');

//Roll Dice Functionality
btnRoll.addEventListener('click', function() {
    if(!gameOver){
let diceValue = Number(Math.trunc(Math.random()*6)+1);
dice.src =`dice-${diceValue}.png`;
dice.classList.remove('hidden');

if(diceValue !== 1){
    currentScore+= diceValue;
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
}else{
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    switchPlayer();
};
    }
});

// Hold points Functionality
btnHold.addEventListener('click', function() {
    if(!gameOver){
    // scores[0] = scores[0]+currentScore; 
    // scores[1] = scores[1]+currentScore; 
    scores[activePlayer] += currentScore; 
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
    if(scores[activePlayer]>= 30){
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        dice.classList.add('hidden');
        gameOver = true;
    }
    switchPlayer()
}
})

// New Game Functionality
btnNew.addEventListener('click', init)