let set  = new Set(['1',true,12,null,obj={name:"chandra",age:78}])
console.log(set)




set.add("Mumbai")
set.add("Data")
set.add([1,2,3])

console.log(set)

console.log(set.has("Mumbai"))
console.log(set.has("Data"))

// removes all elements from the Set object.
// set.clear()

console.log(set)
// deletes an element specified by the value.
console.log(set.delete('1'))
console.log(set.delete(12))


//returns a new Iterator that contains an array of  [value, value]
let set1 = set.entries()
console.log(set1)

// returns true if an element with a given value is in the set, or false if it is not.
console.log(set.has(obj))
console.log(set.has(null))

console.log(set.keys())


let iterator = set[Symbol.iterator]()
console.log(iterator.next().value)
console.log(iterator.next().value)
console.log(iterator.next().value)


console.log(typeof set)

let result = set instanceof Set
console.log(result)

console.log(set.size)