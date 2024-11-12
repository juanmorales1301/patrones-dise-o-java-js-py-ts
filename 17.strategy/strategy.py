from abc import ABC, abstractmethod

# Estrategia
class DiscountStrategy(ABC):
    @abstractmethod
    def apply_discount(self, price):
        pass

# Estrategias concretas
class StudentDiscount(DiscountStrategy):
    def apply_discount(self, price):
        return price * 0.8  # 20% de descuento

class EmployeeDiscount(DiscountStrategy):
    def apply_discount(self, price):
        return price * 0.7  # 30% de descuento

class RegularCustomerDiscount(DiscountStrategy):
    def apply_discount(self, price):
        return price * 0.9  # 10% de descuento

# Contexto
class PriceCalculator:
    def __init__(self):
        self.strategy = None

    def set_strategy(self, strategy: DiscountStrategy):
        self.strategy = strategy

    def calculate_price(self, price):
        return self.strategy.apply_discount(price)

# Uso
calculator = PriceCalculator()

calculator.set_strategy(StudentDiscount())
print("Precio con descuento estudiante:", calculator.calculate_price(100))

calculator.set_strategy(EmployeeDiscount())
print("Precio con descuento empleado:", calculator.calculate_price(100))

calculator.set_strategy(RegularCustomerDiscount())
print("Precio con descuento cliente regular:", calculator.calculate_price(100))
