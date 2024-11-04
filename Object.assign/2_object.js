let obj1 = {
    width: "100px",
    height: "200px",
    border: "2px solid red"
}

let obj2 = {
    boxShadow: "5px 5px 10px gray",
    height: "300px"
}

let object = Object.assign({} ,obj1,obj2)
console.log(object)