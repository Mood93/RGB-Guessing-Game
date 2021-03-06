//colors array
var colors = generateRandomColorArray(6);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");

resetButton.addEventListener("click", function(){
    //gen all new colors
    color = generateRandomColorArray(6);
    //pick a new random color from array
    pickedColor = pickColor();
    //change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor; 
    //change colors of squares
    for (var i = 0; i < squares.length; i++){
        squares[i].style.background = colors[i];
    }
    
    h1.style.background = null;
})


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
    resetButton.textContent = "Play Again?";
    changeColorsOnWin(color);
    h1.style.background = color;
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

//select random value from colors[]
function pickColor() {
    var random = Math.floor(Math.random() * colors.length - 1);
    return colors[random];
}

function generateRandomColorArray(num) {
    //make an array 
    var arr = []
    //repeat num times
    //add num rand colors to arr
    for (var i = 0; i < num; i++) {
        //get rand color and push into arr
        arr.push(randomColor());
    }
    //return arr
    return arr;
}

//generate arr of rand colors
function randomColor() {
    //pick a red
    var r = Math.floor(Math.random() * 256);
    //pick a green
    var g = Math.floor(Math.random() * 256);
    //pick a blue
    var b = Math.floor(Math.random() * 256);
    
    return "rgb(" + r + ", " + g + ", " + b + ")";
 }