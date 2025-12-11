// Accessing the dom elements
// Different Type of methods to Acess the DOM
// 1. Selectors
// 2. id selector
// 3. class selectors
// 4. tag selector
// 5. querySelectors
// 6. queryAll Selector

// console.log("dom-js class");
// console.log(document)

// Using id selector
// const div = document.getElementById('second');
// console.log(div);
// console.log(div.innerText);
// console.log(div.innerHTML);

// Using by class selector
// const box = document.getElementsByClassName("box");
// console.log(box[0].innerText)
// console.log(box[1].innerText)

// Using by tag selector
// const divs = document.getElementsByTagName("div");
// console.log(divs)

// Using querySelector
// const box = document.querySelector("div"); // first node matra get garchha
// const box = document.querySelectorAll("div"); // multiple div lai get garchha
// console.log(box)

// const box = document.querySelector('#second');
// const box = document.querySelector('.box');
// const box = document.querySelectorAll('.box');
// console.log(box)

// const second = document.querySelector("#second");
// console.log(second)
// console.log(second.innerHTML);
// console.log(second.innerText);

// second.innerText = 'Hey'
// second.innerHTML = 
// `<h1>About Nepal</h1>
// <p>This is about nepal</p>
//  `

const second = document.querySelector(".parent");
// const div = document.createElement('div');
// div.innerHTML = `
// <h1>About JS</h1>
// <p>This is all about js</p>
// `

// div.classList.add("js_class");
// console.log(div)
// div.classList.remove("js_class");
// console.log(div)
second.style.border = "2px solid black";
second.style.height = "200px";
second.style.width = "200px";
second.style.borderRadius = "50%";
second.style.backgroundColor = "red";
second.style.margin = "auto";
second.style.marginTop = "100px";


