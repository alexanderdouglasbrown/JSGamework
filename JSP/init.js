const JSP = {
    frameRate: 0,
    lastFrameTime: 0
}

function start(width, height) {
    JSP_createCanvas(width, height)

    initialize()
    load()
    mainLoop(0)
}

function mainLoop(frameTime) {
    dt = frameTime - JSP.lastFrameTime
    JSP.lastFrameTime = frameTime
    
    JSP.frameRate = Math.floor(1000/dt)

    //Don't slow down further than 20fps (1000ms / 20fps = 50)
    if (dt > 50)
        dt = 50

    //Make dt approach 1 at 60fps.
    //60fps not required. Just makes the numbers more managable
    dt /= 16.66

    update(dt)
    draw()

    requestAnimationFrame(mainLoop)
}
