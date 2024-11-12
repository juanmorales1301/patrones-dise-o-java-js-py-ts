// Implementación
interface Platform {
    execute(command: string): void;
}

// Implementaciones concretas
class WindowsPlatform implements Platform {
    public execute(command: string): void {
        console.log(`Ejecutando en Windows: ${command}`);
    }
}

class LinuxPlatform implements Platform {
    public execute(command: string): void {
        console.log(`Ejecutando en Linux: ${command}`);
    }
}

// Abstracción
abstract class SmartDevice {
    protected platform: Platform;

    constructor(platform: Platform) {
        this.platform = platform;
    }

    public abstract performTask(task: string): void;
}

// Abstracciones concretas
class RemoteControl extends SmartDevice {
    public performTask(task: string): void {
        this.platform.execute(`Control remoto: ${task}`);
    }
}

class Statistics extends SmartDevice {
    public performTask(task: string): void {
        this.platform.execute(`Estadísticas: ${task}`);
    }
}

// Uso
const remote: SmartDevice = new RemoteControl(new WindowsPlatform());
remote.performTask("Encender TV");

const stats: SmartDevice = new Statistics(new LinuxPlatform());
stats.performTask("Recopilar datos");