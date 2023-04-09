
/* "Step 3: Your game is going to play against the computer, so begin with a function called getComputerChoice that will randomly return ‘Rock’, ‘Paper’ or ‘Scissors’."" */
// This function is all set
function getComputerChoice(){
    const options = ["Rock", "Paper", "Scissors"];
    const random = Math.floor(Math.random() * options.length);
    return options[random];
}
// * * * //

// Let's create a function now to replace the hard-coded playerSelection
// if the prompt is not rock, paper, or scissors: needs to stop and ask user to retry input
function getPlayerChoice(){
    let choice = prompt("Choose your fighter! Rock, Paper, or Scissors?");
    if (choice === null){
      return prompt("Whoops! Try again!");
    } else {
      // Should be able to remove [playerSelection = playerSelection.toLowerCase();] once function getPlayerChoice() is sorted out
      choice = choice.toLowerCase();
      return choice;
    }
}

// test
console.log("This tests getComputerChoice(): " + getComputerChoice());

  let playerScore = 0;
  let computerScore = 0;
  // Change to function getPlayerChoice when that's all said and done
  let playerSelection = "RoCk";
  playerSelection = playerSelection.toLowerCase();
  let computerSelection = getComputerChoice();

/* Step 4-5: Write a function that plays a single round of Rock Paper Scissors.  */

function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return "It's a tie!";
  } else if (
    (playerSelection === "rock" && computerSelection === "Scissors") ||
    (playerSelection === "paper" && computerSelection === "Rock") ||
    (playerSelection === "scissors" && computerSelection === "Paper")
  ) {
    console.log(`You win! ${playerSelection} beats ${computerSelection}.`);
    return playerScore++;
  } else {
    console.log(`You lose! ${computerSelection} beats ${playerSelection}.`);
    return computerScore++; 
  }
};

// Loops playRound until a score of 5 has been reached from either side
function game(){
  for (let i = 0; i < 5; i++) {
    console.log(playRound(playerSelection, computerSelection));
    console.log(`The current score is Player: ${playerScore} Computer: ${computerScore}`);
  }
}
game();
    





// * * * //
  // Old hard code prior to making game()

  // console.log("* * * Round 1 * * *");
  // console.log(playRound(playerSelection, computerSelection));
  // console.log(`The current score is Player: ${playerScore} Computer: ${computerScore}`);

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

