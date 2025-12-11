// Class-Object
// a class is a blueprint or template used to create objects, defining the structure and behavior that its instances/objects will have.
// Class is used for creating object, Class is blueprint and template of a Object
// Dry = Don't repeat your self.

// const u1 = {
//     name: "abc",
// }

// const u2 = {
//     name: "def",
// }

// const u3 = {
//     name: "xyz",
// }

// Implementation of class in js.
// Constructor => It is a special type of function that is used to create a object of a class
class User {
    constructor(name, age, phone) {
        this.name = name;
        this.age = age;
        this.phone = phone
    }
    printInfo = () => {
        console.log(this.name)
        console.log(this.age)
    }
}
// this = it is used to refer current object

// {
    // name: "",
    // age,
    // phone: ""
// }

// u1 = {
            // name: "Sushil",
            // age: 21
            // phone: "9989898"
// }

const u1 = new User("Sushil", 23, 9849067761);
const u2 = new User("He", 24, 9847067761);

// console.log(u1);
// console.log(u1.name);
// console.log(u1.age);
// console.log(u1.phone);

u1.printInfo();













