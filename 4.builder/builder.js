class Order {
    constructor(product) {
        this.product = product;
    }
    setAddress(address) {
        this.address = address;
        return this;
    }
    setDeliveryDate(deliveryDate) {
        this.deliveryDate = deliveryDate;
        return this;
    }
}

const order = new Order("Laptop")
                .setAddress("123 Main St")
                .setDeliveryDate("10/10/2023");