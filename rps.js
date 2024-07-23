"use strict";
// JM, 07/23/2024
const CHOICES = ["Rock", "Paper", "Scissors"];

let capitalizeFirstLetter = (str) => {
    return `${str.slice(0, 1).toUpperCase()}${str.slice(1, str.length).toLowerCase()}`;
}

let getComputerChoice = () => {
    return CHOICES[Math.floor(Math.random() * CHOICES.length)]
}

let getHumanChoice = () => {
    let humanChoice = capitalizeFirstLetter(prompt("Rock, Paper, or Scissors?"));
    
    if (CHOICES.includes(humanChoice)) {
        return humanChoice;
    } else {
        alert("That's not a choice!");
        return getHumanChoice();
    }
}

let playGame = () => {
    let humanScore = 0;
    let computerScore = 0;

    let playRound = (humanChoice, computerChoice) => {
    
        if (humanChoice === computerChoice) {
            console.log(`Tie! ${humanChoice} ties ${computerChoice}.`);
            return playRound(getHumanChoice(), getComputerChoice());
        } else if (

            (humanChoice === "Rock" && computerChoice === "Scissors") ||
            (humanChoice === "Paper" && computerChoice === "Rock") ||
            (humanChoice === "Scissors" && computerChoice === "Paper")
    
        ) {
            console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
            humanScore += 1;
            return `You win! ${humanChoice} beats ${computerChoice}.`;
        } else {
            console.log(`Computer wins! ${computerChoice} beats ${humanChoice}.`);
            computerScore += 1;
            return `Computer wins! ${computerChoice} beats ${humanChoice}.`;
        }
    }

    console.log("Let's play Rock, Paper, Scissors, best 3 out of 5.");
    do {
        playRound(getHumanChoice(), getComputerChoice());
    } while (humanScore <= 2 && computerScore <= 2)
    
    if (humanScore > computerScore) {
        return `You win! (${humanScore} to ${computerScore})`;
    } else {
        return `Computer wins! (${computerScore} to ${humanScore})`;
    }
}

console.log(playGame());