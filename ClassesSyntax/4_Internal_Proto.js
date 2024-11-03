
function Student(name, age, marks) {
    this.name = name;
    this.age = age;
    this.isBalik = function () {
        return age >= 18
    }

    Student.prototype.printDetails = function () {
        console.log("Name: " + this.name + ", Age: " + this.age + ", Marks: " + this.marks);
    }

}

let uday = new Student("Chnadra", 20, 99.99, 90)

console.log(uday)

console.log(Student.__proto__)
console.log(Student.prototype)
