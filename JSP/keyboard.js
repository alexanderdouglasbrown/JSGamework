//USAGE
//  if (JSP.keyboard.keyList.includes(65)) //where 65 is the ASCII keyCode for A

JSP.keyboard = {
    keyList: []
}

document.onkeydown = (e) => {
    const keyCode = event.which || event.keyCode
    if (!JSP.keyboard.keyList.includes(keyCode)) {
        JSP.keyboard.keyList.push(keyCode)
    }
}

document.onkeyup = (e) => {
    const keyCode = event.which || event.keyCode
    let index = JSP.keyboard.keyList.indexOf(keyCode)
    if (index != -1)
        JSP.keyboard.keyList.splice(index, 1)
}

window.addEventListener('blur', () => { JSP.keyboard.keyList = [] })