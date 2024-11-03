
function outerFun() {

    console.log("I am Outer", this)


    function innerFun() {

        console.log("I a inner", this)

    }
    innerFun()
}

let namkeen = function () {
    let x = 10;
    console.log("Haldiram")
}

let person = {
    name: "Chnadra"
}


outerFun.call(person);