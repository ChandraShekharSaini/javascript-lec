
class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    get StudentName() {
        return this.name;
    }

    set StudentName(name) {
        this.name = name;
    }
}


let uday = new Student("Uday" , 30)

console.log(uday)

console.log(uday.StudentName)
uday.StudentName = "Chandra Shekhar Saini"

console.log(uday)