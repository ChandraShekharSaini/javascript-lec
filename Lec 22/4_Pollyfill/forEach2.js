let arr = [1, 2, 3, 4, 5, 6]; //object
let arr1 = [1, 2, 3, 4, "Hello", 6]; //objectF

Array.prototype.meraForEach = function (fun) {
    // let arr = this;
    // fun = (data,indx,arr)=>{
    //     console.log("Index:",indx,"Data:",data,"Arr:",arr);
    // }

    let arr = this;
    for (let i = 0; i < arr.length; i++) {

        fun(arr[i],i,arr);
    }
}
//obj.fun() --> fun ke andar ka {this} keyword obj ko point kar raha he
arr.meraForEach((data, indx, arr) => {
    console.log("Index:", indx, "Data:", data, "Arr:", arr);
})