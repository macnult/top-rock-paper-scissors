
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
  
 


  // score variables
  let playerScore = 0;
  let computerScore = 0;
  // temp command
  const playerSelection = "Rock";
  // Might Switch to this once the game() function is made: 
  // let playerSelection = prompt("Choose your fighter")
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));
  console.log(`The current score is Player: ${playerScore} Computer: ${computerScore}`);

// * * * //
/*

Still to-do/Step 6: 
* Write a new function called game()
- game() will loop playRound 5 times (or you can just call playRound x5)
// Maybe attempt the latter before going in to the former. read up on for/while

* Remember to change playerSelection to a prompt() so that they can enter their own choice rather than it say "Rock" every time 

* * * 

first things first: playRound needs to store the score, then run again
within the rules of game() should run 5 times
// what if it's a tie tho? play again?
// make the for/while run to best of 5, not just 5 times 

*/
// * * * //

// make it run more than once: call it twice?
// add it in to game() because i think that's how it's gonna work


// function game(){
/*
run playRound
store the score
print 
^ we already have this written out 

* may be time to write something else here that will add on to it
* this might be the meat of turning this from hard code to a loop
// for now, make it just play another round, adding previous score with 
// new score and printing it out

lets name it playAgain
playAgain will run playRound, but add from the last game

try calling playerScore and computerScore, but how will you get it to save when it runs the function again?
*/
// }

function game(){
    
}
