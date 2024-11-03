function delayNsec(){
    let initialTime = new Date().getTime();
    while(new Date().getTime()- initialTime <1000){

    }
 }

function delay(n){
   for(let x =1;x<=n;x++ ){
      delayNsec()
   }
}
delay(5)

console.log("Hello")
console.log("Hello")
console.log("Hello")



let arr = [1, 2, 3, 4, 5]

let data = arr.reduce((acc, val, index, arr) => {
       return acc+val;
},0)
console.log(data)