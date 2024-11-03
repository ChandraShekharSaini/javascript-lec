let url = "https://www.movies/pagal/video.mp4"
let p = new Promise(function (resolve, reject) {

    setTimeout(function () {
        let extension = url.split('.').pop()
        if (extension != 'mp4') reject('Wrong url');
        resolve("Correcr url");
    }, 3000);
})


p.then(function (msg) {
    console.log("Mesg aya he:", msg)
    return "Muje then ne return kiya he"
})

    .then(function (newMsg) {
        console.log(newMsg)
    })
    .catch(function (error) {
        console.log("Erro aya he:", error)
        // return "Muje catch ne return kiya he"
    })

    .finally(()=>{
        console.log(".then() ya .catch() chale ya na chale finally() chalta he ha")
    })





// .then(function (NewMsg) {
//     console.log(NewMsg)
// })
// .catch(function (error) {
//     console.log(error)
// })