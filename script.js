function getComputerChoice() {
  const options = ["Rock", "Paper", "Scissors"];
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
    return alert("Whoops! Try again");
  }
}
// getPlayerChoice tested successfully on single execution
// same thing as getComputerChoice where playerSelection returns the same result
// might need to define these things within playRound

