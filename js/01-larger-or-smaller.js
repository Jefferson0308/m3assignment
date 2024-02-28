let num1, num2, gt;
num1 = prompt("Type num 1...");
num2 = prompt("Type num 2...");

if (num1 === num2) {
  console.log("Equal NUMBERS, type again...");
} else {
    if (num1 > num2) {
        gt = num1
    } else {
        gt = num2
    }
    console.log("This is the GREATER num: " + gt);
}

