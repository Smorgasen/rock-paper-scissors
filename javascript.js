console.log('Welcome to the Rock-Paper-Scissors Game!')

let playerSelection
let computerSelection
let playerScore = '0'
let computerScore = '0'
let roundWinner = ''

// Get input from player and alert if input is invalid and make it case insensitive
function playerPrompt() {
    let playerChoise = prompt ('Choose your Fighter: "Rock", "Paper" or "Scissors"')
    playerChoise = playerChoise.toLowerCase()
    if (playerChoise != 'rock' && playerChoise != 'paper' && playerChoise != 'scissors') {
        alert ('Wrong choice! Choose "Rock", "Paper" or "Scissors"')
    }
}
// Generate computer selection by random
function computerPlay() {
    options = ["rock", "paper", "scissors"]
    computerChoice [Math.floor (Math.random()* options.length)] 
}

// Get both player and computer choises and show round winner and return result
function playRound(playerSelection, computerSelection) {
    playerSelection = playerPrompt()
    computerSelection = computerPlay()


if (playerSelection === 'rock' && computerSelection === 'scissors' ||
    playerSelection === 'scissors' && computerSelection === 'paper' ||
    playerSelection === 'paper' && computerSelection === 'rock' ||)

if (playerSelection === 'rock' && computerSelection === 'paper' ||
    playerSelection === 'paper' && computerSelection === 'scissors' ||
    playerSelection === 'scissors' && computerSelection === 'rock' ||)

if (playerSelection === 'rock' && computerSelection === 'rock' ||
    playerSelection === 'paper' && computerSelection === 'paper' ||
    playerSelection === 'scissors' && computerSelection === 'scissors' ||)


}   


// Play in loop 5 times and show the overal winner


// Start game and show the goodbye result