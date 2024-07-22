"use strict";
// JM, 07/22/2024
const CHOICES = ["rock", "paper", "scissors"];
let getComputerChoice = () => {
    return CHOICES[Math.floor(Math.random() * CHOICES.length)]
}
let getHumanChoice = () => {
    let humanChoice = prompt("Rock, Paper, or Scissors?").toLowerCase();
    
    if (CHOICES.includes(humanChoice)) {
        return humanChoice;
    } else {
        alert("That's not a choice!");
        return getHumanChoice();
    }
}
console.log(getComputerChoice());
console.log(getHumanChoice());