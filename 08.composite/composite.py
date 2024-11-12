from abc import ABC, abstractmethod

# Componente base
class FileSystem(ABC):
    @abstractmethod
    def show_details(self):
        pass

# Hoja
class File(FileSystem):
    def __init__(self, name):
        self.name = name

    def show_details(self):
        print(f"Archivo: {self.name}")

# Compuesto
class Directory(FileSystem):
    def __init__(self, name):
        self.name = name
        self.children = []

    def add(self, component: FileSystem):
        self.children.append(component)

    def show_details(self):
        print(f"Directorio: {self.name}")
        for child in self.children:
            child.show_details()

# Uso
file1 = File("archivo1.txt")
file2 = File("archivo2.txt")

directory = Directory("Documentos")
directory.add(file1)
directory.add(file2)

directory.show_details()
