#node-keyboard-mouse

[![npm version](https://badge.fury.io/js/node-keyboard-mouse.svg)](https://badge.fury.io/js/node-keyboard-mouse) 

Mouse plugin for node-keyboard

![](https://media.giphy.com/media/x89OxwJoMl5GE/giphy.gif)

> Note: This currently only supports OSX due to limited mouse support in node.

##Installation

###As Global
If you installed node-keyboard globally, then install this plugin via `npm i -g node-keyboard-mouse`

Then start node keyboard via `node-keyboard`, and import this plugin via `const mouse = requireg('node-keyboard-mouse')()`

###As Local
If instead you cloned node-keyboard, then install locally in that folder via `npm i node-keyboard-mouse`

Then start node keyboard via `node keyboard` and import this plugin via `const mouse = require('node-keyboard-mouse')()`

##Usage
Try out the 12-tone player by moving the mouse arond the screen. The lower the y co-ordinate, the lower the pitch. The lower the x co-ordinate, the less frequently the events are throttled.

```javascript
mouse.serialism({ w: 2560, h: 1440 )}).subscribe(play) // for a 27" Mac Display (ignore retina aspect - i.e. DPI - when selecting this)
```


