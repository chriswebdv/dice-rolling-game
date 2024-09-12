console.log("Welcome! You may begin to roll the dice");
console.log("-----------------------------------------");

let answer = prompt("Roll the dice (y/n)");

//console.log(answer);

while (true) {
  if (answer.toLowerCase() === "y") {
    console.log("print dice result");
    break;
  } else {
    answer = prompt("Roll the dice (y/n)");
  }
}
