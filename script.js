console.log("RPS")

const choices = ['rock', 'paper', 'scissors']

function getComputerChoice(choices){
return choices[Math.floor (Math.random() * choices.length)];
}
console.log(getComputerChoice(choices))

function playRound(playerSelection, computerSelection){

if (
    (playerSelection === computerSelection ))
    {return "It's a tie!";}
else if (
    (playerSelection === 'rock' && computerSelection === 'scissors')||
    (playerSelection === 'paper' && computerSelection === 'rock')||
    (playerSelection === 'scissors' && computerSelection === 'paper'))
    {return "You Win!";}
else 
    {return "You Lose!";}
}

function playGame() {
  for(let i = 0; i <=4; i++){
    let computerSelection = getComputerChoice(choices);
    let playerSelection = prompt ("Rock, Paper, or Scissors?");
    playerSelection = playerSelection.toLowerCase();
    let result = playRound(playerSelection, computerSelection);
    console.log(result)
  }
}

playGame();