//in IDE in Default binding this keyword will point to parent scope
// function Hi() {
//     console.log(this)
// }

// Hi()



function outerFun(obj) {
   
    console.log("OuterFun",this.age)
  
    function innerFun() {
        //default binding
        console.log(this)
        console.log(this.age)
    }

    innerFun()
}

let obj = {
    name: 'John',
    age: 89
}

outerFun(obj)