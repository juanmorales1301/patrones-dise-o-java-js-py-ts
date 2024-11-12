import copy

# Prototipo
class Circle:
    def __init__(self, radius):
        self.radius = radius

    def clone(self):
        return copy.deepcopy(self)

# Uso
original = Circle(5)
clone = original.clone()
clone.radius = 10

print("Original:", vars(original))
print("Clon:", vars(clone))