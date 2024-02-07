/**
 * You can't use this block, because the micro:bit would "think" the pin is fallen if the circuit is broken for a little while because the pin is wobbling.
 */
radio.setGroup(1)
basic.forever(function () {
    if (!(input.pinIsPressed(TouchPin.P1))) {
        basic.clearScreen()
        radio.sendNumber(2)
    } else {
        basic.showNumber(0)
        radio.sendNumber(0)
    }
})
