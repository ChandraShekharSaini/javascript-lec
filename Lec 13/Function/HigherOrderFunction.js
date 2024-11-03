//Case:1 //Case:1 //Case:1 //Case:1 //Case:1 //Case:1

function outerFun() {
    //inner functuion
    function innerFun() {
        console.log("I am Inner function");
    }

    return innerFun;
}

let f = outerFun()
console.log(f)
f();



