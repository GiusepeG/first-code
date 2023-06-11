input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showIcon(IconNames.Heart)
    soundExpression.hello.playUntilDone()
    basic.showIcon(IconNames.Asleep)
})
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . # . .
        . # # # .
        # # # # #
        . . # . .
        . . # . .
        `)
})
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Sad)
    soundExpression.sad.playUntilDone()
    basic.showIcon(IconNames.Asleep)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        # # # # #
        . . # . .
        . # . # .
        . . # . .
        . # # # .
        `)
})
basic.showIcon(IconNames.Asleep)
