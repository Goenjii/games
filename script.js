// get the game board element
const gameBoard = document.getElementById('game-board');

// set the score
let score = 0;
const scoreBoard = document.getElementById('score');
scoreBoard.innerText = score;

// function to randomly select a hole
function randomHole() {
  const holes = document.querySelectorAll('.hole');
  const randomIndex = Math.floor(Math.random() * holes.length);
  const hole = holes[randomIndex];
  return hole;
}

// function to show the mole
function showMole() {
  const hole = randomHole();
  const mole = hole.querySelector('.mole');
  mole.style.display = 'block';

  // hide the mole after a random time
  const randomTime = Math.floor(Math.random() * 1000) + 500;
  setTimeout(() => {
    mole.style.display = 'none';
    // recursively call the function to show the next mole
    showMole();
  }, randomTime);
}

// add event listener to the game board
gameBoard.addEventListener('click', (event) => {
  const mole = event.target;
  if (mole.classList.contains('mole')) {
    score++;
    scoreBoard.innerText = score;
    mole.style.display = 'none';
  }
});

// start the game
showMole();
