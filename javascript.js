let playerSelection
let computerSelection
let playerScore = 0
let computerScore = 0
let result = ''
let btn = document.querySelectorAll('button');

function computerPlay() {
    options = ['Rock', 'Paper', 'Scissors']
    computerChoice = options [Math.floor(Math.random() * options.length )]
    return computerChoice
}

function playRound(playerSelection, computerSelection) {
    computerSelection = computerPlay()

if ((playerSelection === 'Rock' && computerSelection === 'Scissors') ||
    (playerSelection === 'Scissors' && computerSelection === 'Paper') ||
    (playerSelection === 'Paper' && computerSelection === 'Rock')) {
    playerScore++
    result = `<br>You won! ${playerSelection} beats ${computerSelection}. <br><br> Player : ${playerScore} <br> Computer: ${computerScore} <br><br>`
    if (playerScore == 5) {
        result += `<strong>Player wins!</strong> Congratulations! You may continue your existence inside the Matrix.<br><br> Refresh the page to Restart.`
    }
}

else if ((playerSelection === 'Rock' && computerSelection === 'Paper') ||
    (playerSelection === 'Paper' && computerSelection === 'Scissors') ||
    (playerSelection === 'Scissors' && computerSelection === 'Rock')) {
    computerScore++
    result = `<br>You lose! ${playerSelection} is beaten by ${computerSelection}. <br><br> Player : ${playerScore} <br> Computer: ${computerScore} <br><br>`
    if (computerScore == 5) {
        result += `<strong>Computer wins!</strong> The Rise of the Machines is close.
          Prepare to the worst.<br><br> Refresh the page to Restart.`
    }
}

else if ((playerSelection === 'Rock' && computerSelection === 'Rock') ||
    (playerSelection === 'Paper' && computerSelection === 'Paper') ||
    (playerSelection === 'Scissors' && computerSelection === 'Scissors')) {
    result = `<br>It's a tie! Both choose ${playerSelection}.<br><br> Player : ${playerScore} <br> Computer: ${computerScore} <br><br>`
    }
    document.getElementById('result').innerHTML = result
    return

}

btn.forEach (button => {
  button.addEventListener('click', function() {
    playRound(button.value)
  })
})




/* ++ Create three buttons, one for each selection. Add an event listener to the
buttons that call your playRound function with the correct playerSelection
every time a button is clicked. (you can keep the console.logs for this step) */

/* ++ Add a div for displaying results and change all of your console.logs
into DOM methods. */

/* ++ Display the running score, and announce a winner of the game once one player
reaches 5 points. */

/* You will likely have to refactor (rework/rewrite) your original code
to make it work for this. That’s OK! Reworking old code is an important part
of a programmer’s life. */

/* Once you’re all done with your UI and made sure everything’s satisfactory,
commit your changes to the rps-ui branch. */
