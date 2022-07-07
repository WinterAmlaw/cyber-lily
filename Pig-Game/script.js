'use strict';
//Create VAR that will store random number between 1-6
let diceNum = 0;
//Players overall score
let playerOneScore = 0;
let playerTwoScore = 0;
let playerOneCurrent = 0;
let playerTwoCurrent = 0;
//Create VARs to select all btns and changeable elements:
//BUTTONS
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNew = document.querySelector('.btn--new');
//BACKGROUND COLOR
const playerOneBackground = document.querySelector('.player--active').style;
const playerTwoBackground = document.querySelector('.player--1').style;
//IMAGES
let diceImg = document.querySelector('.dice');
//CURRENT SCORES
let selectPlayerOneCurrent = document.querySelector('#current--0.current-score');
let selectPlayerTwoCurrent = document.querySelector('#current--1.current-score');
//OVERALL SCORES
let selectPlayerOneScore = document.querySelector('#score--0.score');
let selectPlayerTwoScore = document.querySelector('#score--1.score');
//PLAYER TITLES
const playerOneTitle = document.querySelector('#name--0');
const playerTwoTitle = document.querySelector('#name--1');
//Create VAR to store boolean value indicating PLAYER TURN
let playerOneTurn = true;
//Create function changes value of diceNum to random # 1-6 and changes diceImg accordingly
function changeBgColor() {
  if(playerOneTurn){
     playerOneBackground.backgroundColor = 'rgba(255, 255, 255, 0.4)';
     playerTwoBackground.backgroundColor = 'rgba(255, 255, 255, 0)';

  }else if(!playerOneTurn){
    playerOneBackground.backgroundColor = 'rgba(255, 255, 255, 0)';
    playerTwoBackground.backgroundColor = 'rgba(255, 255, 255, 0.4)';
  }
}
function checkWin() {
  if(playerOneScore > 99){
    playerOneTitle.innerHTML = 'You Won!';
  }
  if(playerTwoScore > 99){
    playerTwoTitle.innerHTML = 'You Won!';
  }
}

function updateCurrent() {
  if(playerOneTurn){
    playerOneCurrent += diceNum;
    selectPlayerOneCurrent.innerHTML = `${playerOneCurrent}`;
      if(diceNum === 1) {
        playerOneCurrent = 0;
        playerOneTurn = false;
        selectPlayerOneCurrent.innerHTML = '0';
        changeBgColor();
      }
  }else if(!playerOneTurn){
    playerTwoCurrent += diceNum;
    selectPlayerTwoCurrent.innerHTML = `${playerTwoCurrent}`;
        if (diceNum === 1) {
          playerTwoCurrent = 0;
          playerOneTurn = true;
          selectPlayerTwoCurrent.innerHTML = '0';
          changeBgColor();
        }
  }
}

function updateScore(){
  if(playerOneTurn){
     playerOneScore += playerOneCurrent;
     checkWin();
     selectPlayerOneScore.innerHTML = `${playerOneScore}`;
     playerOneCurrent = 0;
     selectPlayerOneCurrent.innerHTML = '0';
     playerOneTurn = false;
     if(playerOneScore < 100) {
     changeBgColor();
     }
  }else if(!playerOneTurn){
    playerTwoScore += playerTwoCurrent;
    checkWin();
    selectPlayerTwoScore.innerHTML = `${playerTwoScore}`;
    playerTwoCurrent = 0;
    selectPlayerTwoCurrent.innerHTML = '0';
    playerOneTurn = true;
    if(playerTwoScore < 100) {
    changeBgColor();
    }
  }

};

const rollDice = function () {
  diceNum = Math.floor(Math.random() * 6) + 1;
  diceImg.src = `dice-${diceNum}.png`;
  updateCurrent();
};

function resetGame() {
  diceNum = 0;
  playerOneScore = 0;
  playerTwoScore = 0;
  playerOneCurrent = 0;
  playerTwoCurrent = 0;
  selectPlayerOneCurrent.innerHTML = '0';
  selectPlayerTwoCurrent.innerHTML = '0';
  selectPlayerOneScore.innerHTML = '0';
  selectPlayerTwoScore.innerHTML = '0';
  playerOneBackground.backgroundColor = 'rgba(255, 255, 255, 0.4)';
  playerTwoBackground.backgroundColor = 'rgba(255, 255, 255, 0)';
}
//Connect roll dice button to roll dice function
btnRoll.addEventListener('click', rollDice);
//Connect Hold button to update score function
btnHold.addEventListener('click', updateScore);
//Connect New Game button to resetGame function
btnNew.addEventListener('click', resetGame);
//Create funtion that switches player if diceNum === 1 or

// while(playerOneTurn && diceNum === 1) {
//   playerOneCurrent = 0;
//   playerOneTurn = false;
//   console.log('connected');
//   break;
// }
// if (!playerOneTurn) {
//   playerTwoCurrent = 0;
//   playerOneTurn = true;
// }
