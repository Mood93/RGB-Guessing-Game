//colors array
var colors = [
    "rgb(255, 0 , 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)"
];

var squares = document.querySelectorAll(".square");
var pickedColor = randomColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");

//initial testing color
colorDisplay.textContent = pickedColor;

//main
for (var i = 0; i < squares.length; i++){
    //add init colors to squares
    squares[i].style.background = colors[i];
    
    //add click listeners to squares
    squares[i].addEventListener("click", function(){
        //grab color of clicked square
        var clickedColor = this.style.backgroundColor;
        
        // win/lose
        clickedColor === pickedColor ? correctGuess(clickedColor) : wrongGuess(this);
    })
}


// Correct Guess
function correctGuess(color) {
    messageDisplay.textContent = "CORRECT!";
    changeColorsOnWin(color);
}

// Correct Guess
function wrongGuess(square) {
    square.style.backgroundColor = null;
    messageDisplay.textContent = "Try Again!";
}

// Change Colors on Win
function changeColorsOnWin(color){
    
    for (var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
    
}

function randomColor() {
    var random = Math.floor(Math.random() * colors.length - 1);
    return colors[random];
}