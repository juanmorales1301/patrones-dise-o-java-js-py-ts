// Componente base
class FileSystem {
    showDetails() {
        throw new Error("Método no implementado");
    }
}

// Hoja
class File extends FileSystem {
    constructor(name) {
        super();
        this.name = name;
    }

    showDetails() {
        console.log(`Archivo: ${this.name}`);
    }
}

// Compuesto
class Directory extends FileSystem {
    constructor(name) {
        super();
        this.name = name;
        this.children = [];
    }

    add(component) {
        this.children.push(component);
    }

    showDetails() {
        console.log(`Directorio: ${this.name}`);
        this.children.forEach(child => child.showDetails());
    }
}

// Uso
const file1 = new File("archivo1.txt");
const file2 = new File("archivo2.txt");

const directory = new Directory("Documentos");
directory.add(file1);
directory.add(file2);

directory.showDetails();