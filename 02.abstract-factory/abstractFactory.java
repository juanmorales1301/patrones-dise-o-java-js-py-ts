interface Button {
    void paint();
}

interface Checkbox {
    void paint();
}

// Productos Concretos
class WindowsButton implements Button {
    public void paint() {
        System.out.println("Renderizando botón de Windows.");
    }
}

class MacOSButton implements Button {
    public void paint() {
        System.out.println("Renderizando botón de MacOS.");
    }
}

class WindowsCheckbox implements Checkbox {
    public void paint() {
        System.out.println("Renderizando checkbox de Windows.");
    }
}

class MacOSCheckbox implements Checkbox {
    public void paint() {
        System.out.println("Renderizando checkbox de MacOS.");
    }
}

// Fábrica abstracta
interface GUIFactory {
    Button createButton();
    Checkbox createCheckbox();
}

// Fábricas concretas
class WindowsFactory implements GUIFactory {
    public Button createButton() {
        return new WindowsButton();
    }
    
    public Checkbox createCheckbox() {
        return new WindowsCheckbox();
    }
}

class MacOSFactory implements GUIFactory {
    public Button createButton() {
        return new MacOSButton();
    }
    
    public Checkbox createCheckbox() {
        return new MacOSCheckbox();
    }
}

// Cliente
class Application {
    private Button button;
    private Checkbox checkbox;
    
    public Application(GUIFactory factory) {
        button = factory.createButton();
        checkbox = factory.createCheckbox();
    }
    
    public void paint() {
        button.paint();
        checkbox.paint();
    }
}

// Uso
public class abstractFactory {
    private static Application configureApplication() {
        Application app;
        GUIFactory factory;
        String os = System.getProperty("os.name").toLowerCase();
        if (os.contains("win")) {
            factory = new WindowsFactory();
        } else {
            factory = new MacOSFactory();
        }
        app = new Application(factory);
        return app;
    }

    public static void main(String[] args) {
        Application app = configureApplication();
        app.paint();
    }
}