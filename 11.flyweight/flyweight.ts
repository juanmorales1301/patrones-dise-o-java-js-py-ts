// Flyweight
class Font {
    constructor(public typeface: string) {}
}

// Flyweight Factory
class FontFactory {
    private fonts: Map<string, Font> = new Map();

    public getFont(typeface: string): Font {
        if (!this.fonts.has(typeface)) {
            this.fonts.set(typeface, new Font(typeface));
        }
        return this.fonts.get(typeface)!;
    }
}

// Uso
const factory = new FontFactory();

const font1 = factory.getFont("Arial");
const font2 = factory.getFont("Arial");
const font3 = factory.getFont("Times New Roman");

console.log(font1 === font2); // true
console.log(font1 === font3); // false