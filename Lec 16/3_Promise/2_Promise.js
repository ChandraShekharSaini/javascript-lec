function maggiLekarAaunga() {
  return  new Promise(function (resolve, reject) {

        setTimeout(function () {
            let dukanKhuliHai = true;

            if (dukanKhuliHai) {
                resolve("Maggi MilL Gai");
            }

            else {
                reject("Dukan Band Hai");
            }
        }, 3000)

    })

}
maggiLekarAaunga()
.then(function (msg) {
    console.log("Message aya he:",msg)
})

.catch(function (error) {
        console.log("Error aya he:",error)
})