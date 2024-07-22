let humanScore = 0;
let computerScore = 0;


function getcomputerChoice() {
  let choice = Math.floor(Math.random() * 3);
  if (choice === 0) {
    return "rock";
  } else if (choice === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  let choice = prompt("Enter a chocie (rock/paper/scissors): ").toLowerCase();
  if (choice === "rock") {
    return "rock";
  } else if (choice === "paper") {
    return "paper";
  } else if (choice === "scissors") {
    return "scissors";
  } else {
    return "invalid choice";
  }
}

const computerSelection = getcomputerChoice();
const humanSelection= getHumanChoice();

function playGround(humanChoice, computerChoice) {
    let message = "It's a tie!"
    if (humanChoice === computerChoice) {
        humanScore +=1
        computerScore +=1
    }
    else if (humanChoice === "rock") {
        if (computerChoice === "paper") {
            computerScore +=1
            message = "Paper covers rock! You lose."
        }
        else if (computerChoice === "scissors") {
            humanScore +=1
            message = "Rock smashes scissors. You win."
        }
    }
    else if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            humanScore +=1
            message = "Paper covers rock! You win."
        }
        else if (computerChoice === "scissors") {
            computerScore +=1
            message = "Scissors cuts paper! You lose."
        }
    }
    else if (humanChoice === "scissors") {
        if (computerChoice === "rock") {
            computerScore +=1
            message = "Rock smashes scissors! You lose."
        }
        else if (computerChoice === "paper") {
            humanScore +=1
            message = "Scissors cuts paper! You win."
        }
    }
    return message

}



console.log("Computer chocie: " + computerSelection);
console.log("Your choice: " + humanSelection);
console.log(playGround(humanSelection, computerSelection))
console.log("Your score: " + humanScore, "Computer score: " + computerScore);
