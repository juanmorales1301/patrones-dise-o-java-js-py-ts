// Componente base
interface FileSystem {
    showDetails(): void;
}

// Hoja
class File implements FileSystem {
    constructor(private name: string) {}

    public showDetails(): void {
        console.log(`Archivo: ${this.name}`);
    }
}

// Compuesto
class Directory implements FileSystem {
    private children: FileSystem[] = [];

    constructor(private name: string) {}

    public add(component: FileSystem): void {
        this.children.push(component);
    }

    public showDetails(): void {
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