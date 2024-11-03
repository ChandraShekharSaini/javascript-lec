function hello(company, unit) {
    console.log("Product:", this.name)
    console.log("Cost:", this.cost)
    console.log("Company:", company)
    console.log("Manufacturing Unit:", unit)
}

let chocolate = {
    name: "Amul DarK Chocolate",
    cost: 150
}

let bisciit = {
    name: "Dark Fantasiy",
    cost: 90
}
// Bind immediately function ko call nahi krta
// instant vo aapko function return kr deta hai that can be called
// later on
// let f = hello.bind(person1);
// f("Delhi","Nigeria");


let f1 = hello.bind(chocolate, "ITC", "Agra Sector:8")
console.log(f1)
f1()

//kuch argument ko ham binding ke time daal kar sakte he
// let f1 = hello.bind(chocolate, "ITC", "Agra Sector:8")
// console.log(f1)
//OR kuch arguments ko object calling ke time
// f1("Agra Sector:8")

