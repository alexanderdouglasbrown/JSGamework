var globalVars = {
	resolutionWidth: 1920,
	resolutionHeight: 1080,
	cameraX: 0,
	cameraY: 0,
}

var mainChar = {
    x: 0,
    y: 0,
    sprite: new Image()
}

//Ridiculous ugly keyboard handling because I want to simulate polling
keyList = new Array();
document.onkeydown = keyDownEvent;
document.onkeyup = keyUpEvent;

function keyDownEvent(e) {
    var keyCode = (window.event) ? e.which : e.keyCode;
    if (!keyList.includes(e.keyCode)) {
        keyList.push(keyCode);
    }
}

function keyUpEvent(e) {
    var keyCode = (window.event) ? e.which : e.keyCode;
    var index = keyList.indexOf(e.keyCode);
    if (index != -1)
        keyList.splice(index, 1);
}

function initialize() {
    //Create canvas
    canvas = document.createElement("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerWidth * (9/16); //Needs to equal 720 on my laptop
    context = canvas.getContext("2d");
    document.body.insertBefore(canvas, document.body.childNodes[0]);
    context.font = "34px Arial";
    context.fillText("Loading...", 50, 50);
    context.scale(window.innerWidth / globalVars.resolutionWidth, window.innerWidth / globalVars.resolutionWidth);
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
    
    waitOnLoading();
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
    //console.log(keyList);
    if (keyList.includes(68)) { //D key
        mainChar.x += 5;
    }
    if (keyList.includes(65)) { //A key
        mainChar.x -= 5;
    }
    if (keyList.includes(83)) { //S key
        mainChar.y += 5;
    }
    if (keyList.includes(87)) { //W key
        mainChar.y -= 5;
    }
    if (keyList.includes(39)) { //Right key
        globalVars.cameraX -= 5;
    }
    if (keyList.includes(37)) { //Left key
        globalVars.cameraX += 5;
    }
    if (keyList.includes(40)) { //Down key
        globalVars.cameraY -= 5;
    }
    if (keyList.includes(38)) { //Up key
        globalVars.cameraY += 5;
    }
    if (keyList.includes(219)) { //D key
        cameraZoom -= 0.01;
    }
    if (keyList.includes(221)) { //D key
        cameraZoom += 0.01;
    }
}

function draw() {
    //Clear
    context.fillStyle = "lightblue";
    context.fillRect(0, 0, canvas.width, canvas.height);

    //Background layer 1
    context.save();
    context.translate(globalVars.cameraX * 0.1, globalVars.cameraY);
    context.drawImage(background,
                      0, 0,
                      background.width, background.height,
                      0, globalVars.resolutionHeight - background.height,
                      background.width, background.height);
    context.restore();

    //Background layer 2
    context.save();
    context.translate(globalVars.cameraX * 0.7, globalVars.cameraY);
    context.drawImage(background2,
                      0, 0,
                      background2.width, background2.height,
                      0, globalVars.resolutionHeight - background2.height,
                      background2.width, background2.height);
    context.drawImage(background2,
                  0, 0,
                  background2.width, background2.height,
                  2048, globalVars.resolutionHeight - background2.height,
                  background2.width, background2.height);
    context.restore();

    //Background layer 3
    context.save();
    context.translate(globalVars.cameraX * 0.9, globalVars.cameraY);
    context.drawImage(background3,
                      0, 0,
                      background3.width, background3.height,
                      0, globalVars.resolutionHeight - background3.height,
                      background3.width, background3.height);
    context.drawImage(background3,
                  0, 0,
                  background3.width, background3.height,
                  2048, globalVars.resolutionHeight - background3.height,
                  background3.width, background3.height);
    context.restore();

    //Moves with camera
    context.save();
    context.translate(globalVars.cameraX, globalVars.cameraY); //camera

    //Sprites

    context.drawImage(mainChar.sprite,
                      0, 0,
                      mainChar.sprite.width, mainChar.sprite.height,
                      mainChar.x, globalVars.resolutionHeight - (mainChar.sprite.height / 2) + mainChar.y,
                      mainChar.sprite.width / 2, mainChar.sprite.height / 2);


    //Draw
    context.restore();
}

//Look for resize and redraw
//window.addEventListener("resize", resizeCanvas, false);

function resizeCanvas(e) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    keboardBuffer = [];
    draw();
}

function mainLoop() {
    update();
    draw();
    window.setTimeout(mainLoop, 1000 / 60);
}
