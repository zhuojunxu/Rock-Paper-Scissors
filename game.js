// Below is the initital vision of the game.
// for now, just use paper, rock and scissors (no need to check case sensitivity)
const randomHand = ["Rock", "Paper", "Scissors"]
let computerCounter = 0;
let playerCounter = 0;

function getComputerChoice() {
    const res = randomHand[Math.floor(Math.random() * randomHand.length)];
    return res;
}

// Paper Rock Scissors Logic.
function playRound(playerSelection, computerSelection) {
    // your code here!
    if (playerSelection === computerSelection) {
        return "Game tie";
    } else {
        if ((playerSelection === "Rock" && computerSelection === "Scissors") || (playerSelection === "Scissors" && computerSelection === "Paper") || (playerSelection === "Paper" && computerSelection === "Rock")) {
            playerCounter++;
            console.log("Player Scores:" +computerCounter);
            return "You Win! " + playerSelection + " beats " + computerSelection;
        } else if ((playerSelection === "Scissors" && computerSelection === "Rock") || (playerSelection === "Paper" && computerSelection === "Scissors") || (playerSelection === "Rock" && computerSelection === "Paper")) {
            computerCounter++;
            console.log("Computer Scores:" +computerCounter);
            return "You Lose! " + computerSelection + " beats " + playerSelection;
        }
    }
}

// Game Play for 5 rounds
function game() {
    for (let i = 0; i <= 4; i++) {
        const playerSelectionInit = prompt("Please Enter the result");
        let playerSelection = playerSelectionInit.charAt(0).toUpperCase() + playerSelectionInit.substring(1).toLowerCase();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
}

function result() {
    if (computerCounter == playerCounter) {
        console.log("Overall Game Result are tied.")
    } else if (computerCounter < playerCounter) {
        console.log("You win to the computer.");
    } else {
        console.log("You lose to the computer.")
    }
}

const gameProcess = game();
console.log(gameProcess);
const gameResult = result();
console.log(gameResult);
console.log("Computer scores: " + computerCounter);
console.log("Player scores: " + playerCounter);