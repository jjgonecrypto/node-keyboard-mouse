'use strict'

const Rx = require('node-keyboard-rx')()

const mouseEvents = require('osx-mouse')()

module.exports = {
    // Play 12-tone music as you move the mouse!
    // Notes decrease in pitch as the the mouse is lower in vertical height, and increase as you increase height
    // Notes are throttled less as you move the mouse left (less horizonal width) and more frequently as you move right
    // Usage: Supply width and height if your screen (13" MBP is effectively 1280 x 800)
    serialism({ w = 1280, h = 800 } = {}) {
        const mouseMove = Rx.Observable
            .fromEvent(mouseEvents, 'move', (x, y) => {
                return { x: Math.ceil(x), y: Math.ceil(y) }
            })

        const throttledMidiNotes = mouseMove
            .throttle(({ x }) => Rx.Observable.timer(x / w * 1000))
            .map(({ y }) => Math.min(Math.round(88 * y / h) + 21, 109) )

        return throttledMidiNotes
    }
}
