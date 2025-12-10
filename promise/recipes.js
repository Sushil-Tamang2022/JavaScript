fetch('https://dummyjson.com/recipes', {
    method: "GET"
}).then((data) => {
    return data.json()
}).then((d) => {
    console.log(d)
}).catch((err) => {
    console.log(err)
}).catch((err) => {
    
})