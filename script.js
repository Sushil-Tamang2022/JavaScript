// var a;
// console.log("Hello World!");
// alert("Hello World!");
// document.writeln("Hi")

// userName = prompt("Enter your name");
// console.log(userName)

// Data types
// Seven types of data types are presented.

//  * Premitive data/immutable
//  * String

// fullName = "Sushil's"
// fullName = 'Sushil'
// using backtick
// fullName = `Hi, Sushil Tamang
// kajf
// lakjfdl
// `
// console.log(typeof fullName)

//  * number
// 0-9
// num = 1212
// console.log(typeof num)

//  * boolean
// true(1) and false(0) value
// isBool = false
// console.log(typeof isBool)


//  * null (empty)
// var val=null // null ko data type object hunchha yo yeuta javascript ko issue/bug ho yedi null ko data type object hunchha vane hami tyaha object data type store garchhau vanera nai syntax lekhchhau jasatai: var val= { }
// var val={
// }
// console.log(typeof val)

//  * undefined (empty)
// var a=undefined; // undefined maa hamile jun sukai type ko data rakhda pani hunchha 
// console.log(typeof a)


//  * symbol
// var id = Symbol(`hello`); // Symbol unique value banauna use garchhau, even though yeutai value pass gareni harek ko lagi naya unique value dinchha.

//  * bigInt = Thulo range ko value lai store garna, paxadi n halne
// var val=9999999999999999999989898n
// var val = BigInt(989879987899999999999999999n);
 

// * Non-Primitive data/referential data type
// * array = Collections of hetrogenuos data type in javascript that stores multiple variables in a single variable
// var nums = [1, 2, 3, 4,"hello", null, undefined] // array ko data type pani object nai hunchha
// array ma yesari basirako hunchha data
// var nums = {
//     0: 1,
//     1: 2,
//     2:3,
//     3: "hello",
//     4: null,
//     5: undefined
// }
// console.log(nums)

// * object = collections of key-value pair with hetrogenuos data type. It stores reference/address of a variable not a value.
// var user = {
//     name: "Sushil",
//     isStudent: true,
// }

// var user1 = {
//     name: "XYZ"
// }

// var user2 = {
//     name: "XYZ"
// }
// console.log(user1)
// console.log(user1 == user2)

// var a = 10;
// var b = 10;

// console.log(a == b)
// console.log(HI)


// console.log(user.isStudent);
// console.log(user.name);

// function
// basic function by using function keyword
// function function_name() {
//     console.log(`hi`)
// }

// function_name()
// console.log(function_name)
// console.log(typeof function_name)

// Date
// var data = Date()
// console.log(data.toLocaleLowerCase())

// class

// var val = 12
// var val = "Hello"
// var val = true
// var val = 2.3

// Rules for creating variables
// The method to create a variable
// a-z || A-Z
// digits:0-9
// special character _,$

// We create variable using camelCase
// var fullName = "Sushil";
// var 1num
// num1 = 10
// console.log(num1)

// _fullname = "Sushil Tamang"
// console.log(_fullname)

// var $number = 123
// console.log($number)

// We have to write the keyword like let, var and const before the variable name
// var fullName = "Sushil Tamang" // It has global scoped/global scoped variable
// console.log(fullName)
// var fullName = "Hey" // allows redeclared/update
// console.log(fullName)
// 2015 - ECMA-SCRIPT6(ES6) - is a company that maintain JS

// In ES6 it introduced let, const
// {
//     const dob = 2015 // block scope variable
// }
// dob = 56848 // redefined/redeclared not allowed
// console.log(dob)

// let x = 5
// let x = 40
// x = 10 // It is allowed/ block scope variable

// to run js file through node we can use node --watch filename

// console.log(a) //Hoisting var ma apply hunchha aru ma hudaina, define mathi gardinchha.
// let a  =10;










