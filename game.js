function getComputerChoice() {
    const options = ['Rock', 'Paper', 'Scissors'];
    let choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const resetButton = document.getElementById("reset");

resetButton.addEventListener("click", function() {
    playerSelectionScore = 0;
    computerSelectionScore = 0;

    result.textContent = "";
    score.textContent = "";

});

rockButton.addEventListener("click", function() {
    const playerSelection = "Rock";
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
});

paperButton.addEventListener("click", function() {
    const playerSelection = "Paper";
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    });

scissorsButton.addEventListener("click", function() {
    const playerSelection = "Scissors";
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
});

let playerSelectionScore = 0;
let computerSelectionScore = 0;


function playRound(playerSelection, computerSelection) {
    if (playerSelectionScore >= 5) {
        score.textContent = playerSelectionScore + " points for player  VS " + computerSelectionScore + " points for computer ";
        result.textContent = "Congratulations! You won the game!";
        return;
    }
    else if (computerSelection >= 5) {
        score.textContent = playerSelectionScore + " points for player  VS " + computerSelectionScore + " points for computer ";
        result.textContent = "You failed! Computer won the game!";
        return;
    }
    else if (playerSelection.toLowerCase() == 'Rock' && computerSelection == 'Paper') {
        result.textContent = 'You lost! Paper beats rock!';
        computerSelectionScore++
        score.textContent = playerSelectionScore + " points for player  VS " + computerSelectionScore + " points for computer ";
    }
    else if (playerSelection.toLowerCase() == 'rock' && computerSelection == 'Rock') {
        result.textContent = 'A tie!';
        score.textContent = playerSelectionScore + " points for player  VS " + computerSelectionScore + " points for computer ";
    }
    else if (playerSelection.toLowerCase() == 'rock' && computerSelection == 'Scissors') {
        result.textContent = 'You won! Rock beats scissors!';
        playerSelectionScore++
        score.textContent = playerSelectionScore + " points for player  VS " + computerSelectionScore + " points for computer ";
    }
    else if (playerSelection.toLowerCase() == 'paper' && computerSelection ==  'Paper') {
        result.textContent = 'A tie!';
        score.textContent = playerSelectionScore + " points for player  VS " + computerSelectionScore + " points for computer ";
    }
    else if (playerSelection.toLowerCase() == 'paper' && computerSelection == 'Rock') {
        result.textContent = 'You won! Paper beats rock!';
        playerSelectionScore++
        score.textContent = playerSelectionScore + " points for player  VS " + computerSelectionScore + " points for computer ";
    }
    else if (playerSelection.toLowerCase() == 'paper' && computerSelection == 'Scissors') {
        result.textContent = 'You lost! Scissors beats paper!';
        computerSelectionScore++
        score.textContent = playerSelectionScore + " points for player  VS " + computerSelectionScore + " points for computer ";
    }
    else if (playerSelection.toLowerCase() == 'scissors' && computerSelection == 'Paper') {
        result.textContent = 'You won! Scissors beats paper!';
        playerSelectionScore++
        score.textContent = playerSelectionScore + " points for player  VS " + computerSelectionScore + " points for computer ";
    }
    else if (playerSelection.toLowerCase() == 'scissors' && computerSelection == 'Rock') {
        result.textContent = 'You lost! Scissors beats rock!';
        computerSelectionScore++
        score.textContent = playerSelectionScore + " points for player  VS " + computerSelectionScore + " points for computer ";
    }
    else if (playerSelection.toLowerCase() == 'scissors' && computerSelection == 'Scissors') {
        result.textContent = 'A tie!';
        score.textContent = playerSelectionScore + " points for player  VS " + computerSelectionScore + " points for computer ";
    }
}
const container = document.querySelector('#container');
const result = document.createElement('div');
const score = document.createElement('div');
score.classList.add('score');
result.classList.add('result');
container.appendChild(result);
container.appendChild(score);

