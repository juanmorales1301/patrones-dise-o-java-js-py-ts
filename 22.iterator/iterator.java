import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

// Colección
class ProductCollection implements Iterable<String> {
    private List<String> products = new ArrayList<>();

    public void addProduct(String product) {
        products.add(product);
    }

    @Override
    public Iterator<String> iterator() {
        return products.iterator();
    }
}

// Uso
public class iterator {
    public static void main(String[] args) {
        ProductCollection collection = new ProductCollection();
        collection.addProduct("Laptop");
        collection.addProduct("Smartphone");
        collection.addProduct("Tablet");

        for (String product : collection) {
            System.out.println(product);
        }
    }
}