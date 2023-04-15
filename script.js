function getComputerChoice() {
  const options = ["Rock", "Paper", "Scissors"];
  const random = Math.floor(Math.random() * options.length);
  return options[random];
}
// getComputerChoice tested successfully 
