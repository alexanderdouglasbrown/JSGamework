const JSG = {
    canvas: null,
    context: null,
    resolutionWidth: null,
    resolutionHeight: null,
    start: function (width, height) {
        JSG_createCanvas(width, height)
        game()
        JSG.internal.initialize()
        JSG.internal.mainLoop(0)
    },
    internal: {
        dt: 0,
        frameRate: 1000 / 60,
        lastFrameTime: 0,
        initialize: null,
        update: null,
        draw: null,

        mainLoop: function (frameTime) {
            // Thank you: http://www.isaacsukin.com/news/2015/01/detailed-explanation-javascript-game-loops-and-timing

            JSG.internal.dt += frameTime - JSG.internal.lastFrameTime
            JSG.internal.lastFrameTime = frameTime

            while (JSG.internal.dt >= JSG.internal.frameRate) {
                JSG.internal.update(JSG.internal.frameRate)
                JSG.internal.dt -= JSG.internal.frameRate
            }

            //Fire mouse release for one frame only
            if (JSG.mouse.internal.releaseFlag) {
                JSG.mouse.internal.releaseFlag = false
                JSG.mouse.release = true
            }

            //Do the remaining dt
            JSG.internal.update(JSG.internal.dt)

            JSG.internal.draw()

            JSG.mouse.release = false

            requestAnimationFrame(JSG.internal.mainLoop)
        }
    }
}
