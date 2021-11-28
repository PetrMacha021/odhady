let time = 1500;
let timePressed = 0;

input.onButtonPressed(Button.B, () => {
    time = randint(1, 12) * 250;
    music.playTone(Note.C, time);
});

input.onButtonPressed(Button.A, () => {
    music.playTone(Note.C, time);
    basic.pause(250);
});

input.onLogoEvent(TouchButtonEvent.Touched, () => {
    timePressed = control.millis();
});

input.onLogoEvent(TouchButtonEvent.Released, () => {
    let timeDifference = Math.abs((control.millis() - timePressed) - time);
    serial.writeLine(timeDifference.toString());
    if (timeDifference <= 250) {
        basic.showLeds(`
        . . . . .
        . . . . #
        . . . # .
        # . # . .
        . # . . .
        `)
        soundExpression.giggle.playUntilDone();
    } else {
        basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
        soundExpression.sad.playUntilDone();
    }
});