

let x = 1
function fun() {

    console.log(x)  //error
   
    let x =10

    console.log(x)
   
    x++;
}

fun();
console.log(x) //2