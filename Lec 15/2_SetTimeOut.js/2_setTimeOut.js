setTimeout(function () {
    console.log("Hello World");
}, 9000);

setTimeout(function () {
    console.log("Aur veere");

}, 4000)

//In this case setTimeout() will not execcute bec synchronous code will take more time to execute
for (let i = 0; i < 10000; i++) {
    console.log("Avada kedavara");
}