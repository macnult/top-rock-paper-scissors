// Rewrite script.js code here manually
// to smooth out complications

/* The problem with this function might be that it's not providing a different result on every round. In the playRound function, it keeps returning the same result as the first.
*/
// Other than that, it runs fine

function getComputerChoice() {
    const options = ["Rock", "Paper", "Scissors"];
    const random = Math.floor(Math.random() * options.length);
    return options[random];
}

/* Might need to be rewritten entirely. Prompts user for rock, paper, or scissors, but runs regardless of what you enter. Also I don't think the toLowerCase() is all that optimal here 
*/
function getPlayerChoice(){
    let choice = prompt("Choose your fighter! Rock, Paper, or Scissors?");
    if (choice == null){
      return prompt("Whoops! Try again!");
    } else {
      choice = choice.toLowerCase();
      return choice;
    }
}

let playerScore = 0;
let computerScore = 0;

let playerSelection = getPlayerChoice();
playerSelection = playerSelection.toLowerCase();

let computerSelection = getComputerChoice();

/* This function might be good to go. Other functions should be tended to first */
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
      return "It's a tie!";
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



  /* Figure out the two defining functions first, then revisit this part  
  */

  // Loops playRound until a score of 5 has been reached from either side
// remember to change i < 2 to i < 5 - shortened for debugging purposes
// function game(){
//     for (let i = 0; i < 2; i++) {
//       console.log(playRound(playerSelection, computerSelection));
//       console.log(`The current score is Player: ${playerScore} Computer: ${computerScore}`);
//     }
//   }
//   game();
      