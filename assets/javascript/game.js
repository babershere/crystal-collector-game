// Watch the demo.
// The player will have to guess the answer, just like in Hangman. This time, though, the player will guess with numbers instead of letters.
// Here's how the app works:
// There will be four crystals displayed as buttons on the page.
// The player will be shown a random number at the start of the game.
// When the player clicks on a crystal, it will add a specific amount of points to the player's total score.
// Your game will hide this amount until the player clicks a crystal.
// When they do click one, update the player's score counter.
// The player wins if their total score matches the random number from the beginning of the game.
// The player loses if their score goes above the random number.
// The game restarts whenever the player wins or loses.
// When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.
// The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.
// Option 1 Game design notes

// The random number shown at the start of the game should be between 19 - 120.
// Each crystal should have a random hidden value between 1 - 12.



//Var

var red = 0;
var blue = 0;
var green = 0;
var yellow = 0;
var currentScore = 0;
var scoreNeeded = 0;
var wins = 0;
var losses = 0;


//functions and codes



function getRandom(min, max) {
    return Math.floor(Math.random() * (120 - 19 + 1)) + 19;

}

function startGame() {

    currentScore = 0;

    scoreNeeded = Math.floor(Math.random() * (120 - 19 + 1)) + 19;

    red = getRandom(1, 12);
    blue = getRandom(1, 12);
    green = getRandom(1, 12);
    yellow = getRandom(1, 12);


    $("#currentScore").html(currentScore);
    $("#scoreNeeded").html(scoreNeeded);

    // console.log("Score Needed: " + scoreNeeded);
    // console.log("Red: " + red + " | Blue:" + blue + " | Green: " + green + " | Yellow: " + yellow);
  
}

function inputScores(red, blue, green, yellow) {
    currentScore = currentScore + red, blue, green, yellow;

    $("#currentScore").html(currentScore);

    win();

    // console.log("Your Score: " + currentScore);
}

function win() {
    if (currentScore > scoreNeeded) {
        alert("Try again!");
        // console.log("try again");

        losses++;

        $("#losses").html(losses);
        startGame();
    } else if (currentScore == scoreNeeded) {
        alert("good job!");
        // console.log("good job")

        wins++;
        $("wins").html(wins);

        startGame();
    }

}

//click events

startGame()

$("#red").click(function() {
    inputScores(red);
    // alert("you clicked red");	
});

$("#blue").click(function() {
    inputScores(blue);
    // alert("you clicked blue");	
});

$("#green").click(function() {
    inputScores(green);

    // alert("you clicked green");	
});

$("#yellow").click(function() {
    inputScores(yellow);
    // alert("you clicked yellow");	
});