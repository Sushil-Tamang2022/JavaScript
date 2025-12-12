// array Destructuring: yeuta array or object bhitra vako value lai different variable bhitra rakhna sakchhau, it might be array and object
// const arr = [1, 2, 3, 4, 5]
// const [a, b, c, d] = arr
// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)

// const user = {
//     name: "Abc",
//     age: 20
// }
// const {name, age} = user
// console.log(name)
// console.log(age)

// Rest & Spread Operator (...)
// 1. Spread Operator: it doesn't need function
// Spread Operator: yeuta array ko or object bhitra ko items haru lai arko variable maa copy garchha
// const arr = [1, 2, 3, 4, 5];
// const another = [100, 200, 300, ...arr]
// const another = [100, 200, 300].concat(arr)
// console.log(another)
// const user1 = {
//     name: "abc",
//     age: 20,
//     p1: 111111
// }

// const user2 = {
//     phone: 9849067761,
//     p1: 22222222,
//     ...user1 // key value lai nikaalera arko array or object ma rakhidinchha
// }

// console.log(user2)


// Rest Operator
// function add(...list) { // multiple parameter lai yeutai name maa array ko form ma rakhchha
//     console.log(list)
//     return `Sum: ${list.reduce((acc, item) => acc + item, 0)}`
// }

// console.log(add(10, 20, 30, 40, 50, 60, 70, 80, 90))

// Write a arrow function that will take n natural number and find the sum of even number from that.
// const sum =(...list) => {
//     return list.reduce((acc, item) => {
//         const result = item.forEach((element) => {
//             if (element % 2 === 0) {
//                 acc + element
//             }
//         });
//         // if (item % 2 === 0) {
//         //     acc + item
//         // }
//     }, 0)
// }
// console.log(sum(10, 20, 30, 40, 2, 3, 4, 5, 6, 7, 8, 9, 10))



// Write a arrow function that will take n natural number and find the sum of even number from that.
// const add = (...list) => {
//     let evens = list.filter(item => item % 2 === 0)
//     return evens.reduce((acc, item) => acc + item, 0)
// }

// console.log(add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))

// const add = (...list) => {
//     return list.filter(item => item % 2 === 0).reduce((acc, item) => acc + item, 0)
// }

// console.log(add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))
