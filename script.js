function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);
  if (choice === 0) return "rock";
  else if (choice === 1) return "paper";
  else return "scissors";
}

function getHumanChoice() {
  let choice = prompt(
    "Enter your choice (rock/paper/scissors): "
  ).toLowerCase();
  if (choice === "rock") return "rock";
  else if (choice === "paper") return "paper";
  else if (choice === "scissors") return "scissors";
  else return "invalid";
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  let winner = "";
  if (humanChoice === computerChoice) {
    console.log(`It's a tie! Both choose ${humanChoice}.`);
    winner = "tie";
  } else {
    if (humanChoice == "rock") {
      switch (computerChoice) {
        case "paper":
          console.log("You lose! Paper covers Rock.");
          winner = "computer";
          break;
        case "scissors":
          console.log("You win! Rock smashes Scissor.");
          winner = "human";
          break;
      }
    } else if (humanChoice === "paper") {
      switch (computerChoice) {
        case "rock":
          console.log("You win! Paper covers Rock.");
          winner = "human";
          break;
        case "scissors":
          console.log("You lose! Scissors cuts Paper.");
          winner = "computer";
          break;
      }
    } else {
      switch (computerChoice) {
        case "rock":
          console.log("You lose! Rock smashes Scissors.");
          winner = "computer";
          break;
        case "paper":
          console.log("You win! Scissors cuts Paper.");
          winner = "human";
          break;
      }
    }
  }
  return winner;
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  let round = 1;
  while (round <= 5) {
    console.log(`--- Round ${round} ---`);
    const humanSelection = getHumanChoice();

    if (humanSelection === "invalid") {
      console.log("❌ Invalid input!");
      continue;
    }

    const computerSelection = getComputerChoice();
    console.log(
      `You chose ${humanSelection}. Computer chose ${computerSelection}.`
    );
    const winner = playRound(humanSelection, computerSelection);

    if (winner == "human") humanScore++;
    else if (winner == "computer") computerScore++;

    console.log(`Score: You - ${humanScore}, Computer - ${computerScore}`);
    round++;
  }

  console.log(`Final score: You - ${humanScore}, Computer - ${computerScore}`);
  if (humanScore > computerScore) return "🏆 You win the game! 🏆";
  else if (humanScore < computerScore) return "💀 The computer wins! 💀";
  else return "🤝 It's a tie game! 🤝";
}

console.log(playGame());
