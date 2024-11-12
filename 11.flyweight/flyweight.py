# Flyweight
class Font:
    def __init__(self, typeface):
        self.typeface = typeface

# Flyweight Factory
class FontFactory:
    def __init__(self):
        self.fonts = {}

    def get_font(self, typeface):
        if typeface not in self.fonts:
            self.fonts[typeface] = Font(typeface)
        return self.fonts[typeface]

# Uso
factory = FontFactory()

font1 = factory.get_font("Arial")
font2 = factory.get_font("Arial")
font3 = factory.get_font("Times New Roman")

print(font1 is font2)  # True
print(font1 is font3)  # False