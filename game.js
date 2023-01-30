let playerRounds = 0;
let computerRounds = 0;
const options = ["rock", "paper", "scissors"];

/* function game() {
  //function for a 5 round game of rock, paper, scissors

  const options = ["rock", "paper", "scissors"];

  let result;

  for (let i = 0; i < 5; i++) {
    //Counter for number of rounds */

let computerSelection = function getComputerChoice(options) {
  // Computer makes a random choice
  return options[Math.floor(Math.random() * options.length)];
};

let playerSelection = function getPlayerChoice() {
  // Player makes his choice
  //return prompt("What's your choice?!", "Rock, Paper or Scissors");
};

let gameRoundResult = function gameRound(computerSelection, playerSelection) {
  // Plays a single round of the game

  playerSelection = playerSelection.toLowerCase(); //Makes string case insensitive

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

// Score counter

if (gameRoundResult === "You win!") {
  playerRounds++;
} else if (gameRoundResult === "You lose!") {
  computerRounds++;
} else {
  playerRounds = playerRounds;
}
//}

// Compares the player and computer score to determine the winner

/* if (playerRounds > computerRounds) {
  return "You won the game!";
} else if (playerRounds < computerRounds) {
  return "You lost the game!";
} else {
  return "You tied the game!";
} */
//}

let gameResult = game() + " " + playerRounds + "-" + computerRounds;

alert(gameResult);

// UI Scripts

const bt = document.querySelectorAll(".bt");
const rockButton = document.querySelector("#rockButton");
const paperButton = document.querySelector("#paperButton");
const scissorsButton = document.querySelector("#scissorsButton");
