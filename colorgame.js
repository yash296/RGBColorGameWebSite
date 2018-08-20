var numSquares = 6;
var colors = generateRandomColors(numSquares);
var pickedColor = pickColor();
var squares = document.querySelectorAll(".square");
var colorDisplay= document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message")
colorDisplay.textContent = pickedColor;
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

for (var i = 0; i < modeButtons.length; i++) {
 modeButtons[i].addEventListener("click", function(){
 	modeButtons[0].classList.remove("selected");
 	modeButtons[1].classList.remove("selected");
 	this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
 	reset();
 });
}

function reset(){
	colors = generateRandomColors(numSquares); 
	// pick new random colors 
	pickedColor = pickColor();
	//change color diplay to match picked color
	colorDisplay.textContent = pickedColor;
	messageDisplay.textContent = "";
	resetButton.textContent = "New Colors";
	//change colors of squares
	for (var i = 0; i < squares.length; i++) {
	 if (colors[i]) {
	 	squares[i].style.display = "block";
	 	 squares[i].style.backgroundColor = colors [i];
	 }
	 else {
	 	squares[i].style.display = "none";
	 }

	}
	h1.style.backgroundColor = "steelblue";
}



resetButton.addEventListener("click", function(){
reset();	
})

for (var i = 0; i < squares.length; i++) {
	
	//add initial colors to squares
	squares[i].style.backgroundColor = colors[i];
	
	//add event listeners to clicked squares
	squares[i].addEventListener("click", function(){
	
	//grab color of clicked square
	var clickedColor =this.style.backgroundColor;

	//compare color to pickedColor
	if (clickedColor === pickedColor){
		h1.style.backgroundColor = clickedColor;
		messageDisplay.textContent = "Correct!";
		changeColors(clickedColor);
		resetButton.textContent = "Reset";
	}
	else{
		this.style.backgroundColor = "#232323";
		messageDisplay.textContent= "Try again";
		}
	});

}

function changeColors(color){
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random()* colors.length)
	return colors[random];
}

function generateRandomColors(num){
	//make an array
	var arr = [];
	
	//add num random colors to the array
	for (var i = 0; i < num; i++) {
	//get random color and push into arr
	 arr.push(randomColor());
	}
	
	//return array
	return arr;
}

function randomColor(){
	//pick a red from 0 to 255
	var r = Math.floor(Math.random()*256);
	//pick a green from 0 to 255
	var g = Math.floor(Math.random()*256); 
	//pick a blue from 0 to 255
	var b = Math.floor(Math.random()*256);
	return "rgb(" + r + ", " + g + ", " + b + ")"; 
}