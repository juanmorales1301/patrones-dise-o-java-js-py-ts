// Interfaz objetivo
class PaymentProcessor {
    processPayment(details) {
        throw new Error("Método no implementado");
    }
}

// Clase existente incompatible
class LegacyPaymentSystem {
    makePayment(data) {
        console.log(`Pago procesado: ${data}`);
    }
}

// Adaptador
class PaymentAdapter extends PaymentProcessor {
    constructor(legacySystem) {
        super();
        this.legacySystem = legacySystem;
    }

    processPayment(details) {
        this.legacySystem.makePayment(details);
    }
}

// Uso
const legacySystem = new LegacyPaymentSystem();
const adapter = new PaymentAdapter(legacySyste