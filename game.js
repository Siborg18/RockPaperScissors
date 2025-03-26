const container = document.querySelector("#container")

const div = document.createElement("div");

div.classList.add("content");
div.style.color = "blue"
div.textContent = "Game Starting";

container.appendChild(div);

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice() {
    let myNum = getRandomInt(3);
    return myNum;
}

function getUserInput() {
    userInput = prompt("Rock, paper, or scissors?");
    return userInput;
}

function getString(numIn) {
    if (numIn == 0) {
        return "rock";
    }
    else if (numIn == 1) {
        return "paper";
    }
    else if (numIn == 2) {
        return "scissors";
    }
}

function checkHumanChoiceValid(userInput) {
    if (userInput == "rock" || userInput == "paper" || userInput == "scissors" || userInput == "init") {
        return true
    }
    else {
        return false;
    }
}

function getHumanChoice(userInput) {
    try {
        userInput = userInput.toLowerCase()
    }

    catch (typeerror) {
        div.innerText = "Type error caught";
        return "quit";
    }
    

    if (checkHumanChoiceValid(userInput) == true) {
        return userInput;
    }
    else if (userInput == "quit" || userInput == "q" || userInput == "exit" || userInput == "leave" || userInput == "stop" || userInput == "cancel" ) {
        return "quit";
    }
    else
    {
        return 0;
    }    
}

let humanScore = 0;
let computerScore = 0;
let outcome = "draw";

function gameLogic(humanInput, computerInput) {
    if (humanInput == computerInput) {
        outcome = "draw"
        console.log("The player chose", userInput, "the computer chose", computerInput, "The outcome is:", outcome);
        div.innerText = "The player chose", userInput, "the computer chose", computerInput, "The outcome is:", outcome;
    }
    else if (humanInput == "rock" && computerInput == "scissors" 
        || humanInput == "scissors" && computerInput == "paper" 
        || humanInput == "paper" && computerInput == "rock") {
            humanScore += 1;
            outcome = "player wins";
        console.log("The player chose", userInput, "the computer chose", computerInput, "The outcome is:", outcome);
        div.innerText = "The player chose", userInput, "the computer chose", computerInput, "The outcome is:", outcome;
    }

    else {
        outcome = "computer wins";
        computerScore += 1;
        console.log("The player chose", userInput, "the computer chose", computerInput, "The outcome is:", outcome);
        div.innerText = "The player chose", userInput, "the computer chose", computerInput, "The outcome is:", outcome;
    }
}


let userInput = "";
let roundLimit = 5000;
let roundNumber = 1;

while (roundNumber < 6) {
    alert("Stop prompt from breaking everything");
    console.log("The score is player:", humanScore, "computer:", computerScore, "Round number", roundNumber);
    div.innerText = "The score is player:", humanScore, "computer:", computerScore, "Round number", roundNumber;
    userInput = setTimeout(getUserInput(), 500);
    userInput = getHumanChoice(userInput);
    computerInput = getString(getComputerChoice());
    if (userInput == "quit")
    {
        break;
    }
    else if (userInput == 0) {
        continue;
    }
    else
    {
        console.log(gameLogic(userInput, computerInput));        
    }
    roundNumber += 1;
}

div.innerText = "Game Ended";
console.log("Game ended")