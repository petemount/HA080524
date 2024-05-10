let finalcode = '';

function colortable() {
    var farbcodebasis = '0123456789ABCDEF';
    var finalcode = '#';
    for (var counter = 0; counter < 6; counter++) {
        finalcode = finalcode + farbcodebasis[Math.floor(Math.random() * 16)];        
    }
    return finalcode;
}
//Buttonklick
function changeColor() {
    var button = document.getElementById("farbBtn");
    var randomColor = colortable();
    button.style.backgroundColor = randomColor;
}