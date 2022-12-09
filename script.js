let playerWins = 0;
let playerSelection = '';
let computerWins = 0;

function getComputerChoice() {
    let randomChoice = Math.floor((Math.random() * 3) + 1);
    if (randomChoice == 1){
        return "Rock";
    } else if (randomChoice == 2) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function playRound(playerSelection, getComputerChoice){

    let player = playerSelection;
    let computer = getComputerChoice;
    console.log(playerSelection);
    console.log(getComputerChoice);
    if (player === computer) {
        return "It is a tie!"
    } else {
        if (player === "Rock" && computer === "Scissors") {
            return "Player wins!"
        } else if (player == "Scissors" && computer == "Paper") {
            return "Player wins!"
        } else if (player == "Paper" && computer == "Rock"){
            return "Player wins!"
        } else {
            return "Computer wins!"
        }
    }
}

function game(){
    let heading = document.querySelector('h3');
        let round = playRound(playerSelection,getComputerChoice());
        if (playerWins != 5 && computerWins != 5) { 
            if (round == "Player wins!") {
                heading.textContent = round;
                playerWins +=1;
            } else if (round == "Computer wins!") {
                heading.textContent = round;
                computerWins += 1;
            } else {
                heading.textContent = round;
            }} else {
                if (playerWins > computerWins){
                    heading.textContent = "Player is the winner! Refresh to play again!"
                } else {
                    heading.textContent = "Computer is the winner! Refresh to play again!" 
                }
            }
            const score = document.querySelector(".score");
            score.textContent = `Score: Player ${playerWins} - Computer ${computerWins}`;

        };

const buttons = document.querySelectorAll('button');

buttons.forEach(button => button.addEventListener('click', function(){
    playerSelection = button.textContent;
    game();
    console.log(playerWins);
    console.log(computerWins);
}))



   
