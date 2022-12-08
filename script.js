
// Picks a random number and assigns a value depending on it. 
// If number is 1 = rock, else if number is 2 = paper, else if number is 3 = scissors.
function getComputeChoice() {
    let randomChoice = Math.floor((Math.random() * 3) + 1);
    if (randomChoice == 1){
        return "rock";
    } else if (randomChoice == 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

// Asks the user to submit his choice, check if it is rock, paper or scissors.
// if yes return it, if not ask the user to input his choice again.
function playerSelection(){

    function playerChoice() {
        let pick = prompt("What is your choice for this round - Rock, Paper or Scissors?: ")
        return pick.toLowerCase();
    } 
    
    while (true){
        let choice = playerChoice();
        if (choice == "rock" || choice == "paper" || choice == "scissors"){
            return choice
        } else {
            console.log(choice);;
        }
    } 
}
// Calls the two functions above and uses their return values to compare and determine who is the winner based on the conditions.
// Returns a string with the winner and the choices.
function playRound(playerSelection, getComputeChoice){

    let player = playerSelection.toUpperCase();
    let computer = getComputeChoice.toUpperCase();

    if (player === computer) {
        return "It is a tie!"
    } else {
        if (player === "ROCK" && computer === "SCISSORS") {
            return `Player wins! ${player} beats ${computer}!`
        } else if (player == "SCISSORS" && computer == "PAPER") {
            return `Player wins! ${player} beats ${computer}!`
        } else if (player == "PAPER" && computer == "ROCK"){
            return `Player wins! ${player} beats ${computer}!`
        } else {
            return `Computer wins! ${computer} beats ${player}!`
        }
    }
}

// Records the winner for each round. 5 rounds are created via for loop. Return the winner and the results.
function game(){
    let playerWins = 0;
    let computerWins = 0;
    for (i = 0; i < 5; i++) {
        let round = playRound(playerSelection(), getComputeChoice());
        
        if (round[0] == "C") {
            computerWins ++;
        } else if (round[0] == "P"){
            playerWins ++;
        }

        console.log(round);
        console.log(`Player: ${playerWins} - Computer: ${computerWins}`);
    } 

    if (playerWins == computerWins){
        console.log("It is a tie! The score is equal!");
    }else if (playerWins > computerWins){
        console.log(`Player is the winner!`);
    } else {
        console.log("Computer is the winner!");
    }
}

game();