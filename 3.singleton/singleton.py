class Database:
    _instance = None

    def __new__(cls, *args, **kwargs):
        if not cls._instance:
            cls._instance = super().__new__(cls)
        return cls._instance

    def connect(self):
        print("Conexión establecida.")

# Uso
db1 = Database()
db2 = Database()

print(db1 == db2)  # True
db1.connect()
