
let arr = [1, 2, 3, 4, 5]

Array.prototype.myReduce = function (fun, iniTialval) {

    let arr = this;
    let startIndex, acc;
    if (iniTialval) {
        acc = iniTialval
        startIndex = 0;
    }
    else {
        acc = arr[0]
        startIndex = 1
    }

    for (let i = startIndex; i < arr.length; i++) {
        acc = fun(acc, arr[i], i, arr)
    }

    return acc;
}


let x = arr.myReduce((acc, val, index, arr) => {
    return acc * val
}, 2)

console.log(x)