let arr = [1, 2, 3, 4, 5, 6]
Array.prototype.myMap = function (fun) {

    let arr = this;
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        let newVal = fun(arr[i], i, arr)
        newArr.push(newVal)
    }
    return newArr;
}
//arr returned from Array.prototype.myMap
let x = arr.myMap((val, index, arr) => {
    return val * val * val;
})

console.log(x)
