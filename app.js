  // DOM
    const btn = Array.from(document.querySelectorAll('#button'));
    const scorePlayer = document.querySelector('.player-score');
    const scoreComputer = document.querySelector('.computer-score');
    const rounds = document.querySelector("#round");
    const resultRound = document.querySelector("#result-round")
    
    let playerScore = 0;
    let computerScore = 0;
    let round = 0;

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
            round++;
    } 
      else if (playerSelection == computerSelection){
              result = ( "It's a tie! Try again!" );
                
   }
      else {       
              result = ("You won! " + playerSelection + " beats " + computerSelection );
              playerScore++;
              round++;
    }
    game(playerScore, computerScore) ;     
       console.log(result);
       resultRound.textContent = result; 
       scorePlayer.textContent = playerScore;
       scoreComputer.textContent = computerScore;
       rounds.textContent = round;
  }

   
  
   function game(playerScore, computerScore){

       if (playerScore == 5){
       return round = ('YOU WIN' + ' Your score:' + playerScore + ' and Computer score is:' + computerScore );
      }
       else if (computerScore ==5) {
       return round = ('COMPUTER WIN' + ' Your score:' + playerScore + ' and Computer score is:' + computerScore)
      }
    
      
   }


 // Helper functions
  
   function computerPlay() {
    let choices = ['rock', 'paper', 'scissors'];
     let item = choices[Math.floor(Math.random() * choices.length)];
     return item
  }
 
  
  
  
  

   
 