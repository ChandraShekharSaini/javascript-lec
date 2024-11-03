function maggiLaao(cb) {
    console.log("Magggi lene chale gaye");
    setTimeout(function () {
        console.log("Maggi Lekar aa gaye");
        cb(maggiKhaao)
    }, 4000);
}

function maggiBanao(cb) {
    console.log("Maggi Banana start");
    setTimeout(function () {
        console.log("Maggi Bann gai")
        cb()
    }, 4000)
}

function maggiKhaao() {
    console.log("Maggi khana start")
    setTimeout(function () {
        console.log("Maggi Khana Samat")
    }, 4000);
}

maggiLaao(maggiBanao)