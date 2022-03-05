// Create a function that returns a random computer option between rock-paper-scissors

let playerScore = 0;
let computerScore = 0;

function computerPlay() {
  let options = ["rock", "paper", "scissors"];
  return options[Math.floor(Math.random() * options.length)];
}

function playRound(e, computerSelection) {
  computerSelection = computerPlay();
  if (e.target.id == computerSelection) return -1;
  if (
    (e.target.id == "rock" && computerSelection == "scissors") ||
    (e.target.id == "paper" && computerSelection == "rock") ||
    (e.target.id == "scissors" && computerSelection == "paper")
  )
    return 0;
  if (
    (e.target.id == "rock" && computerSelection == "paper") ||
    (e.target.id == "paper" && computerSelection == "scissors") ||
    (e.target.id == "scissors" && computerSelection == "rock")
  )
    return 1;
}

function showResults(e, playerScore, computerScore, computerSelection) {
  let winner = playRound(e);
  computerSelection = computerPlay();
  const topText = document.querySelector("#first-text");
  const bottomText = document.querySelector("#second-text");
  const showPlayerSelection = document.querySelector("#player-selection");
  const showPlayerScore = document.querySelector("#player-score");
  const showComputerSelection = document.querySelector("#computer-selection");
  const showComputerScore = document.querySelector("#computer-score");
  showPlayerSelection.textContent = showPlayerIcon(e);
  showComputerSelection.textContent = showComputerIcon(computerSelection);

  if (winner == 0) {
    playerScore++;
    topText.textContent = "You Win!";
    bottomText.textContent = `${e.target.id} beats ${computerSelection}!! `;
  }
}

function showComputerIcon(computerSelection) {
  if (computerSelection == "rock") return "✊";
  if (computerSelection == "paper") return "✋";
  if (computerSelection == "scissors") return "✌";
}

function showPlayerIcon(e) {
  if (e.target.id == "rock") return "✊";
  if (e.target.id == "paper") return "✋";
  if (e.target.id == "scissors") return "✌";
}
const btn = document.querySelectorAll("button");

btn.forEach((button) => button.addEventListener("click", playRound));
btn.forEach((button) => button.addEventListener("click", showResults));
btn.forEach((button) => button.addEventListener("click", showPlayerIcon));
