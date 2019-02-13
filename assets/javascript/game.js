//Setting the variables for the counters.
var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var winCount = 0;
var lossCount = 0;
var guessLeft = 10;
var lettersGuessed = [];
var currentLetter = computerSelectedLetter();

updateGame();

function computerSelectedLetter() {
    var randomIndex = Math.floor(Math.random() * alphabet.length);
    var letter = alphabet[randomIndex];
    return letter;
}

document.onkeypress = function (event) {
    var userGuess = event.key.toUpperCase();
    lettersGuessed.push(userGuess);

    if (userGuess === currentLetter) {
        winCount++;
        currentLetter = computerSelectedLetter();
        guessLeft = 10;
        lettersGuessed = [];
    } else {
        guessLeft--;
    }

    if (guessLeft <= 0) {
        lossCount++;
        currentLetter = computerSelectedLetter();
        guessLeft = 10;
        lettersGuessed = [];
    }

    updateGame();
};

function updateGame() {
    document.getElementById('winCountText').innerHTML = winCount;
    document.getElementById('lossCountText').innerHTML = lossCount;
    document.getElementById('guessLeftText').innerHTML = guessLeft;
    document.getElementById('lettersGuessedText').innerHTML = lettersGuessed;
}