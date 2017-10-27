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


    //test
    cvsRect.beginPath();
    cvsRect.fillRect(20,20,30,20);
}
//canvas setup
function canvasSetup() {
    cvsCirc = $("cvsCirc").getContext("2d");
    cvsRect = $("cvsRect").getContext("2d");
}
//id function
function $(id) {
    return document.getElementById(id);
}
//function that draws circles
function drawCirc() {
    //use context of the canvas
    cvsCirc.beginPath();
    //prompt user to enter a number and store n
    var n = $("txtCirc");
    //loop to draw circles n times
    for (i = 0; i < n, i++;) {
        //randomize size r- radius

        //random location on canvas (x,y)


        //randomize color and opacity
        cvsCirc.fillStyle = rdmColor();


    }
}
//function that draws rectangles
function drawRect() {
    //use context of the canvas
    cvsRect.beginPath();
    //prompt user to enter a number and store n
    var n = $("txtRect");
    //grab size of canvas for location and size calculations
    var cvsWidth = $("cvsRect").width;
    var cvsHeight = $("cvsRect").height;
    //loop to draw boxes n times
    for (i = 0; i < n, i++;) {
        //randomize size
        var x = Math.floor(Math.random() * (cvsWidth - 10));
        var y = Math.floor(Math.random() * (cvsHeight - 10));
        //random location on canvas (x,y)
        var w = Math.floor(Math.random() * (cvsWidth / 4));
        var h = Math.floor(Math.random() * (cvsHeight / 4));
        //randomize color and opacity
        cvsRect.fillStyle = rdmColor();
        //create rectangle
        cvsRect.fillRect(x, y, w, h);

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


//hi doug
