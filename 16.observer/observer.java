// Observador
interface Observer {
    void update(String offer);
}

// Sujeto
class Subject {
    private List<Observer> observers = new ArrayList<>();

    public void subscribe(Observer observer) {
        observers.add(observer);
    }

    public void unsubscribe(Observer observer) {
        observers.remove(observer);
    }

    public void notifyObservers(String offer) {
        for (Observer observer : observers) {
            observer.update(offer);
        }
    }
}

// Observador concreto
class User implements Observer {
    private String name;

    public User(String name) {
        this.name = name;
    }

    @Override
    public void update(String offer) {
        System.out.println(name + " recibió la notificación: Nueva oferta - " + offer);
    }
}

// Uso
public class observer {
    public static void main(String[] args) {
        Subject store = new Subject();

        Observer user1 = new User("Alice");
        Observer user2 = new User("Bob");

        store.subscribe(user1);
        store.subscribe(user2);

        store.notifyObservers("50% de descuento en laptops");
    }
}