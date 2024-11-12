class Order {
    private product: string;
    private address?: string;
    private deliveryDate?: string;

    constructor(product: string) {
        this.product = product;
    }

    public setAddress(address: string): this {
        this.address = address;
        return this;
    }

    public setDeliveryDate(deliveryDate: string): this {
        this.deliveryDate = deliveryDate;
        return this;
    }
}

const order = new Order("Laptop")
                .setAddress("123 Main St")
                .setDeliveryDate("10/10/2023");