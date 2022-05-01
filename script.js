let playerScore = 0;
let computerScore = 0;

function computerPlay() {
  let options = ["Rock", "Paper", "Scissors"];
  return options[Math.floor(Math.random() * options.length)];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) winner = -1;
  if (
    (playerSelection == "Rock" && computerSelection == "Scissors") ||
    (playerSelection == "Paper" && computerSelection == "Rock") ||
    (playerSelection == "Scissors" && computerSelection == "Paper")
  )
    winner = 0;
  if (
    (playerSelection == "Rock" && computerSelection == "Paper") ||
    (playerSelection == "Paper" && computerSelection == "Scissors") ||
    (playerSelection == "Scissors" && computerSelection == "Rock")
  )
    winner = 1;

  showResults(playerSelection, computerSelection, winner);
}

function showResults(playerSelection, computerSelection, winner) {
  showPlayerSelection.textContent = showPlayerIcon(playerSelection);
  showComputerSelection.textContent = showComputerIcon(computerSelection);

  switch (winner) {
    case 0:
      playerScore++;
      topText.textContent = "You Win!";
      bottomText.textContent = `${playerSelection} beats ${computerSelection} `;
      showPlayerScore.textContent = `Player: ${playerScore}`;
      break;
    case 1:
      computerScore++;
      topText.textContent = "You Lose!";
      bottomText.textContent = `${playerSelection} loses to ${computerSelection}`;
      showComputerScore.textContent = `Computer: ${computerScore}`;
      break;
    default:
      topText.textContent = "It's a Tie";
      bottomText.textContent = `${playerSelection} ties with ${computerSelection}`;
  }
}

function showComputerIcon(computerSelection) {
  if (computerSelection == "Rock") return "✊";
  if (computerSelection == "Paper") return "✋";
  if (computerSelection == "Scissors") return "✌";
}

function showPlayerIcon(playerSelection) {
  if (playerSelection == "Rock") return "✊";
  if (playerSelection == "Paper") return "✋";
  if (playerSelection == "Scissors") return "✌";
}

function main(e) {
  let playerSelection = e.target.id;
  let computerSelection = computerPlay();
  playRound(playerSelection, computerSelection);
  console.log(playerScore);
  console.log(computerScore);
  if (playerScore == 5 || computerScore == 5) {
    finalScreen();
  }
}

function finalScreen() {
  div.classList.add("final-screen");
  playAgainButton.classList.add("play-again");
  playAgainButton.textContent = "Play Again";
  resultText.style.cssText = "font-size:100px; font-weight:bold";
  scoreText.style.cssText = "font-size:50px; ";
  if (playerScore == 5) {
    resultText.textContent = `You won!`;
    scoreText.textContent = `Player : ${playerScore} - Computer: ${computerScore}`;
  } else if (computerScore == 5) {
    resultText.textContent = `You lost!`;
    scoreText.textContent = `Player : ${playerScore} - Computer: ${computerScore}`;
  }
  div.appendChild(resultText);
  div.appendChild(scoreText);
  div.appendChild(playAgainButton);
  body.replaceChild(div, container);

  playAgainButton.addEventListener("click", resetGame);
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  topText.textContent = "Choose your Weapon";
  bottomText.textContent = "First to 5 points wins the game";
  showPlayerSelection.textContent = "?";
  showComputerSelection.textContent = "?";
  showPlayerScore.textContent = "Player: 0";
  showComputerScore.textContent = "Computer: 0";

  body.replaceChild(container, div);
}
//playing screen
const btn = document.querySelectorAll("button");
const topText = document.querySelector("#first-text");
const bottomText = document.querySelector("#second-text");
const showPlayerSelection = document.querySelector("#player-selection");
const showPlayerScore = document.querySelector("#player-score");
const showComputerSelection = document.querySelector("#computer-selection");
const showComputerScore = document.querySelector("#computer-score");

//final screen
const body = document.querySelector("body");
const container = document.querySelector(".container");
const div = document.createElement("div");
const resultText = document.createElement("p");
const scoreText = document.createElement("p");
const playAgainButton = document.createElement("button");

btn.forEach((button) => button.addEventListener("click", main));
