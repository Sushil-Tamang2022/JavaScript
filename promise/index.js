// console.log("hello");
// console.log("hello");
// console.log("hello");
// console.log("hello");
// console.log("hello");
// console.log("hello");

// // async - await
// fetch("https://dummyjson.com/products").then((data) => {
//     return data.json()
// }).then((data) => {
//     console.log(data)
// })


// // json data type key ma string diney
// const jsondata = {
//     "name": "Sushil",
//     "age": 23
// }


// Promise is used for making asynchronous programing
// file read
// fetching data from api

// promise has three state, it returns
// 1. pending
// 2. fullfilled
// 3. reject

// to create a promise
// promise is a built in Object

// const p = new Promise((resolve, reject) => {
//     let isRead = false;
//     if (isRead) {
//         resolve("Data is read")
//     } else {
//         reject("Data is not read")
//     }
// })

// p.then((data) => {
//     console.log(data)
// }).catch((err) => {
//     console.log(err)
// })

// API => Application Programming Interface, sabai request and response API through nai aaune jane garchha.
// frontEnd(html+css+js+react)-----API-----backEnd(nodejs, Django)-----database(mongodb, mySql)

// syntax for API
// fetch('api-url', {
//     method: "GET" == read
//     method: "POSt" == create
//     method: "DELETE" == delete
//     method: "PUT" == update all fields
//     method: "PATCH" == update single data or field
// })

// httpMethod(protocol) = https
// domainName = dummyjson.com
// endPoint = products

// url = (http method + domain-name + endPoint)
// methods of http
// 1. GET = to read data from the Database
// 2. POST = to create/store in Database
// 3. PUT = to make update in Database/ Updates all the field from the database
// 4. PATCH = to make update if we need to update single field/data
// 5. DELETE = to delete the data from the Database.

// abc - user
// fetch('https://abc.com/users', {
//     method: "GET"
// })

// time lagne sabai code le promise return garchha
fetch('https://dummyjson.com/products', {
    method: "GET"
}).then((data) => {
    return data.json(); // it converts
}).then((d) => {
    console.log(d.products[0].id);
    console.log(d.products[0].title);
    console.log(d.products[0].price);
}).catch((err) => {
    console.log(err);
})


