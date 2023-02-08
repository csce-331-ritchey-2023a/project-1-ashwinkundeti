const options = document.querySelectorAll(".option");
const result = document.querySelector("#result");

options.forEach(option => {
  option.addEventListener("click", function() {
    const computerChoice = Math.floor(Math.random() * 3);
    const choices = ["rock", "paper", "scissors"];
    const computerChoiceText = choices[computerChoice];
    const userChoiceText = this.id;

    let message;
    if (userChoiceText === computerChoiceText) {
      message = "It's a tie!";
    } else if (
      (userChoiceText === "rock" && computerChoiceText === "scissors") ||
      (userChoiceText === "paper" && computerChoiceText === "rock") ||
      (userChoiceText === "scissors" && computerChoiceText === "paper")
    ) {
      message = "You win!";
    } else {
      message = "You lose!";
    }

    result.textContent = `You chose ${userChoiceText}, the computer chose ${computerChoiceText}. ${message}`;
  });
});
