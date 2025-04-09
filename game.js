const container = document.querySelector("#container")

const div = document.createElement("div");

div.classList.add("outputText");
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
    

};


div.innerText = "Game started";
console.log("The score is player:", humanScore, "computer:", computerScore, "Round number", roundNumber);
div.innerText = "The score is player:", humanScore, "computer:", computerScore, "Round number", roundNumber;
// waitForUserEntry();
// add listener to check when a button is clicked and what did the player select
// get the computer's choice
userInput = getHumanChoice(userInput);
computerInput = getString(getComputerChoice());


div.innerText = "Game Ended";
console.log("Game ended")