class Order {
    private String product;
    private String address;
    private String deliveryDate;
    
    private Order(Builder builder) {
        this.product = builder.product;
        this.address = builder.address;
        this.deliveryDate = builder.deliveryDate;
    }

    public static class Builder {
        private String product;
        private String address;
        private String deliveryDate;

        public Builder(String product) {
            this.product = product;
        }
        public Builder setAddress(String address) {
            this.address = address;
            return this;
        }
        public Builder setDeliveryDate(String deliveryDate) {
            this.deliveryDate = deliveryDate;
            return this;
        }
        public Order build() {
            return new Order(this);
        }
    }
}
public class builder {
    public static void main(String[] args) {
        Order order = new Order.Builder("Laptop")
                            .setAddress("123 Main St")
                            .setDeliveryDate("10/10/2023")
                            .build();
    }
}