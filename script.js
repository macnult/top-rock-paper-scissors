/* "Step 3: Your game is going to play against the computer, so begin with a function called getComputerChoice that will randomly return ‘Rock’, ‘Paper’ or ‘Scissors’."" */

function getComputerChoice(){
    const options = ["Rock", "Paper", "Scissors"];
    const random = Math.floor(Math.random() * options.length);
    return options[random];
}
// test
console.log("This tests getComputerChoice(): " + getComputerChoice());

// * * * // 

/* Step 4-5: 
Write a function that plays a single round of Rock Paper Scissors. 
* * *
 function playRound only needs to play 1 round of RPS.

 playerSelection = the player choosing rock, paper, or scissors
* remember to make this case insensitive (revisit later)

computerSelection = computer's choice, maybe it pulls from getComputerChoice?

playRound will compare the values of both arguments
the results will be as if speaking to the user, not the computer

it needs to keep score as well
tie = 0 (can apply to both)
win = 1 (will have to be applied to each argument)

*/
// score variables
let playerScore = 0;
let computerScore = 0;

// keeps returning as undefined intermittently
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return ("It's a tie!");
        // Rock section of if/else
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection === "Scissors") {
        console.log("You win! Rock beats Scissors.");
        return playerScore = playerScore + 1;
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection === "Paper"){
        console.log("You lose! Paper beats Rock.");
        return computerScore = computerScore + 1;
        
        // Paper section of if/else
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "Rock") {
        console.log("You win! Paper beats Rock.");
        return playerScore = playerScore + 1;
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "Scissors") {
        console.log("You lose! Scissors beats Paper.");
        return computerScore = computerScore + 1;
        
     // Scissors section of if/else
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "Paper") {
        console.log("You win! Scissors beats Paper.");
        return playerScore = playerScore + 1;
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "Rock") {
        console.log("You lose! Rock beats Scissors.");
        return computerScore = computerScore + 1;
    // Closing else
    } else {
        console.log("Wow! Something is wrong!");
    };
}; 
  // the real command  
//   let playerSelection = prompt("Choose your fighter")
  // temp command
  const playerSelection = "rock";
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));
  console.log(`The current score is Player: ${playerScore} Computer: ${computerScore}`);






/*      ***This might solve the case-insensitivity problem. revisit***
    playerSelection = userInput.toLowerCase().charAt(0).toUpperCase() + userInput.slice(1);
   
 */