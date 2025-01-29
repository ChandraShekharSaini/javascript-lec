
// function Vehicle(company) {

// }


// function Car(company, model) {

// }


// Car.prototype = Object.create(Vehicle.prototype);

// Car.prototype.constructor = Car
// Vehicle.prototype.constructor = Vehicle;




function Vehical() {

}

function Car() {

}


Car.prototype = Object.create(Vehical.prototype)
Car.prototype.constructor = Car;
Vehical.prototype.constructor = Vehical






/* Console Details

> Car.prototype.__proto__
{}
> Car.prototype.__proto__ == Vehicle.prototype
true
> Vehicle.__proto__
ƒ () { [native code] }
> Vehicle.__proto__ == Function.prototype
true

*/