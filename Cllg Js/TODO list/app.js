const input = document.getElementById('input');
const button = document.getElementById('button');
const ul = document.getElementById('ul');

button.addEventListener('click', ()=>{
    let data = input.value;
    let li = document.createElement('li');
    li.innerHTML = data
    ul.append(li);
    input.value = '';
    li.addEventListener('click', ()=>{
        li.remove();
    })
})