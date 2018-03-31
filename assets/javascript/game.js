//establish starting variables
var wins = 0;
var losses = 0;
var guesses = [];
var guessesLeft = 9;

//store possible choices for the computer
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var random = Math.floor(Math.random() * computerChoices.length);

//grabs an element to guess
var computerChoice = computerChoices[random];

//resets the game
var restart = function () {
    guessesLeft = 9;
    guesses = [];
    var rando = Math.floor(Math.random() * computerChoices.length);
    computerChoice = computerChoices[rando];
    console.log(computerChoice);
}
console.log(computerChoice);

//runs the game
document.onkeyup = function (event) {

    //stores the guess
    var userGuess = event.key;


    if ((userGuess === "a") || (userGuess === "b") || (userGuess === "c") || (userGuess === "d") || (userGuess === "e") || (userGuess === "f") || (userGuess === "g") || (userGuess === "h") || (userGuess === "i") || (userGuess === "j") || (userGuess === "k") || (userGuess === "l") || (userGuess === "m") || (userGuess === "n") || (userGuess === "o") || (userGuess === "p") || (userGuess === "q") || (userGuess === "r") || (userGuess === "s") || (userGuess === "t") || (userGuess === "u") || (userGuess === "v") || (userGuess === "w") || (userGuess === "x") || (userGuess === "y") || (userGuess === "z")) {

        if (userGuess === computerChoice) {
            guessesLeft--;
            wins++;
            restart();
        }
        else if ((userGuess !== computerChoice) && (guesses.indexOf(userGuess) < 0)) {
            //need to do this only if the guess hasn't already been pressed
            guesses.push(userGuess);
            guessesLeft--;
        }
        else if (guessesLeft === 0) {
            losses++;
            restart();
        }
    }

    var html =
        "<p> You chose: " + guesses + "</p>" + "<p>Wins: " + wins + "</p>" + "<p>Losses: " + losses + "</p>" + "<p>Guesses Left: " + guessesLeft + "</p>";

    document.querySelector("#game").innerHTML = html;
}