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

// Task 2
class Order {
    constructor(orderId, product, quantity) {
        this.orderId = orderId; // order id
        this.product = product; // product
        this.quantity = quantity; // quantity
        this.product.updateStock(quantity); // update stock
    }
    getOrderDetails() {
        return `Order ID: ${this.orderId}, Product: ${this.product.name}, Quantity: ${this.quantity}, Total Price: $${this.product.price * this.quantity}`;
    }; // order details
};// order class
const order1 = new Order(501, prod1, 2);
console.log(order1.getOrderDetails()); // Order ID: 501, Product: Laptop, Quantity: 2, Total Price: 2400
console.log(prod1.getDetails()); // Product: Laptop, ID: 101, Price: 1200, Stock: 5
