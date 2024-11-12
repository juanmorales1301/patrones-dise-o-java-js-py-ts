// Interfaz
interface Image {
    display(): void;
}

// Objeto real
class RealImage implements Image {
    constructor(private fileName: string) {
        this.loadFromDisk();
    }

    private loadFromDisk(): void {
        console.log(`Cargando ${this.fileName}`);
    }

    public display(): void {
        console.log(`Mostrando ${this.fileName}`);
    }
}

// Proxy
class ProxyImage implements Image {
    private realImage: RealImage | null = null;

    constructor(private fileName: string) {}

    public display(): void {
        if (!this.realImage) {
            this.realImage = new RealImage(this.fileName);
        }
        this.realImage.display();
    }
}

// Uso
const image: Image = new ProxyImage("photo.jpg");
image.display(); // Carga y muestra la imagen
image.display(); // Solo muestra la imagen