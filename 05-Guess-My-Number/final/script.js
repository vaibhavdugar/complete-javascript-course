// Manipulating the inner content of some elements***********
/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Number';

document.querySelector('.number').textContent = 15;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 22;
*/

// ----------------xxxxxxxxxxxxxxxxxx----------------

// Implementing furthur game logic ************
let secretNumber = Math.trunc(Math.random() * 20) + 1;

// Store data in variable
// let score = document.querySelector('.score').textContent; ---- Avoid this
let score = 20;
let highscore = 0;

// Instead of writing "document.querySelector('.message').textContent" again and again, I have made a function and call it everytime. And this is how we are not repeating the same thing again and again.
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// Handling Click Events ************
document.querySelector('.check').addEventListener('click', function () {
  // Input given by the user is always a string so the type of guess is also a string.
  const guess = Number(document.querySelector('.guess').value);

  // If guess is a falsy value (empty or 0)
  // Since guess is a falsy value !guess is true
  if (!guess) {
    // document.querySelector('.message').textContent = 'No Number!';
    displayMessage('🚫 No Number!');
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🎉 Correct answer!';
    displayMessage('🎉 Correct answer!');

    document.querySelector('.number').textContent = secretNumber;

    highscore = score;

    if (score > highscore) {
      highscore = score;
    }
    // Display that highscore in this element
    document.querySelector('.highscore').textContent = highscore;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';
  } else {
    score--;
    document.querySelector('.score').textContent = score;

    if (score > 0) {
      if (guess > secretNumber) {
        // document.querySelector('.message').textContent = '📈 Too High!';
        displayMessage('📈 Too High!');
      } else if (guess < secretNumber) {
        // document.querySelector('.message').textContent = '📉 Too low!';
        displayMessage('📉 Too low!');
      }
    } else {
      // document.querySelector('.message').textContent = '👎 You lost the game!';
      displayMessage('👎 You lost the game!');
      score += 1;
    }
  }
});

// Resetting the game again**************
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  score = 20;
  document.querySelector('.score').textContent = score;

  document.querySelector('.guess').value = '';

  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');

  document.querySelector('.number').textContent = '?';

  document.querySelector('body').style.backgroundColor = '#222';

  document.querySelector('.number').style.width = '15rem';
});
