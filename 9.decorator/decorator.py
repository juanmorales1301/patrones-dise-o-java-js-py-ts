from abc import ABC, abstractmethod

# Componente base
class Notification(ABC):
    @abstractmethod
    def send(self, message):
        pass

# Componente concreto
class BasicNotification(Notification):
    def send(self, message):
        print(f"Notificación enviada: {message}")

# Decorador base
class NotificationDecorator(Notification):
    def __init__(self, wrappee: Notification):
        self.wrappee = wrappee

    def send(self, message):
        self.wrappee.send(message)

# Decoradores concretos
class EmailNotification(NotificationDecorator):
    def send(self, message):
        super().send(message)
        print(f"Correo enviado: {message}")

class SMSNotification(NotificationDecorator):
    def send(self, message):
        super().send(message)
        print(f"SMS enviado: {message}")

# Uso
notification = BasicNotification()
notification = EmailNotification(notification)
notification = SMSNotification(notification)

notification.send("Hola, este es un mensaje.")
