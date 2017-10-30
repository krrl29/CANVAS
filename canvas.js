//global
var cvsCirc;
var cvsRect;
//DOM Load function
window.onload = function () {
    //Canvas contexts
    canvasSetup();
    //ref to drawCirc
    //$("cvsCirc").addEventListener("click", drawCirc());
    //ref to drawRect
    //$("cvsRect").addEventListener("click", drawRect());
    //listeners for button events
    $("btnRect").addEventListener("click", drawRect());//.onclick = drawRect();

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
    //use context of the canvas
    ctxCirc.beginPath();
    //prompt user to enter a number and store n
    var n = $("txtCirc").value;
    //loop to draw circles n times
    for (i = 0; i < n, i++;) {
        //randomize size r- radius

        //random location on canvas (x,y)


        //randomize color and opacity
        ctxCirc.fillStyle = rdmColor();


    }
}
//function that draws rectangles
function drawRect() {
    
    var ctxRect = cvsRect.getContext("2d");//set up drawing context    
    //prompt user to enter a number and store n
    var n = $("txtRect").value;
    //grab size of canvas for location and size calculations
    //var cvsWidth = $("cvsRect").width;
    //var cvsHeight = $("cvsRect").height;
    //loop to draw boxes n times
    for (i = 0; i < 5, i++;) {
        //randomize size
        var x = Math.random() * .7//(cvsWidth - 10);
        var y = Math.random() * .7//(cvsHeight - 10);
        //random location on canvas (x,y)
        var w = Math.random() * .7//(cvsWidth / 4);
        var h = Math.random() * .7//(cvsHeight / 4);
        //randomize color and opacity
        //ctxRect.fillStyle = rdmColor();
        var r = Math.floor(Math.random() * 256); // 0-255
        var g = Math.floor(Math.random() * 256); // 0-255
        var b = Math.floor(Math.random() * 256); // 0-255
        var a = Math.random() + .2;
        //create rectangle
        ctxRect.beginPath();
        ctxRect.Rect(x, y, w, h);
        ctxRext.Stroke();
        ctxRect.fillStyle ='rgba(' + r + ',' + g + ',' + b + ',' + a + ')';

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
    return "'rgba(' + r + ',' + g + ',' + b + ',' + a + ')'";
}



