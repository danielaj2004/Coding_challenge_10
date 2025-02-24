// Task 1
class Product {
    constructor(name, id, price, stock) {
        this.name = name; // product name
        this.id = id; // product id
        this.price = price; // product price
        this.stock = stock; // product stock
    }
    getDetails() {
        return `Product: ${this.name}, ID: ${this.id}, Price: $${this.price}, Stock: ${this.stock}`;
    }; // product details
    updateStock(quantity) {
        this.stock -= quantity;
    }; // update stock
}; // product class
const prod1 = new Product("Laptop", 101, 1200, 10);
console.log(prod1.getDetails()); // Product: Laptop, ID: 101, Price: 1200, Stock: 10
prod1.updateStock(3);
console.log(prod1.getDetails()); // Product: Laptop, ID: 101, Price: 1200, Stock: 7
