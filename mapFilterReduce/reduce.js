const products = [
    { name: "iPhone 10", price: 20000, category: "Mobile" },
    { name: "iPhone 12", price: 25000, category: "Mobile" },
    { name: "MacBook Pro", price: 120000, category: "Laptop" },
    { name: "Samsung Galaxy", price: 22000, category: "Mobile" },
    { name: "Dell Inspiron", price: 80000, category: "Laptop" }
];

const totalPrice = products.reduce((sum, product) => sum + product.price, 0);
console.log("Total Price:", totalPrice);

