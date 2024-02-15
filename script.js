console.log("RPS")
//  RPS Variable, why does it have to be a let, and not a const //
let choices = ['rock', 'paper', 'scissors']

// function to pull the computer's choice; this seems kind of weird but I assume this has to do with arrays at the end?//

function getComputerChoice(choices){

return choices[Math.floor (Math.random() * choices.length)];

}
console.log(getComputerChoice(choices))



function playRound(playerSelection, computerSelection){

if (
    (playerSelection === 'rock' && computerSelection === 'rock')||
    (playerSelection === 'paper' && computerSelection === 'paper')||
    (playerSelection === 'scissors' && computerSelection === 'scissors'))
    {return "It's a tie!";}
else if (
    (playerSelection === 'rock' && computerSelection === 'scissors')||
    (playerSelection === 'paper' && computerSelection === 'rock')||
    (playerSelection === 'scissors' && computerSelection === 'paper'))
    {return "You Win!";}
else 
    {return "You Lose!";}

}

const playerSelection = 'paper';
const computerSelection = getComputerChoice(choices);
const result = playRound(playerSelection,computerSelection);
console.log(result);