
/* "Step 3: Your game is going to play against the computer, so begin with a function called getComputerChoice that will randomly return ‘Rock’, ‘Paper’ or ‘Scissors’."" */

function getComputerChoice(){
    const options = ["Rock", "Paper", "Scissors"];
    const random = Math.floor(Math.random() * options.length);
    return options[random];
}
// test
console.log("This tests getComputerChoice(): " + getComputerChoice());

// * * * // 

/* Step 4-5: Write a function that plays a single round of Rock Paper Scissors.  */

// score variables
let playerScore = 0;
let computerScore = 0;

// cleaner code: 
function playRound(playerSelection, computerSelection) {
    let message = "";
    if (playerSelection === computerSelection) {
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
  
  // Might Switch to this once the game() function is made 
  //   let playerSelection = prompt("Choose your fighter")
  // temp command
  const playerSelection = "Rock";
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));
  console.log(`The current score is Player: ${playerScore} Computer: ${computerScore}`);

// * * * //
/*

Still to-do: 
* Write a new function called game()
- game() will loop playRound 5 times (or you can just call playRound x5)
// Maybe attempt the latter before going in to the former. read up on for/while

* Remember to change playerSelection to a prompt() so that they can enter their own choice rather than it say "Rock" every time 

* * * 

playRound needs to store the score, then run again
within the rules of game() should run 5 times
// what if it's a tie tho? play again?
// make the for/while run to best of 5, not just 5 times




*/
