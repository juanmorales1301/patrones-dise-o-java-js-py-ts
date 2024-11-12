// Componente base
class Notification {
    send(message) {
        throw new Error("Método no implementado");
    }
}

// Componente concreto
class BasicNotification extends Notification {
    send(message) {
        console.log(`Notificación enviada: ${message}`);
    }
}

// Decorador base
class NotificationDecorator extends Notification {
    constructor(wrappee) {
        super();
        this.wrappee = wrappee;
    }

    send(message) {
        this.wrappee.send(message);
    }
}

// Decoradores concretos
class EmailNotification extends NotificationDecorator {
    send(message) {
        super.send(message);
        console.log(`Correo enviado: ${message}`);
    }
}

class SMSNotification extends NotificationDecorator {
    send(message) {
        super.send(message);
        console.log(`SMS enviado: ${message}`);
    }
}

// Uso
let notification = new BasicNotification();
notification = new EmailNotification(notification);
notification = new SMSNotification(notification);

notification.send("Hola, este es un mensaje.");