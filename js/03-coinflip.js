let num = Math.round(Math.random());
let coinFlip = num;
let choice = prompt("Type Heads / Tails ...");
console.log(coinFlip);
if (coinFlip < 1) {
  if (choice === "heads") {
    console.log("The flip was heads and you chose heads...you win!");
  } else if (choice === "tails") {
    console.log("The flip was heads but you chose tails...you lose!");
  }
} else {
  if (choice === "heads") {
    console.log("The flip was tails but you chose heads...you lose!");
  } else if (choice === "tails") {
    console.log("The flip was tails and you chose tails...you win!");
  }
}
