function getScore() {
    return [12, 34, 4, 56, 34, 55]
}

let score = getScore();
//Destructuring Syntax
let [z, x, y, a, b, c] = getScore()

console.log(z)
console.log(x)
console.log(y)
console.log(a)
console.log(b)
console.log(c)


// let x = data[0]
// let y = data[1]
// let z = data[2]
// console.log(x, y, z)