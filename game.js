const choices = ["Rock", "Paper", "Scissors"];
const gameMessage = document.getElementById("gameMessage");
const userChoice = document.getElementById("userChoice");
const computerChoice = document.getElementById("computerChoice");

function getComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function playGame(userChoice) {
  const computerChoice = getComputerChoice();
  let message;

  if (userChoice === computerChoice) {
    message = "Tie!";
  } else if (
    (userChoice === "Rock" && computerChoice === "Scissors") ||
    (userChoice === "Paper" && computerChoice === "Rock") ||
    (userChoice === "Scissors" && computerChoice === "Paper")
  ) {
    message = "You win!";
  } else {
    message = "You lose!";
  }

  gameMessage.innerText = message;
  userChoice.innerText = "Your choice: " + userChoice;
  computerChoice.innerText = "Computer choice: " + computerChoice;
}

const playButton = document.getElementById("playButton");

playButton.addEventListener("click", function() {
  const userChoice = window.prompt("Rock, Paper, or Scissors?");
  playGame(userChoice);
});
