function getComputerChoice(){
    var randomNumber = Math.random() * 4;
    var chosenOptionComputer;

    if(randomNumber <= 1.0){
        chosenOptionComputer = "rock";
    }
    else if(randomNumber > 1.0 && randomNumber < 2.0){
        chosenOptionComputer = "paper";
    }
    else if(randomNumber >= 2.0){
        chosenOptionComputer = "scissors"
    }
    return chosenOptionComputer;
}

var humanScore = 0;
var computerScore = 0;

const humanResultDiv = document.createElement("div");
humanResultDiv.classList.add("humanResultDiv");

const computerResultDiv = document.createElement("div");
computerResultDiv.classList.add("computerResultDiv");

const resultDiv = document.createElement("div");
resultDiv.classList.add("resultDiv");

function playGame(){

    humanResultDiv.textContent = "";
    computerResultDiv.textContent = "";
    resultDiv.textContent = "";

    var x = humanChoice;
    var y = getComputerChoice();

    var h = x.toLowerCase();
    var c = y.toLowerCase();
    var result = h.concat(" ", c);

    humanResultDiv.textContent = "You chose: " + h;
    container.appendChild(humanResultDiv);

    computerResultDiv.textContent = "Computer chose: " + c;
    container.appendChild(computerResultDiv); 

    if(result == 'rock paper'){
        resultDiv.textContent = "You lose! Paper beats Rock";
        container.appendChild(resultDiv);
        computerScore ++;
    }else if(result == 'rock scissors'){
        resultDiv.textContent = "You win! Rock beats Scissors";
        container.appendChild(resultDiv);
        humanScore ++;
    }else if(result == 'paper rock'){
        resultDiv.textContent = "You win! Paper beats Rock";
        container.appendChild(resultDiv);
        humanScore ++;
    }else if(result == 'paper scissors'){
        resultDiv.textContent = "You lose! Scissors beats Paper";
        container.appendChild(resultDiv);
        computerScore ++;
    }else if(result == 'scissors rock'){
        resultDiv.textContent = "You lose! Rock beats Scissors";
        container.appendChild(resultDiv);
        computerScore ++;
    }else if(result == 'scissors paper'){
        resultDiv.textContent = "You win! Scissors beats Paper";
        container.appendChild(resultDiv);
        humanScore ++;
    }else{
        resultDiv.textContent = "You get the same option! No one wins!";
        container.appendChild(resultDiv);
    }

    if(humanScore == 5 || computerScore == 5){
        endGame();
    }
}

function endGame(){
    finalScoreDiv.textContent = "The game is over!\nYour score: " + humanScore + "\nComputer score: " + computerScore;
    container.appendChild(finalScoreDiv);

    const winnerOrNotDiv = document.createElement("div");
    winnerOrNotDiv.classList.add("winnerOrNotDiv");

    if (humanScore > computerScore) {
        winnerOrNotDiv.textContent = "You are the winner! c:";
        container.appendChild(winnerOrNotDiv);
    } else {
        winnerOrNotDiv.textContent = "You have lost! :c";
        container.appendChild(winnerOrNotDiv);
    }

    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
}

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

const container = document.querySelector("#container");

var humanChoice = "";

const finalScoreDiv = document.createElement("div");
finalScoreDiv.classList.add("finalScoreDiv");

rock.addEventListener("click", () => {
    humanChoice = "rock";
    playGame();
});

paper.addEventListener("click", () => {
    humanChoice = "paper";
    playGame();
});

scissors.addEventListener("click", () => {
    humanChoice = "scissors";
    playGame();
});

