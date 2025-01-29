

//2) Concatenating arrays
let num1 = [1, 3, 4, 5]
let num2 = [12, 34]
let newNum = [...num1, ...num2]
console.log(newNum)

//3) Copying an array
let mainArr = ['charger', true, false]
//addredd of memory location is different in copiedArr
let copiedArr = [...mainArr]
console.log(mainArr == copiedArr)
console.log(copiedArr)


let animals = ['dog', 'cow', 'lion']
let num = [...animals, 1, 2, 3, 4, 5]
//console.log(num)




