//global
var cvsCirc;
var cvsRect;
//DOM Load function
window.onload = function () {
    //Canvas contexts
    canvasSetup();
    //listeners for button events
    $("btnRect").addEventListener("click", drawRect); 
    $("btnCirc").addEventListener("click", drawCirc);
    //listeners for clear events
    $("cvsCirc").addEventListener("click", clearCirc);
    $("cvsRect").addEventListener("click", clearRect);

    //test
    //cvsRect.beginPath();
    //cvsRect.fillRect(20,20,30,20);
}
//canvas setup
function canvasSetup() {
    cvsCirc = $("cvsCirc");
    cvsRect = $("cvsRect");
}
//id function
function $(id) {
    return document.getElementById(id);
}
//function that draws circles
function drawCirc() {
    //set up drawing context
    var ctxCirc = cvsCirc.getContext("2d");

    //grab number from text box and store in n
    var n = $("txtCirc").value;
    //grab size of canvas for location and size calculations
    var cvsWidth = $("cvsCirc").width;
    var cvsHeight = $("cvsCirc").height;
    //loop to draw circles n times
    for (i = 0; i < n, i++;) {
        //randomize size r- radius

        //random location on canvas (x,y)
        var w = Math.random() * (cvsWidth / 4);
        var h = Math.random() * (cvsHeight / 4);

        //randomize color and opacity
        ctxCirc.fillStyle = rdmColor();

    


    }
}
//function that draws rectangles
function drawRect() {

    //set up drawing context    
    var ctxRect = cvsRect.getContext("2d");

    //grab number from text box and store in n
    var n = $("txtRect").value;

    //grab size of canvas for location and size calculations
    var cvsWidth = $("cvsRect").width;
    var cvsHeight = $("cvsRect").height;

    //loop to draw boxes n times
    for (i = 0; i < n; i++) {
        //randomize size
        var x = Math.random() * (cvsWidth - 10);
        var y = Math.random() * (cvsHeight - 10);

        //random location on canvas (x,y)
        var w = Math.random() * (cvsWidth / 4);
        var h = Math.random() * (cvsHeight / 4);

        //create rectangle
        ctxRect.beginPath();
        ctxRect.rect(x, y, w, h);
        //create border
        ctxRect.stroke();
        //randomize color
        ctxRect.fillStyle = rdmColor();
        //fill rectangle
        ctxRect.fill();

    }


}
//function that clears circle canvas
function clearCirc() {

}
//function that clears rectangle canvas
function clearRect() {

}

function rdmColor() {
    var r = Math.floor(Math.random() * 256); // 0-255
    var g = Math.floor(Math.random() * 256); // 0-255
    var b = Math.floor(Math.random() * 256); // 0-255
    var a = Math.random();
    var out = 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';
    return out;
}