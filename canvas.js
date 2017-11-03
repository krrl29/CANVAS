//Karl Dickensheets
//Canvas Assignment
//Javascript File

//global variables
var cvsCirc;
var cvsRect;
var cvsDraw;

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
    $("btnDrawClear").addEventListener("click", clearDraw);

    //activator for draw canvas
    init();
}

//canvas setup
function canvasSetup() {
    cvsCirc = $("cvsCirc");
    cvsRect = $("cvsRect");
    cvsDraw = $("cvsDraw");
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
    for (i = 0; i < n; i++) {
        //random location on canvas (x,y)
        var x = Math.random() * (cvsWidth - 10);
        var y = Math.random() * (cvsHeight - 10);

        //randomize size r- radius
        var r = Math.random() * (cvsWidth / 6);

        //draw circle
        ctxCirc.beginPath();
        ctxCirc.arc(x, y, r, 0, 360);

        //create border
        ctxCirc.stroke();
        
        //randomize color and opacity
        ctxCirc.fillStyle = rdmColor();
        
        //fill circle
        ctxCirc.fill();
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
        //random location on canvas (x,y)
        var x = Math.random() * (cvsWidth - 10);
        var y = Math.random() * (cvsHeight - 10);

        //randomize size
        var w = Math.random() * (cvsWidth / 4);
        var h = Math.random() * (cvsHeight / 4);

        //create rectangle
        ctxRect.beginPath();
        ctxRect.rect(x, y, w, h);
        
        //create border
        ctxRect.stroke();
        
        //randomize color and opacity
        ctxRect.fillStyle = rdmColor();
        
        //fill rectangle
        ctxRect.fill();
    }
}

function drawMouse() {

}

//function that clears circle canvas
function clearCirc() {
    //set up drawing context    
    var ctxCirc = cvsCirc.getContext("2d");

    //grab size of canvas for location and size calculations
    var cvsWidth = $("cvsCirc").width;
    var cvsHeight = $("cvsCirc").height;

    //clear contents according to size of canvas
    ctxCirc.clearRect(0, 0, cvsWidth, cvsHeight);
}

//function that clears rectangle canvas
function clearRect() {
    //set up drawing context    
    var ctxRect = cvsRect.getContext("2d");

    //grab size of canvas for location and size calculations
    var cvsWidth = $("cvsRect").width;
    var cvsHeight = $("cvsRect").height;

    //clear contents according to size of canvas
    ctxRect.clearRect(0, 0, cvsWidth, cvsHeight);
}

//Function to randomize color and opacity
function rdmColor() {
    var r = Math.floor(Math.random() * 256); // 0-255
    var g = Math.floor(Math.random() * 256); // 0-255
    var b = Math.floor(Math.random() * 256); // 0-255
    var a = Math.random();
    var out = 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';
    return out;
}

//function that clears rectangle canvas
function clearDraw() {
    //set up drawing context    
    var ctxDraw = cvsDraw.getContext("2d");

    //grab size of canvas for location and size calculations
    var cvsWidth = $("cvsDraw").width;
    var cvsHeight = $("cvsDraw").height;

    //clear contents according to size of canvas
    ctxDraw.clearRect(0, 0, cvsWidth, cvsHeight);
}