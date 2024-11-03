let arr = [1, 2, 3, 4, 5]

Array.prototype.myReduce = function (fun) {
    let arr = this
    let acc = arr[0]
    for (let i = 1; i < arr.length; i++) {
        acc = fun(acc, arr[i], i, arr);
    }
    return acc;
}

let x = arr.myReduce((acc, val, index, arr) => {
    return acc * val;

})

console.log(x)