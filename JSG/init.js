const JSG = {
    canvas: null,
    context: null,
    resolutionWidth: null,
    resolutionHeight: null,
    frameRate: 0,
    internal: { lastFrameTime: 0 }
}

function start(width, height) {
    JSG_createCanvas(width, height)

    initialize()
    load()
    mainLoop(0)
}

function mainLoop(frameTime) {
    dt = frameTime - JSG.internal.lastFrameTime
    JSG.internal.lastFrameTime = frameTime

    JSG.frameRate = Math.floor(1000 / dt)

    //Don't slow down further than 20fps (1000ms / 20fps = 50)
    if (dt > 50)
        dt = 50

    //Fire mouse release for one frame only
    if (JSG.mouse.internal.releaseFlag) {
        JSG.mouse.internal.releaseFlag = false
        JSG.mouse.release = true
    }

    //Make dt approach 1 at 60fps.
    //60fps not required. Just makes the numbers more managable
    dt /= 16.66

    update(dt)
    draw()

    JSG.mouse.release = false
    
    requestAnimationFrame(mainLoop)
}