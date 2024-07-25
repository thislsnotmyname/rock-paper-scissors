"use strict";
// JM, 07/24/2024
const CHOICES = ["Rock", "Paper", "Scissors"];

let humanScore = 0;
let computerScore = 0;
let winrounds = 0;

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
    RESULTS.textContent = `Player: ${humanScore} | Computer: ${computerScore}`;
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
    
    if (isGameEnd()) return endGame();
}

let isGameEnd = () => {
    if (humanScore === winrounds || computerScore === winrounds) {
        return true;
    } else {
        return false;
    }
}

let initGame = (outOf) => {
    winrounds = Math.floor(outOf / 2) + 1;
    humanScore = 0;
    computerScore = 0;

    if (document.querySelector("#winner") !== null) document.querySelector("#winner").remove();
    if (document.querySelector("#play-again") !== null) document.querySelector("#play-again").remove();

    GAME_TEXT.textContent = `Let's play Rock, Paper, Scissors, best ${winrounds} out of ${outOf}.`;
    updateResults();
}

let endGame = () => {
    if (document.querySelector("#winner") !== null) return;
    
    const WINNER = document.createElement("p");
    WINNER.id = "winner";
    if (humanScore > computerScore) {
        WINNER.textContent += `Player wins! (${humanScore} to ${computerScore})`;
    } else {
        WINNER.textContent += `Computer wins! (${computerScore} to ${humanScore})`;
    }
    GAME_TEXT.append(WINNER);
    
    const PLAY_AGAIN = document.createElement("button");
    
    PLAY_AGAIN.id = "play-again";
    PLAY_AGAIN.textContent = "Play again?";
    PLAY_AGAIN.addEventListener("click", (e) => initGame(5));
    
    BUTTONS.append(PLAY_AGAIN);
}

BUTTONS.addEventListener("click", (e) => {
    if (!CHOICES.includes(capitalizeFirstLetter(e.target.id))) return;
    if (!isGameEnd()) playRound(getHumanChoice(e.target.id), getComputerChoice());
});

initGame(5);