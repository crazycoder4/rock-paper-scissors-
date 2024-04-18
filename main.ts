let myscore = 0
let img = 0
input.onButtonPressed(Button.A, function () {
    myscore += 1
    basic.showString("win")
    basic.showNumber(0)
    basic.showNumber(myscore)
})
input.onButtonPressed(Button.B, function () {
    myscore += -1
    basic.showString("lose")
    basic.showNumber(myscore)
})
input.onGesture(Gesture.Shake, function () {
    img = randint(0, 2)
    if (img == 0) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    }
    if (img == 1) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    }
    if (img == 2) {
        basic.showLeds(`
            . . . # #
            # # . # .
            . . # . .
            # # . # .
            . . . # #
            `)
    }
})
