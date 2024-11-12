# Colección
class ProductCollection:
    def __init__(self):
        self.products = []

    def add_product(self, product):
        self.products.append(product)

    def __iter__(self):
        return iter(self.products)

# Uso
collection = ProductCollection()
collection.add_product("Laptop")
collection.add_product("Smartphone")
collection.add_product("Tablet")

for product in collection:
    print(product)