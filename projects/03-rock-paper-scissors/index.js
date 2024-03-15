// Step 1: Define the choices available in the game
const choices = ["rock", "paper", "scissors"];

// Step 2: Get references to HTML elements
const player1ChoiceDisplay = document.getElementById("player1-choice-display") // Get the element with the id of "player1-choice-display"
const player1ScoreDisplay = document.getElementById("player1-score") // Get the element with the id of "player1-score"
const player2ChoiceDisplay = document.getElementById("player2-choice-display") // Get the element with the id of "player2-choice-display"
const player2ScoreDisplay = document.getElementById("player2-score") // Get the element with the id of "player2-score"

const gameStatusDisplay = document.getElementById("game-status") // Get the element with the id of "game-status"
const resetGameButton = document.getElementById("reset-game-btn") // Get the element with the id of "reset-game-btn"

const rockBtn = document.getElementById("rock-btn") // Get the element with the id of "rock-btn"
const paperBtn = document.getElementById("paper-btn") // Get the element with the id of "paper-btn"
const scissorsBtn = document.getElementById("scissors-btn") // Get the element with the id of "scissors-btn"

let player1Pick;
let player2Pick;

// Step 3: Add event listeners to the buttons
rockBtn.addEventListener("click", function() {
    const userHand = document.createElement("img");
    userHand.src = "assets/hand-rock-solid.svg";
    player1ChoiceDisplay.innerHTML = ""; //clears inner HTML content
    player1ChoiceDisplay.appendChild(userHand); //sets the image element inside the container
    player1Pick = 'rock';
    playGame();
});

paperBtn.addEventListener("click", function() {
    const userHand = document.createElement("img");
    userHand.src = "assets/hand-paper-solid.svg";
    player1ChoiceDisplay.innerHTML = "";
    player1ChoiceDisplay.appendChild(userHand);
    player1Pick = 'paper';
    playGame();
});

scissorsBtn.addEventListener("click", function() {
    const userHand = document.createElement("img");
    userHand.src = "assets/hand-scissors-solid.svg";
    player1ChoiceDisplay.innerHTML = "";
    player1ChoiceDisplay.appendChild(userHand);
    player1Pick = 'scissors';
    playGame();
});


resetGameButton.addEventListener("click", function() {
    player1ChoiceDisplay.innerHTML = "";
    player2ChoiceDisplay.innerHTML = "";
    window.location.reload();
});

// Step 4: Define helper functions that will be the actions of the game
let player1Score = 0; //for making the game count the score of the player
let player2Score = 0;

function playGame() {
    const compHand = document.createElement("img");
    player2Pick = choices[Math.floor(Math.random() * choices.length)];

    if (player2Pick == 'rock') {
        compHand.src = "assets/hand-rock-solid.svg";
        player2ChoiceDisplay.innerHTML = "";
        player2ChoiceDisplay.appendChild(compHand);
    } else if (player2Pick == 'paper') {
        compHand.src = "assets/hand-paper-solid.svg";
        player2ChoiceDisplay.innerHTML = "";
        player2ChoiceDisplay.appendChild(compHand);
    } else if (player2Pick == 'scissors') {
        compHand.src = "assets/hand-scissors-solid.svg";
        player2ChoiceDisplay.innerHTML = "";
        player2ChoiceDisplay.appendChild(compHand);
    }

    //all the possible combinations of rock, paper, scissors
    if (player1Pick === player2Pick) {
        gameStatusDisplay.textContent = "It is a tie!";
    } else if (player1Pick === 'rock' && player2Pick === 'scissors') {
        gameStatusDisplay.textContent = "Player 1 wins!";
        player1Score++;
        updateScores();
    } else if (player1Pick === 'paper' && player2Pick === 'rock') {
        gameStatusDisplay.textContent = "Player 1 wins!";
        player1Score++;
        updateScores();
    } else if (player1Pick === 'scissors' && player2Pick === 'paper') {
        gameStatusDisplay.textContent = "Player 1 wins!";
        player1Score++;
        updateScores();
    } else if (player1Pick === 'rock' && player2Pick === 'paper') {
        gameStatusDisplay.textContent = "Player 2 wins!";
        player2Score++;
        updateScores();
    } else if (player1Pick === 'paper' && player2Pick === 'scissors') {
        gameStatusDisplay.textContent = "Player 2 wins!";
        player2Score++;
        updateScores();
    } else if (player1Pick === 'scissors' && player2Pick === 'rock') {
        gameStatusDisplay.textContent = "Player 2 wins!";
        player2Score++;
        updateScores();
    }
}

function updateScores() {
    if (player1Score == 11) {
        gameStatusDisplay.textContent = "Game over! Player 1 won! :D";
        document.body.style.backgroundColor = "#C3DF8D";
        rockBtn.remove();
        paperBtn.remove();
        scissorsBtn.remove();
    } else if (player2Score == 11) {
        gameStatusDisplay.textContent = "Game over! Player 2 won! D:";
        document.body.style.backgroundColor = "#DD5E6A";
        rockBtn.remove();
        paperBtn.remove();
        scissorsBtn.remove();
    } else {
        player1ScoreDisplay.textContent = player1Score;
        player2ScoreDisplay.textContent = player2Score;
    }

}

// Step 5: Embrace mistakes as opportunities for learning and improvement, and fuel your curiosity by exploring new the wonders of frontend development. The vast tech world is filled with exciting discoveries waiting for you. Ask when you have the need or want to! Just keep coding!
