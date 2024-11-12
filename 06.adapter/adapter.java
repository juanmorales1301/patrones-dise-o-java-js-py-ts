// Interfaz objetivo
interface PaymentProcessor {
    void processPayment(String details);
}

// Clase existente incompatible
class LegacyPaymentSystem {
    void makePayment(String data) {
        System.out.println("Pago procesado: " + data);
    }
}

// Adaptador
class PaymentAdapter implements PaymentProcessor {
    private LegacyPaymentSystem legacyPaymentSystem;

    public PaymentAdapter(LegacyPaymentSystem legacyPaymentSystem) {
        this.legacyPaymentSystem = legacyPaymentSystem;
    }

    @Override
    public void processPayment(String details) {
        legacyPaymentSystem.makePayment(details);
    }
}

// Uso
public class adapter {
    public static void main(String[] args) {
        LegacyPaymentSystem legacySystem = new LegacyPaymentSystem();
        PaymentProcessor adapter = new PaymentAdapter(legacySystem);
        adapter.processPayment("Detalles del pago");
    }
}