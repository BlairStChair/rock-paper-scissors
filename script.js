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

const hScore = document.createElement("p");
hScore.classList.add("hScore");

const cScore = document.createElement("p");
cScore.classList.add("cScore");

function playGame(){
    var x = humanChoice.toLowerCase();
    var y = getComputerChoice().toLowerCase();

    var result = x.concat(" ", y);

    humanResultDiv.textContent = "You chose: " + x;
    choices.appendChild(humanResultDiv);

    computerResultDiv.textContent = "Computer chose: " + y;
    choices.appendChild(computerResultDiv); 

    if(result == 'rock paper'){
        resultDiv.textContent = "You lose! Paper beats Rock";
        choices.appendChild(resultDiv);
        computerScore ++;
    }else if(result == 'rock scissors'){
        resultDiv.textContent = "You win! Rock beats Scissors";
        choices.appendChild(resultDiv);
        humanScore ++;
    }else if(result == 'paper rock'){
        resultDiv.textContent = "You win! Paper beats Rock";
        choices.appendChild(resultDiv);
        humanScore ++;
    }else if(result == 'paper scissors'){
        resultDiv.textContent = "You lose! Scissors beats Paper";
        choices.appendChild(resultDiv);
        computerScore ++;
    }else if(result == 'scissors rock'){
        resultDiv.textContent = "You lose! Rock beats Scissors";
        choices.appendChild(resultDiv);
        computerScore ++;
    }else if(result == 'scissors paper'){
        resultDiv.textContent = "You win! Scissors beats Paper";
        choices.appendChild(resultDiv);
        humanScore ++;
    }else{
        resultDiv.textContent = "You get the same option! No one wins!";
        choices.appendChild(resultDiv);
    }

    hScore.textContent = humanScore;
    playerScore.appendChild(hScore);

    cScore.textContent = computerScore;
    machineScore.appendChild(cScore);

    if(humanScore == 5 || computerScore == 5){
        endGame();
    }
}

function endGame(){
    finalScoreDiv.textContent = "The game is over!";
    endOfGameResult.appendChild(finalScoreDiv);

    const winnerOrNotDiv = document.createElement("div");
    winnerOrNotDiv.classList.add("winnerOrNotDiv");

    if (humanScore > computerScore) {
        winnerOrNotDiv.textContent = "You are the winner!";
        winnerOrNotDiv.style.color = "green";
        container.appendChild(winnerOrNotDiv);
    } else {
        winnerOrNotDiv.textContent = "You have lost!";
        winnerOrNotDiv.style.color = "red";
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
const choices = document.querySelector("#choices");
const score = document.querySelector("score");
const playerScore = document.querySelector("#playerScore");
const machineScore = document.querySelector("#machineScore");
const endOfGameResult = document.querySelector("#endOfGameResult");

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

