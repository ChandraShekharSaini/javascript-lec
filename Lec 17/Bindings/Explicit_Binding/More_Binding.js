function hii(){
  
     console.log(this)
     console.log(this.name)
    
}

let data = function(){
     let name = "Chandra";
     let age = 20;
}


hii.call(data)