input.onButtonPressed(Button.A, function () {
    while (true) {
        if (maqueen.Ultrasonic(PingUnit.Centimeters) < 5) {
            maqueen.motorStop(maqueen.Motors.All)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 25)
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 25)
            basic.pause(1000)
        } else {
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 50)
        }
    }
})
input.onButtonPressed(Button.B, function () {
    while (true) {
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
        basic.pause(500)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
        basic.pause(500)
    }
})
