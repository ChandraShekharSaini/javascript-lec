let btn = document.querySelector('.btn');
const ul = document.querySelector('ul');
let getData = (url) => {
    return new Promise((resolve, reject) => {
        let = fetch(url)

            .then((res) => {
                let data = res.json();
                resolve(data)
            })

            .catch((error) => {
                reject(error)
            })


    })
}

btn.addEventListener('click', () => {
    getData("https://cat-fact.herokuapp.com/facts")
        .then(data => {
            console.log(data)

            ul.innerHTML = "";
            data.forEach(i => {
                let li = document.createElement('li');
                li.innerText = i.text;
                li.classList.add('edit');
                ul.appendChild(li);
            });

        })
        .catch((error) => {
            console.log(error)
        })
})