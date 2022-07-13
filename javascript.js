let playerSelection;
let computerSelection
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
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

toggleSwitch.addEventListener('change', switchTheme, false);
function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark'); //add this
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light'); //add this
    }
}
const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
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
    result = `You won! ${playerSelection} beats ${computerSelection}.`;
    if (playerScore == 5) {
        result = `Player wins! Congratulations! You may continue your existence
        inside the Matrix.`;
        disableBtn();
    }
}

else if ((playerSelection === 'Rock' && computerSelection === 'Paper') ||
    (playerSelection === 'Paper' && computerSelection === 'Scissors') ||
    (playerSelection === 'Scissors' && computerSelection === 'Rock')) {
    computerScore++;
    result = `You lose! ${playerSelection} is beaten by ${computerSelection}.`;
    if (computerScore == 5) {
        result = `Computer wins! The Rise of the Machines is close.
        Prepare to the worst.`;
        disableBtn();
    }
}

else if ((playerSelection === 'Rock' && computerSelection === 'Rock') ||
    (playerSelection === 'Paper' && computerSelection === 'Paper') ||
    (playerSelection === 'Scissors' && computerSelection === 'Scissors')) {
    result = `It's a tie! Both choose ${playerSelection}.`;
    }
    document.getElementById('play-score').textContent = playerScore
    document.getElementById('comp-score').textContent = computerScore
    document.getElementById('play-cho').textContent = playerSelection
    document.getElementById('comp-cho').textContent = computerSelection
    document.getElementById('result').textContent = result;
    return;
}

resetBtn.addEventListener('click', () => location.reload());

btn.forEach (button => {
  button.addEventListener('click', function() {
    playRound(button.value);
  })
})
