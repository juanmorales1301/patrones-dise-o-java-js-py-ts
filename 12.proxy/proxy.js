// Objeto real
class RealImage {
    constructor(fileName) {
        this.fileName = fileName;
        this.loadFromDisk();
    }

    loadFromDisk() {
        console.log(`Cargando ${this.fileName}`);
    }

    display() {
        console.log(`Mostrando ${this.fileName}`);
    }
}

// Proxy
class ProxyImage {
    constructor(fileName) {
        this.fileName = fileName;
        this.realImage = null;
    }

    display() {
        if (!this.realImage) {
            this.realImage = new RealImage(this.fileName);
        }
        this.realImage.display();
    }
}

// Uso
const image = new ProxyImage("photo.jpg");
image.display(); // Carga y muestra la imagen
image.display(); // Solo muestra la imagen