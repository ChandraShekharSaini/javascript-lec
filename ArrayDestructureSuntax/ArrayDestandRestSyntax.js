//Array Destructuring Assignment and Rest syntax
//Array Destructuring Assignment and Rest syntax

function getScore() {
    return [12, 3, 4, 5, 66]
}

let [x, y, z, ...args] = getScore();
console.log(x)
console.log(y)
console.log(z)
console.log(args)