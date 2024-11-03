let theme = document.querySelector('.fa-solid');
let nav = document.querySelector('nav')


theme.addEventListener('click', (ev) => {
    // body.style.background = "white"
    // nav.style.background = "white"
    // nav.style.color = "black"
    // theme.style.color = "black"
    // nav.style.background = "white"
    // a.style.color = "black"


   theme.style.color = "black"
   
   nav.classList.remove('navTheme-Dark')
   nav.classList.add('navTheme-Light')
  
//    nav.classList.toggle('navTheme-Dark')
 
  
  
})

console.log(theme)