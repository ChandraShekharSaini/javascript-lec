class Vehicle {
    constructor(company) {
        this.company = company;
    }
}

//Car tab tak create  nahi ho sakti jab tak Vehicle na create
//ho gaye
class Car extends Vehicle {
    constructor(company, name, price) {
        super(company);
        this.name = name;
        this.price = price;
    }
}

class Suv extends Car {
    constructor(company, name, price, type) {
        super(company, name, price);
        this.type = type
    }
}
let maruti = new Car("Maruti", "Lord Alto", 100);
// let owner = new Vehicle("BMW")
// console.log(owner)
console.log(maruti)

let  suv = new Suv("BMW", "X5", 50000, "SUV");
console.log(suv)