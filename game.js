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
        document.getElementById('state2').innerHTML = " Game Tie"; 
    } else {
        if ((playerSelection === "Rock" && computerSelection === "Scissors") || (playerSelection === "Scissors" && computerSelection === "Paper") || (playerSelection === "Paper" && computerSelection === "Rock")) {
            playerCounter++;
            document.getElementById('player').innerHTML = "Player Score: " + playerCounter;
            document.getElementById('state2').innerHTML = " You Win! " + playerSelection + " beats " + computerSelection;
        } else if ((playerSelection === "Scissors" && computerSelection === "Rock") || (playerSelection === "Paper" && computerSelection === "Scissors") || (playerSelection === "Rock" && computerSelection === "Paper")) {
            computerCounter++;
            document.getElementById('comp').innerHTML = "Computer Score: " + computerCounter;
            document.getElementById('state2').innerHTML = " You Lose! " + computerSelection + " beats " + playerSelection;
        }
        if (playerCounter == 5) {
            document.getElementById('state2').innerHTML = "You Win! Please Click Reset Button Below."
            endGame();
        } else if (computerCounter == 5) {
            document.getElementById('state2').innerHTML = "Computer Wins! Please Click Reset Button Below."
            endGame();
        }

    }
}

// Game instruction: 
// while 1 means game coming on till either computer/player reach 5 rounds first.
// change from while(1) to for (let i = 0; i <= 4; i++) means the total number of rounds will be 5. 
function game() {

    document.getElementById("Reset").style.visibility = "hidden";

    const paperPerson = document.getElementById('Paper');
    paperContent = paperPerson.textContent;

    paperPerson.addEventListener("click", (paperPerson) => playRound(paperContent, getComputerChoice()));

    const rockPerson = document.getElementById('Rock');
    rockContent = rockPerson.textContent;

    rockPerson.addEventListener("click", (rockPerson) => playRound(rockContent, getComputerChoice()));


    const scissorsPerson = document.getElementById('Scissors');
    scissorsContent = scissorsPerson.textContent;

    scissorsPerson.addEventListener("click", (scissorsPerson) => playRound(scissorsContent, getComputerChoice()));

}


function paperFunction(paper2) {
    paper.playRound(paper2, getComputerChoice());
}


function endGame() {
    document.getElementById("Paper").disabled = true;
    document.getElementById("Rock").disabled = true;
    document.getElementById("Scissors").disabled = true;

    let element = document.getElementById("Reset");
    let notHidden = element.style.visibility = "visible";

    element.addEventListener("click", (element) => resetGame());
}


function resetGame(element) {
    document.getElementById("Reset").style.visibility = "hidden";
    playerCounter = 0;
    computerCounter = 0;
    document.getElementById('player').innerHTML = "Player Score: " + playerCounter;
    document.getElementById('comp').innerHTML = "Computer Score: " + computerCounter;
    document.getElementById('state2').innerHTML = "";
    document.getElementById('state3').innerHTML = "";
    document.getElementById("Paper").disabled = false;
    document.getElementById("Rock").disabled = false;
    document.getElementById("Scissors").disabled = false;
}

game();