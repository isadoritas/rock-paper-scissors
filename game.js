function getComputerChoice() {
    const options = ['Rock', 'Paper', 'Scissors'];
    let choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() == 'rock' && computerSelection == 'Paper') {
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
function game() {
    const playerSelection = window.prompt("Rock, Paper or Scissors?");
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);
    console.log(result)
}

game();

