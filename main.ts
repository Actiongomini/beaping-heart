input.onButtonPressed(Button.A, function () {
	
})
basic.forever(function () {
    basic.showLeds(`
        . . . . .
        . # . # .
        # # # # #
        . # # # .
        . . # . .
        `)
    basic.showLeds(`
        . # . # .
        # # # # #
        . # # # .
        . . # . .
        . . . . .
        `)
})
basic.forever(function () {
    music.playMelody("C5 - C5 - C5 - C5 - ", 120)
})
