fetch('https://dummyjson.com/comments', {
    method: "GET"
}).then((data) => {
    return data.json();
}).then((d) => {
    const updatedData = d.comments.filter((item) => {
        return item.likes > 5
    })
    console.log(updatedData)
}).catch((err) => {
    console.log(err)
})