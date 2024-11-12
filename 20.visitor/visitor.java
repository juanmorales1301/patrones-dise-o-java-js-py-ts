// Interfaz de elemento
interface Shape {
    void accept(Visitor visitor);
}

// Elementos concretos
class Circle implements Shape {
    private double radius;

    public Circle(double radius) {
        this.radius = radius;
    }

    public double getRadius() {
        return radius;
    }

    @Override
    public void accept(Visitor visitor) {
        visitor.visit(this);
    }
}

class Rectangle implements Shape {
    private double width;
    private double height;

    public Rectangle(double width, double height) {
        this.width = width;
        this.height = height;
    }

    public double getWidth() {
        return width;
    }

    public double getHeight() {
        return height;
    }

    @Override
    public void accept(Visitor visitor) {
        visitor.visit(this);
    }
}

// Interfaz del visitante
interface Visitor {
    void visit(Circle circle);
    void visit(Rectangle rectangle);
}

// Visitante concreto para calcular áreas
class AreaCalculator implements Visitor {
    @Override
    public void visit(Circle circle) {
        double area = Math.PI * Math.pow(circle.getRadius(), 2);
        System.out.println("Área del círculo: " + area);
    }

    @Override
    public void visit(Rectangle rectangle) {
        double area = rectangle.getWidth() * rectangle.getHeight();
        System.out.println("Área del rectángulo: " + area);
    }
}

// Visitante concreto para calcular perímetros
class PerimeterCalculator implements Visitor {
    @Override
    public void visit(Circle circle) {
        double perimeter = 2 * Math.PI * circle.getRadius();
        System.out.println("Perímetro del círculo: " + perimeter);
    }

    @Override
    public void visit(Rectangle rectangle) {
        double perimeter = 2 * (rectangle.getWidth() + rectangle.getHeight());
        System.out.println("Perímetro del rectángulo: " + perimeter);
    }
}

// Uso
public class visitor {
    public static void main(String[] args) {
        Shape circle = new Circle(5);
        Shape rectangle = new Rectangle(4, 6);

        Visitor areaCalculator = new AreaCalculator();
        Visitor perimeterCalculator = new PerimeterCalculator();

        circle.accept(areaCalculator);
        circle.accept(perimeterCalculator);

        rectangle.accept(areaCalculator);
        rectangle.accept(perimeterCalculator);
    }
}