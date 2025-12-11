class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class Student extends User {
    constructor(name, age, college) {
        super(name, age);
        this.college = college;
    }
}

const s1 = new Student("Sushil", 23, "NIRVANA")
console.log(s1)

// class Employee {
//     constructor(name, age, field) {
//         super(name, age)
//         this.field = field;
//     }
// }

