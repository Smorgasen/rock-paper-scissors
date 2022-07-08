// const rock paper scissor as array
const play = ["Rock", "Paper", "Scissors"]
// const playLower = play.map(play => play.toLowerCase())
// console.log (playLower)

// a function "computerPlay" that randomly returns either rock, paper or scissors
function computerPlay (){
    return play [Math.floor(Math.random() * play.length)] 
}

// a function "computerPlay" that takes two parameters "playerSelection" and "computerSelection" and returns a string that declares the winner of the round
function playRound(playerSelection, computerSelection) {
    computerSelection = computerPlay().toLowerCase()
    playerSelection = playerSelection.toLowerCase()
    
    if (playerSelection === "rock" && computerSelection === "paper") {
        return console.log("You Lose! Paper beats Rock")
    }
    else if (playerSelection === "rock" && computerSelection === "scissors") {
        return console.log("You Won! Rock beats Scissors")
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        return console.log("You Won! Paper beats Rock")
    }
    else if (playerSelection === "paper" && computerSelection === "scissors") {
        return console.log ("You Lose! Scissors beats Paper")
    }
    else if (playerSelection === "scissors" && computerSelection === "rock") {
        return console.log ("You Lose! Rock beats Scissors")
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        return console.log ("You Won! Scissors beats Paper")
    }
    else {
        return console.log("Good game! No one won")
    }
}       


// a function called game with the playRound function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end
function game() {
    for (let i = 0; i < 5; i++) {
        playerSelection = prompt("Choose: Rock, Paper or Scissors!")
        if (playRound("rock", "paper")) {
            console.log (`You Lose! Player ${i}: Computer ${i+1}`)
        }
        // if (playRound() === "You Lose! Paper beats Rock" || playRound() === "You Lose! Scissors beats Paper" || playRound() === "You Lose! Rock beats Scissors") {
        //     console.log(`You Lose! Player ${i}: Computer ${i+1}`)
        // }
        
    }
}


// console output

// console.log (playRound("RoCk", computerPlay()))
let playerSelection = "0"
const computerSelection = computerPlay()
console.log(playRound(playerSelection, computerSelection))
console.log (game())