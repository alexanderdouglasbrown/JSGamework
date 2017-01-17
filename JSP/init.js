const JSP = {
    canvas: null,
    context: null,
    resolutionWidth: null,
    resolutionHeight: null,
    frameRate: 0,
    internal: { lastFrameTime: 0 }
}

function start(width, height) {
    JSP_createCanvas(width, height)

    initialize()
    load()
    mainLoop(0)
}

function mainLoop(frameTime) {
    dt = frameTime - JSP.internal.lastFrameTime
    JSP.internal.lastFrameTime = frameTime

    JSP.frameRate = Math.floor(1000 / dt)

    //Don't slow down further than 20fps (1000ms / 20fps = 50)
    if (dt > 50)
        dt = 50

    //Fire mouse release for one frame only
    if (JSP.mouse.internal.releaseFlag) {
        JSP.mouse.internal.releaseFlag = false
        JSP.mouse.release = true
    }

    //Make dt approach 1 at 60fps.
    //60fps not required. Just makes the numbers more managable
    dt /= 16.66

    update(dt)
    draw()

    JSP.mouse.release = false
    
    requestAnimationFrame(mainLoop)
}
