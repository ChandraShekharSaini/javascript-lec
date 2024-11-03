function movidownload(url) {
    return new Promise(function (resolve, reject) {
        let ext = url.split('/').pop().split('.').pop();
        if (ext != 'mp4') {
            reject("Abey Sahi URL dede,Bhakk!")
        } else {
            setTimeout(function () {
                resolve(url.split('/').pop());
            }, 2000)
        }
    })
}
movidownload("myurl/avenger.mp4")
    .then(function (movie) {
        console.log(movie)
    })

    .catch(function (error) {
        console.log(error)
    })