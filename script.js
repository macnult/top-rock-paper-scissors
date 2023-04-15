function getComputerChoice() {
  const options = ["Rock", "Paper", "Scissors"];
  const random = Math.floor(Math.random() * options.length);
  return options[random];
}
// getComputerChoice tested successfully on single execution

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
