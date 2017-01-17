//USAGE
// Use the canvas and context provided through JSP.display

JSP.display = {
    resolutionWidth: null,
    resolutionHeight: null,
    widthScale: 1,
    heightScale: 1,
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

        JSP.display.widthScale = window.innerWidth / JSP.display.resolutionWidth
        JSP.display.heightScale = window.innerWidth / JSP.display.resolutionWidth
        JSP.display.context.scale(JSP.display.widthScale, JSP.display.heightScale)
    } else {
        JSP.display.canvas.width = window.innerHeight * (JSP.display.resolutionWidth / JSP.display.resolutionHeight)
        JSP.display.canvas.height = window.innerHeight

        JSP.display.context = JSP.display.canvas.getContext("2d")
        document.body.insertBefore(JSP.display.canvas, document.body.childNodes[0])

        JSP.display.widthScale = window.innerHeight / JSP.display.resolutionHeight
        JSP.display.heightScale = window.innerHeight / JSP.display.resolutionHeight
        JSP.display.context.scale(JSP.display.widthScale, JSP.display.heightScale)
    }
}

//Look for resize and redraw
window.addEventListener("resize", resizeCanvas)
window.addEventListener("orientationchange", resizeCanvas)

function resizeCanvas(e) {
    if ((window.innerHeight * (JSP.display.resolutionWidth / JSP.display.resolutionHeight)) >= (window.innerWidth)) {
        JSP.display.canvas.width = window.innerWidth
        JSP.display.canvas.height = window.innerWidth * (JSP.display.resolutionHeight / JSP.display.resolutionWidth)

        JSP.display.widthScale = window.innerWidth / JSP.display.resolutionWidth
        JSP.display.heightScale = window.innerWidth / JSP.display.resolutionWidth
        JSP.display.context.scale(JSP.display.widthScale, JSP.display.heightScale)
    } else {
        JSP.display.canvas.width = window.innerHeight * (JSP.display.resolutionWidth / JSP.display.resolutionHeight)
        JSP.display.canvas.height = window.innerHeight

        JSP.display.widthScale = window.innerHeight / JSP.display.resolutionHeight
        JSP.display.heightScale = window.innerHeight / JSP.display.resolutionHeight
        JSP.display.context.scale(JSP.display.widthScale, JSP.display.heightScale)
    }

    //Ignore inputs when resizing
    JSP.keyboard.keyList = []
}