function Parent() {
    var x = 1;

    function Child() {
        console.log(x)
    }

    return console.log(Child) //clg return undefined by default
}

let f = Parent()
console.log(f) //undefined
