function loadData2(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(res=>res.json())
    .then (data => console.log(`This is from Api ${data}`))
}


function loadUser(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>displayUser(data))
}

function displayUser(info){
    for (const user of info) {
        const userName=document.getElementById('userName');
        const p=document.createElement('p')
        p.innerText=user.name;
        userName.appendChild(p)
    }
}