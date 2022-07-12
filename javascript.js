console.log('Welcome to the Rock-Paper-Scissors Game!')

let playerSelection
let computerSelection
let playerScore = 0
let computerScore = 0
let result = ''


function playerPrompt() {
    let playerChoice = prompt ('Choose your Fighter: "Rock", "Paper" or "Scissors"')
    playerChoice = playerChoice.toLowerCase()
    if (playerChoice != 'rock' && playerChoice != 'paper' && playerChoice != 'scissors') {
        alert ('Wrong choice! Choose "Rock", "Paper" or "Scissors"')
    }
    return playerChoice
}
function computerPlay() {
    options = ['rock', 'paper', 'scissors']
    computerChoice = options [Math.floor(Math.random() * options.length )]
    return computerChoice
}
console.log (computerPlay ())

function playRound(playerSelection, computerSelection) {
    playerSelection = playerPrompt()
    computerSelection = computerPlay()

if ((playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'scissors' && computerSelection === 'paper') ||
    (playerSelection === 'paper' && computerSelection === 'rock')) {
    result = `You won! ${playerSelection} beats ${computerSelection}`
    playerScore++
    }

else if ((playerSelection === 'rock' && computerSelection === 'paper') ||
    (playerSelection === 'paper' && computerSelection === 'scissors') ||
    (playerSelection === 'scissors' && computerSelection === 'rock')) {
    result = `You lose! ${playerSelection} is beaten by ${computerSelection}`
    computerScore++
    }

else if ((playerSelection === 'rock' && computerSelection === 'rock') ||
    (playerSelection === 'paper' && computerSelection === 'paper') ||
    (playerSelection === 'scissors' && computerSelection === 'scissors')) {
    result = `It's a tie! Both choose ${playerSelection}`
    }
    return result

}


// function game() {
//     for (let i = 0; score(playerScore, computerScore); i++) {
//         console.log(playRound(playerSelection, computerSelection))
//         console.log (`Player - ${playerScore} : Computer - ${computerScore}`)
//     }
//     let winner = (playerScore > computerScore) ?
//         (`Player wins! Congratulations! You may continue your existence inside
//           the matrix. ${playerScore} : ${computerScore}`) :
//         (`Computer wins! The Rise of the Machines is close.
//           Prepare to the worst. ${playerScore} : ${computerScore}`)
//     console.log (winner)
// }

// game()
console.log ('Game over! If you want to try again, please refresh the page.')



/* Create three buttons, one for each selection. Add an event listener to the
buttons that call your playRound function with the correct playerSelection
every time a button is clicked. (you can keep the console.logs for this step) */

/* Add a div for displaying results and change all of your console.logs
into DOM methods. */

/* Display the running score, and announce a winner of the game once one player
reaches 5 points. */
function score(playerScore, computerScore) {
  if (playerScore == 5) {
      result = `Player wins! Congratulations! You may continue your existence inside
          the matrix. ${playerScore} : ${computerScore}`
  }
  if (computerScore == 5) {
      result = `Computer wins! The Rise of the Machines is close.
        Prepare to the worst. ${playerScore} : ${computerScore}`
  }
}
/* You will likely have to refactor (rework/rewrite) your original code
to make it work for this. That’s OK! Reworking old code is an important part
of a programmer’s life. */

/* Once you’re all done with your UI and made sure everything’s satisfactory,
commit your changes to the rps-ui branch. */
