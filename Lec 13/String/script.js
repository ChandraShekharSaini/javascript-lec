let str = "I am Great"
let dd = [12,"csnjc"]
for (let i = 0; i < str.length; i++) {
    console.log(str[i])
}
console.log("----------------------------")
for(let x in  str) {
//x is index        
    console.log(str[x])
}
console.log("-----------------------------")
for(let x  of str) {
//x is character    
    console.log(x)
}
for(let x  of dd) {
    //x is character    
        console.log(x)
    }
    