 
 
 const playerSelection = prompt("Please insert Rock Paper or Scissor ");
 const myArray = [ "rock", "paper", "scissor"];
 let player = playerSelection.toLowerCase()

 function playRound(playerSelection, computerSelection) {

    if (player === computerSelection){
        console.log( "It's tight! Try again!" + "computer choice is  " + computerSelection)
    }

    else  if (player === "rock" && computerSelection === "paper") {
        console.log ("You lose!" )
    }
    else if (player === "rock" && computerSelection === "scissor") {
        console.log ("Congratulation!!! You've won this time!" )
    }
    else if (player === "paper" && computerSelection === "rock") {
        console.log ("Congratulation!!! You've won this time" )
    }
    else if (player === "paper" && computerSelection === "scissor") {
        console.log ("You lose!" )
    } 
    else if (player === "scissor" && computerSelection === "rock") {
            console.log ("You lose!" )
    }
    else if (player === "scissor" && computerSelection === "paper") {
        console.log ("Congratulation!!! You've won this time" )
}
    
    else {
        console.log( "Please insert the correct word  " + "computer choice is  " + computerSelection)
    }
    
  }


  function getComputerChoice(myArray){
       const randomItem = Math.floor(Math.random() * myArray.length);
       const item = myArray[randomItem];
       return item;
  }
  
  const computerSelection = getComputerChoice(myArray);
  
  

  //for (let i = 0; i < 5; i++ ) {

  //  if (playerSelection <)
 // }
    

  



  
  
  
    

    
    





 // console.log(getComputerChoice(myArray));
   
  //console.log(playRound(playerSelection));
 // playerSelection = "rock";
 



  console.log(playRound(player, computerSelection))