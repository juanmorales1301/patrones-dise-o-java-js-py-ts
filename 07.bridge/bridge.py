from abc import ABC, abstractmethod

# Implementación
class Platform(ABC):
    @abstractmethod
    def execute(self, command):
        pass

# Implementaciones concretas
class WindowsPlatform(Platform):
    def execute(self, command):
        print(f"Ejecutando en Windows: {command}")

class LinuxPlatform(Platform):
    def execute(self, command):
        print(f"Ejecutando en Linux: {command}")

# Abstracción
class SmartDevice(ABC):
    def __init__(self, platform: Platform):
        self.platform = platform

    @abstractmethod
    def perform_task(self, task):
        pass

# Abstracciones concretas
class RemoteControl(SmartDevice):
    def perform_task(self, task):
        self.platform.execute(f"Control remoto: {task}")

class Statistics(SmartDevice):
    def perform_task(self, task):
        self.platform.execute(f"Estadísticas: {task}")

# Uso
remote = RemoteControl(WindowsPlatform())
remote.perform_task("Encender TV")

stats = Statistics(LinuxPlatform())
stats.perform_task("Recopilar datos")
