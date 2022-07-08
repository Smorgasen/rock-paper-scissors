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
// selection must be case insensitive

// console output
// console.log (playRound("RoCk", computerPlay()))
const playerSelection = "RocK"
const computerSelection = computerPlay()
console.log (playRound(playerSelection, computerSelection))