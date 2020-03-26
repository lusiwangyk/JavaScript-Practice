var header = document.querySelector("h1");
header.style.color = "red";

/*
var color = ["red" , "blue", "orange", "yellow", "green", "pink", "black", "purple"];

function getRandomColor() {
    randomColor = color[Math.floor(Math.random() * color.length)];
}
// return randomColor;

function changeColor() {
    colorInput = getRandomColor ()
    header.style.color = colorInput;
    console.log(changeColor);
}
setInterval(changeColor(),2000);
*/
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  function changeHeaderColor() {
      colorInput = getRandomColor()
      header.style.color = colorInput;
  }

setInterval("changeHeaderColor()",1000);