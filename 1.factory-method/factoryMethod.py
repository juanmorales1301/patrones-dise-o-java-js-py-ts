from abc import ABC, abstractmethod

# Producto
class Button(ABC):
    @abstractmethod
    def render(self):
        pass

# Producto concreto
class WindowsButton(Button):
    def render(self):
        print("Renderizando botón de Windows.")

class MacOSButton(Button):
    def render(self):
        print("Renderizando botón de MacOS.")

# Creador
class Dialog(ABC):
    def render_window(self):
        ok_button = self.create_button()
        ok_button.render()

    @abstractmethod
    def create_button(self):
        pass

# Creador concreto
class WindowsDialog(Dialog):
    def create_button(self):
        return WindowsButton()

class MacOSDialog(Dialog):
    def create_button(self):
        return MacOSButton()

# Uso
def main():
    import platform
    os_name = platform.system().lower()
    
    if "windows" in os_name:
        dialog = WindowsDialog()
    else:
        dialog = MacOSDialog()
    
    dialog.render_window()

main()
