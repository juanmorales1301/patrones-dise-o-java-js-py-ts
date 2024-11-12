// Elementos
class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    accept(visitor) {
        visitor.visitCircle(this);
    }
}

class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    accept(visitor) {
        visitor.visitRectangle(this);
    }
}

// Visitantes
class AreaCalculator {
    visitCircle(circle) {
        const area = Math.PI * Math.pow(circle.radius, 2);
        console.log(`Área del círculo: ${area}`);
    }

    visitRectangle(rectangle) {
        const area = rectangle.width * rectangle.height;
        console.log(`Área del rectángulo: ${area}`);
    }
}

class PerimeterCalculator {
    visitCircle(circle) {
        const perimeter = 2 * Math.PI * circle.radius;
        console.log(`Perímetro del círculo: ${perimeter}`);
    }

    visitRectangle(rectangle) {
        const perimeter = 2 * (rectangle.width + rectangle.height);
        console.log(`Perímetro del rectángulo: ${perimeter}`);
    }
}

// Uso
const circle = new Circle(5);
const rectangle = new Rectangle(4, 6);

const areaCalculator = new AreaCalculator();
const perimeterCalculator = new PerimeterCalculator();

circle.accept(areaCalculator);
circle.accept(perimeterCalculator);

rectangle.accept(areaCalculator);
rectangle.accept(perimeterCalculator);