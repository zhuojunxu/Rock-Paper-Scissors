// Below is the initital vision of the game.
// for now, just use paper, rock and scissors (no need to check case sensitivity)
const randomHand = ["Rock", "Paper", "Scissors"]

function getComputerChoice() {
    const res = randomHand[Math.floor(Math.random() * randomHand.length)];
    //console.log("Computer generated" + res);
    return res;
}

function playRound(playerSelection, computerSelection) {
    // your code here!
    if (playerSelection === computerSelection) {
        return "Game tie";
    } else {
        if ((playerSelection === "Rock" && computerSelection === "Scissors") || (playerSelection === "Scissors" && computerSelection === "Paper") || (playerSelection === "Paper" && computerSelection === "Rock")) {
            return "You Win! " + playerSelection + " beats " + computerSelection;
        } else {
            return "You Lose! " + computerSelection + " beats " + playerSelection;
        }
    }
}
   
const playerSelectionInit = prompt("Please Enter the result");
let playerSelection = playerSelectionInit.charAt(0).toUpperCase() + playerSelectionInit.substring(1).toLowerCase();
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));