// Observador
interface Observer {
    update(offer: string): void;
}

// Sujeto
class Subject {
    private observers: Observer[] = [];

    public subscribe(observer: Observer): void {
        this.observers.push(observer);
    }

    public unsubscribe(observer: Observer): void {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    public notifyObservers(offer: string): void {
        this.observers.forEach(observer => observer.update(offer));
    }
}

// Observador concreto
class User implements Observer {
    constructor(private name: string) {}

    public update(offer: string): void {
        console.log(`${this.name} recibió la notificación: Nueva oferta - ${offer}`);
    }
}

// Uso
const store = new Subject();

const user1 = new User("Alice");
const user2 = new User("Bob");

store.subscribe(user1);
store.subscribe(user2);

store.notifyObservers("50% de descuento en laptops");