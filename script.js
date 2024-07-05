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

function playGame(){


    var x = humanChoice;
    var y = getComputerChoice();

    var h = x.toLowerCase();
    var c = y.toLowerCase();
    var result = h.concat(" ", c);

    const humanResultDiv = document.createElement("div");
    humanResultDiv.classList.add("humanResultDiv");
    humanResultDiv.textContent = "You chose: " + h;
    container.appendChild(humanResultDiv);

    const computerResultDiv = document.createElement("div");
    computerResultDiv.classList.add("computerResultDiv");
    computerResultDiv.textContent = "Computer chose: " + c;
    container.appendChild(computerResultDiv); 

    const resultDiv = document.createElement("div");
    resultDiv.classList.add("resultDiv");

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

    const finalScoreDiv = document.createElement("div");
    finalScoreDiv.classList.add("finalScoreDiv");
    finalScoreDiv.textContent = "The game is over!\nYour score: " + humanScore + "\nComputer score: " + computerScore;
    container.appendChild(finalScoreDiv);

    const winnerOrNotDiv = document.createElement("div");
    winnerOrNotDiv.classList.add("winnerOrNotDiv");

    if(humanScore > computerScore){
        winnerOrNotDiv.textContent = "You are the winner! c:";
        container.appendChild(winnerOrNotDiv);
    }else if(humanScore < computerScore){
        winnerOrNotDiv.textContent = "You have lost! :c";
        container.appendChild(winnerOrNotDiv);
    }else if(humanScore == computerScore){
        winnerOrNotDiv.textContent = "Draw! No one wins ;-;";
        container.appendChild(winnerOrNotDiv);
    }
}


const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

const container = document.querySelector("#container");

var humanChoice = "";

rock.addEventListener("click", () => {
    humanChoice = "rock";
    do{
    playGame();
    }while(humanScore > 5 || computerScore > 5);
});
paper.addEventListener("click", () => {
    humanChoice = "paper";
    do{
        playGame();
        }while(humanScore > 5 || computerScore > 5);
});
scissors.addEventListener("click", () => {
    humanChoice = "scissors";
    do{
        playGame();
        }while(humanScore > 5 || computerScore > 5);
});