let movies = document.querySelectorAll('.movies');

console.log(movies)

// movies.forEach((item)=>{
//     item.style.color = 'red';
//     item.style.fontSize = '30px';
//     item.style.background = "black"
//     item.style.listStyle= "none"
// })

let body = document.querySelector('body')

let x = 1;

let id = setInterval(() => {

    x = 1-x
    if (x) {
        
        body.style.background = 'black'
        body.style.color = 'white'
    } else {
        body.style.background = 'gray'
        body.style.color = 'black'
    }

}, 1000)


