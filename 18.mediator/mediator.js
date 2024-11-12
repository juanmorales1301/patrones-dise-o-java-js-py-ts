// Mediador
class ChatRoom {
    constructor() {
        this.users = [];
    }

    addUser(user) {
        this.users.push(user);
    }

    sendMessage(message, sender) {
        this.users.forEach(user => {
            if (user !== sender) {
                user.receive(message);
            }
        });
    }
}

// Usuario
class User {
    constructor(name, mediator) {
        this.name = name;
        this.mediator = mediator;
    }

    send(message) {
        console.log(`${this.name}: Enviando mensaje -> ${message}`);
        this.mediator.sendMessage(message, this);
    }

    receive(message) {
        console.log(`${this.name}: Recibiendo mensaje -> ${message}`);
    }
}

// Uso
const chatRoom = new ChatRoom();

const user1 = new User("Alice", chatRoom);
const user2 = new User("Bob", chatRoom);
const user3 = new User("Charlie", chatRoom);

chatRoom.addUser(user1);
chatRoom.addUser(user2);
chatRoom.addUser(user3);

user1.send("Hola a todos!");