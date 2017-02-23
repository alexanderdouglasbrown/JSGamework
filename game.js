function game() {
    let cameraX = 0
    let cameraY = 0
    let crosshairs = new Image()
    let crosshairsX = 0
    let crosshairsY = 0
    let background = new Image()
    let background2 = new Image()
    let background3 = new Image()
    const mainChar = {
        x: 0,
        y: 0,
        sprite: new Image()
    }

    JSG.internal.initialize = function initialize() {

    }

    JSG.internal.load = function load() {
        mainChar.sprite.src = "sprites/nicostand.png"
        background.src = "backgrounds/forestbackground.png"
        background2.src = "backgrounds/forestprebackground.png"
        background3.src = "backgrounds/forestfrontbackground.png"
        crosshairs.src = "sprites/crosshairs.png"
    }

    JSG.internal.update = function update(dt) {
        crosshairsX = JSG.mouse.x
        crosshairsY = JSG.mouse.y

        if (JSG.keyboard.keyList.includes(68)) { //D key
            mainChar.x += 5 * dt
        }
        if (JSG.keyboard.keyList.includes(65)) { //A key
            mainChar.x -= 5 * dt
        }
        if (JSG.keyboard.keyList.includes(83)) { //S key
            mainChar.y += 5 * dt
        }
        if (JSG.keyboard.keyList.includes(87)) { //W key
            mainChar.y -= 5 * dt
        }
        if (JSG.keyboard.keyList.includes(39)) { //Right key
            cameraX -= 5 * dt
        }
        if (JSG.keyboard.keyList.includes(37)) { //Left key
            cameraX += 5 * dt
        }
        if (JSG.keyboard.keyList.includes(40)) { //Down key
            cameraY -= 5 * dt
        }
        if (JSG.keyboard.keyList.includes(38)) { //Up key
            cameraY += 5 * dt
        }
    }

    JSG.internal.draw = function draw() {
        //Clear
        JSG.context.fillStyle = "lightblue"
        JSG.context.fillRect(0, 0, JSG.resolutionWidth, JSG.resolutionHeight)

        //Background layer 1
        JSG.context.save()
        JSG.context.translate(cameraX * 0.1, cameraY)
        JSG.context.drawImage(background,
            0, 0,
            background.width, background.height,
            0, JSG.resolutionHeight - background.height,
            background.width, background.height)
        JSG.context.restore()

        //Background layer 2
        JSG.context.save()
        JSG.context.translate(cameraX * 0.7, cameraY)
        JSG.context.drawImage(background2,
            0, 0,
            background2.width, background2.height,
            0, JSG.resolutionHeight - background2.height,
            background2.width, background2.height)
        JSG.context.drawImage(background2,
            0, 0,
            background2.width, background2.height,
            2048, JSG.resolutionHeight - background2.height,
            background2.width, background2.height)
        JSG.context.restore()

        //Background layer 3
        JSG.context.save()
        JSG.context.translate(cameraX * 0.9, cameraY)
        JSG.context.drawImage(background3,
            0, 0,
            background3.width, background3.height,
            0, JSG.resolutionHeight - background3.height,
            background3.width, background3.height)
        JSG.context.drawImage(background3,
            0, 0,
            background3.width, background3.height,
            2048, JSG.resolutionHeight - background3.height,
            background3.width, background3.height)
        JSG.context.restore()

        //Moves with camera
        JSG.context.save()
        JSG.context.translate(cameraX, cameraY) //camera

        //Sprites

        JSG.context.drawImage(mainChar.sprite,
            0, 0,
            mainChar.sprite.width, mainChar.sprite.height,
            mainChar.x, JSG.resolutionHeight - (mainChar.sprite.height / 2) + mainChar.y,
            mainChar.sprite.width / 2, mainChar.sprite.height / 2)

        //Draw
        JSG.context.restore()

        JSG.context.drawImage(crosshairs, crosshairsX - 25, crosshairsY - 25)
    }
}