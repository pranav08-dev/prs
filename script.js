function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        return `You win! ${playerChoice} beats ${computerChoice}`;
    } else {
        return `You lose! ${computerChoice} beats ${playerChoice}`;
    }
}

function playGame() {
    let playerScore = 0;
    let computerScore = 0;

    // Add event listeners to buttons
    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            const playerChoice = button.id; // Get the player's choice from the button's id
            const computerChoice = getComputerChoice();
            const result = playRound(playerChoice, computerChoice);

            // Display the result
            const resultDiv = document.querySelector("#result");
            resultDiv.textContent = result;

            // Update the score
            if (result.includes("You win")) {
                playerScore++;
            } else if (result.includes("You lose")) {
                computerScore++;
            }

            // Display the score
            const scoreDiv = document.querySelector("#score");
            scoreDiv.textContent = `Player: ${playerScore} - Computer: ${computerScore}`;
        });
    });
}

// Initialize the game
playGame();
