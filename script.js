function getComputerChoice() {
  const options = ["rock", "paper", "scissors"];
  const random = Math.floor(Math.random() * options.length);
  return options[random];
}

function getPlayerChoice(){
  let choice = prompt("Rock, Paper, or Scissors?");
  if (choice === null) {
    return alert("No worries. When you're ready to play, click OK");
  }
  choice = choice.toLowerCase();
  if ((choice === "rock") || (choice === "paper") || (choice === "scissors")){
    return choice;
  } else {
    return alert("YOU HAVE BEEN DISQUALIFIED FOR NOT ENTERING A VALID OPTION");
  }
}

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
  playerSelection = getPlayerChoice();
  computerSelection = getComputerChoice();
  if (playerSelection === computerSelection) {
    console.log("It's a tie!");
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    console.log(`You win! ${playerSelection} beats ${computerSelection}.`);
    return playerScore++;
  } else {
    console.log(`You lose! ${computerSelection} beats ${playerSelection}.`);
    return computerScore++; 
  }
};

function game(){
  for (let i = 0; i < 5; i++) {
    console.log(playRound());
    console.log(`The current score is Player: ${playerScore} Computer: ${computerScore}`);
  }
}
game();