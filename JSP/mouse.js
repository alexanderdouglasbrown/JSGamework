//USAGE
//  Use JSP.mouse to retrieve mouse coords that play nicely with the scalar.

JSP.mouse = {
    mouseX: 0,
    mouseY: 0
}

document.onmousemove = (e) => {
    e = e || window.event

    JSP.mouse.mouseX = event.clientX - JSP.display.canvas.offsetLeft
    JSP.mouse.mouseY = event.clientY - JSP.display.canvas.offsetTop

    if (JSP.mouse.mouseX < 0)
        JSP.mouse.mouseX = 0
    if (JSP.mouse.mouseX > (JSP.display.canvas.width))
        JSP.mouse.mouseX = (JSP.display.canvas.width)

    if (JSP.mouse.mouseY < 0)
        JSP.mouse.mouseY = 0
    if (JSP.mouse.mouseY > (JSP.display.canvas.height))
        JSP.mouse.mouseY = (JSP.display.canvas.height)

    JSP.mouse.mouseX /= JSP.display.widthScale
    JSP.mouse.mouseY /= JSP.display.heightScale
}