//Case 2 //Case 2 //Case 2//Case 2 //Case 2
function outerFun() {
    //inner functuion
    function innerFun() {
        console.log("I am Inner function");
        // Function ke andar se kch return na krne par it return undefined by default
        return 90;
    }

    return innerFun(); //innerFun() = undefined
}
let f = outerFun() //undefined
console.log(f); //undefined


