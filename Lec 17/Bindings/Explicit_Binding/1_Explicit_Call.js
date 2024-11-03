//Call ke binding //Call ke binding //Call ke binding //Call ke binding
//Call ke binding //Call ke binding //Call ke binding //Call ke binding

function hello(state, country) {
    //agar hello() me person1 ,person2 me update karna he tab this keyword se hoga
    this.name = "Chadra"

    //this keyword se person1 , person2 ke value ko access kar sakte he 
    console.log("Name:", this.name)
    console.log("Age:", this.age)
    console.log("State:", state)
    console.log("Country:", country)

}

let person1 = {
    name: "John",
    age: 90,
    address: "Mumbai"
}

let person2 = {
    name: "Jane",
    age: 30,
    address: "Roorkee"
}

// 1. Call ke through bind karna: Inbuilt function to change the binding inside hello
// function
// SYNTAX: hello.call(this, arguments);
// hello.call(person1); // hello ke andar jo this hoga that will point to 'person1'
// hello.call(person2, "Delhi", "India"); // hello ke andar jo this hoga that will point to 'person2'
hello.call(person1, "Uttar Pradesh", "USA")



console.log("----------------------")
console.log(person1)