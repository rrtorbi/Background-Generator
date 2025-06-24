var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("body");
var colorpicked = document.querySelector("h3");




function color1Picker(){
    body.style.background = "linear-gradient(to right, " + color1.value + "," + color2.value + ")";

    // color1Picker.innerHTML = body.style.background + ";"
    colorpicked.textContent = body.style.background;
}


color1.addEventListener("input", color1Picker);

color2.addEventListener("input", color1Picker);