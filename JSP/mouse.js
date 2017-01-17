//USAGE
//  Use JSP.mouse to retrieve mouse coords that play nicely with the scalar.

JSP.mouse = {
    x: 0,
    y: 0,
    click: false,
    release: false,
    internal: { releaseFlag: false }
}

document.addEventListener('touchmove', (e) => {
    e.preventDefault()
    JSP_getCursorPosition(e)
    JSP.mouse.click = false
})

document.addEventListener('touchstart', (e) => {
    e.preventDefault()
    JSP_getCursorPosition(e)
    JSP.mouse.click = true
})

document.addEventListener("mousemove", (e) => { JSP_getCursorPosition(e) })

document.addEventListener("mousedown", () => { JSP.mouse.click = true })

document.addEventListener("mouseup", () => {
    JSP.mouse.click = false
    JSP.mouse.internal.releaseFlag = true
})

document.addEventListener('touchend', (e) => {
    //Only trigger releaseFlag if the user didn't move when touching
    if (JSP.mouse.click) {
        JSP.mouse.click = false
        JSP.mouse.internal.releaseFlag = true
    }
})

document.addEventListener('touchcancel', (e) => { JSP.mouse.click = false })

window.addEventListener('blur', () => { JSP.mouse.click = false })

function JSP_getCursorPosition(e) {
    e = e || window.event

    JSP.mouse.x = event.pageX - JSP.canvas.offsetLeft
    JSP.mouse.y = event.pageY - JSP.canvas.offsetTop

    if (JSP.mouse.x < 0)
        JSP.mouse.x = 0
    if (JSP.mouse.x > (JSP.canvas.width))
        JSP.mouse.x = (JSP.canvas.width)

    if (JSP.mouse.y < 0)
        JSP.mouse.y = 0
    if (JSP.mouse.y > (JSP.canvas.height))
        JSP.mouse.y = (JSP.canvas.height)

    JSP.mouse.x /= JSP.display.widthScale
    JSP.mouse.y /= JSP.display.heightScale
}