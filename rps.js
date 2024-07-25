"use strict";
// JM, 07/24/2024
const CHOICES = ["Rock", "Paper", "Scissors"];

let humanScore = 0;
let computerScore = 0;

const BUTTONS = document.querySelector("#playing-field");
const GAME_TEXT = document.querySelector("#game-text");
const RESULTS = document.querySelector("#results");

let capitalizeFirstLetter = (str) => {
    return `${str.slice(0, 1).toUpperCase()}${str.slice(1, str.length).toLowerCase()}`;
}

let getComputerChoice = () => {
    return CHOICES[Math.floor(Math.random() * CHOICES.length)]
}

let getHumanChoice = (choice) => {
    return capitalizeFirstLetter(choice);
}

let updateResults = () => {
    RESULTS.textContent = `Human: ${humanScore} | Computer: ${computerScore}`;
}

let changeGameText = (humanChoice, computerChoice, winner) => {
    switch (winner) {
        case "Tie":
            GAME_TEXT.textContent = `Tie! ${humanChoice} ties ${computerChoice}.`;
            console.log(`Tie! ${humanChoice} ties ${computerChoice}.`);
            break;
        case "Human":
            GAME_TEXT.textContent = `You win! ${humanChoice} beats ${computerChoice}.`;
            console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
            break;
        case "Computer":
            GAME_TEXT.textContent = `Computer wins! ${computerChoice} beats ${humanChoice}.`;
            console.log(`Computer wins! ${computerChoice} beats ${humanChoice}.`);
            break;
    }
};

let playRound = (humanChoice, computerChoice) => {
    
    if (humanChoice === computerChoice) {
        changeGameText(humanChoice, computerChoice, "Tie");
    } else if (
        (humanChoice === "Rock" && computerChoice === "Scissors") ||
        (humanChoice === "Paper" && computerChoice === "Rock") ||
        (humanChoice === "Scissors" && computerChoice === "Paper")
    ) {
        changeGameText(humanChoice, computerChoice, "Human");
        humanScore += 1;
    } else {
        changeGameText(humanChoice, computerChoice, "Computer");
        computerScore += 1;
    }

    updateResults();
}

let initGame = (outOf) => {
    const WINROUNDS = Math.floor(outOf / 2) + 1;
    GAME_TEXT.textContent = `Let's play Rock, Paper, Scissors, best ${WINROUNDS} out of ${outOf}.`;
    updateResults();
    // if (humanScore === WINROUNDS || computerScore === WINROUNDS) {
    //     if (humanScore > computerScore) {
    //         return `You win! (${humanScore} to ${computerScore})`;
    //     } else {
    //         return `Computer wins! (${computerScore} to ${humanScore})`;
    //     }
    // }

}

BUTTONS.addEventListener("click", (e) => {
    if (e.target.nodeName !== "BUTTON") return;
    playRound(getHumanChoice(e.target.id), getComputerChoice());
});

initGame(5);