// Colección
class ProductCollection {
    constructor() {
        this.products = [];
    }

    addProduct(product) {
        this.products.push(product);
    }

    [Symbol.iterator]() {
        let index = 0;
        const products = this.products;
        return {
            next() {
                if (index < products.length) {
                    return { value: products[index++], done: false };
                } else {
                    return { done: true };
                }
            }
        };
    }
}

// Uso
const collection = new ProductCollection();
collection.addProduct("Laptop");
collection.addProduct("Smartphone");
collection.addProduct("Tablet");

for (const product of collection) {
    console.log(product);
}