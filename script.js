let humanScore, computerScore;
const init = function () {
  humanScore = 0;
  computerScore = 0;
};
init();

// Utility functions
function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);
  if (choice === 0) return "rock";
  else if (choice === 1) return "paper";
  else return "scissors";
}
function setButtonsEnabled(enabled) {
  const optionButtons = document.querySelectorAll(".options button");
  optionButtons.forEach((button) => {
    button.disabled = !enabled;
    button.classList.toggle("disabled", !enabled);
  });
}

// UI update functions
const showMessages = function (message, info) {
  document.querySelector(".message").textContent = message;
  document.querySelector(".info").textContent = info;
};
const displayChoices = function (humanChoice, computerChoice) {
  const emojiMap = { rock: "✊", paper: "✋", scissors: "✌️" };
  document.querySelector(".choice.player").textContent = emojiMap[humanChoice];
  document.querySelector(".choice.computer").textContent =
    emojiMap[computerChoice];
};
const displayScore = function (humanScore, computerScore) {
  document.querySelector(".score.player").textContent = `Player: ${humanScore}`;
  document.querySelector(
    ".score.computer"
  ).textContent = `Computer: ${computerScore}`;
};

// Game logic functions
const endGame = function () {
  setButtonsEnabled(false);
};
const checkWinner = function (humanScore, computerScore) {
  if (humanScore === 5) {
    showMessages("Congrats", "You totally outplayed the computer 😎");
    document.body.style.backgroundColor = "#93C970";
    document.querySelector(".title").style.backgroundColor = "#3F7A40";
    endGame();
  } else if (computerScore === 5) {
    showMessages("So close!", "Better luck next round 👀");
    document.body.style.backgroundColor = "#D08B91";
    document.querySelector(".title").style.backgroundColor = "#8D3258";
    endGame();
  }
};
function playRound(humanChoice, computerChoice) {
  displayChoices(humanChoice, computerChoice);
  if (humanChoice === computerChoice) {
    showMessages("It's a tie!", `Both choose ${humanChoice}`);
  } else {
    if (humanChoice == "rock") {
      switch (computerChoice) {
        case "paper":
          showMessages("You lose!", "Paper covers Rock");
          computerScore++;
          break;
        case "scissors":
          showMessages("You win!", "Rock smashes Scissor");
          humanScore++;
          break;
      }
    } else if (humanChoice === "paper") {
      switch (computerChoice) {
        case "rock":
          showMessages("You win!", "Paper covers Rock");
          humanScore++;
          break;
        case "scissors":
          showMessages("You lose!", "Scissors cuts Paper");
          computerScore++;
          break;
      }
    } else {
      switch (computerChoice) {
        case "rock":
          showMessages("You lose!", "Rock smashes Scissor");
          computerScore++;
          break;
        case "paper":
          showMessages("You win!", "Scissors cuts Paper");
          humanScore++;
          break;
      }
    }
  }
  displayScore(humanScore, computerScore);
  checkWinner(humanScore, computerScore);
}

// Event listeners
["rock", "paper", "scissors"].forEach((choice) => {
  document.querySelector(`.${choice}`).addEventListener("click", function () {
    const computerChoice = getComputerChoice();
    playRound(choice, computerChoice);
  });
});
document.querySelector(".new-game").addEventListener("click", function () {
  showMessages("Choose your option", "First to score 5 points wins the game");
  displayScore(0, 0);
  document.body.style.backgroundColor = "#211e21";
  document.querySelector(".title").style.backgroundColor = "#352b35";
  setButtonsEnabled(true);
  init();
});
