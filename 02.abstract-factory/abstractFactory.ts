// Productos
interface Button {
    paint(): void;
}

interface Checkbox {
    paint(): void;
}

// Productos Concretos
class WindowsButton implements Button {
    paint(): void {
        console.log("Renderizando botón de Windows.");
    }
}

class MacOSButton implements Button {
    paint(): void {
        console.log("Renderizando botón de MacOS.");
    }
}

class WindowsCheckbox implements Checkbox {
    paint(): void {
        console.log("Renderizando checkbox de Windows.");
    }
}

class MacOSCheckbox implements Checkbox {
    paint(): void {
        console.log("Renderizando checkbox de MacOS.");
    }
}

// Fábrica abstracta
interface GUIFactory {
    createButton(): Button;
    createCheckbox(): Checkbox;
}

// Fábricas concretas
class WindowsFactory implements GUIFactory {
    createButton(): Button {
        return new WindowsButton();
    }
    createCheckbox(): Checkbox {
        return new WindowsCheckbox();
    }
}

class MacOSFactory implements GUIFactory {
    createButton(): Button {
        return new MacOSButton();
    }
    createCheckbox(): Checkbox {
        return new MacOSCheckbox();
    }
}

// Cliente
class Application {
    private button: Button;
    private checkbox: Checkbox;

    constructor(factory: GUIFactory) {
        this.button = factory.createButton();
        this.checkbox = factory.createCheckbox();
    }

    public paint(): void {
        this.button.paint();
        this.checkbox.paint();
    }
}

// Uso
const os = require('os').platform();
let factory: GUIFactory;
if (os === 'win32') {
    factory = new WindowsFactory();
} else {
    factory = new MacOSFactory();
}
const app = new Application(factory);
app.paint();