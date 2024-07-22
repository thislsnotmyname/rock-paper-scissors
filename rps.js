"use strict";
// JM, 07/22/2024
let getComputerChoice = () => {
    const CHOICES = ["Rock", "Paper", "Scissors"];
    return CHOICES[Math.floor(Math.random() * CHOICES.length)]
}