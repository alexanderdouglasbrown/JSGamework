function initialize(width, height) {
    //Temp game variables for testing
    JSP.sample = {
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
    JSP.sample.mainChar.sprite.src = "sprites/nicostand.png"
    JSP.sample.background.src = "backgrounds/forestbackground.png"
    JSP.sample.background2.src = "backgrounds/forestprebackground.png"
    JSP.sample.background3.src = "backgrounds/forestfrontbackground.png"
    JSP.sample.crosshairs.src = "sprites/crosshairs.png"
}

function update(dt) {
    if (JSP.mouse.release) {
        JSP.sample.crosshairsX = JSP.mouse.x
        JSP.sample.crosshairsY = JSP.mouse.y
    }

    if (JSP.keyboard.keyList.includes(68)) { //D key
        JSP.sample.mainChar.x += 5 * dt
    }
    if (JSP.keyboard.keyList.includes(65)) { //A key
        JSP.sample.mainChar.x -= 5 * dt
    }
    if (JSP.keyboard.keyList.includes(83)) { //S key
        JSP.sample.mainChar.y += 5 * dt
    }
    if (JSP.keyboard.keyList.includes(87)) { //W key
        JSP.sample.mainChar.y -= 5 * dt
    }
    if (JSP.keyboard.keyList.includes(39)) { //Right key
        JSP.sample.cameraX -= 5 * dt
    }
    if (JSP.keyboard.keyList.includes(37)) { //Left key
        JSP.sample.cameraX += 5 * dt
    }
    if (JSP.keyboard.keyList.includes(40)) { //Down key
        JSP.sample.cameraY -= 5 * dt
    }
    if (JSP.keyboard.keyList.includes(38)) { //Up key
        JSP.sample.cameraY += 5 * dt
    }
}

function draw() {
    //Clear
    JSP.context.fillStyle = "lightblue"
    JSP.context.fillRect(0, 0, JSP.canvas.width, JSP.canvas.height)

    //Background layer 1
    JSP.context.save()
    JSP.context.translate(JSP.sample.cameraX * 0.1, JSP.sample.cameraY)
    JSP.context.drawImage(JSP.sample.background,
        0, 0,
        JSP.sample.background.width, JSP.sample.background.height,
        0, JSP.resolutionHeight - JSP.sample.background.height,
        JSP.sample.background.width, JSP.sample.background.height)
    JSP.context.restore()

    //Background layer 2
    JSP.context.save()
    JSP.context.translate(JSP.sample.cameraX * 0.7, JSP.sample.cameraY)
    JSP.context.drawImage(JSP.sample.background2,
        0, 0,
        JSP.sample.background2.width, JSP.sample.background2.height,
        0, JSP.resolutionHeight - JSP.sample.background2.height,
        JSP.sample.background2.width, JSP.sample.background2.height)
    JSP.context.drawImage(JSP.sample.background2,
        0, 0,
        JSP.sample.background2.width, JSP.sample.background2.height,
        2048, JSP.resolutionHeight - JSP.sample.background2.height,
        JSP.sample.background2.width, JSP.sample.background2.height)
    JSP.context.restore()

    //Background layer 3
    JSP.context.save()
    JSP.context.translate(JSP.sample.cameraX * 0.9, JSP.sample.cameraY)
    JSP.context.drawImage(JSP.sample.background3,
        0, 0,
        JSP.sample.background3.width, JSP.sample.background3.height,
        0, JSP.resolutionHeight - JSP.sample.background3.height,
        JSP.sample.background3.width, JSP.sample.background3.height)
    JSP.context.drawImage(JSP.sample.background3,
        0, 0,
        JSP.sample.background3.width, JSP.sample.background3.height,
        2048, JSP.resolutionHeight - JSP.sample.background3.height,
        JSP.sample.background3.width, JSP.sample.background3.height)
    JSP.context.restore()

    //Moves with camera
    JSP.context.save()
    JSP.context.translate(JSP.sample.cameraX, JSP.sample.cameraY) //camera

    //Sprites

    JSP.context.drawImage(JSP.sample.mainChar.sprite,
        0, 0,
        JSP.sample.mainChar.sprite.width, JSP.sample.mainChar.sprite.height,
        JSP.sample.mainChar.x, JSP.resolutionHeight - (JSP.sample.mainChar.sprite.height / 2) + JSP.sample.mainChar.y,
        JSP.sample.mainChar.sprite.width / 2, JSP.sample.mainChar.sprite.height / 2)

    //Draw
    JSP.context.restore()

    JSP.context.drawImage(JSP.sample.crosshairs, JSP.sample.crosshairsX - 25, JSP.sample.crosshairsY - 25)
}

