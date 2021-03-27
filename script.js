'use strict';

const inpValue = document.querySelector('.guess');
const bgColor = document.querySelector('body');
const message = document.querySelector('.message');
const highScore = document.querySelector('.highscore');
const score = document.querySelector('.score');
const check = document.querySelector('.check');
const forReset = document.querySelector('.again');
const checkNumber = () => {
  let randomNum = Math.floor(Math.random() * 21);
  console.log(randomNum);
  if (score.textContent > 0) {
    if (inpValue.value == randomNum) {
      bgColor.style.background = 'green';
      highScore.textContent > randomNum
        ? highScore.textContent
        : (highScore.textContent = randomNum);
      message.textContent = 'Number Match';
    } else if (inpValue.value < randomNum) {
      message.textContent = 'To Low';
      bgColor.style.background = 'red';
      score.textContent > 0 ? score.textContent-- : (score.textContent = 0);
    } else if (inpValue.value > randomNum) {
      message.textContent = 'To high';
      bgColor.style.background = 'red';
      score.textContent > 0 ? score.textContent-- : (score.textContent = 0);
    }
  } else {
    alert('Please Press Again Key');
  }
};
check.addEventListener('click', checkNumber);
const reset = () => {
  inpValue.value = null;
  bgColor.style.background = '#222';
  score.textContent = 20;
  message.textContent = 'Start guessing...';
};
forReset.addEventListener('click', reset);
