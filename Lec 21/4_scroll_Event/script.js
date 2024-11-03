let body = document.querySelector('body');
let nav = document.querySelector('nav')

window.onscroll = () => {
    console.log(window.scrollY)
    if (window.scrollY > 260) {
        nav.style.backgroundColor = "black"
    } else {
        nav.style.backgroundColor = "white"
      
    }
}

window.onscrollend = (event) => {
    if (window.scrollY > 3652) {
        nav.style.backgroundColor = "orange"
        nav.style.color="white"
    }
};


// body.onscroll = (ev) => {
//     console.log(window.scrollY)
//     if (window.scrollY > 232) {
//         nav.backgroundColor = "black"
//     } else {
//         nav.backgroundColor = "white"
//     }

// }

