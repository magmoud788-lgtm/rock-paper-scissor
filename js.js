// Step 2: Write the logic to get the computer choice
function getComputerChoice() {
    const randomValue = Math.random();
    if (randomValue < 0.33) {
        return "rock";
    } else if (randomValue < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

// Step 3: Write the logic to get the human choice
function getHumanChoice() {
    let choice = prompt("Enter your choice (rock, paper, or scissors):");
    return choice;
}

// Step 6: Write the logic to play the entire game
function playGame() {
    // Step 4: Declare the players score variables inside playGame scope
    let humanScore = 0;
    let computerScore = 0;

    // Step 5: Write the logic to play a single round
    function playRound(humanChoice, computerChoice) {
        // Make parameter case-insensitive
        humanChoice = humanChoice.toLowerCase();

        if (humanChoice === computerChoice) {
            console.log(`It's a tie! Both chose ${humanChoice}.`);
        } else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "scissors" && computerChoice === "paper") ||
            (humanChoice === "paper" && computerChoice === "rock")
        ) {
            humanScore++; // Increment winner score
            console.log(`You win! ${humanChoice.toUpperCase()} beats ${computerChoice.toUpperCase()}.`);
        } else {
            computerScore++; // Increment winner score
            console.log(`You lose! ${computerChoice.toUpperCase()} beats ${humanChoice.toUpperCase()}.`);
        }
    }

    // Play 5 rounds by recalling choice functions each time to get fresh inputs
    console.log("--- ROUND 1 ---");
    playRound(getHumanChoice(), getComputerChoice());

    console.log("--- ROUND 2 ---");
    playRound(getHumanChoice(), getComputerChoice());

    console.log("--- ROUND 3 ---");
    playRound(getHumanChoice(), getComputerChoice());

    console.log("--- ROUND 4 ---");
    playRound(getHumanChoice(), getComputerChoice());

    console.log("--- ROUND 5 ---");
    playRound(getHumanChoice(), getComputerChoice());

    // Declare final winner at the end of 5 rounds
    console.log("--- FINAL MATCH SCORE ---");
    console.log(`Human Score: ${humanScore} | Computer Score: ${computerScore}`);
    
    if (humanScore > computerScore) {
        console.log("Match Outcome: Overall Winner is the Human!");
    } else if (computerScore > humanScore) {
        console.log("Match Outcome: Overall Winner is the Computer!");
    } else {
        console.log("Match Outcome: The series ended in a tie!");
    }
}

// Start the game execution
playGame();