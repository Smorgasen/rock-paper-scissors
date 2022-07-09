console.log('Welcome to the Rock-Paper-Scissors Game!')

let playerSelection
let computerSelection
let playerScore = '0'
let computerScore = '0'
let roundWinner = ''
let result

// Get input from player and alert if input is invalid and make it case insensitive
function playerPrompt() {
    let playerChoice = prompt ('Choose your Fighter: "Rock", "Paper" or "Scissors"')
    playerChoice = playerChoice.toLowerCase()
    if (playerChoice != 'rock' && playerChoice != 'paper' && playerChoice != 'scissors') {
        alert ('Wrong choice! Choose "Rock", "Paper" or "Scissors"')
    }
}
// Generate computer selection by random
function computerPlay() {
    options = ["rock", "paper", "scissors"]
    computerChoice = [Math.floor(Math.random() * options.length)] 
    return 
}

// Get both player and computer choices and show round winner and return result
function playRound(playerSelection, computerSelection) {
    playerSelection = playerPrompt()
    computerSelection = computerPlay()

if (playerSelection === 'rock' && computerSelection === 'scissors' ||
    playerSelection === 'scissors' && computerSelection === 'paper' ||
    playerSelection === 'paper' && computerSelection === 'rock') {
    result = `You won! ${playerSelection} beats ${computerSelection}`
    playerScore++
    }

else if (playerSelection === 'rock' && computerSelection === 'paper' ||
    playerSelection === 'paper' && computerSelection === 'scissors' ||
    playerSelection === 'scissors' && computerSelection === 'rock') {
    result = `You lose! ${playerSelection} is beaten by ${computerSelection}`
    computerScore++
    }

else if (playerSelection === 'rock' && computerSelection === 'rock' ||
    playerSelection === 'paper' && computerSelection === 'paper' ||
    playerSelection === 'scissors' && computerSelection === 'scissors') {
    result = `It's a tie! Both choose ${playerSelection}`
    }
return result
}   


// Play in loop 5 times and show the overal winner
function game() {
    for (let i = 0; (playerScore + computerScore) < 5; i++) {
        console.log(playRound(playerSelection, computerSelection))
        console.log (`Player ${playerScore} : Computer ${computerScore}`)
    }
    let winner = (playerScore > computerScore) ?
        `Player wins! ${playerScore} : ${computerScore}` :
        `Computer wins! ${playerScore} : ${computerScore}`
    console.log (winner)
}

// Start game and show the goodbye result

game()
console.log ('If you want to try again, please refresh the page.')