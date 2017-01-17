const JSP = {
    lastFrameTime: 0
}

function start(width, height) {
    createCanvas(width, height)

    initialize()
    load()
    requestAnimationFrame(mainLoop)
}

function mainLoop(frameTime) {
    dt = frameTime - JSP.lastFrameTime
    JSP.lastFrameTime = frameTime

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
