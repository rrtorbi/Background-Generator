var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("body");
var colorpicked = document.querySelector("h3");
var button = document.getElementById("randomize");


var style1 = "linear-gradient(to right, " + color1.value + "," + color2.value + ")";
button.style.background = style1;
body.style.background = style1;
colorpicked.textContent = body.style.background;


function color1Picker(){
    body.style.background = "linear-gradient(to right, " + color1.value + "," + color2.value + ")";
    var style1 = "linear-gradient(to right, " + color1.value + "," + color2.value + ")";

    button.style.background = style1;
    // color1Picker.innerHTML = body.style.background + ";"
    colorpicked.textContent = body.style.background;
}
function getRandomColor(){
    return "#" + Math.floor(Math.random() * 16777216).toString(16).padStart(6, '0');
}

button.addEventListener("click", () => {
    color1.value = getRandomColor();
    color2.value = getRandomColor();
    body.style.background = "linear-gradient(to right, " + color1.value + "," + color2.value + ")";
    var style1 = "linear-gradient(to right, " + color1.value + "," + color2.value + ")";
    button.style.background = style1;
    body.style.background = style1;
    colorpicked.textContent = body.style.background;

})


color1.addEventListener("input", color1Picker);

color2.addEventListener("input", color1Picker);