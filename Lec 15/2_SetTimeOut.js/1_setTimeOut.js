//setTimeOut javascript ke thread ko block nahi karega
//delay ko browser ke uper dal dega
setTimeout(function(){
    console.log("--------------------------")
    console.log("I am giving delay of 5 sec")
},5000)

//these lines still execute
console.log("Hi")
console.log("Hi I am great")
console.log("I am bro")
console.log("I am mahana")