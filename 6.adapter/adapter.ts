// Interfaz objetivo
interface PaymentProcessor {
    processPayment(details: string): void;
}

// Clase existente incompatible
class LegacyPaymentSystem {
    public makePayment(data: string): void {
        console.log(`Pago procesado: ${data}`);
    }
}

// Adaptador
class PaymentAdapter implements PaymentProcessor {
    private legacySystem: LegacyPaymentSystem;

    constructor(legacySystem: LegacyPaymentSystem) {
        this.legacySystem = legacySystem;
    }

    public processPayment(details: string): void {
        this.legacySystem.makePayment(details);
    }
}

// Uso
const legacySystem = new LegacyPaymentSystem();
const adapter: PaymentProcessor = new PaymentAdapter(legacySystem);
adapter.processPayment("Detalles del pago");