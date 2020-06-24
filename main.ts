radio.onReceivedNumber(function (receivedNumber) {
    if (じゃんけん == 1 && receivedNumber == 1) {
        radio.sendString("あいこ")
    } else if (じゃんけん == 2 && receivedNumber == 1) {
        radio.sendString("かち")
    } else if (じゃんけん == 3 && receivedNumber == 1) {
        radio.sendString("まけ")
    } else if (じゃんけん == 1 && receivedNumber == 2) {
        radio.sendString("まけ")
    } else if (じゃんけん == 2 && receivedNumber == 2) {
        radio.sendString("あいこ")
    } else if (じゃんけん == 3 && receivedNumber == 2) {
        radio.sendString("かち")
    } else if (じゃんけん == 1 && receivedNumber == 3) {
        radio.sendString("かち")
    } else if (じゃんけん == 2 && receivedNumber == 3) {
        radio.sendString("まけ")
    } else if (じゃんけん == 3 && receivedNumber == 3) {
        radio.sendString("あいこ")
    }
})
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . # # # .
        # # # # #
        # # # # #
        # # # # #
        . # # # .
        `)
    radio.sendNumber(1)
    じゃんけん = 1
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . # . # .
        # . . . #
        # . . . #
        `)
    radio.sendNumber(3)
    じゃんけん = 3
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "かち") {
        basic.showLeds(`
            . # # # .
            # . . . #
            # . . . #
            # . . . #
            . # # # .
            `)
    } else if (receivedString == "まけ") {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    } else if (receivedString == "あいこ") {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            `)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        # . . . #
        # # . # #
        . # . # .
        . # # # .
        . . # . .
        `)
    radio.sendNumber(2)
    じゃんけん = 2
})
let じゃんけん = 0
radio.setGroup(10)
basic.showIcon(IconNames.Yes)
