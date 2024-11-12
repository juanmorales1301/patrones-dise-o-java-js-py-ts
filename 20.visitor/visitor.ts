// Elementos
interface Shape {
    accept(visitor: Visitor): void;
}

class Circle implements Shape {
    constructor(public radius: number) {}

    accept(visitor: Visitor): void {
        visitor.visitCircle(this);
    }
}

class Rectangle implements Shape {
    constructor(public width: number, public height: number) {}

    accept(visitor: Visitor): void {
        visitor.visitRectangle(this);
    }
}

// Visitantes
interface Visitor {
    visitCircle(circle: Circle): void;
    visitRectangle(rectangle: Rectangle): void;
}

class AreaCalculator implements Visitor {
    public visitCircle(circle: Circle): void {
        const area = Math.PI * Math.pow(circle.radius, 2);
        console.log(`Área del círculo: ${area}`);
    }

    public visitRectangle(rectangle: Rectangle): void {
        const area = rectangle.width * rectangle.height;
        console.log(`Área del rectángulo: ${area}`);
    }
}

class PerimeterCalculator implements Visitor {
    public visitCircle(circle: Circle): void {
        const perimeter = 2 * Math.PI * circle.radius;
        console.log(`Perímetro del círculo: ${perimeter}`);
    }

    public visitRectangle(rectangle: Rectangle): void {
        const perimeter = 2 * (rectangle.width + rectangle.height);
        console.log(`Perímetro del rectángulo: ${perimeter}`);
    }
}

// Uso
const circle: Shape = new Circle(5);
const rectangle: Shape = new Rectangle(4, 6);

const areaCalculator: Visitor = new AreaCalculator();
const perimeterCalculator: Visitor = new PerimeterCalculator();

circle.accept(areaCalculator);
circle.accept(perimeterCalculator);

rectangle.accept(areaCalculator);
rectangle.accept(perimeterCalculator);