fetch('https://dummyjson.com/posts', {
    method: "GET"
}).then((data) => {
    return data.json()
}).then((d) => {
    // 1. Use map to extract only the titles of all posts.
    const updatedData = d.posts.forEach(element => {
        console.log(element)
    });
}).catch((err) => {
    console.log(err)
})