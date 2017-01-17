//USAGE
//  createCanvas(width,height) //Width and height of desired resolution
//Resolution will automatically scale to fit window.
//Cannot currently handle a height that's greater than a width.

JSP.display = {
    resolutionWidth: null,
    resolutionHeight: null,
    canvas: null,
    context: null
}

function createCanvas(width, height) {
    JSP.display.resolutionWidth = width
    JSP.display.resolutionHeight = height

    JSP.display.canvas = document.createElement("canvas")
    if ((window.innerHeight * (JSP.display.resolutionWidth / JSP.display.resolutionHeight)) >= (window.innerWidth)) {
        JSP.display.canvas.width = window.innerWidth
        JSP.display.canvas.height = window.innerWidth * (JSP.display.resolutionHeight / JSP.display.resolutionWidth)
        JSP.display.context = JSP.display.canvas.getContext("2d")
        document.body.insertBefore(JSP.display.canvas, document.body.childNodes[0])
        JSP.display.context.scale(window.innerWidth / JSP.display.resolutionWidth, window.innerWidth / JSP.display.resolutionWidth)
    } else {
        JSP.display.canvas.width = window.innerHeight * (JSP.display.resolutionWidth / JSP.display.resolutionHeight)
        JSP.display.canvas.height = window.innerHeight
        JSP.display.context = JSP.display.canvas.getContext("2d")
        document.body.insertBefore(JSP.display.canvas, document.body.childNodes[0])
        JSP.display.context.scale(window.innerHeight / JSP.display.resolutionHeight, window.innerHeight / JSP.display.resolutionHeight)
    }
}

//Look for resize and redraw
window.addEventListener("resize", resizeCanvas)
window.addEventListener("orientationchange", resizeCanvas)

function resizeCanvas(e) {
    if ((window.innerHeight * (JSP.display.resolutionWidth / JSP.display.resolutionHeight)) >= (window.innerWidth)) {
        JSP.display.canvas.width = window.innerWidth
        JSP.display.canvas.height = window.innerWidth * (JSP.display.resolutionHeight / JSP.display.resolutionWidth)
        JSP.display.context.scale(window.innerWidth / JSP.display.resolutionWidth, window.innerWidth / JSP.display.resolutionWidth)
    } else {
        JSP.display.canvas.width = window.innerHeight * (JSP.display.resolutionWidth / JSP.display.resolutionHeight)
        JSP.display.canvas.height = window.innerHeight
        JSP.display.context.scale(window.innerHeight / JSP.display.resolutionHeight, window.innerHeight / JSP.display.resolutionHeight)
    }
}