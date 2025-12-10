let x = 10
let y = 20
let z = 30

let user = {
    name: "abc",
    age: 23
}

const products = [
    {
        name: "iPhone",
        price: 100000
    }
]

const add = (a, b) => {
    return `Sum: ${a + b}`
}

const sub = (a, b) => {
    return `Sub: ${a - b}`
}

const mul = (a, b) => {
    return `Mul: ${a * b}`
}

const div = (a, b) => {
    return `Div: ${a / b}`
}

const mod = (a, b) => {
    return `Mod: ${a % b}`
}



module.exports = {x, y, user, products, add, sub, mul, div, mod}; // to get export the x variable