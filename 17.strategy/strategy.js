// Estrategia
class DiscountStrategy {
    applyDiscount(price) {
        throw new Error("Método no implementado");
    }
}

// Estrategias concretas
class StudentDiscount extends DiscountStrategy {
    applyDiscount(price) {
        return price * 0.8; // 20% de descuento
    }
}

class EmployeeDiscount extends DiscountStrategy {
    applyDiscount(price) {
        return price * 0.7; // 30% de descuento
    }
}

class RegularCustomerDiscount extends DiscountStrategy {
    applyDiscount(price) {
        return price * 0.9; // 10% de descuento
    }
}

// Contexto
class PriceCalculator {
    setStrategy(strategy) {
        this.strategy = strategy;
    }

    calculatePrice(price) {
        return this.strategy.applyDiscount(price);
    }
}

// Uso
const calculator = new PriceCalculator();

calculator.setStrategy(new StudentDiscount());
console.log("Precio con descuento estudiante: " + calculator.calculatePrice(100));

calculator.setStrategy(new EmployeeDiscount());
console.log("Precio con descuento empleado: " + calculator.calculatePrice(100));

calculator.setStrategy(new RegularCustomerDiscount());
console.log("Precio con descuento cliente regular: " + calculator.calculatePrice(100));