// Colección
class ProductCollection implements Iterable<string> {
    private products: string[] = [];

    public addProduct(product: string): void {
        this.products.push(product);
    }

    [Symbol.iterator](): Iterator<string> {
        let index = 0;
        const products = this.products;

        return {
            next(): IteratorResult<string> {
                if (index < products.length) {
                    return { value: products[index++], done: false };
                } else {
                    return { done: true, value: undefined };
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