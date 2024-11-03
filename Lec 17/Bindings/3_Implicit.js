let obj = {
    a: 1,
    b: 2,
    c: "Hello",

    fun: function () {
        this.a="baba"
        console.log("data",this)
        console.log("a:", this.a)
        console.log("b:", this.b)
        console.log("c:", this.c)
        //Adding another key 'c'
        this.newkey = "world"
    },


    arr: [1, "SD", "hello"]
}

//dot opeartor se call karne par obj.fun() par function ko,function ke andar ka this
//point karta hai "obj" onject ko


//Agar ye  fun chale ga tabi to newKey Object me add hogi
// obj.fun()
console.log("--------------------------------------------")
console.log(obj)
