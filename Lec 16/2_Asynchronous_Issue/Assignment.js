
function download(cb) {
    console.log("Start Downloading")
    setTimeout(function () {
        console.log("Downloading Complete")
        cb(upload);
    }, 2000)
}

function compress(cb) {
    console.log("Start Compressing")
    setTimeout(function () {
        console.log("Compressing Complete")

        cb();
    }, 2000)
}


function upload() {
    console.log("Uploading Start")
    setTimeout(function () {
        console.log("Uploading Completed")
    }, 2000)
}



download(compress)