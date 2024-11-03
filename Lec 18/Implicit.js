let obj = {
    a: 1,
    b: 2,
    fun: function () {
        console.log(this)
        //this will points to outer scope of fun   
        this.name = "Chandra"
    }
}

//fun ke andar ka this obj ko call karega
obj.fun()

console.log(obj)