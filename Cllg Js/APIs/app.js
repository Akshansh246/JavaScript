let ul = document.querySelector('ul')

fetch('https://fakestoreapi.com/products')
            .then((data)=>{
                return data.json()
            })            
            .then((res)=>{
                console.log(res)
                show(res)
            })


function show(res) {
    for (const i of res) {
        let li = document.createElement('li')
        let h2 = document.createElement('h2')
        li.innerText = i.id
        h2.innerText = i.title
        ul.append(li,h2)
    }
}