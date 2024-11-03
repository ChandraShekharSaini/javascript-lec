let arr = [1, 2,3,4,5]

let newArr = arr.reduce((acc, val, index, arr) => {
    console.log("Accumulator", acc, "Value", val, "Index", index, "Array", arr)
    return acc + val
},0)//initial value

console.log(newArr)

let NayaArr = arr.reduce((val, index) => {
    return val*index
},)

console.log(NayaArr)