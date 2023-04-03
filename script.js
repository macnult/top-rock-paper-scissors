console.log('test');

// Currently on Step 3 of Assignment

/*  Begin with a function that will randomly return either 'Rock', 'Paper', or 'Scissors'. 

function will be called: getComputerChoice

// * * * // 

return rock
return paper
return scissors

if i do that, it'll return the three listed in order, not pick one of three

need some kind of random number generator, but turn the number range into a selection of strings

maybe an array?

arrayName[rock, paper, scissors] */

// * * * //

// defines the three options
const options = ["Rock", "Paper", "Scissors"];
// returns a random argument from options array
const random = Math.floor(Math.random() * options.length);

console.log(options[random]);
// Test successful, now to make this into a function

// * * * //

// Create function getComputerChoice that accomplishes what you just did above
function getComputerChoice(){

}