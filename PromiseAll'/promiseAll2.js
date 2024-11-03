
let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("First Promise is Resolved")
        resolve(10);
    }, 1 * 1000)
})


let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Secound Promise is Rejected")
        reject('Failed');
    }, 1 * 2000)
})


let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Third Promise is Resolved")
        resolve(30);
    }, 1 * 3000)
})


let p = Promise.all([p1, p2, p3]).then((result) => {

    console.log(result)
})

    .catch((error) => {
        console.log(error)
    })
