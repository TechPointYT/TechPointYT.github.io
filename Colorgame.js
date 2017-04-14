var numsquares=6;
var colors = [];

var pickedColor ;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var message= document.querySelector("#message");
var h1 = document.querySelector("h1");
var reset= document.querySelector("#reset");
var easy = document.querySelector("#easy");
var hard= document.querySelector("#hard");
var modebuttons= document.querySelectorAll(".mode");

init();
function init(){


setupModeButtons();
setUpSquares();


resetBoard();

}
function setUpSquares(){
for(var i =0; i< squares.length; i++){


//add click listeners to squares
squares[i].addEventListener("click", function() {

var clickedColor = this.style.background;


if(clickedColor === pickedColor) {
			message.textContent="Correct!";
			changeColor(clickedColor);
			h1.style.background= clickedColor;
			reset.textContent="play Again?"
		} else {
			this.style.background="#232323";
			message.textContent="try Again";
		}

});


}



}
function setupModeButtons(){
for (var i = 0; i < modebuttons.length; i++) {
	modebuttons[i].addEventListener("click",function(){
      modebuttons[0].classList.remove("selected");
        modebuttons[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent === "easy" ? numsquares = 3 : numsquares = 6 ; 
      
      resetBoard();

	});


}


}



function resetBoard(){
   colors=generateRandomColors(numsquares);

	//picknew color
	pickedColor= pickColor();
	//
	message.textContent=" ";
   
    reset.textContent="New Colors";
	colorDisplay.textContent= pickedColor;
	for(var i =0; i< squares.length; i++){
if(colors[i]){

squares[i].style.display="block";
squares[i].style.background = colors[i];

}else{
squares[i].style.display="none";

}
    
    }

h1.style.background="steelblue";

}


reset.addEventListener("click", function(){
	//all new colors
resetBoard();
});


colorDisplay.textContent = pickedColor;
///////////////////////////////////////////////////////

/////////////////////////////////////////////////
function changeColor(color){
	for(var i =0; i< squares.length; i++){
squares[i].style.background=color;

}
}
////////////////////////////////////////////////////////////
function pickColor(){
	var random =Math.floor(Math.random()*colors.length);
return colors[random];
	}

function generateRandomColors(num){
var arr=[];

for (var i = 0; i < num; i++) {
     arr.push(randomColor());

	
}
	return arr;
}

function randomColor(){
var r = Math.floor(Math.random()*256);
var b = Math.floor(Math.random()*256);
var g = Math.floor(Math.random()*256);
return "rgb("+r+", "+g+", "+b+")";

}