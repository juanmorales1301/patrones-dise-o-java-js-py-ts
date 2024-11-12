// Receptor
class Light {
    turnOn() {
        console.log("Luz encendida");
    }

    turnOff() {
        console.log("Luz apagada");
    }
}

// Comandos
class TurnOnLightCommand {
    constructor(light) {
        this.light = light;
    }

    execute() {
        this.light.turnOn();
    }
}

class TurnOffLightCommand {
    constructor(light) {
        this.light = light;
    }

    execute() {
        this.light.turnOff();
    }
}

// Invocador
class RemoteControl {
    setCommand(command) {
        this.command = command;
    }

    pressButton() {
        this.command.execute();
    }
}

// Uso
const livingRoomLight = new Light();

const turnOn = new TurnOnLightCommand(livingRoomLight);
const turnOff = new TurnOffLightCommand(livingRoomLight);

const remote = new RemoteControl();

remote.setCommand(turnOn);
remote.pressButton();

remote.setCommand(turnOff);
remote.pressButton();