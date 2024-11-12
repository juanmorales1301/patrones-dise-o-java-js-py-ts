// Estrategia
interface DiscountStrategy {
    applyDiscount(price: number): number;
}

// Estrategias concretas
class StudentDiscount implements DiscountStrategy {
    public applyDiscount(price: number): number {
        return price * 0.8; // 20% de descuento
    }
}

class EmployeeDiscount implements DiscountStrategy {
    public applyDiscount(price: number): number {
        return price * 0.7; // 30% de descuento
    }
}

class RegularCustomerDiscount implements DiscountStrategy {
    public applyDiscount(price: number): number {
        return price * 0.9; // 10% de descuento
    }
}

// Contexto
class PriceCalculator {
    private strategy: DiscountStrategy;

    public setStrategy(strategy: DiscountStrategy): void {
        this.strategy = strategy;
    }

    public calculatePrice(price: number): number {
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