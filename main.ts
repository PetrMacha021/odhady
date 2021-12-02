let time = 1500;
let timePressed = 0;

input.onButtonPressed(Button.B, () => {
    basic.clearScreen();
    time = randint(1, 12) * 250;
    music.playTone(Note.C, time);
});

input.onButtonPressed(Button.A, () => {
    basic.clearScreen();
    music.playTone(Note.C, time);
    basic.pause(250);
});

input.onLogoEvent(TouchButtonEvent.Touched, () => {
    timePressed = control.millis();
});

input.onLogoEvent(TouchButtonEvent.Released, () => {
    let timeDifference = Math.abs((control.millis() - timePressed) - time);
    if (timeDifference <= time*0.15) {
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
    basic.pause(400);
    basic.clearScreen();
    basic.showNumber(timeDifference);
});