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
  let choice = prompt("Enter a choice (rock/paper/scissors): ").toLowerCase();
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

function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  function playRound(humanChoice, computerChoice) {
    let message = "";
    console.log(
      "You chose " + humanChoice,
      "/",
      "Computer chose " + computerChoice
    );
    if (humanChoice === computerChoice) {
      message = "It's a tie! Both chose " + humanChoice + ".";
    } else if (humanChoice === "rock") {
      if (computerChoice === "paper") {
        computerScore += 1;
        message = "Paper covers rock! You lose.";
      } else if (computerChoice === "scissors") {
        humanScore += 1;
        message = "Rock smashes scissors. You win.";
      }
    } else if (humanChoice === "paper") {
      if (computerChoice === "rock") {
        humanScore += 1;
        message = "Paper covers rock! You win.";
      } else if (computerChoice === "scissors") {
        computerScore += 1;
        message = "Scissors cuts paper! You lose.";
      }
    } else if (humanChoice === "scissors") {
      if (computerChoice === "rock") {
        computerScore += 1;
        message = "Rock smashes scissors! You lose.";
      } else if (computerChoice === "paper") {
        humanScore += 1;
        message = "Scissors cuts paper! You win.";
      }
    }
    console.log(message);
  }

  for (let i = 0; i < 5; i++) {
    const computerSelection = getcomputerChoice();
    const humanSelection = getHumanChoice();
    playRound(humanSelection, computerSelection);
  }

  console.log("Your score: " + humanScore, "Computer score: " + computerScore);
  if (humanScore > computerScore) {
    console.log("You win!");
  } else if (humanScore < computerScore) {
    console.log("You lose!");
  } else {
    console.log("Tie!");
  }
}

playGame();
