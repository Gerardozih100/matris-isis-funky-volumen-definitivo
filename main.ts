input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 1; index++) {
        music.playTone(330, music.beat(BeatFraction.Half))
    }
    for (let index = 0; index < 2; index++) {
        max7219_matrix.scrollText(
        "Agua Calentandose",
        0,
        0
        )
    }
    for (let index = 0; index < 1; index++) {
        music.playTone(494, music.beat(BeatFraction.Half))
    }
    max7219_matrix.scrollText(
    "Fria",
    0,
    500
    )
})
let Inicio = 0
max7219_matrix.setup(
4,
DigitalPin.P12,
DigitalPin.P15,
DigitalPin.P14,
DigitalPin.P13
)
max7219_matrix.for_4_in_1_modules(
rotation_direction.counterclockwise,
true
)
let Musica = 0
let Texto = 0
basic.forever(function () {
    Inicio = 1
    if (input.buttonIsPressed(Button.A)) {
    	
    } else {
    	
    }
})
