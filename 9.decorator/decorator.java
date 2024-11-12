// Componente base
interface Notification {
    void send(String message);
}

// Componente concreto
class BasicNotification implements Notification {
    @Override
    public void send(String message) {
        System.out.println("Notificación enviada: " + message);
    }
}

// Decorador base
abstract class NotificationDecorator implements Notification {
    protected Notification wrappee;

    public NotificationDecorator(Notification wrappee) {
        this.wrappee = wrappee;
    }

    @Override
    public void send(String message) {
        wrappee.send(message);
    }
}

// Decoradores concretos
class EmailNotification extends NotificationDecorator {
    public EmailNotification(Notification wrappee) {
        super(wrappee);
    }

    @Override
    public void send(String message) {
        super.send(message);
        System.out.println("Correo enviado: " + message);
    }
}

class SMSNotification extends NotificationDecorator {
    public SMSNotification(Notification wrappee) {
        super(wrappee);
    }

    @Override
    public void send(String message) {
        super.send(message);
        System.out.println("SMS enviado: " + message);
    }
}

// Uso
public class decorator {
    public static void main(String[] args) {
        Notification notification = new BasicNotification();
        notification = new EmailNotification(notification);
        notification = new SMSNotification(notification);

        notification.send("Hola, este es un mensaje.");
    }
}