function add(x, y) {
    return x + y;
}

console.log(add(12, 45));

function sayHi(name) {
    return "Hello, " + name;

}

console.log(sayHi("Chandra"));


console.log("--Functions-can-be-stored-in-variable--")
let BabaJi = function chachaa(name) {
    return "Hello, " + name;
}

//will give error
// Since we invoke the function chachaa(){} by the name 'hello' there for there is no use of even writing 
// it, we can skip that part
// console.log(chachaa("Shekhar"))
console.log(BabaJi("Shehar"))

console.log("---Ano-")

let data = function (age) {
    return "You are " + age + " years old";
}

console.log(data(89))