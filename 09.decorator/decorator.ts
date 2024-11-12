// Componente base
interface Notification {
    send(message: string): void;
}

// Componente concreto
class BasicNotification implements Notification {
    public send(message: string): void {
        console.log(`Notificación enviada: ${message}`);
    }
}

// Decorador base
class NotificationDecorator implements Notification {
    constructor(protected wrappee: Notification) {}

    public send(message: string): void {
        this.wrappee.send(message);
    }
}

// Decoradores concretos
class EmailNotification extends NotificationDecorator {
    public send(message: string): void {
        super.send(message);
        console.log(`Correo enviado: ${message}`);
    }
}

class SMSNotification extends NotificationDecorator {
    public send(message: string): void {
        super.send(message);
        console.log(`SMS enviado: ${message}`);
    }
}

// Uso
let notification: Notification = new BasicNotification();
notification = new EmailNotification(notification);
notification = new SMSNotification(notification);

notification.send("Hola, este es un mensaje.");