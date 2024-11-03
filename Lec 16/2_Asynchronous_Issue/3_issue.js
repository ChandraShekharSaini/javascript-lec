// This is called callback hell bec
// so many nested function useCallback(
// will create problem in code reading 

console.log("Maggi Lene Gaya");

setTimeout(() => {
    
    let i= 10;

    console.log("Maggi lekar aa gaya");
    console.log("Maggi Banai start");

    setTimeout(function () {

        let i=1;
        console.log("Maggi Banai gai");
        console.log("Maggi Khana Start")

        setTimeout(function () {
            console.log("Maggi Khana Samapt")

            console.log(i)
        }, 2000);
    }, 2000);
}, 2000);
