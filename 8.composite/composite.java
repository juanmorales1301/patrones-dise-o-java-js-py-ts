import java.util.ArrayList;
import java.util.List;

// Componente base
interface FileSystem {
    void showDetails();
}

// Hoja
class File implements FileSystem {
    private String name;

    public File(String name) {
        this.name = name;
    }

    @Override
    public void showDetails() {
        System.out.println("Archivo: " + name);
    }
}

// Compuesto
class Directory implements FileSystem {
    private String name;
    private List<FileSystem> children = new ArrayList<>();

    public Directory(String name) {
        this.name = name;
    }

    public void add(FileSystem component) {
        children.add(component);
    }

    @Override
    public void showDetails() {
        System.out.println("Directorio: " + name);
        for (FileSystem child : children) {
            child.showDetails();
        }
    }
}

// Uso
public class composite {
    public static void main(String[] args) {
        File file1 = new File("archivo1.txt");
        File file2 = new File("archivo2.txt");

        Directory directory = new Directory("Documentos");
        directory.add(file1);
        directory.add(file2);

        directory.showDetails();
    }
}