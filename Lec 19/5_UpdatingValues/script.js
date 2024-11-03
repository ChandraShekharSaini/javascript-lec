let reduce = document.querySelector('.reduce')
let cnvalue = document.querySelector('.cnValue')
let increase = document.querySelector('.increase')

console.log(reduce)
console.log(cnvalue)
console.log(increase)



reduce.addEventListener('click',()=>{
    if(cnvalue.innerText>0){
        cnvalue.innerText = parseInt(cnvalue.innerText)-1
    }
})

increase.addEventListener('click',()=>{
    if(cnvalue.innerText<5){
        cnvalue.innerText = parseInt(cnvalue.innerText)+1;
    }
})

