//Only LHS will get Hoist //Only LHS will get Hoist
//Only LHS will get Hoist //Only LHS will get Hoist
function hello() {
    console.log("I am hello")
}

var x;

var SayHi;

hello();

console.log(x) //undefined

x = 10;

console.log(x) //10

 //undefined

sayHi = function () {
    console.log("I am Say Hi")
}

console.log(sayHi)



