let arr = [1,2,3,4,5]

let newArr = arr.filter((val ,index ,arr)=>{
      if(val%2!=0) return val;
      return false
})

console.log(newArr)

let NayaArr = arr.filter((val,index,arr)=>{
    console.log("Val",val, "Index",index,"Arr",arr)
    if(val%2==0) return val;
      return false;
})

console.log(NayaArr)