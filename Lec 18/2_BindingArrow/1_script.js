let obj = {
    a: 1,
    b: 2,
    fun:()=> {
        console.log(this)
        //this will points to parent scope  
        this.name = "Chandra"
    }
}

//fun ke andar ka this obj ko call karega
obj.fun()

console.log(obj)