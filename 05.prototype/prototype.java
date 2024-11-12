// Interfaz del prototipo
interface Shape extends Cloneable {
    Shape clone();
}

// Clase concreta
class Circle implements Shape {
    private int radius;

    public Circle(int radius) {
        this.radius = radius;
    }

    public void setRadius(int radius) {
        this.radius = radius;
    }

    @Override
    public Shape clone() {
        return new Circle(this.radius);
    }

    @Override
    public String toString() {
        return "Circle with radius: " + radius;
    }
}

// Uso
public class prototype {
    public static void main(String[] args) {
        Circle original = new Circle(5);
        Circle clone = (Circle) original.clone();
        clone.setRadius(10);

        System.out.println("Original: " + original);
        System.out.println("Clon: " + clone);
    }
}