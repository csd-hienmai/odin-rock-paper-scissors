const computerSelection = getcomputerChoice();
const humanSelection = getHumanChoice();
let humanScore = 0;
let computerScore = 0;


function getcomputerChoice() {
  let choice = Math.floor(Math.random() * 3);
  if (choice === 0) {
    return "Rock";
  } else if (choice === 1) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

function getHumanChoice() {
  let choice = prompt("Enter a chocie (rock/paper/scissors): ");
  if (choice === "rock") {
    return "Rock";
  } else if (choice === "paper") {
    return "Paper";
  } else if (choice === "Scissors") {
    return "Scissors";
  } else {
    return "Invalid choice";
  }
}

console.log("Computer chocie: " + computerSelection);
console.log("Your chocie: " + humanSelection);
