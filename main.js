var global = {
    canvas : document.createElement("canvas"),
}

var mainChar = {
    x: 0,
    y: 0,
    sprite: new Image()
}

function initialize(){
    //Create canvas
    global.canvas.width = window.innerWidth;
    global.canvas.height = window.innerHeight;
    global.context = global.canvas.getContext("2d");
    document.body.insertBefore(global.canvas, document.body.childNodes[0]);
}

function load(){
    mainChar.sprite.src = "sprites/nicostand.png";
}

function update(){
    mainChar.x++;
}

function draw(){
    //Clear
    global.context.fillStyle="lightblue";
    global.context.fillRect(0,0,global.canvas.width,global.canvas.height);
    
    //Sprites
    global.context.drawImage(mainChar.sprite,
                             0, 0,
                             mainChar.sprite.width, mainChar.sprite.height,
                             mainChar.x, mainChar.y,
                             mainChar.sprite.width, mainChar.sprite.height);
    
    
    //Draw
    global.context.restore();
}

//Look for resize and redraw
window.addEventListener("resize", resizeCanvas, false);

function resizeCanvas(e) {
    global.canvas.width = window.innerWidth;
    global.canvas.height = window.innerHeight;
    draw();
}

function mainLoop(){
    update();
    draw();
    window.setTimeout(mainLoop, 1000 / 60);
}
