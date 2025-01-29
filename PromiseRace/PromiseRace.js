
let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("First Promise is Resolve")

        resolve({name:"Chnadra",age:20})
    }, 1000)
})

let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {

        console.log("Secound Promise is Resolved")
        resolve(20)
    }, 500)
})

let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {

        console.log("Third Promise is Resolved")
        resolve(30)
    }, 3000)
})

let result = Promise.race([p1, p2, p3]).then((data) => {

    console.log("Data",data) 

}).catch((error) => {
    console.log("Error",error)
})
