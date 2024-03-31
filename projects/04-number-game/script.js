let gameStart = true;
let tries = 5;
const numberArray = [70, 80, 90, 100, 110, 120, 130, 140, 150, 160];

const marchContainer = document.getElementById("march-Container");
const randomNumber = Math.floor(Math.random() * numberArray.length);
const randomAnswer = numberArray[randomNumber];
const marchMessage = document.getElementById("game-status");
const resetGameButton = document.getElementById("reset-game-btn");
const userInput = document.getElementsByClassName("number");

for (let i = 0; i < userInput.length; i++) {

    userInput[i].addEventListener('click', highlightAnswer);

    function highlightAnswer() {
        if (gameStart === true) {
            userInput[i].style.backgroundColor = "#D0A2F7";
        }
    }

    userInput[i].addEventListener('click', checkingAnswer);

    function checkingAnswer() {

        const userGuess = userInput[i].textContent;

        if (userGuess == randomAnswer && tries > 0) {
            if (gameStart === true) {
                marchMessage.innerHTML = "Nice work! The correct answer is " + randomAnswer + "!";
                marchContainer.innerHTML = "";
                marchContainer.setAttribute("src", "../assets/March 7th Stickers/March_7th_Sticker_05.webp");
                gameStart = false;
            }
        } else if (userGuess < randomAnswer && tries > 0) {
            if (gameStart === true) {
                tries--;
                marchContainer.innerHTML = "";
                marchContainer.setAttribute("src", "../assets/March 7th Stickers/March_7th_Sticker_11.webp");
                marchMessage.innerHTML = "Too low";
            }
        } else if (userGuess > randomAnswer && tries > 0) {
            if (gameStart === true) {
                tries--;
                marchContainer.innerHTML = "";
                marchContainer.setAttribute("src", "../assets/March 7th Stickers/March_7th_Sticker_12.webp");
                marchMessage.innerHTML = "Too high";
            }
        } else {
            if (gameStart === true) {
                marchMessage.innerHTML = "Better luck next time! The correct answer is " + randomAnswer;
                marchContainer.innerHTML = "";
                marchContainer.setAttribute("src", "../assets/March 7th Stickers/March_7th_Sticker_01.webp");
                gameStart = false;
            }
        }
    }
}

resetGameButton.addEventListener("click", function() {
    window.location.reload();
});