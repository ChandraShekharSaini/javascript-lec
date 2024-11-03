class Person {
    constructor(iteam, quantity) {
        this.iteam = iteam;
        this.quantity = quantity;
        this.constructor.count++;
    }

    static count = 0;

    static getCount(){
        return this.count;
    }
}

let pen = new Person("Pen", 10)
let book = new Person("Book", 20)

console.log(Person.count)

console.log(Person.getCount())