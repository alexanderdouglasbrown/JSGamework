const globalVars = {
    cameraX: 0,
    cameraY: 0
}

const mainChar = {
    x: 0,
    y: 0,
    sprite: new Image()
}

function initialize(width, height) {
    // JSP.display.context.fillStyle = "lightgray"
    // JSP.display.context.font = "34px Arial"
    // JSP.display.context.fillText("Loading...", 50, 50)
}

function load() {
    mainChar.sprite.src = "sprites/nicostand.png"
    background = new Image()
    background.src = "backgrounds/forestbackground.png"
    background2 = new Image()
    background2.src = "backgrounds/forestprebackground.png"
    background3 = new Image()
    background3.src = "backgrounds/forestfrontbackground.png"
    crosshairs = new Image()
    crosshairs.src = "sprites/crosshairs.png"
}

function update(dt) {
    CX = JSP.mouse.mouseX
    CY = JSP.mouse.mouseY
    if (JSP.keyboard.keyList.includes(68)) { //D key
        mainChar.x += 5 * dt
    }
    if (JSP.keyboard.keyList.includes(65)) { //A key
        mainChar.x -= 5 * dt
    }
    if (JSP.keyboard.keyList.includes(83)) { //S key
        mainChar.y += 5 * dt
    }
    if (JSP.keyboard.keyList.includes(87)) { //W key
        mainChar.y -= 5 * dt
    }
    if (JSP.keyboard.keyList.includes(39)) { //Right key
        globalVars.cameraX -= 5 * dt
    }
    if (JSP.keyboard.keyList.includes(37)) { //Left key
        globalVars.cameraX += 5 * dt
    }
    if (JSP.keyboard.keyList.includes(40)) { //Down key
        globalVars.cameraY -= 5 * dt
    }
    if (JSP.keyboard.keyList.includes(38)) { //Up key
        globalVars.cameraY += 5 * dt
    }
}

function draw() {
    //Clear
    JSP.display.context.fillStyle = "lightblue"
    JSP.display.context.fillRect(0, 0, JSP.display.canvas.width, JSP.display.canvas.height)

    //Background layer 1
    JSP.display.context.save()
    JSP.display.context.translate(globalVars.cameraX * 0.1, globalVars.cameraY)
    JSP.display.context.drawImage(background,
        0, 0,
        background.width, background.height,
        0, JSP.display.resolutionHeight - background.height,
        background.width, background.height)
    JSP.display.context.restore()

    //Background layer 2
    JSP.display.context.save()
    JSP.display.context.translate(globalVars.cameraX * 0.7, globalVars.cameraY)
    JSP.display.context.drawImage(background2,
        0, 0,
        background2.width, background2.height,
        0, JSP.display.resolutionHeight - background2.height,
        background2.width, background2.height)
    JSP.display.context.drawImage(background2,
        0, 0,
        background2.width, background2.height,
        2048, JSP.display.resolutionHeight - background2.height,
        background2.width, background2.height)
    JSP.display.context.restore()

    //Background layer 3
    JSP.display.context.save()
    JSP.display.context.translate(globalVars.cameraX * 0.9, globalVars.cameraY)
    JSP.display.context.drawImage(background3,
        0, 0,
        background3.width, background3.height,
        0, JSP.display.resolutionHeight - background3.height,
        background3.width, background3.height)
    JSP.display.context.drawImage(background3,
        0, 0,
        background3.width, background3.height,
        2048, JSP.display.resolutionHeight - background3.height,
        background3.width, background3.height)
    JSP.display.context.restore()

    //Moves with camera
    JSP.display.context.save()
    JSP.display.context.translate(globalVars.cameraX, globalVars.cameraY) //camera

    //Sprites

    JSP.display.context.drawImage(mainChar.sprite,
        0, 0,
        mainChar.sprite.width, mainChar.sprite.height,
        mainChar.x, JSP.display.resolutionHeight - (mainChar.sprite.height / 2) + mainChar.y,
        mainChar.sprite.width / 2, mainChar.sprite.height / 2)

    JSP.display.context.drawImage(crosshairs, CX, CY)

    //Draw
    JSP.display.context.restore()
}

