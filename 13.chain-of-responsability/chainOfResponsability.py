from abc import ABC, abstractmethod

# Manejador
class SupportHandler(ABC):
    def __init__(self):
        self.next_handler = None

    def set_next_handler(self, handler):
        self.next_handler = handler

    @abstractmethod
    def handle_request(self, request):
        pass

# Manejadores concretos
class BasicSupport(SupportHandler):
    def handle_request(self, request):
        if request == "Básico":
            print("Solicitud manejada por Soporte Básico.")
        elif self.next_handler:
            self.next_handler.handle_request(request)

class TechnicalSupport(SupportHandler):
    def handle_request(self, request):
        if request == "Técnico":
            print("Solicitud manejada por Soporte Técnico.")
        elif self.next_handler:
            self.next_handler.handle_request(request)

class SpecializedSupport(SupportHandler):
    def handle_request(self, request):
        if request == "Especializado":
            print("Solicitud manejada por Soporte Especializado.")
        else:
            print("Solicitud no pudo ser manejada.")

# Uso
basic = BasicSupport()
technical = TechnicalSupport()
specialized = SpecializedSupport()

basic.set_next_handler(technical)
technical.set_next_handler(specialized)

basic.handle_request("Técnico")
basic.handle_request("Especializado")
basic.handle_request("Avanzado")
