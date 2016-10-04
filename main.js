var globalVars = {
    cameraX: 0,
    cameraY: 0
}

var mainChar = {
    x: 0,
    y: 0,
    sprite: new Image()
}

function start(){
    initialize();
    load();
    waitOnLoading();
    //mainloop is currently started by waitOnLoading()
}

function initialize() {
    createCanvas(1920,1080);

    display.context.fillStyle = "lightgray";
    display.context.font = "34px Arial";
    display.context.fillText("Loading...", 50, 50);
}

function load() {
    loadArray = new Array();
    mainChar.sprite.src = "sprites/nicostand.png";
    loadArray.push(mainChar.sprite);
    background = new Image();
    background.src = "backgrounds/forestbackground.png";
    loadArray.push(background);
    background2 = new Image();
    background2.src = "backgrounds/forestprebackground.png";
    loadArray.push(background2);
    background3 = new Image();
    background3.src = "backgrounds/forestfrontbackground.png";
    loadArray.push(background3);
}

function waitOnLoading() {
    var loaded = true;
    for (var i = 0; i < loadArray.length; i++){
        if (loadArray[i].complete === false) {
            loaded = false;
        }
    }
    if (loaded === false) {
        window.setTimeout(waitOnLoading, 5);
    } else {
       mainLoop();
    }
}

function update(e) {
    if (keyboard.keyList.includes(68)) { //D key
        mainChar.x += 5;
    }
    if (keyboard.keyList.includes(65)) { //A key
        mainChar.x -= 5;
    }
    if (keyboard.keyList.includes(83)) { //S key
        mainChar.y += 5;
    }
    if (keyboard.keyList.includes(87)) { //W key
        mainChar.y -= 5;
    }
    if (keyboard.keyList.includes(39)) { //Right key
        globalVars.cameraX -= 5;
    }
    if (keyboard.keyList.includes(37)) { //Left key
        globalVars.cameraX += 5;
    }
    if (keyboard.keyList.includes(40)) { //Down key
        globalVars.cameraY -= 5;
    }
    if (keyboard.keyList.includes(38)) { //Up key
        globalVars.cameraY += 5;
    }
    if (keyboard.keyList.includes(219)) { //D key
        cameraZoom -= 0.01;
    }
    if (keyboard.keyList.includes(221)) { //D key
        cameraZoom += 0.01;
    }
}

function draw() {
    //Clear
    display.context.fillStyle = "lightblue";
    display.context.fillRect(0, 0, display.canvas.width, display.canvas.height);

    //Background layer 1
    display.context.save();
    display.context.translate(globalVars.cameraX * 0.1, globalVars.cameraY);
    display.context.drawImage(background,
                      0, 0,
                      background.width, background.height,
                      0, display.resolutionHeight - background.height,
                      background.width, background.height);
    display.context.restore();

    //Background layer 2
    display.context.save();
    display.context.translate(globalVars.cameraX * 0.7, globalVars.cameraY);
    display.context.drawImage(background2,
                      0, 0,
                      background2.width, background2.height,
                      0, display.resolutionHeight - background2.height,
                      background2.width, background2.height);
    display.context.drawImage(background2,
                  0, 0,
                  background2.width, background2.height,
                  2048, display.resolutionHeight - background2.height,
                  background2.width, background2.height);
    display.context.restore();

    //Background layer 3
    display.context.save();
    display.context.translate(globalVars.cameraX * 0.9, globalVars.cameraY);
    display.context.drawImage(background3,
                      0, 0,
                      background3.width, background3.height,
                      0, display.resolutionHeight - background3.height,
                      background3.width, background3.height);
    display.context.drawImage(background3,
                  0, 0,
                  background3.width, background3.height,
                  2048, display.resolutionHeight - background3.height,
                  background3.width, background3.height);
    display.context.restore();

    //Moves with camera
    display.context.save();
    display.context.translate(globalVars.cameraX, globalVars.cameraY); //camera

    //Sprites

    display.context.drawImage(mainChar.sprite,
                      0, 0,
                      mainChar.sprite.width, mainChar.sprite.height,
                      mainChar.x, display.resolutionHeight - (mainChar.sprite.height / 2) + mainChar.y,
                      mainChar.sprite.width / 2, mainChar.sprite.height / 2);


    //Draw
    display.context.restore();
}

function mainLoop() {
    update();
    draw();
    window.setTimeout(mainLoop, 1000 / 60);
}
