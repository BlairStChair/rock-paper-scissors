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

function getHumanChoice(){
    var chosenOptionHuman = prompt("Welcome! Let's play. \nchoose: paper, rock or scissors");
    return chosenOptionHuman;
}



function playGame(){
    var humanScore = 0;
    var computerScore = 0;
    

       var x = getHumanChoice();
       var y = getComputerChoice();

       var h = x.toLowerCase();
      var c = y.toLowerCase();
      var result = h.concat(" ", c);

      console.log("You chose: " + h);
      console.log("Computer chose: " + c);

      if(result == 'rock paper'){
        console.log("You lose! Paper beats Rock");
        computerScore ++;
      }else if(result == 'rock scissors'){
        console.log("You win! Rock beats Scissors");
            humanScore ++;
      }else if(result == 'paper rock'){
        console.log("You win! Paper beats Rock");
            humanScore ++;
    }else if(result == 'paper scissors'){
        console.log("You lose! Scissors beats Paper");
            computerScore ++;
    }else if(result == 'scissors rock'){
        console.log("You lose! Rock beats Scissors");
            computerScore ++;
    }else if(result == 'scissors paper'){
        console.log("You win! Scissors beats Paper");
            humanScore ++;
    }else{
        console.log("You get the same option! No one wins!")
    }

console.log("The game is over!\nYour score: " + humanScore + "\nComputer score: " + computerScore);

if(humanScore > computerScore){
    console.log("You are the winner! c:");
}else if(humanScore < computerScore){
    console.log("You have lost! :c");
}else if(humanScore == computerScore){
    console.log("Draw! No one wins ;-;")
}
}

//  var humanSelection = getHumanChoice();
var computerSelection = getComputerChoice();

console.log(playGame());