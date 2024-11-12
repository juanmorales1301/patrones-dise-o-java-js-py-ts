from abc import ABC, abstractmethod

# Comando
class Command(ABC):
    @abstractmethod
    def execute(self):
        pass

# Receptor
class Light:
    def turn_on(self):
        print("Luz encendida")

    def turn_off(self):
        print("Luz apagada")

# Comandos concretos
class TurnOnLightCommand(Command):
    def __init__(self, light: Light):
        self.light = light

    def execute(self):
        self.light.turn_on()

class TurnOffLightCommand(Command):
    def __init__(self, light: Light):
        self.light = light

    def execute(self):
        self.light.turn_off()

# Invocador
class RemoteControl:
    def __init__(self):
        self.command = None

    def set_command(self, command: Command):
        self.command = command

    def press_button(self):
        self.command.execute()

# Uso
living_room_light = Light()

turn_on = TurnOnLightCommand(living_room_light)
turn_off = TurnOffLightCommand(living_room_light)

remote = RemoteControl()

remote.set_command(turn_on)
remote.press_button()

remote.set_command(turn_off)
remote.press_button()
