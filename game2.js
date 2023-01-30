let playerRounds = 0;
let computerRounds = 0;
let result = "";
const options = ["rock", "paper", "scissors"];

let gameRoundResult = function gameRound(computerSelection, playerSelection) {
  // Plays a single round of the game

  switch (true) {
    case playerSelection === computerSelection:
      result = "It's a tie!";
      break;
    case playerSelection === "rock" && computerSelection === "paper":
      result = "You lose!";
      computerRounds++;
      break;
    case playerSelection === "rock" && computerSelection === "scissors":
      result = "You win!";
      playerRounds++;
      break;
    case playerSelection === "paper" && computerSelection === "rock":
      result = "You win!";
      playerRounds++;
      break;
    case playerSelection === "paper" && computerSelection === "scissors":
      result = "You lose!";
      computerRounds++;
      break;
    case playerSelection === "scissors" && computerSelection === "paper":
      result = "You win!";
      playerRounds++;
      break;
    case playerSelection === "scissors" && computerSelection === "rock":
      result = "You lose!";
      computerRounds++;
      break;
  }
  return result;
};

let computerSelection = function getComputerChoice(options) {
  // Computer makes a random choice
  return options[Math.floor(Math.random() * options.length)];
};

// Determines when the game is over
let gameOver = function gameIsOver() {
  return playerRounds === 5 || computerRounds === 5;
};

// UI

const rockButton = document.querySelector("#rockBtn");
const paperButton = document.querySelector("#paperBtn");
const scissorsButton = document.querySelector("#scissorsBtn");

rockButton.addEventListener("click", () => choiceClick("rock"));
paperButton.addEventListener("click", () => choiceClick("paper"));
scissorsButton.addEventListener("click", () => choiceClick("scissors"));

function choiceClick(playerSelection) {
  gameRoundResult(playerSelection, computerSelection);
  graphicChoices(playerSelection, computerSelection);
}
