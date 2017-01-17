const JSP = {
    targetFrameTime: null,
    lastFrameTime: 0
}

function start(width, height, fps) {
    JSP.targetFrameTime = 1000 / fps
    createCanvas(width, height)
    
    initialize()
    load()
    mainLoop()
}

function mainLoop(frameTime) {
    let dt = 1

    update(dt)
    draw()

    requestAnimationFrame(mainLoop)
}
