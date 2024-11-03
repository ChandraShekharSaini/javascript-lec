let body = document.querySelector('body');
let nav = document.querySelector('nav')

function scrollKaEvent() {
    console.log("Scrolling")
}

window.addEventListener('scroll',debounce(scrollKaEvent, 2000));

function debounce(fun, delay) {
    let id;
    return function () {
    
        console.log("Old id", id)
         id = setTimeout(() => {
            fun();
        }, delay)

        console.log("New Id", id)
    }
}



