fetch('https://dummyjson.com/todos', {
    method: "GET"
}).then((data) => {
    return data.json()
}).then((d) => {
    const returnData = d.todos.filter((item) => {
        return item.completed === true;
    });
    console.log(returnData)
}).catch((err) => {
    console.log(err)
})