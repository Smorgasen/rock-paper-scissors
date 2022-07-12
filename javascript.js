let playerSelection;
let computerSelection = ;
let playerScore = 0;
let computerScore = 0;
let result = '';
let btn = document.querySelectorAll('div.optionBtn button');
let resetBtn = document.querySelector('#reset');

function disableBtn() {
    btn.forEach(button => {
        button.disabled = true;
    });
}

function computerPlay() {
    options = ['Rock', 'Paper', 'Scissors'];
    computerChoice = options [Math.floor(Math.random() * options.length )];
    return computerChoice;
}

function playRound(playerSelection, computerSelection) {
    computerSelection = computerPlay();

if ((playerSelection === 'Rock' && computerSelection === 'Scissors') ||
    (playerSelection === 'Scissors' && computerSelection === 'Paper') ||
    (playerSelection === 'Paper' && computerSelection === 'Rock')) {
    playerScore++;
    result = `<br>You won! ${playerSelection} beats ${computerSelection}. <br><br> Player : ${playerScore} <br> Computer: ${computerScore} <br><br>`;
    if (playerScore == 5) {
        result += `<strong>Player wins!</strong> Congratulations! You may continue your existence inside the Matrix.<br><br> Choose again to Restart.`;
        disableBtn();
    }
}

else if ((playerSelection === 'Rock' && computerSelection === 'Paper') ||
    (playerSelection === 'Paper' && computerSelection === 'Scissors') ||
    (playerSelection === 'Scissors' && computerSelection === 'Rock')) {
    computerScore++;
    result = `<br>You lose! ${playerSelection} is beaten by ${computerSelection}. <br><br> Player : ${playerScore} <br> Computer: ${computerScore} <br><br>`;
    if (computerScore == 5) {
        result += `<strong>Computer wins!</strong> The Rise of the Machines is close.
        Prepare to the worst.<br><br> Choose again to Restart.`;
        disableBtn();
    }
}

else if ((playerSelection === 'Rock' && computerSelection === 'Rock') ||
    (playerSelection === 'Paper' && computerSelection === 'Paper') ||
    (playerSelection === 'Scissors' && computerSelection === 'Scissors')) {
    result = `<br>It's a tie! Both choose ${playerSelection}.<br><br> Player : ${playerScore} <br> Computer: ${computerScore} <br><br>`;
    }
    document.getElementById('result').innerHTML = result;
    return;
}

resetBtn.addEventListener('click', () => location.reload());

btn.forEach (button => {
  button.addEventListener('click', function() {
    playRound(button.value);
  })
})
