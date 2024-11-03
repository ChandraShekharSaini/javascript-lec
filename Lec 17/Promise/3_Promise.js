
function download(url) {
    return new Promise(function (resolve, reject) {
        console.log("Downloading Start from", url);
        setTimeout(function () {
            let extension = url.split('.').pop();
            if (['jpg', 'png', 'mp4'].includes(extension) != -1) {
                let img = url.split('/').pop();
                resolve(img)
            }
            else {
                reject("Abey Url to Sahi daal");
            }
        },2000);
    });
}

function compress(file) {
    return new Promise(function (resolve, reject) {

        console.log("Compression Starts of", file);
        setTimeout(function () {
            let compressedImg = file.split('.')[0] + '.zip';
            console.log("Compressing Completed", compressedImg);

            resolve(compressedImg);
        }, 2000)
    })
}

function upload(file) {

    return new Promise(function (resolve, resolve) {
        console.log("Uploading Starts of", file);

        setTimeout(function () {
            let newLink = 'http://newssitr.com' + file;

            console.log("Uploading Completed", newLink)

            resolve(newLink)
        }, 2000)
    })
}



download("http://www.movie/action/avenger.jpeg")
    .then(function (img) {
        console.log("Downloaded Image:", img)
        return img
    })
    .then(compress)
    .then(upload)
    .then(function(newLink){
        console.log("Everying Done",newLink);
    })
    
    //we will use only one catch function for all then
    .catch(function (error) {
        console.log(error)
    })