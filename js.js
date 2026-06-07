// Step 2: Write the logic to get the computer choice
console.log('file loaded')


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

    let humanScore = 0;
    let computerScore = 0;

    // Step 5: Write the logic to play a single round
    function playRound(humanChoice, computerChoice) {
        // Make parameter case-insensitive
        humanChoice = humanChoice.toLowerCase();

        if (humanChoice === computerChoice) {
            results.textContent = `It's a tie! Both chose ${humanChoice}.`;
        } else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "scissors" && computerChoice === "paper") ||
            (humanChoice === "paper" && computerChoice === "rock")
        ) {
            humanScore++; // Increment winner score
            results.textContent = `You win! ${humanChoice.toUpperCase()} beats ${computerChoice.toUpperCase()}.`;
        } else {
            computerScore++; // Increment winner score
            results.textContent = `You lose! ${computerChoice.toUpperCase()} beats ${humanChoice.toUpperCase()}.`;
        }
        
        score.textContent =`Human: ${humanScore}, Computer: ${computerScore}`;

        if(humanScore === 5) {
            winner.textContent = `the winner is human nigggggggggger`;
         btn.disabled = true;
         bttn.disabled = true;
         btttn.disabled = true;
        } else if (computerScore === 5) {
         winner.textContent = 'the winner is computer ';
         btn.disabled = true;
         bttn.disabled = true;
         btttn.disabled = true;
        }
    } 
      const score = document.querySelector('#running-score');
      
      const winner = document.querySelector('#winner');

            const btnMother = document.querySelector('#buttonMother')

        const btn =document.querySelector('#rock')
        btn.addEventListener('click', () => {
            console.log(playRound('rock', getComputerChoice()))
        })

        const bttn = document.querySelector('#paper')
        bttn.addEventListener('click', () => {
            console.log(playRound('paper', getComputerChoice()))
        })

        const btttn = document.querySelector('#scissor')
        btttn.addEventListener('click', () => {
            console.log(playRound('scissors', getComputerChoice()))
        })

        const results = document.querySelector('#display-results');

        const restart = document.querySelector('#restart');
        restart.addEventListener('click', () => {
            humanScore = 0;
            computerScore = 0;
            winner.textContent = '';
            results.textContent = '';
            score.textContent = '';
            btn.disabled = false;
            bttn.disabled = false;
            btttn.disabled = false;
        })
