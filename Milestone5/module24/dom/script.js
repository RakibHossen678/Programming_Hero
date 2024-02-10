// console.log('Data Object Model');


let liCollection=document.getElementsByTagName('li')

// console.log(liCollection);
for (const li of liCollection) {
    console.log(li.innerText);
}
console.log(document.getElementsByTagName('body')
);


const Items=document.getElementsByClassName('item')
// console.log(Items);
for (const item of Items) {
    // console.log(item);
    console.log(item.innerText);
}

const someli=document.querySelectorAll('.container li')
for (const li of someli) {
    console.log(li.innerText);
}


console.log(document.querySelector(".container li"));



