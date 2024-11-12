# Sujeto
class Subject:
    def __init__(self):
        self.observers = []

    def subscribe(self, observer):
        self.observers.append(observer)

    def unsubscribe(self, observer):
        self.observers.remove(observer)

    def notify_observers(self, offer):
        for observer in self.observers:
            observer.update(offer)

# Observador
class User:
    def __init__(self, name):
        self.name = name

    def update(self, offer):
        print(f"{self.name} recibió la notificación: Nueva oferta - {offer}")

# Uso
store = Subject()

user1 = User("Alice")
user2 = User("Bob")

store.subscribe(user1)
store.subscribe(user2)

store.notify_observers("50% de descuento en laptops")
