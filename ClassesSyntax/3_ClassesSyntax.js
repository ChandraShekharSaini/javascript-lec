
class Student {
    constructor(name, age, marks) {
        this.name = name;
        this.age = age;
        this.isBalik = function () {
            return age >= 18
        }
    }
    
    printDetails() {
        console.log('Name:', this.name, 'Age:', this.age, 'Marks:', this.marks)
    }
}

let uday = new  Student("Uday", 17, 90);
console.log(uday)
console.log(Student.prototype)
console.log(uday.__proto__ == Student.prototype)


console.log(uday instanceof  Student)
console.log(typeof Student)


if (uday.isBalik()) {
    console.log("Uday Balik Nahi he")
}
else {
    console.log("Uday Balik  he")
}