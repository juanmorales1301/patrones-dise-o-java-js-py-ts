// Mediador
interface ChatMediator {
    sendMessage(message: string, sender: User): void;
    addUser(user: User): void;
}

class ChatRoom implements ChatMediator {
    private users: User[] = [];

    public addUser(user: User): void {
        this.users.push(user);
    }

    public sendMessage(message: string, sender: User): void {
        this.users.forEach(user => {
            if (user !== sender) {
                user.receive(message);
            }
        });
    }
}

// Usuario
class User {
    constructor(private name: string, private mediator: ChatMediator) {}

    public send(message: string): void {
        console.log(`${this.name}: Enviando mensaje -> ${message}`);
        this.mediator.sendMessage(message, this);
    }

    public receive(message: string): void {
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