let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};

updateScoreElement();

function playGame(playerMove){
  const computerMove = pickComputerMove();
  
  let result = '';

  if (playerMove === 'scissors') {
    if(computerMove === 'rock') {
    result = 'You lose.';
    } else if (computerMove === 'paper') {
    result = 'You win.';
    } else if (computerMove === 'scissors') {
    result = 'Tie';
    }

  } else if (playerMove === 'paper') {
    if(computerMove === 'rock'){
    result = 'You win.';
    } else if (computerMove === 'paper') {
    result = 'Tie.';
    } else if (computerMove === 'scissors') {
    result = 'You lose.';
    }
    
  } else if (playerMove === 'rock') {
    if(computerMove === 'rock'){
      result = 'Tie.';
    } else if (computerMove === 'paper') {
      result = 'You lose.';
    } else if (computerMove === 'scissors') {
      result = 'You win.';
    }
  }

  if (result === 'You win.') {
    score.wins = score.wins + 1;
  } else if (result === 'You lose.') {
    score.losses = score.losses + 1;
  } else if (result === 'Tie.') {
    score.ties = score.ties + 1
  }

  localStorage.setItem('score', JSON.stringify(score));
  
  updateScoreElement();

  document.querySelector('.js-result')
    .innerHTML = result;

  document.querySelector('.js-moves')
    .innerHTML 
    = `You
    <img src="images/${playerMove}-emoji.png" class="move-icon" alt="">
    <img src="images/${computerMove}-emoji.png" class="move-icon" alt="">
    Computer`

}

function updateScoreElement() {
  document.querySelector('.js-score')
    .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function pickComputerMove(){
  let computerMove = '';
  
  const randomNumber = Math.random();

  if (randomNumber >= 0 && randomNumber < 1/3){
    computerMove = 'rock';
  } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
    computerMove = 'paper';
  } else if (randomNumber >= 2/3 && randomNumber < 1) {
    computerMove = 'scissors';
  }

  return computerMove;
}
const product2 = {
  name: 'shirt',
  ['delivery-time']: '1 day',
  fun: function function1() {
    console.log('function inside object');
  }
};
console.log(product2);
console.log(product2.name);
console.log(product2['name']);
console.log(product2['delivery-time']);
product2.fun();

console.log(typeof console.log);

const jsonString = JSON.stringify(product2);
console.log(JSON.parse(jsonString));
