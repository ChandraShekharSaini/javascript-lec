//id pahale he clear ho gyi he
//that why setTimeout nahi chale ga
let id = setTimeout(() => {
    console.log("I am Great")
}, 5000, setTimeout(() => {
    clearTimeout(id)
}, 3000));

let id1 = setTimeout(() => {
    console.log("Hello bro")
},5000,setTimeout(()=>{
    clearTimeout(id1)
},3000))