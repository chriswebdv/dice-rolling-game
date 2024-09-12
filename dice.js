console.log("Welcome! You may begin to roll the dice");
console.log("-----------------------------------------");

let answer = prompt("Roll the dice (y/n)");

//console.log(answer);
let firstDice = Math.floor(Math.random() * 6) + 1;
let secondDice = Math.floor(Math.random() * 6) + 1;

while (true) {
  if (answer.toLowerCase() === "y") {
    console.log(
      "Your Result:",
      firstDice.toString(),
      "and",
      secondDice.toString()
    );
    break;
  } else {
    answer = prompt("Roll the dice (y/n)");
  }
}
