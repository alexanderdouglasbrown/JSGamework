var global = {
    canvas : document.createElement("canvas"),
}

function initialize(){
    global.canvas.width = window.innerWidth;
    global.canvas.height = window.innerHeight;
    global.context = global.canvas.getContext("2d");
    document.body.insertBefore(global.canvas, document.body.childNodes[0]);
}

function draw(){
    global.context.fillStyle="blue";
    global.context.fillRect(0,0,global.canvas.width,global.canvas.height);
}

//Look for resize and redraw
window.addEventListener("resize", resizeCanvas, false);

function resizeCanvas(e) {
    global.canvas.width = window.innerWidth;
    global.canvas.height = window.innerHeight;
    draw();
}

function mainLoop(){
    //update();
    draw();
    window.setTimeout(mainLoop, 1000 / 60);
}
