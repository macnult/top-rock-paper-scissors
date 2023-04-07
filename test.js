/* 

Change test.js to how it should be 

Write something similar to rock paper scissors but let's make it simplified:
compare two things

Let's try a coin flip
*/

function coinFace(){
  const faces = ["Heads", "Tails"];
  const random = Math.floor(Math.random() * faces.length);
  return faces[random];
}

console.log("Coin landed on: " + coinFace());

// default score
let heads = 0;
let tails = 0; 

// No need to complicate this
const player = "Heads"
const coin = coinFace();

function flipCoin(player, coin){
  if (player == coin){
    console.log("It's heads!");
    return heads++;
  } else {
    console.log("It's tails!");
    return tails++;
  }
};

console.log(flipCoin(player.heads, coin.tails));