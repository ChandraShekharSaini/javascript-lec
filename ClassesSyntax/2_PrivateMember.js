
function Student(name, age, marks1, marks2) {
    this.name = name;
    this.age = age;
    this.marks1 = marks1;

    //But i want make marks2 private
    this.hideMarks = function () {
        this.marks2 = marks2
        console.log(this.marks2)
    }
}

let data = new Student("Chandra", 20, 99.99, 90)

console.log(data)

data.hideMarks()