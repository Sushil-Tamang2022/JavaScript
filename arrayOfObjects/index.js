const products = [
 { id: 1, name: "Laptop", category: "Electronics", price: 1200, stock: 10 },
 { id: 2, name: "Phone", category: "Electronics", price: 800, stock: 20 },
 { id: 3, name: "Shoes", category: "Fashion", price: 150, stock: 50 },
 { id: 4, name: "Watch", category: "Fashion", price: 200, stock: 30 },
 { id: 5, name: "Bag", category: "Fashion", price: 100, stock: 40 },
 { id: 6, name: "Headphones", category: "Electronics", price: 150, stock: 15 },
 { id: 7, name: "Keyboard", category: "Electronics", price: 100, stock: 25 },
 { id: 8, name: "T-shirt", category: "Fashion", price: 50, stock: 100 },
 { id: 9, name: "Monitor", category: "Electronics", price: 300, stock: 5 },
 { id: 10, name: "Sunglasses", category: "Fashion", price: 80, stock: 60 },
];

// 1. Create an array of objects with only name and price.
// const nameAndPrice = products.map(item => ({
//     name: item.name,
//     price: item.price
// }))

// console.log(nameAndPrice)

// 2. Increase the price of all products by 10% and return the updated array.
// const updatedProducts = products.map(item => ({
//     ...item,
//     price: item.price * 1.10
// }))
// console.log(updatedProducts)

// 3. Get all products in the "Electronics" category.
// const electronicsProducts = products.filter(item => item.category === "Electronics")
// console.log(electronicsProducts)

// 4. Get all products with a price greater than 200.
// const expensiveProducts = products.filter(item => item.price > 200);
// console.log(expensiveProducts);

// 5. Get all products that are out of stock (stock = 0).
// const outOfStockProducts = products.filter(item => item.stock === 0);
// console.log(outOfStockProducts)

// 6. Calculate the total stock of all products.
// const totalStock = products.reduce((total, item) => total + item.stock, 0);
// console.log(totalStock);

// 7. Calculate the total price of all products combined.
// const totalPrice = products.reduce((total, item) => total + item.price, 0)
// console.log(totalPrice)

// 8. Find the most expensive product.
// const mostExpensive = products.reduce((max, item) => {
//     return item.price > max.price ? item : max;
// });
// console.log(mostExpensive);

// 9. Find the product with the name "Shoes".
// const shoesProduct = products.find(item => item.name === "Shoes");
// console.log(shoesProduct);

// 10. Find the first product with stock less than 10.
// const lowStockProduct = products.find(item => item.stock < 10);
// console.log(lowStockProduct)

// 11. Print the name of each product in the console.
// products.forEach(item => {
//     console.log(item.name)
// })

// 12. Print all products with a custom message: "Product: <name>, Price: <price>".
// products.forEach(item => {
//     console.log(`Product: ${item.name}, Price: ${item.price}`)
// })

// 13. Reduce the stock of each product by 1 (simulate selling one item).
const updatedStockProducts = products.map(item => ({
    ...item,
    stock: item.stock - 1
}))
console.log(updatedStockProducts)

echo "# JavaScript" >> README.md
git init
git add indexhtml
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/Sushil-Tamang2022/JavaScript.git
git push -u origin main