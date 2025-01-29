class School {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.constructor.count++;
    }

    static count = 0;

    getCount() {
        return School.count;
    }
}

let data1 = new School("Chadra", 80)
let data2 = new School("Chadra", 80)
let data3 = new School("Chadra", 80)

console.log(School.count)