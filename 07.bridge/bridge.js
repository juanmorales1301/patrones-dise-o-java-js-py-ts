// Implementación
class Platform {
    execute(command) {
        throw new Error("Método no implementado");
    }
}

// Implementaciones concretas
class WindowsPlatform extends Platform {
    execute(command) {
        console.log(`Ejecutando en Windows: ${command}`);
    }
}

class LinuxPlatform extends Platform {
    execute(command) {
        console.log(`Ejecutando en Linux: ${command}`);
    }
}

// Abstracción
class SmartDevice {
    constructor(platform) {
        this.platform = platform;
    }

    performTask(task) {
        throw new Error("Método no implementado");
    }
}

// Abstracciones concretas
class RemoteControl extends SmartDevice {
    performTask(task) {
        this.platform.execute(`Control remoto: ${task}`);
    }
}

class Statistics extends SmartDevice {
    performTask(task) {
        this.platform.execute(`Estadísticas: ${task}`);
    }
}

// Uso
const remote = new RemoteControl(new WindowsPlatform());
remote.performTask("Encender TV");

const stats = new Statistics(new LinuxPlatform());
stats.performTask("Recopilar datos");