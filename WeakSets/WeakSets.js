//object
let computer = { name: "Viktos" }
//object
let car = { name: "XUV AG" }
let hardware = new WeakSet([computer , car])
if (hardware.has(car)) {
    console.log("Yes i have car")
}
