let id = setTimeout(() => {
    console.log("I am Great")
}, 5000, setTimeout(() => {
    clearTimeout(id)
}, 6000));

let id1 = setTimeout(() => {
    console.log("Hello bro")
},5000,setTimeout(()=>{
    clearTimeout(id1)
},6000))