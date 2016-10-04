//USAGE
//  createCanvas(1920,1080); //Width and height of desired resolution
//Resolution will automatically scale to fit window.
//Cannot currently handle a height that's greater than a width.

var display = {
	resolutionWidth: 640,
	resolutionHeight: 480
}

function createCanvas(width, height) {
    //Create canvas
    display.resolutionWidth = width;
    display.resolutionHeight = height;
    canvas = document.createElement("canvas");
    if ((window.innerHeight * (display.resolutionWidth/display.resolutionHeight)) >= (window.innerWidth)){
        canvas.width = window.innerWidth;
        canvas.height = window.innerWidth * (display.resolutionHeight/display.resolutionWidth);
        context = canvas.getContext("2d");
        document.body.insertBefore(canvas, document.body.childNodes[0]);
        context.scale(window.innerWidth / display.resolutionWidth, window.innerWidth / display.resolutionWidth);
    }else{
        canvas.width = window.innerHeight * (display.resolutionWidth/display.resolutionHeight);
        canvas.height = window.innerHeight;
        context = canvas.getContext("2d");
        document.body.insertBefore(canvas, document.body.childNodes[0]);
        context.scale(window.innerHeight / display.resolutionHeight, window.innerHeight / display.resolutionHeight);
    }
}

//Look for resize and redraw
window.addEventListener("resize", resizeCanvas);
window.addEventListener("orientationchange", resizeCanvas);

function resizeCanvas(e) {
    if ((window.innerHeight * (display.resolutionWidth/display.resolutionHeight)) >= (window.innerWidth)){
        canvas.width = window.innerWidth;
        canvas.height = window.innerWidth * (display.resolutionHeight/display.resolutionWidth);
        context.scale(window.innerWidth / display.resolutionWidth, window.innerWidth / display.resolutionWidth);
    }else{
        canvas.width = window.innerHeight * (display.resolutionWidth/display.resolutionHeight);
        canvas.height = window.innerHeight;
        context.scale(window.innerHeight / display.resolutionHeight, window.innerHeight / display.resolutionHeight);
    }
    draw();
}