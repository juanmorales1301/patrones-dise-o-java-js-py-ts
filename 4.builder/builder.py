class Order:
    def __init__(self, product):
        self.product = product
        self.address = None
        self.delivery_date = None

    def __str__(self):
        return f"Producto: {self.product}, Dirección: {self.address}, Fecha: {self.delivery_date}"

class OrderBuilder:
    def __init__(self, product):
        self.order = Order(product)

    def set_address(self, address):
        self.order.address = address
        return self

    def set_delivery_date(self, delivery_date):
        self.order.delivery_date = delivery_date
        return self

    def build(self):
        return self.order

# Uso
order = (OrderBuilder("Laptop")
         .set_address("123 Main St")
         .set_delivery_date("2023-10-10")
         .build())

print(order)
