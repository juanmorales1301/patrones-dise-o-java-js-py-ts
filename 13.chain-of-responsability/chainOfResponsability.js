// Manejador
class SupportHandler {
    setNextHandler(handler) {
        this.nextHandler = handler;
    }

    handleRequest(request) {
        throw new Error("Método no implementado");
    }
}

// Manejadores concretos
class BasicSupport extends SupportHandler {
    handleRequest(request) {
        if (request === "Básico") {
            console.log("Solicitud manejada por Soporte Básico.");
        } else if (this.nextHandler) {
            this.nextHandler.handleRequest(request);
        }
    }
}

class TechnicalSupport extends SupportHandler {
    handleRequest(request) {
        if (request === "Técnico") {
            console.log("Solicitud manejada por Soporte Técnico.");
        } else if (this.nextHandler) {
            this.nextHandler.handleRequest(request);
        }
    }
}

class SpecializedSupport extends SupportHandler {
    handleRequest(request) {
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