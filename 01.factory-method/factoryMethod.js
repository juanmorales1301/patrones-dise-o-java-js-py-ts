// Producto
class Button {
    render() {
        throw new Error('Método render() debe ser implementado.');
    }
}

// Producto Concreto
class WindowsButton extends Button {
    render() {
        console.log('Renderizando botón de Windows.');
    }
}

// Producto Concreto
class MacOSButton extends Button {
    render() {
        console.log('Renderizando botón de MacOS.');
    }
}

// Creador
class Dialog {
    renderWindow() {
        const okButton = this.createButton();
        okButton.render();
    }
    createButton() {
        throw new Error('Método createButton() debe ser implementado.');
    }
}

// Creador Concreto
class WindowsDialog extends Dialog {
    createButton() {
        return new WindowsButton();
    }
}

// Creador Concreto
class MacOSDialog extends Dialog {
    createButton() {
        return new MacOSButton();
    }
}

// Uso
const os = require('os').platform();
let dialog;
if (os === 'win32') {
    dialog = new WindowsDialog();
} else {
    dialog = new MacOSDialog();
}
dialog.renderWindow();