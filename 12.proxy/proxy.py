# Objeto real
class RealImage:
    def __init__(self, file_name):
        self.file_name = file_name
        self.load_from_disk()

    def load_from_disk(self):
        print(f"Cargando {self.file_name}")

    def display(self):
        print(f"Mostrando {self.file_name}")

# Proxy
class ProxyImage:
    def __init__(self, file_name):
        self.file_name = file_name
        self.real_image = None

    def display(self):
        if self.real_image is None:
            self.real_image = RealImage(self.file_name)
        self.real_image.display()

# Uso
image = ProxyImage("photo.jpg")
image.display()  # Carga y muestra la imagen
image.display()  # Solo muestra la imagen