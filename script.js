console.log('Is this shit working')
const choice = ['r', 'p', 's'];

function getComputerChoice() {
    const index = Math.floor(Math.random()*3);
    // console.log(choice[index]);
    return choice[index];
}

// getComputerChoice();

function playOneRound(playerSelection, computerSelection) {
    console.log(`You picked ${playerSelection} and Computer picked ${computerSelection}`);
    switch(playerSelection) {
        case 'r':
            if (computerSelection == 'r') {
                console.log('You tied!');
                return 2;
            } else if (computerSelection == 'p') {
                console.log('Paper beats Rock. You lose!');
                return 0;
            } else {
                console.log('Rock beats Scissor. You won!');
                return 1;
            }
            break;

        case 'p':
            if (computerSelection == 'p') {
                console.log('You tied!');
                return 2;
            } else if (computerSelection == 'r') {
                console.log('Paper beats Rock. You Won!');
                return 1;
            } else {
                console.log('Scissor beats Paper. You Lose!');
                return 0;
            }
            break;

        case 's':
            if (computerSelection == 's') {
                console.log('You tied!');
                return 2;
            } else if (computerSelection == 'p') {
                console.log('Scissor beats Paper. You Won!');
                return 1;
            } else {
                console.log('Rock beats Scissor. You Lose!');
                return 0;
            }
            break;
    }
}

// playOneRound('p', getComputerChoice());

function game() {
    //5 round game
    let playerRound = 0;
    let computerRound = 0;
    for(let i = 0; i < 5; i++) {
        playerPick = prompt('Type r for rock p for paper and s for scissors');
        let result = playOneRound(playerPick, getComputerChoice());
        if (result === 1) {
            playerRound++;
        } else if (result === 0) {
            computerRound++;
        }
    }
    if (computerRound > playerRound) {
        console.log(`Player score:${playerRound}, Computer score: ${computerRound}, Computer Won!`);
    } else if (playerRound > computerRound) {
        console.log(`Player sore:${playerRound}, Computer score:${computerRound}, You Won`);
    } else {
        console.log('You and Computer Tied');
    }
}

game();