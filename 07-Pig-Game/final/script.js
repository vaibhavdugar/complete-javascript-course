// Design flowcharts on diagrams.net

// Selecting elements(El)
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
// we can also use document.getElementById('score--1')
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const current0El = document.getElementById(`#current--0`);
const current1El = document.getElementById(`#current--1`);
const player0El = document.querySelector(`.player--0`);
const player1El = document.querySelector(`.player--1`);

// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

let currentScore = 0; // For things like scores, marks we should store them in a seperate variable and later display them instead of accessing directly from DOM

let scores = [0, 0]; // Final scores of each player
let activePlayer = 0;
let playing = true; // state variable

const switchPlayer = function () {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;

  player0El.classList.toggle(`player--active`);
  player1El.classList.toggle(`player--active`);
};

btnRoll.addEventListener('click', function () {
  if (playing) {
    // 1. Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    // 2. Display that random dice roll
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    // 3. Check if it is 1, if yes then switch to the next player and the current score of current player becomes 0
    if (dice !== 1) {
      // Add to current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // Switch to other player and current score = 0
      // Using ternary operator
      switchPlayer();
    }
  }
});

/* ---------------------------------------------------- */
//Holding Current Score

btnHold.addEventListener('click', function () {
  if (playing) {
    // 1. Add current score to the total score of the active player
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // 2. Check if score >= 100
    if (scores[activePlayer] >= 100) {
      // Finish the game
      playing = false; // When the player wins the game the dice should disappear and the buttons "Roll Dice and Hold" should not work

      diceEl.classList.add('hidden');

      // Player winner class will be added only when I remove player active class because then only the colour will change
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      // Switch the active player
      switchPlayer();
    }
  }
});

/*-----------------------------------------------------
RESETTING THE GAME AT ANY POINT OF TIME */

btnNew.addEventListener('click', function () {
  playing = true;
  diceEl.classList.add('hidden');
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  score0El.textContent = 0;
  score1El.textContent = 0;
  scores[0] = 0;
  scores[1] = 0;
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove(`player--winner`);
  activePlayer = 0;
});
