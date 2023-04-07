

function getComputerChoice(){
  const options = ["Rock", "Paper", "Scissors"];
  const random = Math.floor(Math.random() * options.length);
  return options[random];
}

let playerScore = 0;
let computerScore = 0;
const playerSelection = "Rock";
// Might Switch to this once the game() function is made: 
// let playerSelection = prompt("Choose your fighter")
const computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return "It's a tie!";
  } else if (
    (playerSelection.toLowerCase() === "rock" && computerSelection === "Scissors") ||
    (playerSelection.toLowerCase() === "paper" && computerSelection === "Rock") ||
    (playerSelection.toLowerCase() === "scissors" && computerSelection === "Paper")
  ) {
    playerScore++;
    return `You win! ${playerSelection} beats ${computerSelection}.`;
  } else {
    computerScore++;
    return `You lose! ${computerSelection} beats ${playerSelection}.`;
  }
};

console.log(playRound(playerSelection, computerSelection));
console.log(`The current score is Player: ${playerScore} Computer: ${computerScore}`);
// just doubling this makes it print the same thing twice 
// console.log(playRound(playerSelection, computerSelection));
// console.log(`The current score is Player: ${playerScore} Computer: ${computerScore}`);

function game(playerSelection, computerSelection){
if (playerScore < 5 || computerScore < 5){
  playRound(playerSelection, computerSelection);
} else if (playerScore = 5){
  console.log(`Player wins!`);
  return;
} else {
  console.log(`Computer wins :(`);
  return;
}
return game();
}

console.log(game(playerSelection, computerSelection));