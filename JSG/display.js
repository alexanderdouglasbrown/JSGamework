//USAGE
// This handles creating the canvas/context and scaling the image

JSG.display = {
    widthScale: 1,
    heightScale: 1,
}

function JSG_createCanvas(width, height) {
    JSG.resolutionWidth = width
    JSG.resolutionHeight = height

    JSG.canvas = document.createElement("canvas")
    if ((window.innerHeight * (JSG.resolutionWidth / JSG.resolutionHeight)) >= (window.innerWidth)) {
        JSG.canvas.width = window.innerWidth
        JSG.canvas.height = window.innerWidth * (JSG.resolutionHeight / JSG.resolutionWidth)

        JSG.context = JSG.canvas.getContext("2d")
        document.body.insertBefore(JSG.canvas, document.body.childNodes[0])

        JSG.display.widthScale = window.innerWidth / JSG.resolutionWidth
        JSG.display.heightScale = window.innerWidth / JSG.resolutionWidth
        JSG.context.scale(JSG.display.widthScale, JSG.display.heightScale)
    } else {
        JSG.canvas.width = window.innerHeight * (JSG.resolutionWidth / JSG.resolutionHeight)
        JSG.canvas.height = window.innerHeight

        JSG.context = JSG.canvas.getContext("2d")
        document.body.insertBefore(JSG.canvas, document.body.childNodes[0])

        JSG.display.widthScale = window.innerHeight / JSG.resolutionHeight
        JSG.display.heightScale = window.innerHeight / JSG.resolutionHeight
        JSG.context.scale(JSG.display.widthScale, JSG.display.heightScale)
    }
}

//Look for resize and redraw
window.addEventListener("resize", JSG_resizeCanvas)
window.addEventListener("orientationchange", JSG_resizeCanvas)

function JSG_resizeCanvas(e) {
    if ((window.innerHeight * (JSG.resolutionWidth / JSG.resolutionHeight)) >= (window.innerWidth)) {
        JSG.canvas.width = window.innerWidth
        JSG.canvas.height = window.innerWidth * (JSG.resolutionHeight / JSG.resolutionWidth)

        JSG.display.widthScale = window.innerWidth / JSG.resolutionWidth
        JSG.display.heightScale = window.innerWidth / JSG.resolutionWidth
        JSG.context.scale(JSG.display.widthScale, JSG.display.heightScale)
    } else {
        JSG.canvas.width = window.innerHeight * (JSG.resolutionWidth / JSG.resolutionHeight)
        JSG.canvas.height = window.innerHeight

        JSG.display.widthScale = window.innerHeight / JSG.resolutionHeight
        JSG.display.heightScale = window.innerHeight / JSG.resolutionHeight
        JSG.context.scale(JSG.display.widthScale, JSG.display.heightScale)
    }

    //Ignore inputs when resizing
    JSG.keyboard.keyList = []
}