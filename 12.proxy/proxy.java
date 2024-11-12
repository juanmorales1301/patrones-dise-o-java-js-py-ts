// Interfaz
interface Image {
    void display();
}

// Objeto real
class RealImage implements Image {
    private String fileName;

    public RealImage(String fileName) {
        this.fileName = fileName;
        loadFromDisk();
    }

    private void loadFromDisk() {
        System.out.println("Cargando " + fileName);
    }

    @Override
    public void display() {
        System.out.println("Mostrando " + fileName);
    }
}

// Proxy
class ProxyImage implements Image {
    private String fileName;
    private RealImage realImage;

    public ProxyImage(String fileName) {
        this.fileName = fileName;
    }

    @Override
    public void display() {
        if (realImage == null) {
            realImage = new RealImage(fileName);
        }
        realImage.display();
    }
}

// Uso
public class proxy {
    public static void main(String[] args) {
        Image image = new ProxyImage("photo.jpg");
        image.display(); // Carga y muestra la imagen
        image.display(); // Solo muestra la imagen
    }
}