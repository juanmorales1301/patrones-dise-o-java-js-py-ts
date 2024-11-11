// Productos
class Button {
    paint() {
        throw new Error('Método paint() debe ser implementado.');
    }
}

class Checkbox {
    paint() {
        throw new Error('Método paint() debe ser implementado.');
    }
}

// Productos Concretos
class WindowsButton extends Button {
    paint() {
        console.log("Renderizando botón de Windows.");
    }
}

class MacOSButton extends Button {
    paint() {
        console.log("Renderizando botón de MacOS.");
    }
}

class WindowsCheckbox extends Checkbox {
    paint() {
        console.log("Renderizando checkbox de Windows.");
    }
}

class MacOSCheckbox extends Checkbox {
    paint() {
        console.log("Renderizando checkbox de MacOS.");
    }
}

// Fábrica abstracta
class GUIFactory {
    createButton() {
        throw new Error('Método createButton() debe ser implementado.');
    }
    createCheckbox() {
        throw new Error('Método createCheckbox() debe ser implementado.');
    }
}

// Fábricas concretas
class WindowsFactory extends GUIFactory {
    createButton() {
        return new WindowsButton();
    }
    createCheckbox() {
        return new WindowsCheckbox();
    }
}

class MacOSFactory extends GUIFactory {
    createButton() {
        return new MacOSButton();
    }
    createCheckbox() {
        return new MacOSCheckbox();
    }
}

// Cliente
class Application {
    constructor(factory) {
        this.button = factory.createButton();
        this.checkbox = factory.createCheckbox();
    }

    paint() {
        this.button.paint();
        this.checkbox.paint();
    }
}

// Uso
let factory;
const os = require('os').platform();
if (os === 'win32') {
    factory = new WindowsFactory();
} else {
    factory = new MacOSFactory();
}
const app = new Application(factory);
app.paint();