// so! a game of rock paper scissors:
// define the constant of rock, paper and scissor

const choices = ["rock", "paper", "scissor"]; 
// rock beats scissor but loses to paper 
// paper beats rock but loses to scissor 
// scissor beats paper but loses to rock

let PlayersChoice = prompt(`What's your weapon?: `).toLowerCase()

// random selection. why javascript hate people?

Array.prototype.sample = function(){
    return this[Math.floor(Math.random()*this.length)];
  }


let ComputerSelection = choices.sample()

// now we want an input by a button normally and a random choice from computer

function Play(PlayersChoice, ComputerSelection) {
    if (PlayersChoice === "rock" && ComputerSelection === "paper") {
        console.log(`You chose ${PlayersChoice} and computer chose ${ComputerSelection}. You lost.`);
    } else if (PlayersChoice === "paper" && ComputerSelection === "scissor") {
        console.log(`You chose ${PlayersChoice} and computer chose ${ComputerSelection}. You lost.`);
    } else if (PlayersChoice === "scissor" && ComputerSelection === "rock") {
        console.log(`You chose ${PlayersChoice} and computer chose ${ComputerSelection}. You lost.`);
    } else if (PlayersChoice === ComputerSelection) {
        console.log(`You chose ${PlayersChoice} and computer chose ${ComputerSelection}. It's a tie`);
    } else {
        console.log(`You chose ${PlayersChoice} and computer chose ${ComputerSelection}. You win.`);
    }
}

Play(PlayersChoice, ComputerSelection)