const data = {
    name: "abc",
    age: 23
}

// console.log(data)
// console.log()
const jsonData = JSON.stringify(data);
console.log(jsonData);
console.log(JSON.parse(jsonData));