//ROCK-PAPER-SCISSORS

// Create a function that returns a random computer option between rock-paper-scissors
// Create a function that returns a player option between rock-paper-scissors
//  make the function case sensitive
// Create a function that plays a round of the game
//  if computer option == player option
//    print "I'ts a tie"
//  if computer option is rock
//    if player option is paper
//      print "Player Wins"
//    if player option is scissors
//      print "Computer Wins"
//  if computer option is paper
//    if player option is rock
//      print computer wins
//    if player option is scissors
//      print player wins
//  if computer option is scissors
//    if player option is rock
//      print player wins
//    if player option is paper
//      print computer wins

function computerPlay() {
  let options = ["rock", "paper", "scissors"];
  return options[Math.floor(Math.random() * options.length)];
}

function playerPlay() {
  let playerOption = prompt("Rock-Paper-Scissors");
  console.clear();
  playerOption = playerOption.toLowerCase();
  if (
    playerOption != "rock" &&
    playerOption != "paper" &&
    playerOption != "scissors"
  ) {
    alert("You must choose rock paper or scissors");
    return null;
  } else return playerOption;
}

function play(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) return "It's a tie";
  if (playerSelection == "rock") {
    if (computerSelection == "paper") return "You Lose! Paper beats Rock";
    if (computerSelection == "scissors") return "You Win! Rock beats Scissors";
  }
  if (playerSelection == "paper") {
    if (computerSelection == "scissors")
      return "You Lose! Scissors beats Paper";
    if (computerSelection == "rock") return "You Win! Paper beats Rock";
  }
  if (playerSelection == "scissors") {
    if (computerSelection == "rock") return "You Lose! Rock beats Scissors";
    if (computerSelection == "paper") return "You Win! Scissors beats Paper";
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;
  for (let i = 0; i < 5; i++) {
    let playerSelection = playerPlay();
    if (playerSelection == null) {
      i--;
      continue;
    }
    let computerSelection = computerPlay();
    console.log("Round " + (i + 1));
    console.log("Your Selection: " + playerSelection);
    console.log("Computer Selection: " + computerSelection);
    console.log(play(playerSelection, computerSelection));
    let outcome = play(playerSelection, computerSelection);
    if (outcome.slice(0, 8) == "You Lose") computerScore++;
    else if (outcome.slice(0, 7) == "You Win") playerScore++;
    console.log("-Score-");
    console.log("Player: " + playerScore);
    console.log("Computer: " + computerScore);
  }
  if (playerScore == computerScore) {
    alert(
      "Final Results\n\n" + "It's a tie " + playerScore + " to " + computerScore
    );
  } else if (playerScore > computerScore) {
    alert(
      "Final Results\n\n" + "You Won! " + playerScore + " to " + computerScore
    );
  } else {
    alert(
      "Final Results\n\n" + "You Lost! " + playerScore + " to " + computerScore
    );
  }
}

game();
