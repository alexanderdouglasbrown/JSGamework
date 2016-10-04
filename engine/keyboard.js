//USAGE
//  if (keyboard.keyList.includes(65)) //where 65 is the ASCII keyCode for A


var keyboard = {
	keyList: new Array()
}

document.onkeydown = keyDownEvent;
document.onkeyup = keyUpEvent;

function keyDownEvent(e) {
    var keyCode = event.which || event.keyCode;
    if (!keyboard.keyList.includes(keyCode)) {
        keyboard.keyList.push(keyCode);
    }
}

function keyUpEvent(e) {
    var keyCode = event.which || event.keyCode;
    var index = keyboard.keyList.indexOf(keyCode);
    if (index != -1)
        keyboard.keyList.splice(index, 1);
}