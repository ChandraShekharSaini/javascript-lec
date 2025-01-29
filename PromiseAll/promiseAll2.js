
let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("First Promise is Resolve")

        resolve(10)
    }, 2000)
})

let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {

        console.log("Secound Promise is not Resolved")
        reject(20)
    }, 2000)
})

let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {

        console.log("Third Promise is Resolved")
        resolve(30)
    }, 2000)
})

let result = Promise.all([p1, p2, p3]).then((data) => {

    console.log("Data",data) //never execute if any of the promise is rejected

}).catch((error) => {
    console.log("Error",error)
})
