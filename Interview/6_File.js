
function Parent() {

}

function Child() {

}

Child.prototype = Object.create(Parent.prototype);

Parent.prototype.constructor = Parent;
Child.prototype.constructor = Child;

console.log(Child.prototype.__proto__== Parent.prototype)

console.log(Parent.prototype.__proto__ == Object.prototype)

console.log(object.prototype.constructor)