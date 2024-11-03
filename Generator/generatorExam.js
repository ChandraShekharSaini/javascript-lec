
function* myGenerator(start, end, step) {
    for (let i = start; i <= end; i += step) {
        yield i;
    }
}


let itr = myGenerator(0, 10, 2)
console.log(itr.next())

for (let val of itr) {
    console.log(val)
}