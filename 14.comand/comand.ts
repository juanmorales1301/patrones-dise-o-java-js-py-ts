// Comando
interface Command {
    execute(): void;
}

// Receptor
class Light {
    public turnOn(): void {
        console.log("Luz encendida");
    }

    public turnOff(): void {
        console.log("Luz apagada");
    }
}

// Comandos concretos
class TurnOnLightCommand implements Command {
    constructor(private light: Light) {}

    public execute(): void {
        this.light.turnOn();
    }
}

class TurnOffLightCommand implements Command {
    constructor(private light: Light) {}

    public execute(): void {
        this.light.turnOff();
    }
}

// Invocador
class RemoteControl {
    private command: Command;

    public setCommand(command: Command): void {
        this.command = command;
    }

    public pressButton(): void {
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