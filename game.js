function initialize(width, height) {
    //Temp game variables for testing
    JSG.sample = {
        cameraX: 0,
        cameraY: 0,
        crosshairs: new Image(),
        crosshairsX: 0,
        crosshairsY: 0,
        background: new Image(),
        background2: new Image(),
        background3: new Image(),
        mainChar: {
            x: 0,
            y: 0,
            sprite: new Image()
        }
    }
}

function load() {
    JSG.sample.mainChar.sprite.src = "sprites/nicostand.png"
    JSG.sample.background.src = "backgrounds/forestbackground.png"
    JSG.sample.background2.src = "backgrounds/forestprebackground.png"
    JSG.sample.background3.src = "backgrounds/forestfrontbackground.png"
    JSG.sample.crosshairs.src = "sprites/crosshairs.png"
}

function update(dt) {
    JSG.sample.crosshairsX = JSG.mouse.x
    JSG.sample.crosshairsY = JSG.mouse.y

    if (JSG.keyboard.keyList.includes(68)) { //D key
        JSG.sample.mainChar.x += 5 * dt
    }
    if (JSG.keyboard.keyList.includes(65)) { //A key
        JSG.sample.mainChar.x -= 5 * dt
    }
    if (JSG.keyboard.keyList.includes(83)) { //S key
        JSG.sample.mainChar.y += 5 * dt
    }
    if (JSG.keyboard.keyList.includes(87)) { //W key
        JSG.sample.mainChar.y -= 5 * dt
    }
    if (JSG.keyboard.keyList.includes(39)) { //Right key
        JSG.sample.cameraX -= 5 * dt
    }
    if (JSG.keyboard.keyList.includes(37)) { //Left key
        JSG.sample.cameraX += 5 * dt
    }
    if (JSG.keyboard.keyList.includes(40)) { //Down key
        JSG.sample.cameraY -= 5 * dt
    }
    if (JSG.keyboard.keyList.includes(38)) { //Up key
        JSG.sample.cameraY += 5 * dt
    }
}

function draw() {
    //Clear
    JSG.context.fillStyle = "lightblue"
    JSG.context.fillRect(0, 0, JSG.resolutionWidth, JSG.resolutionHeight)

    //Background layer 1
    JSG.context.save()
    JSG.context.translate(JSG.sample.cameraX * 0.1, JSG.sample.cameraY)
    JSG.context.drawImage(JSG.sample.background,
        0, 0,
        JSG.sample.background.width, JSG.sample.background.height,
        0, JSG.resolutionHeight - JSG.sample.background.height,
        JSG.sample.background.width, JSG.sample.background.height)
    JSG.context.restore()

    //Background layer 2
    JSG.context.save()
    JSG.context.translate(JSG.sample.cameraX * 0.7, JSG.sample.cameraY)
    JSG.context.drawImage(JSG.sample.background2,
        0, 0,
        JSG.sample.background2.width, JSG.sample.background2.height,
        0, JSG.resolutionHeight - JSG.sample.background2.height,
        JSG.sample.background2.width, JSG.sample.background2.height)
    JSG.context.drawImage(JSG.sample.background2,
        0, 0,
        JSG.sample.background2.width, JSG.sample.background2.height,
        2048, JSG.resolutionHeight - JSG.sample.background2.height,
        JSG.sample.background2.width, JSG.sample.background2.height)
    JSG.context.restore()

    //Background layer 3
    JSG.context.save()
    JSG.context.translate(JSG.sample.cameraX * 0.9, JSG.sample.cameraY)
    JSG.context.drawImage(JSG.sample.background3,
        0, 0,
        JSG.sample.background3.width, JSG.sample.background3.height,
        0, JSG.resolutionHeight - JSG.sample.background3.height,
        JSG.sample.background3.width, JSG.sample.background3.height)
    JSG.context.drawImage(JSG.sample.background3,
        0, 0,
        JSG.sample.background3.width, JSG.sample.background3.height,
        2048, JSG.resolutionHeight - JSG.sample.background3.height,
        JSG.sample.background3.width, JSG.sample.background3.height)
    JSG.context.restore()

    //Moves with camera
    JSG.context.save()
    JSG.context.translate(JSG.sample.cameraX, JSG.sample.cameraY) //camera

    //Sprites

    JSG.context.drawImage(JSG.sample.mainChar.sprite,
        0, 0,
        JSG.sample.mainChar.sprite.width, JSG.sample.mainChar.sprite.height,
        JSG.sample.mainChar.x, JSG.resolutionHeight - (JSG.sample.mainChar.sprite.height / 2) + JSG.sample.mainChar.y,
        JSG.sample.mainChar.sprite.width / 2, JSG.sample.mainChar.sprite.height / 2)

    //Draw
    JSG.context.restore()

    JSG.context.drawImage(JSG.sample.crosshairs, JSG.sample.crosshairsX - 25, JSG.sample.crosshairsY - 25)
}

