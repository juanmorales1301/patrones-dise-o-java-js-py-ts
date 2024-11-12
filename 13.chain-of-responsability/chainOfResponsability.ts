// Manejador
abstract class SupportHandler {
    protected nextHandler: SupportHandler | null = null;

    public setNextHandler(handler: SupportHandler): void {
        this.nextHandler = handler;
    }

    public abstract handleRequest(request: string): void;
}

// Manejadores concretos
class BasicSupport extends SupportHandler {
    public handleRequest(request: string): void {
        if (request === "Básico") {
            console.log("Solicitud manejada por Soporte Básico.");
        } else if (this.nextHandler) {
            this.nextHandler.handleRequest(request);
        }
    }
}

class TechnicalSupport extends SupportHandler {
    public handleRequest(request: string): void {
        if (request === "Técnico") {
            console.log("Solicitud manejada por Soporte Técnico.");
        } else if (this.nextHandler) {
            this.nextHandler.handleRequest(request);
        }
    }
}

class SpecializedSupport extends SupportHandler {
    public handleRequest(request: string): void {
        if (request === "Especializado") {
            console.log("Solicitud manejada por Soporte Especializado.");
        } else {
            console.log("Solicitud no pudo ser manejada.");
        }
    }
}

// Uso
const basic = new BasicSupport();
const technical = new TechnicalSupport();
const specialized = new SpecializedSupport();

basic.setNextHandler(technical);
technical.setNextHandler(specialized);

basic.handleRequest("Técnico");
basic.handleRequest("Especializado");
basic.handleRequest("Avanzado");