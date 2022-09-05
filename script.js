let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
    return Math.floor(Math.random() * 9);
}

const compareGuesses = (humanNo, compNo, secretNo) => {
    if(Math.abs(humanNo - secretNo) < Math.abs(compNo - secretNo)) {
        return true;
    }
    else if(Math.abs(humanNo - secretNo) == Math.abs(compNo - secretNo)) {
        return true;
    }
    else {
        return false;
    }
}

const updateScore = winner => {
    if(winner == "human"){
        humanScore++;
    }
    else {
        computerScore++;
    }
}


const advanceRound = () => {
    currentRoundNumber++;
}