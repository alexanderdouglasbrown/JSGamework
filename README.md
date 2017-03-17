# JSGamework

A pre-built game loop to help start building a 2D JavaScript game.

##### Initial Setup
Set your desired resolution in `start(width,height,fps)` provided in _index.html_. Then code your game in the provided functions in _game.js_.

##### Automatic Scaling
Program for one resolution. JSG will automatically scale your game to fit any browser window size. Just use the provided `JSG.canvas` and `JSG.context`.

##### Mouse
Use the provided `JSG.mouse.x` and `JSG.mouse.y` so that the mouse cursor plays nicely with the scalar.

##### Keyboard
`JSG.keyboard.keyList` is an array of all the keys being pressed. If, for example, you want to check if 'A' is being pressed, try the command:
```javascript
        if (JSG.keyboard.keyList.includes(65))
```

##### Fixed time step
`update(dt)` is called at the specified frame rate, but `draw(rm)` is called when the computer is ready.

`dt` passed through the update function will be the number of miliseconds for the frame rate.

`rm` passed through the draw function is the remainder multiplier -- a multiplier used for interpolating the difference in position between the last update and the current draw.