'use strict'

const Rx = require('node-keyboard-rx')()

const mouseEvents = require('osx-mouse')()

module.exports = {
    serialism({ w, h } = { w: 2560, h: 1440 }) {
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
