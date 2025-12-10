// Promise le asycschrnous banauna help garchha using then and catch
// async-await

// async function getProducts () {
//     let res = await fetch('https://dummyjson.com/products');
//     res = await res.json();
//     console.log(res);
// }

const getProducts = async () => {
    let res = await fetch('https://dummyjson.com/products');
    res = await res.json();
    console.log(res);
}
getProducts()

