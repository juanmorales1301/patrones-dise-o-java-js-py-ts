// Prototipo
class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    clone() {
        return new Circle(this.radius);
    }
}

// Uso
const original = new Circle(5);
const clone = original.clone();
clone.radius = 10;

console.log("Original:", original);
console.log("Clon:", clone);