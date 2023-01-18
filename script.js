// var css = document.querySelector("h3");
// var color1 = document.querySelector(".color1");
// var color2 = document.querySelector(".color2");
// var body = document.getElementById("gradient");

// function setGradient() {
// 	body.style.background = 
// 	"linear-gradient(to right, " 
// 	+ color1.value 
// 	+ ", " 
// 	+ color2.value 
// 	+ ")";

// 	css.textContent = body.style.background + ";";
// }

// color1.addEventListener("input", setGradient);

// color2.addEventListener("input", setGradient);

var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
 
function setGradient() {
	body.style.background = 
	"linear-gradient(to right, "
	+ color1.value 
	+","
	+ color2.value 
	+")";

	css.textContent = body.style.background + ";"; 
	// .textContent adds text to the DOM
}

// We are grabbing the background colors and want to use them to change the background color.
color1.addEventListener("input", setGradient)
color2.addEventListener("input", setGradient)