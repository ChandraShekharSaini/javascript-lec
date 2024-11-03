function Person(name) {
    if (!new.target) {

        throw "must use new operatoe to call Person"

    }
    console.log(new.target)
    this.name = name;
    console.log(name)

}

let p = Person("Chandra")




