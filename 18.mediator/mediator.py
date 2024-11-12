# Mediador
class ChatRoom:
    def __init__(self):
        self.users = []

    def add_user(self, user):
        self.users.append(user)

    def send_message(self, message, sender):
        for user in self.users:
            if user != sender:
                user.receive(message)

# Usuario
class User:
    def __init__(self, name, mediator):
        self.name = name
        self.mediator = mediator

    def send(self, message):
        print(f"{self.name}: Enviando mensaje -> {message}")
        self.mediator.send_message(message, self)

    def receive(self, message):
        print(f"{self.name}: Recibiendo mensaje -> {message}")

# Uso
chat_room = ChatRoom()

user1 = User("Alice", chat_room)
user2 = User("Bob", chat_room)
user3 = User("Charlie", chat_room)

chat_room.add_user(user1)
chat_room.add_user(user2)
chat_room.add_user(user3)

user1.send("Hola a todos!")
