//setTimeout(function , timer in millisecounds, setTimeout)

let id = setTimeout(() => {
    console.log("I am Great")
}, 5000, setTimeout(() => {
    clearTimeout(id)
}, 6000));

