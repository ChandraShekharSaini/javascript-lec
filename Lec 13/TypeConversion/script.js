// a = 1
// b = '1'

// console.log(typeof a)
// console.log(typeof b)

// console.log(a == b) //true
// console.log(a === b)//false

// console.log("--------------------------------")
console.log("0 == \\t:", 0 == '\t'); //true , because of typeconversion
console.log("0 == \\n:", 0 == '\n'); //true , because of typeconversion
console.log("\\t==\\n:", '\t' == '\n'); //false ,because of no-typeconversion

console.log("---------------------------------")
console.log("+\\t to Number", +'\t');
console.log("+\\n to Number", +'\n');
console.log("Hellow", +'Hellow')
console.log("---------------------------------")
console.log("[] == 0", [] == 0);//true
console.log("\\t==0", '\t' == 0);//true
console.log("[] == \\t", [] == '\t'); //false
console.log("+[]== +\\t", +[] == '\t'); //true

console.log("------------------------------------")

console.log(typeof null)
console.log(typeof NaN)
console.log(typeof undefined)
console.log(typeof Infinity)