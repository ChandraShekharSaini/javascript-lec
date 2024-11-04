let obj1 = {
    width: "100px",
    height: "200px",
    boxShadow: "5px 5px 10px gray"
}
let obj2 = {}
let clone = Object.assign(obj2, obj1)
//referance of obj1 and obj2 is different,
//mememory allocation in heap is at diff memory location
console.log(obj1 === obj2) //false

console.log(obj1)