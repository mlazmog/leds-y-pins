/**
 * Miguel Lázaro Moguilnaia 
 * 
 * 2º ESO A
 */
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P0) < 200) {
        basic.clearScreen()
    } else if (pins.analogReadPin(AnalogPin.P0) < 400) {
        led.plot(2, 2)
    } else if (pins.analogReadPin(AnalogPin.P0) < 600) {
        basic.showLeds(`
            . . . . .
            . . # . .
            . # # # .
            . . # . .
            . . . . .
            `)
    } else if (pins.analogReadPin(AnalogPin.P0) < 800) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            . # # # .
            . . # . .
            `)
    } else {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
})
