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
    if (userInput == "rock" || userInput == "paper" || userInput == "scissors") {
        return true
    }
    else {
        return false;
    }
}

function getHumanChoice() {
    let userInput = prompt("Rock, paper, or scissors?")
    userInput = userInput.toLowerCase()

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

function gameLogic(humanInput, computerInput) {
    if (humanInput == computerInput) {
        let outcome = "draw";
        console.log("The player chose", userInput, "the computer chose", computerInput, "The outcome is:", outcome);
    }
    else if (humanInput == "rock" && computerInput == "scissors" 
        || humanInput == "scissors" && computerInput == "paper" 
        || humanInput == "paper" && computerInput == "rock") {
            humanScore += 1;
            let outcome = "player wins";
        console.log("The player chose", userInput, "the computer chose", computerInput, "The outcome is:", outcome);
    }

    else {
        let outcome = "computer wins";
        computerScore += 1;
        console.log("The player chose", userInput, "the computer chose", computerInput, "The outcome is:", outcome);
    }
}
    

while (true) {
    userInput = getHumanChoice();
    computerInput = getString(getComputerChoice());
    if (userInput == "quit")
    {
        break;
    }
    else if (userInput == 0) {
        alert("Error: invalid entry");
        continue;
    }
    else
    {
        console.log("The score is player:", humanScore, "computer:", computerScore);
        console.log(gameLogic(userInput, computerInput));        
    }

}
