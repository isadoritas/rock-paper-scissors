function getComputerChoice() {
    const options = ['Rock', 'Paper', 'Scissors'];
    let choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");

rockButton.addEventListener("click", function() {
    const playerSelection = "Rock";
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
});

paperButton.addEventListener("click", playRound) {
    playerSelection = "Paper";
}

scissors.addEventListener("click", playRound) {
    playerSelection = "Scissors";
}


function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() == 'Rock' && computerSelection == 'Paper') {
        return window.alert('You lost! Paper beats rock!');
    }
    else if (playerSelection.toLowerCase() == 'rock' && computerSelection == 'Rock') {
        return window.alert('A tie!');
    }
    else if (playerSelection.toLowerCase() == 'rock' && computerSelection == 'Scissors') {
        return window.alert('You won! Rock beats scissors!');
    }
    else if (playerSelection.toLowerCase() == 'paper' && computerSelection ==  'Paper') {
        return window.alert('A tie!');
    }
    else if (playerSelection.toLowerCase() == 'paper' && computerSelection == 'Rock') {
        return window.alert('You won! Paper beats rock!');
    }
    else if (playerSelection.toLowerCase() == 'paper' && computerSelection == 'Scissors') {
        return window.alert('You lost! Scissors beats paper!');
    }
    else if (playerSelection.toLowerCase() == 'scissors' && computerSelection == 'Paper') {
        return window.alert('You won! Scissors beats paper!');
    }
    else if (playerSelection.toLowerCase() == 'scissors' && computerSelection == 'Rock') {
        return window.alert('You lost! Scissors beats rock!');
    }
    else if (playerSelection.toLowerCase() == 'scissors' && computerSelection == 'Scissors') {
        return window.alert('A tie!');
    }
}

console.log(playerSelection);
const rock = document.querySelectorAll('#rock');
const paper = document.querySelectorAll('#paper');
const scissors = document.querySelectorAll('#scissors');



