const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
//die nächste Zeile muss angepasst werden (siehe Calculator)
const possibleChoices = document.querySelectorAll('button');
let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (event) => {
    userChoice = event.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length)+1; // hier kann auch 3 benutzt werden

    if (randomNumber === 1) {
        computerChoice = 'Stein';
    }
    if (randomNumber === 2) {
        computerChoice = 'Schere';
    }
    if (randomNumber === 3) {
        computerChoice = 'Papier';
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if (computerChoice === userChoice) {
        result = 'Gleichstand!';
    }

    if (computerChoice === 'Stein' && userChoice === 'Papier') {
        result = 'Du hast gewonnen!';
    }
    if (computerChoice === 'Stein' && userChoice === 'Schere') {
        result = 'Du hast verloren!';
    }

    if (computerChoice === 'Schere' && userChoice === 'Papier') {
        result = 'Du hast verloren!';
    }
    if (computerChoice === 'Schere' && userChoice === 'Stein') {
        result = 'Du hast gewonnen!';
    }

    if (computerChoice === 'Papier' && userChoice === 'Stein') {
        result = 'Du hast verloren!';
    }
    if (computerChoice === 'Papier' && userChoice === 'Schere') {
        result = 'Du hast gewonnen!';
    }

    resultDisplay.innerHTML = result;
}