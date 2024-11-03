class Vehicle {
    constructor() {

    }
}
class Car extends Vehicle{
    constructor() {

    }
}

console.log(Car.prototype.__proto__ == Vehicle.prototype)

Vehicle.prototype.__proto__  == Function.prototype