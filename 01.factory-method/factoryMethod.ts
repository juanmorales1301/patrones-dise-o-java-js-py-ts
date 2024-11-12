// Producto
interface Button {
    render(): void;
}

// Producto Concreto
class WindowsButton implements Button {
    render(): void {
        console.log('Renderizando botón de Windows.');
    }
}

// Producto Concreto
class MacOSButton implements Button {
    render(): void {
        console.log('Renderizando botón de MacOS.');
    }
}

// Creador
abstract class Dialog {
    public renderWindow(): void {
        const okButton = this.createButton();
        okButton.render();
    }
    protected abstract createButton(): Button;
}

// Creador Concreto
class WindowsDialog extends Dialog {
    protected createButton(): Button {
        return new WindowsButton();
    }
}

// Creador Concreto
class MacOSDialog extends Dialog {
    protected createButton(): Button {
        return new MacOSButton();
    }
}

// Uso
const os = require('os').platform();
let dialog: Dialog;
if (os === 'win32') {
    dialog = new WindowsDialog();
} else {
    dialog = new MacOSDialog();
}
dialog.renderWindow();