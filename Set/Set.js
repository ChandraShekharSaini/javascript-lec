let set = new Set()
// set.add(12)
// set.add(true)
// set.add("chandra")
// console.log(set)


// console.log(set.has("chandra"))
// console.log(set.has(12))



// console.log(set.delete("chandra"))
// console.log(set.delete(12))




// console.log(set.clear())
// console.log(set)



// console.log(set.entries())


set.add("chandra").add(12).add(true).add("Maggi")
console.log(set.keys())


set.add("chandra").add(12).add(true).add("Maggi")
let iterator = set[Symbol.iterator]()
console.log(iterator.next().value)
console.log(iterator.next().value)
console.log(iterator.next().value)