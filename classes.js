class School {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    printDetails() {
        console.log(`This student ${this.name} with age ${this.age} in our school`)
    }

    set Name(newName) {
        this.name = newName

    }

    get Name() {
        return this.name;
    }

    static IamStaticMethod(name) {
        let response = name == 'Chandra' ? "Its ok" : "Not ok";
        return response;
    }


}


let data1 = new School("Chandra", 60);
console.log(data1)

//GetName
console.log(data1.Name)

//SetName
data1.Name = "Chandra Shekhar Saini"

//Modified Name
console.log(data1.Name)

let response = School.IamStaticMethod("Chandr")
console.log(response)


