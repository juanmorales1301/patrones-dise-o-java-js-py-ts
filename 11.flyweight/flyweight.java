import java.util.HashMap;
import java.util.Map;

// Flyweight
class Font {
    private final String typeface;

    public Font(String typeface) {
        this.typeface = typeface;
    }

    public String getTypeface() {
        return typeface;
    }
}

// Flyweight Factory
class FontFactory {
    private Map<String, Font> fonts = new HashMap<>();

    public Font getFont(String typeface) {
        if (!fonts.containsKey(typeface)) {
            fonts.put(typeface, new Font(typeface));
        }
        return fonts.get(typeface);
    }
}

// Uso
public class flyweight {
    public static void main(String[] args) {
        FontFactory factory = new FontFactory();

        Font font1 = factory.getFont("Arial");
        Font font2 = factory.getFont("Arial");
        Font font3 = factory.getFont("Times New Roman");

        System.out.println(font1 == font2); // true
        System.out.println(font1 == font3); // false
    }
}