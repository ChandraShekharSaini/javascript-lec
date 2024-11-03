let btn = document.querySelector('button')
let moviesList = document.querySelector('.moviesList');
console.log(btn)
console.log(moviesList)
let movies = [
    "Avengers",
    "Spider-Man",
    "Batman",
    "Iron Man",
    "Captain America",
    "Rand Rand 3",
    "The Dark Knight",
    "The Avengers",

]

let i = 0;

btn.addEventListener('click', () => {
    if (i < movies.length) {
        moviesList.innerHTML += `<li>${movies[i]}</li>`;
        i++;
    }
    if(i==movies.length){
        let url = "https://media.tenor.com/XRaqIsw6SgcAAAAd/rahul-gandhi-khatam.gif"
         moviesList.innerHTML +=` <li><img src = ${url} /></li>`;
    }
})