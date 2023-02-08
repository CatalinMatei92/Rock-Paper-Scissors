let playerScore = 0
let computerScore = 0
let playerSelection;
let computerSelection;
 
 //let playerSelection = prompt("Please insert Rock Paper or Scissor ");
 
 //let playerSelection = "rock"//playerSelection.toLowerCase();

 
 function computerPlay() {
   let choices = ['rock', 'paper', 'scissor']
    return choices[Math.floor(Math.random() * choices.length)]
 }

   // let computerSelection = computerPlay(); 
 /*
 const myArray = [ "rock", "paper", "scissor"];
 function getComputerChoice(myArray){
  
    const randomItem = Math.floor(Math.random() * myArray.length);
    const item = myArray[randomItem];
    return item;
}
 
const computerSelection =  getComputerChoice(myArray);
*/
   
 
 function playRound(playerSelection, computerSelection) {   
     let result = ''   
    
    if (playerSelection === computerSelection){
       result = ( "It's tie! Try again!" + " computer choice is  " + computerSelection);
       
       
   }

    else  if (playerSelection === "rock" && computerSelection === "paper") {
        result = ("You lose!" );
        computerScore += 1;
    }
    else if (playerSelection === "rock" && computerSelection === "scissor") {
        result = ("Congratulation!!! You've won this time!" );
        playerScore += 1;
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        result =  ("Congratulation!!! You've won this time" );
        playerScore += 1;
    }
    else if (playerSelection === "paper" && computerSelection === "scissor") {
        result =  ("You lose!" );
        computerScore += 1;
    } 
    else if (playerSelection === "scissor" && computerSelection === "rock") {
            result = ("You lose!" );
            computerScore += 1;
    }
    else if (playerSelection === "scissor" && computerSelection === "paper") {
        result = ("Congratulation!!! You've won this time" );
        playerScore += 1;
}
    
    else {
        result = ( "Please insert the correct word  " + "computer choice is  " + computerSelection)
    }
    console.log(result)
    
  }

  for ( let i = 0; i<5; i++) {
   // getComputerChoice(myArray);
   computerSelection = computerPlay();
   playerSelection = prompt("Please insert Rock Paper or Scissor ");
    playRound(playerSelection, computerSelection) ;
   // console.log(playRound(playerSelection, computerSelection))
}


 
  

 
  
  
  
  

   

  
    alert('Player score is  ' + playerScore + ' Computer score is   ' + computerScore);



 