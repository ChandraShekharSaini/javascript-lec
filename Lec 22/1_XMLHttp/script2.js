let btn = document.querySelector('.btn');
const ul = document.querySelector('ul');
let getData = (url) => {
    return new Promise((resolve, reject) => {
        let xml = new XMLHttpRequest();
        xml.open('GET', url);

        xml.onload = (res) => {
            let data = res.target.response
            data = JSON.parse(data)
            resolve(data);
        }

        xml.onerror = (error) => {
            reject(error);
        }

        xml.send();
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
                ul.appendChild(li);
            });

        })
        .catch((error) => {
            console.log(error)
        })
})