var i;
function fun() {
    var x;
    console.log(x) //undefined
    x = 10;
    console.log(x) //10
}

fun()

for (var i = 0; i < 10; i++) {

}

console.log(i) // i=10
// console.log(x) //error