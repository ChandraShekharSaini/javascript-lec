
class Person {
    constructor(company, car) {
        this.company = company;
        this.car = car;
    }
    
     static company;
     static car;

    static getCompany(company) {
        console.log("My Company is", this.company)
    }

    static getCar(car) {
        console.log("This is my car", this.car)
    }

}
let suv = new Person("Tata", 'nmm');

Person.getCompany();

Person.getCar();



