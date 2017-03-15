# JSGamework

A pre-built game loop to help start building a 2D JavaScript game.

##### Initial Setup
Set your desired resolution in `JSG.start(width,height)` provided in _index.html_. Then code your game in the provided functions in _game.js_.

##### Automatic Scaling
Program for one resolution. JSG will automatically scale your game to fit any browser window size. Just use the provided `JSG.canvas` and `JSG.context`.

##### Mouse
Use the provided `JSG.mouse.x` and `JSG.mouse.y` so that the mouse cursor plays nicely with the scalar.

##### Keyboard
`JSG.keyboard.keyList` is an array of all the keys being pressed. If, for example, you want to check if 'A' is being pressed, try the command:
```javascript
        if (JSG.keyboard.keyList.includes(65))
```

##### Capped Delta Time
Multiply any increments to your game objects in the `update()` function by `dt` to help adjust to any framerate dips. Example:
```javascript
mainCharacter.x += 2
```
becomes
```javascript
mainCharacter.x += 2 * dt
```

By default, JSG will target 60fps.