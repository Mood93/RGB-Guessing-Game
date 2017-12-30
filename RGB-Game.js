/********
VARIABLES
********/

//colors array
var numSquares = 6;
var colors = generateRandomColorArray(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var modeButtons = document.querySelectorAll(".mode");

for(var i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function() {
        modeButtons[0].classList.remove("selected");
        modeButtons[1].classList.remove("selected");
        this.classList.add("selected");
        
        numSquares = this.textContent === "Easy" ? 3 : 6;
        
        reset();
        
        //figure out how many square to show
        
        //pick new colors
        
        //pick a new pickedColor
        
        //update page to reflect changes
        
    })
}

/**************
EVENT LISTENERS
**************/

resetButton.addEventListener("click", function(){
    reset();
})

/***
MAIN
***/

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

/********
FUNCTIONS
********/

//reset
function reset() {
    //gen all new colors
    colors = generateRandomColorArray(numSquares);
    //pick a new random color from array
    pickedColor = pickColor();
    //change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor; 
    //change colors of squares
    for (var i = 0; i < squares.length; i++){
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    h1.style.background = null;
    h1.style.backgroundColor = "steelblue";
    messageDisplay.textContent = "";
    reset.textContent = "New Colors"
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
    var random = Math.floor(Math.random() * colors.length);
    console.log(random);
    return colors[random];
}

//generate arr of rand colors
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

function randomColor() {
    //pick a red
    var r = Math.floor(Math.random() * 256);
    //pick a green
    var g = Math.floor(Math.random() * 256);
    //pick a blue
    var b = Math.floor(Math.random() * 256);
    
    return "rgb(" + r + ", " + g + ", " + b + ")";
 }