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
    canvas.height = window.innerHeight;
    context = canvas.getContext("2d");
    document.body.insertBefore(canvas, document.body.childNodes[0]);

    cameraX = 0;
    cameraY = 0;
    cameraZoom = 1;

}

function load() {
    mainChar.sprite.src = "sprites/nicostand.png";
    mainChar.y = window.innerHeight - 69 + mainChar.y;
    background = new Image();
    background.src = "backgrounds/forestbackground.png";
    background2 = new Image();
    background2.src = "backgrounds/forestprebackground.png";
    background3 = new Image();
    background3.src = "backgrounds/forestfrontbackground.png";
}

function update(e) {
    console.log(keyList);
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
        cameraX -= 5;
    }
    if (keyList.includes(37)) { //Left key
        cameraX += 5;
    }
    if (keyList.includes(40)) { //Down key
        cameraY -= 5;
    }
    if (keyList.includes(38)) { //Up key
        cameraY += 5;
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
    context.fillRect(0, 0, window.innerWidth, window.innerHeight);

    //Background layer 1
    context.save();
    context.translate(cameraX * 0.1, cameraY);
    context.drawImage(background,
                      0, 0,
                      background.width, background.height,
                      0, window.innerHeight - 1024,
                      background.width, background.height);
    context.restore();

    //Background layer 2
    context.save();
    context.translate(cameraX * 0.7, cameraY);
    context.drawImage(background2,
                      0, 0,
                      background2.width, background2.height,
                      0, window.innerHeight - 512,
                      background2.width, background2.height);
    context.drawImage(background2,
                  0, 0,
                  background2.width, background2.height,
                  2048, window.innerHeight - 512,
                  background2.width, background2.height);
    context.restore();

    //Background layer 3
    context.save();
    context.translate(cameraX * 0.9, cameraY);
    context.drawImage(background3,
                      0, 0,
                      background3.width, background3.height,
                      0, window.innerHeight - 1024,
                      background3.width, background3.height);
    context.drawImage(background3,
                  0, 0,
                  background3.width, background3.height,
                  2048, window.innerHeight - 1024,
                  background3.width, background3.height);
    context.restore();

    //Moves with camera
    context.save();
    context.translate(cameraX, cameraY); //camera

    //Sprites

    context.drawImage(mainChar.sprite,
                      0, 0,
                      mainChar.sprite.width, mainChar.sprite.height,
                      mainChar.x, mainChar.y,
                      mainChar.sprite.width / 2, mainChar.sprite.height / 2);


    //Draw
    context.restore();
    context.scale(cameraZoom, cameraZoom);
    cameraZoom = 1;
}

//Look for resize and redraw
window.addEventListener("resize", resizeCanvas, false);

function resizeCanvas(e) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    draw();
}

function mainLoop() {
    update();
    draw();
    window.setTimeout(mainLoop, 1000 / 60);
}
