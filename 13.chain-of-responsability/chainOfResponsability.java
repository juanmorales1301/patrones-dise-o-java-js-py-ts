// Manejador
abstract class SupportHandler {
    protected SupportHandler nextHandler;

    public void setNextHandler(SupportHandler handler) {
        this.nextHandler = handler;
    }

    public abstract void handleRequest(String request);
}

// Manejadores concretos
class BasicSupport extends SupportHandler {
    @Override
    public void handleRequest(String request) {
        if (request.equals("Básico")) {
            System.out.println("Solicitud manejada por Soporte Básico.");
        } else if (nextHandler != null) {
            nextHandler.handleRequest(request);
        }
    }
}

class TechnicalSupport extends SupportHandler {
    @Override
    public void handleRequest(String request) {
        if (request.equals("Técnico")) {
            System.out.println("Solicitud manejada por Soporte Técnico.");
        } else if (nextHandler != null) {
            nextHandler.handleRequest(request);
        }
    }
}

class SpecializedSupport extends SupportHandler {
    @Override
    public void handleRequest(String request) {
        if (request.equals("Especializado")) {
            System.out.println("Solicitud manejada por Soporte Especializado.");
        } else {
            System.out.println("Solicitud no pudo ser manejada.");
        }
    }
}

// Uso
public class chainOfResponsability {
    public static void main(String[] args) {
        SupportHandler basic = new BasicSupport();
        SupportHandler technical = new TechnicalSupport();
        SupportHandler specialized = new SpecializedSupport();

        basic.setNextHandler(technical);
        technical.setNextHandler(specialized);

        basic.handleRequest("Técnico");
        basic.handleRequest("Especializado");
        basic.handleRequest("Avanzado");
    }
}