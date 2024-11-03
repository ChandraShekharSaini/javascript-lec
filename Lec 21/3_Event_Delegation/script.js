let container = document.querySelector(".container")
let itemList = document.querySelectorAll('.iteam')

// itemList.forEach((item) => {
//     item.addEventListener('click', () => {
//         console.log(item.innerText)
//     })
// })

container.addEventListener('click', (ev) => {
    let item = ev.target;
    let val = item.innerText;
    console.log(val)
});

