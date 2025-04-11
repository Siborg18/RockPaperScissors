const container = document.querySelector("#container")

var myOutput = document.getElementById("primary-output");
var myUpdate = document.getElementById("round-update");

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice() {
    let myNum = getRandomInt(3);
    return myNum;
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
    // added buttons so is now obsolete
    if (userInput == "rock" || userInput == "paper" || userInput == "scissors" || userInput == "init") {
        return true
    }
    else {
        return false;
    }
}

function getHumanChoice(userInput) {
    // added buttons so is now obsolete
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

var humanScore = 0;
var computerScore = 0;
let gameResult = "draw";

function gameLogic(humanInput, computerInput) {
    if (humanInput == computerInput) {
        gameResult = "draw"
        console.log("The player chose", userInput, "the computer chose", computerInput, "The outcome is:", gameResult);
        myUpdate.innerHTML = `The player chose, ${humanInput}, the computer chose, ${computerInput}, The outcome is: ${gameResult}`
    }
    else if (humanInput == "rock" && computerInput == "scissors" 
        || humanInput == "scissors" && computerInput == "paper" 
        || humanInput == "paper" && computerInput == "rock") {
            humanScore += 1;
            gameResult = "player wins";
        console.log("The player chose", userInput, "the computer chose", computerInput, "The outcome is:", gameResult);
        myUpdate.innerHTML = `The player chose, ${humanInput}, the computer chose, ${computerInput}, The outcome is: ${gameResult}`
    }

    else {
        gameResult = "computer wins";
        computerScore += 1;
        console.log("The player chose", userInput, "the computer chose", computerInput, "The outcome is:", gameResult);
        myUpdate.innerHTML = `The player chose, ${humanInput}, the computer chose, ${computerInput}, The outcome is: ${gameResult}`;
    }
}


let userInput = "";
let roundLimit = 5000;
var roundNumber = 1;

function waitForUserEntry() {
    // was testing user entry by letting player enter their name
    document.getElementById("userentry").addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            event.preventDefault(); // Prevents a new line in the textarea
            div.innerText = this.value;
            // document.getElementById("output").textContent = this.value;
        }
    });
    
}

function waitForButtonPress() {
    const rockButton = document.getElementById("rock");
    const paperButton = document.getElementById("paper");
    const scissorsButton = document.getElementById("scissors");

    rockButton.addEventListener("click", (event) => {
        const computerChoice = getString(getComputerChoice());
        const humanChoice = "rock"
        gameLogic(humanChoice, computerChoice);
    })

    paperButton.addEventListener("click", (event) => {
        const computerChoice = getString(getComputerChoice());
        const humanChoice = "paper"
        gameLogic(humanChoice, computerChoice);
    })

    scissorsButton.addEventListener("click", (event) => {
        const computerChoice = getString(getComputerChoice());
        const humanChoice = "scissors"
        gameLogic(humanChoice, computerChoice);
    })
};


myOutput.innerHTML = "Game Started";
console.log("The score is player:", humanScore, "computer:", computerScore, "Round number", roundNumber);
var outputText = `The score is Player: ${humanScore} Computer: ${computerScore} Round number: ${roundNumber}`;
myOutput.innerHTML =  outputText;
waitForButtonPress();
// add listener to check when a button is clicked and what did the player select
// get the computer's choice
userInput = getHumanChoice(userInput);
computerInput = getString(getComputerChoice());
