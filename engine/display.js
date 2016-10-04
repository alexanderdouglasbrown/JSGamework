//USAGE
//  createdisplay.canvas(1920,1080); //Width and height of desired resolution
//Resolution will automatically scale to fit window.
//Cannot currently handle a height that's greater than a width.

var display = {
	resolutionWidth: 640,
	resolutionHeight: 480,
	canvas: null,
	context: null
}

function createCanvas(width, height) {
    display.resolutionWidth = width;
    display.resolutionHeight = height;

    display.canvas = document.createElement("canvas");
    if ((window.innerHeight * (display.resolutionWidth/display.resolutionHeight)) >= (window.innerWidth)){
        display.canvas.width = window.innerWidth;
        display.canvas.height = window.innerWidth * (display.resolutionHeight/display.resolutionWidth);
        display.context = display.canvas.getContext("2d");
        document.body.insertBefore(display.canvas, document.body.childNodes[0]);
        display.context.scale(window.innerWidth / display.resolutionWidth, window.innerWidth / display.resolutionWidth);
    }else{
        display.canvas.width = window.innerHeight * (display.resolutionWidth/display.resolutionHeight);
        display.canvas.height = window.innerHeight;
        display.context = display.canvas.getContext("2d");
        document.body.insertBefore(display.canvas, document.body.childNodes[0]);
        display.context.scale(window.innerHeight / display.resolutionHeight, window.innerHeight / display.resolutionHeight);
    }
}

//Look for resize and redraw
window.addEventListener("resize", resizeCanvas);
window.addEventListener("orientationchange", resizeCanvas);

function resizeCanvas(e) {
    if ((window.innerHeight * (display.resolutionWidth/display.resolutionHeight)) >= (window.innerWidth)){
        display.canvas.width = window.innerWidth;
        display.canvas.height = window.innerWidth * (display.resolutionHeight/display.resolutionWidth);
        display.context.scale(window.innerWidth / display.resolutionWidth, window.innerWidth / display.resolutionWidth);
    }else{
        display.canvas.width = window.innerHeight * (display.resolutionWidth/display.resolutionHeight);
        display.canvas.height = window.innerHeight;
        display.context.scale(window.innerHeight / display.resolutionHeight, window.innerHeight / display.resolutionHeight);
    }
    draw();
}