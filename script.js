console.log('test');

/* "Step 3: Your game is going to play against the computer, so begin with a function called getComputerChoice that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’."" */

function getComputerChoice(){
    const options = ["Rock", "Paper", "Scissors"];
    const random = Math.floor(Math.random() * options.length);
    return options[random];
}
console.log(getComputerChoice());

// * * * // 

/* Step 4-5: 
Write a function that plays a single round of Rock Paper Scissors. 

The function should take two parameters - the playerSelection and computerSelection - 
* and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"

* Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation). 

Important note: you want to return the results of this function call, not console.log() them. You’re going to use what you return later on, so let’s test this function by using console.log to see the results:*/
// Sample code provided by TOP 
/*
function playRound(playerSelection, computerSelection){
 
}
const playerSelection = "rock"
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection))
*/

// * * * //

/*

working through the steps: 

define playerSelection where user input should be "rock/paper/scissors"
- for the correct input, make sure its case insensitive.

*/

// where we left off: let's make this barebones before making it into a function. sleep on that

function playRound(playerSelection, computerSelection) {
    let userInput = prompt("Rock, Paper, or Scissors?");
    // Changes any input to only capitalize the first letter
    
    playerSelection = userInput.toLowerCase().charAt(0).toUpperCase() + userInput.slice(1);
    // attempting to do all of this in a function
    if (userInput === "rock") {
        playerSelection = 1;
    } else if (userInput === "paper") {
        playerSelection = 2;
    } else if (userInput === "scissors") {
        playerSelection = 3;
    } else {
        alert("You did something wrong here!")
    };
    console.log(userInput);
}



const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
