const game = {
    initialize: function () {
        this.cameraX = 0
        this.cameraY = 0
        this.crosshairs = new Image()
        this.crosshairsX = 0
        this.crosshairsY = 0
        this.background = new Image()
        this.background2 = new Image()
        this.background3 = new Image()

        this.mainChar = {
            x: 0,
            y: 0,
            sprite: new Image()
        }
    },

    load: function () {
        this.mainChar.sprite.src = "sprites/nicostand.png"
        this.background.src = "backgrounds/forestbackground.png"
        this.background2.src = "backgrounds/forestprebackground.png"
        this.background3.src = "backgrounds/forestfrontbackground.png"
        this.crosshairs.src = "sprites/crosshairs.png"
    },

    update: function (dt) {
        dt /= 16.66

        this.crosshairsX = JSG.mouse.x
        this.crosshairsY = JSG.mouse.y

        if (JSG.keyboard.keyList.includes(68)) { //D key
            this.mainChar.x += 5 * dt
        }
        if (JSG.keyboard.keyList.includes(65)) { //A key
            this.mainChar.x -= 5 * dt
        }
        if (JSG.keyboard.keyList.includes(83)) { //S key
            this.mainChar.y += 5 * dt
        }
        if (JSG.keyboard.keyList.includes(87)) { //W key
            this.mainChar.y -= 5 * dt
        }
        if (JSG.keyboard.keyList.includes(39)) { //Right key
            this.cameraX -= 5 * dt
        }
        if (JSG.keyboard.keyList.includes(37)) { //Left key
            this.cameraX += 5 * dt
        }
        if (JSG.keyboard.keyList.includes(40)) { //Down key
            this.cameraY -= 5 * dt
        }
        if (JSG.keyboard.keyList.includes(38)) { //Up key
            this.cameraY += 5 * dt
        }
    },

    draw: function () {
        //Clear
        JSG.context.fillStyle = "lightblue"
        JSG.context.fillRect(0, 0, JSG.resolutionWidth, JSG.resolutionHeight)

        //this.background layer 1
        JSG.context.save()
        JSG.context.translate(this.cameraX * 0.1, this.cameraY)
        JSG.context.drawImage(this.background,
            0, 0,
            this.background.width, this.background.height,
            0, JSG.resolutionHeight - this.background.height,
            this.background.width, this.background.height)
        JSG.context.restore()

        //this.background layer 2
        JSG.context.save()
        JSG.context.translate(this.cameraX * 0.7, this.cameraY)
        JSG.context.drawImage(this.background2,
            0, 0,
            this.background2.width, this.background2.height,
            0, JSG.resolutionHeight - this.background2.height,
            this.background2.width, this.background2.height)
        JSG.context.drawImage(this.background2,
            0, 0,
            this.background2.width, this.background2.height,
            2048, JSG.resolutionHeight - this.background2.height,
            this.background2.width, this.background2.height)
        JSG.context.restore()

        //this.background layer 3
        JSG.context.save()
        JSG.context.translate(this.cameraX * 0.9, this.cameraY)
        JSG.context.drawImage(this.background3,
            0, 0,
            this.background3.width, this.background3.height,
            0, JSG.resolutionHeight - this.background3.height,
            this.background3.width, this.background3.height)
        JSG.context.drawImage(this.background3,
            0, 0,
            this.background3.width, this.background3.height,
            2048, JSG.resolutionHeight - this.background3.height,
            this.background3.width, this.background3.height)
        JSG.context.restore()

        //Moves with camera
        JSG.context.save()
        JSG.context.translate(this.cameraX, this.cameraY) //camera

        //Sprites

        JSG.context.drawImage(this.mainChar.sprite,
            0, 0,
            this.mainChar.sprite.width, this.mainChar.sprite.height,
            this.mainChar.x, JSG.resolutionHeight - (this.mainChar.sprite.height / 2) + this.mainChar.y,
            this.mainChar.sprite.width / 2, this.mainChar.sprite.height / 2)

        //Draw
        JSG.context.restore()

        JSG.context.drawImage(this.crosshairs, this.crosshairsX - 25, this.crosshairsY - 25)

    }
}