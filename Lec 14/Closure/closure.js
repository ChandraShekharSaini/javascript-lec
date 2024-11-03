function Parent() {
    var x = 1;

    function Child() {
        console.log(x)
    }

    return Child
}


let f = Parent()
console.log(f)
f() //1



