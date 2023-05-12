let lightLevel = 0
let soundLevel = 0
let buttonAPressed = false
basic.forever(function () {
    lightLevel = input.lightLevel()
    soundLevel = input.soundLevel()
    buttonAPressed = input.buttonIsPressed(Button.A)
    if (lightLevel > 100 && soundLevel > 100 && buttonAPressed) {
        basic.showString("salem le sang! ")
        music.playMelody("C D E F G A B C5 ", 120)
    } else {
        basic.clearScreen()
    }
})
