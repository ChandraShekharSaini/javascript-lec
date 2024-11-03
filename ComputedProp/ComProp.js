let propName = 'c'
let propdata = 'name'
let obj = {
    a: 1,
    b: 2,
    [propName]: 3,
    [propdata]: "Chandra Shekhar Saini"
}

console.log(obj.c)//3
console.log(obj.name)//Chandra Shekhar Saini


console.log("---------------------------------------------------------------")

let name = 'fullname'
class Person {
    constructor(firstname,lastname ) {
        this.firstname = firstname
        this.lastname =lastname
    }

    get [name](){
      return  `${this.firstname} ${this.lastname}`
    }
}

let uday = new Person('uday', 'singh')
console.log(uday)

console.log(uday.fullname)