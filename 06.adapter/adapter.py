# Clase existente incompatible
class LegacyPaymentSystem:
    def make_payment(self, data):
        print(f"Pago procesado: {data}")

# Interfaz objetivo
class PaymentProcessor:
    def process_payment(self, details):
        pass

# Adaptador
class PaymentAdapter(PaymentProcessor):
    def __init__(self, legacy_system):
        self.legacy_system = legacy_system

    def process_payment(self, details):
        self.legacy_system.make_payment(details)

# Uso
legacy_system = LegacyPaymentSystem()
adapter = PaymentAdapter(legacy_system)

adapter.process_payment("Detalles del pago")
