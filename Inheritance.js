
function company(name) {
    this.name = name;
}

company.prototype.revenu = function () {
    console.log("This is name:", this.name)
}

function laptop(name) {
    this.name = name;
    company.call(this , name)
}

laptop.prototype = Object.create(company.prototype)
laptop.prototype.constructor = company


laptop.prototype.printName = function () {
    console.log("This is laptop name:", this.name)
}


let data1 = new laptop("HP")
data1.printName()
data1.revenu()
