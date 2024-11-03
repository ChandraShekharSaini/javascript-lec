//Constructor Function
function Person(name, age, occupation) {
    this.name = "John";
    this.age = 30;
    this.occupation = occupation;
}


let p = new Person("Chnadra", 20, "Software Enginering")

console.log(p)

for (let x in p) {
    console.log(p[x])
}