let btn = document.querySelector('.btn')

function scrollKaEvent() {
    console.log("Clicked")
}


btn.addEventListener('click', throttling(scrollKaEvent, 5000));


function throttling(fun, delay) {

    let initialTime = 0;
    return function () {
        if (new Date().getTime() - initialTime >= delay) {
            initialTime = new Date().getTime()
            fun(); 

        }else{
            console.log("Request will not send")
        }
    }
}