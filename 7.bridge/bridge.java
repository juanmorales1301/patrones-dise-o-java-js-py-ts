// Implementación
interface Platform {
    void execute(String command);
}

// Implementaciones concretas
class WindowsPlatform implements Platform {
    public void execute(String command) {
        System.out.println("Ejecutando en Windows: " + command);
    }
}

class LinuxPlatform implements Platform {
    public void execute(String command) {
        System.out.println("Ejecutando en Linux: " + command);
    }
}

// Abstracción
abstract class SmartDevice {
    protected Platform platform;

    public SmartDevice(Platform platform) {
        this.platform = platform;
    }

    public abstract void performTask(String task);
}

// Abstracciones concretas
class RemoteControl extends SmartDevice {
    public RemoteControl(Platform platform) {
        super(platform);
    }

    public void performTask(String task) {
        platform.execute("Control remoto: " + task);
    }
}

class Statistics extends SmartDevice {
    public Statistics(Platform platform) {
        super(platform);
    }

    public void performTask(String task) {
        platform.execute("Estadísticas: " + task);
    }
}

// Uso
public class bridge {
    public static void main(String[] args) {
        SmartDevice remote = new RemoteControl(new WindowsPlatform());
        remote.performTask("Encender TV");

        SmartDevice stats = new Statistics(new LinuxPlatform());
        stats.performTask("Recopilar datos");
    }
}