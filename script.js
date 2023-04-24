const buttons = document.querySelectorAll(".button");
const result = document.getElementById("result");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const playerChoice = button.id;
    const computerChoice = generateComputerChoice();
    const winner = getWinner(playerChoice, computerChoice);
    result.textContent = winner;
  });
});

function generateComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function getWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "Tie!";
  }
  if (playerChoice === "rock") {
    if (computerChoice === "scissors") {
      return "You win!";
    } else {
      return "Computer wins!";
    }
  }
  if (playerChoice === "paper") {
    if (computerChoice === "rock") {
      return "You win!";
    } else {
      return "Computer wins!";
    }
  }
  if (playerChoice === "scissors") {
    if (computerChoice === "paper") {
      return "You win!";
    } else {
      return "Computer wins!";
    }
  }
}
