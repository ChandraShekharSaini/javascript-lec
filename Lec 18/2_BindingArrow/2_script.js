
function hello(country) {
    console.log(this)

    //In arrow function this will point to parent scope
    //if parent is not present then this will point to window
    let world = () => {
        console.log("Arrow Fun",this)
    }

    world()
}

let person = {
    name: "chandra",
    age: 20

}

hello.call(person)