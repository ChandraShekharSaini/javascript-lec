let btn = document.querySelector('button');
let dbClick = document.querySelector('.double-click');
let para = document.querySelector('.para');

console.log(btn)


//addEventListener lagane se dono function  jo ke
//same element ko diya he ek saat apply hoge element per

//Function-1
btn.addEventListener('click', () => {
    console.log('button clicked')
})

//Function-2
btn.addEventListener('click', () => {
    console.log("Click again")
})