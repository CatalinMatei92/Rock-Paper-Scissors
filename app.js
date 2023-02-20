  // DOM
    const btn = document.querySelectorAll('#button');
    const scorePlayer = document.querySelector('.player-score');
    const scoreComputer = document.querySelector('.computer-score');
    const resultRound = document.querySelector("#result-round");
    const btnReload = document.querySelector("#reload")
    
    let playerScore = 0;
    let computerScore = 0;
    
    
  // Start Game when user clicks on the button  
    btn.forEach(button =>{
      button.addEventListener('click', function (){
        if (playerScore >= 5 || computerScore >= 5){
            return;
          
        }
        playRound(button.value)
      })
    })
 
    
   
    // Game logic

 function playRound(playerSelection) { 
            let result = ''  ; 
           let computerSelection = computerPlay ();
    
      if  ((playerSelection === "rock" && computerSelection === "paper") ||
          (playerSelection === "paper" && computerSelection === "scissors") ||
          (playerSelection === "scissors" && computerSelection === "rock"))
            {
            result = ("You lose! " + computerSelection + " beats " + playerSelection );
            computerScore++;
          
          } 
      else if (playerSelection == computerSelection){
              result = ( "It's a tie! Try again!" ); 
         }
      else {       
              result = ("You won! " + playerSelection + " beats " + computerSelection );
              playerScore++; 
            }
         
       resultRound.textContent = result; 
       scorePlayer.textContent = playerScore;
       scoreComputer.textContent = computerScore;
       game(playerScore, computerScore) ;
      
  }

   
  
   function game(playerScore, computerScore){
    
       if (playerScore == 5){
        resultRound.textContent = ("CONGRATULATIONS!!! You beat the computer" );
        
       
      }
       else if (computerScore ==5) {
        resultRound.textContent = ("Unfortunately you lost, try one more time!");
        
      }
    
   }

   btnReload.addEventListener('click', () => {

    location.reload()

  })

 // Helper function
  
   function computerPlay() {
    let choices = ['rock', 'paper', 'scissors'];
     let item = choices[Math.floor(Math.random() * choices.length)];
     return item
  }
 

  btnReload.addEventListener('click', () => {

    location.reload()

  })
 
  
    
  


  
    
   
 