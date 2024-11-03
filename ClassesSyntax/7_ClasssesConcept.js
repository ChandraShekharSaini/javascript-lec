class Student {
    constructor(name, age) {
        this.age = name;
        this.name = age;
    }


    printDetails() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }

    get StudentName() {
        return this.name;
    }

    set StudentName(name) {
        this.name = name
    }
}

let uday = new Student("Uday", 20)
let rahul = new Student("Rahul", 21)

console.log(uday)
uday.printDetails()
console.log(rahul)
rahul.printDetails()


