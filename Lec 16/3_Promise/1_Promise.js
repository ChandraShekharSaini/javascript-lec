let fullfill = true
let p = new Promise(function (resolve, reject) {
    setTimeout(function () {
        if (fullfill) {
            resolve("Vada Pura Ho gya")
        }
        else {
            reject("Vada Pura Nahi Huya")
        }
    },5000)
})

// p.then(function (msg) {
//     console.log(msg)
// })

// .catch(function (err) {
//     console.log(err)
// })

p.then(function (msg) {
    console.log("Message aya he:", msg)
}, function (err) {
    console.log("Error aya he:", err)
})