
/* "Step 3: Your game is going to play against the computer, so begin with a function called getComputerChoice that will randomly return ‘Rock’, ‘Paper’ or ‘Scissors’."" */

function getComputerChoice(){
    const options = ["Rock", "Paper", "Scissors"];
    const random = Math.floor(Math.random() * options.length);
    return options[random];
}
// test
console.log("This tests getComputerChoice(): " + getComputerChoice());

/* Step 4-5: Write a function that plays a single round of Rock Paper Scissors.  */

function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return "It's a tie!";
  } else if (
    (playerSelection.toLowerCase() === "rock" && computerSelection === "Scissors") ||
    (playerSelection.toLowerCase() === "paper" && computerSelection === "Rock") ||
    (playerSelection.toLowerCase() === "scissors" && computerSelection === "Paper")
  ) {
    console.log(`You win! ${playerSelection} beats ${computerSelection}.`);
    return playerScore++;
  } else {
    console.log(`You lose! ${computerSelection} beats ${playerSelection}.`);
    return computerScore++; 
  }
};
  
  // score variables
  let playerScore = 0;
  let computerScore = 0;
 

  // Might Switch to this once the game() function is made: 
  // let playerSelection = prompt("Choose your fighter")

  // Note: The first run of this does not have any number at the end
  const playerSelection = "Rock";
  const computerSelection = getComputerChoice();
  // console.log("* * * Round 1 * * *");
  // console.log(playRound(playerSelection, computerSelection));
  // console.log(`The current score is Player: ${playerScore} Computer: ${computerScore}`);

  function game(){
    for (let i = 0; i < 5; i++) {
      console.log(playRound(playerSelection, computerSelection));
      console.log(`The current score is Player: ${playerScore} Computer: ${computerScore}`);
    }
  }
game();

// * * * //

  // Lets try the hard code method to pull this 4 more times
  // const playerSelection2 = "Paper";
  // const computerSelection2 = getComputerChoice()
  // console.log("* * * Round 2 * * *");
  // console.log(playRound(playerSelection2, computerSelection2));
  // console.log(`The current score is Player: ${playerScore} Computer: ${computerScore}`);

  // const playerSelection3 = "Scissors";
  // const computerSelection3 = getComputerChoice()
  // console.log("* * * Round 3 * * *");
  // console.log(playRound(playerSelection3, computerSelection3));
  // console.log(`The current score is Player: ${playerScore} Computer: ${computerScore}`);

  // const playerSelection4 = "Rock";
  // const computerSelection4 = getComputerChoice();
  // console.log("* * * Round 4 * * *");
  // console.log(playRound(playerSelection4, computerSelection4));
  // console.log(`The current score is Player: ${playerScore} Computer: ${computerScore}`)

  // const playerSelection5 = "Paper";
  // const computerSelection5 = getComputerChoice();
  // console.log("* * * Round 5 * * *");
  // console.log(playRound(playerSelection5, computerSelection5));
  // console.log(`The current score is Player: ${playerScore} Computer: ${computerScore}`)


// * * * //
/*

Still to-do/Step 6: 
* Write a new function called game()
- game() will loop playRound 5 times (or you can just call playRound x5)
// Maybe attempt the latter before going in to the former. read up on for/while

* Remember to change playerSelection to a prompt() so that they can enter their own choice rather than it say "Rock" every time 

*/

