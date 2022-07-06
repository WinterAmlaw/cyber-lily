'use strict';

//Create VAR storing random number 1-20
let gameNum = Math.floor(Math.random() * 20)+1;
console.log(`The game number is ${gameNum}`);

//Create muteable VAR storing current number from FORM on CHECK BUTTON click
let currentNum = 0;

//Score VAR
let score = Number(document.querySelector('.score').innerHTML);
//Highscore VAR
// let highScore = 0;

//Create FUNCTION that:
//Checks if currentNum is <, >, or = gameNum and displays
function checkNum() {
  if (currentNum !== 0) {
    if (currentNum === gameNum) {
      document.querySelector('.message').textContent = 'THAT IS THE CORRECT NUMBER!';
      document.querySelector('body').style.backgroundColor = 'green';
      score ++;


      document.querySelector('.score').innerHTML = score;
      document.querySelector('.check').disabled = true;
      if(Number(document.querySelector('.highscore').innerHTML) === 0){
        document.querySelector('.highscore').innerHTML = score - 1;
      }  else if (score > Number(document.querySelector('.highscore').innerHTML)) {
        document.querySelector('.highscore').innerHTML = score - 1;
      }
    } else if (currentNum > gameNum) {
      document.querySelector('.message').textContent = 'Too High.';
    }else if (currentNum < gameNum) {
      document.querySelector('.message').textContent = 'Too Low.';
    }
  }
}
//Update currentNum from FORM on CHECK BUTTON click
document.querySelector('.check').addEventListener('click', ev => {
  currentNum = Number(document.querySelector('.guess').value);
  console.log(`The current number is ${currentNum}`)
  checkNum();
  if (currentNum !== 0) {
    score --;
    document.querySelector('.score').innerHTML = score;
  }
  if (currentNum < 0 || currentNum > 20) {
    alert('Sorry, that is an invalid input. Please input a number between 1 and 20. ')
    score ++;
    document.querySelector('.score').innerHTML = score;
  }
});

//Reset

document.querySelector('.again').addEventListener('click', ev => {
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.score').innerHTML = 20;
  score = 20;
  gameNum = Math.floor(Math.random() * 20)+1;
  document.querySelector('.check').disabled = false;

});
