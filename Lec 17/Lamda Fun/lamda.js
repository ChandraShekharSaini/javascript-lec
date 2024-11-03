let hello = () => {
    console.log(this)
    console.log(this.a)
}

this.a =10

let obj = {
    a: 30
}

hello.call(obj);