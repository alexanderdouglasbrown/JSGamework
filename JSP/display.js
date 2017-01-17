//USAGE
// This handles creating the canvas/context and scaling the image

JSP.display = {
    widthScale: 1,
    heightScale: 1,
}

function JSP_createCanvas(width, height) {
    JSP.resolutionWidth = width
    JSP.resolutionHeight = height

    JSP.canvas = document.createElement("canvas")
    if ((window.innerHeight * (JSP.resolutionWidth / JSP.resolutionHeight)) >= (window.innerWidth)) {
        JSP.canvas.width = window.innerWidth
        JSP.canvas.height = window.innerWidth * (JSP.resolutionHeight / JSP.resolutionWidth)

        JSP.context = JSP.canvas.getContext("2d")
        document.body.insertBefore(JSP.canvas, document.body.childNodes[0])

        JSP.display.widthScale = window.innerWidth / JSP.resolutionWidth
        JSP.display.heightScale = window.innerWidth / JSP.resolutionWidth
        JSP.context.scale(JSP.display.widthScale, JSP.display.heightScale)
    } else {
        JSP.canvas.width = window.innerHeight * (JSP.resolutionWidth / JSP.resolutionHeight)
        JSP.canvas.height = window.innerHeight

        JSP.context = JSP.canvas.getContext("2d")
        document.body.insertBefore(JSP.canvas, document.body.childNodes[0])

        JSP.display.widthScale = window.innerHeight / JSP.resolutionHeight
        JSP.display.heightScale = window.innerHeight / JSP.resolutionHeight
        JSP.context.scale(JSP.display.widthScale, JSP.display.heightScale)
    }
}

//Look for resize and redraw
window.addEventListener("resize", JSP_resizeCanvas)
window.addEventListener("orientationchange", JSP_resizeCanvas)

function JSP_resizeCanvas(e) {
    if ((window.innerHeight * (JSP.resolutionWidth / JSP.resolutionHeight)) >= (window.innerWidth)) {
        JSP.canvas.width = window.innerWidth
        JSP.canvas.height = window.innerWidth * (JSP.resolutionHeight / JSP.resolutionWidth)

        JSP.display.widthScale = window.innerWidth / JSP.resolutionWidth
        JSP.display.heightScale = window.innerWidth / JSP.resolutionWidth
        JSP.context.scale(JSP.display.widthScale, JSP.display.heightScale)
    } else {
        JSP.canvas.width = window.innerHeight * (JSP.resolutionWidth / JSP.resolutionHeight)
        JSP.canvas.height = window.innerHeight

        JSP.display.widthScale = window.innerHeight / JSP.resolutionHeight
        JSP.display.heightScale = window.innerHeight / JSP.resolutionHeight
        JSP.context.scale(JSP.display.widthScale, JSP.display.heightScale)
    }

    //Ignore inputs when resizing
    JSP.keyboard.keyList = []
}