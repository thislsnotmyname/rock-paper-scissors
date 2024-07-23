"use strict";
// JM, 07/22/2024
const CHOICES = ["Rock", "Paper", "Scissors"];
let humanScore = 0;
let computerScore = 0;
let tieScore = 0;

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

let playRound = (humanChoice, computerChoice) => {
    
    if (humanChoice === computerChoice) {
        console.log(`Tie! ${humanChoice} ties ${computerChoice}.`);
        tieScore += 1;
        return `Tie! ${humanChoice} ties ${computerChoice}.`;
    } else if (

        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")

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

playRound(getHumanChoice(), getComputerChoice());