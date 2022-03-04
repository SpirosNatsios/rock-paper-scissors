// Create a function that returns a random computer option between rock-paper-scissors
function computerPlay() {
  let options = ["rock", "paper", "scissors"];
  return options[Math.floor(Math.random() * options.length)];
}

// Create a function that plays a round of the game

function play(e, computerSelection) {
  computerSelection = computerPlay();
  const results = document.querySelector(".results");
  const para = document.createElement("p");

  if (e.target.id == computerSelection) para.textContent = "It's a Tie";

  if (e.target.id == "rock") {
    if (computerSelection == "paper")
      para.textContent = "You Lose! Paper beats Rock";
    if (computerSelection == "scissors")
      para.textContent = "You Win! Rock beats Scissors";
  }
  if (e.target.id == "paper") {
    if (computerSelection == "scissors")
      para.textContent = "You Lose! Scissors beats Paper";
    if (computerSelection == "rock")
      para.textContent = "You Win! Paper beats Rock";
  }
  if (e.target.id == "scissors") {
    if (computerSelection == "rock")
      para.textContent = "You Lose! Rock beats Scissors";
    if (computerSelection == "paper")
      para.textContent = "You Win! Scissors beats Paper";
  }

  if (results.hasChildNodes()) {
    results.removeChild(results.firstChild);
  }
  results.appendChild(para);
}

const btn = document.querySelectorAll("button");
btn.forEach((button) => button.addEventListener("click", play));
