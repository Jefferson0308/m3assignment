let num = prompt("Type a numbe between 1 and 100");
if (num < 1 || num > 100) {
  console.log("Num out of RANGE, REFRESH page and TRY AGAIN...");
} else {
  if (num >= 60 && num <= 69) {
    console.log("You received a D");
  } else if (num >= 70 && num <= 79) {
    console.log("You received a C");
  } else if (num >= 80 && num <= 89) {
    console.log("You received a B");
  } else if (num >= 90 && num <= 100) {
    console.log("You received a A");
  } else if (num < 60) {
    console.log("You received a F");
  }
}
