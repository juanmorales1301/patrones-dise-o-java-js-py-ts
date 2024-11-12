from abc import ABC, abstractmethod

# Elementos
class Shape(ABC):
    @abstractmethod
    def accept(self, visitor):
        pass

class Circle(Shape):
    def __init__(self, radius):
        self.radius = radius

    def accept(self, visitor):
        visitor.visit_circle(self)

class Rectangle(Shape):
    def __init__(self, width, height):
        self.width = width
        self.height = height

    def accept(self, visitor):
        visitor.visit_rectangle(self)

# Visitantes
class Visitor(ABC):
    @abstractmethod
    def visit_circle(self, circle):
        pass

    @abstractmethod
    def visit_rectangle(self, rectangle):
        pass

class AreaCalculator(Visitor):
    def visit_circle(self, circle):
        area = 3.14159 * circle.radius ** 2
        print(f"Área del círculo: {area}")

    def visit_rectangle(self, rectangle):
        area = rectangle.width * rectangle.height
        print(f"Área del rectángulo: {area}")

class PerimeterCalculator(Visitor):
    def visit_circle(self, circle):
        perimeter = 2 * 3.14159 * circle.radius
        print(f"Perímetro del círculo: {perimeter}")

    def visit_rectangle(self, rectangle):
        perimeter = 2 * (rectangle.width + rectangle.height)
        print(f"Perímetro del rectángulo: {perimeter}")

# Uso
circle = Circle(5)
rectangle = Rectangle(4, 6)

area_calculator = AreaCalculator()
perimeter_calculator = PerimeterCalculator()

circle.accept(area_calculator)
circle.accept(perimeter_calculator)

rectangle.accept(area_calculator)
rectangle.accept(perimeter_calculator)
