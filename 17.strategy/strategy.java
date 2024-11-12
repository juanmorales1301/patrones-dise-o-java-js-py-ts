// Estrategia
interface DiscountStrategy {
    double applyDiscount(double price);
}

// Estrategias concretas
class StudentDiscount implements DiscountStrategy {
    @Override
    public double applyDiscount(double price) {
        return price * 0.8; // 20% de descuento
    }
}

class EmployeeDiscount implements DiscountStrategy {
    @Override
    public double applyDiscount(double price) {
        return price * 0.7; // 30% de descuento
    }
}

class RegularCustomerDiscount implements DiscountStrategy {
    @Override
    public double applyDiscount(double price) {
        return price * 0.9; // 10% de descuento
    }
}

// Contexto
class PriceCalculator {
    private DiscountStrategy strategy;

    public void setStrategy(DiscountStrategy strategy) {
        this.strategy = strategy;
    }

    public double calculatePrice(double price) {
        return strategy.applyDiscount(price);
    }
}

// Uso
public class strategy {
    public static void main(String[] args) {
        PriceCalculator calculator = new PriceCalculator();

        calculator.setStrategy(new StudentDiscount());
        System.out.println("Precio con descuento estudiante: " + calculator.calculatePrice(100));

        calculator.setStrategy(new EmployeeDiscount());
        System.out.println("Precio con descuento empleado: " + calculator.calculatePrice(100));

        calculator.setStrategy(new RegularCustomerDiscount());
        System.out.println("Precio con descuento cliente regular: " + calculator.calculatePrice(100));
    }
}