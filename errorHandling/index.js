// Error-Handling / Exception Handling
// There are two types of error
// 1. runtime error => CPU le execute garirako bela aaune error
// 2. compiletime error => compile garda kheri aaune error

// console.log(H);
// console.log(1);
// console.log(2);
// console.log(3);

// 1. EvalError
// 2. RangeError
// 3. ReferenceError
// 4. SyntaxError
// 5. TypeError

// console.log(a) // Reference error 
// let x = 100
// console.log(x.toUpperCase()) // TypeError where x is not a string toUpperCase() is not a function for number it's for string data

// syntax
// try {
//     console.log(a)
// } catch (error) {
//     // console.log(error)
//     console.log(error.name)
//     console.log(error.message)
// } finally {
//     console.log("Finally")
// }
// console.log("End")

async function getProducts() {
        try {
            let res = await fetch('https://dummyjson.com/products')
            res =await res.json();
            console.log(res);
        } catch (err) {
            console.log(err)
        }
}

console.log("Out");
getProducts();
