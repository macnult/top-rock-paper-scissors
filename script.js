function getComputerChoice() {
  const options = ["rock", "paper", "scissors"];
  const random = Math.floor(Math.random() * options.length);
  return options[random];
}
// getComputerChoice tested successfully on single execution
// when defined as (computerSelection) it does not change,
// but console.log(getComputerChoice()) twice in a row gives different results

function getPlayerChoice(){
  let choice = prompt("Rock, Paper, or Scissors?");
  choice = choice.toLowerCase();
  if ((choice === "rock") || (choice === "paper") || (choice === "scissors")){
    return choice;
  } else {
    return alert("YOU HAVE BEEN DISQUALIFIED FOR NOT ENTERING A VALID OPTION");
  }
}
// getPlayerChoice() tested successfully on single executions
// changes on multiple console.log tests

let playerScore = 0;
let computerScore = 0;

