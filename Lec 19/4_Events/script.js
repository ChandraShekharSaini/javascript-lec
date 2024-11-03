let b = document.querySelector('button');
let dbClick = document.querySelector('.double-click');
let para = document.querySelector('.para');
console.log(b)
console.log(para)
console.log(dbClick)

//donot use onclick() ,ondblclick() etc bec
//will execute only last function
b.onclick = ()=>{
    console.log("Clicked")
}

//In this case below code will
//execute 
b.onclick = ()=>{
    console.log("I am Clicked")
}

dbClick.ondblclick = ()=>{
    console.log("I am double CLicked");
    dbClick.style.background = "red"
}



// para.onmouseenter= ()=>{
//     console.log("para")
//     para.classList.add('mouse-enter')
// }

// para.onmouseleave = ()=>{
//     para.classList.remove('mouse-enter')
// }