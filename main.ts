let sensor = 0
basic.forever(function () {
    sensor = pins.analogReadPin(AnalogPin.P1)
    basic.showNumber(sensor)
    basic.pause(1000)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showNumber(Math.map(pins.analogReadPin(AnalogPin.P1), 0, 1023, 0, 100))
    basic.pause(1000)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
