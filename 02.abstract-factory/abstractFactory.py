from abc import ABC, abstractmethod

# Productos
class Button(ABC):
    @abstractmethod
    def paint(self):
        pass

class Checkbox(ABC):
    @abstractmethod
    def paint(self):
        pass

# Productos concretos
class WindowsButton(Button):
    def paint(self):
        print("Renderizando botón de Windows.")

class MacOSButton(Button):
    def paint(self):
        print("Renderizando botón de MacOS.")

class WindowsCheckbox(Checkbox):
    def paint(self):
        print("Renderizando checkbox de Windows.")

class MacOSCheckbox(Checkbox):
    def paint(self):
        print("Renderizando checkbox de MacOS.")

# Fábrica abstracta
class GUIFactory(ABC):
    @abstractmethod
    def create_button(self):
        pass

    @abstractmethod
    def create_checkbox(self):
        pass

# Fábricas concretas
class WindowsFactory(GUIFactory):
    def create_button(self):
        return WindowsButton()

    def create_checkbox(self):
        return WindowsCheckbox()

class MacOSFactory(GUIFactory):
    def create_button(self):
        return MacOSButton()

    def create_checkbox(self):
        return MacOSCheckbox()

# Cliente
class Application:
    def __init__(self, factory: GUIFactory):
        self.button = factory.create_button()
        self.checkbox = factory.create_checkbox()

    def paint(self):
        self.button.paint()
        self.checkbox.paint()

# Uso
def main():
    import platform
    os_name = platform.system().lower()

    if "windows" in os_name:
        factory = WindowsFactory()
    else:
        factory = MacOSFactory()

    app = Application(factory)
    app.paint()

main()
