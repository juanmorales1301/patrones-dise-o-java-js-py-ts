// Producto
interface Button {
    void render();
}

// Producto Concreto
class WindowsButton implements Button {
    public void render() {
        System.out.println("Renderizando botón de Windows.");
    }
}

// Producto Concreto
class MacOSButton implements Button {
    public void render() {
        System.out.println("Renderizando botón de MacOS.");
    }
}

// Creador
abstract class Dialog {
    public void renderWindow() {
        Button okButton = createButton();
        okButton.render();
    }
    protected abstract Button createButton();
}

// Creador Concreto
class WindowsDialog extends Dialog {
    protected Button createButton() {
        return new WindowsButton();
    }
}

// Creador Concreto
class MacOSDialog extends Dialog {
    protected Button createButton() {
        return new MacOSButton();
    }
}

// Uso
public class factoryMethod {
    public static void main(String[] args) {
        Dialog dialog;
        String os = System.getProperty("os.name").toLowerCase();
        if (os.contains("win")) {
            dialog = new WindowsDialog();
        } else {
            dialog = new MacOSDialog();
        }
        dialog.renderWindow();
    }
}