//A class expression doesn’t require an identifier after the class keyword. 
//A class expression doesn’t require an identifier after the class keyword. 
let Person = class {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

}

let uday = new Person("Babu ji", 90)
console.log(uday)


console.log(uday instanceof Person)