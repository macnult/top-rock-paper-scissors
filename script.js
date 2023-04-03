console.log('test');

/* "Step 3: Your game is going to play against the computer, so begin with a function called getComputerChoice that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’."" */

function getComputerChoice(){
    const options = ["Rock", "Paper", "Scissors"];
    const random = Math.floor(Math.random() * options.length);
    return options[random];
}
console.log(getComputerChoice());

// * * * // 

/* Step 4: 

Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters - the playerSelection and computerSelection - and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"

Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation).

*/