// Sujeto
class Subject {
    constructor() {
        this.observers = [];
    }

    subscribe(observer) {
        this.observers.push(observer);
    }

    unsubscribe(observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    notifyObservers(offer) {
        this.observers.forEach(observer => observer.update(offer));
    }
}

// Observador
class User {
    constructor(name) {
        this.name = name;
    }

    update(offer) {
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