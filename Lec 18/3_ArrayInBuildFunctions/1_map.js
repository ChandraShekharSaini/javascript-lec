let arr = [1, 2, 3, 4, 5, 6]
let newArr = arr.map(function (val, index, arr) {
    console.log("Val", val, "Index", index, "Arr", arr)
    return val * val;

})
console.log(newArr)

//arrow function me ye return hota he without mention  return keyword

let newarr = newArr.map((val) => val * val);

console.log(newarr)


let boolArr = arr.map((val) => {
    if (val % 2 == 0) return true
    else return false;
})

console.log(boolArr)