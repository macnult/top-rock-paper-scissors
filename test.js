function getComputerChoice(){
    const options = ["Rock", "Paper", "Scissors"];
    const random = Math.floor(Math.random() * options.length);
    return options[random];
}

console.log("This tests getComputerChoice(): " + getComputerChoice());

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
    let message = "";
    if (playerSelection == computerSelection) {
      message = "It's a tie!";
    } else if (
      (playerSelection.toLowerCase() === "rock" && computerSelection === "Scissors") ||
      (playerSelection.toLowerCase() === "paper" && computerSelection === "Rock") ||
      (playerSelection.toLowerCase() === "scissors" && computerSelection === "Paper")
    ) {
      playerScore++;
      message = `You win! ${playerSelection} beats ${computerSelection}.`;
    } else {
      computerScore++;
      message = `You lose! ${computerSelection} beats ${playerSelection}.`;
    }
    return message;
  };

  const playerSelection = "Rock";
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));
  console.log(`The current score is Player: ${playerScore} Computer: ${computerScore}`);
