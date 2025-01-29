class Vehicle {
    constructor() {

    }
}
class Car extends Vehicle {
    constructor() {

    }
}

console.log(Car.prototype.__proto__ == Vehicle.prototype)

Vehicle.prototype.__proto__ == Function.prototype

console.log(typeof Car)
console.log(typeof Function)
console.log(typeof Array)
console.log(typeof undefined)
console.log(typeof null)
console.log(typeof -Infinity)
console.log(true + true + 1)

